import React from 'react';
import { motion } from 'motion/react';
import { APPROACHES } from '../data';
import { Sparkles, MessageCircleHeart, Users, GitBranch, Layers } from 'lucide-react';

export const Approach: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'imago':
        return <MessageCircleHeart className="w-5 h-5 text-[#8E4A3B]" />;
      case 'transactional-analysis':
        return <Layers className="w-5 h-5 text-[#8E4A3B]" />;
      case 'family-systems':
        return <GitBranch className="w-5 h-5 text-[#8E4A3B]" />;
      case 'integrative':
        return <Sparkles className="w-5 h-5 text-[#8E4A3B]" />;
      default:
        return <Users className="w-5 h-5 text-[#8E4A3B]" />;
    }
  };

  return (
    <section id="approach" className="py-24 md:py-32 bg-[#F5F2ED] border-y border-[#EAE4DC]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header - Text-light */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#8E4A3B] block mb-2">
            Clinical Methodology
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#1E1C1A] tracking-tight mb-4">
            Therapeutic Approach
          </h2>
          <p className="text-sm sm:text-base text-[#645C53] leading-relaxed">
            Evidence-based psychotherapeutic frameworks integrated to transform communication, decode hidden patterns, and cultivate relational safety.
          </p>
        </div>

        {/* 4 Cards Grid - Clean & Text-Light */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {APPROACHES.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              id={`approach-card-${item.id}`}
              className="p-7 rounded-2xl bg-[#FAF8F5] border border-[#E5DFD6] flex flex-col justify-between hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#EFEBE4] flex items-center justify-center">
                    {getIcon(item.id)}
                  </div>
                  <span className="text-xs font-mono font-medium text-[#A39B8F]">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl text-[#1E1C1A] mb-1">
                  {item.title}
                </h3>
                <p className="text-xs font-semibold text-[#8E4A3B] uppercase tracking-wider mb-4">
                  {item.subtitle}
                </p>
                <p className="text-sm text-[#5C564E] leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#EDE7DF] flex items-center justify-between text-xs">
                <span className="text-[#888177]">Outcome:</span>
                <span className="font-medium text-[#2C2926] bg-[#EDE8E0] px-2.5 py-0.5 rounded-full">
                  {item.keyBenefit}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
