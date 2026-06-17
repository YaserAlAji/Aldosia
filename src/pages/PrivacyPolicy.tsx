import React, { useEffect, useState } from 'react';

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState('introduction');

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);

    const handleScroll = () => {
      const sections = [
        'introduction',
        'information-we-collect',
        'how-we-use-information',
        'sms-communications',
        'cookies-and-tracking',
        'third-party-services',
        'data-security',
        'data-retention',
        'user-rights',
        'childrens-privacy',
        'changes-to-policy',
        'contact-information'
      ];

      const scrollPosition = window.scrollY + 180; // offset

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.offsetTop - 120; // header offset
      window.scrollTo({
        top: top,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  const sectionsList = [
    { id: 'introduction', label: '1. Introduction' },
    { id: 'information-we-collect', label: '2. Information We Collect' },
    { id: 'how-we-use-information', label: '3. How We Use Information' },
    { id: 'sms-communications', label: '4. SMS Communications' },
    { id: 'cookies-and-tracking', label: '5. Cookies & Tracking' },
    { id: 'third-party-services', label: '6. Third-Party Services' },
    { id: 'data-security', label: '7. Data Security' },
    { id: 'data-retention', label: '8. Data Retention' },
    { id: 'user-rights', label: '9. User Rights' },
    { id: 'childrens-privacy', label: '10. Children\'s Privacy' },
    { id: 'changes-to-policy', label: '11. Policy Changes' },
    { id: 'contact-information', label: '12. Contact Information' }
  ];

  return (
    <div className="bg-ink text-paper font-sans antialiased min-h-screen pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-12 border-b border-white/5 pb-10">
          <div className="font-mono text-[11px] text-[#7FB0E3] tracking-[0.15em] uppercase flex items-center mb-4 gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-sky"></span>
            Legal & Compliance
          </div>
          <h1 className="font-display font-800 text-4xl md:text-5xl tracking-tighter mb-4 leading-none text-white">
            Privacy Policy
          </h1>
          <p className="font-mono text-xs text-white/40 uppercase tracking-widest">
            Last Updated: June 17, 2026
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Sticky Table of Contents (Desktop Sidebar) */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-28 bg-[#0D0D0F] border border-white/5 rounded-2xl p-6 shadow-xl">
              <h4 className="font-mono text-[10px] uppercase tracking-widest text-white/40 mb-4 border-b border-white/5 pb-3">
                On This Page
              </h4>
              <nav className="space-y-2">
                {sectionsList.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => scrollToSection(sec.id)}
                    className={`block w-full text-left font-sans text-xs py-1.5 px-2 rounded-lg transition-all border-l-2 leading-snug cursor-pointer ${
                      activeSection === sec.id
                        ? 'bg-white/[0.03] border-sky text-sky font-medium pl-3'
                        : 'border-transparent text-white/50 hover:text-white/80 hover:bg-white/[0.01]'
                    }`}
                  >
                    {sec.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Privacy Policy Main Content Area */}
          <div className="lg:col-span-3 prose prose-invert max-w-none space-y-12">
            
            {/* Introduction Section */}
            <section id="introduction" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-2 font-mono text-[10px] text-sky uppercase tracking-widest">
                <span>Section 01</span>
              </div>
              <h2 className="font-display text-2xl font-700 text-white tracking-tight border-b border-white/5 pb-2">
                1. Introduction
              </h2>
              <div className="text-white/70 font-sans text-sm md:text-base leading-relaxed space-y-4">
                <p>
                  At <strong>Aldosia</strong>, we are committed to safeguarding and preserving the privacy of our visitors, clients, partners, and users of our services. We value the trust you place in us and are dedicated to processing your information with the highest standards of integrity, transparency, and data protection practices.
                </p>
                <p>
                  This Privacy Policy describes how we collect, use, store, process, protect, and share your personal data when you visit our website (
                  <a href="https://aldosia.com" target="_blank" rel="noreferrer" className="text-sky hover:underline">https://aldosia.com</a>
                  ), inquire about or use our services, or interact with our workflows. By accessing our platform or utilizing our business solutions, you agree to the collections and practices outlined in this policy.
                </p>
              </div>
            </section>

            {/* Information We Collect */}
            <section id="information-we-collect" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-2 font-mono text-[10px] text-sky uppercase tracking-widest">
                <span>Section 02</span>
              </div>
              <h2 className="font-display text-2xl font-700 text-white tracking-tight border-b border-white/5 pb-2">
                2. Information We Collect
              </h2>
              <div className="text-white/70 font-sans text-sm md:text-base leading-relaxed space-y-4">
                <p>
                  To provide our complete growth system and specialized business tools, we collect several categories of information depending on the nature of your interactions with Aldosia. This includes:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2 pl-4">
                  <li><strong>Contact Details:</strong> Your full name, email address, and cell phone number.</li>
                  <li><strong>Business Profile Details:</strong> Your company name, business size, industry, address, and service preferences/interests.</li>
                  <li><strong>Form & Message Inquiries:</strong> Any inquiries entered in our custom forms, appointment bookings, or feedback modules, as well as the accompanying interaction timestamps.</li>
                  <li><strong>SMS Approvals:</strong> Consent indications, selection confirmations, and the accompanying metadata of consent registration.</li>
                  <li><strong>Technical Usage Information:</strong> Device brand/model, browser specifications, operating system versions, IP addresses, geographical approximations, and referral domains.</li>
                  <li><strong>Cookies and Behavioral Analytics:</strong> Page hits, session durations, click-stream coordinates, page navigational sequences, and preferences tracked via active cookies.</li>
                </ul>
              </div>
            </section>

            {/* How We Use Information */}
            <section id="how-we-use-information" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-2 font-mono text-[10px] text-sky uppercase tracking-widest">
                <span>Section 03</span>
              </div>
              <h2 className="font-display text-2xl font-700 text-white tracking-tight border-b border-white/5 pb-2">
                3. How We Use Information
              </h2>
              <div className="text-white/70 font-sans text-sm md:text-base leading-relaxed space-y-4">
                <p>
                  Aldosia uses the collected data to maintain, optimize, customize, and upgrade our service deployments, including:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                  <div className="bg-white/[0.02] border border-white/5 p-4 rounded-xl">
                    <h5 className="font-display font-600 text-sm text-white mb-1">Inquiry Fulfillment</h5>
                    <p className="text-xs text-white/60 leading-normal">Promptly responding to message submissions, addressing interested service requests, and sending requested proposals.</p>
                  </div>
                  <div className="bg-white/[0.02] border border-white/5 p-4 rounded-xl">
                    <h5 className="font-display font-600 text-sm text-white mb-1">CRM & Automation</h5>
                    <p className="text-xs text-white/60 leading-normal">Onboarding business info into CRM structures to direct client flows, schedule system appointments, and log communication streams.</p>
                  </div>
                  <div className="bg-white/[0.02] border border-white/5 p-4 rounded-xl">
                    <h5 className="font-display font-600 text-sm text-white mb-1">Operational Messaging</h5>
                    <p className="text-xs text-white/60 leading-normal">Delivering appointment alerts, status reminders, follow-up messages, operational notices, and response notifications.</p>
                  </div>
                  <div className="bg-white/[0.02] border border-white/5 p-4 rounded-xl">
                    <h5 className="font-display font-600 text-sm text-white mb-1">Security & Service Protection</h5>
                    <p className="text-xs text-white/60 leading-normal">Detecting abnormal form activities, defending against malicious system attempts, validating contact entries, and ensuring safety.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* SMS Communications */}
            <section id="sms-communications" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-2 font-mono text-[10px] text-sky uppercase tracking-widest">
                <span>Section 04</span>
              </div>
              <h2 className="font-display text-2xl font-700 text-white tracking-tight border-b border-white/5 pb-2">
                4. SMS Communications
              </h2>
              <div className="text-white/70 font-sans text-sm md:text-base leading-relaxed space-y-4">
                <p>
                  We prioritize clear, compliant, and non-intrusive text communication.
                </p>
                <div className="bg-sky/5 border border-sky/15 p-5 rounded-xl space-y-3">
                  <p className="italic font-sans text-white/90">
                    "When users provide consent, Aldosia may send SMS messages related to appointments, reminders, customer support, service updates, and business communications. Message frequency varies. Message and data rates may apply. Users may opt out at any time by replying STOP."
                  </p>
                  <p className="font-semibold text-sky">
                    "SMS consent is not shared with third parties or affiliates for marketing purposes."
                  </p>
                </div>
                <p>
                  Consent for receiving text communications is always optional but is required if you wish to use our specific instant Missed Call Text-Back services or automated SMS verification campaigns.
                </p>
              </div>
            </section>

            {/* Cookies and Tracking Technologies */}
            <section id="cookies-and-tracking" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-2 font-mono text-[10px] text-sky uppercase tracking-widest">
                <span>Section 05</span>
              </div>
              <h2 className="font-display text-2xl font-700 text-white tracking-tight border-b border-white/5 pb-2">
                5. Cookies & Tracking Technologies
              </h2>
              <div className="text-white/70 font-sans text-sm md:text-base leading-relaxed space-y-4">
                <p>
                  Our server structures employ standard browser storing mechanisms ("cookies") to gather metrics and deliver smooth interactions:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li><strong>Essential Cookies:</strong> Necessary to enable navigational features, load styled content accurately, and keep user sessions secure.</li>
                  <li><strong>Performance & Utility Cookies:</strong> Log styling settings, remember preferred language options, and preserve inputs across form page loads.</li>
                  <li><strong>Analytics Cookies:</strong> Gather anonymous statistical indicators regarding site visits, identify popular articles, and track how viewers browse.</li>
                </ul>
              </div>
            </section>

            {/* Third-Party Services */}
            <section id="third-party-services" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-2 font-mono text-[10px] text-sky uppercase tracking-widest">
                <span>Section 06</span>
              </div>
              <h2 className="font-display text-2xl font-700 text-white tracking-tight border-b border-white/5 pb-2">
                6. Third-Party Services
              </h2>
              <div className="text-white/70 font-sans text-sm md:text-base leading-relaxed space-y-4">
                <p>
                  We coordinate with trusted technical software providers to route pipeline submissions, track marketing behaviors, and process invoices. These include:
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {['GoHighLevel', 'Google Analytics', 'Google Business Profile', 'Meta Platforms (Facebook & Instagram)', 'Stripe', 'Twilio', 'WhatsApp Business'].map((svc) => (
                    <span key={svc} className="bg-white/[0.04] text-white/80 border border-white/10 text-xs px-3 py-1.5 rounded-lg font-mono">
                      {svc}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-white/50 mt-2">
                  Each service represents an autonomous vendor with standalone policy outlines. We encourage reviewing their security terms separately.
                </p>
              </div>
            </section>

            {/* Data Security */}
            <section id="data-security" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-2 font-mono text-[10px] text-sky uppercase tracking-widest">
                <span>Section 07</span>
              </div>
              <h2 className="font-display text-2xl font-700 text-white tracking-tight border-b border-white/5 pb-2">
                7. Data Security
              </h2>
              <div className="text-white/70 font-sans text-sm md:text-base leading-relaxed space-y-4">
                <p>
                  Aldosia maintains structured administrative, digital, and mechanical safety barriers to protect personal data from alteration, disclosure, loss, or unauthorized entry. High-grade SSL/TLS data encryption protects information sent via forms and backend channels.
                </p>
                <p>
                  While we work tirelessly to secure information pipelines, we highlight that no method of transacting data on the web is completely invulnerable to all external threats. We cannot pledge flawless security.
                </p>
              </div>
            </section>

            {/* Data Retention */}
            <section id="data-retention" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-2 font-mono text-[10px] text-sky uppercase tracking-widest">
                <span>Section 08</span>
              </div>
              <h2 className="font-display text-2xl font-700 text-white tracking-tight border-b border-white/5 pb-2">
                8. Data Retention
              </h2>
              <div className="text-white/70 font-sans text-sm md:text-base leading-relaxed space-y-4">
                <p>
                  We store user records only as long as required to execute standard transactional relationships, provide our functional software suites, defend against fraud, support client inquiry requests, or comply with prevailing regulatory requirements. 
                </p>
                <p>
                  When your information is no longer needed, we safely de-identify, lock, or securely erase the respective records from all central tables.
                </p>
              </div>
            </section>

            {/* User Rights */}
            <section id="user-rights" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-2 font-mono text-[10px] text-sky uppercase tracking-widest">
                <span>Section 09</span>
              </div>
              <h2 className="font-display text-2xl font-700 text-white tracking-tight border-b border-white/5 pb-2">
                9. User Rights
              </h2>
              <div className="text-white/70 font-sans text-sm md:text-base leading-relaxed space-y-4">
                <p>
                  Depending on your jurisdiction, you hold several options and rights regarding the management of your personal data:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li><strong>Access:</strong> The right to view what categories of personal records we store.</li>
                  <li><strong>Correction:</strong> Instantly amend, update, or correct outdated contact details.</li>
                  <li><strong>Deletion:</strong> Coordinate deletion or archiving of specified communication entries.</li>
                  <li><strong>Withdrawal of Consent:</strong> Disable further text messages, newsletters, or emails at any time.</li>
                </ul>
                <p>
                  If you need to trigger any of these rights, contact us directly at <a href="mailto:yasser@aldosia.com" className="text-sky hover:underline">yasser@aldosia.com</a>.
                </p>
              </div>
            </section>

            {/* Children's Privacy */}
            <section id="childrens-privacy" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-2 font-mono text-[10px] text-sky uppercase tracking-widest">
                <span>Section 10</span>
              </div>
              <h2 className="font-display text-2xl font-700 text-white tracking-tight border-b border-white/5 pb-2">
                10. Children's Privacy
              </h2>
              <div className="text-white/70 font-sans text-sm md:text-base leading-relaxed space-y-4">
                <p>
                  Our software integrations and website tools are engineered purely for corporate entity representatives and standard business inquiry personnel. Under no circumstances are our solutions directed to or intended for individuals under the age of thirteen (13). We do not knowingly compile or store any information regarding minors.
                </p>
              </div>
            </section>

            {/* Changes to this Privacy Policy */}
            <section id="changes-to-policy" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-2 font-mono text-[10px] text-sky uppercase tracking-widest">
                <span>Section 11</span>
              </div>
              <h2 className="font-display text-2xl font-700 text-white tracking-tight border-b border-white/5 pb-2">
                11. Changes to This Privacy Policy
              </h2>
              <div className="text-white/70 font-sans text-sm md:text-base leading-relaxed space-y-4">
                <p>
                  Aldosia reserves the right to amend and polish this Privacy Policy intermittently to align with adjusted operations or legal updates. Whenever updates occur, we will adjust the "Last Updated" date positioned at the top of this statement. We encourage you to visit this page periodically to remain informed about our privacy practices.
                </p>
              </div>
            </section>

            {/* Contact Information */}
            <section id="contact-information" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-2 font-mono text-[10px] text-sky uppercase tracking-widest">
                <span>Section 12</span>
              </div>
              <h2 className="font-display text-2xl font-700 text-white tracking-tight border-b border-white/5 pb-2">
                12. Contact Information
              </h2>
              <div className="text-white/70 font-sans text-sm md:text-base leading-relaxed space-y-4">
                <p>
                  For any questions or suggestions concerning your privacy, data preservation, or permissions, feel free to contact us:
                </p>
                <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl space-y-2 max-w-md">
                  <div className="font-display font-700 text-lg text-white">Aldosia</div>
                  <div className="text-sm">
                    <span className="text-white/40">Email:</span>{' '}
                    <a href="mailto:yasser@aldosia.com" className="text-sky hover:underline font-mono">yasser@aldosia.com</a>
                  </div>
                  <div className="text-sm">
                    <span className="text-white/40">Website:</span>{' '}
                    <a href="https://aldosia.com" target="_blank" rel="noreferrer" className="text-sky hover:underline font-mono">https://aldosia.com</a>
                  </div>
                </div>
              </div>
            </section>

          </div>

        </div>

      </div>
    </div>
  );
}
