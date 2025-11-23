import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black text-brand-muted py-8 border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 scale-90 origin-left hover:scale-95 transition-transform duration-300">
            <div className="flex items-stretch border-4 border-white bg-black">
              <div className="bg-[#00FF9D] flex items-center px-4 py-2">
                <span className="font-display font-black text-lg tracking-tighter text-black leading-none">
                  VERDANT
                </span>
              </div>
              <div className="bg-white flex items-center px-4 py-2">
                <span className="font-display font-black text-lg tracking-tighter text-black leading-none">
                  DIGITAL
                </span>
              </div>
            </div>
          </div>
          
          {/* Copyright - Shortened */}
          <div className="flex flex-col md:flex-row gap-4 text-[10px] font-mono uppercase tracking-wider text-gray-500 text-center md:text-right items-center">
             <p>&copy; {new Date().getFullYear()} Verdant Digital Agency.</p>
             <p className="hidden md:block text-brand-border">|</p>
             <p>Brisbane, Australia</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;