import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Compass, 
  Target, 
  Eye, 
  ShieldCheck, 
  Award, 
  CheckCircle, 
  Anchor, 
  ArrowRight,
  Radio,
  Clock,
  MapPin,
  Cpu
} from 'lucide-react';
import { COMPANY_INFO } from '../data/marineData';

export default function About() {
  return (
    <div className="w-full flex flex-col">
      {/* Header Banner */}
      <section className="bg-[#071A35] text-white py-16 relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${COMPANY_INFO.heroImages.marineEngineer})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071A35] via-[#071A35]/90 to-transparent z-10" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 text-[#E9231B] font-bold text-xs uppercase tracking-wider">
              <Compass className="w-4 h-4" />
              <span>Welcome to STHOS Limited</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              About Us<span className="text-[#E9231B]">.</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Leading indigenous marine radio communication and marine navigational equipment specialist headquartered in Port Harcourt, Rivers State.
            </p>
          </div>
        </div>
      </section>

      {/* Operational Scope Strip */}
      <div className="bg-[#123B67] text-white text-xs py-3 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#E9231B] animate-pulse"></span>
            <span className="font-semibold uppercase tracking-wider">Operational Area: Nigeria &amp; Gulf of Guinea</span>
          </div>
          <div className="flex items-center space-x-4 text-gray-300">
            <span>HQ: Port Harcourt Base</span>
            <span>•</span>
            <span className="text-[#E9231B] font-bold">NIMASA &amp; Class Recognized</span>
          </div>
        </div>
      </div>

      {/* SECTION: WHO WE ARE (2-COLUMN EDITORIAL) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#E9231B]">
                Who We Are
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#071A35] tracking-tight leading-tight">
                Specialized Marine Electronics for Demanding Sea Operations
              </h2>
              <div className="space-y-4 text-base text-gray-600 leading-relaxed">
                <p>
                  <strong>STHOS Limited</strong> is a leading marine radio communication and marine navigational equipment company based in Port Harcourt, Rivers State, Nigeria. We provide professional sales, installation, maintenance, inspection, testing, repair, and technical support for a wide range of marine communication and navigation systems serving the maritime industry across Nigeria and the Gulf of Guinea.
                </p>
                <p>
                  With a strong commitment to safety, reliability, and technical excellence, we help vessel owners, offshore operators, shipping companies, marine contractors, ports, and government agencies maintain dependable communication and navigation capabilities that comply with international maritime standards.
                </p>
                <p>
                  Our certified Radio Surveyors and field electronics technicians diagnose, service, calibrate, and overhaul equipment from global OEM manufacturers, ensuring maximum uptime and full classification compliance during Port State Control audits.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 text-xs font-bold text-[#071A35] bg-[#F4F6F8] px-3.5 py-2 rounded-lg border border-gray-200">
                  <CheckCircle className="w-4 h-4 text-[#E9231B]" />
                  <span>SOLAS &amp; IMO Standards</span>
                </div>
                <div className="flex items-center space-x-2 text-xs font-bold text-[#071A35] bg-[#F4F6F8] px-3.5 py-2 rounded-lg border border-gray-200">
                  <CheckCircle className="w-4 h-4 text-[#E9231B]" />
                  <span>Port Harcourt Depot Stock</span>
                </div>
                <div className="flex items-center space-x-2 text-xs font-bold text-[#071A35] bg-[#F4F6F8] px-3.5 py-2 rounded-lg border border-gray-200">
                  <CheckCircle className="w-4 h-4 text-[#E9231B]" />
                  <span>Rapid 24/7 Dispatch</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-[#F4F6F8]">
                <img 
                  src={COMPANY_INFO.heroImages.whoWeAre} 
                  alt="STHOS Limited marine engineering team at work"
                  className="w-full h-[480px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#071A35] text-white p-6 rounded-xl shadow-xl max-w-xs border border-white/10 hidden sm:block">
                <span className="text-3xl font-extrabold text-[#E9231B] block">24/7</span>
                <span className="text-xs uppercase tracking-wider text-gray-300 font-bold block mt-1">Emergency Dispatch</span>
                <span className="text-xs text-gray-400 mt-1 block">Dedicated marine field engineers ready for offshore mobilization.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: MISSION, VISION & CORE VALUES */}
      <section className="py-20 bg-[#F4F6F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Mission */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200/80 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#E9231B]/10 text-[#E9231B] flex items-center justify-center mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-[#071A35] mb-3">
                  Our Mission
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  To provide reliable, innovative, and internationally compliant marine communication and navigation solutions that enhance safety, operational efficiency, and confidence for maritime operators throughout Nigeria and the Gulf of Guinea.
                </p>
              </div>
              <span className="text-xs font-bold text-[#E9231B] uppercase tracking-wider mt-6 block">
                Safety • Reliability • Precision
              </span>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200/80 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#071A35]/10 text-[#071A35] flex items-center justify-center mb-6">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-[#071A35] mb-3">
                  Our Vision
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  To become the preferred marine electronics and radio communication solutions provider in West and Central Africa, recognised for technical excellence, innovation, professionalism, and exceptional customer service.
                </p>
              </div>
              <span className="text-xs font-bold text-[#071A35] uppercase tracking-wider mt-6 block">
                West &amp; Central Africa Leadership
              </span>
            </div>
          </div>

          {/* Our Commitment Banner */}
          <div className="bg-[#071A35] text-white p-8 sm:p-12 rounded-2xl shadow-xl border border-white/10">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E9231B]">
                Uncompromising Quality
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Our Commitment to Quality and Safety
              </h3>
              <p className="text-base text-gray-300 leading-relaxed">
                Every project we undertake is guided by professionalism, technical competence, and an unwavering commitment to quality. From a single equipment repair to complete vessel communication and navigation system integration, we strive to deliver solutions that exceed our clients’ expectations while contributing to safer maritime operations.
              </p>
              <p className="text-sm text-gray-400">
                At STHOS Limited, we are more than a marine electronics company — we are your trusted technical partner for dependable marine communication and navigation solutions across Nigeria and the Gulf of Guinea.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: OUR EXPERTISE & TECHNICAL SCOPE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#E9231B]">
              Technical Prowess
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#071A35] tracking-tight">
              Our Expertise &amp; Core Disciplines
            </h2>
            <p className="text-base text-gray-600">
              Our team consists of certified Radio Surveyors, Marine Electronics Technicians, and experienced engineers with extensive knowledge of modern marine communication and navigation technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Class Certification & Statutory Radio Surveys",
              "Marine Radio Communication Systems (VHF, MF/HF)",
              "Marine Navigation Suites (Radar, Dual ECDIS)",
              "GMDSS Installation, Alignment & Maintenance",
              "Radio Surveys & Annual Performance Tests (VDR APT)",
              "AIS (Automatic Identification System) Fitout & Servicing",
              // "Radar Calibration, Magnetron Tuning & Overhauls",
              // "GPS & Electronic Chart Information Systems",
              // "EPIRB, SART & Emergency Beacon Certification",
              // "Gyrocompass & Magnetic Compass Calibration",
              // "Preventive Maintenance & Scheduled Servicing",
              // "Crew Operational & Emergency Training Programs"
            ].map((exp, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-xl bg-[#F4F6F8] border border-gray-200 flex items-start space-x-3.5 hover:border-[#E9231B]/40 transition-colors"
              >
                <div className="w-7 h-7 rounded-full bg-[#E9231B]/10 text-[#E9231B] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <span className="text-sm font-semibold text-[#071A35] leading-snug">
                  {exp}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-[#E9231B] hover:bg-[#C21A13] text-white px-8 py-3.5 rounded-lg text-xs uppercase tracking-wider font-bold transition-all shadow-md"
            >
              <span>Consult Our Technical Team</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

