import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, ShoppingBag } from 'lucide-react';
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
      className="relative min-h-[92vh] sm:min-h-screen flex flex-col items-center justify-between px-6 py-12 sm:py-16 text-center select-none overflow-hidden bg-[#F8F8F6]"
    >
      {/* Subtle organic luxury ambient glow - off-white / ice with whisper of taupe */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[540px] h-[340px] sm:h-[540px] bg-gradient-to-br from-[#EAE7E1]/50 to-[#E0DCD5]/30 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Top subtle brand pill badge */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#E8E6E1] shadow-[0_2px_8px_rgba(0,0,0,0.03)] backdrop-blur-md"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#685B53] animate-pulse" />
        <span className="text-[11px] sm:text-xs font-semibold tracking-wider text-[#685B53] uppercase">
          Gastronomia Artesanal
        </span>
      </motion.div>

      {/* Centerpiece: Official Big Logo with generous negative space */}
      <div className="flex-1 flex flex-col items-center justify-center max-w-xl w-full my-6 sm:my-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full flex justify-center py-2"
        >
          {/* Official Logo Container - No background box, strictly transparent, natural high quality */}
          <div className="relative group max-w-[280px] xs:max-w-[320px] sm:max-w-[390px] md:max-w-[440px] w-full px-2">
            <img
              src={BRAND.logo}
              alt="MS Lasanha Logo Oficial"
              className="w-full h-auto object-contain drop-shadow-[0_12px_28px_rgba(40,32,25,0.08)] transition-transform duration-700 hover:scale-[1.02]"
              loading="eager"
            />
          </div>
        </motion.div>

        {/* Tagline: Exact sentence as requested */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
          className="mt-6 sm:mt-8 font-serif text-xl xs:text-2xl sm:text-3xl font-medium tracking-tight text-[#2B2724] max-w-md mx-auto leading-snug px-4"
        >
          &ldquo;{BRAND.tagline}&rdquo;
        </motion.p>

        {/* Primary Action Button: "PEDIR AGORA" */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: 'easeOut' }}
          className="mt-8 sm:mt-10 w-full flex justify-center"
        >
          <button
            id="hero-order-button"
            onClick={onOrderClick}
            type="button"
            className="group relative inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-4.5 rounded-full bg-[#382F2A] hover:bg-[#251F1C] text-[#FAF8F5] text-sm sm:text-base font-semibold tracking-wide uppercase transition-all duration-300 shadow-[0_10px_25px_-5px_rgba(56,47,42,0.35),0_2px_4px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,0.2)] hover:shadow-[0_14px_32px_-4px_rgba(56,47,42,0.45)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4 text-[#D8C7B5] transition-transform duration-300 group-hover:scale-110" />
            <span>PEDIR AGORA</span>
            {/* Subtle champagne light edge sheen */}
            <span className="absolute inset-x-4 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#C5A880]/60 to-transparent" />
          </button>
        </motion.div>
      </div>

      {/* Discreet Down Arrow Indication to guide scrolling */}
      <motion.button
        id="scroll-indicator-button"
        onClick={onScrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="flex flex-col items-center gap-2 text-[#8C7F77] hover:text-[#382F2A] transition-colors cursor-pointer pt-2 group"
        aria-label="Rolar para ver opções de pedido e cardápio"
      >
        <span className="text-[11px] font-medium tracking-widest uppercase text-[#94867D] group-hover:text-[#423832] transition-colors">
          Deslize para ver mais
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="p-1.5 rounded-full bg-white/70 border border-[#E8E6E1] shadow-xs group-hover:border-[#C5B9B0]"
        >
          <ArrowDown className="w-4 h-4 text-[#685B53]" />
        </motion.div>
      </motion.button>
    </section>
  );
};
