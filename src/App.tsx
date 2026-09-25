import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { EngagementPage } from './pages/EngagementPage';
import { EstimatorPage } from './pages/EstimatorPage';
import { PricingPage } from './pages/PricingPage';
import { ContactPage } from './pages/ContactPage';

// Scroll restoration component on route navigation
const ScrollToTopOnRoute: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
};

export const AppContent: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string>('');
  const [preFilledScope, setPreFilledScope] = useState<string>('');

  useEffect(() => {
    // Force light mode
    document.documentElement.classList.remove('dark');
    localStorage.removeItem('janusoft_theme');
  }, []);

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
  };

  const handlePreFillScope = (scopeSummary: string) => {
    setPreFilledScope(scopeSummary);
  };

  const handleSelectPlan = (planName: string) => {
    setPreFilledScope(`Selected Engagement Plan: ${planName}. Please provide milestone roadmap and availability.`);
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-slate-50 text-slate-900 relative selection:bg-brand-500 selection:text-white bg-grid-pattern flex flex-col justify-between">
      <ScrollToTopOnRoute />
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onSelectService={handleSelectService}
                onPreFillScope={handlePreFillScope}
                onSelectPlan={handleSelectPlan}
                selectedService={selectedService}
                preFilledScope={preFilledScope}
              />
            }
          />
          <Route
            path="/services"
            element={<ServicesPage onSelectService={handleSelectService} />}
          />
          <Route
            path="/solutions"
            element={
              <SolutionsPage
                onSelectSolution={handleSelectService}
                onSelectOffer={handlePreFillScope}
              />
            }
          />
          <Route
            path="/engagement"
            element={
              <EngagementPage
                onSelectModel={handleSelectPlan}
                onSelectOffer={handlePreFillScope}
              />
            }
          />
          <Route
            path="/estimator"
            element={<EstimatorPage onPreFillScope={handlePreFillScope} />}
          />
          <Route
            path="/pricing"
            element={<PricingPage onSelectPlan={handleSelectPlan} />}
          />
          <Route
            path="/contact"
            element={
              <ContactPage
                initialService={selectedService}
                preFilledScope={preFilledScope}
              />
            }
          />
          {/* Fallback to Home */}
          <Route
            path="*"
            element={
              <HomePage
                onSelectService={handleSelectService}
                onPreFillScope={handlePreFillScope}
                onSelectPlan={handleSelectPlan}
                selectedService={selectedService}
                preFilledScope={preFilledScope}
              />
            }
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
