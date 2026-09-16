import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-[#FAF8F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#8E4A3B] block mb-2">
              Real Experiences
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#1E1C1A] tracking-tight">
              Client Testimonials
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={prevTestimonial}
              id="prev-testimonial-btn"
              className="w-11 h-11 rounded-full border border-[#DCD5CB] flex items-center justify-center text-[#2C2926] hover:bg-[#EFECE6] transition-colors cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              id="next-testimonial-btn"
              className="w-11 h-11 rounded-full border border-[#DCD5CB] flex items-center justify-center text-[#2C2926] hover:bg-[#EFECE6] transition-colors cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Featured Testimonial Hero Slider Box */}
        <div className="relative rounded-3xl bg-[#F4F0EA] border border-[#E5DFD6] p-8 sm:p-12 md:p-16 shadow-xs min-h-[340px] flex flex-col justify-between">
          <Quote className="w-12 h-12 text-[#D2C8BA] mb-6" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="flex-1 flex flex-col justify-between"
            >
              <blockquote className="font-display text-xl sm:text-2xl md:text-3xl text-[#1E1C1A] leading-relaxed mb-8 max-w-4xl">
                "{current.quote}"
              </blockquote>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-[#E5DFD6]">
                <div>
                  <h4 className="font-semibold text-base text-[#1E1C1A]">
                    {current.author}
                  </h4>
                  <p className="text-xs text-[#736B62]">
                    {current.role}
                  </p>
                </div>

                <div className="inline-flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#E8E2D8] text-xs font-medium text-[#48423B]">
                    {current.tag}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2 mt-8 justify-center">
            {TESTIMONIALS.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx ? 'w-8 bg-[#2C2926]' : 'w-2 bg-[#D1C9BC] hover:bg-[#A89E90]'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
