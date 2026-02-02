import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { jsPDF } from "jspdf";
import { allSectorsData, type SectorDetail } from "../all-sectors-data";

// Force Node.js runtime
export const runtime = "nodejs";
export const maxDuration = 60; // Increased for large PDF

// Helper function to draw duty reduction graph
function drawDutyGraph(
  doc: jsPDF,
  timeline: SectorDetail["timeline"],
  x: number,
  y: number,
  width: number,
  height: number
): void {
  const graphPadding = 8;
  const graphX = x + graphPadding;
  const graphY = y + graphPadding;
  const graphWidth = width - graphPadding * 2;
  const graphHeight = height - graphPadding * 2 - 20;
  
  const maxDuty = Math.max(...timeline.map(t => t.duty));
  const minDuty = 0;
  const dutyRange = maxDuty - minDuty;
  const scaleY = graphHeight / dutyRange;
  
  doc.setFillColor(248, 250, 252);
  doc.roundedRect(x, y, width, height, 3, 3, "F");
  doc.setDrawColor(8, 145, 178);  // Cyan-600
  doc.setLineWidth(1);
  doc.roundedRect(x, y, width, height, 3, 3, "D");
  
  const gridLines = 6;
  for (let i = 0; i <= gridLines; i++) {
    const gridY = graphY + (graphHeight / gridLines) * i;
    doc.setDrawColor(240, 240, 240);
    doc.setLineWidth(0.3);
    doc.line(graphX, gridY, graphX + graphWidth, gridY);
    
    const dutyValue = maxDuty - (dutyRange / gridLines) * i;
    doc.setFontSize(8);
    doc.setTextColor(100, 100, 100);
    doc.text(`${dutyValue.toFixed(1)}%`, graphX - 3, gridY + 2, { align: "right" });
  }
  
  const timelinePoints = timeline.length;
  const pointSpacing = graphWidth / (timelinePoints - 1);
  
  timeline.forEach((point, index) => {
    const labelX = graphX + pointSpacing * index;
    doc.setFontSize(7);
    doc.setTextColor(60, 60, 60);
    doc.text(point.label, labelX, graphY + graphHeight + 6, { align: "center" });
  });
  
  const points: { x: number; y: number; duty: number }[] = [];
  timeline.forEach((point, index) => {
    const pointX = graphX + pointSpacing * index;
    const pointY = graphY + graphHeight - (point.duty - minDuty) * scaleY;
    points.push({ x: pointX, y: pointY, duty: point.duty });
  });
  
  doc.setDrawColor(8, 145, 178);  // Cyan-600
  doc.setLineWidth(2);
  for (let i = 0; i < points.length - 1; i++) {
    doc.line(points[i].x, points[i].y, points[i + 1].x, points[i + 1].y);
  }
  
  points.forEach((point, index) => {
    if (index === 0) {
      doc.setFillColor(220, 38, 38);
    } else {
      doc.setFillColor(8, 145, 178);  // Cyan-600
    }
    doc.circle(point.x, point.y, 2, "F");
    doc.setDrawColor(255, 255, 255);
    doc.setLineWidth(0.5);
    doc.circle(point.x, point.y, 2, "D");
    
    doc.setFontSize(8);
    doc.setTextColor(8, 145, 178);  // Cyan-600
    doc.setFont("helvetica", "bold");
    doc.text(`${point.duty.toFixed(1)}%`, point.x, point.y - 5, { align: "center" });
  });
  
  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(0, 0, 0);
  doc.text("Duty Reduction Timeline (2025-2030)", x + width / 2, y + 5, { align: "center" });
}

function addWrappedText(
  doc: jsPDF,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  fontSize: number,
  lineHeight: number
): number {
  doc.setFontSize(fontSize);
  const lines = doc.splitTextToSize(text, maxWidth);
  let currentY = y;
  lines.forEach((line: string) => {
    doc.text(line, x, currentY);
    currentY += lineHeight;
  });
  return currentY;
}

