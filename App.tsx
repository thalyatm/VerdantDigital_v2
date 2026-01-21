import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Clarity from '@microsoft/clarity';
import Header from './components/Header';
import Footer from './components/Footer';
import StartProjectModal from './components/StartProjectModal';
import ContactFormModal from './components/ContactFormModal';

// Initialize Microsoft Clarity
const CLARITY_PROJECT_ID = 'uio6a88ptj';
Clarity.init(CLARITY_PROJECT_ID);

// Tradie Components
import TradieExpressBuildPage from './components/TradieExpressBuildPage';

// Agency Components
import MainHero from './components/MainHero';
import MainServices from './components/MainServices';
import MainExpertise from './components/MainExpertise';
import MainPhilosophy from './components/MainPhilosophy';
import MainPortfolio from './components/MainPortfolio';
import MainContact from './components/MainContact';

// Pages
import EnquiryPage from './components/EnquiryPage';
import SuccessPage from './components/SuccessPage';
import About from './components/About';
import FaqPage from './components/FaqPage';
import TermsAndConditions from './components/TermsAndConditions';
import TermsAndPrivacy from './components/TermsAndPrivacy';
import WhatsIncluded from './components/WhatsIncluded';
import Sitemap from './components/Sitemap';
import ServicesPage from './components/ServicesPage';
import MobileAppDevelopmentPage from './components/MobileAppDevelopmentPage';
import AISolutionsPage from './components/AISolutionsPage';
import ProgressiveWebAppsPage from './components/ProgressiveWebAppsPage';
import WebsitesPage from './components/WebsitesPage';
import FreeResourcesPage from './components/FreeResourcesPage';
import AdvertisingGuidePage from './components/AdvertisingGuidePage';
import ConversionPsychologyGuidePage from './components/ConversionPsychologyGuidePage';
import ExpressBuildStyleGuidePage from './components/ExpressBuildStyleGuidePage';
import IntakeFormPage from './components/IntakeFormPage';
import InternalBuildGuidePage from './components/InternalBuildGuidePage';
import LayoutPatternLibraryPage from './components/LayoutPatternLibraryPage';
import TradieExampleSitePage from './components/TradieExampleSitePage';

// Page layout components
const AgencyPage: React.FC = () => (
  <>
    <MainHero />
    <MainServices />
    <MainPhilosophy />
    <MainExpertise />
    <MainPortfolio />
    <MainContact />
  </>
);


// Main layout wrapper with scroll animations
const AppContent: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [contactModalPrefill, setContactModalPrefill] = useState('');
  const scrollProgressRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Handle Scroll Progress - Use refs to avoid React re-renders
  useEffect(() => {
    let ticking = false;

    const updateProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollableHeight = documentHeight - windowHeight;
      const progress = Math.min((scrollTop / scrollableHeight) * 100, 100);

      if (scrollProgressRef.current) {
        scrollProgressRef.current.style.width = `${progress}%`;
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before element enters viewport
      }
    );

    // Slight delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      const elements = document.querySelectorAll('.reveal');
      elements.forEach((el) => observer.observe(el));
    }, 100);

    // Safety net: force reveal after longer delay to prevent blank pages (only for above-fold content)
    const safetyTimeout = setTimeout(() => {
       const viewportHeight = window.innerHeight;
       document.querySelectorAll('.reveal').forEach(el => {
         const rect = el.getBoundingClientRect();
         // Only force reveal for elements in initial viewport
         if (rect.top < viewportHeight) {
           el.classList.add('active');
         }
       });
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(safetyTimeout);
      observer.disconnect();
    };
  }, [location.pathname]); // Re-run when route changes

  // Reset scroll position when switching routes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-brand-black text-white selection:bg-brand-accent selection:text-brand-black">
      {/* Scroll Progress Bar - Uses ref for direct DOM updates to avoid re-renders */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-brand-surface/20 z-[100]">
        <div
          ref={scrollProgressRef}
          className="h-full bg-gradient-to-r from-brand-accent to-brand-accent/60 shadow-[0_0_10px_rgba(0,255,157,0.5)]"
          style={{ width: '0%', transition: 'none' }}
        />
      </div>

      <Header
        onOpenModal={() => setIsModalOpen(true)}
        onOpenAuditModal={() => {
          setContactModalPrefill('Free Website Audit');
          setIsContactModalOpen(true);
        }}
      />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<AgencyPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/mobile-app-development" element={<MobileAppDevelopmentPage />} />
          <Route path="/services/ai-solutions" element={<AISolutionsPage />} />
          <Route path="/services/progressive-web-apps" element={<ProgressiveWebAppsPage />} />
          <Route path="/services/websites" element={<WebsitesPage />} />
          <Route path="/resources" element={<FreeResourcesPage />} />
          <Route path="/resources/advertising-guide" element={<AdvertisingGuidePage />} />
          <Route path="/resources/conversion-psychology" element={<ConversionPsychologyGuidePage />} />
          <Route path="/tradie" element={<TradieExpressBuildPage />} />
          <Route path="/tradie/whats-included" element={<WhatsIncluded />} />
          <Route path="/tradie/terms" element={<TermsAndConditions />} />
          <Route path="/tradie/style-guide" element={<ExpressBuildStyleGuidePage />} />
          <Route path="/tradie/intake" element={<IntakeFormPage />} />
          <Route path="/tradie/build-guide" element={<InternalBuildGuidePage />} />
          <Route path="/tradie/layout-patterns" element={<LayoutPatternLibraryPage />} />
          <Route path="/tradie/example-site" element={<TradieExampleSitePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/enquire" element={<EnquiryPage />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/terms-and-privacy" element={<TermsAndPrivacy />} />
          <Route path="/sitemap" element={<Sitemap />} />
        </Routes>
      </main>

      <Footer />
      <StartProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <ContactFormModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        prefilledHelpWith={contactModalPrefill}
      />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;