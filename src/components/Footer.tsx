import React from 'react';
import AldosiaLogo from './AldosiaLogo';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-ink border-t border-white/5 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          <div className="max-w-xs">
            <div className="mb-4">
              <Link to="/">
                <AldosiaLogo />
              </Link>
            </div>
            <p className="font-mono text-[10px] text-white/40 tracking-tight uppercase leading-relaxed">
              Your business, on autopilot. <br/>COMPLETE GROWTH INFRASTRUCTURE.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24 font-mono text-[10px] uppercase tracking-widest">
            <div className="flex flex-col gap-4">
              <h5 className="text-white">Platform</h5>
              <Link className="text-white/40 hover:text-sky transition-colors" to="/#services">Services</Link>
              <Link className="text-white/40 hover:text-sky transition-colors" to="/#process">Process</Link>
              <Link className="text-white/40 hover:text-sky transition-colors" to="/#niches">Niches</Link>
              <Link className="text-white/40 hover:text-sky transition-colors" to="/#pricing">Pricing</Link>
              <Link className="text-white/40 hover:text-sky transition-colors" to="/#success">Success</Link>
            </div>
            <div className="flex flex-col gap-4">
              <h5 className="text-white">Company</h5>
              <Link className="text-white/40 hover:text-sky transition-colors" to="/about">About</Link>
              <a className="text-white/40 hover:text-sky transition-colors" href="#">Careers</a>
              <a className="text-white/40 hover:text-sky transition-colors" href="#">Success</a>
            </div>
            <div className="flex flex-col gap-4">
              <h5 className="text-white">Legal</h5>
              <a className="text-white/40 hover:text-sky transition-colors" href="#">Privacy</a>
              <a className="text-white/40 hover:text-sky transition-colors" href="#">Terms</a>
              <a className="text-white/40 hover:text-sky transition-colors" href="#">Security</a>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-6">
          <p className="font-mono text-[10px] text-white/20">© 2025 ALDOSIA LTD. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <a className="text-white/20 hover:text-sky transition-colors" href="#">
              <span className="material-symbols-outlined text-lg">public</span>
            </a>
            <a className="text-white/20 hover:text-sky transition-colors" href="#">
              <span className="material-symbols-outlined text-lg">alternate_email</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
