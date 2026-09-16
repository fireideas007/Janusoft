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
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('janusoft_theme');
    if (saved) return saved === 'dark';
    return true; // Default to dark mode for modern cyber IT feel
  });

  const [selectedService, setSelectedService] = useState<string>('');
  const [preFilledScope, setPreFilledScope] = useState<string>('');

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('janusoft_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('janusoft_theme', 'light');
    }
  }, [darkMode]);

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
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 relative selection:bg-brand-500 selection:text-white bg-grid-pattern">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      
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
