import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import PDFDocument from "pdfkit";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Generate PDF
    const pdfChunks: Buffer[] = [];
    const doc = new PDFDocument({ margin: 50 });

    // Collect PDF data
    doc.on("data", (chunk: Buffer) => {
      pdfChunks.push(chunk);
    });

    // PDF Content
    doc.fontSize(20).text("India-EU FTA 2026", { align: "center" });
    doc.fontSize(16).text("Official Tariff Schedule", { align: "center" });
    doc.moveDown();
    doc.fontSize(12).text(`Date: ${new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}`, { align: "center" });
    doc.moveDown(2);

    doc.fontSize(14).text("Sector Impact Summary", { underline: true });
    doc.moveDown();

    const sectors = [
      { sector: "Textiles & Apparel", old: "12.0%", new: "0%", details: "99% of Indian exports - immediate duty elimination" },
      { sector: "Automotive", old: "110%", new: "10%", details: "Quota: 250,000 units/year over 5 years" },
      { sector: "Wines & Spirits", old: "150%", new: "20-30%", details: "Wine: 20% premium, 30% mid-range. Spirits: 40%" },
      { sector: "Machinery", old: "Up to 44%", new: "0%", details: "Complete elimination for Indian buyers" },
      { sector: "Pharma & Med-Tech", old: "11.0%", new: "0%", details: "QP Batch Release required" },
      { sector: "Engineering Goods", old: "22.0%", new: "0%", details: "CE Certification required" },
      { sector: "Marine Products", old: "26.0%", new: "0%", details: "Veterinary Inspection via BCP" },
      { sector: "Chemicals & Plastics", old: "12.8%", new: "0%", details: "REACH OR registration required" },
    ];

    sectors.forEach((sector, index) => {
      doc.fontSize(12).text(`${index + 1}. ${sector.sector}`, { continued: false });
      doc.fontSize(10).text(`   Previous Duty: ${sector.old} → New Duty: ${sector.new}`, { indent: 20 });
      doc.fontSize(9).text(`   ${sector.details}`, { indent: 20 });
      doc.moveDown(0.5);
    });

    doc.moveDown();
    doc.fontSize(12).text("Key Highlights", { underline: true });
    doc.moveDown();
    doc.fontSize(10).text("• EU Tariff Elimination: 99.5% of Indian exports by trade value");
    doc.text("• India Tariff Elimination: 92.1% of tariff lines");
    doc.text("• Combined GDP: USD 24 Trillion");
    doc.text("• Total Goods Trade: USD 136.54 Billion");
    doc.text("• Indian Exports (Duty-Free): $33 Billion immediately");
    doc.moveDown();

    doc.fontSize(10).text("For complete details and compliance requirements, visit: eufta.in", { align: "center" });
    doc.moveDown();
    doc.fontSize(8).fillColor("gray").text("This document is generated automatically. For official documentation, refer to the final agreement text.", { align: "center" });

    // Wait for PDF to be generated
    const pdfBuffer = await new Promise<Buffer>((resolve, reject) => {
      doc.on("end", () => {
        resolve(Buffer.concat(pdfChunks));
      });
      doc.on("error", reject);
      doc.end();
    });

    // Send email notification to info@eufta.in
    const notificationSubject = `New PDF Request: 2026 Tariff Schedule - ${email}`;
    const notificationHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #10b981;">New PDF Request: 2026 Tariff Schedule</h2>
        <p>A customer has requested the 2026 Tariff Schedule PDF.</p>
        <div style="background-color: #f8fafc; padding: 16px; border-radius: 8px; margin: 16px 0;">
          <p><strong>Customer Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Timestamp:</strong> ${new Date().toLocaleString("en-US", { timeZone: "Europe/Amsterdam" })}</p>
        </div>
        <p style="color: #10b981; font-weight: bold;">✓ PDF has been automatically sent to the customer.</p>
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;">
        <p style="color: #6b7280; font-size: 12px;">This is an automated notification from eufta.in</p>
      </div>
    `;

    // Send PDF to customer and notification to info@eufta.in
    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        
        // Send PDF to customer
        await resend.emails.send({
          from: process.env.RESEND_FROM_EMAIL || "info@eufta.in",
          to: email,
          subject: "Your 2026 India-EU FTA Tariff Schedule PDF",
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #10b981;">Thank you for your interest!</h2>
              <p>As requested, please find attached the <strong>2026 India-EU FTA Tariff Schedule PDF</strong>.</p>
              <p>This document includes:</p>
              <ul>
                <li>Complete sector-wise duty elimination schedules</li>
                <li>Previous vs. new duty rates</li>
                <li>Key compliance requirements</li>
                <li>Trade impact statistics</li>
              </ul>
              <p>For detailed compliance guides and logistics services, visit <a href="https://eufta.in">eufta.in</a></p>
              <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;">
              <p style="color: #6b7280; font-size: 12px;">Best regards,<br>The eufta.in Team</p>
            </div>
          `,
          attachments: [
            {
              filename: "India-EU-FTA-2026-Tariff-Schedule.pdf",
              content: pdfBuffer,
            },
          ],
        });

        // Send notification to info@eufta.in
        await resend.emails.send({
          from: process.env.RESEND_FROM_EMAIL || "info@eufta.in",
          to: "info@eufta.in",
          subject: notificationSubject,
          html: notificationHtml,
          replyTo: email,
        });

        console.log("PDF sent to customer and notification sent to info@eufta.in:", email);
      } catch (emailError) {
        console.error("Error sending emails:", emailError);
        return NextResponse.json(
          { error: "Failed to send email. Please try again later." },
          { status: 500 }
        );
      }
    } else {
      console.warn("RESEND_API_KEY not set. Email sending skipped.");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "PDF has been sent to your email address.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing PDF request:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
