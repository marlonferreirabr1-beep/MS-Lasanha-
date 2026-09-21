import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, ShoppingBag, Sparkles } from 'lucide-react';
import { BRAND } from '../data/constants';

interface HeroSectionProps {
  onOrderClick: () => void;
  onScrollDown: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOrderClick,
  onScrollDown,
}) => {
  return (
    <section
      id="hero-section"
      className="relative min-h-[92vh] sm:min-h-screen flex flex-col items-center justify-between px-6 py-12 sm:py-16 text-center select-none overflow-hidden bg-transparent"
    >
      {/* 3D Radiant Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] sm:w-[580px] h-[380px] sm:h-[580px] bg-gradient-to-br from-[#FFF8EE]/80 via-[#EDE2D2]/40 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Top 3D Embossed Luxury Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/85 border-t border-t-white border-b border-b-[#D8CEBF] border-x border-white/60 shadow-[0_8px_20px_rgba(60,45,30,0.06),inset_0_1px_1px_rgba(255,255,255,0.95)] backdrop-blur-md"
      >
        <span className="w-2 h-2 rounded-full bg-[#C5A880] shadow-[0_0_8px_rgba(197,168,128,0.9)] animate-pulse" />
        <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#5C4F46] uppercase">
          Gastronomia Artesanal • Maceió
        </span>
        <Sparkles className="w-3 h-3 text-[#C5A880]" />
      </motion.div>

      {/* Centerpiece: Official Big Logo with 3D Floating Motion & Specular Shadows */}
      <div className="flex-1 flex flex-col items-center justify-center max-w-2xl w-full my-6 sm:my-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.88, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full flex flex-col items-center justify-center py-2"
        >
          {/* 3D Floating container with subtle levitation */}
          <motion.div
            animate={{
              y: [-6, 6, -6],
              rotateZ: [-0.4, 0.4, -0.4],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative group max-w-[290px] xs:max-w-[340px] sm:max-w-[420px] md:max-w-[480px] w-full px-3"
          >
            {/* Soft 3D volumetric ground reflection shadow beneath the logo */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[70%] h-6 bg-radial from-[#382F2A]/15 to-transparent blur-md pointer-events-none rounded-full" />

            <img
              src={BRAND.logo}
              alt="MS Lasanha Logo Oficial"
              className="w-full h-auto object-contain drop-shadow-[0_20px_35px_rgba(45,35,25,0.18)] transition-all duration-700 hover:scale-[1.03] hover:drop-shadow-[0_25px_45px_rgba(45,35,25,0.25)]"
              loading="eager"
            />
          </motion.div>
        </motion.div>

        {/* Tagline with cinematic typographic reveal */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
          className="mt-6 sm:mt-8 font-serif text-xl xs:text-2xl sm:text-3xl md:text-[32px] font-medium tracking-tight text-[#221E1C] max-w-lg mx-auto leading-snug px-4 drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]"
        >
          &ldquo;{BRAND.tagline}&rdquo;
        </motion.p>

        {/* Primary 3D Action Button: "PEDIR AGORA" with tactile relief */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: 'easeOut' }}
          className="mt-8 sm:mt-10 w-full flex justify-center"
        >
          <button
            id="hero-order-button"
            onClick={onOrderClick}
            type="button"
            className="btn-3d-primary group inline-flex items-center justify-center gap-3.5 px-9 sm:px-12 py-4 sm:py-5 rounded-2xl text-[#FAF8F5] text-sm sm:text-base font-bold tracking-wider uppercase cursor-pointer overflow-hidden"
          >
            {/* Dynamic specular light reflection sheen sweeping across */}
            <span className="absolute -inset-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

            <ShoppingBag className="w-5 h-5 text-[#E2D2BE] transition-transform duration-300 group-hover:scale-115" />
            <span className="relative z-10">PEDIR AGORA</span>
          </button>
        </motion.div>
      </div>

      {/* Discreet 3D Down Arrow Indication to guide scrolling */}
      <motion.button
        id="scroll-indicator-button"
        onClick={onScrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="flex flex-col items-center gap-2 text-[#7A6D65] hover:text-[#221E1C] transition-colors cursor-pointer pt-2 group"
        aria-label="Rolar para ver opções de pedido e cardápio"
      >
        <span className="text-[11px] font-bold tracking-widest uppercase text-[#85776E] group-hover:text-[#382F2A] transition-colors">
          Deslize para ver mais
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="p-2 rounded-full bg-white/80 border-t border-t-white border-b border-b-[#D5CABE] shadow-[0_6px_14px_rgba(50,40,30,0.08),inset_0_1px_1px_rgba(255,255,255,0.9)] group-hover:border-[#C5B9B0]"
        >
          <ArrowDown className="w-4 h-4 text-[#5C4F46]" />
        </motion.div>
      </motion.button>
    </section>
  );
};
