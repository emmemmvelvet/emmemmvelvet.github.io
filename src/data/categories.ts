export interface ProductItem {
  id: string;
  name: string;
  category: "sofa-fabric" | "sofa-cover" | "bedding" | "cushions";
  categoryLabel: string;
  subCategory: string;
  tagline: string;
  description: string;
  weaveStructure: string;
  composition: string;
  handfeel: string;
  suitableFor: string[];
  features: string[];
  oemOptions: string[];
  image: string;
}

export interface CategoryInfo {
  id: "sofa-fabric" | "sofa-cover" | "bedding" | "cushions";
  title: string;
  eyebrow: string;
  description: string;
  subCategories: string[];
  heroImage: string;
}

export const CATEGORIES_DATA: CategoryInfo[] = [
  {
    id: "sofa-fabric",
    title: "Sofa Fabric",
    eyebrow: "Weaves & Textures",
    description:
      "Chenille, Holland, and Mosha weaves. Engineered for residential and commercial upholstery.",
    subCategories: ["Chenille", "Holland", "Mosha"],
    heroImage:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "sofa-cover",
    title: "Sofa Cover",
    eyebrow: "Tailored Covers",
    description:
      "Quilted, embroidered, fur, chenille, and printed covers for furniture protection and styling.",
    subCategories: ["Quilted", "Embroidery", "Fur", "Chenille", "Printed"],
    heroImage:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "bedding",
    title: "Bedding",
    eyebrow: "Sleep Comfort",
    description:
      "Bed sheets, bed covers, duets, and comforters crafted with soft, durable materials.",
    subCategories: ["Bed Sheets", "Bed Cover", "Duet", "Comforter"],
    heroImage:
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "cushions",
    title: "Cushions",
    eyebrow: "Textured Accents",
    description:
      "Embroidered, chenille, fur, and printed cushions with clean piped finishes.",
    subCategories: ["Embroidery", "Chenille", "Fur", "Printed"],
    heroImage:
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1600&q=80",
  },
];

