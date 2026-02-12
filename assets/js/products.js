const namotecProducts = [

  /* ================================
     MJP MACHINES
  ================================ */

  {
    id: "zczb-singlehead-wax-printer",
    name: "Zczb Single-Head Wax Printer",
    category: "MJP Machines",
    image: "assets/images/namotec_img/product/MJP_wx.jpg",
    printingTechnology: "MJP",
    printingArea: "400 × 200 × 144 mm",
    resolution: "XHD 120 DPI (16µ)",
    accuracy: "±0.04 mm / 20 mm",
    powerSupply: "AC 220–240V, 50Hz, 3KW",
    machineSize: "1415 × 790 × 1160 mm",
    netWeight: "380 kg",
    grossWeight: "500 kg",
    software: "3D Sprint",
    fileFormats: [".stl", ".slc"],
    materials: {
      buildMaterial: "3D Build Material (1.2 kg/bottle)",
      supportMaterial: "3D Support Material (1.3 kg/bottle)"
    },
    operatingSystem: "Windows 7 / Windows 10 (64-bit)",
    environment: "18–28°C, 30–70% humidity",
    application: [
      "Jewellery wax moulds",
      "Investment casting"
    ]
  },

  {
    id: "3d-matrix-elite-7s",
    name: "3D Matrix Elite 7S",
    category: "MJP Machines",
    image: "assets/images/namotec_img/product/elite_7s.jpg",
    printingTechnology: "MJP (Multi Jet Printing)",
    printingArea: "300 × 200 × 150 mm",
    resolution: "High Definition 1200 DPI (16µ layer thickness)",
    accuracy: "±0.02–0.04 mm",
    powerSupply: "AC 220–240V, 50/60Hz, 2.5KW",
    machineSize: "1200 × 750 × 1100 mm",
    netWeight: "350 kg",
    grossWeight: "450 kg",
    software: "3D Matrix Print Manager",
    fileFormats: [".stl", ".slc", ".obj"],
    materials: {
      buildMaterial: "High Precision Wax Material (1.2 kg cartridge)",
      supportMaterial: "Removable Support Wax (1.3 kg cartridge)"
    },
    operatingSystem: "Windows 10 / Windows 11 (64-bit)",
    environment: "20–28°C, 40–70% humidity",
    application: [
      "Jewellery master patterns",
      "Investment casting",
      "Dental casting patterns",
      "Precision industrial prototypes"
    ]
  },


  {
    id: "zczb-triplehead-wax-printer",
    name: "Zczb Triple-Head Wax Printer",
    category: "MJP Machines",
    image: "assets/images/namotec_img/product/Zczb-triple-head.jpg",
    printingTechnology: "MJP",
    printingSize: "400 × 210 × 150 mm",
    resolution: [
      "XHD 1440×1440×1690 DPI (15µ)",
      "UHD 2880×1440×2100 DPI (12µ)"
    ],
    accuracy: "±0.04 mm / 20 mm",
    powerSupply: "AC 220–240V, 50Hz, 3KW",
    machineSize: "1468 × 1415 × 675 mm",
    netWeight: "450 kg",
    grossWeight: "580 kg",
    software: "WUKONG",
    fileFormats: ["stl", "slc", "stp", "step", "obj", "3mf", "amf"],
    operatingSystem: "Windows 10 / Windows 11 (64-bit)",
    materials: {
      buildMaterial: "3D-ZB-ZT (1.5 kg)",
      supportMaterial: "3D-ZB-ZC (1.6 kg)"
    },
    environment: "18–28°C, 30–70% humidity",
    application: [
      "High-detail jewellery wax models",
      "Industrial casting"
    ]
  },


  /* ================================
      LCD MACHINES
   ================================ */

  {
    id: "gk3-alpha-series",
    name: "GK3 Alpha Series",
    category: "LCD Printers",
    image: "assets/images/namotec_img/product/GK3_series.jpg",
    models: "GK3 (T) 405 / GK3 (B) 405 / GK3 Pro 385",
    printingTechnology: "LCD (Masked Stereolithography)",
    buildVolume: "211 × 118 × 240 mm",
    exposureSpeed: "1.5–2.5 sec per layer (0.05 mm)",
    lcdResolution: "15120 × 6230 (16K)",
    xyResolution: "14 × 19 µm",
    zAxisAccuracy: "±0.05 mm",
    layerThickness: "0.03 / 0.05 / 0.1 mm",
    uvWavelength: "405 nm (GK3 T/B) / 385 nm (GK3 Pro)",
    lcdScreen: "16K Ordinary Screen (T/B) / 16K High-Transparency Screen (Pro)",
    uvEnergy: "4600–5200 µW/cm² (T/B) / 4200–4800 µW/cm² (Pro)",
    zAxisLeadScrew: "T-Type Screw (GK3 T) / Ball Screw (GK3 B & Pro)",
    releaseFilm: "NFEP (T/B) / C-PFA ACF Optimized (Pro)",
    releaseFilmLifespan: "80,000 layers (T/B) / 40,000 layers (Pro)",
    fileFormats: [".stl", ".obj"],
    fileTransfer: "USB, WiFi, Wired Network",
    software: "UniFormation Slicer / Chitubox / Lychee Slicer",
    resinCartridgeCapacity: "1.2 kg",
    resinVatCapacity: "800 ml (approx. 900 g)",
    automaticFeeding: "Yes",
    automaticHeating: "25°C / 30°C",
    camera: "720P, 2 Megapixels",
    ratedVoltage: "100–240V",
    ratedPower: "Printing 130W, Heating 120W",
    machineSize: "392 × 332 × 520 mm",
    packageSize: "500 × 440 × 660 mm",
    grossWeight: "24 kg",
    operatingSystem: "Windows 7 (64-bit) / iOS 10.1 or above",
    application: [
      "Jewellery resin models",
      "High-detail prototypes",
      "Dental models",
      "Miniatures and precision parts"
    ]
  },

  {
    id: "piocreate-printers",
    name: "PioCreate LCD Printer",
    category: "LCD Printers",
    image: "assets/images/namotec_img/product/piocreat.png",
    printingTechnology: "LCD Resin",
    display: "10.1” Ultra HD Mono LCD",
    resolution: "13320 × 5120",
    printingSize: "223 × 126 × 200 mm",
    layerThickness: "0.01 – 0.2 mm",
    xyAccuracy: "16.8 × 24.8 µm",
    printSpeed: "70 mm/h",
    power: "240W",
    connection: ["USB", "WiFi"],
    materialsSupported: [
      "Castable Resin",
      "ABS Resin",
      "Water Washable Resin",
      "PLA Resin"
    ],
    applications: [
      "Jewellery prototyping",
      "High-detail resin models"
    ]
  },

  {
    id: "halot-x1-16k",
    name: "HALOT-X1 16K",
    category: "LCD Printers",
    image: "assets/images/namotec_img/product/halot-x1.jpg",

    printingTechnology: "LCD",
    lightSource: "Honeycomb Matrix Light Source",
    exposureIntensity: "6500 ±10% µW/cm²",
    resolution: "16K (15120 × 6230 px)",
    pixelSize: "14 × 19 µm",
    zAxisAccuracy: "0.01 mm",
    layerThickness: "0.01–0.2 mm",
    printingSpeed: "Max. 170 mm/h",

    buildVolume: "211.68 × 118.37 × 200 mm",
    productDimensions: "344 × 331 × 434 mm",
    packageDimensions: "430 × 420 × 535 mm",
    netWeight: "12.75 kg",
    grossWeight: "16.01 kg",

    touchScreen: "3.98-inch Capacitive Touch Screen",
    software: "HALOT BOX / Chitubox",
    dataTransmission: "USB / WiFi",
    inputVoltage: "100–120V / 200–240V, 50–60Hz",
    power: "350W",

    fileFormats: [".stl", ".obj"],
    application: [
      "Jewellery resin models",
      "High-detail prototypes",
      "Miniatures",
      "Dental models"
    ]
  },

  /* ================================
     ENGRAVING & WELDING MACHINES
   ================================ */

  {
    id: "fiber-laser-cutting",
    name: "Motorized Enclosed Fiber Laser Cutting & Marking Machine",
    category: "Engraving & Welding Machines",
    image: "assets/images/namotec_img/product/enclosed_laser_cutting_machine.jpg",
    laserPower: "50W / 100W",
    laserSource: "Raycus",
    markingArea: "100 × 100 mm / 175 × 175 mm",
    markingSpeed: "Up to 7000 mm/s",
    accuracy: "0.01 mm",
    features: [
      "Motorized Z-axis",
      "Sheet cutting feeder",
      "Rotary marking"
    ],
    application: [
      "Jewellery sheet cutting",
      "Engraving & logo marking"
    ]
  },

  {
    id: "portable-laser-welder",
    name: "Standlone Laser Welding Machine",
    category: "Engraving & Welding Machines",
    image: "assets/images/namotec_img/product/portable-laser2.png",
    laserSource: "ND:YAG",
    wavelength: "1064 nm",
    maxPower: "200 W",
    energy: "200 Joule",
    pulseWidth: "1 – 20 ms",
    frequency: "1 – 50 Hz",
    spotSize: "0.3 – 3 mm",
    positioningAccuracy: "±0.02 mm",
    cooling: "Air + Water Circulation",
    application: [
      "Gold & silver repair",
      "Stone setting repair"
    ]
  },

  {
    id: "portable-laser-welder",
    name: "Desktop Laser Welding Machine",
    category: "Engraving & Welding Machines",
    image: "assets/images/namotec_img/product/portable-laser.jpg",
    laserSource: "ND:YAG",
    wavelength: "1064 nm",
    maxPower: "200 W",
    energy: "200 Joule",
    pulseWidth: "1 – 20 ms",
    frequency: "1 – 50 Hz",
    spotSize: "0.3 – 3 mm",
    positioningAccuracy: "±0.02 mm",
    cooling: "Air + Water Circulation",
    application: [
      "Gold & silver repair",
      "Stone setting repair"
    ]
  },

  {
  id: "cnc-s30-engraving-machine",
  name: "CNC Engraving Machine",
  category: "Engraving & Welding Machines",
  image: "assets/images/namotec_img/product/cnc.png",
  description: "High-precision four-axis CNC engraving machine designed for jewellery, stone, and micro-detail processing with advanced servo control and imported components.",

  specifications: {
    model: "S&S-30 Engraving Machine",
    xyzTravel: "147 × 118 × 85 mm",
    threeDimensionalProcessing: "80 × 110 mm",
    reliefProcessingSize: "125 × 110 × 80 mm",
    appearanceSize: "600 × 505 × 590 mm",
    weight: "≈ 80 kg",
    materialSupport: "Aluminum alloy",
    engravingPrecision: "0.01 mm",
    spindleSpeed: "0 – 24,000 rpm",
    machiningSpeed: "0 – 3,000 mm/min",
    spindlePower: "800W four-bearing water-cooled inverter spindle",
    guideway: "Imported 20 square rail",
    screwType: "Imported TBI screw",
    driveType: "Mixed servo",
    clampingToolShankDiameter: "2 / 3 / 4 / 6 mm",
    ratedVoltage: "AC 220V / 50–60 Hz",
    overallPower: "1.2 KW",
    controlSystem: "Ly400 four-axis linkage CNC system"
  },

  applications: [
    "Jewellery engraving",
    "Gemstone engraving",
    "Relief carving",
    "Micro-detail precision machining"
  ],

  keyFeatures: [
    "Four-axis linkage control",
    "High engraving accuracy (0.01 mm)",
    "Imported guide rails and screws",
    "Water-cooled inverter spindle",
    "Compact industrial design"
  ]
},



  /* ================================
     Electro Polishing Machines
  ================================ */

  {
    id: "electro-polishing-machine",
    name: "Electro Polishing Machine",
    category: "Electro Polishing Machines",
    image: "assets/images/namotec_img/product/electro-polishing.png",

    machineType: "Electro Polishing Machine",
    tankMaterial: "Leak-proof PP Tank",
    tankCapacity: "20 Litres",

    voltage: "25V",
    currentCapacity: "25 Amp CCCV Rectifier",
    polishingCompatibility: "Suitable for different jewellery ornaments",

    controlSystem: "Interactive display with adjustable settings",
    motorSystem: "High-capacity motorized movement",
    performanceStandard: "Developed as per German Standards",

    efficiencyImprovement: "Reduces Dhaga polish and manual polishing by approx. 85%",
    chemicalCompatibility: "Uses same chemical for Silver and Gold jewellery",

    buildQuality: "Sturdy industrial build",
    maintenance: "Low maintenance design",

    application: [
      "Gold jewellery polishing",
      "Silver jewellery polishing",
      "Ornament finishing",
      "Bulk jewellery surface treatment"
    ]
  },


  /* ================================
     Wax and Resins
  ================================ */

  {
    id: "castable-resin",
    name: "DSN 100 Direct Castable Resin",
    category: "Wax & Resins",
    image: "assets/images/namotec_img/product/resine.png",

    resinType: "Direct Castable Resin",
    compatibleTechnology: "DLP / LCD / SLA 3D Printers",
    availableColors: ["Yellow", "Green", "Purple"],

    castingType: "Jewellery Investment Casting",
    shrinkage: "Near Zero Shrinkage",
    ashContent: "Low Ash Content for Clean Burnout",
    surfaceFinish: "High Detail & Smooth Surface Output",

    recommendedLayerThickness: "0.03 – 0.05 mm",
    wavelengthCompatibility: "405 nm (Standard LCD/DLP Printers)",
    curingType: "UV Light Curing",

    bottleMaterial: "Opaque UV-Protected Bottle",
    packagingSize: "1 kg Bottle",

    application: [
      "Gold jewellery casting",
      "Silver jewellery casting",
      "Ring patterns",
      "Pendant and intricate ornament models"
    ],

    storageCondition: "Store in cool, dry place away from direct sunlight",
    shelfLife: "12 Months (Unopened)"
  },

  {
    id: "printing-wax",
    name: "Industrial 3D Printing Wax",
    category: "Wax & Resins",
    image: "assets/images/namotec_img/product/wax.png",

    materialType: "Castable Printing Wax",
    compatibleTechnology: "MJP (Multi Jet Printing) Wax Printers",
    availableColors: ["Blue", "Purple", "Green"],

    packagingType: "Sealed Cartridge / Bottle",
    packagingSize: "1.2 kg Cartridge",

    meltingPoint: "Low Melting Point for Easy Burnout",
    ashContent: "Zero Ash Content",
    shrinkage: "Minimal Shrinkage",
    surfaceFinish: "Ultra-Smooth Surface Finish",
    detailAccuracy: "High Precision Micro-Detail Output",

    application: [
      "Jewellery master patterns",
      "Investment casting",
      "Ring and pendant models",
      "Fine detailed ornaments"
    ],

    compatibility: "Suitable for Single-Head and Multi-Head MJP Machines",
    storageCondition: "Store in cool, dry place below 30°C",
    shelfLife: "24 Months (Unopened)"
  },

  /* ================================
      Spare Parts 
    ================================ */

  {
    id: "spare-parts-kit",
    name: "Spare Parts & Maintenance Kit",
    category: "Spare Parts",
    image: "assets/images/namotec_img/product/spare-parts.png",

    compatibleMachines: "LCD / DLP / MJP 3D Printers",

    includedComponents: [
      "Cooling Fan (DC 12V, 0.5A)",
      "Roller Kit Assembly",
      "Industrial HDMI Data Cable",
      "Control PCB Board Module",
      "Sensor & Wiring Set",
      "Pulley / Wheel Set",
      "Mounting Hardware & Connectors"
    ],

    fanSpecification: "DC 12V, 0.5A Brushless Cooling Fan",
    pcbType: "Main Control Board with Integrated Circuit Components",
    cableType: "High-Speed Shielded HDMI Cable",
    rollerMaterial: "Precision Aluminum Roller",
    wiringType: "Pre-assembled Connector Cables",

    installationType: "Direct Replacement / Plug & Play (Model Dependent)",
    buildQuality: "Industrial Grade Components",
    durability: "Long Service Life & Stable Performance",

    application: [
      "3D Printer Maintenance",
      "Machine Repair & Replacement",
      "Industrial Printer Servicing",
      "Preventive Maintenance Kits"
    ],

    packaging: "Protective Anti-Static & Foam Packed Components",
    warranty: "Limited Manufacturer Warranty (Model Dependent)"
  },


  /* ================================
     Gemstone & Boxes
    ================================ */

  {
    id: "gemstones-collection",
    name: "Gemstones Collection",
    category: "Gemstones & Boxes",
    image: "assets/images/namotec_img/product/gem-stones.png",
    productType: "Natural & Lab-Cut Gemstones",
    processing: "Rough Stone / Faceted / Cabochon Finish",
    origin: "Ethically Sourced & Factory Cut",

    availableTypes: [
      "Amethyst",
      "Emerald",
      "Ruby",
      "Sapphire",
      "Topaz",
      "Citrine",
      "Garnet",
      "Aquamarine",
      "Tourmaline",
      "Cubic Zirconia (Lab-Created)"
    ],

    availableCuts: [
      "Round Cut",
      "Oval Cut",
      "Emerald Cut",
      "Princess Cut",
      "Marquise Cut",
      "Pear Cut",
      "Cushion Cut",
      "Heart Cut",
      "Cabochon"
    ],

    availableColors: [
      "Purple",
      "Green",
      "Red",
      "Blue",
      "Yellow",
      "Pink",
      "White",
      "Multicolor"
    ],

    clarityGrade: "AAA / AA (Depending on Stone Type)",
    surfaceFinish: "High Polish & Precision Faceting",
    treatmentType: "Natural / Heat Treated (Model Dependent)",

    sizeRange: "2mm – 20mm (Custom Sizes Available)",
    usage: [
      "Jewellery Making",
      "Gem Collectors",
      "Custom Ring & Pendant Design",
      "Wholesale Gem Supply",
      "Lapidary & Cutting Services"
    ],

    packaging: "Secure Gem Pack / Bulk Wholesale Packaging",
    availability: "Retail & Wholesale Orders Accepted"
  },

  {
    id: "gem-display-boxes",
    name: "Gem & Jewellery Display Boxes",
    category: "Gemstones & Boxes",
    image: "assets/images/namotec_img/product/box.png",

    productType: "Luxury Gemstone & Ring Display Boxes",
    materialOptions: [
      "Natural Stone Finish (Malachite / Marble / Onyx Style)",
      "Wood Finish",
      "Metallic Finish (Gold / Silver)",
      "Velvet & Leatherette",
      "Glass Top Display Case"
    ],

    interiorMaterial: "Soft Velvet Cushion Insert",
    availableShapes: [
      "Square Box",
      "Rectangle Box",
      "Round Case",
      "Transparent Display Frame",
      "Cone Ring Display Stand",
      "Watch Display Stand"
    ],

    colorOptions: [
      "Black",
      "Gold",
      "Silver",
      "Green",
      "Blue",
      "Pink",
      "Wood Texture",
      "Marble Texture"
    ],

    usage: [
      "Gemstone Presentation",
      "Ring Display",
      "Jewellery Storage",
      "Retail Counter Display",
      "Wholesale Packaging",
      "Gift Packaging"
    ],

    closureType: "Magnetic / Hinged Lid / Snap Lock",
    finish: "Premium Gloss / Matte Finish",
    customization: "Custom Logo Branding Available",

    packaging: "Protective Box Packing for Safe Transport",
    targetMarket: [
      "Jewellers",
      "Gem Collectors",
      "Retail Jewellery Stores",
      "Wholesale Gem Suppliers"
    ]
  },

  // {
  //   id: "dlp-dm-series",
  //   name: "DLP-DM200 / DLP-DM300 / DLP-DM400",
  //   category: "3D & Wax Printing Machines",
  //   image: "assets/images/namotec_img/product/DLP-series.png",
  //   printingTechnology: "DLP",
  //   printingSizes: [
  //     "192 × 108 × 120 mm",
  //     "288 × 162 × 300 mm",
  //     "384 × 216 × 330 mm"
  //   ],
  //   xyResolution: ["50 µm", "75 µm", "100 µm"],
  //   layerThickness: "0.03 – 0.15 mm",
  //   lightSource: "4K 405nm",
  //   software: "Voxel Dance Tango",
  //   fileFormats: ["igs", "stl", "step"],
  //   operatingSystem: "Zongheng Embedded System",
  //   applications: [
  //     "Mass jewellery production",
  //     "High-speed casting models"
  //   ]
  // },

  // {
  //   id: "melt-m1-m3",
  //   name: "Melt M1 & M3 Wax Printer",
  //   category: "3D & Wax Printing Machines",
  //   image: "assets/images/namotec_img/product/Melt-M1-M3.jpg",
  //   printingTechnology: "Multi-Jet Wax Printing",
  //   buildArea: "285 × 218 × 100 mm",
  //   resolution: "1200 × 1200 × 1600 DPI",
  //   layerHeight: "16 µm",
  //   printerHead: "Xerox High Temperature Series",
  //   printSpeed: "6.3 / 4.2 / 2.1 mm per hour",
  //   dimensions: "1390 × 815 × 1500 mm",
  //   connection: ["USB", "LAN"],
  //   features: [
  //     "Fully automatic system",
  //     "Adaptive speed control",
  //     "High density packing"
  //   ],
  //   application: [
  //     "Gold & silver investment casting",
  //     "Multi-material wax models"
  //   ]
  // }, 

];

