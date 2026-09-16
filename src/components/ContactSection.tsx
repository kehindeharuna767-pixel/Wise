import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MessageSquare, MapPin, Clock, Send, CheckCircle2, ArrowRight } from 'lucide-react';
import { PRACTICE_INFO, WISE_SELF_SERVICES } from '../data';

interface ContactSectionProps {
  onOpenConsultation: () => void;
  prefilledService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenConsultation, prefilledService }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: prefilledService || 'Couples Therapy',
    format: 'Online',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PRACTICE_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#F5F2ED] border-t border-[#EAE4DC]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header - Text-light */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#8E4A3B] block mb-2">
            Get In Touch
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#1E1C1A] tracking-tight mb-4">
            Begin with a Free 15-Minute Consultation
          </h2>
          <p className="text-sm sm:text-base text-[#645C53] leading-relaxed">
            Whether you’re ready to schedule your first session or simply have questions about working together, take the first confidential step today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Practice Info & Direct Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Direct Card: Email */}
              <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E5DFD6] flex items-start justify-between">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#EFEBE4] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#8E4A3B]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#888177] uppercase tracking-wider">Email Behnam</p>
                    <a
                      href={`mailto:${PRACTICE_INFO.email}`}
                      className="text-sm font-medium text-[#1E1C1A] hover:underline"
                    >
                      {PRACTICE_INFO.email}
                    </a>
                    <p className="text-xs text-[#736B62] mt-0.5">Response typically within 24 hours</p>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="text-xs font-medium text-[#736B62] hover:text-[#1E1C1A] px-2.5 py-1 rounded-md bg-[#EDE7DF] hover:bg-[#E2DDD5] transition-colors cursor-pointer shrink-0"
                >
                  {copiedEmail ? 'Copied' : 'Copy'}
                </button>
              </div>

              {/* Direct Card: WhatsApp */}
              <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E5DFD6] flex items-start justify-between">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#E8F0E9] flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5 text-[#2E7D32]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#888177] uppercase tracking-wider">Direct Messaging</p>
                    <p className="text-sm font-medium text-[#1E1C1A]">WhatsApp Message</p>
                    <p className="text-xs text-[#736B62] mt-0.5">Discreet inquiries & booking</p>
                  </div>
                </div>

                <a
                  href={PRACTICE_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#2E7D32] bg-[#E8F0E9] hover:bg-[#D9EAD9] px-3.5 py-1.5 rounded-full transition-colors shrink-0"
                >
                  Chat Now →
                </a>
              </div>

              {/* Practice Location */}
              <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E5DFD6]">
                <div className="flex items-start gap-3.5 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#EFEBE4] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#8E4A3B]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#888177] uppercase tracking-wider">Practice Location</p>
                    <p className="text-sm font-medium text-[#1E1C1A]">{PRACTICE_INFO.address}</p>
                  </div>
                </div>
                <div className="pl-13 text-xs text-[#6B645C] space-y-1">
                  <p className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#8E4A3B]" />
                    <span>{PRACTICE_INFO.availability}</span>
                  </p>
                </div>
              </div>

            </div>

            {/* Quick action button */}
            <div className="pt-8">
              <button
                onClick={onOpenConsultation}
                id="contact-open-modal-btn"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#2C2926] text-[#FAF8F5] text-sm font-semibold py-3.5 px-6 rounded-full hover:bg-[#433E3A] transition-all shadow-sm cursor-pointer"
              >
                <span>Open Instant Booking Calendar</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Lead Capture Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#FAF8F5] border border-[#E5DFD6] shadow-xs">
              
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="w-14 h-14 rounded-full bg-[#E8F0E9] text-[#2E7D32] mx-auto flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl text-[#1E1C1A] mb-2">Message Received</h3>
                  <p className="text-sm text-[#665F56] max-w-md mx-auto mb-6">
                    Thank you, {formData.name}. Behnam personally reviews all inquiries and will be in touch within 24 hours to arrange your consultation.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-semibold text-[#8E4A3B] underline underline-offset-4 cursor-pointer"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} id="contact-form" className="space-y-5">
                  <h3 className="font-display text-2xl text-[#1E1C1A] mb-1">
                    Send a Confidential Inquiry
                  </h3>
                  <p className="text-xs text-[#736B62] mb-6">
                    Your information is held in strict clinical confidentiality.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-[#3C3731] mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#DDD6CC] text-sm text-[#1E1C1A] focus:outline-hidden focus:ring-1 focus:ring-[#2C2926]"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-[#3C3731] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@example.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#DDD6CC] text-sm text-[#1E1C1A] focus:outline-hidden focus:ring-1 focus:ring-[#2C2926]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-[#3C3731] mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Contact number"
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#DDD6CC] text-sm text-[#1E1C1A] focus:outline-hidden focus:ring-1 focus:ring-[#2C2926]"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-xs font-semibold text-[#3C3731] mb-1.5">
                        Service of Interest
                      </label>
                      <select
                        id="service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#DDD6CC] text-sm text-[#1E1C1A] focus:outline-hidden focus:ring-1 focus:ring-[#2C2926]"
                      >
                        {WISE_SELF_SERVICES.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#3C3731] mb-1.5">
                      Preferred Session Format
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {['In-Person (Chorlton)', 'Online (UK-wide)'].map((fmt) => (
                        <button
                          key={fmt}
                          type="button"
                          onClick={() => setFormData({ ...formData, format: fmt })}
                          className={`py-2 px-3 rounded-xl text-xs font-medium border text-center transition-all cursor-pointer ${
                            formData.format === fmt
                              ? 'bg-[#2C2926] text-[#FAF8F5] border-[#2C2926]'
                              : 'bg-white border-[#DDD6CC] text-[#554E46] hover:bg-[#F3EFE9]'
                          }`}
                        >
                          {fmt}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-[#3C3731] mb-1.5">
                      Brief Message or Preferred Consultation Times (Optional)
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share a few words about what brings you to therapy..."
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#DDD6CC] text-sm text-[#1E1C1A] focus:outline-hidden focus:ring-1 focus:ring-[#2C2926] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    id="submit-contact-btn"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#2C2926] text-[#FAF8F5] text-sm font-semibold py-3 px-6 rounded-full hover:bg-[#433E3A] transition-colors cursor-pointer shadow-xs"
                  >
                    <Send className="w-4 h-4" />
                    <span>Request Free 15-Minute Consultation</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
