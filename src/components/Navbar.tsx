import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone, MessageSquare } from 'lucide-react';
import { PRACTICE_INFO } from '../data';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About Behnam', href: '#about' },
    { label: 'Approach', href: '#approach' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF8F5]/90 backdrop-blur-md shadow-xs border-b border-[#EBE6DF]'
          : 'bg-transparent py-2'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#home"
            id="brand-logo-link"
            className="flex items-center gap-3 group focus:outline-hidden"
          >
            <img
              src="/images/logo.png"
              alt="Wise Self Psychotherapy Logo"
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-102"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-sm font-medium text-[#4A453F] hover:text-[#1A1816] transition-colors duration-200 tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA & Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`mailto:${PRACTICE_INFO.email}`}
              className="text-xs font-medium text-[#6B645C] hover:text-[#2C2926] transition-colors py-2 px-3 rounded-md hover:bg-[#EFECE6]"
              title="Email Behnam directly"
            >
              {PRACTICE_INFO.email}
            </a>
            <button
              onClick={onOpenConsultation}
              id="header-consultation-btn"
              className="inline-flex items-center gap-2 bg-[#2C2926] text-[#FAF8F5] text-xs font-semibold px-5 py-2.5 rounded-full hover:bg-[#433E3A] transition-all duration-200 shadow-xs cursor-pointer"
            >
              <span>Book Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle-btn"
            className="md:hidden p-2.5 rounded-lg text-[#2C2926] hover:bg-[#EFECE6] focus:outline-hidden transition-colors"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden bg-[#FAF8F5] border-b border-[#E8E2D9] px-6 py-6 shadow-xl animate-in slide-in-from-top-2 duration-200"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#2C2926] hover:text-[#7C3A2D] py-1 border-b border-[#F0EBE3] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                id="mobile-consultation-btn"
                className="w-full flex items-center justify-center gap-2 bg-[#2C2926] text-[#FAF8F5] text-sm font-semibold py-3 px-5 rounded-full hover:bg-[#433E3A] transition-colors shadow-xs"
              >
                <span>Book a Free 15-Min Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <div className="flex items-center justify-between text-xs text-[#6B645C] pt-2 px-1">
                <span>Chorlton, Manchester & Online</span>
                <a href={PRACTICE_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[#2C2926] font-medium hover:underline">
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