const categoryMedia = {
  "MJP Machines": [
    { type: "image", src: "assets/images/namotec_img/gallery/3d-print1.jpeg" },
    { type: "image", src: "assets/images/namotec_img/gallery/3d-print2.jpeg" },
    { type: "video", src: "assets/images/namotec_img/gallery/3d printing.mp4" }
  ],

  "LCD Printers": [
    { type: "video", src: "assets/images/namotec_img/gallery/Laser automation marking and cutting.mp4" }
  ],

  "Engraving & Welding Machines": [
    { type: "image", src: "assets/images/namotec_img/product/portable-laser2.png" },
    { type: "video", src: "assets/images/namotec_img/gallery/Engraving & Welding Machine.mp4" },   
    { type: "video", src: "assets/images/namotec_img/gallery/Cnc 4 axis.mp4" },    
    { type: "video", src: "assets/images/namotec_img/gallery/laser welding.mp4" },
  ],

  "Electro Polishing Machines": [
    { type: "image", src: "assets/images/namotec_img/gallery/polishing2.jpeg" },
    { type: "image", src: "assets/images/namotec_img/gallery/polishing3.jpeg" },
    { type: "video", src: "assets/images/namotec_img/gallery/polishing.mp4" }
  ],

  "Wax & Resins": [
    { type: "image", src: "assets/images/namotec_img/gallery/wax1.jpeg" },
    { type: "image", src: "assets/images/namotec_img/gallery/wax2.jpeg" },
    { type: "image", src: "assets/images/namotec_img/gallery/wax3.jpeg" },
    { type: "image", src: "assets/images/namotec_img/gallery/wax4.jpeg" }
  ],

  "Spare Parts": [
    { type: "image", src: "assets/images/namotec_img/gallery/spare-parts1.jpeg" },
    { type: "image", src: "assets/images/namotec_img/gallery/spare-parts2.jpeg" },
    { type: "image", src: "assets/images/namotec_img/gallery/spare-parts3.jpeg" },
    { type: "image", src: "assets/images/namotec_img/gallery/spare-parts4.jpeg" },
    { type: "image", src: "assets/images/namotec_img/gallery/spare-parts5.jpeg" },
  ],

  "Gemstones & Boxes": [
    { type: "image", src: "assets/images/namotec_img/product/gem-stones.png" },
    { type: "image", src: "assets/images/namotec_img/product/box.png" }
  ],
};