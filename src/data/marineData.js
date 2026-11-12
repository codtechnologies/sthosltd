export const COMPANY_INFO = {
  name: "STHOS Limited",
  tagline: "Marine Communication & Navigation Systems",
  headquarters: "Port Harcourt, Rivers State, Nigeria",
  addressPlaceholder: "Trans-Amadi Industrial Layout, Port Harcourt, Rivers State, Nigeria",
  salesPhone: "+234 807 323 4834",
  technicalPhone: "+234 807 323 4834",
  emergencyHotline: "+234 807 323 4834",
  primaryEmail: "service@sthosltd.com",
  technicalEmail: "service@sthosltd.com",
  trainingEmail: "service@sthosltd.com",
  businessHours: "Monday – Friday: 10:00 AM – 5:00 PM WAT",
  emergencyAvailability: "24/7/365 On-Call Dispatch across Gulf of Guinea",
  classSocieties: ["DNV", "ABS"],
  brands: ["Furuno", "Sailor", "Icom"],
  heroImages: {
    bridge: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1920&q=80",
    vesselAtSea: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=1200&q=80",
    offshorePlatform: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1920&q=80",
    radarScreen: "https://images.unsplash.com/photo-1516116211227-bbc0372df3e2?auto=format&fit=crop&w=1200&q=80",
    marineEngineer: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80",
    whoWeAre: "https://bvs-electronics.com/fileadmin/user_upload/Automatisierung_und_Schiffssteuerung.jpg",
    cargoShip: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1200&q=80",
    workboat: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?auto=format&fit=crop&w=1200&q=80"
  }
};

export const SERVICES_DATA = [
  {
    id: "marine-radio-communication",
    title: "Marine Radio Communication",
    shortDesc: "VHF, MF/HF, GMDSS and satellite communication systems for dependable onboard communication.",
    fullDesc: "Complete supply, installation, programming and testing of marine radio stations meeting SOLAS Sea Area A1 to A4 requirements. We ensure uninterrupted voice and digital selective calling (DSC) for routine and distress communications.",
    icon: "Radio",
    category: "Communication",
    image: "https://images.unsplash.com/photo-1516305408620-7a9076a0f6ed?auto=format&fit=crop&w=800&q=80",
    features: [
      "Fixed and portable VHF/DSC transceivers",
      "Medium & High Frequency (MF/HF) SSB systems with automated tuner",
      "ATEX intrinsically safe portable radios for tankers & offshore rigs",
      "GMDSS Sea Area A1, A2, A3 and A4 radio consoles",
      "Duplex antenna multi-couplers and grounding verification"
    ]
  },
  {
    id: "marine-navigation-systems",
    title: "Marine Navigation Systems",
    shortDesc: "Radar, GPS, AIS and electronic chart systems for safe and compliant vessel passage.",
    fullDesc: "Type-approved bridge navigation suites engineered for high-precision track keeping, target tracking and anti-collision. Integrated with autopilot, gyrocompass, echo sounders, and speed logs for paperless voyage execution.",
    icon: "Compass",
    category: "Navigation",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
    features: [
      "X-Band and S-Band marine radar with ARPA tracking",
      "Type-approved Dual ECDIS workstations (IEC 61174 compliant)",
      "High-precision Multi-GNSS (GPS, GLONASS, Galileo) positioning",
      "Class A AIS transponders with inland waterways protocols",
      "Gyrocompass, magnetic compass and fluxgate heading sensors"
    ]
  },
  {
    id: "installation-and-integration",
    title: "Installation & Integration",
    shortDesc: "Professional installation, configuration and integration of marine electronics with minimal vessel downtime.",
    fullDesc: "Turnkey marine electrical and electronic installation services by certified engineers. From bridge console retrofits to mast cabling, wave-guide installations, and NMEA 0183/2000 network distribution.",
    icon: "Cpu",
    category: "Engineering",
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80",
    features: [
      "Turnkey bridge retrofits during port turnaround or drydock",
      "Cabling, antenna mast rigging and lightning protection systems",
      "Integration of multi-vendor bridge equipment and sensors",
      "Harbour acceptance testing (HAT) and sea trials (SAT)",
      "As-built electrical drawings and documentation dossiers"
    ]
  },
  {
    id: "repairs-and-troubleshooting",
    title: "Repairs & Troubleshooting",
    shortDesc: "Equipment diagnosis, component-level repairs and 24/7 technical support.",
    fullDesc: "Rapid fault localization and component-level repairs for critical bridge systems. Our Port Harcourt workshop houses diagnostic spectrum analyzers, RF wattmeters, dummy loads, and genuine OEM spares for fast turnaround.",
    icon: "Wrench",
    category: "Maintenance",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    features: [
      "Component-level PCB repair and power supply reconditioning",
      "Magnetron and radar transceiver overhauls",
      "Antenna VSWR and RF transmission troubleshooting",
      "Emergency board swapping using local depot inventory",
      "Root cause failure analysis reports for ship managers"
    ]
  },
  {
    id: "radio-surveys-and-inspection",
    title: "Radio Surveys & Inspection",
    shortDesc: "Marine radio surveys, VDR APT, equipment testing and class inspection.",
    fullDesc: "Authorized statutory surveys in coordination with major classification societies (DNV, ABS, Bureau Veritas, Lloyd's Register) and NIMASA. Verification of GMDSS installations, emergency beacons, and annual safety radio certificate endorsements.",
    icon: "ShieldCheck",
    category: "Compliance",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    features: [
      "Annual safety radio surveys under SOLAS Chapter IV",
      "Voyage Data Recorder (VDR / S-VDR) Annual Performance Testing (APT)",
      "EPIRB, SART, and AIS-SART annual test and battery re-certification",
      "Port State Control (PSC) pre-inspection readiness audits",
      "Coordination with classification surveyors for swift endorsement"
    ]
  },
  {
    id: "maintenance-and-servicing",
    title: "Maintenance & Servicing",
    shortDesc: "Preventive maintenance, scheduled care and equipment servicing for high-demand maritime fleets.",
    fullDesc: "Comprehensive planned maintenance agreements tailored to offshore support vessels, tankers, and coastal tugs operating in high humidity and tropical salt-spray conditions across West Africa.",
    icon: "Clock",
    category: "Maintenance",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    features: [
      "Scheduled preventive maintenance contracts with SLA guarantees",
      "Gyrocompass annual overhaul, sphere inspection, and fluid change",
      "Radar scanner motor, belt, and carbon brush routine maintenance",
      "Battery bank discharge load testing and UPS verification",
      "Firmware updates and navigation software maintenance"
    ]
  },
  {
    id: "training-programs",
    title: "Crew Training Programs",
    shortDesc: "GMDSS, ECDIS, radar and bridge team training for seafarers and shore personnel.",
    fullDesc: "Building technical competence and operational safety. Our simulator and hands-on training courses prepare navigational officers and electro-technical crew to master modern equipment and handle emergency protocols with confidence.",
    icon: "GraduationCap",
    category: "Training",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
    features: [
      "GMDSS General Operator's Certificate (GOC) & ROC preparation",
      "ECDIS generic and type-specific familiarization",
      "Bridge Resource Management (BRM) & Bridge Team Management (BTM)",
      "Emergency troubleshooting drills for vessel officers",
      "Classroom and onboard customized instructional modules"
    ]
  },
  {
    id: "emergency-support",
    title: "24/7 Emergency Support",
    shortDesc: "24/7 hotline, remote diagnostics, on-site repairs and urgent spare parts dispatch.",
    fullDesc: "Critical marine emergencies require immediate technical response. Our rapid dispatch engineering team mobilizes from Port Harcourt within 2.4 hours to anchorages, ports, and offshore terminals across the Gulf of Guinea.",
    icon: "AlertTriangle",
    category: "Emergency",
    image: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?auto=format&fit=crop&w=800&q=80",
    features: [
      "Direct technical hotline (+234 809 999 9999) monitored 24/7/365",
      "Remote diagnostics via satellite voice/data link",
      "Immediate engineer mobilization to Onne, Bonny, Warri, Lagos & offshore",
      "Urgent spares dispatch directly to vessel alongside or offshore jetty",
      "Assistance with urgent class dispensations and notifications"
    ]
  }
];

