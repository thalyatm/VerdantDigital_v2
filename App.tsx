import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import StartProjectModal from './components/StartProjectModal';

// Tradie Components
import Hero from './components/Hero';
import Comparison from './components/Comparison';
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
import SuccessPage from './components/SuccessPage';

type ViewType = 'agency' | 'tradie' | 'enquire' | 'success';

const App: React.FC = () => {
  const [view, setView] = useState<ViewType>(() => {
    // Check if URL has success param
    const params = new URLSearchParams(window.location.search);
    if (params.get('session_id')) {
      return 'success';
    }
    return 'agency';
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      <Header currentView={view} onNavigate={handleNavigate} onOpenModal={() => setIsModalOpen(true)} />

      <main className="flex-grow">
        {view === 'agency' && (
          <>
            <MainHero />
            <MainPhilosophy />
            <MainExpertise />
            <MainPortfolio />
            <MainContact />
          </>
        )}

        {view === 'tradie' && (
          <div className="relative">
            {/* Background Grid & Noise */}
            <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
            <div className="fixed inset-0 bg-grid-pattern bg-[size:50px_50px] opacity-[0.1] pointer-events-none"></div>

            {/* Neon Glows */}
            <div className="fixed top-[-10%] right-[-5%] w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="fixed bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="relative z-10">
              <Hero onOpenModal={() => setIsModalOpen(true)} />
              {/* Packages section removed - Pricing now in Hero */}
              <Comparison />
              <Workflow onOpenModal={() => setIsModalOpen(true)} />
              <CtaSection onOpenModal={() => setIsModalOpen(true)} />
              <Faq />
              <MainContact />
            </div>
          </div>
        )}

        {view === 'enquire' && (
          <EnquiryPage />
        )}

        {view === 'success' && (
          <SuccessPage />
        )}
      </main>

      <Footer />
      <StartProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default App;