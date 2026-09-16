import React from 'react';
import { ArrowUp, ShieldCheck, Mail, MapPin, MessageSquare } from 'lucide-react';
import { PRACTICE_INFO } from '../data';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#24211E] text-[#FAF8F5] pt-20 pb-12 border-t border-[#38332F]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <img
              src="/images/logo-light.png"
              alt="Wise Self Psychotherapy Logo"
              className="h-10 w-auto object-contain mb-6 brightness-110"
            />
            <p className="font-display text-lg text-[#DCD5CB] mb-4 max-w-sm">
              Where healing, clarity, and meaningful change begin.
            </p>
            <p className="text-xs text-[#A89F93] leading-relaxed max-w-md mb-6">
              Wise Self provides specialised relationship, couples, and individual psychotherapy led by Behnam Abdevand, MBACP. Sessions available in-person in Chorlton, South Manchester, and securely online UK-wide.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#DCD5CB] bg-[#332F2B] px-3 py-1.5 rounded-lg border border-[#443F39]">
              <ShieldCheck className="w-4 h-4 text-[#C47D6F]" />
              <span>Registered Member MBACP • Ethical Practice</span>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C47D6F] mb-4">
              Therapy Services
            </h4>
            <ul className="space-y-2.5 text-xs text-[#DCD5CB]">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Couples Therapy (Imago)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Individual Psychotherapy
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Group Therapy Cohorts
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Relationship Workshops
                </a>
              </li>
              <li>
                <a href="#approach" className="hover:text-white transition-colors">
                  Transactional Analysis (TA)
                </a>
              </li>
              <li>
                <a href="#approach" className="hover:text-white transition-colors">
                  Family Systems Approach
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Location Column */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C47D6F] mb-4">
              Practice Details
            </h4>
            <ul className="space-y-3 text-xs text-[#DCD5CB]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C47D6F] shrink-0 mt-0.5" />
                <span>{PRACTICE_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C47D6F] shrink-0" />
                <a href={`mailto:${PRACTICE_INFO.email}`} className="hover:text-white transition-colors">
                  {PRACTICE_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-[#C47D6F] shrink-0" />
                <a
                  href={PRACTICE_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp Consultation Inquiry
                </a>
              </li>
              <li className="pt-2 text-[11px] text-[#A39A8D]">
                Consultations and therapy sessions strictly by appointment.
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#38332F] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A8175]">
          <div>
            © {new Date().getFullYear()} Wise Self Ltd. All rights reserved. Registered in England & Wales.
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-[#DCD5CB] transition-colors cursor-pointer">
              Privacy & Confidentiality
            </span>
            <span className="hover:text-[#DCD5CB] transition-colors cursor-pointer">
              BACP Code of Ethics
            </span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-[#DCD5CB] hover:text-white transition-colors cursor-pointer ml-2"
              aria-label="Back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
