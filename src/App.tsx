/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import AldosiaLogo from './components/AldosiaLogo';

export default function App() {
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
    <div className="bg-ink text-paper font-sans antialiased min-h-screen">
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/+447348952207" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-[110px] right-[24px] z-[9999] bg-[#25D366] w-14 h-14 rounded-full shadow-2xl hover:scale-110 transition-all whatsapp-pulse flex items-center justify-center text-white" 
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 448 512" className="w-7 h-7" fill="currentColor">
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.8c32.7 17.7 68.9 27.1 106.1 27.1h.1c122.3 0 222-99.6 222-222 0-59.3-23.1-115.1-65.1-157.1zM223.9 446.7c-33.1 0-65.6-8.9-93.9-25.7l-6.7-4-69.8 18.3 18.6-68-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-82.7 184.6-184.5 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.2-3.2-5.5-.3-8.5 2.5-11.2 2.5-2.5 5.5-6.5 8.3-9.7 2.8-3.3 3.8-5.6 5.6-9.3 1.9-3.7.9-7-1.1-10.8s-12.5-30.1-17.1-41c-4.5-10.6-9.1-9.2-12.5-9.2h-10.8c-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.5 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.7z"/>
        </svg>
      </a>

      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="pt-48 pb-24 px-6">
          <div className="max-w-7xl mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center px-4 py-1.5 glass-card rounded-full mb-8">
              <span className="font-mono text-[10px] text-sky tracking-widest uppercase">Complete Business Growth System</span>
            </div>
            <h1 className="font-display font-800 text-5xl md:text-7xl lg:text-8xl tracking-tighter mb-8 max-w-5xl leading-[1.05]">
              Your business, <br/><span className="text-sky italic">on autopilot.</span>
            </h1>
            <p className="font-sans font-300 text-lg md:text-xl text-white/65 max-w-[520px] mb-12 leading-relaxed">
              Expert strategy meet transformative automation. We build the digital infrastructure that scales your vision while you focus on what matters most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <a href="https://link.aldosia.com/widget/booking/SSynS2Sc8s71Eyhovn4D" className="px-8 py-4 bg-sky text-ink font-display font-700 rounded-full hover:brightness-110 transition-all active:scale-95 text-center">
                Book a Strategy Call
              </a>
              <a href="#niches" className="px-8 py-4 glass-card text-white font-display font-700 rounded-full hover:bg-white/10 transition-all active:scale-95 text-center">
                Who We Work With
              </a>
            </div>
            <div className="font-mono text-[11px] text-sky/60 tracking-[0.2em] flex items-center gap-3">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-sky animate-pulse"></span>
              LIVE · 1,248 CALLS BOOKED THIS MONTH
            </div>
          </div>
        </section>

        {/* Free Trial Section */}
        <section className="py-24 px-6 bg-ink border-y border-white/5">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-16 md:gap-24">
            <div className="relative group">
              <div className="absolute -inset-1 bg-sky/20 rounded-2xl blur-xl group-hover:bg-sky/30 transition-all"></div>
              <img 
                alt="Aldosia System Dashboard" 
                src="https://raw.githubusercontent.com/YaserAlAji/Aldosia/main/public/Second%20Hero%20Image.png"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1551288049-bbbda536ad89?q=80&w=2070&auto=format&fit=crop";
                }}
                style={{ width: '100%', height: 'auto', borderRadius: '14px', display: 'block' }}
                className="relative border border-white/10 shadow-2xl shadow-sky/10 group-hover:scale-[1.01] transition-transform duration-500"
              />
            </div>
            <div className="space-y-8">
              <span className="font-mono text-xs text-sky uppercase tracking-widest">Zero Risk. Zero Fluff.</span>
              <h2 className="font-display font-800 text-4xl md:text-5xl tracking-tight">Get Results First. Pay After.</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-sky text-2xl">sync_alt</span>
                  <div>
                    <h4 className="font-display font-700 text-lg">One-Click Integration</h4>
                    <p className="font-sans font-300 text-white/60">Plug in your CRM, GMB, and socials in one click — no tech headaches.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-sky text-2xl">bolt</span>
                  <div>
                    <h4 className="font-display font-700 text-lg">Real-Time Optimization</h4>
                    <p className="font-sans font-300 text-white/60">Our system spots dead leads and re-engages them automatically — while you sleep.</p>
                  </div>
                </div>
              </div>
              <a href="https://link.aldosia.com/widget/booking/SSynS2Sc8s71Eyhovn4D" className="inline-block px-8 py-4 bg-sky text-ink font-display font-700 rounded-full hover:brightness-110 transition-all active:scale-95 text-center">
                Book Your Strategy Call
              </a>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-32 px-6" id="services">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="font-display font-800 text-4xl md:text-5xl tracking-tight mb-4">We've Got You Covered</h2>
              <div className="w-20 h-1 bg-sky mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="glass-card p-10 rounded-2xl hover:border-sky/60 hover:scale-[1.02] hover:shadow-2xl hover:shadow-sky/5 transition-all duration-300 group">
                <span className="material-symbols-outlined text-sky text-4xl mb-6 block">language</span>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-display font-700 text-xl">Smart Websites</h3>
                  <div className="tooltip-container">
                    <span className="tooltip-trigger material-symbols-outlined text-sky/40 hover:text-sky transition-colors cursor-help text-lg outline-none focus:text-sky" tabIndex={0} role="button" aria-label="More information about Smart Websites">info</span>
                    <div className="tooltip-content" role="tooltip">
                      <ul className="list-disc pl-3 space-y-1">
                        <li>High-speed landing pages</li>
                        <li>Mobile-first architecture</li>
                        <li>Lead capture forms</li>
                        <li>Strategic CTAs</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <p className="font-sans font-300 text-white/60 leading-relaxed">Professional, SEO-optimized websites built to convert visitors into leads, not just look good.</p>
              </div>

              <div className="glass-card p-10 rounded-2xl hover:border-sky/60 hover:scale-[1.02] hover:shadow-2xl hover:shadow-sky/5 transition-all duration-300 group">
                <span className="material-symbols-outlined text-sky text-4xl mb-6 block">hub</span>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-display font-700 text-xl">CRM &amp; Pipelines</h3>
                  <div className="tooltip-container">
                    <span className="tooltip-trigger material-symbols-outlined text-sky/40 hover:text-sky transition-colors cursor-help text-lg outline-none focus:text-sky" tabIndex={0} role="button" aria-label="More information about CRM & Pipelines">info</span>
                    <div className="tooltip-content" role="tooltip">
                      <ul className="list-disc pl-3 space-y-1">
                        <li>Custom stages</li>
                        <li>Lead source tracking</li>
                        <li>Automated follow-ups</li>
                        <li>Revenue forecasting</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <p className="font-sans font-300 text-white/60 leading-relaxed">Complete lead tracking, pipeline stages, and automated follow-up so no lead ever falls through.</p>
              </div>

              <div className="glass-card p-10 rounded-2xl hover:border-sky/60 hover:scale-[1.02] hover:shadow-2xl hover:shadow-sky/5 transition-all duration-300 group">
                <span className="material-symbols-outlined text-sky text-4xl mb-6 block">psychology</span>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-display font-700 text-xl">AI Automation</h3>
                  <div className="tooltip-container">
                    <span className="tooltip-trigger material-symbols-outlined text-sky/40 hover:text-sky transition-colors cursor-help text-lg outline-none focus:text-sky" tabIndex={0} role="button" aria-label="More information about AI Automation">info</span>
                    <div className="tooltip-content" role="tooltip">
                      <ul className="list-disc pl-3 space-y-1">
                        <li>24/7 Chatbots</li>
                        <li>Voice call agents</li>
                        <li>Workflows integration</li>
                        <li>Intelligent qualifying</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <p className="font-sans font-300 text-white/60 leading-relaxed">24/7 AI chatbots and voice agents that qualify leads, answer FAQs, and book appointments automatically.</p>
              </div>

              <div className="glass-card p-10 rounded-2xl hover:border-sky/60 hover:scale-[1.02] hover:shadow-2xl hover:shadow-sky/5 transition-all duration-300 group">
                <span className="material-symbols-outlined text-sky text-4xl mb-6 block">filter_alt</span>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-display font-700 text-xl">Sales Funnels</h3>
                  <div className="tooltip-container">
                    <span className="tooltip-trigger material-symbols-outlined text-sky/40 hover:text-sky transition-colors cursor-help text-lg outline-none focus:text-sky" tabIndex={0} role="button" aria-label="More information about Sales Funnels">info</span>
                    <div className="tooltip-content" role="tooltip">
                      <ul className="list-disc pl-3 space-y-1">
                        <li>Multi-step funnels</li>
                        <li>Upsell/Downsell ops</li>
                        <li>Retargeting pixels</li>
                        <li>A/B Testing capability</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <p className="font-sans font-300 text-white/60 leading-relaxed">High-converting landing pages and automated sequences that turn cold traffic into paying clients.</p>
              </div>

              <div className="glass-card p-10 rounded-2xl hover:border-sky/60 hover:scale-[1.02] hover:shadow-2xl hover:shadow-sky/5 transition-all duration-300 group">
                <span className="material-symbols-outlined text-sky text-4xl mb-6 block">star</span>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-display font-700 text-xl">Reputation &amp; Reviews</h3>
                  <div className="tooltip-container">
                    <span className="tooltip-trigger material-symbols-outlined text-sky/40 hover:text-sky transition-colors cursor-help text-lg outline-none focus:text-sky" tabIndex={0} role="button" aria-label="More information about Reputation & Reviews">info</span>
                    <div className="tooltip-content" role="tooltip">
                      <ul className="list-disc pl-3 space-y-1">
                        <li>Google review requests</li>
                        <li>Direct SMS surveys</li>
                        <li>Review monitoring</li>
                        <li>Brand trust building</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <p className="font-sans font-300 text-white/60 leading-relaxed">Automated Google review campaigns that build trust and boost your local search ranking.</p>
              </div>

              <div className="glass-card p-10 rounded-2xl hover:border-sky/60 hover:scale-[1.02] hover:shadow-2xl hover:shadow-sky/5 transition-all duration-300 group">
                <span className="material-symbols-outlined text-sky text-4xl mb-6 block">all_inbox</span>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-display font-700 text-xl">Unified Inbox</h3>
                  <div className="tooltip-container">
                    <span className="tooltip-trigger material-symbols-outlined text-sky/40 hover:text-sky transition-colors cursor-help text-lg outline-none focus:text-sky" tabIndex={0} role="button" aria-label="More information about Unified Inbox">info</span>
                    <div className="tooltip-content" role="tooltip">
                      <ul className="list-disc pl-3 space-y-1">
                        <li>Omnichannel messaging</li>
                        <li>Team collaboration</li>
                        <li>Instant notification</li>
                        <li>One search lead history</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <p className="font-sans font-300 text-white/60 leading-relaxed">SMS, Email, WhatsApp, Instagram, Facebook, and live chat — all in one thread, zero missed leads.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-32 bg-ink border-y border-white/5" id="process">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="font-display font-800 text-4xl md:text-5xl tracking-tight mb-4">The Aldosia Process</h2>
                    <p className="font-sans font-300 text-white/60 text-lg">From audit to autopilot in under 8 days.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    <div className="hidden md:block absolute top-[40px] left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-sky/20 to-transparent z-0"></div>

                    <div className="reveal relative z-10 flex flex-col items-center text-center group">
                        <div className="w-20 h-20 glass-card rounded-2xl flex items-center justify-center mb-8 border-sky/20 group-hover:bg-sky/10 transition-all duration-500 hover:scale-110">
                            <span className="font-display font-800 text-2xl text-sky lowercase">01</span>
                        </div>
                        <h3 className="font-display font-700 text-xl mb-4 tracking-tight uppercase">Strategy Call <span className="text-sky/60 text-sm font-mono lowercase tracking-widest block mt-1">(Day 1)</span></h3>
                        <p className="font-sans font-300 text-white/60 leading-relaxed max-w-[280px]">We audit your current setup, identify gaps, and map out your full growth system in a free 20-min call.</p>
                    </div>

                    <div className="reveal relative z-10 flex flex-col items-center text-center group">
                        <div className="w-20 h-20 glass-card rounded-2xl flex items-center justify-center mb-8 border-sky/20 group-hover:bg-sky/10 transition-all duration-500 hover:scale-110">
                            <span className="font-display font-800 text-2xl text-sky lowercase">02</span>
                        </div>
                        <h3 className="font-display font-700 text-xl mb-4 tracking-tight uppercase">We Build It <span className="text-sky/60 text-sm font-mono lowercase tracking-widest block mt-1">(Days 2–7)</span></h3>
                        <p className="font-sans font-300 text-white/60 leading-relaxed max-w-[280px]">Your website, CRM, automations, and inbox are built and configured. You don't touch anything.</p>
                    </div>

                    <div className="reveal relative z-10 flex flex-col items-center text-center group">
                        <div className="w-20 h-20 bg-sky rounded-2xl flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(168,203,240,0.3)] group-hover:scale-110 transition-all duration-500">
                            <span className="font-display font-800 text-2xl text-ink lowercase">03</span>
                        </div>
                        <h3 className="font-display font-700 text-xl mb-4 tracking-tight uppercase">You Grow <span className="text-sky/60 text-sm font-mono lowercase tracking-widest block mt-1">(Day 8+)</span></h3>
                        <p className="font-sans font-300 text-white/60 leading-relaxed max-w-[280px]">Your system goes live. Leads come in, follow-ups go out automatically, appointments get booked while you sleep.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Who We Work With Section */}
        <section className="py-32 px-6 bg-ink" id="niches">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="font-display font-800 text-4xl md:text-5xl tracking-tight mb-4">Who We Work With</h2>
                    <p className="font-sans font-300 text-white/60 text-lg max-w-2xl mx-auto">We build custom growth machines for service-based leaders ready to automate their scaling.</p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    <div className="reveal glass-card p-10 rounded-2xl flex flex-col items-center text-center group hover:border-sky/40 transition-all border border-white/5">
                        <div className="w-16 h-16 rounded-full bg-sky/5 flex items-center justify-center mb-6 text-sky group-hover:scale-110 transition-transform group-hover:bg-sky/10">
                            <span className="material-symbols-outlined text-4xl">groups</span>
                        </div>
                        <h3 className="font-display font-700 text-lg mb-2 text-paper">Coaches &amp; Consultants</h3>
                        <p className="font-sans font-300 text-[10px] text-white/40 uppercase tracking-widest leading-tight">Scale your expertise</p>
                    </div>

                    <div className="reveal glass-card p-10 rounded-2xl flex flex-col items-center text-center group hover:border-sky/40 transition-all border border-white/5">
                        <div className="w-16 h-16 rounded-full bg-sky/5 flex items-center justify-center mb-6 text-sky group-hover:scale-110 transition-transform group-hover:bg-sky/10">
                            <span className="material-symbols-outlined text-4xl">real_estate_agent</span>
                        </div>
                        <h3 className="font-display font-700 text-lg mb-2 text-paper">Real Estate Agents</h3>
                        <p className="font-sans font-300 text-[10px] text-white/40 uppercase tracking-widest leading-tight">Automate your pipeline</p>
                    </div>

                    <div className="reveal glass-card p-10 rounded-2xl flex flex-col items-center text-center group hover:border-sky/40 transition-all border border-white/5">
                        <div className="w-16 h-16 rounded-full bg-sky/5 flex items-center justify-center mb-6 text-sky group-hover:scale-110 transition-transform group-hover:bg-sky/10">
                            <span className="material-symbols-outlined text-4xl">medical_services</span>
                        </div>
                        <h3 className="font-display font-700 text-lg mb-2 text-paper">Med Spas &amp; Clinics</h3>
                        <p className="font-sans font-300 text-[10px] text-white/40 uppercase tracking-widest leading-tight">Booking &amp; Reputation</p>
                    </div>

                    <div className="reveal glass-card p-10 rounded-2xl flex flex-col items-center text-center group hover:border-sky/40 transition-all border border-white/5">
                        <div className="w-16 h-16 rounded-full bg-sky/5 flex items-center justify-center mb-6 text-sky group-hover:scale-110 transition-transform group-hover:bg-sky/10">
                            <span className="material-symbols-outlined text-4xl">home_repair_service</span>
                        </div>
                        <h3 className="font-display font-700 text-lg mb-2 text-paper">Home Services</h3>
                        <p className="font-sans font-300 text-[10px] text-white/40 uppercase tracking-widest leading-tight">Quotes to Bookings</p>
                    </div>

                    <div className="reveal glass-card p-10 rounded-2xl flex flex-col items-center text-center group hover:border-sky/40 transition-all border border-white/5">
                        <div className="w-16 h-16 rounded-full bg-sky/5 flex items-center justify-center mb-6 text-sky group-hover:scale-110 transition-transform group-hover:bg-sky/10">
                            <span className="material-symbols-outlined text-4xl">restaurant</span>
                        </div>
                        <h3 className="font-display font-700 text-lg mb-2 text-paper">Restaurants</h3>
                        <p className="font-sans font-300 text-[10px] text-white/40 uppercase tracking-widest leading-tight">Loyalty &amp; Local Search</p>
                    </div>

                    <div className="reveal glass-card p-10 rounded-2xl flex flex-col items-center text-center group hover:border-sky/40 transition-all border border-white/5">
                        <div className="w-16 h-16 rounded-full bg-sky/5 flex items-center justify-center mb-6 text-sky group-hover:scale-110 transition-transform group-hover:bg-sky/10">
                            <span className="material-symbols-outlined text-4xl">shopping_cart</span>
                        </div>
                        <h3 className="font-display font-700 text-lg mb-2 text-paper">E-Commerce</h3>
                        <p className="font-sans font-300 text-[10px] text-white/40 uppercase tracking-widest leading-tight">Conversion Engines</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Pricing Section */}
        <section className="py-32 px-6 bg-ink border-t border-white/5" id="pricing">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="font-display font-800 text-4xl md:text-5xl tracking-tight">Three Tiers, One Growth System.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-card p-10 rounded-3xl flex flex-col">
                <div className="mb-8">
                  <h4 className="font-mono text-xs text-sky uppercase mb-4">STARTER</h4>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-display font-800">£500</span>
                    <span className="text-white/40 text-sm">setup</span>
                  </div>
                  <div className="text-xl font-display font-700 mt-2">£297<span className="text-sm font-sans font-300 text-white/40">/mo</span></div>
                </div>
                <ul className="space-y-4 mb-10 flex-grow text-sm font-sans font-300 text-white/70">
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-sky text-lg">check</span>Website in a Day</li>
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-sky text-lg">check</span>Contact form + calendar booking</li>
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-sky text-lg">check</span>Lead Tracking CRM</li>
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-sky text-lg">check</span>Google Review Requests</li>
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-sky text-lg">check</span>1 follow-up sequence</li>
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-sky text-lg">check</span>Basic SEO setup</li>
                </ul>
                <p className="font-mono text-[10px] text-white/40 uppercase mb-4">Best for: New businesses, quick launch</p>
                <a href="https://link.aldosia.com/widget/booking/SSynS2Sc8s71Eyhovn4D" className="w-full py-4 text-center rounded-xl border border-white/10 hover:bg-white/5 transition-all font-display font-700">Choose Starter</a>
              </div>

              <div className="glass-card p-10 rounded-3xl flex flex-col relative border-sky/30 shadow-[0_0_40px_rgba(168,203,240,0.1)]">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-sky text-ink font-mono text-[10px] font-700 px-4 py-1 rounded-full uppercase tracking-tighter">MOST POPULAR</div>
                <div className="mb-8">
                  <h4 className="font-mono text-xs text-sky uppercase mb-4">GROWTH</h4>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-display font-800">£1,000</span>
                    <span className="text-white/40 text-sm">setup</span>
                  </div>
                  <div className="text-xl font-display font-700 mt-2">£597<span className="text-sm font-sans font-300 text-white/40">/mo</span></div>
                </div>
                <ul className="space-y-4 mb-10 flex-grow text-sm font-sans font-300 text-white/70">
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-sky text-lg">check</span>Custom website</li>
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-sky text-lg">check</span>Sales pipeline + CRM</li>
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-sky text-lg">check</span>AI chatbot</li>
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-sky text-lg">check</span>Advanced automations (up to 5)</li>
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-sky text-lg">check</span>Reputation management</li>
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-sky text-lg">check</span>Advanced SEO</li>
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-sky text-lg">check</span>Reporting dashboard + mobile app</li>
                </ul>
                <p className="font-mono text-[10px] text-white/40 uppercase mb-4">Best for: Growing businesses, more leads</p>
                <a href="https://link.aldosia.com/widget/booking/SSynS2Sc8s71Eyhovn4D" className="w-full py-4 text-center rounded-xl bg-sky text-ink font-display font-700 hover:brightness-110 transition-all">Choose Growth</a>
              </div>

              <div className="glass-card p-10 rounded-3xl flex flex-col">
                <div className="mb-8">
                  <h4 className="font-mono text-xs text-sky uppercase mb-4">PREMIUM</h4>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-display font-800">£1,750</span>
                    <span className="text-white/40 text-sm">setup</span>
                  </div>
                  <div className="text-xl font-display font-700 mt-2">£997<span className="text-sm font-sans font-300 text-white/40">/mo</span></div>
                </div>
                <ul className="space-y-4 mb-10 flex-grow text-sm font-sans font-300 text-white/70">
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-sky text-lg">check</span>Custom site + sales funnel</li>
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-sky text-lg">check</span>AI Receptionist &amp; voice agent</li>
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-sky text-lg">check</span>CRM + custom pipelines</li>
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-sky text-lg">check</span>Full automation system</li>
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-sky text-lg">check</span>Unified Inbox (WhatsApp, Meta, GMB)</li>
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-sky text-lg">check</span>Social planner + review funnels</li>
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-sky text-lg">check</span>Priority support · 1 month</li>
                </ul>
                <p className="font-mono text-[10px] text-white/40 uppercase mb-4">Best for: Scaling teams, maximum growth</p>
                <a href="https://link.aldosia.com/widget/booking/SSynS2Sc8s71Eyhovn4D" className="w-full py-4 text-center rounded-xl border border-white/10 hover:bg-white/5 transition-all font-display font-700">Choose Premium</a>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-32 px-6" id="success">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="font-display font-800 text-4xl md:text-5xl tracking-tight">Success Stories</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-card reveal p-10 rounded-2xl flex flex-col hover:scale-[1.02] hover:border-sky/30 transition-all duration-300 group">
                <div className="flex text-sky mb-6 group-hover:scale-110 transition-transform origin-left">
                  <span className="material-symbols-outlined text-sm">star</span>
                  <span className="material-symbols-outlined text-sm">star</span>
                  <span className="material-symbols-outlined text-sm">star</span>
                  <span className="material-symbols-outlined text-sm">star</span>
                  <span className="material-symbols-outlined text-sm">star</span>
                </div>
                <p className="font-sans font-300 text-lg leading-relaxed italic mb-10 flex-grow">"Aldosia didn't just rebuild our site; they rebuilt our entire sales engine. Our ROI increased by 300% in the first quarter alone."</p>
                <div className="flex items-center gap-4">
                  <img alt="Marcus Thorne" className="w-12 h-12 rounded-full border border-sky/30 grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCi3QBRt2t4XyqLeES8FYfH7fORXTVH1AKprSwPN3h5qXHK1vNaKOHnGj9XDjcNZ6glnGySBPTtxotfv2HN2kNwJctpQ2zQ7ob4fiwH5XbqZQsPK7RzQWqr83BLDsydz1qmHfPudge2tWQqWxCBPIN_8GUfnkLmOlCOThDXMD4zg0t5JoqhStFVxAWNrwB_1RLDZmPMOpFame5sAjjmHdo2wE-9hiQQMAaUWh6ZBA0TuknE1vecYw63n-D4wGjTjdkMR5WRVNnxNr8" />
                  <div>
                    <p className="font-display font-700 text-sm">Marcus Thorne</p>
                    <p className="font-mono text-[10px] text-white/40 uppercase">CEO, NeonSprint</p>
                  </div>
                </div>
              </div>

              <div className="glass-card reveal p-10 rounded-2xl flex flex-col hover:scale-[1.02] hover:border-sky/30 transition-all duration-300 group">
                <div className="flex text-sky mb-6 group-hover:scale-110 transition-transform origin-left">
                  <span className="material-symbols-outlined text-sm">star</span>
                  <span className="material-symbols-outlined text-sm">star</span>
                  <span className="material-symbols-outlined text-sm">star</span>
                  <span className="material-symbols-outlined text-sm">star</span>
                  <span className="material-symbols-outlined text-sm">star</span>
                </div>
                <p className="font-sans font-300 text-lg leading-relaxed italic mb-10 flex-grow">"The level of technical precision is unmatched. We finally have a system that scales as fast as we do without the overhead."</p>
                <div className="flex items-center gap-4">
                  <img alt="Diana Ferras" className="w-12 h-12 rounded-full border border-sky/30 grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCfBR_u1vSojqWUvJXYf1TyXWErfkBJK1QbUU6zlr8fmeTf7uLIzDFFCBqq0gzGqCtORLUSLQdNylxkGEsCeBQ9v0UFrH0PAI6HdhtHhz5fqRsLRNkIfcJgEdhaAWT28v6-V7BHTtbiKZl9HVhFU-MvhS6IwAKneYxSJyLhb0aT03dxuEhsq7oW8_sToXhv0FmEFy9Ou09uVOPSzm1xR2dxigL_APt6wNsMIquKODqO4xJbK4HOl16HHx2dIUjFpjY9wqiLFR97eI" />
                  <div>
                    <p className="font-display font-700 text-sm">Diana Ferras</p>
                    <p className="font-mono text-[10px] text-white/40 uppercase">Director, CryptoFlow</p>
                  </div>
                </div>
              </div>

              <div className="glass-card reveal p-10 rounded-2xl flex flex-col hover:scale-[1.02] hover:border-sky/30 transition-all duration-300 group">
                <div className="flex text-sky mb-6 group-hover:scale-110 transition-transform origin-left">
                  <span className="material-symbols-outlined text-sm">star</span>
                  <span className="material-symbols-outlined text-sm">star</span>
                  <span className="material-symbols-outlined text-sm">star</span>
                  <span className="material-symbols-outlined text-sm">star</span>
                  <span className="material-symbols-outlined text-sm">star</span>
                </div>
                <p className="font-sans font-300 text-lg leading-relaxed italic mb-10 flex-grow">"Automation used to be a buzzword for us. Now it's our competitive advantage. Aldosia is the partner we needed."</p>
                <div className="flex items-center gap-4">
                  <img alt="Julian Reed" className="w-12 h-12 rounded-full border border-sky/30 grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZmK-wg_hgk99GoJ3WBf19Q-Sk95bLW3XkPt-hZpFAsGcxkxvqvFErSqfWOBhQG5YxXIwZ1Pvi6ZOaxx0j1N_iFV3i6k_ZgQX2TplXHXCAHJaTWGaSa8HTFx_pR5BBP_5RH3R6AVxYnq6bPwDBUXtfHY0uLGQekZZXpuZz9WnPzkJeF2lCRbp7uEnir63bYdcR4NWLpqGqmpmsTnYObPjUjSwJo8Y0ltMbx-qoktGLMooqwmEciehhfkLKUmFkkfyFDk1E_qkoLmM" />
                  <div>
                    <p className="font-display font-700 text-sm">Julian Reed</p>
                    <p className="font-mono text-[10px] text-white/40 uppercase">Founder, MeritCoaching</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Banner */}
        <section className="py-32 px-6 bg-ink text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display font-800 text-5xl md:text-6xl tracking-tighter mb-8">Ready To Make a Real Change?</h2>
            <p className="font-sans font-300 text-xl text-white/60 mb-12 max-w-2xl mx-auto">
              Stop building for today. Start engineering for tomorrow. Let's put your business on autopilot.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-20">
              <a href="https://link.aldosia.com/widget/booking/SSynS2Sc8s71Eyhovn4D" className="px-12 py-5 bg-sky text-ink font-display font-700 text-lg rounded-full hover:brightness-110 transition-all active:scale-95 shadow-lg shadow-sky/10 text-center">
                Get Started Now
              </a>
              <a href="mailto:yasser@aldosia.com" className="px-12 py-5 glass-card text-white font-display font-700 text-lg rounded-full hover:bg-white/10 transition-all active:scale-95 text-center">
                Contact Sales
              </a>
            </div>
            <div className="flex justify-center items-center gap-10 font-mono text-[10px] text-sky tracking-[0.2em] uppercase">
              <span>99.9% Uptime</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
              <span>24/7 Support</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
              <span>32ms Response</span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-ink border-t border-white/5 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
            <div className="max-w-xs">
              <div className="mb-4">
                <AldosiaLogo />
              </div>
              <p className="font-mono text-[10px] text-white/40 tracking-tight uppercase leading-relaxed">
                Your business, on autopilot. <br/>COMPLETE GROWTH INFRASTRUCTURE.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24 font-mono text-[10px] uppercase tracking-widest">
              <div className="flex flex-col gap-4">
                <h5 className="text-white">Platform</h5>
                <a className="text-white/40 hover:text-sky transition-colors" href="#services">Services</a>
                <a className="text-white/40 hover:text-sky transition-colors" href="#process">Process</a>
                <a className="text-white/40 hover:text-sky transition-colors" href="#niches">Niches</a>
                <a className="text-white/40 hover:text-sky transition-colors" href="#pricing">Pricing</a>
                <a className="text-white/40 hover:text-sky transition-colors" href="#success">Success</a>
              </div>
              <div className="flex flex-col gap-4">
                <h5 className="text-white">Company</h5>
                <a className="text-white/40 hover:text-sky transition-colors" href="/about.html">About</a>
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
    </div>
  );
}
