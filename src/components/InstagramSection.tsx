import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Camera, Sparkles } from 'lucide-react';
import { LINKS } from '../data/constants';
import { PlatformBadge } from './PlatformBadge';

export const InstagramSection: React.FC = () => {
  return (
    <section
      id="instagram-section"
      className="relative py-16 sm:py-24 px-5 bg-[#F8F8F6] border-t border-[#ECEAE5] overflow-hidden"
    >
      <div className="max-w-xl w-full mx-auto text-center flex flex-col items-center">
        {/* Subtle Pill Tag */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full bg-white border border-[#E8E6E1] text-[11px] font-semibold tracking-wider text-[#73655C] uppercase shadow-xs"
        >
          <Camera className="w-3 h-3 text-[#E1306C]" />
          <span>Redes Sociais</span>
        </motion.div>

        {/* 3D Tactile Instagram Logo in Prominence */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-6 group cursor-pointer"
        >
          <PlatformBadge platform="instagram" size="xl" />
        </motion.div>

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-[#221E1C] mb-3"
        >
          Acompanhe a MS Lasanha
        </motion.h2>

        {/* Exact Text */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-sm sm:text-base text-[#6E645D] max-w-md mx-auto mb-8 font-normal leading-relaxed"
        >
          Siga a gente no Instagram e acompanhe nossas novidades, sabores e bastidores.
        </motion.p>

        {/* Handle Preview */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mb-6 inline-flex items-center gap-1.5 text-xs font-semibold text-[#8C7E74] tracking-wide"
        >
          <span>@mslasanha</span>
        </motion.div>

        {/* Exact Button: "SEGUIR NO INSTAGRAM" with link */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full sm:w-auto"
        >
          <a
            id="instagram-button"
            href={LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 py-4 px-8 rounded-full bg-gradient-to-r from-[#D92B6B] via-[#E1306C] to-[#C13584] hover:from-[#C2185B] hover:to-[#AD1457] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase shadow-[0_10px_25px_-5px_rgba(225,48,108,0.35)] hover:shadow-[0_14px_30px_-4px_rgba(225,48,108,0.45)] transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98]"
          >
            <span>SEGUIR NO INSTAGRAM</span>
            <ExternalLink className="w-4 h-4 opacity-90" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
