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
      buttonStyle:
        'bg-[#EA1D2C] hover:bg-[#D41423] text-white shadow-[0_10px_25px_-5px_rgba(234,29,44,0.35)]',
    },
    {
      id: 'final-99food',
      emoji: '📱',
      name: '99Food',
      sublabel: 'Peça no app do 99Food',
      link: LINKS.ninetyNineFood,
      platform: '99food' as const,
      buttonStyle:
        'bg-[#F57C00] hover:bg-[#E65100] text-white shadow-[0_10px_25px_-5px_rgba(245,124,0,0.35)]',
    },
    {
      id: 'final-whatsapp',
      emoji: '💬',
      name: 'WhatsApp',
      sublabel: 'Fale direto conosco',
      link: LINKS.whatsapp,
      platform: 'whatsapp' as const,
      buttonStyle:
        'bg-[#1EBE5D] hover:bg-[#16A24D] text-white shadow-[0_10px_25px_-5px_rgba(37,211,102,0.35)]',
    },
  ];

  return (
    <section
      id="final-order-section"
      className="relative py-20 sm:py-28 px-5 bg-[#F5F4F0] border-t border-[#ECEAE5] overflow-hidden"
    >
      <div className="max-w-xl sm:max-w-2xl w-full mx-auto text-center flex flex-col items-center">
        {/* Subtle Pill Tag */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-3 px-3.5 py-1.5 rounded-full bg-white border border-[#E5E1D8] text-[11px] font-semibold tracking-wider text-[#73655C] uppercase shadow-xs"
        >
          <Sparkles className="w-3 h-3 text-[#C5A880]" />
          <span>Momento Delicioso</span>
        </motion.div>

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#221E1C] mb-3"
        >
          Agora só falta escolher a sua.
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-base sm:text-lg text-[#6E645D] max-w-md mx-auto mb-10 font-normal leading-relaxed"
        >
          Escolha onde pedir e aproveite sua MS Lasanha.
        </motion.p>

        {/* 3 Big High-Converting Buttons */}
        <div className="w-full flex flex-col gap-4 max-w-md">
          {buttons.map((btn, idx) => (
            <motion.a
              key={btn.id}
              id={`final-btn-${btn.platform}`}
              href={btn.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
              className={`group relative flex items-center justify-between p-4 sm:p-5 rounded-2xl ${btn.buttonStyle} hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] transition-all duration-300`}
            >
              <div className="flex items-center gap-4">
                <PlatformBadge platform={btn.platform} size="md" />
                <div className="text-left">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{btn.emoji}</span>
                    <span className="font-semibold text-lg tracking-tight">
                      {btn.name}
                    </span>
                  </div>
                  <span className="text-xs text-white/85 font-medium">
                    {btn.sublabel}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wider bg-white/20 py-2 px-3.5 rounded-xl backdrop-blur-xs group-hover:bg-white/30 transition-colors">
                <span>Pedir</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
