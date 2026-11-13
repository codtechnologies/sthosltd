// import React from 'react';
// import { Link } from 'react-router-dom';
// import { 
//   ShieldCheck, 
//   CheckCircle, 
//   FileText, 
//   Phone, 
//   Clock, 
//   Award, 
//   ArrowRight,
//   Anchor,
//   HelpCircle
// } from 'lucide-react';
// import { COMPANY_INFO } from '../../data/marineData';

// export default function ClassCertification() {
//   return (
//     <div className="w-full flex flex-col">
//       {/* Breadcrumb Bar */}
//       <div className="bg-[#F4F6F8] border-b border-gray-200 py-3 text-xs">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center space-x-2 text-gray-600">
//           <Link to="/" className="hover:text-[#E9231B]">Home</Link>
//           <span>/</span>
//           <Link to="/services" className="hover:text-[#E9231B]">Services</Link>
//           <span>/</span>
//           <span className="font-semibold text-[#071A35]">Class Certification</span>
//         </div>
//       </div>

//       {/* Hero Header */}
//       <section className="bg-[#071A35] text-white py-16 relative overflow-hidden">
//         <div 
//           className="absolute inset-0 z-0 bg-cover bg-center opacity-30"
//           style={{ backgroundImage: `url(${COMPANY_INFO.heroImages.bridge})` }}
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-[#071A35] via-[#071A35]/90 to-transparent z-10" />

//         <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="max-w-3xl space-y-4">
//             <span className="text-[#E9231B] font-bold text-xs uppercase tracking-wider block">
//               PAGE · SERVICES › CLASS CERTIFICATION
//             </span>
//             <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
//               Class Certification
//             </h1>
//             <p className="text-xl text-gray-200 font-medium">
//               Ensuring Compliance. Enabling Safe Operations.
//             </p>
//             <p className="text-base text-gray-300 leading-relaxed">
//               STHOS Ltd provides expert Class Certification services for marine radio communication and navigational equipment across Nigerian waters and the Gulf of Guinea. Our authorised surveyors and technical specialists help vessel owners, operators, and shipyards achieve and maintain compliance with the highest international standards.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Societies Strip */}
//       <div className="bg-[#123B67] text-white py-3.5 text-xs border-b border-white/10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-3">
//           <span className="font-semibold uppercase tracking-wider">Classification Societies &amp; ROs We Work With:</span>
//           <div className="flex flex-wrap items-center gap-2 font-bold">
//             <span className="bg-white/10 px-2.5 py-1 rounded">DNV</span>
//             <span className="bg-white/10 px-2.5 py-1 rounded">ABS (American Bureau of Shipping)</span>
//             <span className="bg-white/10 px-2.5 py-1 rounded">Bureau Veritas (BV)</span>
//             <span className="bg-white/10 px-2.5 py-1 rounded">Lloyd’s Register (LR)</span>
//             <span className="bg-[#E9231B] text-white px-2.5 py-1 rounded">NIMASA Recognised</span>
//           </div>
//         </div>
//       </div>

//       {/* Content Body */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
//           {/* Overview & Services Grid */}
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
//             <div className="lg:col-span-6 space-y-6">
//               <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071A35]">
//                 Overview
//               </h2>
//               <div className="space-y-4 text-base text-gray-700 leading-relaxed">
//                 <p>
//                   Class certification is a critical requirement for commercial vessels. It verifies that communication and navigation systems meet the rigorous rules of major classification societies, ensuring safety, reliability, and regulatory acceptance by flag states and port authorities.
//                 </p>
//                 <p>
//                   At STHOS Ltd, we combine deep technical expertise with practical understanding of operations in West African waters to deliver fast, accurate, and reliable class certification services.
//                 </p>
//               </div>

//               <div className="pt-4">
//                 <h3 className="text-xl font-bold text-[#071A35] mb-4">
//                   Our Class Certification Services
//                 </h3>
//                 <ul className="space-y-2.5 text-sm text-gray-700">
//                   {[
//                     "Initial Class Approval & Type Approval for new installations",
//                     "Annual Surveys and periodic class renewals",
//                     "Special Surveys and damage surveys",
//                     "Equipment Upgrade & Retrofit Certification",
//                     "Radio Survey & GMDSS Certification",
//                     "Navigational Equipment Certification (Radar, ECDIS, AIS, Gyro, etc.)",
//                     "Documentation Review & Technical File Preparation",
//                     "Support during Class Audits and Port State Control inspections"
//                   ].map((srv, idx) => (
//                     <li key={idx} className="flex items-start space-x-2.5">
//                       <CheckCircle className="w-4 h-4 text-[#E9231B] shrink-0 mt-0.5" />
//                       <span>{srv}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>

//             <div className="lg:col-span-6 space-y-8">
//               {/* Approach: 5-Step Process */}
//               <div className="bg-[#F4F6F8] p-8 rounded-2xl border border-gray-200">
//                 <h3 className="text-xl font-bold text-[#071A35] mb-6 flex items-center space-x-2">
//                   <FileText className="w-5 h-5 text-[#E9231B]" />
//                   <span>Our Approach (5-Step Process)</span>
//                 </h3>
//                 <p className="text-xs text-gray-600 mb-6">
//                   We follow a structured and transparent process designed to minimise vessel downtime:
//                 </p>
//                 <ol className="space-y-4 text-sm text-gray-700">
//                   <li className="flex items-start space-x-3">
//                     <span className="w-6 h-6 rounded-full bg-[#071A35] text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
//                     <div>
//                       <strong className="text-[#071A35] block">Pre-Survey Consultation</strong>
//                       <span>Technical review of equipment and documentation</span>
//                     </div>
//                   </li>
//                   <li className="flex items-start space-x-3">
//                     <span className="w-6 h-6 rounded-full bg-[#071A35] text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
//                     <div>
//                       <strong className="text-[#071A35] block">On-Site Survey &amp; Testing</strong>
//                       <span>Conducted by qualified and authorised surveyors</span>
//                     </div>
//                   </li>
//                   <li className="flex items-start space-x-3">
//                     <span className="w-6 h-6 rounded-full bg-[#E9231B] text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
//                     <div>
//                       <strong className="text-[#071A35] block">Deficiency Identification &amp; Rectification Support</strong>
//                       <span>Practical recommendations and solutions</span>
//                     </div>
//                   </li>
//                   <li className="flex items-start space-x-3">
//                     <span className="w-6 h-6 rounded-full bg-[#071A35] text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
//                     <div>
//                       <strong className="text-[#071A35] block">Documentation &amp; Reporting</strong>
//                       <span>Comprehensive survey reports and certification packages</span>
//                     </div>
//                   </li>
//                   <li className="flex items-start space-x-3">
//                     <span className="w-6 h-6 rounded-full bg-[#071A35] text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
//                     <div>
//                       <strong className="text-[#071A35] block">Class Submission &amp; Follow-up</strong>
//                       <span>Direct liaison with the classification society until approval is obtained</span>
//                     </div>
//                   </li>
//                 </ol>
//               </div>
//             </div>
//           </div>

//           {/* Why Choose STHOS Ltd? & Key Benefits */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-gray-200">
//             <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm space-y-4">
//               <h3 className="text-xl font-bold text-[#071A35]">
//                 Why Choose STHOS Ltd?
//               </h3>
//               <ul className="space-y-2.5 text-sm text-gray-700">
//                 {[
//                   "Authorised survey capability with major classification societies",
//                   "Extensive experience with vessels operating in Nigerian waters and the Gulf of Guinea",
//                   "Strong technical team with both sea-going and class survey backgrounds",
//                   "Strategic base in Port Harcourt for rapid mobilisation",
//                   "End-to-end support — from equipment supply and installation to final class approval",
//                   "Transparent communication and realistic timelines"
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
//                   "Faster certification turnaround compared to relying solely on foreign surveyors",
//                   "Reduced vessel downtime through efficient local execution",
//                   "Improved preparedness for Port State Control inspections",
//                   "Full compliance documentation for insurance and charter requirements",
//                   "Long-term partnership for fleet-wide class maintenance"
//                 ].map((item, idx) => (
//                   <li key={idx} className="flex items-start space-x-2.5">
//                     <CheckCircle className="w-4 h-4 text-[#123B67] shrink-0 mt-0.5" />
//                     <span>{item}</span>
//                   </li>
//                 ))}
//               </ul>

//               <div className="pt-4 mt-4 border-t border-gray-100">
//                 <h4 className="text-sm font-bold text-[#071A35] mb-2">Our Experience</h4>
//                 <p className="text-xs text-gray-600 leading-relaxed">
//                   STHOS Ltd has successfully supported class certification for a wide range of vessels, including offshore support vessels, tankers, container ships, fishing vessels, and government craft operating in West Africa. Our team regularly handles both routine annual surveys and complex retrofit certification projects.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Action Box */}
//           <div className="bg-[#071A35] text-white p-8 sm:p-12 rounded-2xl shadow-xl space-y-6">
//             <div className="max-w-2xl space-y-2">
//               <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
//                 Ready to Secure Your Class Certification?
//               </h3>
//               <p className="text-sm text-gray-300">
//                 Whether you need an annual survey, upgrade certification, or full class approval for new equipment, our experts are ready to assist.
//               </p>
//             </div>

//             <div className="flex flex-wrap items-center gap-4 pt-2">
//               <Link
//                 to="/contact"
//                 state={{ service: "Class Certification Survey" }}
//                 className="bg-[#E9231B] hover:bg-[#C21A13] text-white px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all shadow-md"
//               >
//                 Request a Survey
//               </Link>
//               <Link
//                 to="/contact"
//                 state={{ service: "Class Certification Quote" }}
//                 className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all"
//               >
//                 Get a Quote
//               </Link>
//               <a
//                 href={`tel:${COMPANY_INFO.technicalPhone}`}
//                 className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-gray-200 hover:text-white ml-2"
//               >
//                 <Phone className="w-4 h-4 text-[#E9231B]" />
//                 <span>Speak to Our Class Team: {COMPANY_INFO.technicalPhone}</span>
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
