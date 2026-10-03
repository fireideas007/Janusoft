import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IndustrySolutions } from '../components/IndustrySolutions';
import { TrustedInIndia } from '../components/TrustedInIndia';
import { RapidPrototypeOffer } from '../components/RapidPrototypeOffer';

interface SolutionsPageProps {
  onSelectSolution: (solution: string) => void;
  onSelectOffer: (offer: string) => void;
}

export const SolutionsPage: React.FC<SolutionsPageProps> = ({ onSelectSolution, onSelectOffer }) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSolutionSelect = (title: string) => {
    onSelectSolution(title);
    navigate('/contact');
  };

  const handleOfferSelect = (offer: string) => {
    onSelectOffer(offer);
    navigate('/contact');
  };

  return (
    <div className="pt-24 pb-16">
      {/* Main Industry Solutions Showcase (Single clear header) */}
      <IndustrySolutions onSelectSolution={handleSolutionSelect} />

      {/* Trust in India Section */}
      <div className="my-12">
        <TrustedInIndia />
      </div>

      {/* Low risk prototype offer */}
      <RapidPrototypeOffer onSelectOffer={handleOfferSelect} />
    </div>
  );
};
