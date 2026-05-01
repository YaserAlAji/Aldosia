import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import AldosiaLogo from './AldosiaLogo';

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/' || location.pathname === '/home';

  const NavLink = ({ to, children, className = "" }: { to: string, children: React.ReactNode, className?: string }) => {
    const isActive = location.pathname === to;
    return (
      <Link 
        to={to} 
        className={`${isActive ? 'text-white' : 'text-white/60'} hover:text-sky transition-colors ${className}`}
      >
        {children}
      </Link>
    );
  };

  const HashLink = ({ to, children }: { to: string, children: React.ReactNode }) => {
    return (
      <Link 
        to={{ pathname: '/', hash: to }} 
        className="text-white/60 hover:text-sky transition-colors"
      >
        {children}
      </Link>
    );
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-[#0A0A0A] border-b border-[#2A2A2A]">
      <nav className="flex justify-between items-center h-[72px] px-6 md:px-16 max-w-7xl mx-auto">
        <div className="flex items-center">
          <Link to="/">
            <AldosiaLogo />
          </Link>
        </div>
        <div className="hidden md:flex gap-8 items-center font-display font-700 text-sm tracking-tight">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <HashLink to="#services">Services</HashLink>
          <HashLink to="#process">Process</HashLink>
          <HashLink to="#niches">Niches</HashLink>
          <HashLink to="#pricing">Pricing</HashLink>
          <HashLink to="#success">Success</HashLink>
        </div>
        <a 
          href="https://link.aldosia.com/widget/booking/SSynS2Sc8s71Eyhovn4D" 
          className="bg-sky text-ink px-6 py-2.5 rounded-full font-display font-600 text-sm hover:brightness-110 transition-all active:scale-95"
        >
          Get Started
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
