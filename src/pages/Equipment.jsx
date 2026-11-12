import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Radio, 
  Search, 
  Filter, 
  Compass, 
  CheckCircle, 
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Phone
} from 'lucide-react';
import { COMPANY_INFO, EQUIPMENT_DATA } from '../data/marineData';

const CATEGORIES = [
  "All Categories",
  "Marine Radar",
  "VHF & MF/HF Radio",
  "GPS & ECDIS",
  "GMDSS Equipment",
  "EPIRB & SART Safety",
  "Satellite Communication",
  "AIS Systems",
  "Navigation Systems"
];

export default function Equipment() {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredEquipment = EQUIPMENT_DATA.filter((item) => {
    const matchesCategory = 
      selectedCategory === "All Categories" || item.category === selectedCategory;
    const matchesSearch = 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full flex flex-col">
      {/* Header Banner */}
      <section className="bg-[#071A35] text-white py-16 relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${COMPANY_INFO.heroImages.radarScreen})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071A35] via-[#071A35]/90 to-transparent z-10" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 text-[#E9231B] font-bold text-xs uppercase tracking-wider">
              <Radio className="w-4 h-4" />
              <span>Certified Maritime Hardware</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Marine Equipment Catalogue
            </h1>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Cutting-edge marine communication &amp; navigational equipment from world-leading OEM manufacturers. Built for tropical maritime environments and class approval.
            </p>
          </div>
        </div>
      </section>

      {/* Equipment Catalogue Section */}
      <section className="py-16 bg-[#F4F6F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter and Search Bar */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 mb-10 space-y-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Search Bar */}
              <div className="relative w-full md:w-96">
                <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search radar, VHF, ECDIS, brand..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#071A35] text-sm text-gray-800"
                />
              </div>

              {/* Status info */}
              <div className="text-xs text-gray-500 font-medium">
                Showing <strong className="text-[#071A35]">{filteredEquipment.length}</strong> type-approved systems
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-2 scrollbar-none">
              {CATEGORIES.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                    selectedCategory === cat
                      ? 'bg-[#071A35] text-white shadow-md'
                      : 'bg-[#F4F6F8] text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Product Cards Grid */}
          {filteredEquipment.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEquipment.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-200/80 flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative h-52 overflow-hidden bg-gray-100">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 bg-[#071A35]/90 text-white text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded">
                        {item.brand}
                      </div>
                      <div className="absolute top-3 right-3 bg-[#E9231B] text-white text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded">
                        {item.tag}
                      </div>
                    </div>

                    <div className="p-6 space-y-2">
                      <span className="text-[11px] uppercase font-bold text-[#E9231B] tracking-wider block">
                        {item.category}
                      </span>
                      <h3 className="text-lg font-bold text-[#071A35] group-hover:text-[#E9231B] transition-colors leading-snug">
                        {item.name}
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed pt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-gray-100 mt-4">
                    <div className="pt-4 flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-gray-400">
                        Class Certified
                      </span>
                      <Link
                        to="/contact"
                        state={{ equipment: item.name }}
                        className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-wider font-bold text-[#E9231B] hover:text-[#C21A13]"
                      >
                        <span>Enquire Now</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white p-12 text-center rounded-2xl shadow-sm border border-gray-200 max-w-lg mx-auto space-y-4">
              <Radio className="w-12 h-12 text-gray-300 mx-auto" />
              <h3 className="text-lg font-bold text-[#071A35]">No Equipment Found</h3>
              <p className="text-xs text-gray-500">
                We carry complete ranges of customized marine electronics. Please contact our engineering desk with your specific manufacturer part or vessel requirement.
              </p>
              <button
                onClick={() => { setSelectedCategory("All Categories"); setSearchQuery(""); }}
                className="bg-[#071A35] text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-lg"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Equipment Advantages Banner */}
      <section className="py-16 bg-[#071A35] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <span className="text-[#E9231B] font-bold text-xs uppercase tracking-wider block">Advantage 01</span>
              <h4 className="text-lg font-bold text-white">100% Class Compliant</h4>
              <p className="text-xs text-gray-300">Fully type-approved under IMO, SOLAS, DNV, ABS, BV, and Lloyd's Register conventions.</p>
            </div>
            <div className="space-y-2">
              <span className="text-[#E9231B] font-bold text-xs uppercase tracking-wider block">Advantage 02</span>
              <h4 className="text-lg font-bold text-white">Tropicalized Engineering</h4>
              <p className="text-xs text-gray-300">Robust equipment enclosures built to withstand high humidity and tropical salt-spray conditions.</p>
            </div>
            <div className="space-y-2">
              <span className="text-[#E9231B] font-bold text-xs uppercase tracking-wider block">Advantage 03</span>
              <h4 className="text-lg font-bold text-white">Port Harcourt Spares</h4>
              <p className="text-xs text-gray-300">Local strategic inventory of OEM parts, magnetrons, transceivers, and emergency battery packs.</p>
            </div>
            <div className="space-y-2">
              <span className="text-[#E9231B] font-bold text-xs uppercase tracking-wider block">Advantage 04</span>
              <h4 className="text-lg font-bold text-white">Full Commissioning</h4>
              <p className="text-xs text-gray-300">Includes onboard mechanical fitout, RF antenna tuning, sea trials, and crew handover training.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
