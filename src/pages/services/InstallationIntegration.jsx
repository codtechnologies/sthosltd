// import React from 'react';
// import { Link } from 'react-router-dom';
// import { 
//   Cpu, 
//   CheckCircle, 
//   Phone, 
//   ArrowRight,
//   Layers,
//   Wrench,
//   ShieldCheck
// } from 'lucide-react';
// import { COMPANY_INFO } from '../../data/marineData';

// export default function InstallationIntegration() {
//   return (
//     <div className="w-full flex flex-col">
//       {/* Breadcrumb Bar */}
//       <div className="bg-[#F4F6F8] border-b border-gray-200 py-3 text-xs">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center space-x-2 text-gray-600">
//           <Link to="/" className="hover:text-[#E9231B]">Home</Link>
//           <span>/</span>
//           <Link to="/services" className="hover:text-[#E9231B]">Services</Link>
//           <span>/</span>
//           <span className="font-semibold text-[#071A35]">Installation &amp; Integration</span>
//         </div>
//       </div>

//       {/* Hero Header */}
//       <section className="bg-[#071A35] text-white py-16 relative overflow-hidden">
//         <div 
//           className="absolute inset-0 z-0 bg-cover bg-center opacity-30"
//           style={{ backgroundImage: `url(${COMPANY_INFO.heroImages.marineEngineer})` }}
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-[#071A35] via-[#071A35]/90 to-transparent z-10" />

//         <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="max-w-3xl space-y-4">
//             <span className="text-[#E9231B] font-bold text-xs uppercase tracking-wider block">
//               PAGE · SERVICES › INSTALLATION &amp; INTEGRATION
//             </span>
//             <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
//               Installation &amp; Integration
//             </h1>
//             <p className="text-xl text-gray-200 font-medium">
//               Precision Installation. Seamless System Integration.
//             </p>
//             <p className="text-base text-gray-300 leading-relaxed">
//               STHOS Ltd delivers expert installation and integration services for marine radio communication and navigational equipment. We ensure your systems are installed correctly, fully integrated, and ready for optimal performance in the challenging conditions of the Gulf of Guinea.
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
//                   Proper installation and integration are critical to the safety, reliability, and regulatory compliance of any vessel’s bridge and communication systems. At STHOS Ltd, we combine technical excellence with practical maritime experience to deliver installations that minimise downtime and maximise long-term performance.
//                 </p>
//                 <p>
//                   Whether you are outfitting a newbuild, upgrading an existing vessel, or retrofitting a fleet, our experienced engineers ensure every system works as a cohesive, reliable whole.
//                 </p>
//               </div>

//               <div className="pt-4">
//                 <h3 className="text-xl font-bold text-[#071A35] mb-4">
//                   Our Installation &amp; Integration Services
//                 </h3>
//                 <ul className="space-y-2.5 text-sm text-gray-700">
//                   {[
//                     "Complete Bridge Navigation System Integration — Radar, ECDIS, GPS, Autopilot, and Multi-Function Displays",
//                     "GMDSS & Radio Communication Systems — VHF, MF/HF, Satellite (Inmarsat, Iridium, VSAT), and Distress Equipment",
//                     "AIS, VDR, and Voyage Data Systems Installation",
//                     "Full Bridge Refits & Modernisation Projects",
//                     "Sensor Integration & Calibration — Gyro, Speed Log, Echo Sounder, and Meteorological Systems",
//                     "Power Supply & Backup System Integration",
//                     "Network & Data Distribution Systems — Onboard LAN and communication networks",
//                     "Pre-Installation Surveys & System Design"
//                   ].map((srv, idx) => (
//                     <li key={idx} className="flex items-start space-x-2.5">
//                       <CheckCircle className="w-4 h-4 text-[#E9231B] shrink-0 mt-0.5" />
//                       <span>{srv}</span>
//                     </li>
//                   ))}
//                 </ul>
//                 <p className="text-xs text-gray-500 mt-4 italic">
//                   We work with leading manufacturers including Furuno, Sailor, Icom, JRC, Kelvin Hughes, and others to deliver manufacturer-approved installations.
//                 </p>
//               </div>
//             </div>

//             <div className="lg:col-span-6 space-y-8">
//               {/* Proven Process */}
//               <div className="bg-[#F4F6F8] p-8 rounded-2xl border border-gray-200">
//                 <h3 className="text-xl font-bold text-[#071A35] mb-6 flex items-center space-x-2">
//                   <Cpu className="w-5 h-5 text-[#E9231B]" />
//                   <span>Our Proven Process</span>
//                 </h3>
//                 <ol className="space-y-4 text-sm text-gray-700">
//                   {[
//                     { title: "Project Planning & Design", desc: "Detailed system design, cable routing, and compatibility assessment" },
//                     { title: "Pre-Installation Survey", desc: "Onboard assessment of existing systems and vessel layout" },
//                     { title: "Professional Installation", desc: "By certified marine electronics engineers" },
//                     { title: "System Integration & Configuration", desc: "Ensuring all components communicate seamlessly" },
//                     { title: "Testing & Commissioning", desc: "Comprehensive harbour and sea trials" },
//                     { title: "Crew Familiarisation Training", desc: "Included as standard" },
//                     { title: "Final Documentation & Class Certification Support", desc: "Full as-built drawings and handover packages" }
//                   ].map((st, sIdx) => (
//                     <li key={sIdx} className="flex items-start space-x-3">
//                       <span className="w-6 h-6 rounded-full bg-[#071A35] text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
//                         {sIdx + 1}
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

//           {/* Why Choose & Benefits Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-gray-200">
//             <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm space-y-4">
//               <h3 className="text-xl font-bold text-[#071A35]">
//                 Why Choose STHOS Ltd?
//               </h3>
//               <ul className="space-y-2.5 text-sm text-gray-700">
//                 {[
//                   "Experienced team with both sea-going and shore-based technical backgrounds",
//                   "Strategic presence in Port Harcourt for rapid mobilisation across Nigerian waters",
//                   "Strong relationships with major classification societies for smooth approvals",
//                   "Attention to detail that prevents costly post-installation issues",
//                   "Commitment to minimising vessel off-hire time",
//                   "Full after-sales support and long-term maintenance programs"
//                 ].map((item, idx) => (
//                   <li key={idx} className="flex items-start space-x-2.5">
//                     <CheckCircle className="w-4 h-4 text-[#E9231B] shrink-0 mt-0.5" />
//                     <span>{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm space-y-4">
//               <h3 className="text-xl font-bold text-[#071A35]">
//                 Key Benefits
//               </h3>
//               <ul className="space-y-2.5 text-sm text-gray-700">
//                 {[
//                   "Reduced risk of system conflicts and failures",
//                   "Optimal performance of integrated navigation and communication systems",
//                   "Faster return to service after installation",
//                   "Full compliance with SOLAS, IMO, and class society requirements",
//                   "Enhanced safety and operational efficiency for your crew",
//                   "Single-point responsibility from design to final handover"
//                 ].map((item, idx) => (
//                   <li key={idx} className="flex items-start space-x-2.5">
//                     <CheckCircle className="w-4 h-4 text-[#123B67] shrink-0 mt-0.5" />
//                     <span>{item}</span>
//                   </li>
//                 ))}
//               </ul>

//               <div className="pt-4 mt-4 border-t border-gray-100">
//                 <h4 className="text-sm font-bold text-[#071A35] mb-2">Track Record</h4>
//                 <p className="text-xs text-gray-600 leading-relaxed">
//                   STHOS Ltd has successfully completed numerous installation and integration projects, ranging from single-vessel upgrades to full fleet modernisations for offshore support vessels, commercial tankers, fishing fleets, and government vessels operating in the Gulf of Guinea. Our installations consistently achieve high satisfaction ratings and smooth class society approvals.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Action Box */}
//           <div className="bg-[#071A35] text-white p-8 sm:p-12 rounded-2xl shadow-xl space-y-6">
//             <div className="max-w-2xl space-y-2">
//               <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
//                 Ready to Upgrade Your Vessel’s Systems?
//               </h3>
//               <p className="text-sm text-gray-300">
//                 Contact us today for a professional consultation, technical proposal, or site survey.
//               </p>
//             </div>

//             <div className="flex flex-wrap items-center gap-4 pt-2">
//               <Link
//                 to="/contact"
//                 state={{ service: "Installation & Integration Quote" }}
//                 className="bg-[#E9231B] hover:bg-[#C21A13] text-white px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all shadow-md"
//               >
//                 Get a Quote
//               </Link>
//               <Link
//                 to="/contact"
//                 state={{ service: "Schedule Pre-Installation Survey" }}
//                 className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all"
//               >
//                 Schedule a Pre-Installation Survey
//               </Link>
//               <Link
//                 to="/contact"
//                 state={{ service: "Consult Integration Experts" }}
//                 className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all"
//               >
//                 Speak with Our Integration Experts
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

