import React from 'react';
import AldosiaLogo from './AldosiaLogo';

const Navbar = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#0A0A0A] border-b border-[#2A2A2A]">
      <nav className="flex justify-between items-center h-[72px] px-6 md:px-16 max-w-7xl mx-auto">
        <div className="flex items-center">
          <AldosiaLogo />
        </div>
        <div className="hidden md:flex gap-8 items-center font-display font-700 text-sm tracking-tight">
          <a className="text-white hover:text-sky transition-colors" href="/">Home</a>
          <a className="text-white/60 hover:text-sky transition-colors" href="/about.html">About</a>
          <a className="text-white/60 hover:text-sky transition-colors" href="/#services">Services</a>
          <a className="text-white/60 hover:text-sky transition-colors" href="/#process">Process</a>
          <a className="text-white/60 hover:text-sky transition-colors" href="/#niches">Niches</a>
          <a className="text-white/60 hover:text-sky transition-colors" href="/#pricing">Pricing</a>
          <a className="text-white/60 hover:text-sky transition-colors" href="/#success">Success</a>
        </div>
        <a 
          href="https://link.aldosia.com/widget/booking/SSHkKLoglu4Uoqm9vjll" 
          className="bg-sky text-ink px-6 py-2.5 rounded-full font-display font-600 text-sm hover:brightness-110 transition-all active:scale-95"
        >
          Get Started
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
