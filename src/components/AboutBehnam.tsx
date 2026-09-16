import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Award, CheckCircle2, HeartHandshake } from 'lucide-react';
import { PRACTICE_INFO } from '../data';

interface AboutBehnamProps {
  onOpenConsultation: () => void;
}

export const AboutBehnam: React.FC<AboutBehnamProps> = ({ onOpenConsultation }) => {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Authentic Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Portrait Container */}
              <div className="rounded-2xl overflow-hidden bg-[#ECE6DD] border border-[#E0D9CE] shadow-md aspect-4/5">
                <img
                  src="/images/behnam.webp"
                  alt="Behnam Abdevand, Psychotherapist MBACP at Wise Self"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>

              {/* Experience Badge */}
              <div className="absolute -bottom-6 -right-4 sm:right-6 bg-[#2C2926] text-[#FAF8F5] p-4 rounded-xl shadow-xl flex items-center gap-3">
                <Award className="w-6 h-6 text-[#D5A021] shrink-0" />
                <div>
                  <p className="text-sm font-bold leading-none">10+ Years</p>
                  <p className="text-[11px] text-[#C2BBB0] mt-0.5">Clinical Practice</p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Concise About Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-[#8E4A3B] block mb-3">
              About Your Therapist
            </span>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#1E1C1A] tracking-tight mb-4">
              Behnam Abdevand, Psychotherapist
            </h2>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#EFECE6] text-xs font-medium text-[#4A453F] mb-6">
              <span className="font-semibold text-[#1E1C1A]">MBACP Registered</span>
              <span>•</span>
              <span>Chorlton & Online</span>
            </div>

            {/* Core Message - Short & Impactful */}
            <blockquote className="border-l-2 border-[#8E4A3B] pl-4 italic font-display text-xl sm:text-2xl text-[#2C2926] mb-6">
              "You are not broken. You are becoming."
            </blockquote>

            <p className="text-base text-[#524B43] leading-relaxed mb-4">
              For over a decade, I have helped couples and individuals navigate difficult emotional landscapes, resolve painful miscommunication, and rebuild lasting trust.
            </p>

            <p className="text-sm text-[#665F56] leading-relaxed mb-8">
              My practice is grounded in deep presence, non-judgmental empathy, and actionable frameworks — blending Imago Relationship Therapy, Transactional Analysis, and Family Systems to uncover the root dynamics beneath repetitive conflict.
            </p>

            {/* Key Qualifications Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-8 pt-4 border-t border-[#EAE4DC]">
              <div className="flex items-center gap-2.5 text-xs text-[#3E3832]">
                <CheckCircle2 className="w-4 h-4 text-[#8E4A3B] shrink-0" />
                <span>Registered Member MBACP</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#3E3832]">
                <CheckCircle2 className="w-4 h-4 text-[#8E4A3B] shrink-0" />
                <span>Imago Relationship Therapist</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#3E3832]">
                <CheckCircle2 className="w-4 h-4 text-[#8E4A3B] shrink-0" />
                <span>Transactional Analysis (TA) Practitioner</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#3E3832]">
                <CheckCircle2 className="w-4 h-4 text-[#8E4A3B] shrink-0" />
                <span>Master NLP Practitioner</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenConsultation}
                id="about-meet-behnam-btn"
                className="inline-flex items-center gap-2 bg-[#2C2926] text-[#FAF8F5] text-sm font-semibold px-6 py-3 rounded-full hover:bg-[#433E3A] transition-all shadow-xs cursor-pointer group"
              >
                <span>Book a Consultation with Behnam</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
              
              <a
                href={`mailto:${PRACTICE_INFO.email}`}
                className="text-xs font-semibold text-[#5A534B] hover:text-[#1E1C1A] px-4 py-3 rounded-full hover:bg-[#EFECE6] transition-colors"
              >
                Ask a Question →
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
