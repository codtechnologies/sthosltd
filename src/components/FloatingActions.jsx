import React, { useState, useEffect } from 'react';
import { ArrowUp, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/marineData';

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Sticky Quick-Call Emergency Button on Mobile & Tablet */}
      <div className="fixed bottom-4 left-4 z-40 sm:hidden">
        <a 
          href={`tel:${COMPANY_INFO.emergencyHotline}`}
          className="flex items-center space-x-2 bg-[#E9231B] text-white px-4 py-3 rounded-full shadow-2xl font-bold text-xs uppercase tracking-wider animate-bounce"
        >
          <Phone className="w-4 h-4" />
          <span>24/7 Hotline</span>
        </a>
      </div>

      {/* Back to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 w-11 h-11 bg-[#071A35] hover:bg-[#E9231B] text-white rounded-full shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-105 focus:outline-none"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
}

