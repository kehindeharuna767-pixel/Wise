import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Check } from 'lucide-react';
import { WISE_SELF_SERVICES } from '../data';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [activeTab, setActiveTab] = useState<string>(WISE_SELF_SERVICES[0].id);

  const selectedService = WISE_SELF_SERVICES.find((s) => s.id === activeTab) || WISE_SELF_SERVICES[0];

  return (
    <section id="services" className="py-24 md:py-32 bg-[#F5F2ED] border-y border-[#EAE4DC]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header - Text-light */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#8E4A3B] block mb-2">
              Core Offerings
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#1E1C1A] tracking-tight">
              Therapeutic Services
            </h2>
          </div>
          <p className="text-[#645C53] text-sm sm:text-base max-w-md">
            Targeted therapeutic support tailored to your unique relational and personal circumstances.
          </p>
        </div>

        {/* 4 Cards Grid - Visual First, Text-Light */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WISE_SELF_SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              id={`service-card-${service.id}`}
              className={`group flex flex-col justify-between rounded-2xl bg-[#FAF8F5] border border-[#E5DFD6] overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                activeTab === service.id ? 'ring-1 ring-[#2C2926]' : ''
              }`}
            >
              {/* Card Image */}
              <div className="relative aspect-4/3 overflow-hidden bg-[#E2DCD3]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full bg-[#FAF8F5]/90 backdrop-blur-xs text-[11px] font-semibold text-[#2C2926] shadow-xs">
                    {service.tag}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-display text-2xl text-[#1E1C1A] mb-2 group-hover:text-[#8E4A3B] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#8E4A3B] uppercase tracking-wide mb-3">
                    {service.subtitle}
                  </p>
                  <p className="text-sm text-[#5C564E] leading-relaxed mb-5">
                    {service.description}
                  </p>
                </div>

                {/* Key focus bullet points */}
                <div className="pt-4 border-t border-[#EDE8E1] mb-6 space-y-1.5">
                  {service.highlights.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#6B645C]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8E4A3B] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Card CTA */}
                <button
                  onClick={() => onSelectService(service.title)}
                  id={`book-service-${service.id}`}
                  className="w-full inline-flex items-center justify-between py-2.5 px-4 rounded-xl bg-[#EDE7DF] hover:bg-[#2C2926] text-[#2C2926] hover:text-[#FAF8F5] text-xs font-semibold transition-colors duration-200 cursor-pointer"
                >
                  <span>Book 15-Min Consult</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Reassurance Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#FAF8F5] border border-[#E3DDD4] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#4A7C59]" />
            <p className="text-xs sm:text-sm text-[#4E4841]">
              <span className="font-semibold text-[#1E1C1A]">Unsure which therapy fits your situation?</span> Behnam offers a complimentary 15-minute introductory call to explore your goals with zero obligation.
            </p>
          </div>
          <button
            onClick={() => onSelectService('Introductory Consultation')}
            id="services-banner-cta"
            className="shrink-0 text-xs font-semibold text-[#1E1C1A] hover:text-[#8E4A3B] underline underline-offset-4 cursor-pointer"
          >
            Speak with Behnam →
          </button>
        </div>

      </div>
    </section>
  );
};
