import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Clock, MapPin, Sparkles } from 'lucide-react';
import { PRACTICE_INFO } from '../data';

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-44 lg:pb-32 overflow-hidden bg-[#FAF8F5]"
    >
      {/* Subtle organic ambient background tint */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40">
        <div className="absolute -top-32 right-1/4 w-96 h-96 rounded-full bg-[#EFE8DF] blur-3xl" />
        <div className="absolute top-1/2 -left-20 w-80 h-80 rounded-full bg-[#F3EFEA] blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Accreditation Badge */}
            <div
              id="hero-badge"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0EBE3] border border-[#E3DBD0] text-[#524B43] text-xs font-semibold tracking-wide uppercase mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#8E4A3B]" />
              <span>Psychotherapy & Relationship Counselling</span>
            </div>

            {/* Main Headline */}
            <h1
              id="hero-headline"
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[64px] leading-[1.08] tracking-tight text-[#1E1C1A] mb-6"
            >
              Therapy for better relationships and meaningful change.
            </h1>

            {/* Short Supporting Line */}
            <p
              id="hero-subtext"
              className="text-base sm:text-lg text-[#5A544C] leading-relaxed max-w-xl mb-9 font-normal"
            >
              A calm, confidential space in Chorlton and online to untangle conflict, rebuild trust, and rediscover genuine connection — guided by Behnam Abdevand, MBACP.
            </p>

            {/* Primary & Secondary Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={onOpenConsultation}
                id="hero-primary-cta"
                className="inline-flex items-center justify-center gap-2.5 bg-[#2C2926] text-[#FAF8F5] text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-[#433E3A] transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer group"
              >
                <span>Book a Free 15-Minute Consultation</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </button>

              <a
                href="#services"
                id="hero-secondary-link"
                className="inline-flex items-center justify-center gap-2 text-sm font-medium text-[#4A453F] hover:text-[#1E1C1A] px-5 py-3.5 rounded-full hover:bg-[#EFECE6] transition-colors"
              >
                <span>Explore Services</span>
              </a>
            </div>

            {/* Trust Metrics / Micro Indicators */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 border-t border-[#E8E2D8] w-full max-w-lg">
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-[#2C2926] font-semibold text-sm">
                  <ShieldCheck className="w-4 h-4 text-[#8E4A3B]" />
                  <span>MBACP</span>
                </div>
                <span className="text-xs text-[#736B62] mt-0.5">Registered Member</span>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-[#2C2926] font-semibold text-sm">
                  <Clock className="w-4 h-4 text-[#8E4A3B]" />
                  <span>10+ Years</span>
                </div>
                <span className="text-xs text-[#736B62] mt-0.5">Clinical Practice</span>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-[#2C2926] font-semibold text-sm">
                  <MapPin className="w-4 h-4 text-[#8E4A3B]" />
                  <span>Chorlton & Online</span>
                </div>
                <span className="text-xs text-[#736B62] mt-0.5">Manchester, UK</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual Photography */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual Frame */}
              <div className="relative rounded-2xl overflow-hidden bg-[#E8E3DC] shadow-lg border border-[#E2DDD5] aspect-4/5">
                <img
                  src="/images/couples.jpg"
                  alt="Couples therapy and relationship connection session at Wise Self"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 hover:scale-103"
                  loading="eager"
                />
                
                {/* Soft gradient overlay on bottom of image */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1A18]/60 via-transparent to-transparent pointer-events-none" />

                {/* Bottom Card Annotation */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#FAF8F5]/95 backdrop-blur-md border border-white/60 shadow-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-[#8E4A3B] uppercase tracking-wider">Couples & Individual</p>
                      <p className="text-sm font-medium text-[#2C2926]">Safe dialogue for lasting relational repair</p>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-[#2C2926] text-[#FAF8F5] flex items-center justify-center shrink-0 ml-3">
                      <Sparkles className="w-4 h-4 text-[#FAF8F5]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Therapist Badge */}
              <div className="hidden sm:flex absolute -bottom-5 -left-6 items-center gap-3 p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E2DDD5] shadow-lg max-w-xs">
                <img
                  src="/images/behnam.webp"
                  alt="Behnam Abdevand, Psychotherapist"
                  className="w-12 h-12 rounded-full object-cover border border-[#D5CEC4]"
                />
                <div>
                  <p className="text-xs font-semibold text-[#2C2926]">Behnam Abdevand</p>
                  <p className="text-[11px] text-[#6E665D]">Psychotherapist, MBACP</p>
                  <p className="text-[10px] text-[#8E4A3B] font-medium">Free 15-Min Consultations</p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