export const EQUIPMENT_DATA = [
  {
    id: "eq-1",
    name: "Furuno FAR-2228 X-Band Radar",
    category: "Marine Radar",
    brand: "Furuno",
    description: "Type-approved commercial marine radar with advanced target tracking (TT) and automatic clutter elimination (ACE) for harsh sea conditions.",
    image: "https://images.unsplash.com/photo-1516116211227-bbc0372df3e2?auto=format&fit=crop&w=600&q=80",
    tag: "SOLAS Category 2"
  },
  {
    id: "eq-2",
    name: "Cobham Sailor 6222 VHF DSC Class A",
    category: "VHF & MF/HF Radio",
    brand: "Sailor",
    description: "Rugged waterproof GMDSS Class A VHF transceiver designed for commercial vessels, workboats, and naval operations.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
    tag: "GMDSS Class A"
  },
  {
    id: "eq-3",
    name: "Cobham Sailor 6310 MF/HF 150W DSC",
    category: "VHF & MF/HF Radio",
    brand: "Sailor",
    description: "Reliable medium/high frequency marine radio system for Sea Area A3 and A4 operations, equipped with DSC receiver and antenna tuner.",
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80",
    tag: "Sea Area A3/A4"
  },
  {
    id: "eq-4",
    name: "Furuno FMD-3200 Dual ECDIS",
    category: "GPS & ECDIS",
    brand: "Furuno",
    description: "High-performance paperless navigation workstation featuring rapid chart rendering, route planning, and seamless radar overlay.",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=600&q=80",
    tag: "IEC 61174 Paperless"
  },
  // {
  //   id: "eq-5",
  //   name: "JRC JCY-1900 Voyage Data Recorder",
  //   category: "Navigation Systems",
  //   brand: "JRC",
  //   description: "Black box VDR meeting latest IMO performance standards, recording bridge audio, radar data, ECDIS images, and engine telemetry.",
  //   image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
  //   tag: "IMO Compliant VDR"
  // },
  // {
  //   id: "eq-6",
  //   name: "Icom IC-M804 MF/HF Marine Transceiver",
  //   category: "VHF & MF/HF Radio",
  //   brand: "Icom",
  //   description: "Class E DSC marine radio with clear voice DSP, remote control head, and dedicated distress alert button.",
  //   image: "https://images.unsplash.com/photo-1516116211227-bbc0372df3e2?auto=format&fit=crop&w=600&q=80",
  //   tag: "Long-Range SSB"
  // },
  // {
  //   id: "eq-7",
  //   name: "Sailor 6110 mini-C GMDSS System",
  //   category: "GMDSS Equipment",
  //   brand: "Sailor",
  //   description: "Inmarsat-C satellite terminal supporting SSAS, LRIT, and SOLAS distress safety messaging in a compact, durable unit.",
  //   image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80",
  //   tag: "SSAS & LRIT Ready"
  // },
  // {
  //   id: "eq-8",
  //   name: "Jotron Tron 60AIS EPIRB",
  //   category: "EPIRB & SART Safety",
  //   brand: "Jotron",
  //   description: "Cospas-Sarsat 406MHz emergency position-indicating beacon with integrated AIS homing transmitter and GNSS receiver.",
  //   image: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?auto=format&fit=crop&w=600&q=80",
  //   tag: "406 MHz + AIS"
  // },
  // {
  //   id: "eq-9",
  //   name: "Jotron Tron SART20 Radar Transponder",
  //   category: "EPIRB & SART Safety",
  //   brand: "Jotron",
  //   description: "9GHz search and rescue radar transponder engineered for survival craft, locating lifeboats on 3cm marine radar screens.",
  //   image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=600&q=80",
  //   tag: "9GHz SOLAS SART"
  // },
  // {
  //   id: "eq-10",
  //   name: "Iridium Certus Marine Satcom Terminal",
  //   category: "Satellite Communication",
  //   brand: "Iridium",
  //   description: "True global coverage L-band satellite broadband delivering reliable high-definition voice, email, weather data, and crew internet.",
  //   image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
  //   tag: "Pole-to-Pole Comms"
  // },
  // {
  //   id: "eq-11",
  //   name: "Furuno FA-170 Class A AIS",
  //   category: "AIS Systems",
  //   brand: "Furuno",
  //   description: "Color LCD Class A AIS transponder displaying targets, safety text messages, collision warnings (CPA/TCPA), and GNSS data.",
  //   image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=600&q=80",
  //   tag: "Class A Verified"
  // },
  // {
  //   id: "eq-12",
  //   name: "Simrad GC80 Gyrocompass System",
  //   category: "Navigation Systems",
  //   brand: "Simrad",
  //   description: "Compact, maintenance-friendly gyro compass offering true heading precision with digital and analogue stepper outputs.",
  //   image: "https://images.unsplash.com/photo-1516116211227-bbc0372df3e2?auto=format&fit=crop&w=600&q=80",
  //   tag: "True Heading Master"
  // }
];

