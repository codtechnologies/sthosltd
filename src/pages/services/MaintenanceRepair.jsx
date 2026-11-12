import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Wrench, 
  CheckCircle, 
  Phone, 
  ArrowRight,
  Clock,
  ShieldCheck,
  AlertTriangle
} from 'lucide-react';
import { COMPANY_INFO } from '../../data/marineData';

export default function MaintenanceRepair() {
  return (
    <div className="w-full flex flex-col">
      {/* Breadcrumb Bar */}
      <div className="bg-[#F4F6F8] border-b border-gray-200 py-3 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center space-x-2 text-gray-600">
          <Link to="/" className="hover:text-[#E9231B]">Home</Link>
          <span>/</span>
          <Link to="/services" className="hover:text-[#E9231B]">Services</Link>
          <span>/</span>
          <span className="font-semibold text-[#071A35]">Maintenance &amp; Repair</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="bg-[#071A35] text-white py-16 relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${COMPANY_INFO.heroImages.radarScreen})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071A35] via-[#071A35]/90 to-transparent z-10" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-[#E9231B] font-bold text-xs uppercase tracking-wider block">
              PAGE · SERVICES › MAINTENANCE &amp; REPAIR
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Maintenance &amp; Repair
            </h1>
            <p className="text-xl text-gray-200 font-medium">
              Reliable Support. Minimised Downtime.
            </p>
            <p className="text-base text-gray-300 leading-relaxed">
              STHOS Ltd provides comprehensive maintenance and repair services for marine radio communication and navigational equipment. We keep your critical systems operating at peak performance, ensuring safety, compliance, and operational continuity across Nigerian waters and the Gulf of Guinea.
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
                  In the harsh marine environment of the Gulf of Guinea, regular maintenance and rapid repair are essential to prevent equipment failure and avoid costly downtime. Our experienced technicians deliver proactive maintenance programs and expert emergency repairs for all major brands of marine electronics.
                </p>
              </div>

              <div className="pt-4">
                <h3 className="text-xl font-bold text-[#071A35] mb-4">
                  Our Maintenance &amp; Repair Services
                </h3>
                <ul className="space-y-2.5 text-sm text-gray-700">
                  {[
                    "Planned Preventive Maintenance Programs — Scheduled inspections and servicing tailored to your vessel’s operational profile",
                    "Corrective Repairs — Fast diagnosis and repair of communication and navigation systems",
                    "Annual Radio Surveys & Performance Testing",
                    "Emergency Breakdown Response — 24/7 availability for critical failures",
                    "System Overhauls & Refurbishment",
                    "Spare Parts Management — Strategic inventory and rapid sourcing",
                    "Software Updates & Firmware Upgrades",
                    "Calibration & Alignment Services (Radar, Gyro, Compasses, etc.)"
                  ].map((srv, idx) => (
                    <li key={idx} className="flex items-start space-x-2.5">
                      <CheckCircle className="w-4 h-4 text-[#E9231B] shrink-0 mt-0.5" />
                      <span>{srv}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-gray-500 mt-4 italic">
                  We support equipment from leading manufacturers including Furuno, Sailor, Icom, JRC, Inmarsat, Iridium, and many others.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-8">
              {/* Our Approach */}
              <div className="bg-[#F4F6F8] p-8 rounded-2xl border border-gray-200">
                <h3 className="text-xl font-bold text-[#071A35] mb-6 flex items-center space-x-2">
                  <Wrench className="w-5 h-5 text-[#E9231B]" />
                  <span>Our Approach</span>
                </h3>
                <ol className="space-y-4 text-sm text-gray-700">
                  {[
                    { title: "Condition Assessment", desc: "Thorough inspection and performance testing" },
                    { title: "Maintenance Planning", desc: "Customised schedules based on manufacturer recommendations, class requirements, and operational needs" },
                    { title: "Expert Execution", desc: "Work carried out by certified marine electronics technicians" },
                    { title: "Testing & Verification", desc: "Full functional testing after every intervention" },
                    { title: "Documentation", desc: "Detailed service reports for class and internal records" },
                    { title: "Follow-up Support", desc: "Performance monitoring and ongoing recommendations" }
                  ].map((st, sIdx) => (
                    <li key={sIdx} className="flex items-start space-x-3">
                      <span className="w-6 h-6 rounded-full bg-[#071A35] text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
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
            </div>
          </div>

          {/* Why Choose & Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-gray-200">
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm space-y-4">
              <h3 className="text-xl font-bold text-[#071A35]">
                Why Choose STHOS Ltd?
              </h3>
              <ul className="space-y-2.5 text-sm text-gray-700">
                {[
                  "Local presence in Port Harcourt with fast response times across the region",
                  "Highly trained technicians with real sea-going and shore-based experience",
                  "Comprehensive spare parts inventory for common critical components",
                  "Authorised service capabilities for major equipment brands",
                  "Strong focus on preventive maintenance to reduce emergency call-outs",
                  "Full support for class society surveys and compliance"
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
                  "Significantly reduced risk of equipment failure at sea",
                  "Lower overall cost of ownership through preventive maintenance",
                  "Faster resolution of technical issues",
                  "Extended equipment lifespan",
                  "Maintained regulatory compliance and class status",
                  "Peace of mind for vessel operators and crew"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2.5">
                    <CheckCircle className="w-4 h-4 text-[#123B67] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 mt-4 border-t border-gray-100">
                <h4 className="text-sm font-bold text-[#071A35] mb-2">Proven Track Record</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  STHOS Ltd has supported the maintenance and repair needs of offshore fleets, commercial shipping companies, fishing vessels, and government craft operating in West African waters. Our proactive approach has helped many clients achieve outstanding reliability and compliance records.
                </p>
              </div>
            </div>
          </div>

          {/* Emergency Callout Box */}
          <div className="bg-[#F4F6F8] p-6 rounded-xl border border-gray-200">
            <h4 className="text-sm font-bold text-[#071A35] uppercase tracking-wider mb-2">
              24/7 Emergency Response
            </h4>
            <p className="text-xs text-gray-700 mb-2">
              Critical failures demand immediate action. Our dedicated emergency team is available around the clock.
            </p>
            <div className="text-sm font-bold text-[#E9231B]">
              Emergency Hotline: {COMPANY_INFO.emergencyHotline} (24 hours / 7 days)
            </div>
            <p className="text-xs text-gray-500 mt-1">
              We provide remote diagnostics, on-site repairs in Nigerian ports, and urgent spare parts dispatch.
            </p>
          </div>

          {/* Action Box */}
          <div className="bg-[#071A35] text-white p-8 sm:p-12 rounded-2xl shadow-xl space-y-6">
            <div className="max-w-2xl space-y-2">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Protect Your Operations with Professional Maintenance
              </h3>
              <p className="text-sm text-gray-300">
                Don’t wait for failure. Partner with us for reliable, expert maintenance and repair services.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/contact"
                state={{ service: "Schedule Preventive Maintenance" }}
                className="bg-[#E9231B] hover:bg-[#C21A13] text-white px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all shadow-md"
              >
                Schedule Preventive Maintenance
              </Link>
              <Link
                to="/contact"
                state={{ service: "Request Emergency Support" }}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all"
              >
                Request Emergency Support
              </Link>
              <Link
                to="/contact"
                state={{ service: "Get a Maintenance Proposal" }}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all"
              >
                Get a Maintenance Proposal
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

