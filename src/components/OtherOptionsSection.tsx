import React from 'react';
import { motion } from 'motion/react';
import { GlassWater, Sparkles } from 'lucide-react';
import { BEVERAGES, LINKS } from '../data/constants';

interface OtherOptionsSectionProps {
  onOpenOrderModal?: () => void;
}

export const OtherOptionsSection: React.FC<OtherOptionsSectionProps> = ({
  onOpenOrderModal,
}) => {
  return (
    <section
      id="beverages-section"
      className="relative py-16 sm:py-20 px-5 bg-[#F8F8F6] border-t border-[#ECEAE5]"
    >
      <div className="max-w-3xl w-full mx-auto text-center">
        {/* Subtle pill label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-white border border-[#E8E6E1] text-[11px] font-semibold tracking-wider text-[#73655C] uppercase shadow-xs"
        >
          <GlassWater className="w-3 h-3 text-[#C5A880]" />
          <span>Para Acompanhar</span>
        </motion.div>

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-[#221E1C] mb-3"
        >
          E tem muito mais sabor esperando por você.
        </motion.h2>

        {/* Section Exact Text */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-sm sm:text-base text-[#6E645D] max-w-xl mx-auto mb-8 font-normal leading-relaxed"
        >
          Além das nossas lasanhas, você também encontra bebidas em lata para
          acompanhar sua refeição.
        </motion.p>

        {/* Exactly the 3 requested drinks */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 max-w-2xl mx-auto">
          {BEVERAGES.map((bev, idx) => (
            <motion.div
              key={bev.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
              className="flex items-center justify-between sm:flex-col sm:justify-center p-4 sm:p-5 rounded-2xl bg-white border border-[#EBE8E2] shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:border-[#D5CFC5] transition-all duration-300"
            >
              <div className="flex items-center gap-3 sm:flex-col sm:gap-2">
                <div className="w-9 h-9 rounded-xl bg-[#F4F2ED] flex items-center justify-center text-[#4A3F38]">
                  <GlassWater className="w-4 h-4" />
                </div>
                <div className="text-left sm:text-center">
                  <h3 className="font-medium text-sm sm:text-base text-[#221E1C]">
                    {bev.name}
                  </h3>
                  <span className="text-[11px] uppercase tracking-wider text-[#8F8177] font-semibold">
                    {bev.type}
                  </span>
                </div>
              </div>

              {onOpenOrderModal ? (
                <button
                  type="button"
                  onClick={onOpenOrderModal}
                  className="text-xs font-semibold text-[#685B53] hover:text-[#221E1C] underline-offset-4 hover:underline sm:mt-3 cursor-pointer"
                >
                  Pedir
                </button>
              ) : (
                <a
                  href={LINKS.ifood}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#685B53] hover:text-[#221E1C] underline-offset-4 hover:underline sm:mt-3"
                >
                  Pedir
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
