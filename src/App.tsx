import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { AboutBehnam } from './components/AboutBehnam';
import { Approach } from './components/Approach';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Couples Therapy');

  const handleOpenConsultation = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setIsConsultationOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsConsultationOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#2C2926] flex flex-col font-sans-clean selection:bg-[#E2DDD5]">
      {/* Top Navigation */}
      <Navbar onOpenConsultation={() => handleOpenConsultation()} />

      {/* Main Content Layout */}
      <main className="flex-1">
        <Hero onOpenConsultation={() => handleOpenConsultation()} />
        <Services onSelectService={(srv) => handleOpenConsultation(srv)} />
        <AboutBehnam onOpenConsultation={() => handleOpenConsultation()} />
        <Approach />
        <Testimonials />
        <ContactSection
          onOpenConsultation={() => handleOpenConsultation()}
          prefilledService={selectedService}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive 15-Minute Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={handleCloseConsultation}
        defaultService={selectedService}
      />
    </div>
  );
}
