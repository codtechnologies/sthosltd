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
  ArrowRight, 
  CheckCircle, 
  Anchor, 
  PhoneCall, 
  Award,
  Layers,
  Shield,
  MapPin,
  ExternalLink
} from 'lucide-react';
import { 
  COMPANY_INFO, 
  SERVICES_DATA, 
  EQUIPMENT_DATA, 
  INDUSTRIES_SERVED, 
  WHY_CHOOSE_US 
} from '../data/marineData';

// Icon map helper
const iconMap = {
  Radio: Radio,
  Compass: Compass,
  Cpu: Cpu,
  Wrench: Wrench,
  ShieldCheck: ShieldCheck,
  Clock: Clock,
  AlertTriangle: AlertTriangle,
  Award: Award,
  Shield: Shield,
  CheckCircle: CheckCircle,
  Layers: Layers
};

export default function Home() {
  const homeServices = SERVICES_DATA.slice(0, 6);
  const featuredEquipment = EQUIPMENT_DATA.slice(0, 6);

  return (
    <div className="w-full flex flex-col">
      {/* SECTION 1: HERO BANNER */}
      <section className="relative min-h-[620px] lg:min-h-[700px] flex items-center bg-[#071A35] text-white overflow-hidden">
        {/* Background Image with Dark Navy Gradient Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-40 scale-105 transform transition-transform duration-1000"
          style={{ backgroundImage: `url(${COMPANY_INFO.heroImages.bridge})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071A35] via-[#071A35]/90 to-transparent z-10" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-gray-200 text-xs font-semibold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#E9231B] animate-pulse"></span>
                <span>Mission-Critical Maritime Engineering · Port Harcourt</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white">
                Reliable Marine Communication. <br className="hidden sm:inline" />
                Advanced Navigation. <br className="hidden sm:inline" />
                <span className="text-[#E9231B]">Trusted Technical Support.</span>
              </h1>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed">
                Keeping vessels connected, compliant and operational with professional marine communication, navigation and electronic solutions across Nigeria and the Gulf of Guinea.
              </p>

              {/* Hero CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/services"
                  className="inline-flex items-center space-x-2 bg-[#E9231B] hover:bg-[#C21A13] text-white px-7 py-3.5 rounded-lg text-xs uppercase tracking-wider font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white border border-white/25 px-7 py-3.5 rounded-lg text-xs uppercase tracking-wider font-bold transition-all hover:-translate-y-0.5"
                >
                  <span>Contact Our Team</span>
                </Link>
              </div>
            </div>

            {/* Quick Readiness Card */}
            <div className="lg:col-span-4 hidden lg:block">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-2xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-300">
                    Bridge Readiness Unit
                  </span>
                  <span className="text-xs font-bold text-[#E9231B] bg-[#E9231B]/20 px-2 py-0.5 rounded">
                    24/7 ACTIVE
                  </span>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="p-3 rounded-lg bg-white/5 flex items-center justify-between">
                    <span className="text-gray-300">GMDSS Operational Support</span>
                    <span className="font-bold text-white">100% SOLAS</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white/5 flex items-center justify-between">
                    <span className="text-gray-300">Class Radio Surveys</span>
                    <span className="font-bold text-white">DNV · ABS · BV · LR</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white/5 flex items-center justify-between">
                    <span className="text-gray-300">Rapid Dispatch Latency</span>
                    <span className="font-bold text-[#E9231B]">&lt; 2.4 Hours</span>
                  </div>
                </div>

                <div className="pt-2 flex items-center space-x-2 text-xs text-gray-300">
                  <PhoneCall className="w-4 h-4 text-[#E9231B]" />
                  <span>Immediate Hotline: <strong className="text-white">{COMPANY_INFO.emergencyHotline}</strong></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick-Facts Strip (Under Hero) */}
        <div className="absolute bottom-0 inset-x-0 bg-[#040E1E] border-t border-white/10 py-3.5 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 divide-y md:divide-y-0 md:divide-x divide-white/10 text-xs text-gray-300">
              <div className="flex items-center space-x-3 py-1 md:py-0 px-2">
                <MapPin className="w-4 h-4 text-[#E9231B] shrink-0" />
                <div>
                  <span className="text-[10px] text-gray-400 block uppercase tracking-wider font-semibold">Base Location</span>
                  <span className="font-bold text-white text-xs">Port Harcourt, Nigeria</span>
                </div>
              </div>

              <div className="flex items-center space-x-3 py-1 md:py-0 px-2 md:pl-6">
                <PhoneCall className="w-4 h-4 text-[#E9231B] shrink-0" />
                <div>
                  <span className="text-[10px] text-gray-400 block uppercase tracking-wider font-semibold">Emergency Hotline</span>
                  <span className="font-bold text-white text-xs">24/7 Rapid Response</span>
                </div>
              </div>

              <div className="flex items-center space-x-3 py-1 md:py-0 px-2 md:pl-6">
                <ShieldCheck className="w-4 h-4 text-[#E9231B] shrink-0" />
                <div>
                  <span className="text-[10px] text-gray-400 block uppercase tracking-wider font-semibold">Class Accreditation</span>
                  <span className="font-bold text-white text-xs">DNV · ABS · BV · LR · NIMASA</span>
                </div>
              </div>

              <div className="flex items-center space-x-3 py-1 md:py-0 px-2 md:pl-6">
                <Anchor className="w-4 h-4 text-[#E9231B] shrink-0" />
                <div>
                  <span className="text-[10px] text-gray-400 block uppercase tracking-wider font-semibold">Operational Reach</span>
                  <span className="font-bold text-white text-xs">Nigeria & Gulf of Guinea</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: ABOUT STHOS LIMITED */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image Side */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[#F4F6F8]">
                <img 
                  src={COMPANY_INFO.heroImages.marineEngineer} 
                  alt="Marine electronics engineer inspecting equipment aboard vessel"
                  className="w-full h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071A35]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-[#E9231B] text-white flex items-center justify-center shrink-0">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#071A35] block">Accredited Field Engineers</span>
                      <span className="text-[11px] text-[#5B6B82]">Class-Approved Radio Surveyors & Radar Specialists</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Accent Background Box */}
              <div className="hidden sm:block absolute -top-4 -left-4 w-32 h-32 bg-[#123B67]/10 rounded-2xl -z-10" />
            </div>

            {/* Content Side */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 text-[#E9231B] font-bold text-xs uppercase tracking-wider">
                <Compass className="w-4 h-4" />
                <span>About STHOS Limited</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#071A35] tracking-tight leading-tight">
                Your Trusted Partner in Marine Electronics and Navigation Solutions
              </h2>

              <div className="space-y-4 text-base text-gray-600 leading-relaxed">
                <p>
                  <strong>STHOS Limited</strong> is a marine communication and navigation technology company based in Port Harcourt, Rivers State, Nigeria.
                </p>
                <p>
                  We specialize in the supply, installation, maintenance, inspection, testing and repair of marine communication systems, navigational equipment and electronic safety solutions.
                </p>
                <p>
                  Our work supports vessel owners, shipping companies, offshore operators, marine contractors, ports and government agencies who depend on reliable onboard technology.
                </p>
                <p className="text-[#071A35] font-semibold">
                  With a commitment to technical excellence, operational reliability and safety, we deliver solutions that keep vessels connected, equipped and ready for demanding marine operations.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center space-x-2 bg-[#071A35] hover:bg-[#123B67] text-white px-6 py-3 rounded-lg text-xs uppercase tracking-wider font-bold transition-all shadow-md"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: OUR SERVICES */}
      <section className="py-20 bg-[#F4F6F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center space-x-2 text-[#E9231B] font-bold text-xs uppercase tracking-wider mb-2">
                <Wrench className="w-4 h-4" />
                <span>Our Capabilities</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#071A35] tracking-tight">
                Complete Marine Electronics and Navigation Services
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-[#E9231B] hover:text-[#C21A13] transition-colors"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 6 Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {homeServices.map((service) => {
              const IconComponent = iconMap[service.icon] || Compass;
              return (
                <div 
                  key={service.id}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group border border-gray-100 hover:-translate-y-1"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071A35]/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 w-10 h-10 rounded-lg bg-[#E9231B] text-white flex items-center justify-center shadow-md">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="text-lg font-bold text-[#071A35] group-hover:text-[#E9231B] transition-colors mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {service.shortDesc}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-gray-100">
                      <Link 
                        to="/services" 
                        className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#071A35] group-hover:text-[#E9231B] transition-colors"
                      >
                        <span>Explore Discipline</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY CHOOSE STHOS LIMITED? */}
      <section className="py-20 bg-[#071A35] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E9231B]">
              Proven Reliability in West African Waters
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              Technical Expertise You Can Depend On
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Reliable communication and navigation systems are essential to vessel safety and operational efficiency. That is why we approach every project with professionalism, technical knowledge and attention to detail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {WHY_CHOOSE_US.map((item, idx) => {
              const IconComponent = iconMap[item.icon] || ShieldCheck;
              return (
                <div 
                  key={idx}
                  className="bg-white/5 border border-white/10 hover:border-[#E9231B]/50 p-6 rounded-xl hover:bg-white/10 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-[#123B67] flex items-center justify-center text-[#E9231B]">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-base font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5: MARINE EQUIPMENT SHOWCASE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center space-x-2 text-[#E9231B] font-bold text-xs uppercase tracking-wider mb-2">
                <Radio className="w-4 h-4" />
                <span>Type-Approved Hardware</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#071A35] tracking-tight">
                Quality Marine Equipment for Modern Vessels
              </h2>
              <p className="text-sm text-gray-600 mt-2 max-w-2xl">
                We support maritime operations with communication, navigation and safety equipment from leading global manufacturers, built for the demands of tropical marine environments.
              </p>
            </div>
            <Link
              to="/equipment"
              className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-[#E9231B] hover:text-[#C21A13] transition-colors"
            >
              <span>Explore All Equipment</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Equipment Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredEquipment.map((eq) => (
              <div 
                key={eq.id}
                className="bg-[#F4F6F8] rounded-xl overflow-hidden border border-gray-200/60 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="h-44 overflow-hidden relative">
                    <img 
                      src={eq.image} 
                      alt={eq.name} 
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-3 right-3 bg-[#071A35]/90 text-white text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded">
                      {eq.tag}
                    </span>
                  </div>
                  <div className="p-5">
                    <span className="text-[11px] uppercase font-bold text-[#E9231B] tracking-wider block mb-1">
                      {eq.category} · {eq.brand}
                    </span>
                    <h3 className="text-base font-bold text-[#071A35] mb-2">
                      {eq.name}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {eq.description}
                    </p>
                  </div>
                </div>
                <div className="p-5 pt-0">
                  <Link 
                    to="/contact" 
                    className="w-full inline-flex items-center justify-center space-x-2 bg-white hover:bg-[#071A35] hover:text-white text-[#071A35] border border-gray-300 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                  >
                    <span>Request Quotation</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Supported Brands Bar */}
          <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-6">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
              Authorized Partner & Supported Brands:
            </span>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {COMPANY_INFO.brands.map((brand, idx) => (
                <span 
                  key={idx} 
                  className="bg-[#F4F6F8] px-3.5 py-1.5 rounded-md text-xs font-bold text-[#071A35] border border-gray-200"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: INDUSTRIES WE SERVE */}
      <section className="py-20 bg-[#F4F6F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#E9231B]">
              Market Sectors
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#071A35] tracking-tight">
              Supporting Every Corner of the Maritime Industry
            </h2>
            <p className="text-sm text-gray-600">
              From a single repair to a full fleet upgrade, we support operators who cannot afford communication or navigation failures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRIES_SERVED.map((ind, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-gray-200 group flex flex-col"
              >
                <div className="h-44 overflow-hidden relative">
                  <img 
                    src={ind.image} 
                    alt={ind.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071A35]/80 via-transparent to-transparent" />
                  <h3 className="absolute bottom-3 left-4 text-base font-bold text-white">
                    {ind.title}
                  </h3>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {ind.desc}
                  </p>
                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-[#E9231B] font-semibold">
                    <span>Tailored Fleet Solutions</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: CALL TO ACTION BANNER */}
      <section className="py-20 bg-gradient-to-r from-[#071A35] via-[#123B67] to-[#071A35] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs uppercase font-bold tracking-wider text-[#E9231B] bg-[#E9231B]/20 px-3 py-1 rounded-full inline-block">
                Immediate Vessel Support Available
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
                Need Reliable Marine Communication or Navigation Solutions?
              </h2>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Whether you need new equipment, professional installation, routine maintenance, radio surveys or technical repairs, STHOS Limited is ready to support your marine operations.
              </p>
              <div className="pt-2 text-xs text-gray-300">
                <span>24/7 Emergency Technical Hotline: </span>
                <a href={`tel:${COMPANY_INFO.emergencyHotline}`} className="font-bold text-[#E9231B] text-sm ml-1 hover:underline">
                  {COMPANY_INFO.emergencyHotline}
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0 w-full md:w-auto">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center space-x-2 bg-[#E9231B] hover:bg-[#C21A13] text-white px-8 py-4 rounded-xl text-xs uppercase tracking-wider font-bold transition-all shadow-xl hover:-translate-y-0.5 text-center"
              >
                <span>Contact Us Today</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
