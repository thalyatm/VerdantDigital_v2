import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

// Tradie Components
import Hero from './components/Hero';
import Comparison from './components/Comparison';
import ContentGenerator from './components/ContentGenerator';
// import Packages from './components/Packages'; // Removed as per request to move deal to hero
import Workflow from './components/Workflow';
import Faq from './components/Faq';
import CtaSection from './components/CtaSection';

// Agency Components
import MainHero from './components/MainHero';
import MainExpertise from './components/MainExpertise';
import MainPhilosophy from './components/MainPhilosophy';
import MainPortfolio from './components/MainPortfolio';
import MainContact from './components/MainContact';

// Pages
import EnquiryPage from './components/EnquiryPage';

type ViewType = 'agency' | 'tradie' | 'enquire';

const App: React.FC = () => {
  const [view, setView] = useState<ViewType>('agency');

  // Handle Scroll Animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Slight delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      const elements = document.querySelectorAll('.reveal');
      elements.forEach((el) => observer.observe(el));
    }, 100);

    // Safety net: force reveal after delay to prevent blank pages
    const safetyTimeout = setTimeout(() => {
       document.querySelectorAll('.reveal').forEach(el => el.classList.add('active'));
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(safetyTimeout);
      observer.disconnect();
    };
  }, [view]); // Re-run when view changes

  // Reset scroll position when switching views
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const handleNavigate = (targetView: ViewType, hash?: string) => {
    setView(targetView);
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-brand-black text-white selection:bg-brand-accent selection:text-brand-black">
      <Header currentView={view} onNavigate={handleNavigate} />
      
      <main className="flex-grow">
        {view === 'agency' && (
          <>
            <MainHero />
            <MainExpertise />
            <MainPhilosophy />
            <MainPortfolio />
            <MainContact />
          </>
        )}

        {view === 'tradie' && (
          <>
            <Hero />
            {/* Packages section removed - Pricing now in Hero */}
            <Comparison />
            <Workflow />
            <CtaSection />
            <Faq />
            <ContentGenerator />
            <MainContact />
          </>
        )}

        {view === 'enquire' && (
          <EnquiryPage />
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default App;