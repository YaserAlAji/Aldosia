import React, { useEffect } from 'react';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);

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
    <div className="bg-ink text-paper font-sans antialiased min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        
        {/* Navigation back helper */}
        <div className="font-mono text-[11px] text-[#7FB0E3] tracking-[0.15em] uppercase flex items-center mb-6 gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-sky"></span>
          Inquire
        </div>

        {/* Title and Subtitle */}
        <h1 className="font-display font-800 text-4xl md:text-6xl tracking-tighter mb-4 leading-tight">
          Contact <span className="text-sky">Aldosia</span>
        </h1>
        <p className="font-sans font-300 text-base md:text-lg text-white/60 mb-12 max-w-xl">
          Tell us about your business and we’ll get back to you.
        </p>

        {/* Standalone embedded/portable contact form component */}
        <ContactForm />

      </div>
    </div>
  );
}
