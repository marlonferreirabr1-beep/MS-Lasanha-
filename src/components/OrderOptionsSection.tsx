import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Sparkles } from 'lucide-react';
import { LINKS } from '../data/constants';
import { PlatformBadge } from './PlatformBadge';

export const OrderOptionsSection: React.FC = () => {
  const options = [
    {
      id: 'option-ifood',
      name: 'iFood',
      description: 'Entrega rápida, rastreamento ao vivo e cupons pelo aplicativo.',
      buttonText: 'PEDIR PELO IFOOD',
      link: LINKS.ifood,
      platform: 'ifood' as const,
      badgeText: 'Delivery Oficial',
      buttonClass: 'btn-3d-red text-white',
      accentBorder: 'hover:border-red-400/50',
    },
    {
      id: 'option-99food',
      name: '99Food',
      description: 'Praticidade no pedido e as melhores vantagens com entrega ágil.',
      buttonText: 'PEDIR PELO 99FOOD',
      link: LINKS.ninetyNineFood,
      platform: '99food' as const,
      badgeText: 'Disponível no App',
      buttonClass: 'btn-3d-orange text-white',
      accentBorder: 'hover:border-amber-400/50',
    },
    {
      id: 'option-whatsapp',
      name: 'WhatsApp',
      description: 'Atendimento humanizado, encomendas personalizadas e suporte direto.',
      buttonText: 'PEDIR PELO WHATSAPP',
      link: LINKS.whatsapp,
      platform: 'whatsapp' as const,
      badgeText: 'Atendimento Direto',
      buttonClass: 'btn-3d-primary text-white bg-gradient-to-b from-[#22C55E] to-[#148A3E] border-b-[#0D5B29]',
      accentBorder: 'hover:border-emerald-400/50',
    },
  ];

  return (
    <section
      id="order-options-section"
      className="relative min-h-[90vh] sm:min-h-screen flex flex-col justify-center items-center px-5 py-20 sm:py-28 bg-transparent border-t border-[#201C1A]/5"
    >
      <div className="max-w-md sm:max-w-2xl lg:max-w-5xl w-full mx-auto flex flex-col items-center">
        {/* Subtle 3D Pill Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-white/90 border-t border-t-white border-b border-b-[#DDD2C4] border-x border-white/60 text-[11px] font-bold tracking-widest text-[#6E5E54] uppercase shadow-[0_6px_16px_rgba(60,45,30,0.06),inset_0_1px_1px_rgba(255,255,255,0.95)]"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
          <span>Canais Oficiais de Entrega</span>
        </motion.div>

        {/* Section Title with Progressive Cinematic Reveal */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#221E1C] text-center mb-3 sm:mb-4"
        >
          Peça sua MS Lasanha
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-sm sm:text-base text-[#6E635B] text-center max-w-lg mb-12 sm:mb-16 font-normal leading-relaxed px-4"
        >
          Escolha sua plataforma preferida para receber sua lasanha quentinha,
          artesanal e com aquele sabor inconfundível.
        </motion.p>

        {/* 3 Channels Grid / 3D High-Relief Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
          {options.map((opt, idx) => (
            <motion.div
              key={opt.id}
              initial={{ opacity: 0, y: 35, rotateX: 6 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.85, delay: 0.15 + idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className={`card-3d group relative flex flex-col justify-between p-7 sm:p-8 rounded-3xl ${opt.accentBorder}`}
            >
              {/* Card Header with 3D Tactile Platform Badge */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-5 relative">
                  {/* Subtle 3D ambient shadow below platform badge */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-3 bg-black/10 blur-sm rounded-full pointer-events-none" />
                  <PlatformBadge
                    platform={opt.platform}
                    size="lg"
                    className="transform transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <span className="text-[11px] font-bold tracking-widest uppercase text-[#948478] mb-1.5">
                  {opt.badgeText}
                </span>

                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#221E1C] mb-2.5">
                  {opt.name}
                </h3>

                <p className="text-xs sm:text-sm text-[#736760] leading-relaxed mb-6 font-normal">
                  {opt.description}
                </p>
              </div>

              {/* 3D Functional Link Button with tactile press */}
              <a
                id={`button-${opt.platform}`}
                href={opt.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full inline-flex items-center justify-center gap-2.5 py-4 px-5 rounded-2xl text-xs sm:text-sm font-bold tracking-wide uppercase cursor-pointer overflow-hidden ${opt.buttonClass}`}
              >
                <span>{opt.buttonText}</span>
                <ExternalLink className="w-4 h-4 opacity-90 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
