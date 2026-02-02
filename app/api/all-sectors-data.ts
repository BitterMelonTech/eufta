// Comprehensive Sector Data for ALL 8 Sectors - India-EU FTA 2026

export interface ProductItem {
  name: string;
  hsCode: string;
  oldDuty: number;
  newDuty: number;
  exportValue: string;
  description: string;
}

export interface SectorDetail {
  sector: string;
  overview: string;
  marketSize: string;
  keyProducts: ProductItem[];
  timeline: {
    year: number;
    duty: number;
    label: string;
    description: string;
  }[];
  compliance: {
    title: string;
    regulation: string;
    description: string;
    requirements: string[];
    timeline: string;
  }[];
  marketOpportunities: {
    title: string;
    description: string;
    marketSize: string;
  }[];
  regionalImpact: {
    region: string;
    description: string;
    keyPlayers: string[];
    exportValue: string;
  }[];
  caseStudy: {
    title: string;
    scenario: string;
    calculation: string;
    savings: string;
  };
}

export const allSectorsData: SectorDetail[] = [
  // 1. TEXTILES & APPAREL
  {
    sector: "Textiles & Apparel",
    overview: `The Textiles & Apparel sector represents India's largest export opportunity under the 2026 EU-India FTA, with immediate duty elimination from 12% to 0% on 99% of Indian textile exports. This sector, valued at $8.2 billion annually, encompasses everything from raw cotton and yarns to finished garments, home textiles, and technical textiles.`,
    marketSize: `India's textile exports to the EU reached $8.2 billion in FY2025, representing approximately 25% of India's total textile exports globally. The EU is India's second-largest textile export destination after the United States.`,
    keyProducts: [
      { name: "Cotton Yarn", hsCode: "5205", oldDuty: 12.0, newDuty: 0, exportValue: "$1.2 Billion", description: "High-quality cotton yarns used in textile manufacturing" },
      { name: "Cotton Fabrics", hsCode: "5208-5212", oldDuty: 12.0, newDuty: 0, exportValue: "$2.1 Billion", description: "Woven and knitted cotton fabrics for apparel and home textiles" },
      { name: "Ready-Made Garments", hsCode: "6101-6114", oldDuty: 12.0, newDuty: 0, exportValue: "$3.8 Billion", description: "Finished apparel including shirts, trousers, dresses, and outerwear" },
      { name: "Home Textiles", hsCode: "6301-6309", oldDuty: 12.0, newDuty: 0, exportValue: "$800 Million", description: "Bed linens, curtains, towels, and other home furnishing textiles" },
      { name: "Man-Made Fibers", hsCode: "5407-5408", oldDuty: 12.0, newDuty: 0, exportValue: "$600 Million", description: "Polyester, viscose, and other synthetic fibers" },
    ],
    timeline: [
      { year: 0, duty: 12.0, label: "Pre-FTA (2025)", description: "12% duty on all textile imports from India" },
      { year: 1, duty: 0, label: "2026 (Immediate)", description: "Complete duty elimination effective January 27, 2026" },
      { year: 2, duty: 0, label: "2027", description: "Full duty-free access continues" },
      { year: 3, duty: 0, label: "2028", description: "Market consolidation phase" },
      { year: 4, duty: 0, label: "2029", description: "Mature market access" },
      { year: 5, duty: 0, label: "2030", description: "Long-term competitive position established" },
    ],
    compliance: [
      {
        title: "CBAM Reporting",
        regulation: "Regulation (EU) 2023/956",
        description: "Mandatory carbon footprint reporting for textile imports",
        requirements: ["Quarterly carbon footprint reporting", "Verification by accredited auditors", "Lifecycle assessment (LCA) data"],
        timeline: "Reporting mandatory from 2026"
      },
      {
        title: "REACH Regulation",
        regulation: "Regulation (EC) 1907/2006",
        description: "Chemical safety compliance for dyes and finishes",
        requirements: ["Registration of chemicals", "Restriction of hazardous substances", "Safety data sheets (SDS)"],
        timeline: "Ongoing compliance required"
      },
    ],
    marketOpportunities: [
      { title: "Fast Fashion & Value Segment", description: "EU consumers demand affordable, trendy fashion", marketSize: "$45 Billion EU fast-fashion market" },
      { title: "Sustainable & Organic Textiles", description: "Growing EU demand for organic cotton and recycled fibers", marketSize: "$12 Billion EU sustainable fashion market" },
    ],
    regionalImpact: [
      { region: "Tiruppur, Tamil Nadu", description: "Knitwear Capital of India, produces 90% of India's cotton knitwear exports", keyPlayers: ["Shahi Exports", "Gokaldas Exports"], exportValue: "$2.8 Billion annually" },
      { region: "Surat, Gujarat", description: "Largest synthetic textile hub, producing polyester and viscose fabrics", keyPlayers: ["Welspun India", "Reliance Industries"], exportValue: "$1.5 Billion annually" },
    ],
    caseStudy: {
      title: "Cost Savings: Indian Textile Exporter",
      scenario: "A Tiruppur manufacturer exports 100,000 T-shirts monthly to Germany. Each T-shirt CIF value: €5.00",
      calculation: `Monthly Export: 100,000 × €5.00 = €500,000\nPre-FTA Duty (12%): €60,000/month\nPost-FTA Duty (0%): €0/month\nAnnual Savings: €720,000`,
      savings: "Exporter can pass savings to customers or improve margins by €720,000 annually"
    },
  },
  
  // 2. PHARMA & MED-TECH
  {
    sector: "Pharma & Med-Tech",
    overview: `The Pharma & Med-Tech sector benefits from immediate duty elimination from 11% to 0%, opening access to the EU's $180 billion pharmaceutical market. India is the world's largest producer of generic medicines and supplies 20% of global generic drugs.`,
    marketSize: `India's pharmaceutical exports to the EU reached $4.1 billion in FY2025. The EU is India's second-largest pharma export destination, with strong demand for APIs, formulations, and medical devices.`,
    keyProducts: [
      { name: "Active Pharmaceutical Ingredients (APIs)", hsCode: "2941-2942", oldDuty: 11.0, newDuty: 0, exportValue: "$1.8 Billion", description: "Raw materials for pharmaceutical manufacturing" },
      { name: "Finished Formulations", hsCode: "3003-3004", oldDuty: 11.0, newDuty: 0, exportValue: "$1.5 Billion", description: "Ready-to-use pharmaceutical products" },
      { name: "Medical Devices", hsCode: "9018-9022", oldDuty: 11.0, newDuty: 0, exportValue: "$500 Million", description: "Surgical instruments, diagnostic equipment, and medical devices" },
      { name: "Vaccines", hsCode: "3002", oldDuty: 11.0, newDuty: 0, exportValue: "$300 Million", description: "Vaccines and biological products" },
    ],
    timeline: [
      { year: 0, duty: 11.0, label: "Pre-FTA (2025)", description: "11% duty on pharmaceutical imports from India" },
      { year: 1, duty: 0, label: "2026 (Immediate)", description: "Complete duty elimination effective January 27, 2026" },
      { year: 2, duty: 0, label: "2027", description: "Full duty-free access continues" },
      { year: 3, duty: 0, label: "2028", description: "Market consolidation phase" },
      { year: 4, duty: 0, label: "2029", description: "Mature market access" },
      { year: 5, duty: 0, label: "2030", description: "Long-term competitive position established" },
    ],
    compliance: [
      {
        title: "EMA QP Batch Release",
        regulation: "Annex 21 - Importation of Medicinal Products",
        description: "Mandatory EU-based Qualified Person certification per batch after lab testing",
        requirements: ["QP certification per batch", "Lab testing in Rotterdam", "GMP site audits", "Technical documentation"],
        timeline: "Mandatory for all medicinal products"
      },
      {
        title: "GMP Compliance",
        regulation: "Directive 2003/94/EC",
        description: "Good Manufacturing Practice standards for pharmaceutical production",
        requirements: ["GMP site audits", "Quality management systems", "Documentation and record keeping"],
        timeline: "Ongoing compliance required"
      },
    ],
    marketOpportunities: [
      { title: "Generic Medicines", description: "EU demand for cost-effective generic alternatives", marketSize: "$45 Billion EU generic market" },
      { title: "Biosimilars", description: "Growing market for biosimilar products", marketSize: "$12 Billion EU biosimilar market" },
    ],
    regionalImpact: [
      { region: "Ahmedabad/Sanand, Gujarat", description: "Major pharmaceutical manufacturing hub with API production", keyPlayers: ["Sun Pharma", "Zydus Cadila", "Torrent Pharma"], exportValue: "$1.5 Billion annually" },
      { region: "Hyderabad, Telangana", description: "Pharma city with strong API and formulation capabilities", keyPlayers: ["Dr. Reddy's", "Aurobindo Pharma", "Hetero Drugs"], exportValue: "$1.2 Billion annually" },
    ],
    caseStudy: {
      title: "Cost Savings: Indian Pharma Exporter",
      scenario: "A Hyderabad-based API manufacturer exports €2 million worth of APIs monthly to Germany",
      calculation: `Monthly Export: €2,000,000\nPre-FTA Duty (11%): €220,000/month\nPost-FTA Duty (0%): €0/month\nAnnual Savings: €2,640,000`,
      savings: "Exporter saves €2.64 million annually, improving competitiveness in EU market"
    },
  },
  
  // 3. ENGINEERING GOODS
  {
    sector: "Engineering Goods",
    overview: `The Engineering Goods sector sees immediate duty elimination from 22% to 0%, opening access to the EU's $1.2 trillion engineering market. India exports automotive components, machinery, electronics, and industrial equipment.`,
    marketSize: `India's engineering goods exports to the EU reached $12.8 billion in FY2025. The EU is India's largest engineering export destination, with strong demand for automotive components and machinery.`,
    keyProducts: [
      { name: "Automotive Components", hsCode: "8708-8709", oldDuty: 22.0, newDuty: 0, exportValue: "$4.5 Billion", description: "Engine parts, transmission components, and automotive accessories" },
      { name: "Industrial Machinery", hsCode: "8414-8420", oldDuty: 22.0, newDuty: 0, exportValue: "$3.2 Billion", description: "Pumps, compressors, and industrial equipment" },
      { name: "Electrical Machinery", hsCode: "8501-8514", oldDuty: 22.0, newDuty: 0, exportValue: "$2.8 Billion", description: "Generators, transformers, and electrical equipment" },
      { name: "Electronic Components", hsCode: "8541-8543", oldDuty: 22.0, newDuty: 0, exportValue: "$2.3 Billion", description: "Semiconductors, integrated circuits, and electronic parts" },
    ],
    timeline: [
      { year: 0, duty: 22.0, label: "Pre-FTA (2025)", description: "22% duty on engineering goods imports from India" },
      { year: 1, duty: 0, label: "2026 (Immediate)", description: "Complete duty elimination effective January 27, 2026" },
      { year: 2, duty: 0, label: "2027", description: "Full duty-free access continues" },
      { year: 3, duty: 0, label: "2028", description: "Market consolidation phase" },
      { year: 4, duty: 0, label: "2029", description: "Mature market access" },
      { year: 5, duty: 0, label: "2030", description: "Long-term competitive position established" },
    ],
    compliance: [
      {
        title: "CE Certification",
        regulation: "Directive 2006/42/EC (Machinery Directive)",
        description: "CE marking and technical documentation for machinery and equipment",
        requirements: ["Technical file preparation", "CE marking", "Conformity assessment", "Declaration of Conformity"],
        timeline: "Mandatory before market entry"
      },
      {
        title: "RoHS Compliance",
        regulation: "Directive 2011/65/EU",
        description: "Restriction of Hazardous Substances in electrical and electronic equipment",
        requirements: ["Substance testing", "Documentation", "Compliance marking"],
        timeline: "Mandatory for all EEE products"
      },
    ],
    marketOpportunities: [
      { title: "Automotive Components", description: "EU automotive industry demand for cost-effective components", marketSize: "$180 Billion EU automotive components market" },
      { title: "Industrial Machinery", description: "EU manufacturing sector modernization and automation", marketSize: "$95 Billion EU industrial machinery market" },
    ],
    regionalImpact: [
      { region: "Noida/Jewar, UP", description: "Electronics and automotive component manufacturing hub", keyPlayers: ["Honda Cars", "Samsung", "LG Electronics"], exportValue: "$3.5 Billion annually" },
      { region: "Chennai, Tamil Nadu", description: "Automotive manufacturing cluster with strong export focus", keyPlayers: ["Ford", "Hyundai", "BMW"], exportValue: "$4.2 Billion annually" },
    ],
    caseStudy: {
      title: "Cost Savings: Indian Engineering Exporter",
      scenario: "A Chennai-based automotive component manufacturer exports €1.5 million worth of parts monthly to Germany",
      calculation: `Monthly Export: €1,500,000\nPre-FTA Duty (22%): €330,000/month\nPost-FTA Duty (0%): €0/month\nAnnual Savings: €3,960,000`,
      savings: "Exporter saves €3.96 million annually, significantly improving price competitiveness"
    },
  },
  
  // 4. MARINE PRODUCTS
  {
    sector: "Marine Products",
    overview: `The Marine Products sector benefits from immediate duty elimination from 26% to 0%, opening access to the EU's $28 billion seafood market. India is a major exporter of shrimp, fish, and other seafood products.`,
    marketSize: `India's marine product exports to the EU reached $1.2 billion in FY2025. The EU is India's third-largest seafood export destination, with strong demand for frozen shrimp and fish.`,
    keyProducts: [
      { name: "Frozen Shrimp", hsCode: "0306", oldDuty: 26.0, newDuty: 0, exportValue: "$800 Million", description: "Frozen shrimp and prawns, India's largest seafood export" },
      { name: "Frozen Fish", hsCode: "0303-0304", oldDuty: 26.0, newDuty: 0, exportValue: "$250 Million", description: "Frozen fish fillets and whole fish" },
      { name: "Canned Seafood", hsCode: "1604-1605", oldDuty: 26.0, newDuty: 0, exportValue: "$100 Million", description: "Canned fish and seafood products" },
      { name: "Fish Meal", hsCode: "2301", oldDuty: 26.0, newDuty: 0, exportValue: "$50 Million", description: "Fish meal for animal feed" },
    ],
    timeline: [
      { year: 0, duty: 26.0, label: "Pre-FTA (2025)", description: "26% duty on marine product imports from India" },
      { year: 1, duty: 0, label: "2026 (Immediate)", description: "Complete duty elimination effective January 27, 2026" },
      { year: 2, duty: 0, label: "2027", description: "Full duty-free access continues" },
      { year: 3, duty: 0, label: "2028", description: "Market consolidation phase" },
      { year: 4, duty: 0, label: "2029", description: "Mature market access" },
      { year: 5, duty: 0, label: "2030", description: "Long-term competitive position established" },
    ],
    compliance: [
      {
        title: "Veterinary Inspection",
        regulation: "Regulation (EC) 854/2004",
        description: "Border Control Posts (BCP) clearance for all seafood imports",
        requirements: ["BCP inspection", "Health certificates", "Traceability documentation", "Cold chain compliance"],
        timeline: "Mandatory for all imports"
      },
      {
        title: "Food Safety Standards",
        regulation: "Regulation (EC) 178/2002",
        description: "EU food safety and hygiene standards for seafood",
        requirements: ["HACCP compliance", "Microbiological testing", "Labeling requirements"],
        timeline: "Ongoing compliance required"
      },
    ],
    marketOpportunities: [
      { title: "Frozen Shrimp", description: "EU demand for high-quality frozen shrimp", marketSize: "$8 Billion EU frozen seafood market" },
      { title: "Value-Added Products", description: "Growing demand for processed and ready-to-cook seafood", marketSize: "$5 Billion EU processed seafood market" },
    ],
    regionalImpact: [
      { region: "Kerala", description: "Major seafood processing and export hub", keyPlayers: ["Marine Products Export Development Authority", "Kerala Seafood Exporters"], exportValue: "$600 Million annually" },
      { region: "Tamil Nadu", description: "Shrimp farming and processing cluster", keyPlayers: ["Apex Frozen Foods", "Avanti Feeds"], exportValue: "$400 Million annually" },
    ],
    caseStudy: {
      title: "Cost Savings: Indian Seafood Exporter",
      scenario: "A Kerala-based seafood processor exports €500,000 worth of frozen shrimp monthly to Netherlands",
      calculation: `Monthly Export: €500,000\nPre-FTA Duty (26%): €130,000/month\nPost-FTA Duty (0%): €0/month\nAnnual Savings: €1,560,000`,
      savings: "Exporter saves €1.56 million annually, improving competitiveness against other suppliers"
    },
  },
  
  // 5. CHEMICALS & PLASTICS
  {
    sector: "Chemicals & Plastics",
    overview: `The Chemicals & Plastics sector sees immediate duty elimination from 12.8% to 0%, opening access to the EU's $550 billion chemical market. India exports specialty chemicals, plastics, and petrochemicals.`,
    marketSize: `India's chemical exports to the EU reached $6.5 billion in FY2025. The EU is India's largest chemical export destination, with strong demand for specialty chemicals and intermediates.`,
    keyProducts: [
      { name: "Specialty Chemicals", hsCode: "2901-2942", oldDuty: 12.8, newDuty: 0, exportValue: "$2.8 Billion", description: "Fine chemicals, intermediates, and specialty products" },
      { name: "Plastics & Polymers", hsCode: "3901-3914", oldDuty: 12.8, newDuty: 0, exportValue: "$2.2 Billion", description: "Plastic resins, polymers, and plastic products" },
      { name: "Organic Chemicals", hsCode: "2902-2914", oldDuty: 12.8, newDuty: 0, exportValue: "$1.0 Billion", description: "Organic chemical compounds and derivatives" },
      { name: "Inorganic Chemicals", hsCode: "2801-2853", oldDuty: 12.8, newDuty: 0, exportValue: "$500 Million", description: "Inorganic chemicals and compounds" },
    ],
    timeline: [
      { year: 0, duty: 12.8, label: "Pre-FTA (2025)", description: "12.8% duty on chemical imports from India" },
      { year: 1, duty: 0, label: "2026 (Immediate)", description: "Complete duty elimination effective January 27, 2026" },
      { year: 2, duty: 0, label: "2027", description: "Full duty-free access continues" },
      { year: 3, duty: 0, label: "2028", description: "Market consolidation phase" },
      { year: 4, duty: 0, label: "2029", description: "Mature market access" },
      { year: 5, duty: 0, label: "2030", description: "Long-term competitive position established" },
    ],
    compliance: [
      {
        title: "REACH Registration",
        regulation: "Regulation (EC) 1907/2006",
        description: "Only Representative (OR) registration for non-EU manufacturers",
        requirements: ["ECHA registration", "Only Representative appointment", "Safety data sheets", "Substance information"],
        timeline: "Registration required before import"
      },
      {
        title: "CLP Regulation",
        regulation: "Regulation (EC) 1272/2008",
        description: "Classification, Labeling and Packaging of chemicals",
        requirements: ["Hazard classification", "Labeling compliance", "Packaging standards"],
        timeline: "Mandatory for all chemicals"
      },
    ],
    marketOpportunities: [
      { title: "Specialty Chemicals", description: "EU demand for high-value specialty chemicals", marketSize: "$180 Billion EU specialty chemicals market" },
      { title: "Pharmaceutical Intermediates", description: "Growing demand for pharma-grade chemical intermediates", marketSize: "$45 Billion EU pharma intermediates market" },
    ],
    regionalImpact: [
      { region: "Gujarat", description: "Major petrochemical and chemical manufacturing hub", keyPlayers: ["Reliance Industries", "Gujarat Alkali", "Adani Group"], exportValue: "$3.2 Billion annually" },
      { region: "Maharashtra", description: "Specialty chemicals and pharmaceutical intermediates", keyPlayers: ["UPL", "PI Industries", "Aarti Industries"], exportValue: "$2.1 Billion annually" },
    ],
    caseStudy: {
      title: "Cost Savings: Indian Chemical Exporter",
      scenario: "A Gujarat-based specialty chemical manufacturer exports €1.2 million worth of products monthly to Germany",
      calculation: `Monthly Export: €1,200,000\nPre-FTA Duty (12.8%): €153,600/month\nPost-FTA Duty (0%): €0/month\nAnnual Savings: €1,843,200`,
      savings: "Exporter saves €1.84 million annually, improving price competitiveness in EU market"
    },
  },
  
  // 6. LEATHER & FOOTWEAR
  {
    sector: "Leather & Footwear",
    overview: `The Leather & Footwear sector benefits from immediate duty elimination from 17% to 0%, opening access to the EU's $85 billion footwear market. India is a major exporter of leather goods, footwear, and accessories.`,
    marketSize: `India's leather exports to the EU reached $1.8 billion in FY2025. The EU is India's largest leather export destination, with strong demand for finished leather goods and footwear.`,
    keyProducts: [
      { name: "Leather Footwear", hsCode: "6403-6405", oldDuty: 17.0, newDuty: 0, exportValue: "$900 Million", description: "Leather shoes, boots, and footwear" },
      { name: "Leather Goods", hsCode: "4202-4203", oldDuty: 17.0, newDuty: 0, exportValue: "$600 Million", description: "Leather bags, wallets, and accessories" },
      { name: "Finished Leather", hsCode: "4104-4115", oldDuty: 17.0, newDuty: 0, exportValue: "$300 Million", description: "Processed and finished leather" },
    ],
    timeline: [
      { year: 0, duty: 17.0, label: "Pre-FTA (2025)", description: "17% duty on leather imports from India" },
      { year: 1, duty: 0, label: "2026 (Immediate)", description: "Complete duty elimination effective January 27, 2026" },
      { year: 2, duty: 0, label: "2027", description: "Full duty-free access continues" },
      { year: 3, duty: 0, label: "2028", description: "Market consolidation phase" },
      { year: 4, duty: 0, label: "2029", description: "Mature market access" },
      { year: 5, duty: 0, label: "2030", description: "Long-term competitive position established" },
    ],
    compliance: [
      {
        title: "REACH (Chrome VI)",
        regulation: "Regulation (EC) 1907/2006",
        description: "Strict limits on chromium content in leather products",
        requirements: ["Chrome VI testing", "Compliance documentation", "Restriction compliance"],
        timeline: "Mandatory for all leather products"
      },
      {
        title: "Product Safety",
        regulation: "Directive 2001/95/EC",
        description: "General product safety requirements for footwear and leather goods",
        requirements: ["Safety testing", "Labeling compliance", "Technical documentation"],
        timeline: "Mandatory for all consumer products"
      },
    ],
    marketOpportunities: [
      { title: "Premium Footwear", description: "EU demand for high-quality leather footwear", marketSize: "$45 Billion EU footwear market" },
      { title: "Fashion Accessories", description: "Growing demand for leather bags and accessories", marketSize: "$18 Billion EU leather goods market" },
    ],
    regionalImpact: [
      { region: "Tamil Nadu", description: "Major leather processing and footwear manufacturing hub", keyPlayers: ["Farida Group", "Hidesign", "Bata India"], exportValue: "$900 Million annually" },
      { region: "UP (Kanpur)", description: "Traditional leather processing center with modern facilities", keyPlayers: ["Mirza International", "Superhouse Group"], exportValue: "$600 Million annually" },
    ],
    caseStudy: {
      title: "Cost Savings: Indian Leather Exporter",
      scenario: "A Tamil Nadu-based footwear manufacturer exports €800,000 worth of leather shoes monthly to Italy",
      calculation: `Monthly Export: €800,000\nPre-FTA Duty (17%): €136,000/month\nPost-FTA Duty (0%): €0/month\nAnnual Savings: €1,632,000`,
      savings: "Exporter saves €1.63 million annually, improving competitiveness in EU fashion market"
    },
  },
  
  // 7. GEMS & JEWELLERY
  {
    sector: "Gems & Jewellery",
    overview: `The Gems & Jewellery sector benefits from immediate duty elimination from 4% to 0%, opening access to the EU's $95 billion jewelry market. India is the world's largest diamond cutting and polishing center.`,
    marketSize: `India's gems and jewelry exports to the EU reached $2.1 billion in FY2025. The EU is India's second-largest jewelry export destination, with strong demand for diamonds and gold jewelry.`,
    keyProducts: [
      { name: "Cut & Polished Diamonds", hsCode: "7102", oldDuty: 4.0, newDuty: 0, exportValue: "$1.2 Billion", description: "Processed diamonds ready for jewelry manufacturing" },
      { name: "Gold Jewelry", hsCode: "7113-7114", oldDuty: 4.0, newDuty: 0, exportValue: "$600 Million", description: "Finished gold jewelry and ornaments" },
      { name: "Silver Jewelry", hsCode: "7113", oldDuty: 4.0, newDuty: 0, exportValue: "$200 Million", description: "Silver jewelry and accessories" },
      { name: "Precious Stones", hsCode: "7103-7104", oldDuty: 4.0, newDuty: 0, exportValue: "$100 Million", description: "Emeralds, rubies, sapphires, and other precious stones" },
    ],
    timeline: [
      { year: 0, duty: 4.0, label: "Pre-FTA (2025)", description: "4% duty on gems and jewelry imports from India" },
      { year: 1, duty: 0, label: "2026 (Immediate)", description: "Complete duty elimination effective January 27, 2026" },
      { year: 2, duty: 0, label: "2027", description: "Full duty-free access continues" },
      { year: 3, duty: 0, label: "2028", description: "Market consolidation phase" },
      { year: 4, duty: 0, label: "2029", description: "Mature market access" },
      { year: 5, duty: 0, label: "2030", description: "Long-term competitive position established" },
    ],
    compliance: [
      {
        title: "Origin Certification",
        regulation: "Kimberley Process Certification Scheme",
        description: "Proven 'Change in Tariff Heading' for diamond processing",
        requirements: ["Kimberley Process certificate", "Origin documentation", "Traceability records"],
        timeline: "Mandatory for all diamond imports"
      },
      {
        title: "Precious Metals Marking",
        regulation: "Directive 2014/28/EU",
        description: "Hallmarking and marking requirements for precious metals",
        requirements: ["Hallmarking", "Fineness marking", "Assay office certification"],
        timeline: "Mandatory for all precious metal products"
      },
    ],
    marketOpportunities: [
      { title: "Diamond Jewelry", description: "EU demand for high-quality diamond jewelry", marketSize: "$45 Billion EU diamond jewelry market" },
      { title: "Gold Jewelry", description: "Growing demand for traditional and modern gold jewelry", marketSize: "$28 Billion EU gold jewelry market" },
    ],
    regionalImpact: [
      { region: "Surat, Gujarat", description: "World's largest diamond cutting and polishing center", keyPlayers: ["Rosy Blue", "Shree Ramkrishna Exports", "Kiran Gems"], exportValue: "$1.2 Billion annually" },
      { region: "Mumbai, Maharashtra", description: "Jewelry manufacturing and trading hub", keyPlayers: ["Tanishq", "PC Jeweller", "Kalyan Jewellers"], exportValue: "$600 Million annually" },
    ],
    caseStudy: {
      title: "Cost Savings: Indian Diamond Exporter",
      scenario: "A Surat-based diamond exporter ships €2.5 million worth of cut diamonds monthly to Belgium",
      calculation: `Monthly Export: €2,500,000\nPre-FTA Duty (4%): €100,000/month\nPost-FTA Duty (0%): €0/month\nAnnual Savings: €1,200,000`,
      savings: "Exporter saves €1.2 million annually, improving competitiveness in EU diamond market"
    },
  },
  
  // 8. TOYS & SPORTS GOODS
  {
    sector: "Toys & Sports Goods",
    overview: `The Toys & Sports Goods sector benefits from immediate duty elimination from 4.7% to 0%, opening access to the EU's $28 billion toy market. India exports a wide range of toys, games, and sports equipment.`,
    marketSize: `India's toy exports to the EU reached $450 million in FY2025. The EU is India's largest toy export destination, with strong demand for educational toys and sports equipment.`,
    keyProducts: [
      { name: "Plastic Toys", hsCode: "9503", oldDuty: 4.7, newDuty: 0, exportValue: "$200 Million", description: "Plastic action figures, dolls, and toy sets" },
      { name: "Educational Toys", hsCode: "9503", oldDuty: 4.7, newDuty: 0, exportValue: "$120 Million", description: "Puzzles, building blocks, and learning toys" },
      { name: "Sports Equipment", hsCode: "9506-9507", oldDuty: 4.7, newDuty: 0, exportValue: "$80 Million", description: "Cricket equipment, badminton rackets, and sports gear" },
      { name: "Board Games", hsCode: "9504", oldDuty: 4.7, newDuty: 0, exportValue: "$50 Million", description: "Board games, card games, and puzzles" },
    ],
    timeline: [
      { year: 0, duty: 4.7, label: "Pre-FTA (2025)", description: "4.7% duty on toy imports from India" },
      { year: 1, duty: 0, label: "2026 (Immediate)", description: "Complete duty elimination effective January 27, 2026" },
      { year: 2, duty: 0, label: "2027", description: "Full duty-free access continues" },
      { year: 3, duty: 0, label: "2028", description: "Market consolidation phase" },
      { year: 4, duty: 0, label: "2029", description: "Mature market access" },
      { year: 5, duty: 0, label: "2030", description: "Long-term competitive position established" },
    ],
    compliance: [
      {
        title: "Toy Safety Directive",
        regulation: "Directive 2009/48/EC",
        description: "Verification of EN 71 standards for toy safety",
        requirements: ["EN 71 testing", "CE marking", "Technical documentation", "Safety warnings"],
        timeline: "Mandatory before market entry"
      },
      {
        title: "REACH Compliance",
        regulation: "Regulation (EC) 1907/2006",
        description: "Chemical safety for toys and materials",
        requirements: ["Substance testing", "Restriction compliance", "Documentation"],
        timeline: "Ongoing compliance required"
      },
    ],
    marketOpportunities: [
      { title: "Educational Toys", description: "EU demand for safe, educational children's toys", marketSize: "$12 Billion EU educational toy market" },
      { title: "Sports Equipment", description: "Growing fitness and sports participation in EU", marketSize: "$8 Billion EU sports equipment market" },
    ],
    regionalImpact: [
      { region: "Delhi NCR", description: "Major toy manufacturing and export hub", keyPlayers: ["Funskool", "Hamleys", "Mattel India"], exportValue: "$200 Million annually" },
      { region: "Punjab", description: "Sports equipment manufacturing cluster", keyPlayers: ["Sanspareils Greenlands", "SG Sports"], exportValue: "$150 Million annually" },
    ],
    caseStudy: {
      title: "Cost Savings: Indian Toy Exporter",
      scenario: "A Delhi-based toy manufacturer exports €600,000 worth of toys monthly to UK",
      calculation: `Monthly Export: €600,000\nPre-FTA Duty (4.7%): €28,200/month\nPost-FTA Duty (0%): €0/month\nAnnual Savings: €338,400`,
      savings: "Exporter saves €338,400 annually, improving price competitiveness in EU toy market"
    },
  },
];
