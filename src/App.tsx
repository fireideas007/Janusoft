import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ComparisonMatrix } from './components/ComparisonMatrix';
import { Services } from './components/Services';
import { ProjectEstimator } from './components/ProjectEstimator';
import { Process } from './components/Process';
import { TechStack } from './components/TechStack';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string>('');
  const [preFilledScope, setPreFilledScope] = useState<string>('');

  useEffect(() => {
    // Force light mode
    document.documentElement.classList.remove('dark');
    localStorage.removeItem('janusoft_theme');
  }, []);

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePreFillScope = (scopeSummary: string) => {
    setPreFilledScope(scopeSummary);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPlan = (planName: string) => {
    setPreFilledScope(`Selected Engagement Plan: ${planName}. Please provide milestone roadmap and availability.`);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-slate-50 text-slate-900 relative selection:bg-brand-500 selection:text-white bg-grid-pattern">
      <Navbar />
      
      <main>
        <Hero />
        <ComparisonMatrix />
        <Services onSelectService={handleSelectService} />
        <ProjectEstimator onPreFillScope={handlePreFillScope} />
        <Process />
        <TechStack />
        <Pricing onSelectPlan={handleSelectPlan} />
        <FAQ />
        <ContactForm 
          initialService={selectedService} 
          preFilledScope={preFilledScope} 
        />
      </main>

      <Footer />
    </div>
  );
};

export default App;
