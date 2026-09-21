import React from 'react';
import { motion } from 'motion/react';
import { GlassWater, Sparkles, Plus } from 'lucide-react';
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
      className="relative py-20 sm:py-24 px-5 bg-transparent border-t border-[#201C1A]/5"
    >
      <div className="max-w-4xl w-full mx-auto text-center">
        {/* 3D Pill Label */}
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-white/90 border-t border-t-white border-b border-b-[#DDD2C4] border-x border-white/60 text-[11px] font-bold tracking-widest text-[#6E5E54] uppercase shadow-[0_6px_16px_rgba(60,45,30,0.06),inset_0_1px_1px_rgba(255,255,255,0.95)]"
        >
          <GlassWater className="w-3.5 h-3.5 text-[#C5A880]" />
          <span>Para Acompanhar</span>
        </motion.div>

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-[#221E1C] mb-3.5"
        >
          E tem muito mais sabor esperando por você.
        </motion.h2>

        {/* Section Exact Text */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-sm sm:text-base text-[#6E635B] max-w-xl mx-auto mb-10 font-normal leading-relaxed px-4"
        >
          Além das nossas lasanhas, você também encontra bebidas em lata para
          acompanhar sua refeição.
        </motion.p>

        {/* Exactly the 3 requested drinks in 3D tactile cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 max-w-2xl mx-auto">
          {BEVERAGES.map((bev, idx) => (
            <motion.div
              key={bev.id}
              initial={{ opacity: 0, y: 22, rotateX: 6 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.15 + idx * 0.1 }}
              className="card-3d flex items-center justify-between sm:flex-col sm:justify-center p-5 sm:p-6 rounded-2xl group"
            >
              <div className="flex items-center gap-3 sm:flex-col sm:gap-2.5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-white to-[#EDE5D8] border-t border-t-white border-b-2 border-b-[#D8CEBF] flex items-center justify-center text-[#4A3F38] shadow-md group-hover:scale-110 transition-transform">
                  <GlassWater className="w-5 h-5 text-[#8C7A6D]" />
                </div>
                <div className="text-left sm:text-center">
                  <h3 className="font-semibold text-sm sm:text-base text-[#221E1C]">
                    {bev.name}
                  </h3>
                  <span className="text-[11px] uppercase tracking-wider text-[#9E8F83] font-bold">
                    {bev.type}
                  </span>
                </div>
              </div>

              {onOpenOrderModal ? (
                <button
                  type="button"
                  onClick={onOpenOrderModal}
                  className="sm:mt-4 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/90 hover:bg-[#382F2A] hover:text-white border border-[#E0D7CB] text-xs font-bold text-[#5C4F46] shadow-xs hover:shadow-md transition-all cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Pedir</span>
                </button>
              ) : (
                <a
                  href={LINKS.ifood}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sm:mt-4 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/90 hover:bg-[#382F2A] hover:text-white border border-[#E0D7CB] text-xs font-bold text-[#5C4F46] shadow-xs hover:shadow-md transition-all"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Pedir</span>
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
