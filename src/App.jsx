import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Equipment from './pages/Equipment';
import Contact from './pages/Contact';

// Service Pages
import ClassCertification from './pages/services/ClassCertification';
import InstallationIntegration from './pages/services/InstallationIntegration';
import MaintenanceRepair from './pages/services/MaintenanceRepair';
import TrainingPrograms from './pages/services/TrainingPrograms';
import EmergencySupport from './pages/services/EmergencySupport';

// Equipment Pages
import GmdssSafetyEquipment from './pages/equipment/GmdssSafetyEquipment';
import NavigationalEquipment from './pages/equipment/NavigationalEquipment';
import CommunicationSystems from './pages/equipment/CommunicationSystems';

export default function App() {
  const { pathname } = useLocation();

  // Scroll to top on every route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow">
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/contact" element={<Contact />} />

          {/* Dedicated Service Pages exactly as specified in PDF */}
          <Route path="/class-certification" element={<ClassCertification />} />
          <Route path="/class-certification/" element={<ClassCertification />} />

          <Route path="/installation-integration" element={<InstallationIntegration />} />
          <Route path="/installation-integration/" element={<InstallationIntegration />} />

          <Route path="/maintenance-repair" element={<MaintenanceRepair />} />
          <Route path="/maintenance-repair/" element={<MaintenanceRepair />} />

          <Route path="/training-programs" element={<TrainingPrograms />} />
          <Route path="/training-programs/" element={<TrainingPrograms />} />

          <Route path="/emergency-support" element={<EmergencySupport />} />
          <Route path="/emergency-support/" element={<EmergencySupport />} />

          {/* Dedicated Equipment Pages exactly as specified in PDF */}
          <Route path="/gmdss-safety-equipment" element={<GmdssSafetyEquipment />} />
          <Route path="/gmdss-safety-equipment/" element={<GmdssSafetyEquipment />} />

          <Route path="/navigational-equipment" element={<NavigationalEquipment />} />
          <Route path="/navigational-equipment/" element={<NavigationalEquipment />} />

          <Route path="/communication-systems" element={<CommunicationSystems />} />
          <Route path="/communication-systems/" element={<CommunicationSystems />} />

          {/* Catch-all */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
