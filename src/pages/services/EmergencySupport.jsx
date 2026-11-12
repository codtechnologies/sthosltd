import React from 'react';
import { Link } from 'react-router-dom';
import { 
  AlertTriangle, 
  CheckCircle, 
  Phone, 
  ArrowRight,
  ShieldAlert,
  Clock,
  MapPin,
  Radio
} from 'lucide-react';
import { COMPANY_INFO } from '../../data/marineData';

export default function EmergencySupport() {
  return (
    <div className="w-full flex flex-col">
      {/* Breadcrumb Bar */}
      <div className="bg-[#F4F6F8] border-b border-gray-200 py-3 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center space-x-2 text-gray-600">
          <Link to="/" className="hover:text-[#E9231B]">Home</Link>
          <span>/</span>
          <Link to="/services" className="hover:text-[#E9231B]">Services</Link>
          <span>/</span>
          <span className="font-semibold text-[#071A35]">Emergency Support</span>
        </div>
      </div>

      {/* Emergency Strip */}
      <div className="bg-[#E9231B] text-white py-4 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center space-x-3">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
            <span className="font-extrabold text-sm uppercase tracking-wider">
              24/7 Marine Electronics Emergency Technical Response
            </span>
          </div>
          <div>
            <span className="text-xs uppercase tracking-wider">Call Directly: </span>
            <a href={`tel:${COMPANY_INFO.emergencyHotline}`} className="font-black text-lg underline ml-1 hover:text-gray-100">
              {COMPANY_INFO.emergencyHotline}
            </a>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <section className="bg-[#071A35] text-white py-16 relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${COMPANY_INFO.heroImages.bridge})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071A35] via-[#071A35]/90 to-transparent z-10" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-[#E9231B] font-bold text-xs uppercase tracking-wider block">
              PAGE · SERVICES › EMERGENCY SUPPORT
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Emergency Support
            </h1>
            <p className="text-xl text-gray-200 font-medium">
              Rapid Response. When Every Second Counts.
            </p>
            <p className="text-base text-gray-300 leading-relaxed">
              STHOS Ltd provides 24/7 emergency support for marine radio communication and navigational equipment failures. We understand that critical system breakdowns at sea can compromise safety, compliance, and operations — which is why our dedicated team is ready to respond immediately across Nigerian waters and the Gulf of Guinea.
            </p>
          </div>
        </div>
      </section>

      {/* Content Body */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071A35]">
                Overview
              </h2>
              <div className="space-y-4 text-base text-gray-700 leading-relaxed">
                <p>
                  Equipment failures do not wait for business hours. Whether facing a GMDSS distress system issue, radar blackout, satellite communication loss, or complete navigation failure, STHOS Ltd delivers fast, expert assistance to get your vessel back to safe and compliant operations as quickly as possible.
                </p>
              </div>

              <div className="pt-4">
                <h3 className="text-xl font-bold text-[#071A35] mb-4">
                  Our Emergency Support Services
                </h3>
                <ul className="space-y-2.5 text-sm text-gray-700">
                  {[
                    "24/7 Technical Hotline — Immediate expert guidance via phone or satellite",
                    "Remote Diagnostics & Troubleshooting — Rapid fault identification from shore",
                    "On-Site Emergency Repairs — Fast mobilisation of technicians to vessels in port or near-shore locations",
                    "Urgent Spare Parts Dispatch — Strategic inventory in Port Harcourt for critical components",
                    "Temporary Workarounds & Safety Measures — Ensuring continued safe navigation during repairs",
                    "Post-Incident Reporting & Class Notifications — Support with documentation and regulatory requirements",
                    "Coordination with Classification Societies — Assistance during urgent surveys or approvals"
                  ].map((srv, idx) => (
                    <li key={idx} className="flex items-start space-x-2.5">
                      <CheckCircle className="w-4 h-4 text-[#E9231B] shrink-0 mt-0.5" />
                      <span>{srv}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-gray-500 mt-4 italic">
                  We support all major brands of marine electronics, including Furuno, Sailor, Icom, JRC, Inmarsat, Iridium, and more.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-8">
              {/* Emergency Response Process */}
              <div className="bg-[#F4F6F8] p-8 rounded-2xl border border-gray-200">
                <h3 className="text-xl font-bold text-[#071A35] mb-6 flex items-center space-x-2">
                  <AlertTriangle className="w-5 h-5 text-[#E9231B]" />
                  <span>Our Emergency Response Process</span>
                </h3>
                <ol className="space-y-4 text-sm text-gray-700">
                  {[
                    { title: "Immediate Contact", desc: "Call our dedicated 24/7 hotline" },
                    { title: "Rapid Assessment", desc: "Expert diagnosis within minutes" },
                    { title: "Action Plan", desc: "Clear recommendations (remote fix, parts delivery, or on-site attendance)" },
                    { title: "Resolution", desc: "Execution of repairs with minimal downtime" },
                    { title: "Verification & Handover", desc: "Full testing and crew briefing" },
                    { title: "Follow-Up", desc: "Root cause analysis and preventive recommendations" }
                  ].map((st, sIdx) => (
                    <li key={sIdx} className="flex items-start space-x-3">
                      <span className="w-6 h-6 rounded-full bg-[#E9231B] text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {sIdx + 1}
                      </span>
                      <div>
                        <strong className="text-[#071A35] block">{st.title}</strong>
                        <span>{st.desc}</span>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Preparedness Recommendation Box */}
              <div className="bg-[#071A35] text-white p-6 rounded-2xl">
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#E9231B] mb-2">
                  Preparedness Recommendation
                </h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  We strongly encourage all clients to include our emergency contact details in their bridge emergency procedures and to conduct periodic drills with our team.
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose & Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-gray-200">
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm space-y-4">
              <h3 className="text-xl font-bold text-[#071A35]">
                Why Choose STHOS Ltd for Emergencies?
              </h3>
              <ul className="space-y-2.5 text-sm text-gray-700">
                {[
                  "Local headquarters in Port Harcourt enabling the fastest possible response in the region",
                  "Highly experienced marine electronics engineers available 24/7",
                  "Comprehensive stock of critical spare parts",
                  "Proven track record supporting vessels in Nigerian waters and the Gulf of Guinea",
                  "Strong relationships with classification societies for urgent compliance matters",
                  "Calm, professional, and solution-focused support under pressure"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2.5">
                    <CheckCircle className="w-4 h-4 text-[#E9231B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm space-y-4">
              <h3 className="text-xl font-bold text-[#071A35]">
                Key Benefits
              </h3>
              <ul className="space-y-2.5 text-sm text-gray-700">
                {[
                  "Minimised operational downtime and lost revenue",
                  "Enhanced safety for crew and vessel during critical failures",
                  "Reduced risk of regulatory penalties or port detentions",
                  "Expert guidance that prevents minor issues from becoming major incidents",
                  "Peace of mind knowing reliable local support is always available"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2.5">
                    <CheckCircle className="w-4 h-4 text-[#123B67] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action Box */}
          <div className="bg-[#071A35] text-white p-8 sm:p-12 rounded-2xl shadow-xl space-y-6">
            <div className="max-w-2xl space-y-2">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Ready When You Need Us
              </h3>
              <p className="text-sm text-gray-300">
                Don’t wait until an emergency occurs. Contact us today to discuss your emergency response plan or to request a preparedness review for your fleet.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={`tel:${COMPANY_INFO.emergencyHotline}`}
                className="bg-[#E9231B] hover:bg-[#C21A13] text-white px-8 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all shadow-md inline-flex items-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call the 24/7 Hotline: {COMPANY_INFO.emergencyHotline}</span>
              </a>

              <Link
                to="/contact"
                state={{ service: "Emergency Preparedness Review" }}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all"
              >
                Request Preparedness Review
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
