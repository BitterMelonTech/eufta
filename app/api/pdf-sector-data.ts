// Comprehensive Sector Data for Textiles & Apparel - India-EU FTA 2026

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

export const textilesSectorData: SectorDetail = {
  sector: "Textiles & Apparel",
  overview: `The Textiles & Apparel sector represents India's largest export opportunity under the 2026 EU-India FTA, with immediate duty elimination from 12% to 0% on 99% of Indian textile exports. This sector, valued at $8.2 billion annually, encompasses everything from raw cotton and yarns to finished garments, home textiles, and technical textiles. The elimination of tariffs removes a significant barrier that previously made Indian textiles less competitive against EU domestic production and imports from other FTA partners.`,
  
  marketSize: `India's textile exports to the EU reached $8.2 billion in FY2025, representing approximately 25% of India's total textile exports globally. The EU is India's second-largest textile export destination after the United States. With the 12% duty elimination, Indian exporters can now compete on equal footing with countries like Bangladesh and Vietnam, which already enjoyed preferential access.`,
  
  keyProducts: [
    {
      name: "Cotton Yarn",
      hsCode: "5205",
      oldDuty: 12.0,
      newDuty: 0,
      exportValue: "$1.2 Billion",
      description: "High-quality cotton yarns used in textile manufacturing. India is the world's largest cotton producer."
    },
    {
      name: "Cotton Fabrics",
      hsCode: "5208-5212",
      oldDuty: 12.0,
      newDuty: 0,
      exportValue: "$2.1 Billion",
      description: "Woven and knitted cotton fabrics for apparel and home textiles. Includes denim, twill, and specialty fabrics."
    },
    {
      name: "Ready-Made Garments",
      hsCode: "6101-6114, 6201-6217",
      oldDuty: 12.0,
      newDuty: 0,
      exportValue: "$3.8 Billion",
      description: "Finished apparel including shirts, trousers, dresses, and outerwear. India's strength in value-added products."
    },
    {
      name: "Home Textiles",
      hsCode: "6301-6309",
      oldDuty: 12.0,
      newDuty: 0,
      exportValue: "$800 Million",
      description: "Bed linens, curtains, towels, and other home furnishing textiles. Growing segment with high margins."
    },
    {
      name: "Man-Made Fibers",
      hsCode: "5407-5408",
      oldDuty: 12.0,
      newDuty: 0,
      exportValue: "$600 Million",
      description: "Polyester, viscose, and other synthetic fibers. India's production capacity is expanding rapidly."
    },
    {
      name: "Technical Textiles",
      hsCode: "5903-5911",
      oldDuty: 12.0,
      newDuty: 0,
      exportValue: "$300 Million",
      description: "Specialized textiles for automotive, medical, and industrial applications. High-growth niche segment."
    },
    {
      name: "Handloom & Handicrafts",
      hsCode: "5001-5007",
      oldDuty: 12.0,
      newDuty: 0,
      exportValue: "$400 Million",
      description: "Traditional handwoven textiles and handicrafts. Unique value proposition for premium EU markets."
    },
  ],
  
  timeline: [
    {
      year: 0,
      duty: 12.0,
      label: "Pre-FTA (2025)",
      description: "12% duty on all textile imports from India, making products 12% more expensive than EU domestic or FTA-partner products"
    },
    {
      year: 1,
      duty: 0,
      label: "2026 (Immediate)",
      description: "Complete duty elimination effective January 27, 2026. All qualifying Indian textile exports enter EU at 0% duty"
    },
    {
      year: 2,
      duty: 0,
      label: "2027",
      description: "Full duty-free access continues. Expected 15-20% growth in export volumes as supply chains adjust"
    },
    {
      year: 3,
      duty: 0,
      label: "2028",
      description: "Market consolidation phase. Indian brands establish direct relationships with EU retailers and distributors"
    },
    {
      year: 4,
      duty: 0,
      label: "2029",
      description: "Mature market access. Indian textiles capture additional market share from non-FTA competitors"
    },
    {
      year: 5,
      duty: 0,
      label: "2030",
      description: "Long-term competitive position established. India becomes a preferred sourcing destination for EU fashion brands"
    },
  ],
  
  compliance: [
    {
      title: "CBAM Reporting (Carbon Border Adjustment Mechanism)",
      regulation: "Regulation (EU) 2023/956",
      description: "The EU's Carbon Border Adjustment Mechanism requires importers to report the embedded carbon emissions of textile products. This is mandatory for all textile imports and will transition to a carbon tax system by 2026.",
      requirements: [
        "Quarterly carbon footprint reporting for textile imports",
        "Verification of carbon data by accredited third-party auditors",
        "Compliance with EU carbon pricing standards",
        "Documentation of manufacturing processes and energy sources",
        "Lifecycle assessment (LCA) data for products"
      ],
      timeline: "Reporting mandatory from 2026, carbon tax implementation from 2027"
    },
    {
      title: "REACH Regulation (Chemical Safety)",
      regulation: "Regulation (EC) 1907/2006",
      description: "REACH requires registration of chemicals used in textile manufacturing. Indian manufacturers must ensure all dyes, finishes, and treatments comply with EU chemical safety standards.",
      requirements: [
        "Registration of chemicals used in textile production",
        "Restriction of hazardous substances (RoHS) compliance",
        "Testing for restricted substances (azo dyes, formaldehyde, etc.)",
        "Only Representative (OR) registration for non-EU manufacturers",
        "Safety data sheets (SDS) for all chemicals"
      ],
      timeline: "Ongoing compliance required. New substances require pre-registration"
    },
    {
      title: "Textile Labeling & Fiber Content",
      regulation: "Regulation (EU) 1007/2011",
      description: "All textile products must be properly labeled with fiber content, care instructions, and country of origin in EU languages.",
      requirements: [
        "Fiber content labeling in percentage terms",
        "Care labeling with standardized symbols",
        "Country of origin marking",
        "Labeling in local language (German, French, etc.) for country-specific sales",
        "Size labeling according to EU standards"
      ],
      timeline: "Mandatory for all products entering EU market"
    },
    {
      title: "General Product Safety Directive",
      regulation: "Directive 2001/95/EC",
      description: "All textile products must meet EU safety standards, including restrictions on harmful substances and physical safety requirements.",
      requirements: [
        "Testing for harmful substances (lead, phthalates, etc.)",
        "Physical safety standards (no sharp edges, choking hazards)",
        "Flammability testing for children's wear",
        "CE marking where applicable",
        "Technical documentation file"
      ],
      timeline: "Mandatory for all consumer products"
    },
  ],
  
  marketOpportunities: [
    {
      title: "Fast Fashion & Value Segment",
      description: "EU consumers demand affordable, trendy fashion. Indian manufacturers excel at producing high-quality garments at competitive prices. With duty elimination, Indian brands can compete directly with fast-fashion retailers.",
      marketSize: "$45 Billion EU fast-fashion market"
    },
    {
      title: "Sustainable & Organic Textiles",
      description: "Growing EU demand for organic cotton, recycled fibers, and sustainable production. India's organic cotton production (largest globally) positions it well for this premium segment.",
      marketSize: "$12 Billion EU sustainable fashion market (growing 15% annually)"
    },
    {
      title: "Technical Textiles",
      description: "Automotive textiles, medical textiles, and industrial fabrics represent high-value opportunities. India's growing technical textile sector can capture EU market share.",
      marketSize: "$8 Billion EU technical textiles market"
    },
    {
      title: "Home Textiles & Furnishings",
      description: "EU home textile market values quality and design. Indian manufacturers offer competitive pricing with good quality, especially in bed linens and curtains.",
      marketSize: "$18 Billion EU home textiles market"
    },
  ],
  
  regionalImpact: [
    {
      region: "Tiruppur, Tamil Nadu",
      description: "Known as the 'Knitwear Capital of India,' Tiruppur produces 90% of India's cotton knitwear exports. The region specializes in T-shirts, polo shirts, and casual wear.",
      keyPlayers: ["Shahi Exports", "Gokaldas Exports", "Eastman Exports"],
      exportValue: "$2.8 Billion annually"
    },
    {
      region: "Surat, Gujarat",
      description: "Surat is India's largest synthetic textile hub, producing polyester and viscose fabrics. The region has modern manufacturing facilities and strong export infrastructure.",
      keyPlayers: ["Welspun India", "Reliance Industries", "Arvind Limited"],
      exportValue: "$1.5 Billion annually"
    },
    {
      region: "Ludhiana, Punjab",
      description: "Ludhiana is a major woolen textile and hosiery manufacturing center. The region produces sweaters, cardigans, and winter wear for European markets.",
      keyPlayers: ["Monte Carlo Fashions", "Dollar Industries", "Nahar Spinning"],
      exportValue: "$900 Million annually"
    },
    {
      region: "Kolkata, West Bengal",
      description: "Kolkata has a strong heritage in jute textiles and handloom products. The region exports traditional textiles and handicrafts to premium EU markets.",
      keyPlayers: ["Grasim Industries", "Raymond Limited", "Arvind Limited"],
      exportValue: "$600 Million annually"
    },
  ],
  
  caseStudy: {
    title: "Cost Savings Analysis: Indian Textile Exporter to EU",
    scenario: "A Tiruppur-based manufacturer exports 100,000 T-shirts monthly to Germany. Each T-shirt has a CIF value of €5.00.",
    calculation: `Monthly Export Value: 100,000 × €5.00 = €500,000
Pre-FTA Duty (12%): €500,000 × 12% = €60,000/month
Post-FTA Duty (0%): €500,000 × 0% = €0/month
Monthly Savings: €60,000
Annual Savings: €720,000`,
    savings: "The exporter can either pass savings to customers (increasing competitiveness) or improve margins by €720,000 annually."
  },
};
