export interface CapabilityStep {
  number: string;
  title: string;
  eyebrow: string;
  description: string;
  details: string[];
}

export const OEM_PROCESS_STEPS: CapabilityStep[] = [
  {
    number: "01",
    title: "Tech-Pack & Specifications",
    eyebrow: "Design",
    description:
      "We build directly to your dimensions, tech-packs, target handfeel, and performance briefs.",
    details: [
      "Custom GSM & yarn selection",
      "Martindale abrasion benchmarking",
      "Exact color matching to master swatches",
      "Confidential development",
    ],
  },
  {
    number: "02",
    title: "Sampling & Approvals",
    eyebrow: "Prototyping",
    description:
      "Rapid strike-offs and sample units delivered for touch, drape, and fitment approval.",
    details: [
      "Prompt strike-off swatches",
      "Finished pre-production units",
      "Shrinkage and wash verification",
      "Branded packaging mockups",
    ],
  },
  {
    number: "03",
    title: "Weaving & Production",
    eyebrow: "Manufacturing",
    description:
      "High-speed rapier looms, dobby velvet machinery, and computerized quilting lines in Panipat.",
    details: [
      "Precision tension control",
      "Continuous inline visual inspection",
      "Automated quilting and embroidery",
      "Custom heat-setting and finishing",
    ],
  },
  {
    number: "04",
    title: "Private Label Packaging",
    eyebrow: "Turnkey",
    description:
      "Finished goods delivered 100% under your brand identity, ready for distribution.",
    details: [
      "Custom woven labels and tags",
      "Retail-ready presentation packaging",
      "Barcoded e-commerce cartons",
      "Worldwide export and domestic freight",
    ],
  },
];

export const CONTRACT_SECTORS = [
  {
    title: "Hospitality & Hotels",
    description:
      "Durable sofa fabrics, duvet sets, and bed covers built for commercial longevity.",
    badge: "Contract",
  },
  {
    title: "Retail & E-Commerce",
    description:
      "Complete white-label programs with custom packaging, barcodes, and private branding.",
    badge: "Private Label",
  },
  {
    title: "Furniture Makers",
    description:
      "Consistent roll goods with high seam-strength backing, optimized for automated cutting.",
    badge: "Roll Goods",
  },
  {
    title: "Design Studios",
    description:
      "Custom swatch books, architectural fabric samples, and tailored batch runs.",
    badge: "Bespoke",
  },
];
