import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Compass, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { COMPANY_INFO, SERVICES_DATA } from '../data/marineData';

export default function Footer() {
  return (
    <footer className="bg-[#071A35] text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Strips Top Tier */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-12 border-b border-white/10">
          <div className="p-5 rounded-xl bg-white/5 border border-white/5 flex items-start space-x-4">
            <div className="w-10 h-10 rounded-lg bg-[#E9231B] flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-gray-400 font-medium block">
                Email Us 24/7
              </span>
              <a href={`mailto:${COMPANY_INFO.primaryEmail}`} className="text-sm font-semibold hover:text-[#E9231B] transition-colors">
                {COMPANY_INFO.primaryEmail}
              </a>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-white/5 border border-white/5 flex items-start space-x-4">
            <div className="w-10 h-10 rounded-lg bg-[#E9231B] flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-gray-400 font-medium block">
                Emergency Hotline
              </span>
              <a href={`tel:${COMPANY_INFO.emergencyHotline}`} className="text-sm font-bold text-[#E9231B] hover:underline">
                {COMPANY_INFO.emergencyHotline}
              </a>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-white/5 border border-white/5 flex items-start space-x-4">
            <div className="w-10 h-10 rounded-lg bg-[#123B67] flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-gray-400 font-medium block">
                Office & Technical
              </span>
              <span className="text-sm font-semibold block">{COMPANY_INFO.salesPhone}</span>
              <span className="text-xs text-gray-400 block">{COMPANY_INFO.technicalPhone}</span>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-white/5 border border-white/5 flex items-start space-x-4">
            <div className="w-10 h-10 rounded-lg bg-[#123B67] flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-gray-400 font-medium block">
                Operating Hours
              </span>
              <span className="text-xs font-semibold block">{COMPANY_INFO.businessHours}</span>
              <span className="text-[11px] text-[#E9231B] font-bold block mt-0.5">Emergency: 24/7/365</span>
            </div>
          </div>
        </div>

        {/* Middle Tier - Company Info & Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-12 border-b border-white/10">
          {/* Company Bio */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-lg bg-[#123B67] flex items-center justify-center text-white">
                <Compass className="w-5 h-5 text-[#E9231B]" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                STHOS Limited
              </span>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed max-w-sm">
              Premier marine communication and navigational engineering firm headquartered in Port Harcourt, Rivers State. 
              Serving vessel operators, FPSOs, offshore platforms, and shipyards throughout Nigeria and the Gulf of Guinea with accredited class survey certification and offshore field engineering.
            </p>
            <div className="flex items-center space-x-2 text-xs text-gray-400">
              <MapPin className="w-4 h-4 text-[#E9231B] shrink-0" />
              <span>{COMPANY_INFO.headquarters}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-white mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <Link to="/" className="hover:text-white transition-colors flex items-center space-x-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-[#E9231B]" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors flex items-center space-x-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-[#E9231B]" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors flex items-center space-x-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-[#E9231B]" />
                  <span>Our Services</span>
                </Link>
              </li>
              <li>
                <Link to="/equipment" className="hover:text-white transition-colors flex items-center space-x-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-[#E9231B]" />
                  <span>Marine Equipment</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors flex items-center space-x-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-[#E9231B]" />
                  <span>Contact & Dispatch</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-white mb-4">
              Key Disciplines
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Radio Surveys & Inspection
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  GMDSS & Safety Integration
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Marine Radar & ECDIS Fitout
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Gyrocompass & Sensor Overhauls
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  24/7 Offshore Dispatch
                </Link>
              </li>
            </ul>
          </div>

          {/* Compliance & Brands */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-white mb-4">
              Authorized Brands
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {COMPANY_INFO.brands.map((brand, idx) => (
                <span 
                  key={idx}
                  className="bg-white/5 border border-white/10 px-2 py-1 rounded text-[11px] text-gray-300 font-medium"
                >
                  {brand}
                </span>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-white/10">
              <span className="text-[11px] text-gray-400 block mb-1">Regulatory Standards:</span>
              <span className="text-xs font-semibold text-gray-200">SOLAS • IMO • NIMASA</span>
            </div>
          </div>
        </div>

        {/* Bottom Tier - Accreditations & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-semibold text-gray-300">Statutory Recognition:</span>
            {COMPANY_INFO.classSocieties.map((soc, idx) => (
              <span key={idx} className="bg-white/10 px-2 py-0.5 rounded text-[11px] text-white">
                {soc}
              </span>
            ))}
          </div>

          <p className="text-center md:text-right">
            &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved. Registered Marine Electronics Engineering Company, Port Harcourt, Nigeria.
          </p>
        </div>
      </div>
    </footer>
  );
}