// Function to generate pages 3-7 for a sector
function generateSectorPages(
  doc: jsPDF,
  sector: SectorDetail,
  sectorNumber: number,
  pageWidth: number,
  pageHeight: number,
  drawRoundedBox: any,
  drawLine: any,
  addWrappedText: any,
  drawDutyGraph: any,
  colors: any
): void {
  const { navyBlue, cyanBlue, cyanLight, lightGray, darkGray, red } = colors;
  
  // Helper to add page header
  const addPageHeader = (title: string) => {
    doc.addPage();
    doc.setFillColor(navyBlue[0], navyBlue[1], navyBlue[2]);
    doc.rect(0, 0, pageWidth, 35, "F");
    doc.setFillColor(cyanBlue[0], cyanBlue[1], cyanBlue[2]);
    doc.rect(0, 0, 6, 35, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(18);
    doc.setFont("helvetica", "bold");
    doc.text(`${sector.sector} - ${title}`, pageWidth / 2, 22, { align: "center" });
    return 50;
  };
  
  // PAGE 3: Product Catalog
  let yPos = addPageHeader("Product Catalog");
  
  sector.keyProducts.forEach((product, index) => {
    if (yPos > 240) {
      yPos = addPageHeader("Product Catalog (continued)");
    }
    
    drawRoundedBox(18, yPos - 5, pageWidth - 36, 28, lightGray, cyanBlue, 0.6);
    doc.setFillColor(cyanBlue[0], cyanBlue[1], cyanBlue[2]);
    doc.rect(18, yPos - 5, 3, 28, "F");
    
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(0, 0, 0);
    doc.text(`${index + 1}. ${product.name}`, 25, yPos + 2);
    
    doc.setFontSize(8);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(100, 100, 100);
    doc.text(`HS Code: ${product.hsCode}`, 25, yPos + 8);
    
    doc.setFillColor(255, 245, 238);
    doc.roundedRect(25, yPos + 10, 60, 6, 2, 2, "F");
    doc.setDrawColor(red[0], red[1], red[2]);
    doc.setLineWidth(0.3);
    doc.roundedRect(25, yPos + 10, 60, 6, 2, 2, "D");
    
    doc.setFontSize(8);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(red[0], red[1], red[2]);
    doc.text(`${product.oldDuty}%`, 28, yPos + 14);
    doc.setTextColor(100, 100, 100);
    doc.text("→", 40, yPos + 14);
    doc.setTextColor(cyanBlue[0], cyanBlue[1], cyanBlue[2]);
    doc.text(`${product.newDuty}%`, 45, yPos + 14);
    
    doc.setFontSize(8);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(cyanBlue[0], cyanBlue[1], cyanBlue[2]);
    doc.text(`Export Value: ${product.exportValue}`, 90, yPos + 2);
    
    doc.setFontSize(8);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(60, 60, 60);
    doc.text(product.description, 25, yPos + 18);
    
    yPos += 32;
  });
  
  // PAGE 4: Duty Reduction Graph & Timeline
  yPos = addPageHeader("Duty Reduction Analysis & Timeline");
  
  drawDutyGraph(doc, sector.timeline, 20, yPos, pageWidth - 40, 100, cyanBlue);
  
  yPos = 160;
  
  drawRoundedBox(18, yPos, pageWidth - 36, 110, lightGray, cyanBlue, 0.8);
  doc.setFillColor(cyanBlue[0], cyanBlue[1], cyanBlue[2]);
  doc.rect(18, yPos, 4, 110, "F");
  
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(0, 0, 0);
  doc.text("Timeline Breakdown", 30, yPos + 10);
  
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(60, 60, 60);
  
  let timelineY = yPos + 20;
  sector.timeline.forEach((point) => {
    doc.setFont("helvetica", "bold");
    doc.setTextColor(cyanBlue[0], cyanBlue[1], cyanBlue[2]);
    doc.text(`${point.label}: ${point.duty}%`, 25, timelineY);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(60, 60, 60);
    timelineY = addWrappedText(doc, point.description, 25, timelineY + 4, pageWidth - 50, 8, 4);
    timelineY += 3;
  });
  
  // PAGE 5: Compliance Requirements
  yPos = addPageHeader("Compliance Requirements & Regulations");
  
  sector.compliance.forEach((item, index) => {
    if (yPos > 220) {
      yPos = addPageHeader("Compliance Requirements (continued)");
    }
    
    const colors = [
      [236, 253, 245],
      [239, 246, 255],
      [255, 251, 235],
      [254, 242, 242],
    ];
    
    drawRoundedBox(18, yPos - 5, pageWidth - 36, 50, colors[index % colors.length] as number[], cyanBlue, 0.6);
    doc.setFillColor(cyanBlue[0], cyanBlue[1], cyanBlue[2]);
    doc.rect(18, yPos - 5, 3, 50, "F");
    
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(0, 0, 0);
    doc.text(item.title, 25, yPos + 2);
    
    doc.setFontSize(8);
    doc.setFont("helvetica", "italic");
    doc.setTextColor(100, 100, 100);
    doc.text(item.regulation, 25, yPos + 8);
    
    doc.setFontSize(8);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(60, 60, 60);
    yPos = addWrappedText(doc, item.description, 25, yPos + 14, pageWidth - 50, 8, 4);
    
    doc.setFontSize(7);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(cyanBlue[0], cyanBlue[1], cyanBlue[2]);
    doc.text("Key Requirements:", 25, yPos + 3);
    
    doc.setFontSize(7);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(60, 60, 60);
    let reqY = yPos + 8;
    item.requirements.forEach((req) => {
      doc.text(`• ${req}`, 25, reqY);
      reqY += 4;
    });
    
    doc.setFontSize(7);
    doc.setTextColor(100, 100, 100);
    doc.text(`Timeline: ${item.timeline}`, 25, reqY + 2);
    
    yPos = reqY + 10;
  });
  
  // PAGE 6: Market Opportunities & Regional Impact
  yPos = addPageHeader("Market Opportunities & Regional Impact");
  
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(0, 0, 0);
  doc.text("Key Market Opportunities", 20, yPos);
  yPos += 10;
  
  sector.marketOpportunities.forEach((opp, index) => {
    if (yPos > 240) {
      yPos = addPageHeader("Market Opportunities (continued)");
      yPos = 50;
    }
    
    drawRoundedBox(18, yPos - 5, pageWidth - 36, 35, lightGray, cyanBlue, 0.6);
    doc.setFillColor(cyanBlue[0], cyanBlue[1], cyanBlue[2]);
    doc.rect(18, yPos - 5, 3, 35, "F");
    
    doc.setFontSize(11);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(0, 0, 0);
    doc.text(opp.title, 25, yPos + 2);
    
    doc.setFontSize(8);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(60, 60, 60);
    yPos = addWrappedText(doc, opp.description, 25, yPos + 8, pageWidth - 50, 8, 4);
    
    doc.setFontSize(8);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(cyanBlue[0], cyanBlue[1], cyanBlue[2]);
    doc.text(`Market Size: ${opp.marketSize}`, 25, yPos + 2);
    
    yPos += 8;
  });
  
  yPos += 10;
  
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(0, 0, 0);
  doc.text("Regional Manufacturing Hubs", 20, yPos);
  yPos += 10;
  
  sector.regionalImpact.forEach((region, index) => {
    if (yPos > 240) {
      yPos = addPageHeader("Regional Impact (continued)");
      yPos = 50;
    }
    
    drawRoundedBox(18, yPos - 5, pageWidth - 36, 40, [239, 246, 255], cyanBlue, 0.6);
    doc.setFillColor(cyanBlue[0], cyanBlue[1], cyanBlue[2]);
    doc.rect(18, yPos - 5, 3, 40, "F");
    
    doc.setFontSize(11);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(0, 0, 0);
    doc.text(region.region, 25, yPos + 2);
    
    doc.setFontSize(8);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(60, 60, 60);
    yPos = addWrappedText(doc, region.description, 25, yPos + 8, pageWidth - 50, 8, 4);
    
    doc.setFontSize(7);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(cyanBlue[0], cyanBlue[1], cyanBlue[2]);
    doc.text(`Key Players: ${region.keyPlayers.join(", ")}`, 25, yPos + 2);
    
    doc.setFontSize(8);
    doc.setTextColor(0, 0, 0);
    doc.text(`Export Value: ${region.exportValue}`, 25, yPos + 8);
    
    yPos += 12;
  });
  
  // PAGE 7: Case Study & Cost Savings
  yPos = addPageHeader("Case Study: Cost Savings Analysis");
  
  drawRoundedBox(18, yPos, pageWidth - 36, 200, [255, 251, 235], cyanBlue, 1);
  doc.setFillColor(cyanBlue[0], cyanBlue[1], cyanBlue[2]);
  doc.rect(18, yPos, 4, 200, "F");
  
  doc.setFontSize(16);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(0, 0, 0);
  doc.text(sector.caseStudy.title, 30, yPos + 12);
  
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(60, 60, 60);
  yPos = addWrappedText(doc, sector.caseStudy.scenario, 25, yPos + 22, pageWidth - 50, 10, 5);
  
  yPos += 5;
  
  doc.setFillColor(255, 255, 255);
  doc.roundedRect(25, yPos, pageWidth - 50, 80, 2, 2, "F");
  doc.setDrawColor(cyanBlue[0], cyanBlue[1], cyanBlue[2]);
  doc.setLineWidth(1);
  doc.roundedRect(25, yPos, pageWidth - 50, 80, 2, 2, "D");
  
  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(0, 0, 0);
  doc.text("Financial Impact Calculation", 30, yPos + 8);
  
  doc.setFontSize(9);
  doc.setFont("helvetica", "mono");
  doc.setTextColor(60, 60, 60);
  const calcLines = sector.caseStudy.calculation.split('\n');
  let calcY = yPos + 18;
  calcLines.forEach((line) => {
    doc.text(line, 30, calcY);
    calcY += 6;
  });
  
  yPos = calcY + 10;
  
  doc.setFillColor(cyanBlue[0], cyanBlue[1], cyanBlue[2]);
  doc.roundedRect(25, yPos, pageWidth - 50, 25, 3, 3, "F");
  
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(255, 255, 255);
  doc.text("Annual Savings", 30, yPos + 8);
  
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  addWrappedText(doc, sector.caseStudy.savings, 30, yPos + 16, pageWidth - 60, 10, 5);
}

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    let pdfBuffer: Buffer;
    try {
      const doc = new jsPDF();
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      
      const navyBlue = [15, 23, 42];
      const cyanBlue = [8, 145, 178];  // Cyan-600 - Modern primary color
      const cyanLight = [6, 182, 212];  // Cyan-500
      const lightGray = [248, 250, 252];
      const darkGray = [100, 100, 100];
      const red = [220, 38, 38];
      
      const colors = { navyBlue, cyanBlue, cyanLight, lightGray, darkGray, red };
      
      const drawRoundedBox = (x: number, y: number, w: number, h: number, fillColor: number[] | null, borderColor: number[], lineWidth: number = 0.5) => {
        if (fillColor) {
          doc.setFillColor(fillColor[0], fillColor[1], fillColor[2]);
          doc.roundedRect(x, y, w, h, 3, 3, "F");
        }
        doc.setDrawColor(borderColor[0], borderColor[1], borderColor[2]);
        doc.setLineWidth(lineWidth);
        doc.roundedRect(x, y, w, h, 3, 3, "D");
      };
      
      const drawLine = (x1: number, y: number, x2: number, color: number[] = [200, 200, 200], width: number = 0.5) => {
        doc.setDrawColor(color[0], color[1], color[2]);
        doc.setLineWidth(width);
        doc.line(x1, y, x2, y);
      };
      
      // PAGE 1: COVER
      doc.setFillColor(navyBlue[0], navyBlue[1], navyBlue[2]);
      doc.rect(0, 0, pageWidth, 60, "F");
      doc.setFillColor(cyanBlue[0], cyanBlue[1], cyanBlue[2]);
      doc.rect(0, 0, 8, 60, "F");
      
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(32);
      doc.setFont("helvetica", "bold");
      doc.text("eufta.in", pageWidth / 2, 25, { align: "center" });
      
      doc.setFontSize(11);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(200, 200, 200);
      doc.text("Rotterdam-Indo Logistics Gateway", pageWidth / 2, 35, { align: "center" });
      
      doc.setFontSize(9);
      doc.text("Comprehensive Sector Analysis: All 8 Export Sectors", pageWidth / 2, 43, { align: "center" });
      
      doc.setTextColor(0, 0, 0);
      doc.setFontSize(24);
      doc.setFont("helvetica", "bold");
      doc.text("India-EU FTA 2026", pageWidth / 2, 75, { align: "center" });
      
      doc.setFontSize(16);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(60, 60, 60);
      doc.text("Complete Market Analysis for All Export Sectors", pageWidth / 2, 88, { align: "center" });
      
      doc.setFillColor(cyanBlue[0], cyanBlue[1], cyanBlue[2]);
      doc.roundedRect(pageWidth / 2 - 70, 98, 140, 22, 4, 4, "F");
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(12);
      doc.setFont("helvetica", "bold");
      doc.text("✓ OFFICIALLY SIGNED: Jan 27, 2026", pageWidth / 2, 108, { align: "center" });
      doc.setFontSize(10);
      doc.text(`${allSectorsData.length} Sectors Analyzed`, pageWidth / 2, 118, { align: "center" });
      
      doc.setFillColor(lightGray[0], lightGray[1], lightGray[2]);
      doc.roundedRect(15, 130, pageWidth - 30, 50, 4, 4, "F");
      doc.setDrawColor(cyanBlue[0], cyanBlue[1], cyanBlue[2]);
      doc.setLineWidth(1);
      doc.roundedRect(15, 130, pageWidth - 30, 50, 4, 4, "D");
      
      doc.setTextColor(0, 0, 0);
      doc.setFontSize(14);
      doc.setFont("helvetica", "bold");
      doc.text("Sectors Covered", pageWidth / 2, 145, { align: "center" });
      
      doc.setFontSize(9);
      doc.setFont("helvetica", "normal");
      const sectorNames = allSectorsData.map(s => s.sector).join(", ");
      addWrappedText(doc, sectorNames, 25, 158, pageWidth - 50, 9, 5);
      
      drawLine(20, pageHeight - 30, pageWidth - 20, [220, 220, 220], 0.5);
      doc.setTextColor(darkGray[0], darkGray[1], darkGray[2]);
      doc.setFontSize(8);
      doc.setFont("helvetica", "normal");
      doc.text("Sanjan Venture | KVK: 86318179 | BTW: NL863929771B01", pageWidth / 2, pageHeight - 20, { align: "center" });
      doc.text("Rotterdam, Netherlands | info@eufta.in | www.eufta.in", pageWidth / 2, pageHeight - 12, { align: "center" });
      
      // PAGE 2: GENERAL OVERVIEW
      doc.addPage();
      doc.setFillColor(navyBlue[0], navyBlue[1], navyBlue[2]);
      doc.rect(0, 0, pageWidth, 35, "F");
      doc.setFillColor(cyanBlue[0], cyanBlue[1], cyanBlue[2]);
      doc.rect(0, 0, 6, 35, "F");
      
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(18);
      doc.setFont("helvetica", "bold");
      doc.text("Executive Overview: India-EU FTA 2026", pageWidth / 2, 22, { align: "center" });
      
      let yPos = 50;
      
      drawRoundedBox(18, yPos, pageWidth - 36, 200, lightGray, cyanBlue, 0.8);
      doc.setFillColor(cyanBlue[0], cyanBlue[1], cyanBlue[2]);
      doc.rect(18, yPos, 4, 200, "F");
      
      doc.setFontSize(14);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(0, 0, 0);
      doc.text("FTA Overview", 30, yPos + 10);
      
      doc.setFontSize(9);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(60, 60, 60);
      const overviewText = `The India-EU Free Trade Agreement, signed on January 27, 2026, represents the most significant trade recalibration of the decade. This comprehensive agreement provides immediate zero-duty access for over $33 billion of Indian exports across 8 major sectors. The FTA eliminates 99.5% of EU tariffs on Indian exports by trade value, creating unprecedented opportunities for Indian manufacturers and exporters.`;
      yPos = addWrappedText(doc, overviewText, 25, yPos + 18, pageWidth - 50, 9, 5);
      
      yPos += 10;
      doc.setFontSize(12);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(0, 0, 0);
      doc.text("Sectors Covered in This Report:", 25, yPos);
      
      doc.setFontSize(9);
      doc.setFont("helvetica", "normal");
      yPos += 8;
      allSectorsData.forEach((sector, index) => {
        doc.text(`${index + 1}. ${sector.sector}`, 25, yPos);
        yPos += 6;
      });
      
      // Generate pages 3-7 for each sector
      allSectorsData.forEach((sector, index) => {
        generateSectorPages(
          doc,
          sector,
          index + 1,
          pageWidth,
          pageHeight,
          drawRoundedBox,
          drawLine,
          addWrappedText,
          drawDutyGraph,
          colors
        );
      });
      
      // FINAL PAGE: Company Information
      doc.addPage();
      doc.setFillColor(navyBlue[0], navyBlue[1], navyBlue[2]);
      doc.rect(0, 0, pageWidth, 35, "F");
      doc.setFillColor(cyanBlue[0], cyanBlue[1], cyanBlue[2]);
      doc.rect(0, 0, 6, 35, "F");
      
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(18);
      doc.setFont("helvetica", "bold");
      doc.text("About eufta.in & Our Services", pageWidth / 2, 22, { align: "center" });
      
      yPos = 50;
      
      drawRoundedBox(18, yPos, pageWidth - 36, 70, lightGray, navyBlue, 1);
      
      doc.setTextColor(0, 0, 0);
      doc.setFontSize(16);
      doc.setFont("helvetica", "bold");
      doc.text("eufta.in - Rotterdam-Indo Logistics Gateway", pageWidth / 2, yPos + 12, { align: "center" });
      
      doc.setFontSize(9);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(60, 60, 60);
      const companyDesc = [
        "The definitive Rotterdam bridge for Indian D2C and B2B brands to exploit",
        "the 2026 EU-India FTA. We provide physical warehousing, Article 23 VAT",
        "deferment, and pan-European marketplace enablement.",
      ];
      
      let descY = yPos + 22;
      companyDesc.forEach((line) => {
        doc.text(line, pageWidth / 2, descY, { align: "center" });
        descY += 7;
      });
      
      doc.setFontSize(11);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(0, 0, 0);
      doc.text("Core Services:", 30, descY + 5);
      
      doc.setFontSize(9);
      doc.setFont("helvetica", "normal");
      const services = [
        "• 3PL Fulfillment: Next-day delivery across Western Europe from Rotterdam hub",
        "• Fiscal Representation: Article 23 VAT Deferment (eliminate 21% upfront tax burden)",
        "• Compliance Bridge: EFSA, EMA, REACH, CBAM regulatory expertise",
        "• Marketplace Enablement: Amazon EU5, Zalando, Bol.com, Allegro integration",
      ];
      
      let serviceY = descY + 12;
      services.forEach((service) => {
        doc.text(service, 25, serviceY);
        serviceY += 6;
      });
      
      yPos = 140;
      
      drawRoundedBox(18, yPos, pageWidth - 36, 65, [cyanBlue[0], cyanBlue[1], cyanBlue[2]], navyBlue, 1);
      
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(14);
      doc.setFont("helvetica", "bold");
      doc.text("Contact Information", pageWidth / 2, yPos + 12, { align: "center" });
      
      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      const contactInfo = [
        "Company: Sanjan Venture",
        "KVK: 86318179 | BTW: NL863929771B01",
        "Location: Rotterdam, Netherlands",
        "Email: info@eufta.in",
        "Website: www.eufta.in",
      ];
      
      let contactY = yPos + 22;
      contactInfo.forEach((line) => {
        doc.text(line, pageWidth / 2, contactY, { align: "center" });
        contactY += 8;
      });
      
      // Footer on all pages
      const totalPages = doc.getNumberOfPages();
      for (let i = 1; i <= totalPages; i++) {
        doc.setPage(i);
        drawLine(20, pageHeight - 25, pageWidth - 20, [220, 220, 220], 0.5);
        doc.setTextColor(darkGray[0], darkGray[1], darkGray[2]);
        doc.setFontSize(8);
        doc.setFont("helvetica", "normal");
        doc.text(`Page ${i} of ${totalPages}`, pageWidth / 2, pageHeight - 18, { align: "center" });
        doc.setFontSize(7);
        doc.setTextColor(150, 150, 150);
        doc.text("eufta.in | Rotterdam-Indo Logistics Gateway | Sanjan Venture", pageWidth / 2, pageHeight - 12, { align: "center" });
        doc.text("KVK: 86318179 | BTW: NL863929771B01 | info@eufta.in", pageWidth / 2, pageHeight - 6, { align: "center" });
      }

      const pdfOutput = doc.output("arraybuffer");
      pdfBuffer = Buffer.from(pdfOutput);
      
      console.log(`PDF generated successfully: ${totalPages} pages, size: ${pdfBuffer.length} bytes`);
    } catch (pdfError) {
      console.error("PDF generation error:", pdfError);
      return NextResponse.json(
        { error: `PDF generation failed: ${pdfError instanceof Error ? pdfError.message : "Unknown error"}` },
        { status: 500 }
      );
    }

    const notificationSubject = `New PDF Request: Complete Sector Analysis - ${email}`;
    const notificationHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #10b981;">New PDF Request: Complete Sector Analysis</h2>
        <p>A customer has requested the comprehensive 8-sector analysis PDF.</p>
        <div style="background-color: #f8fafc; padding: 16px; border-radius: 8px; margin: 16px 0;">
          <p><strong>Customer Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Timestamp:</strong> ${new Date().toLocaleString("en-US", { timeZone: "Europe/Amsterdam" })}</p>
        </div>
        <p style="color: #10b981; font-weight: bold;">✓ PDF has been automatically sent to the customer.</p>
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;">
        <p style="color: #6b7280; font-size: 12px;">This is an automated notification from eufta.in</p>
      </div>
    `;

    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
        
        console.log(`Sending PDF email to: ${email}, from: ${fromEmail}`);
        
        await resend.emails.send({
          from: fromEmail,
          to: email,
          subject: "Your Complete India-EU FTA 2026 Sector Analysis PDF",
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #10b981;">Thank you for your interest!</h2>
              <p>As requested, please find attached the <strong>Complete India-EU FTA 2026 Sector Analysis PDF</strong>.</p>
              <p>This comprehensive document includes detailed analysis for all 8 export sectors:</p>
              <ul>
                <li>Textiles & Apparel</li>
                <li>Pharma & Med-Tech</li>
                <li>Engineering Goods</li>
                <li>Marine Products</li>
                <li>Chemicals & Plastics</li>
                <li>Leather & Footwear</li>
                <li>Gems & Jewellery</li>
                <li>Toys & Sports Goods</li>
              </ul>
              <p>Each sector includes: Product catalog, duty reduction graphs, compliance requirements, market opportunities, regional impact, and cost savings case studies.</p>
              <p>For detailed compliance guides and logistics services, visit <a href="https://eufta.in">eufta.in</a></p>
              <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;">
              <p style="color: #6b7280; font-size: 12px;">Best regards,<br>The eufta.in Team<br>Rotterdam, Netherlands</p>
            </div>
          `,
          attachments: [{ filename: "India-EU-FTA-2026-Complete-Sector-Analysis.pdf", content: pdfBuffer }],
        });
        
        await resend.emails.send({
          from: fromEmail,
          to: "info@eufta.in",
          subject: notificationSubject,
          html: notificationHtml,
          replyTo: email,
        });

        console.log("PDF sent successfully");
      } catch (emailError: any) {
        console.error("Error sending emails:", emailError);
        return NextResponse.json(
          { error: `Failed to send email: ${emailError?.message || "Unknown error"}` },
          { status: 500 }
        );
      }
    } else {
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: "PDF has been sent to your email address." }, { status: 200 });
  } catch (error) {
    console.error("Error processing PDF request:", error);
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 });
  }
}
