import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function TermsOfService() {
  const [activeSection, setActiveSection] = useState('acceptance');

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);

    const handleScroll = () => {
      const sections = [
        'acceptance',
        'services-provided',
        'user-responsibilities',
        'sms-messaging-terms',
        'payments-and-fees',
        'intellectual-property',
        'third-party-services',
        'service-availability',
        'limitation-of-liability',
        'indemnification',
        'termination',
        'privacy',
        'governing-law',
        'changes-to-terms',
        'contact-information'
      ];

      const scrollPosition = window.scrollY + 180; // offset for sticky header

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
    { id: 'acceptance', label: '1. Acceptance of Terms' },
    { id: 'services-provided', label: '2. Services Provided' },
    { id: 'user-responsibilities', label: '3. User Responsibilities' },
    { id: 'sms-messaging-terms', label: '4. SMS Messaging Terms' },
    { id: 'payments-and-fees', label: '5. Payments & Fees' },
    { id: 'intellectual-property', label: '6. Intellectual Property' },
    { id: 'third-party-services', label: '7. Third-Party Services' },
    { id: 'service-availability', label: '8. Service Availability' },
    { id: 'limitation-of-liability', label: '9. Limitation of Liability' },
    { id: 'indemnification', label: '10. Indemnification' },
    { id: 'termination', label: '11. Termination' },
    { id: 'privacy', label: '12. Privacy Policy' },
    { id: 'governing-law', label: '13. Governing Law' },
    { id: 'changes-to-terms', label: '14. Changes to Terms' },
    { id: 'contact-information', label: '15. Contact Information' }
  ];

  return (
    <div className="bg-ink text-paper font-sans antialiased min-h-screen pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-12 border-b border-white/5 pb-10">
          <div className="font-mono text-[11px] text-[#7FB0E3] tracking-[0.15em] uppercase flex items-center mb-4 gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-sky"></span>
            Terms & Conditions
          </div>
          <h1 className="font-display font-800 text-4xl md:text-5xl tracking-tighter mb-4 leading-none text-white">
            Terms of Service
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
                Agreements
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

          {/* Terms Main Content Area */}
          <div className="lg:col-span-3 prose prose-invert max-w-none space-y-12">
            
            {/* 1. Acceptance of Terms */}
            <section id="acceptance" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-2 font-mono text-[10px] text-sky uppercase tracking-widest">
                <span>Section 01</span>
              </div>
              <h2 className="font-display text-2xl font-700 text-white tracking-tight border-b border-white/5 pb-2">
                1. Acceptance of Terms
              </h2>
              <div className="text-white/70 font-sans text-sm md:text-base leading-relaxed space-y-4">
                <p>
                  Welcome to <strong>Aldosia</strong>. By accessing or using Aldosia's website, products, software integrations, application interfaces, and tailored service agreements, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                </p>
                <p>
                  These Terms constitute a legally binding agreement between you or the corporate entity you represent ("User" or "Client") and Aldosia. If you do not accept these Terms in their entirety, you are strictly prohibited from accessing our tools or deploying our growth workflows for your local business entities.
                </p>
              </div>
            </section>

            {/* 2. Services Provided */}
            <section id="services-provided" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-2 font-mono text-[10px] text-sky uppercase tracking-widest">
                <span>Section 02</span>
              </div>
              <h2 className="font-display text-2xl font-700 text-white tracking-tight border-b border-white/5 pb-2">
                2. Services Provided
              </h2>
              <div className="text-white/70 font-sans text-sm md:text-base leading-relaxed space-y-4">
                <p>
                  Aldosia provides bespoke technology implementations, specialized operations, and high-performance digital architectures, which specifically include:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2 pl-4">
                  <li>Custom premium website development and deployment</li>
                  <li>Customer Relationship Management (CRM) system implementation</li>
                  <li>Surgical Artificial Intelligence (AI) automations and chatbot setups</li>
                  <li>Professional appointment scheduling and booking infrastructures</li>
                  <li>Missed Call Text-Back instant service implementations</li>
                  <li>Conversational AI telephone assistants and automated voice/AI receptionists</li>
                  <li>Targeted SMS and email marketing automation tools</li>
                  <li>Reputation management, feedback mechanisms, and localized branding systems</li>
                  <li>Complete high-impact growth pipeline systems and customer generation structures</li>
                </ul>
                <p>
                  You acknowledge that our service suites, AI configurations, software pipelines, and integration portals may undergo continuous iteration, maintenance, expansion, and compliance adjustments, and may evolve over time without prior separate announcement.
                </p>
              </div>
            </section>

            {/* 3. User Responsibilities */}
            <section id="user-responsibilities" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-2 font-mono text-[10px] text-sky uppercase tracking-widest">
                <span>Section 03</span>
              </div>
              <h2 className="font-display text-2xl font-700 text-white tracking-tight border-b border-white/5 pb-2">
                3. User Responsibilities
              </h2>
              <div className="text-white/70 font-sans text-sm md:text-base leading-relaxed space-y-4">
                <p>
                  To secure access to our system environments, you agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Provide precise, authentic, and complete business information during contact, consultation, and billing updates.</li>
                  <li>Utilize all provided websites, communication gateways, and automation tools strictly in accordance with local and international statutory requirements.</li>
                  <li>Sustain, monitor, and safeguard any admin credentials, account tokens, or client logins assigned to your software instances.</li>
                  <li>Prevent the transmission of unsolicited bulk messages ("Spam"), automated crawl behaviors, mock traffic triggers, or abusive data actions through our messaging gateways.</li>
                  <li>Comply comprehensively with standard consumer consent guidelines, local compliance structures, and applicable data management definitions.</li>
                </ul>
              </div>
            </section>

            {/* 4. SMS Messaging Terms */}
            <section id="sms-messaging-terms" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-2 font-mono text-[10px] text-sky uppercase tracking-widest">
                <span>Section 04</span>
              </div>
              <h2 className="font-display text-2xl font-700 text-white tracking-tight border-b border-white/5 pb-2">
                4. SMS Messaging Terms
              </h2>
              <div className="text-white/70 font-sans text-sm md:text-base leading-relaxed space-y-4">
                <p>
                  Aldosia coordinates high-reliability SMS automation platforms to support operational workflows:
                </p>
                <div className="bg-white/[0.02] border border-white/5 p-5 rounded-2xl space-y-3">
                  <p>
                    By providing your phone number and opting in through our compliant checkboxes or web interfaces, you agree to receive SMS communications related to:
                  </p>
                  <ul className="list-disc list-inside text-xs text-white/60 space-y-1 pl-4">
                    <li>Real-time appointment bookings and schedule reminders</li>
                    <li>Instant customer support dialogs and agent replies</li>
                    <li>Important software notifications and custom service updates</li>
                    <li>Business development requests and relevant service follow-ups</li>
                  </ul>
                  <p className="text-xs text-[#7FB0E3]">
                    Message frequency varies. Message and data rates may apply. You can reply STOP to unsubscribe at any point or HELP for emergency system assistance. Consent to receive text alerts is strictly optional and is not a condition of purchase for any Aldosia core service.
                  </p>
                  <p className="font-semibold text-white">
                    "SMS consent is not shared with third parties or affiliates for marketing purposes."
                  </p>
                </div>
              </div>
            </section>

            {/* 5. Payments and Fees */}
            <section id="payments-and-fees" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-2 font-mono text-[10px] text-sky uppercase tracking-widest">
                <span>Section 05</span>
              </div>
              <h2 className="font-display text-2xl font-700 text-white tracking-tight border-b border-white/5 pb-2">
                5. Payments and Fees
              </h2>
              <div className="text-white/70 font-sans text-sm md:text-base leading-relaxed space-y-4">
                <p>
                  You agree to abide by the standard settlement and compensation terms presented during your custom service checkout:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li><strong>Clear Price Disclosures:</strong> All setup fees, customization fees, maintenance charges, and active licensing fees are explicitly presented prior to contract signature or credit card charging.</li>
                  <li><strong>Subscription Renewal:</strong> Monthly or annual subscription tools automatically renew at the conclusion of each billing period unless you execute a cancellation request within the period specified in your custom contract.</li>
                  <li><strong>Taxes and Obligations:</strong> Clients remain singularly responsible for any local VAT, income tax, or payment-related surcharges tied to the deployment of software tools.</li>
                </ul>
              </div>
            </section>

            {/* 6. Intellectual Property */}
            <section id="intellectual-property" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-2 font-mono text-[10px] text-sky uppercase tracking-widest">
                <span>Section 06</span>
              </div>
              <h2 className="font-display text-2xl font-700 text-white tracking-tight border-b border-white/5 pb-2">
                6. Intellectual Property
              </h2>
              <div className="text-white/70 font-sans text-sm md:text-base leading-relaxed space-y-4">
                <p>
                  Consistent protection of intellectual creations is paramount:
                </p>
                <p>
                  <strong>To Aldosia:</strong> Aldosia retains exclusive ownership of its company name, digital branding assets, software kernels, automation templates, AI prompt structures, system databases, custom web styles, and global source codes built during general developmental iterations.
                </p>
                <p>
                  <strong>To files uploaded by you:</strong> Clients retain full ownership, trademarks, and copyright authority over their business materials, private files, customized logo files, and specific promotional content uploaded into their customer portal, unless a different outcome is explicitly signed inside a separate developmental agreement.
                </p>
              </div>
            </section>

            {/* 7. Third-Party Services */}
            <section id="third-party-services" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-2 font-mono text-[10px] text-sky uppercase tracking-widest">
                <span>Section 07</span>
              </div>
              <h2 className="font-display text-2xl font-700 text-white tracking-tight border-b border-white/5 pb-2">
                7. Third-Party Services
              </h2>
              <div className="text-white/70 font-sans text-sm md:text-base leading-relaxed space-y-4">
                <p>
                  To maximize automation, our workflows integrate several cloud service applications, including GoHighLevel, Google Suite, Meta Business platforms, WhatsApp pipelines, Stripe, Twilio, OpenAI, and other technology providers.
                </p>
                <p>
                  You acknowledge that Aldosia operates independent of these software brands and is not liable for service outages, interface modifications, pricing adjustments, or compliance actions triggered by those third-party providers.
                </p>
              </div>
            </section>

            {/* 8. Service Availability */}
            <section id="service-availability" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-2 font-mono text-[10px] text-sky uppercase tracking-widest">
                <span>Section 08</span>
              </div>
              <h2 className="font-display text-2xl font-700 text-white tracking-tight border-b border-white/5 pb-2">
                8. Service Availability
              </h2>
              <div className="text-white/70 font-sans text-sm md:text-base leading-relaxed space-y-4">
                <p>
                  Aldosia website platforms, backend automations, and booking links are provided on an "as-is" and "as available" basis.
                </p>
                <p>
                  While we strive for a 99.9% uptime record, we do not guarantee uninterrupted execution, constant data transfer, or zero system delays. Occasional maintenance windows, system updates, and ISP failures may impact system operational reach.
                </p>
              </div>
            </section>

            {/* 9. Limitation of Liability */}
            <section id="limitation-of-liability" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-2 font-mono text-[10px] text-sky uppercase tracking-widest">
                <span>Section 09</span>
              </div>
              <h2 className="font-display text-2xl font-700 text-white tracking-tight border-b border-white/5 pb-2">
                9. Limitation of Liability
              </h2>
              <div className="text-white/70 font-sans text-sm md:text-base leading-relaxed space-y-4">
                <p>
                  Pursuant to rules permitted by applicable law, Aldosia and its directors, agents, partners, and programmers shall not be held liable for:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4 text-white/60">
                  <li>Loss of client profits, margins, or savings</li>
                  <li>Loss of business opportunities, operational prospects, or customer leads</li>
                  <li>Indirect, consequential, special, exemplary, or punitive damages</li>
                  <li>Operational disruptions caused by third-party systems or cellular network delays</li>
                  <li>Events beyond our reasonable control (Force Majeure events)</li>
                </ul>
                <p>
                  In no single event shall Aldosia's cumulative liability for any claim regarding our software tools exceed the total amount actively paid by the customer for the specific services during the twelve (12) month period preceding the claim event.
                </p>
              </div>
            </section>

            {/* 10. Indemnification */}
            <section id="indemnification" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-2 font-mono text-[10px] text-sky uppercase tracking-widest">
                <span>Section 10</span>
              </div>
              <h2 className="font-display text-2xl font-700 text-white tracking-tight border-b border-white/5 pb-2">
                10. Indemnification
              </h2>
              <div className="text-white/70 font-sans text-sm md:text-base leading-relaxed space-y-4">
                <p>
                  You agree to defend, indemnify, and hold harmless Aldosia, its employees, parents, subsidiaries, and service affiliates from and against any lawsuits, damages, penalties, losses, legal costs, and demands arising from:
                </p>
                <ul className="list-disc list-inside space-y-1 pl-4">
                  <li>Your misuse of our software interfaces or SMS gateways</li>
                  <li>Your failure to obtain proper opt-in consent from your business leads prior to trigger automation</li>
                  <li>Violations of these Terms of Service or local privacy regulations</li>
                </ul>
              </div>
            </section>

            {/* 11. Termination */}
            <section id="termination" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-2 font-mono text-[10px] text-sky uppercase tracking-widest">
                <span>Section 11</span>
              </div>
              <h2 className="font-display text-2xl font-700 text-white tracking-tight border-b border-white/5 pb-2">
                11. Termination
              </h2>
              <div className="text-white/70 font-sans text-sm md:text-base leading-relaxed space-y-4">
                <p>
                  We reserve the right, without prior notification or liability, to instantly suspend, lock, or fully terminate your user interfaces, database access, and SMS channels for:
                </p>
                <ul className="list-disc list-inside space-y-1 pl-4">
                  <li>Documented violations of these Terms of Service or applicable laws</li>
                  <li>Engaging in fraudulent, abusive, or malicious system behaviors</li>
                  <li>Prolonged outstanding payments or subscription defaults</li>
                </ul>
                <p className="text-xs text-white/50">
                  Following termination, rights, ownership protections, and limitation clauses stated in this policy shall persist.
                </p>
              </div>
            </section>

            {/* 12. Privacy */}
            <section id="privacy" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-2 font-mono text-[10px] text-sky uppercase tracking-widest">
                <span>Section 12</span>
              </div>
              <h2 className="font-display text-2xl font-700 text-white tracking-tight border-b border-white/5 pb-2">
                12. Privacy Policy
              </h2>
              <div className="text-white/70 font-sans text-sm md:text-base leading-relaxed space-y-4">
                <p>
                  Your utilization of our business website and functional software applications is also governed by our comprehensive <strong>Privacy Policy</strong>. 
                </p>
                <p>
                  Please review the Privacy Policy to understand how we secure your contact form submissions, record SMS approvals, and coordinate pipeline databases.
                </p>
                <p>
                  <Link to="/privacy-policy" className="inline-flex items-center gap-1.5 text-sky font-medium hover:underline">
                    Read current Privacy Policy
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7 7M21 12H3" />
                    </svg>
                  </Link>
                </p>
              </div>
            </section>

            {/* 13. Governing Law */}
            <section id="governing-law" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-2 font-mono text-[10px] text-sky uppercase tracking-widest">
                <span>Section 13</span>
              </div>
              <h2 className="font-display text-2xl font-700 text-white tracking-tight border-b border-white/5 pb-2">
                13. Governing Law
              </h2>
              <div className="text-white/70 font-sans text-sm md:text-base leading-relaxed space-y-4">
                <p>
                  These Terms of Service and any conflicts or claims arising from or related to their interpretation shall be governed by, and interpreted in accordance with, the laws of <strong>England and Wales</strong>. 
                </p>
                <p>
                  Both parties agree to submit exclusively to the jurisdiction of the courts of England and Wales to resolve any legal disputes.
                </p>
              </div>
            </section>

            {/* 14. Changes to Terms */}
            <section id="changes-to-terms" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-2 font-mono text-[10px] text-sky uppercase tracking-widest">
                <span>Section 14</span>
              </div>
              <h2 className="font-display text-2xl font-700 text-white tracking-tight border-b border-white/5 pb-2">
                14. Changes to Terms
              </h2>
              <div className="text-white/70 font-sans text-sm md:text-base leading-relaxed space-y-4">
                <p>
                  Aldosia reserves the right to update or modify these Terms of Service at any time. When updates occur, we will post the revised effective date at the top of this document. Continuing to utilize or login to your custom CRM gateways, landing pages, or scheduling APIs represents absolute binding agreement to the amended terms.
                </p>
              </div>
            </section>

            {/* 15. Contact Information */}
            <section id="contact-information" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-2 font-mono text-[10px] text-sky uppercase tracking-widest">
                <span>Section 15</span>
              </div>
              <h2 className="font-display text-2xl font-700 text-white tracking-tight border-b border-white/5 pb-2">
                15. Contact Information
              </h2>
              <div className="text-white/70 font-sans text-sm md:text-base leading-relaxed space-y-4">
                <p>
                  For any questions or suggestions concerning security, compliance, or terms, contact our support team:
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
