import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Sparkles } from 'lucide-react';
import { LINKS } from '../data/constants';
import { PlatformBadge } from './PlatformBadge';

export const FinalOrderSection: React.FC = () => {
  const buttons = [
    {
      id: 'final-ifood',
      emoji: '🍝',
      name: 'iFood',
      sublabel: 'Peça no app do iFood',
      link: LINKS.ifood,
      platform: 'ifood' as const,
      buttonStyle: 'btn-3d-red text-white',
    },
    {
      id: 'final-99food',
      emoji: '📱',
      name: '99Food',
      sublabel: 'Peça no app do 99Food',
      link: LINKS.ninetyNineFood,
      platform: '99food' as const,
      buttonStyle: 'btn-3d-orange text-white',
    },
    {
      id: 'final-whatsapp',
      emoji: '💬',
      name: 'WhatsApp',
      sublabel: 'Fale direto conosco',
      link: LINKS.whatsapp,
      platform: 'whatsapp' as const,
      buttonStyle:
        'btn-3d-primary text-white bg-gradient-to-b from-[#22C55E] to-[#148A3E] border-b-[#0D5B29]',
    },
  ];

  return (
    <section
      id="final-order-section"
      className="relative py-24 sm:py-32 px-5 bg-transparent border-t border-[#201C1A]/5 overflow-hidden"
    >
      <div className="max-w-xl sm:max-w-2xl w-full mx-auto text-center flex flex-col items-center">
        {/* Subtle 3D Pill Tag */}
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-white/90 border-t border-t-white border-b border-b-[#DDD2C4] border-x border-white/60 text-[11px] font-bold tracking-widest text-[#6E5E54] uppercase shadow-[0_6px_16px_rgba(60,45,30,0.06),inset_0_1px_1px_rgba(255,255,255,0.95)]"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
          <span>Momento Delicioso</span>
        </motion.div>

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#221E1C] mb-3.5"
        >
          Agora só falta escolher a sua.
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-base sm:text-lg text-[#6E635B] max-w-md mx-auto mb-10 font-normal leading-relaxed px-4"
        >
          Escolha onde pedir e aproveite sua MS Lasanha.
        </motion.p>

        {/* 3 Big High-Converting 3D Buttons */}
        <div className="w-full flex flex-col gap-4 max-w-md">
          {buttons.map((btn, idx) => (
            <motion.a
              key={btn.id}
              id={`final-btn-${btn.platform}`}
              href={btn.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 22, rotateX: 6 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: 0.15 + idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative flex items-center justify-between p-4 sm:p-5 rounded-2xl ${btn.buttonStyle} cursor-pointer`}
            >
              <div className="flex items-center gap-4">
                <PlatformBadge platform={btn.platform} size="md" className="group-hover:scale-105 transition-transform" />
                <div className="text-left">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{btn.emoji}</span>
                    <span className="font-bold text-lg tracking-tight">
                      {btn.name}
                    </span>
                  </div>
                  <span className="text-xs text-white/90 font-medium">
                    {btn.sublabel}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider bg-white/20 py-2 px-3.5 rounded-xl backdrop-blur-xs group-hover:bg-white/30 transition-colors">
                <span>Pedir</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
