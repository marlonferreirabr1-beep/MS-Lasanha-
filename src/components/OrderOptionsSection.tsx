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
      description: 'Entrega rápida e acompanhamento em tempo real pelo app',
      buttonText: 'PEDIR PELO IFOOD',
      link: LINKS.ifood,
      platform: 'ifood' as const,
      badgeText: 'Delivery Oficial',
      buttonBg: 'bg-[#EA1D2C] hover:bg-[#D41423] text-white',
      accentGlow: 'hover:border-[#F6B2B7]',
    },
    {
      id: 'option-99food',
      name: '99Food',
      description: 'Peça com facilidade e aproveite as vantagens do 99Food',
      buttonText: 'PEDIR PELO 99FOOD',
      link: LINKS.ninetyNineFood,
      platform: '99food' as const,
      badgeText: 'Disponível no App',
      buttonBg: 'bg-[#F57C00] hover:bg-[#E65100] text-white',
      accentGlow: 'hover:border-[#FFD180]',
    },
    {
      id: 'option-whatsapp',
      name: 'WhatsApp',
      description: 'Atendimento direto, tire dúvidas e faça seu pedido exclusivo',
      buttonText: 'PEDIR PELO WHATSAPP',
      link: LINKS.whatsapp,
      platform: 'whatsapp' as const,
      badgeText: 'Atendimento Direto',
      buttonBg: 'bg-[#1EBE5D] hover:bg-[#16A24D] text-white',
      accentGlow: 'hover:border-[#A7F3D0]',
    },
  ];

  return (
    <section
      id="order-options-section"
      className="relative min-h-[90vh] sm:min-h-screen flex flex-col justify-center items-center px-5 py-16 sm:py-24 bg-[#F8F8F6] border-t border-[#ECEAE5]"
    >
      <div className="max-w-md sm:max-w-2xl lg:max-w-4xl w-full mx-auto flex flex-col items-center">
        {/* Subtle Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-white border border-[#E8E6E1] text-[11px] font-semibold tracking-wider text-[#73655C] uppercase shadow-xs"
        >
          <Sparkles className="w-3 h-3 text-[#C5A880]" />
          <span>Canais Oficiais de Entrega</span>
        </motion.div>

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#221E1C] text-center mb-3 sm:mb-4"
        >
          Peça sua MS Lasanha
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-sm sm:text-base text-[#6E645D] text-center max-w-lg mb-10 sm:mb-12 font-normal leading-relaxed"
        >
          Escolha sua plataforma preferida para receber sua lasanha quentinha,
          artesanal e com aquele sabor inconfundível.
        </motion.p>

        {/* 3 Channels Grid / Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {options.map((opt, idx) => (
            <motion.div
              key={opt.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.15 + idx * 0.1 }}
              className={`group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-white border border-[#E9E7E2] ${opt.accentGlow} shadow-[0_4px_16px_rgba(0,0,0,0.03),0_1px_2px_rgba(0,0,0,0.02)] hover:shadow-[0_16px_36px_-6px_rgba(40,32,25,0.09)] transition-all duration-300 hover:-translate-y-1`}
            >
              {/* Card Header with 3D Tactile Platform Badge */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  <PlatformBadge
                    platform={opt.platform}
                    size="lg"
                    className="transform transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <span className="text-[11px] font-semibold tracking-wider uppercase text-[#8F8177] mb-1">
                  {opt.badgeText}
                </span>

                <h3 className="font-serif text-2xl font-semibold text-[#221E1C] mb-2">
                  {opt.name}
                </h3>

                <p className="text-xs sm:text-sm text-[#736760] leading-relaxed mb-6">
                  {opt.description}
                </p>
              </div>

              {/* Functional Link Button with exact requested label */}
              <a
                id={`button-${opt.platform}`}
                href={opt.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-semibold tracking-wide uppercase transition-all duration-200 shadow-sm hover:shadow-md active:scale-[0.98] ${opt.buttonBg}`}
              >
                <span>{opt.buttonText}</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-85 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
