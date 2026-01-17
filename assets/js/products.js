const namotecProducts = [

/* ================================
   3D & WAX PRINTING MACHINES
================================ */

{
  id: "mjp-industrial-printer",
  name: "MJP Industrial Wax Printer",
  category: "3D & Wax Printing Machines",
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
  operatingSystem: "Windows 7 / 10 (64-bit)",
  environment: "18–28°C, 30–70% humidity",
  application: [
    "Jewellery wax moulds",
    "Investment casting"
  ]
},

{
  id: "wukong-mjp-printer",
  name: "WUKONG MJP Printer",
  category: "3D & Wax Printing Machines",
  printingTechnology: "MJP",
  printingSize: "400 × 210 × 150 mm",
  resolution: "XHD 1440×1440×1690 DPI (15µ) / UHD 2880×1440×2100 DPI (12µ)",
  accuracy: "±0.04 mm / 20 mm",
  powerSupply: "AC 220–240V, 50Hz, 3KW",
  machineSize: "1468 × 1415 × 675 mm",
  netWeight: "450 kg",
  grossWeight: "580 kg",
  software: "WUKONG",
  fileFormats: ["stl", "slc", "stp", "step", "obj", "3mf", "amf"],
  operatingSystem: "Windows 10 / 11 (64-bit)",
  materials: {
    buildMaterial: "3D-ZB-ZT (1.5 kg)",
    supportMaterial: "3D-ZB-ZC (1.6 kg)"
  },
  application: [
    "High-detail jewellery wax models",
    "Industrial casting"
  ]
},

{
  id: "alpha-14k-16k",
  name: "ALPHA 14K / 16K Resin Printer",
  category: "3D & Wax Printing Machines",
  printingTechnology: "LCD Resin",
  display: "10.1” Ultra HD Mono LCD",
  resolution: "13320 × 5120",
  printingSize: "223 × 126 × 200 mm",
  layerThickness: "0.01 – 0.2 mm",
  xyAccuracy: "16.8 × 24.8 µm",
  printSpeed: "70 mm/h",
  materialsSupported: [
    "Castable Resin",
    "ABS Resin",
    "Water Washable Resin",
    "PLA Resin"
  ],
  power: "240W",
  connection: ["USB", "WiFi"],
  applications: [
    "Jewellery prototyping",
    "High-detail resin models"
  ]
},

{
  id: "dlp-dm-series",
  name: "DLP-DM200 / DLP-DM300 / DLP-DM400",
  category: "3D & Wax Printing Machines",
  printingTechnology: "DLP",
  printingSizes: [
    "192 × 108 × 120 mm",
    "288 × 162 × 300 mm",
    "384 × 216 × 330 mm"
  ],
  xyResolution: ["50 µm", "75 µm", "100 µm"],
  layerThickness: "0.03 – 0.15 mm",
  lightSource: "4K 405nm",
  software: "Voxel Dance Tango",
  fileFormats: ["igs", "stl", "step"],
  applications: [
    "Mass jewellery production",
    "High-speed casting models"
  ]
},

{
  id: "melt-m1-m3",
  name: "Melt M1 & M3 Wax Printer",
  category: "3D & Wax Printing Machines",
  printingTechnology: "Multi-Jet Wax Printing",
  buildArea: "285 × 218 × 100 mm",
  resolution: "1200 × 1200 × 1600 DPI",
  layerHeight: "16 µm",
  printerHead: "Xerox High Temperature Series",
  speed: "6.3 / 4.2 / 2.1 mm per hour",
  application: [
    "Gold & silver investment casting",
    "Multi-material wax models"
  ]
},

{
  id: "waxjet-510",
  name: "WaxJet 510",
  category: "3D & Wax Printing Machines",
  printingTechnology: "MJP Wax Jet",
  application: [
    "K-Gold wax mould casting",
    "High-precision jewellery wax printing"
  ],
  keyBenefits: [
    "Smooth wax surface",
    "Minimal wax waste",
    "High efficiency"
  ]
},

/* ================================
   LASER MACHINES
================================ */

{
  id: "portable-laser-welder",
  name: "Portable Jewellery Laser Welding Machine",
  category: "Laser Welding Machines",
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
  id: "fiber-laser-cutting",
  name: "Motorized Enclosed Fiber Laser Cutting & Marking Machine",
  category: "Laser Cutting & Marking Machines",
  laserPower: "50W / 100W",
  laserSource: "Raycus",
  markingArea: "100×100 mm / 175×175 mm",
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

/* ================================
   CNC & FINISHING
================================ */

{
  id: "cnc-engraving-4axis",
  name: "4-Axis CNC Engraving Machine",
  category: "CNC Engraving Machines",
  workingArea: "150 × 80 mm",
  spindlePower: "1 kW",
  applications: [
    "Jewellery engraving",
    "Stone & gem cutting",
    "MOP & glass engraving"
  ]
},

{
  id: "electropolishing-machine",
  name: "Electropolishing Machine (German Standard)",
  category: "Electropolishing Machines",
  tankCapacity: "20 Litres",
  rectifier: "25V / 25A CCCV",
  application: [
    "Gold jewellery polishing",
    "Silver jewellery polishing"
  ],
  benefits: [
    "85% reduction in manual polishing",
    "Uniform surface finish"
  ]
},

/* ================================
   MATERIALS & ACCESSORIES
================================ */

{
  id: "materials-consumables",
  name: "Resin, Wax, Spare Parts & AMC",
  category: "Materials & Consumables",
  includes: [
    "All types of resin",
    "Wax",
    "Spare parts",
    "1 Year AMC service"
  ]
},

{
  id: "jewellery-gift-boxes",
  name: "Jewellery Gift Boxes",
  category: "Accessories",
  description: "All types of jewellery gift boxes available"
}

];
