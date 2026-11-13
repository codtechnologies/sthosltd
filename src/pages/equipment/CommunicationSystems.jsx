// import React from 'react';
// import { Link } from 'react-router-dom';
// import { 
//   Radio, 
//   CheckCircle, 
//   Phone, 
//   ArrowRight,
//   ShieldCheck,
//   Wifi,
//   Globe
// } from 'lucide-react';
// import { COMPANY_INFO, EQUIPMENT_DATA } from '../../data/marineData';

// export default function CommunicationSystems() {
//   const commProducts = EQUIPMENT_DATA.filter(
//     (e) => e.category === "VHF & MF/HF Radio" || e.category === "Satellite Communication" || e.category === "GMDSS Equipment"
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
//           <span className="font-semibold text-[#071A35]">Communication Systems</span>
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
//               PAGE · EQUIPMENT › COMMUNICATION SYSTEMS
//             </span>
//             <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
//               Communication Systems
//             </h1>
//             <p className="text-xl text-gray-200 font-medium">
//               Reliable Connectivity. Uncompromising Safety.
//             </p>
//             <p className="text-base text-gray-300 leading-relaxed">
//               STHOS Ltd supplies, installs, and supports advanced marine communication systems designed for reliable performance in the demanding conditions of the Gulf of Guinea and beyond. From routine operations to distress situations, we ensure your vessel stays connected when it matters most.
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
//                   Effective marine communication is fundamental to safety, operational efficiency, and regulatory compliance. STHOS Ltd provides complete communication solutions that meet SOLAS, GMDSS, and IMO requirements while delivering the reliability operators need in West African waters.
//                 </p>
//               </div>

//               <div className="pt-4 space-y-6">
//                 <div>
//                   <h3 className="text-lg font-bold text-[#071A35] mb-3">
//                     VHF / UHF Systems
//                   </h3>
//                   <ul className="space-y-2 text-sm text-gray-700">
//                     {[
//                       "DSC-equipped VHF radios for short-range communication",
//                       "Portable and fixed GMDSS-compliant units",
//                       "ATIS and AIS integration options"
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
//                     MF/HF SSB Systems
//                   </h3>
//                   <ul className="space-y-2 text-sm text-gray-700">
//                     {[
//                       "Long-range communication solutions with DSC",
//                       "Reliable performance in remote areas",
//                       "Email and data communication capabilities"
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
//                     Satellite Communication Systems
//                   </h3>
//                   <ul className="space-y-2 text-sm text-gray-700">
//                     {[
//                       "Inmarsat FleetBroadband and Global Xpress",
//                       "Iridium Certus and legacy systems",
//                       "VSAT high-bandwidth solutions for operational and crew welfare connectivity"
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
//                     Specialised &amp; Internal Comms
//                   </h3>
//                   <ul className="space-y-2 text-sm text-gray-700">
//                     {[
//                       "Internal communication (intercom & PA systems)",
//                       "Vessel Traffic Service (VTS) shore stations",
//                       "Fleet management and tracking solutions",
//                       "Cyber-secure communication networks"
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
//                     "Type-approved equipment from trusted manufacturers (Sailor, Icom, JRC, Furuno, Inmarsat, Iridium)",
//                     "Rugged design built for high humidity, salt corrosion, and tropical conditions",
//                     "Seamless integration with navigation and bridge systems",
//                     "Redundancy for critical safety systems",
//                     "User-friendly interfaces with comprehensive crew training",
//                     "Local support with genuine spare parts and fast technical assistance"
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
//                     { title: "Requirements Analysis", desc: "Understanding your operational and regulatory needs" },
//                     { title: "System Design", desc: "Customised solution with redundancy where required" },
//                     { title: "Supply & Installation", desc: "Professional fit-out by certified engineers" },
//                     { title: "Testing & Commissioning", desc: "Full harbour and sea trials" },
//                     { title: "Training & Handover", desc: "Ensuring your team is fully competent" },
//                     { title: "Ongoing Support", desc: "Maintenance, repairs, and upgrades" }
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

//           {/* Compliance Statement */}
//           <div className="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm space-y-2">
//             <h3 className="text-xl font-bold text-[#071A35]">
//               Compliance &amp; Certification
//             </h3>
//             <p className="text-sm text-gray-600">
//               All systems we supply are fully type-approved and meet: SOLAS Chapter IV (GMDSS), IMO performance standards, Major classification society requirements (DNV, ABS, BV, LR), and NIMASA and flag state regulations.
//             </p>
//           </div>

//           {/* Featured In-Stock Equipment */}
//           <div>
//             <h3 className="text-xl font-bold text-[#071A35] mb-6">
//               Featured Marine Radio &amp; Satcom Systems
//             </h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {commProducts.map((prod) => (
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
//                 Ready to Strengthen Your Vessel’s Connectivity?
//               </h3>
//               <p className="text-sm text-gray-300">
//                 Contact our communication specialists for a consultation, technical proposal, or site survey.
//               </p>
//             </div>

//             <div className="flex flex-wrap items-center gap-4 pt-2">
//               <Link
//                 to="/contact"
//                 state={{ service: "Request Communication Quote" }}
//                 className="bg-[#E9231B] hover:bg-[#C21A13] text-white px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all shadow-md"
//               >
//                 Request a Quote
//               </Link>
//               <Link
//                 to="/contact"
//                 state={{ service: "Schedule Comms Consultation" }}
//                 className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all"
//               >
//                 Schedule a Consultation
//               </Link>
//               <Link
//                 to="/equipment"
//                 className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all"
//               >
//                 View Available Systems
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