export const PRODUCTS_CATALOG: ProductItem[] = [
  // 1. Sofa Fabric - Chenille
  {
    id: "fabric-chenille-artisan",
    name: "Traditional Chenille Upholstery",
    category: "sofa-fabric",
    categoryLabel: "Sofa Fabric",
    subCategory: "Chenille",
    tagline: "Dimensional caterpillar-twist yarn with resilient upholstery drape",
    description:
      "A heavyweight, highly tactile upholstery fabric woven with specialized chenille core yarn. Designed for residential sofas, hospitality lounges, and commercial banquettes requiring exceptional abrasion resilience and velvet-soft warmth without surface shine.",
    weaveStructure: "Dobby Loom Textured Weft",
    composition: "Cotton-Poly Hybrid Core or 100% Micro-Poly Chenille",
    handfeel: "Substantial, plush, warm tactile grain",
    suitableFor: ["Heavy Domestic Upholstery", "Commercial Banquette Seating", "Modular Sofas", "Occasional Chairs"],
    features: ["High Martindale Cycle Tested", "Pilling & Snag Resistant", "Dimensional Multi-Tone Weft", "Breathable Backing"],
    oemOptions: ["Custom Back-Coating (Latex / Fleece)", "FR Flame Retardant Finish", "Water-Repellent Nano Coating", "Custom Piece-Dyeing Lots"],
    image: "/images/products/velvet_chenille.png",
  },
  // 1. Sofa Fabric - Holland
  {
    id: "fabric-holland-velvet",
    name: "Holland Micro-Sheen Velvet",
    category: "sofa-fabric",
    categoryLabel: "Sofa Fabric",
    subCategory: "Holland",
    tagline: "Ultra-dense pile with refined directional luster and fluid recovery",
    description:
      "An exquisite Holland-style velvet featuring an ultra-compact micro-pile. Delivers an understated, contemporary sheen that catches light gracefully across curved furniture silhouettes while resisting pile crush and bruising.",
    weaveStructure: "High-Density Warp-Knitted Cut Pile",
    composition: "Premium Fine-Denier Filament Poly",
    handfeel: "Silky, seamless, fluid micro-pile glide",
    suitableFor: ["Mid-Century Sofas", "Curved Sectionals", "Hotel Headboards", "Luxury Accent Pouffes"],
    features: ["Directional Light Interaction", "Anti-Crush Pile Memory", "Easy-Wipe Soil Release", "Superior Seam Strength"],
    oemOptions: ["Embossed Pattern Roll Finish", "Antimicrobial & Stain Shield", "Custom Bonding Backers", "Tech-Pack Custom Weights"],
    image: "/images/products/velvet_holland.png",
  },
  // 1. Sofa Fabric - Mosha
  {
    id: "fabric-mosha-luxe",
    name: "Mosha Heavyweight Matte Velvet",
    category: "sofa-fabric",
    categoryLabel: "Sofa Fabric",
    subCategory: "Mosha",
    tagline: "Subdued matte face with substantial structured backing",
    description:
      "Mosha is our signature contemporary velvet formulation engineered with a dry matte finish and heavy structured drape. Free of excessive shimmer, it delivers an earthy, architectural aesthetic prized by modern interior designers and contract specifiers.",
    weaveStructure: "Dense Dobby Pile Weave",
    composition: "Blended Micro-Yarns with Reinforced Ground",
    handfeel: "Matte, velvety, thick and grounded",
    suitableFor: ["Deep-Seat Modular Sofas", "Contract Lounge Chairs", "Architectural Window Drapery", "Bespoke Ottomans"],
    features: ["Zero-Glare Matte Aesthetic", "Exceptional Seam Tensile Strength", "Snag-Free Dense Weft", "Sound-Dampening Acoustic Quality"],
    oemOptions: ["Acoustic & Thermal Linings", "Crib 5 Commercial FR Rating", "Custom Yarn-Dye Formulations", "Custom Selvage Weaving"],
    image: "/images/products/velvet_mosha.png",
  },

  // 2. Sofa Cover - Quilted
  {
    id: "cover-quilted-geometric",
    name: "Multi-Needle Quilted Sofa Cover",
    category: "sofa-cover",
    categoryLabel: "Sofa Cover",
    subCategory: "Quilted",
    tagline: "Architectural stitch geometric pattern with bonded silicone non-slip backing",
    description:
      "Precision multi-needle quilted furniture throws and structured slip protectors. Built with layered batting for ergonomic cushioning, reinforced edge binding, and reversible styling suited for busy family living and boutique hospitality suites.",
    weaveStructure: "Computerized Multi-Needle Quilting over Woven Base",
    composition: "Textured Face with High-Loft Polyester Wadding",
    handfeel: "Padded, structured, resilient and cloud-like",
    suitableFor: ["3-Seater Sofas", "L-Shape Sectionals", "Recliners", "Pet-Friendly Luxury Living"],
    features: ["Even Batting Distribution (No Clumping)", "Machine Wash Tested", "Elastic Anchor Straps", "Reversible Design Option"],
    oemOptions: ["Custom Quilting Motifs (Hexagon, Diamond, Wave)", "Private Label Woven Brand Tags", "Custom Sectional Dimension Sizing", "Retail Self-Fabric Zipper Bags"],
    image: "/images/products/quilted_sofa_panel.png",
  },
  // 2. Sofa Cover - Embroidery
  {
    id: "cover-embroidery-corded",
    name: "Embroidered Sofa Cover/Throw",
    category: "sofa-cover",
    categoryLabel: "Sofa Cover",
    subCategory: "Embroidery",
    tagline: "Fine chain-stitch and corded embroidery across structured grounds",
    description:
      "A statement furniture cover embellished with tonal and contrasting corded embroidery. Crafted on high-speed multi-head industrial embroidery machines in our Panipat facility, ensuring crisp motifs that withstand regular cleaning.",
    weaveStructure: "Multi-Head Schiffli & Cord Needlework over Heavy Ground",
    composition: "Rich Weave Base with High-Tensile Rayon / Poly Embroidery Floss",
    handfeel: "Textured raised needlework with soft drape",
    suitableFor: ["Formal Living Room Suites", "Heritage Furniture", "Luxury Villa Interiors", "Showroom Displays"],
    features: ["Precision Stitch Alignment", "Snag-Resistant Back Tie-Offs", "Colourfast Threads", "Tailored Piped Edges"],
    oemOptions: ["Buyer Tech-Pack Custom Vector Motifs", "Metallic & Matte Thread Blends", "Coordinated Swatch Packages", "Custom Barcode Packaging"],
    image: "/images/products/embroidery_sofa_panel.png",
  },
  // 2. Sofa Cover - Fur
  {
    id: "cover-fur-plush",
    name: "Faux-Fur Sofa Slip & Throw Cover",
    category: "sofa-cover",
    categoryLabel: "Sofa Cover",
    subCategory: "Fur",
    tagline: "High-pile cruelty-free plush fur with micro-suede backing",
    description:
      "Sumptuous faux-fur sofa runner and protective cover designed for winter warmth and tactile opulence. Features silky tapered guard hairs bonded to a non-slip micro-suede backing to keep the throw anchored on leather or fabric sofas.",
    weaveStructure: "Circular Knitted High-Pile Faux Fur",
    composition: "Ultra-Soft Acrylic-Poly Blend with Faux Suede Ground",
    handfeel: "Ultra-dense, silky fur glide with grounded back",
    suitableFor: ["Alpine & Winter Hospitality", "Accent Chair Slips", "Chaise Lounge Throws", "Modern Scandinavian Interiors"],
    features: ["Zero Shedding Formulation", "Heat-Set Anti-Static Finish", "Machine Gentle Wash Safe", "Weighted Drape"],
    oemOptions: ["Custom Pile Heights (Short vs. Long Fur)", "Tip-Dyed Two-Tone Frosting", "Bespoke Blanket Stitch Borders", "Branded Presentation Ribbons"],
    image: "/images/products/fur_sofa_panel.png",
  },
  // 2. Sofa Cover - Chenille
  {
    id: "cover-chenille-throw",
    name: "Chenille Sofa Slip",
    category: "sofa-cover",
    categoryLabel: "Sofa Cover",
    subCategory: "Chenille",
    tagline: "Breathable, high-friction woven chenille for effortless draping",
    description:
      "A relaxed yet tailored furniture cover woven in dense chenille yarns. The textured slub structure creates natural grip against upholstery fabrics, preventing shifting during daily use while providing a washable layer of defense.",
    weaveStructure: "Jacquard Dobby Chenille Weft",
    composition: "Yarn-Dyed Chenille & Combed Cotton Blend",
    handfeel: "Substantial, soft, slubbed texture",
    suitableFor: ["All-Day Family Lounges", "Deep Sofas", "Armchairs", "Outdoor Sunroom Daybeds"],
    features: ["Natural High Friction Grip", "Wrinkle Concealing Texture", "Hemmed with Heavy Double-Stitch", "Pre-Shrunk Yarns"],
    oemOptions: ["Custom Fringed or Clean-Hemmed Edges", "Custom Dimension Grading", "Woven Brand Labels", "E-commerce Ready Polybags"],
    image: "/images/products/chenille_sofa_panel.png",
  },
  // 2. Sofa Cover - Printed
  {
    id: "cover-printed-reactive",
    name: "Precision Printed Furniture Cover",
    category: "sofa-cover",
    categoryLabel: "Sofa Cover",
    subCategory: "Printed",
    tagline: "High-definition reactive and pigment print motifs with soft finish",
    description:
      "Contemporary printed sofa covers showcasing crisp botanical, abstract, or geometric narratives. Produced with advanced rotary and digital printing machinery that embeds color deep into the fiber without stiffening the fabric hand.",
    weaveStructure: "Smooth Plain Weave / Twill Ground with Digital Precision Print",
    composition: "Durable Cotton-Poly Canvas Base",
    handfeel: "Smooth, pliable, uncompromised softness",
    suitableFor: ["Seasonal Retail Collections", "Contemporary City Apartments", "Airbnbs & Boutique Rentals", "Boho Decor"],
    features: ["Grade 4+ Wash Fastness", "Vivid Pattern Definition", "Pre-Washed for Dimensional Stability", "Anti-Fray Overlock Seams"],
    oemOptions: ["Exclusive Buyer Artwork Printing", "Placement & Continuous Repeat Scales", "Roll-to-Roll or Cut-to-Pack Supply", "Recycled Fabric Base Options"],
    image: "/images/products/printed_sofa_panel.png",
  },

  // 3. Bedding - Bed Sheets
  {
    id: "bedding-sheets-sateen",
    name: "Contract Bed Sheet Ensembles",
    category: "bedding",
    categoryLabel: "Bedding",
    subCategory: "Bed Sheets",
    tagline: "High thread-count sateen and crisp percale engineered for institutional longevity",
    description:
      "Refined flat sheets, fitted sheets, and pillowcase sets woven from combed long-staple yarns. Engineered to withstand commercial laundry cycles while retaining a lustrous silk-like surface and breathable softness.",
    weaveStructure: "4/1 Sateen Weave & 1/1 Crisp Percale Options",
    composition: "100% Combed Cotton or Cotton-Rich Institutional Poly-Cotton",
    handfeel: "Silky, cooling, smooth and crisp against skin",
    suitableFor: ["5-Star Hospitality", "Luxury Bedding Retail Programs", "Master Bedroom Suites", "Export Private Label"],
    features: ["Deep Fitted Pockets with All-Round Elastic", "Merrow & French Seam Detailing", "Anti-Pilling Calendering", "Chemical-Safe Dyeing"],
    oemOptions: ["Custom Thread Counts", "Self-Fabric Embroidered Hemstitching", "Custom Hotel Size Specs (King, Queen, Twin, Euro)", "Eco-Friendly Kraft Gift Boxes"],
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80",
  },
  // 3. Bedding - Bed Cover
  {
    id: "bedding-cover-jacquard",
    name: "Heavy Matelassé Bed Cover & Bedspread",
    category: "bedding",
    categoryLabel: "Bedding",
    subCategory: "Bed Cover",
    tagline: "Embossed architectural relief jacquard with grand floor-length drop",
    description:
      "Substantial woven bed covers featuring complex matelassé and pique relief motifs. Designed to anchor the bed as a standalone spread or tailored layer, offering weighty drape and effortless wrinkle recovery.",
    weaveStructure: "Multi-Shuttle Jacquard Matelassé",
    composition: "Yarn-Dyed Cotton & Structural Textured Filaments",
    handfeel: "Substantial, three-dimensional, structured",
    suitableFor: ["Hotel Turndown Ensembles", "Luxury Master Bedrooms", "Resort Lodges", "Showcase Bedrooms"],
    features: ["Seamless Wide-Width Weaving", "Heavy Architectural Drape", "Reversible Textured Relief", "Enzyme Washed Hand"],
    oemOptions: ["Coordinated Euro Sham Sets", "Bespoke Jacquard Heraldic / Geometric Weaving", "Pre-Packaged Retail Hanger Bags", "Custom Flange Widths"],
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80",
  },
  // 3. Bedding - Duet (Duvet)
  {
    id: "bedding-duvet-shell",
    name: "Down-Alternative Duvet & Duet Shells",
    category: "bedding",
    categoryLabel: "Bedding",
    subCategory: "Duet",
    tagline: "Baffled-box down-proof micro-denier duvet with corner anchor loops",
    description:
      "All-season duvet inserts (duets) and duvet covers crafted with baffled-box chambers to prevent fill shifting. Features breathable microfiber or sateen shells with double-stitched piping and internal anchor loops.",
    weaveStructure: "Down-Proof Cambric Weave with Baffled Chamber Construction",
    composition: "Micro-Denier Virgin Fiberfill in Combed Cotton or Microfiber Shell",
    handfeel: "Cloud-like loft, featherweight insulation, airy warmth",
    suitableFor: ["Year-Round Climate Sleeping", "Luxury Hotels", "Private Label Home Programs", "Student & Guest Housing"],
    features: ["Zero Fill Shifting via 3D Baffle Walls", "Corner Tie Anchors (8 Points)", "Hypoallergenic Microfiber", "Machine Wash & Tumble Dry Tested"],
    oemOptions: ["Custom Fill Weights for Summer / Winter Programs", "Custom Chamber Quilting Geometries", "Branded Woven Corner Loops", "Vacuum Compression Export Packing"],
    image: "/images/products/bedding_duvet.png",
  },
  // 3. Bedding - Comforter
  {
    id: "bedding-comforter-quilted",
    name: "Plush Velvet/Fabric Comforter",
    category: "bedding",
    categoryLabel: "Bedding",
    subCategory: "Comforter",
    tagline: "Seamless top-stitched plush face with breathable reverse",
    description:
      "Heavyweight pre-filled comforters combining our signature velvet or micro-plush textiles on the face with a breathable percale reverse. Tailored with knife-edge or piped seams and multi-needle box lock stitching.",
    weaveStructure: "Face Velvet Bonded to Siliconized Hollowfiber Core",
    composition: "Velvet / Chenille Face with 100% Breathable Cotton Reverse",
    handfeel: "Deeply plush, cocooning, luxurious warmth",
    suitableFor: ["Winter Bedding Ranges", "Luxury Guest Suites", "Boutique Hospitality", "Modern Master Bedrooms"],
    features: ["Continuous Filament Anti-Shift Quilting", "High Thermal Retention", "Subtle Velvet Sheen", "Fade & Lint Resistant"],
    oemOptions: ["Matching Pillow Sham 3-Piece Packs", "Custom Embroidered Medallion Accents", "Bespoke Dye Lots", "Retail Ribbon Wrapped Bales"],
    image: "/images/products/bedding_comforter.png",
  },

  // 4. Cushions - Embroidery
  {
    id: "cushions-embroidery-motif",
    name: "Embroidered Accent Cushion Covers",
    category: "cushions",
    categoryLabel: "Cushions",
    subCategory: "Embroidery",
    tagline: "Multi-textured needlecraft with cord, loop, and satin-stitch flourishes",
    description:
      "Architectural cushion covers featuring intricate geometric and botanical embroidery. Rendered on durable slub, linen-look, and velvet grounds with reinforced concealed YKK zippers and overlocked inner seams.",
    weaveStructure: "Textured Ground with Multi-Head High-Density Embroidery",
    composition: "Rich Fabric Ground with Rayon & Matte Poly Embroidery Floss",
    handfeel: "Tactile relief with smooth background fabric",
    suitableFor: ["Sofa Accent Vignettes", "Bed Throw Pillows", "Lounge Armchairs", "Retail Gift Ranges"],
    features: ["Concealed Bottom Zipper Closure", "All-Overlock Internal Seams", "Precision Stitch Tension", "Spot Clean & Dry Clean Tested"],
    oemOptions: ["Custom Buyer Vector Artwork Conversion", "Choice of Piping, Flange, or Knife Edges", "Down / Poly Insert Sourcing Options", "Custom Hangtag & Barcode Application"],
    image: "https://images.unsplash.com/photo-1579656381226-5fc0f0100c3b?auto=format&fit=crop&w=1200&q=80",
  },
  // 4. Cushions - Chenille
  {
    id: "cushions-chenille-yarn",
    name: "Yarn-Dyed Chenille Cushion Covers",
    category: "cushions",
    categoryLabel: "Cushions",
    subCategory: "Chenille",
    tagline: "Substantial plush texture with multi-color melange yarn depth",
    description:
      "Everyday luxury cushion covers woven from yarn-dyed chenille fibers. The multi-dimensional yarn twists produce deep visual texture and enduring softness that ages gracefully with regular handling.",
    weaveStructure: "Dobby Woven Chenille with Structural Warp",
    composition: "100% Softened Poly-Chenille or Cotton-Chenille Blend",
    handfeel: "Thick, ultra-soft, warm velvety pile",
    suitableFor: ["Casual Living Spaces", "High-Traffic Family Rooms", "Hotel Guest Rooms", "Sectional Pillows"],
    features: ["Natural Soil & Wear Masking", "Heavyweight Drape", "Machine Wash Friendly", "Reinforced Stress Points"],
    oemOptions: ["Bespoke Yarn Melange Combinations", "Contrast Color Piping", "Custom Size Grading (40x40, 45x45, 50x50, 30x50 cm)", "Retail 2-Pack / 4-Pack Bundles"],
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
  },
  // 4. Cushions - Fur
  {
    id: "cushions-fur-plush",
    name: "Ultra-Plush Faux Fur Cushion Covers",
    category: "cushions",
    categoryLabel: "Cushions",
    subCategory: "Fur",
    tagline: "Sensory faux rabbit and sheepskin fur with matching micro-suede reverse",
    description:
      "Tactile statement cushions featuring cruelty-free faux fur on the face and a tonal micro-suede reverse. Engineered with shedding-free fibers and premium concealed zippers for a seamless presentation.",
    weaveStructure: "High-Density Circular Knit Faux Fur",
    composition: "Premium Fine-Denier Fur Face with Poly-Suede Back",
    handfeel: "Incredibly plush, silky-soft sensory glide",
    suitableFor: ["Winter Interior Decor", "Luxury Bedroom Accents", "Boutique Hotel Lounges", "Contemporary Scandinavian Furniture"],
    features: ["Non-Shedding Heat-Bonded Roots", "Invisible Bottom Zipper", "Colorfast Dyeing", "Gentle Cycle Washable"],
    oemOptions: ["Custom Pile Length & Density", "Two-Tone Ombré Tip Dyeing", "Buyer Custom Labels", "Retail Polybag with Branded Header Card"],
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1200&q=80",
  },
  // 4. Cushions - Printed
  {
    id: "cushions-printed-digital",
    name: "High-Definition Printed Cushion Covers",
    category: "cushions",
    categoryLabel: "Cushions",
    subCategory: "Printed",
    tagline: "Vibrant placement and repeat prints across velvet and linen-texture bases",
    description:
      "Eye-catching printed cushions that bring contemporary art and nature motifs into the interior. Available on velvet grounds for rich luminous depth or linen-slub grounds for casual architectural charm.",
    weaveStructure: "Precision Digital & Rotary Printing on Smooth Velvet or Canvas Ground",
    composition: "Lustrous Velvet Base or Textured Poly-Cotton Base",
    handfeel: "Silky velvet glide or textured organic canvas",
    suitableFor: ["Statement Living Rooms", "Patio & Covered Sunrooms", "Bespoke Interior Projects", "Boutique Hospitality"],
    features: ["Razor-Sharp Graphic Resolution", "Eco-Friendly Water-Based Inks", "UV Fade Resistant", "Concealed Bottom Zipper"],
    oemOptions: ["Buyer Exclusive Print Licensing / Upload", "Double-Sided Print or Solid Color Reverse", "Coordinated Piping Colors", "Custom Barcode Packaging"],
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
  },
];
