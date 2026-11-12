import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Compass, 
  Menu, 
  X, 
  ChevronDown, 
  ArrowRight
} from 'lucide-react';
import { COMPANY_INFO } from '../data/marineData';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [equipmentDropdown, setEquipmentDropdown] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path || location.pathname.startsWith(path + '/');

  return (
    <header className="sticky top-0 z-50 w-full shadow-md">
      {/* Top Bar - Emergency Hotline & Class Approvals */}
      <div className="bg-[#071A35] text-white border-b border-white/10 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-10 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E9231B] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E9231B]"></span>
              </span>
              <span className="text-gray-300 uppercase tracking-wider font-medium text-[11px]">24/7 Marine Hotline:</span>
              <a 
                href={`tel:${COMPANY_INFO.emergencyHotline}`} 
                className="font-bold text-[#E9231B] hover:text-white transition-colors"
              >
                {COMPANY_INFO.emergencyHotline}
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-2 text-gray-300">
              <Phone className="w-3.5 h-3.5 text-[#E9231B]" />
              <a href={`tel:${COMPANY_INFO.salesPhone}`} className="hover:text-white transition-colors">
                {COMPANY_INFO.salesPhone}
              </a>
            </div>
            <div className="hidden lg:flex items-center space-x-2 text-gray-300">
              <Mail className="w-3.5 h-3.5 text-[#E9231B]" />
              <a href={`mailto:${COMPANY_INFO.primaryEmail}`} className="hover:text-white transition-colors">
                {COMPANY_INFO.primaryEmail}
              </a>
            </div>
            <div className="hidden xl:flex items-center space-x-2 text-gray-300">
              <MapPin className="w-3.5 h-3.5 text-[#E9231B]" />
              <span>{COMPANY_INFO.headquarters}</span>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <span className="hidden sm:inline text-gray-400 text-[11px] uppercase tracking-wider">Class Approvals:</span>
            <div className="flex items-center space-x-1.5 font-semibold text-[10px] tracking-wider">
              {COMPANY_INFO.classSocieties.map((society, idx) => (
                <span 
                  key={idx} 
                  className={`px-1.5 py-0.5 rounded text-[10px] ${
                    society.includes('NIMASA') 
                      ? 'bg-[#E9231B]/30 text-white font-bold border border-[#E9231B]/40' 
                      : 'bg-white/10 text-gray-200'
                  }`}
                >
                  {society}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-11 h-11 rounded-lg bg-[#071A35] flex items-center justify-center text-white shadow-md group-hover:bg-[#123B67] transition-colors">
              <Compass className="w-6 h-6 text-[#E9231B]" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tight text-[#071A35] leading-none">
                STHOS<span className="text-[#E9231B]">.</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#5B6B82] font-semibold mt-0.5">
                Marine Specialists
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-semibold">
            <Link 
              to="/" 
              className={`transition-colors py-2 ${
                location.pathname === '/' ? 'text-[#E9231B] border-b-2 border-[#E9231B]' : 'text-[#071A35] hover:text-[#E9231B]'
              }`}
            >
              Home
            </Link>
            
            <Link 
              to="/about" 
              className={`transition-colors py-2 ${
                location.pathname === '/about' ? 'text-[#E9231B] border-b-2 border-[#E9231B]' : 'text-[#071A35] hover:text-[#E9231B]'
              }`}
            >
              About Us
            </Link>

            {/* Services Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <Link 
                to="/services" 
                className={`flex items-center space-x-1 py-2 ${
                  location.pathname === '/services' || location.pathname.includes('certification') || location.pathname.includes('installation') || location.pathname.includes('maintenance') || location.pathname.includes('training') || location.pathname.includes('emergency')
                    ? 'text-[#E9231B] border-b-2 border-[#E9231B]' 
                    : 'text-[#071A35] hover:text-[#E9231B]'
                }`}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </Link>

              {servicesDropdown && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-lg shadow-xl border border-gray-100 py-3 z-50">
                  <Link 
                    to="/services" 
                    className="block px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#E9231B] border-b border-gray-100 mb-1"
                  >
                    Services Overview &rarr;
                  </Link>
                  <Link to="/class-certification/" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[#F4F6F8] hover:text-[#E9231B] transition-colors">
                    Class Certification
                  </Link>
                  <Link to="/installation-integration/" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[#F4F6F8] hover:text-[#E9231B] transition-colors">
                    Installation &amp; Integration
                  </Link>
                  <Link to="/maintenance-repair/" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[#F4F6F8] hover:text-[#E9231B] transition-colors">
                    Maintenance &amp; Repair
                  </Link>
                  <Link to="/training-programs/" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[#F4F6F8] hover:text-[#E9231B] transition-colors">
                    Training Programs
                  </Link>
                  <Link to="/emergency-support/" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[#F4F6F8] hover:text-[#E9231B] transition-colors">
                    Emergency Support
                  </Link>
                </div>
              )}
            </div>

            {/* Equipment Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setEquipmentDropdown(true)}
              onMouseLeave={() => setEquipmentDropdown(false)}
            >
              <Link 
                to="/equipment" 
                className={`flex items-center space-x-1 py-2 ${
                  location.pathname === '/equipment' || location.pathname.includes('gmdss-safety') || location.pathname.includes('navigational') || location.pathname.includes('communication-systems')
                    ? 'text-[#E9231B] border-b-2 border-[#E9231B]' 
                    : 'text-[#071A35] hover:text-[#E9231B]'
                }`}
              >
                <span>Equipment</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </Link>

              {equipmentDropdown && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-lg shadow-xl border border-gray-100 py-3 z-50">
                  <Link 
                    to="/equipment" 
                    className="block px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#E9231B] border-b border-gray-100 mb-1"
                  >
                    Marine Equipment Overview &rarr;
                  </Link>
                  <Link to="/gmdss-safety-equipment/" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[#F4F6F8] hover:text-[#E9231B] transition-colors">
                    GMDSS &amp; Safety Equipment
                  </Link>
                  <Link to="/navigational-equipment/" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[#F4F6F8] hover:text-[#E9231B] transition-colors">
                    Navigational Equipment
                  </Link>
                  <Link to="/communication-systems/" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[#F4F6F8] hover:text-[#E9231B] transition-colors">
                    Communication Systems
                  </Link>
                </div>
              )}
            </div>

            <Link 
              to="/contact" 
              className={`transition-colors py-2 ${
                location.pathname === '/contact' ? 'text-[#E9231B] border-b-2 border-[#E9231B]' : 'text-[#071A35] hover:text-[#E9231B]'
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Action Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link 
              to="/contact" 
              className="inline-flex items-center space-x-2 bg-[#E9231B] hover:bg-[#C21A13] text-white px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-bold transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-3">
            <Link 
              to="/contact" 
              className="bg-[#E9231B] text-white p-2 rounded-lg text-xs font-semibold"
            >
              Enquire
            </Link>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#071A35] hover:text-[#E9231B] p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-6 py-6 space-y-4 shadow-xl max-h-[85vh] overflow-y-auto">
          <Link 
            to="/" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-bold text-[#071A35] hover:text-[#E9231B] py-2 border-b border-gray-100"
          >
            Home
          </Link>
          <Link 
            to="/about" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-bold text-[#071A35] hover:text-[#E9231B] py-2 border-b border-gray-100"
          >
            About Us
          </Link>
          
          <div className="py-2 border-b border-gray-100 space-y-2">
            <Link 
              to="/services" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-bold text-[#071A35] hover:text-[#E9231B]"
            >
              Services Overview
            </Link>
            <div className="pl-4 space-y-2 text-sm text-gray-700">
              <Link to="/class-certification/" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#E9231B]">
                • Class Certification
              </Link>
              <Link to="/installation-integration/" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#E9231B]">
                • Installation &amp; Integration
              </Link>
              <Link to="/maintenance-repair/" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#E9231B]">
                • Maintenance &amp; Repair
              </Link>
              <Link to="/training-programs/" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#E9231B]">
                • Training Programs
              </Link>
              <Link to="/emergency-support/" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#E9231B]">
                • Emergency Support
              </Link>
            </div>
          </div>

          <div className="py-2 border-b border-gray-100 space-y-2">
            <Link 
              to="/equipment" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-bold text-[#071A35] hover:text-[#E9231B]"
            >
              Equipment Overview
            </Link>
            <div className="pl-4 space-y-2 text-sm text-gray-700">
              <Link to="/gmdss-safety-equipment/" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#E9231B]">
                • GMDSS &amp; Safety Equipment
              </Link>
              <Link to="/navigational-equipment/" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#E9231B]">
                • Navigational Equipment
              </Link>
              <Link to="/communication-systems/" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#E9231B]">
                • Communication Systems
              </Link>
            </div>
          </div>

          <Link 
            to="/contact" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-bold text-[#071A35] hover:text-[#E9231B] py-2 border-b border-gray-100"
          >
            Contact Us
          </Link>

          <div className="pt-4 space-y-3">
            <div className="flex items-center space-x-2 text-sm text-[#071A35] font-semibold">
              <Phone className="w-4 h-4 text-[#E9231B]" />
              <span>Hotline: {COMPANY_INFO.emergencyHotline}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Mail className="w-4 h-4 text-[#E9231B]" />
              <span>{COMPANY_INFO.primaryEmail}</span>
            </div>
            <Link 
              to="/contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center block bg-[#E9231B] text-white py-3 rounded-lg font-bold uppercase tracking-wider text-xs shadow-md mt-4"
            >
              Get in Touch Today
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
