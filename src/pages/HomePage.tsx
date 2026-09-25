import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { TrustedInIndia } from '../components/TrustedInIndia';
import { RapidPrototypeOffer } from '../components/RapidPrototypeOffer';
import { ComparisonMatrix } from '../components/ComparisonMatrix';
import { Services } from '../components/Services';
import { IndustrySolutions } from '../components/IndustrySolutions';
import { EngagementModels } from '../components/EngagementModels';
import { ProjectEstimator } from '../components/ProjectEstimator';
import { Process } from '../components/Process';
import { TechStack } from '../components/TechStack';
import { Pricing } from '../components/Pricing';
import { FAQ } from '../components/FAQ';
import { ContactForm } from '../components/ContactForm';

interface HomePageProps {
  onSelectService: (service: string) => void;
  onPreFillScope: (scope: string) => void;
  onSelectPlan: (plan: string) => void;
  selectedService: string;
  preFilledScope: string;
}

export const HomePage: React.FC<HomePageProps> = ({
  onSelectService,
  onPreFillScope,
  onSelectPlan,
  selectedService,
  preFilledScope,
}) => {
  const navigate = useNavigate();

  const handleServiceSelect = (title: string) => {
    onSelectService(title);
    navigate('/contact');
  };

  const handleScopeSelect = (scope: string) => {
    onPreFillScope(scope);
    navigate('/contact');
  };

  const handlePlanSelect = (plan: string) => {
    onSelectPlan(plan);
    navigate('/contact');
  };

  return (
    <>
      <Hero />
      <TrustedInIndia />
      <RapidPrototypeOffer onSelectOffer={handleScopeSelect} />
      <ComparisonMatrix />
      <Services onSelectService={handleServiceSelect} />
      <IndustrySolutions onSelectSolution={handleServiceSelect} />
      <EngagementModels onSelectModel={handlePlanSelect} />
      <ProjectEstimator onPreFillScope={handleScopeSelect} />
      <Process />
      <TechStack />
      <Pricing onSelectPlan={handlePlanSelect} />
      <FAQ />
      <ContactForm 
        initialService={selectedService} 
        preFilledScope={preFilledScope} 
      />
    </>
  );
};
