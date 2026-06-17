import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    businessName: '',
    serviceInterestedIn: 'Website',
    message: '',
    smsConsent: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
      if (checked) {
        setErrors(prev => {
          const next = { ...prev };
          delete next.smsConsent;
          return next;
        });
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
      if (errors[name]) {
        setErrors(prev => {
          const next = { ...prev };
          delete next[name];
          return next;
        });
      }
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
      }
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required';
    } else {
      // Simple format check for numbers and + sign, 8 to 20 digits
      const phoneRegex = /^[\s()+-]*([0-9][\s()+-]*){8,20}$/;
      if (!phoneRegex.test(formData.phone)) {
        newErrors.phone = 'Please enter a valid phone number';
      }
    }

    if (!formData.businessName.trim()) {
      newErrors.businessName = 'Business Name is required';
    }

    if (!formData.smsConsent) {
      newErrors.smsConsent = 'You must agree to receive SMS communications to submit this form.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    const consentText = "By checking this box, I agree to receive SMS messages from Aldosia regarding my inquiry, appointments, reminders, and service-related follow-up. Message frequency varies. Reply STOP to opt out and HELP for help. Message and data rates may apply.";

    const payload = {
      full_name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      business_name: formData.businessName,
      service_interested_in: formData.serviceInterestedIn,
      message: formData.message,
      sms_consent: formData.smsConsent,
      consent_text: consentText,
      consent_timestamp: new Date().toISOString(),
      source: "Aldosia Contact Form",
      page_url: window.location.href
    };

    try {
      let isSuccess = false;
      let msg = "";

      // 1. Try sending to server-side API first
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });

        const contentType = response.headers.get('content-type') || '';
        if (response.ok && contentType.includes('application/json')) {
          const data = await response.json();
          if (data.success) {
            isSuccess = true;
            msg = data.message || "Thank you. Your message has been received and we’ll contact you shortly.";
          } else {
            msg = data.message || "Something went wrong. Please try again.";
          }
        } else {
          throw new Error("Local API endpoint not available or returned non-JSON. Falling back to direct submission.");
        }
      } catch (localErr) {
        console.warn("Local API failed, attempting direct GoHighLevel webhook submission:", localErr);
        
        // 2. Direct client-side webhook fallback
        const ghlWebhookUrl = "https://services.leadconnectorhq.com/hooks/nDM0WWTnUfiKBHf3zTKU/webhook-trigger/3fbd06a4-56b0-4a2d-89b6-49ea7a61c5a9";
        const directResponse = await fetch(ghlWebhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload)
        });

        if (directResponse.ok) {
          isSuccess = true;
          msg = "Thank you. Your message has been received and we’ll contact you shortly.";
        } else {
          const errText = await directResponse.text();
          throw new Error(`Direct submission failed with status ${directResponse.status}: ${errText}`);
        }
      }

      if (isSuccess) {
        setSubmitStatus('success');
        setStatusMessage(msg || "Thank you. Your message has been received and we’ll contact you shortly.");
        // Reset form
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          businessName: '',
          serviceInterestedIn: 'Website',
          message: '',
          smsConsent: false
        });
      } else {
        setSubmitStatus('error');
        setStatusMessage(msg || "Something went wrong while submitting. Please try again.");
      }
    } catch (err: any) {
      console.error("Submission error:", err);
      setSubmitStatus('error');
      setStatusMessage(`Unable to submit your inquiry: ${err.message || err}. Please try again.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const serviceOptions = [
    'Website',
    'CRM',
    'AI Automation',
    'Appointment Booking',
    'Missed Call Text Back',
    'Complete Growth System'
  ];

  return (
    <div className="glass-card p-6 md:p-10 rounded-2xl border border-white/10 shadow-2xl relative">
      {submitStatus === 'success' ? (
        <div className="text-center py-10 px-4">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-sky/15 text-sky rounded-full mb-6">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <h3 className="font-display font-700 text-2xl text-white mb-3">Submission Received!</h3>
          <p className="font-sans font-400 text-white/70 max-w-md mx-auto leading-relaxed">
            {statusMessage}
          </p>
          <button 
            type="button"
            onClick={() => setSubmitStatus('idle')}
            className="mt-8 px-6 py-2.5 border border-white/10 rounded-full text-white/80 font-display font-600 text-sm hover:bg-white/5 hover:text-white transition-all cursor-pointer"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {submitStatus === 'error' && (
            <div className="p-4 bg-red-950/40 border border-red-500/20 text-red-200 text-sm rounded-xl flex items-start gap-3">
              <svg className="w-5 h-5 text-red-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
              </svg>
              <span>{statusMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Full Name */}
            <div className="flex flex-col">
              <label htmlFor="fullName" className="font-mono text-[10px] text-white/50 uppercase tracking-widest mb-2 label-text">
                Full Name <span className="text-sky">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="E.g., John Doe"
                disabled={isSubmitting}
                className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-white/20 focus:outline-none focus:border-sky/50 transition-colors text-sm"
              />
              {errors.fullName && (
                <span className="text-red-400 text-xs mt-1.5 font-mono">{errors.fullName}</span>
              )}
            </div>

            {/* Business Name */}
            <div className="flex flex-col">
              <label htmlFor="businessName" className="font-mono text-[10px] text-white/50 uppercase tracking-widest mb-2 label-text">
                Business Name <span className="text-sky">*</span>
              </label>
              <input
                type="text"
                id="businessName"
                name="businessName"
                value={formData.businessName}
                onChange={handleChange}
                placeholder="My Company Ltd"
                disabled={isSubmitting}
                className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-white/20 focus:outline-none focus:border-sky/50 transition-colors text-sm"
              />
              {errors.businessName && (
                <span className="text-red-400 text-xs mt-1.5 font-mono">{errors.businessName}</span>
              )}
            </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Email Address */}
            <div className="flex flex-col">
              <label htmlFor="email" className="font-mono text-[10px] text-white/50 uppercase tracking-widest mb-2 label-text">
                Email Address <span className="text-sky">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                disabled={isSubmitting}
                className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-white/20 focus:outline-none focus:border-sky/50 transition-colors text-sm"
              />
              {errors.email && (
                <span className="text-red-400 text-xs mt-1.5 font-mono">{errors.email}</span>
              )}
            </div>

            {/* Phone Number */}
            <div className="flex flex-col">
              <label htmlFor="phone" className="font-mono text-[10px] text-white/50 uppercase tracking-widest mb-2 label-text">
                Phone Number <span className="text-sky">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+44 7123 456789"
                disabled={isSubmitting}
                className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-white/20 focus:outline-none focus:border-sky/50 transition-colors text-sm"
              />
              {errors.phone && (
                <span className="text-red-400 text-xs mt-1.5 font-mono">{errors.phone}</span>
              )}
            </div>

          </div>

          {/* Service Interested In Dropdown */}
          <div className="flex flex-col">
            <label htmlFor="serviceInterestedIn" className="font-mono text-[10px] text-white/50 uppercase tracking-widest mb-2 label-text">
              Service Interested In
            </label>
            <div className="relative">
              <select
                id="serviceInterestedIn"
                name="serviceInterestedIn"
                value={formData.serviceInterestedIn}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-full px-4 py-3 bg-[#0A0A0A] border border-white/10 rounded-xl text-white focus:outline-none focus:border-sky/50 transition-colors text-sm appearance-none cursor-pointer"
              >
                {serviceOptions.map(option => (
                  <option key={option} value={option} className="bg-ink">
                    {option}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-white/50">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label htmlFor="message" className="font-mono text-[10px] text-white/50 uppercase tracking-widest mb-2 label-text">
              Message (Optional)
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder="Tell us about your requirements..."
              disabled={isSubmitting}
              className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-white/20 focus:outline-none focus:border-sky/50 transition-colors text-sm resize-none"
            />
          </div>

          {/* SMS Consent Checkbox */}
          <div className="flex flex-col">
            <div className="flex items-start gap-3 mt-2">
              <input
                type="checkbox"
                id="smsConsent"
                name="smsConsent"
                checked={formData.smsConsent}
                onChange={handleChange}
                disabled={isSubmitting}
                className="mt-1 w-4 h-4 shrink-0 accent-sky rounded border-white/10 focus:ring-0 cursor-pointer"
              />
              <label htmlFor="smsConsent" className="text-white/60 text-xs leading-relaxed cursor-pointer select-none">
                By checking this box, I agree to receive SMS messages from Aldosia regarding my inquiry, appointments, reminders, and service-related follow-up. Message frequency varies. Reply STOP to opt out and HELP for help. Message and data rates may apply. <span className="text-sky font-bold">*</span>
              </label>
            </div>
            {errors.smsConsent && (
              <span className="text-red-400 text-xs mt-1.5 font-mono ml-7">{errors.smsConsent}</span>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-sky text-ink font-display font-700 rounded-full hover:brightness-110 active:scale-[0.98] transition-all disabled:opacity-50 disabled:scale-100 flex items-center justify-center gap-2 cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-ink" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Sending Inquiry...
                </>
              ) : (
                'Submit Inquiry'
              )}
            </button>
          </div>

        </form>
      )}
    </div>
  );
}
