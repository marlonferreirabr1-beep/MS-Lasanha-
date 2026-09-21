import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Camera, Sparkles } from 'lucide-react';
import { LINKS } from '../data/constants';
import { PlatformBadge } from './PlatformBadge';

export const InstagramSection: React.FC = () => {
  return (
    <section
      id="instagram-section"
      className="relative py-20 sm:py-28 px-5 bg-transparent border-t border-[#201C1A]/5 overflow-hidden"
    >
      <div className="max-w-2xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="card-3d rounded-3xl p-8 sm:p-12 text-center flex flex-col items-center relative overflow-hidden"
        >
          {/* Subtle 3D Pill Tag */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/90 border-t border-t-white border-b border-b-[#DDD2C4] border-x border-white/60 text-[11px] font-bold tracking-widest text-[#6E5E54] uppercase shadow-[0_6px_16px_rgba(60,45,30,0.06),inset_0_1px_1px_rgba(255,255,255,0.95)]">
            <Camera className="w-3.5 h-3.5 text-[#E1306C]" />
            <span>Redes Sociais</span>
          </div>

          {/* 3D Tactile Instagram Logo with Ambient Glow */}
          <div className="mb-6 relative group cursor-pointer">
            <div className="absolute -inset-2 bg-gradient-to-tr from-[#FFDC80] via-[#FD1D1D] to-[#833AB4] opacity-20 blur-xl rounded-3xl group-hover:opacity-40 transition-opacity pointer-events-none" />
            <PlatformBadge platform="instagram" size="xl" className="group-hover:scale-110 transition-transform duration-500" />
          </div>

          {/* Section Title */}
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-[#221E1C] mb-3">
            Acompanhe a MS Lasanha
          </h2>

          {/* Exact Text */}
          <p className="text-sm sm:text-base text-[#6E635B] max-w-md mx-auto mb-5 font-normal leading-relaxed">
            Siga a gente no Instagram e acompanhe nossas novidades, sabores e bastidores.
          </p>

          {/* Handle Preview */}
          <div className="mb-8 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#F5EFE6] border border-[#E4D9C8] text-xs font-bold text-[#5C4F46] tracking-wide shadow-2xs">
            <span>@mslasanha</span>
          </div>

          {/* Exact Button: "SEGUIR NO INSTAGRAM" with 3D relief */}
          <a
            id="instagram-button"
            href={LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 py-4 px-9 rounded-2xl bg-gradient-to-b from-[#E1306C] to-[#B01A52] border-t border-t-white/40 border-b-3 border-b-[#7A0D36] text-white text-xs sm:text-sm font-extrabold tracking-wider uppercase shadow-[0_12px_24px_rgba(225,48,108,0.3)] hover:shadow-[0_16px_32px_rgba(225,48,108,0.45)] hover:-translate-y-0.5 active:translate-y-1 active:border-b transition-all duration-200"
          >
            <span>SEGUIR NO INSTAGRAM</span>
            <ExternalLink className="w-4 h-4 opacity-90" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
