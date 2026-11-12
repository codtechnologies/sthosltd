import React from 'react';
import { Link } from 'react-router-dom';
import {
  Radio,
  Compass,
  Cpu,
  Wrench,
  ShieldCheck,
  Clock,
  AlertTriangle,
  GraduationCap,
  ArrowRight,
  CheckCircle,
  FileText,
  Phone,
  Settings
} from 'lucide-react';
import { COMPANY_INFO, SERVICES_DATA } from '../data/marineData';

const iconMap = {
  Radio: Radio,
  Compass: Compass,
  Cpu: Cpu,
  Wrench: Wrench,
  ShieldCheck: ShieldCheck,
  Clock: Clock,
  GraduationCap: GraduationCap,
  AlertTriangle: AlertTriangle
};

export default function Services() {
  return (
    <div className="w-full flex flex-col">
      {/* Services Header Banner */}
      <section className="bg-[#071A35] text-white py-16 relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${COMPANY_INFO.heroImages.bridge})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071A35] via-[#071A35]/90 to-transparent z-10" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 text-[#E9231B] font-bold text-xs uppercase tracking-wider">
              <Compass className="w-4 h-4" />
              <span>Full Technical Lifecycle Support</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Marine Communication & Navigation Services
            </h1>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              STHOS Ltd is your trusted one-stop partner for all marine electronics needs across Nigerian waters and the Gulf of Guinea — from regulatory compliance to long-term operational support.
            </p>
          </div>
        </div>
      </section>

      {/* Value Added Banner */}
      <div className="bg-[#123B67] text-white py-4 text-xs border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start space-x-2">
            <CheckCircle className="w-4 h-4 text-[#E9231B]" />
            <span className="font-semibold">Extended Warranty Options</span>
          </div>
          <div className="flex items-center justify-center sm:justify-start space-x-2">
            <CheckCircle className="w-4 h-4 text-[#E9231B]" />
            <span className="font-semibold">Remote Diagnostics Support</span>
          </div>
          <div className="flex items-center justify-center sm:justify-start space-x-2">
            <CheckCircle className="w-4 h-4 text-[#E9231B]" />
            <span className="font-semibold">As-Built Technical Drawings</span>
          </div>
          <div className="flex items-center justify-center sm:justify-start space-x-2">
            <CheckCircle className="w-4 h-4 text-[#E9231B]" />
            <span className="font-semibold">Crew Handover Familiarisation</span>
          </div>
        </div>
      </div>

      {/* DETAILED SERVICES LIST */}
      <section className="py-20 bg-[#F4F6F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {SERVICES_DATA.map((service, idx) => {
            const IconComponent = iconMap[service.icon] || Compass;
            const isEven = idx % 2 === 0;

            return (
              <div 
                key={service.id}
                id={service.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200/80 p-6 sm:p-10 transition-shadow hover:shadow-xl"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  {/* Content Column (full width) */}
                  <div className={`lg:col-span-12 space-y-5`}> 
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-xl bg-[#E9231B]/10 text-[#E9231B] flex items-center justify-center shrink-0">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs uppercase font-bold text-[#E9231B] tracking-wider block">
                          Discipline {idx + 1}
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071A35]">
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-base text-gray-700 font-medium leading-relaxed">
                      {service.shortDesc}
                    </p>

                    <p className="text-sm text-gray-600 leading-relaxed">
                      {service.fullDesc}
                    </p>

                    {/* Features checklist */}
                    <div className="space-y-2 pt-2 border-t border-gray-100">
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-2">
                        Key Capabilities &amp; Scope:
                      </span>
                      {service.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start space-x-2 text-xs sm:text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-[#E9231B] shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="pt-4 flex flex-wrap gap-4">
                      <Link 
                        to="/contact" 
                        state={{ service: service.title }}
                        className="inline-flex items-center space-x-2 bg-[#E9231B] hover:bg-[#C21A13] text-white px-6 py-3 rounded-lg text-xs uppercase tracking-wider font-bold transition-all shadow-md"
                      >
                        <span>Enquire About {service.title}</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>

                      <a 
                        href={`tel:${COMPANY_INFO.emergencyHotline}`}
                        className="inline-flex items-center space-x-2 bg-[#071A35] hover:bg-[#123B67] text-white px-5 py-3 rounded-lg text-xs uppercase tracking-wider font-bold transition-colors"
                      >
                        <Phone className="w-4 h-4 text-[#E9231B]" />
                        <span>Call Support Desk</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-16 bg-[#071A35] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs uppercase font-bold tracking-widest text-[#E9231B]">
            Class Compliance &amp; Surveys
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold max-w-3xl mx-auto">
            Need an Accredited Radio Survey or Vessel System Retrofit?
          </h2>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto">
            Our certified surveyors coordinate directly with classification societies (DNV, ABS, BV, Lloyd's Register) and NIMASA to deliver rapid certification and zero vessel downtime.
          </p>
          <div className="pt-4">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-[#E9231B] hover:bg-[#C21A13] text-white px-8 py-4 rounded-xl text-xs uppercase tracking-wider font-bold transition-all shadow-xl"
            >
              <span>Schedule a Survey / Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