export const INDUSTRIES_SERVED = [
  {
    title: "Vessel Owners & Operators",
    desc: "Commercial container ships, bulk carriers, coastal tankers and cargo vessels requiring continuous SOLAS compliance.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Offshore Oil & Gas Operators",
    desc: "FPSOs, drillships, platform supply vessels (PSVs), AHTS, and offshore production platforms across West African oilfields.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Shipping & Logistics Companies",
    desc: "Maritime freight managers, tug & barge fleets, and bunkering operations needing reliable telemetry and communication.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Marine Contractors & Shipyards",
    desc: "Drydocks, marine construction teams, pipelaying vessels, and cable ships executing major conversion projects.",
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Port & Harbour Operations",
    desc: "Terminal operators, pilot boats, harbour tugs, and Port State authorities ensuring navigational safety in waterways.",
    image: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Government & Maritime Agencies",
    desc: "Coast guards, naval craft, research vessels, and regulatory inspection agencies such as NIMASA.",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=600&q=80"
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "Technical Expertise",
    desc: "Certified Radio Surveyors and factory-trained marine electronics engineers with extensive sea-going and shipyard experience.",
    icon: "Award"
  },
  {
    title: "Reliable Solutions",
    desc: "Type-approved equipment and robust engineering built to endure high humidity, salt spray, and tropical maritime operations.",
    icon: "Shield"
  },
  {
    title: "Safety & Compliance",
    desc: "Strict adherence to IMO, SOLAS, class societies (DNV, ABS, BV, LR), and NIMASA statutory safety regulations.",
    icon: "CheckCircle"
  },
  {
    title: "Comprehensive Support",
    desc: "One trusted partner from equipment supply and turnkey installation to statutory certification, maintenance, and crew training.",
    icon: "Layers"
  },
  {
    title: "Customer Commitment",
    desc: "Port Harcourt strategic base with rapid 24/7 emergency dispatch and spare parts depot to prevent vessel downtime.",
    icon: "Clock"
  }
];

