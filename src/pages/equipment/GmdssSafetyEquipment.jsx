// import React from 'react';
// import { Link } from 'react-router-dom';
// import { 
//   Radio, 
//   CheckCircle, 
//   Phone, 
//   ArrowRight,
//   ShieldCheck,
//   AlertTriangle,
//   LifeBuoy
// } from 'lucide-react';
// import { COMPANY_INFO, EQUIPMENT_DATA } from '../../data/marineData';

// export default function GmdssSafetyEquipment() {
//   const gmdssProducts = EQUIPMENT_DATA.filter(
//     (e) => e.category === "GMDSS Equipment" || e.category === "EPIRB & SART Safety"
//   );

//   return (
//     <div className="w-full flex flex-col">
//       {/* Breadcrumb Bar */}
//       <div className="bg-[#F4F6F8] border-b border-gray-200 py-3 text-xs">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center space-x-2 text-gray-600">
//           <Link to="/" className="hover:text-[#E9231B]">Home</Link>
//           <span>/</span>
//           <Link to="/equipment" className="hover:text-[#E9231B]">Equipment</Link>
//           <span>/</span>
//           <span className="font-semibold text-[#071A35]">GMDSS &amp; Safety Equipment</span>
//         </div>
//       </div>

//       {/* Hero Header */}
//       <section className="bg-[#071A35] text-white py-16 relative overflow-hidden">
//         <div 
//           className="absolute inset-0 z-0 bg-cover bg-center opacity-30"
//           style={{ backgroundImage: `url(${COMPANY_INFO.heroImages.radarScreen})` }}
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-[#071A35] via-[#071A35]/90 to-transparent z-10" />

//         <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="max-w-3xl space-y-4">
//             <span className="text-[#E9231B] font-bold text-xs uppercase tracking-wider block">
//               PAGE · EQUIPMENT › GMDSS &amp; SAFETY
//             </span>
//             <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
//               GMDSS &amp; Safety Equipment
//             </h1>
//             <p className="text-xl text-gray-200 font-medium">
//               Distress Readiness. Lifesaving Reliability.
//             </p>
//             <p className="text-base text-gray-300 leading-relaxed">
//               STHOS Ltd supplies, installs, and maintains complete GMDSS and safety equipment solutions that ensure your vessel meets the highest standards of maritime distress and safety communication. We help protect lives, assets, and the environment in the Gulf of Guinea and beyond.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Content Body */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
//             <div className="lg:col-span-6 space-y-6">
//               <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071A35]">
//                 Overview
//               </h2>
//               <div className="space-y-4 text-base text-gray-700 leading-relaxed">
//                 <p>
//                   The Global Maritime Distress and Safety System (GMDSS) is the international standard for maritime search and rescue. Reliable GMDSS and safety equipment are mandatory for compliance and critical for rapid response during emergencies. STHOS Ltd provides fully integrated, type-approved solutions backed by expert local support.
//                 </p>
//               </div>

//               <div className="pt-4 space-y-6">
//                 <div>
//                   <h3 className="text-lg font-bold text-[#071A35] mb-3">
//                     Core GMDSS Systems
//                   </h3>
//                   <ul className="space-y-2 text-sm text-gray-700">
//                     {[
//                       "Complete GMDSS consoles and workstations",
//                       "MF/HF DSC radio installations",
//                       "VHF DSC radios (fixed and portable)",
//                       "Inmarsat and Iridium satellite communication terminals",
//                       "NAVTEX receivers for maritime safety information"
//                     ].map((item, idx) => (
//                       <li key={idx} className="flex items-start space-x-2.5">
//                         <CheckCircle className="w-4 h-4 text-[#E9231B] shrink-0 mt-0.5" />
//                         <span>{item}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 <div>
//                   <h3 className="text-lg font-bold text-[#071A35] mb-3">
//                     Search &amp; Rescue Equipment
//                   </h3>
//                   <ul className="space-y-2 text-sm text-gray-700">
//                     {[
//                       "Emergency Position Indicating Radio Beacons (EPIRB)",
//                       "Search and Rescue Transponders (SART)",
//                       "Automatic Identification System (AIS) Search and Rescue Transmitters (AIS-SART)"
//                     ].map((item, idx) => (
//                       <li key={idx} className="flex items-start space-x-2.5">
//                         <CheckCircle className="w-4 h-4 text-[#E9231B] shrink-0 mt-0.5" />
//                         <span>{item}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 <div>
//                   <h3 className="text-lg font-bold text-[#071A35] mb-3">
//                     Safety &amp; Distress Equipment
//                   </h3>
//                   <ul className="space-y-2 text-sm text-gray-700">
//                     {[
//                       "Ship Security Alert Systems (SSAS)",
//                       "Voyage Data Recorders (VDR/S-VDR)",
//                       "Emergency handheld VHF radios",
//                       "Two-way communication devices for survival craft"
//                     ].map((item, idx) => (
//                       <li key={idx} className="flex items-start space-x-2.5">
//                         <CheckCircle className="w-4 h-4 text-[#E9231B] shrink-0 mt-0.5" />
//                         <span>{item}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 <div>
//                   <h3 className="text-lg font-bold text-[#071A35] mb-3">
//                     Integrated Safety Solutions
//                   </h3>
//                   <ul className="space-y-2 text-sm text-gray-700">
//                     {[
//                       "Full bridge GMDSS integration",
//                       "Battery backup and uninterruptible power supplies",
//                       "Redundant communication architectures"
//                     ].map((item, idx) => (
//                       <li key={idx} className="flex items-start space-x-2.5">
//                         <CheckCircle className="w-4 h-4 text-[#E9231B] shrink-0 mt-0.5" />
//                         <span>{item}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>

//             <div className="lg:col-span-6 space-y-8">
//               {/* Key Features & Benefits */}
//               <div className="bg-[#F4F6F8] p-8 rounded-2xl border border-gray-200">
//                 <h3 className="text-xl font-bold text-[#071A35] mb-6 flex items-center space-x-2">
//                   <ShieldCheck className="w-5 h-5 text-[#E9231B]" />
//                   <span>Key Features &amp; Benefits</span>
//                 </h3>
//                 <ul className="space-y-3 text-sm text-gray-700">
//                   {[
//                     "IMO/SOLAS compliant and type-approved equipment",
//                     "Rugged construction designed for harsh marine environments",
//                     "Seamless integration with navigation and bridge systems",
//                     "Regular performance testing and battery maintenance support",
//                     "Local expertise for fast servicing and spare parts availability",
//                     "Comprehensive documentation for class and flag state audits"
//                   ].map((b, idx) => (
//                     <li key={idx} className="flex items-start space-x-3">
//                       <CheckCircle className="w-4 h-4 text-[#123B67] shrink-0 mt-0.5" />
//                       <span>{b}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Our Process */}
//               <div className="bg-[#F4F6F8] p-8 rounded-2xl border border-gray-200">
//                 <h3 className="text-xl font-bold text-[#071A35] mb-6">
//                   Our Process
//                 </h3>
//                 <ol className="space-y-3.5 text-sm text-gray-700">
//                   {[
//                     { title: "Compliance Assessment", desc: "Gap analysis against current GMDSS requirements" },
//                     { title: "System Design & Supply", desc: "Tailored solutions based on vessel size and area of operation" },
//                     { title: "Professional Installation & Integration", desc: "Mechanical, RF cabling and battery backup setup" },
//                     { title: "Testing & Commissioning", desc: "Full functional verification" },
//                     { title: "Crew Training", desc: "Hands-on GMDSS operation and emergency procedures" },
//                     { title: "Ongoing Compliance", desc: "Annual surveys, maintenance, and recertification support" }
//                   ].map((st, idx) => (
//                     <li key={idx} className="flex items-start space-x-3">
//                       <span className="w-6 h-6 rounded-full bg-[#071A35] text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
//                         {idx + 1}
//                       </span>
//                       <div>
//                         <strong className="text-[#071A35] block">{st.title}</strong>
//                         <span>{st.desc}</span>
//                       </div>
//                     </li>
//                   ))}
//                 </ol>
//               </div>
//             </div>
//           </div>

//           {/* Compliance & Certification */}
//           <div className="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm space-y-4">
//             <h3 className="text-xl font-bold text-[#071A35]">
//               Compliance &amp; Certification
//             </h3>
//             <p className="text-sm text-gray-600">All equipment and installations fully meet:</p>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-2">
//               <div className="p-4 rounded-lg bg-[#F4F6F8] text-center font-semibold text-xs text-[#071A35]">
//                 SOLAS Chapter IV (GMDSS)
//               </div>
//               <div className="p-4 rounded-lg bg-[#F4F6F8] text-center font-semibold text-xs text-[#071A35]">
//                 IMO Performance Standards
//               </div>
//               <div className="p-4 rounded-lg bg-[#F4F6F8] text-center font-semibold text-xs text-[#071A35]">
//                 Classification Societies (DNV, ABS, BV, LR)
//               </div>
//               <div className="p-4 rounded-lg bg-[#F4F6F8] text-center font-semibold text-xs text-[#071A35]">
//                 NIMASA &amp; Flag State Regulations
//               </div>
//             </div>
//             <p className="text-xs text-[#071A35] font-semibold pt-2">
//               We support vessels in obtaining and maintaining valid Safety Radio Certificates.
//             </p>
//           </div>

//           {/* Featured In-Stock Equipment */}
//           <div>
//             <h3 className="text-xl font-bold text-[#071A35] mb-6">
//               Featured GMDSS &amp; Safety Systems
//             </h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {gmdssProducts.map((prod) => (
//                 <div key={prod.id} className="bg-[#F4F6F8] p-5 rounded-xl border border-gray-200 flex flex-col justify-between">
//                   <div>
//                     <span className="text-[10px] uppercase font-bold text-[#E9231B]">{prod.brand}</span>
//                     <h4 className="text-base font-bold text-[#071A35] mt-1">{prod.name}</h4>
//                     <p className="text-xs text-gray-600 mt-2">{prod.description}</p>
//                   </div>
//                   <div className="mt-4 pt-3 border-t border-gray-200 flex items-center justify-between">
//                     <span className="text-[10px] font-bold text-gray-500 uppercase">{prod.tag}</span>
//                     <Link to="/contact" state={{ equipment: prod.name }} className="text-xs font-bold text-[#E9231B] hover:underline">
//                       Enquire →
//                     </Link>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Action Box */}
//           <div className="bg-[#071A35] text-white p-8 sm:p-12 rounded-2xl shadow-xl space-y-6">
//             <div className="max-w-2xl space-y-2">
//               <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
//                 Ensure Your Vessel Is Always Ready
//               </h3>
//               <p className="text-sm text-gray-300">
//                 Protect your crew and vessel with reliable GMDSS and safety equipment from a trusted local partner.
//               </p>
//             </div>

//             <div className="flex flex-wrap items-center gap-4 pt-2">
//               <Link
//                 to="/contact"
//                 state={{ service: "Request a GMDSS Assessment" }}
//                 className="bg-[#E9231B] hover:bg-[#C21A13] text-white px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all shadow-md"
//               >
//                 Request a GMDSS Assessment
//               </Link>
//               <Link
//                 to="/contact"
//                 state={{ service: "Schedule Radio Survey" }}
//                 className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all"
//               >
//                 Schedule Radio Survey
//               </Link>
//               <Link
//                 to="/contact"
//                 state={{ service: "Get Equipment Quote" }}
//                 className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all"
//               >
//                 Get a Quote
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

