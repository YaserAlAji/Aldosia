import React, { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    // Reveal animation intersection observer
    const revealCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };

    const revealObserver = new IntersectionObserver(revealCallback, {
      threshold: 0.1
    });

    document.querySelectorAll('.reveal').forEach(el => {
      revealObserver.observe(el);
    });

    return () => revealObserver.disconnect();
  }, []);

  return (
    <div className="bg-ink text-paper font-sans antialiased">
      <main>
        {/* SECTION 1: HERO */}
        <section className="pt-48 pb-24 px-6 hero">
          <div className="max-w-7xl mx-auto">
            <div className="font-mono text-[11px] text-mist tracking-[0.1em] uppercase flex items-center mb-5 gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky"></span>
              About Aldosia
            </div>
            <h1 className="font-display font-800 text-5xl md:text-8xl tracking-tighter mb-8 leading-[1.1]">
              We build the <span className="text-sky">system</span>. 
              <br />You run the business.
            </h1>
            <p className="font-sans font-300 text-lg md:text-xl text-white/65 max-w-[680px] mb-12 leading-relaxed">
              Aldosia is a UK-based digital growth agency helping local and small businesses get more leads, follow up automatically, and grow — without hiring extra staff.
            </p>
            <a href="https://link.aldosia.com/widget/booking/SSynS2Sc8s71Eyhovn4D" className="inline-flex items-center justify-center px-10 py-4 bg-white text-ink font-display font-700 rounded-full hover:bg-sky hover:-translate-y-0.5 transition-all active:scale-95 text-lg">
              Book a Free Call &rarr;
            </a>
          </div>
        </section>

        {/* SECTION 2: THE PROBLEM */}
        <section className="py-24 px-6 bg-ink2 border-y border-white/5 problem-section">
          <div className="max-w-7xl mx-auto">
            <div className="font-mono text-[11px] text-mist tracking-[0.1em] uppercase flex items-center mb-8 gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky"></span>
              The Problem
            </div>
            <h2 className="font-display font-800 text-3xl md:text-4xl tracking-tight mb-12 max-w-3xl leading-snug">
              Most businesses lose leads every day. Not from lack of effort — from lack of system.
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 problem-grid">
              <div className="glass-card card p-10 rounded-2xl border border-white/10 transition-all duration-500 hover:border-sky hover:-translate-y-1">
                <svg className="w-8 h-8 text-mist mb-6 transition-colors duration-300 group-hover:text-sky" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
                <h3 className="font-display font-700 text-xl text-white mb-3 card-title">Leads go cold</h3>
                <p className="font-sans font-300 text-white/60 leading-relaxed card-body">Enquiries come in at 11pm. No one replies until morning. The lead books elsewhere.</p>
              </div>
              <div className="glass-card card p-10 rounded-2xl border border-white/10 transition-all duration-500 hover:border-sky hover:-translate-y-1">
                <svg className="w-8 h-8 text-mist mb-6 transition-colors duration-300 group-hover:text-sky" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <h3 className="font-display font-700 text-xl text-white mb-3 card-title">Follow-up fails</h3>
                <p className="font-sans font-300 text-white/60 leading-relaxed card-body">Busy owners forget to chase. One missed call = lost revenue.</p>
              </div>
              <div className="glass-card card p-10 rounded-2xl border border-white/10 transition-all duration-500 hover:border-sky hover:-translate-y-1">
                <svg className="w-8 h-8 text-mist mb-6 transition-colors duration-300 group-hover:text-sky" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7zm10 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                </svg>
                <h3 className="font-display font-700 text-xl text-white mb-3 card-title">No visibility</h3>
                <p className="font-sans font-300 text-white/60 leading-relaxed card-body">No dashboard. No pipeline. No idea which leads are warm or dead.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: WHO WE ARE */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="font-mono text-[11px] text-mist tracking-[0.1em] uppercase flex items-center mb-8 gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky"></span>
              Who We Are
            </div>
            <h2 className="font-display font-800 text-3xl md:text-4xl tracking-tight mb-16 max-w-3xl leading-snug">
              A growth system agency. Not just a website shop.
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center who-grid">
              <p className="font-sans font-300 text-lg md:text-xl text-white/65 leading-relaxed who-paragraph">
                Aldosia was built on one idea: local businesses deserve the same automation tools that enterprise companies use. We combine your website, CRM, AI follow-up, and reputation management into one connected system — built on one system, run for you.
              </p>
              <div className="flex flex-col gap-8 stats-block">
                <div className="flex flex-col stat-item">
                  <span className="font-mono text-[11px] text-sky tracking-widest uppercase mb-1 stat-label">01 · UK-BASED AGENCY</span>
                  <span className="font-sans font-400 text-lg text-white stat-value">Serving SMBs across the UK</span>
                </div>
                <div className="flex flex-col stat-item">
                  <span className="font-mono text-[11px] text-sky tracking-widest uppercase mb-1 stat-label">02 · ENTERPRISE TOOLS</span>
                  <span className="font-sans font-400 text-lg text-white stat-value">SMB pricing for powerful systems</span>
                </div>
                <div className="flex flex-col stat-item">
                  <span className="font-mono text-[11px] text-sky tracking-widest uppercase mb-1 stat-label">03 · ONE SYSTEM</span>
                  <span className="font-sans font-400 text-lg text-white stat-value">Site + CRM + AI + Automations</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: HOW IT WORKS */}
        <section className="py-32 px-6 bg-ink border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="font-mono text-[11px] text-mist tracking-[0.1em] uppercase flex items-center mb-8 gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky"></span>
              How It Works
            </div>
            <h2 className="font-display font-800 text-3xl md:text-4xl tracking-tight mb-16 max-w-3xl leading-snug">
              Three steps. One system. Zero guesswork.
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative flow-grid">
              <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-[1px] border-t-2 border-dashed border-sky/20 z-0 flow-connector"></div>
              
              <div className="glass-card p-10 rounded-2xl border border-white/10 relative z-10 flow-card group hover:border-sky/40 transition-all duration-300">
                <span className="font-mono text-[11px] text-sky tracking-[0.2em] uppercase mb-5 block step-num">STEP 01</span>
                <h3 className="font-display font-700 text-xl text-white mb-3 card-title">We build your system</h3>
                <p className="font-sans font-300 text-white/60 leading-relaxed card-body">Website + CRM + automations set up for your business.</p>
              </div>
              <div className="glass-card p-10 rounded-2xl border border-white/10 relative z-10 flow-card group hover:border-sky/40 transition-all duration-300">
                <span className="font-mono text-[11px] text-sky tracking-[0.2em] uppercase mb-5 block step-num">STEP 02</span>
                <h3 className="font-display font-700 text-xl text-white mb-3 card-title">Leads come in</h3>
                <p className="font-sans font-300 text-white/60 leading-relaxed card-body">From your site, ads, or existing list — every one is captured.</p>
              </div>
              <div className="glass-card p-10 rounded-2xl border border-white/10 relative z-10 flow-card group hover:border-sky/40 transition-all duration-300">
                <span className="font-mono text-[11px] text-sky tracking-[0.2em] uppercase mb-5 block step-num">STEP 03</span>
                <h3 className="font-display font-700 text-xl text-white mb-3 card-title">System follows up</h3>
                <p className="font-sans font-300 text-white/60 leading-relaxed card-body">Auto SMS, email, booking — while you focus on delivery.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: WHAT WE STAND FOR */}
        <section className="py-32 px-6 bg-[#F5F5F5] text-ink values-section">
          <div className="max-w-7xl mx-auto">
            <div className="font-mono text-[11px] text-ink tracking-[0.1em] uppercase flex items-center mb-8 gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky"></span>
              Our Values
            </div>
            <h2 className="font-display font-800 text-3xl md:text-4xl tracking-tight mb-16 max-w-3xl leading-snug">
              We only win when you win.
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 problem-grid">
              <div className="bg-white p-10 rounded-2xl border border-[#EDEDED] transition-all duration-500 hover:border-sky hover:-translate-y-1 value-card">
                <h3 className="font-display font-700 text-xl text-ink mb-3 transition-colors duration-300 group-hover:text-sky">Clarity over complexity</h3>
                <p className="font-sans font-300 text-[#6E6E6E] leading-relaxed">We explain everything in plain English. No jargon.</p>
              </div>
              <div className="bg-white p-10 rounded-2xl border border-[#EDEDED] transition-all duration-500 hover:border-sky hover:-translate-y-1 value-card">
                <h3 className="font-display font-700 text-xl text-ink mb-3 transition-colors duration-300 group-hover:text-sky">Results, not promises</h3>
                <p className="font-sans font-300 text-[#6E6E6E] leading-relaxed">Every package is tied to outcomes you can measure.</p>
              </div>
              <div className="bg-white p-10 rounded-2xl border border-[#EDEDED] transition-all duration-500 hover:border-sky hover:-translate-y-1 value-card">
                <h3 className="font-display font-700 text-xl text-ink mb-3 transition-colors duration-300 group-hover:text-sky">Systems, not one-offs</h3>
                <p className="font-sans font-300 text-[#6E6E6E] leading-relaxed">We build things that work while you sleep.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: FOOTER CTA */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto text-center flex flex-col items-center footer-cta">
            <h2 className="font-display font-800 text-4xl md:text-6xl tracking-tighter mb-8 max-w-4xl leading-[1.05]">
              Ready to put your business on <span className="text-sky italic">autopilot?</span>
            </h2>
            <p className="font-sans font-300 text-lg md:text-xl text-white/65 max-w-[600px] mb-12 leading-relaxed footer-sub">
              Book a free 20-minute call. We'll show you exactly what your system would look like.
            </p>
            <a href="https://link.aldosia.com/widget/booking/SSynS2Sc8s71Eyhovn4D" className="inline-flex items-center justify-center px-12 py-5 bg-white text-ink font-display font-700 rounded-full hover:bg-sky hover:-translate-y-0.5 transition-all active:scale-95 text-lg footer-cta-btn" style={{ fontSize: '18px', padding: '16px 48px' }}>
              Book Your Free Call &rarr;
            </a>
            
            <div className="mt-20 pt-10 border-t border-white/10 w-full font-mono text-[11px] text-[#6E6E6E] tracking-[0.1em] uppercase footer-links">
              hello@aldosia.com · aldosia.com
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
