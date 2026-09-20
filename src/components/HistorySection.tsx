import React from 'react';
import { motion } from 'motion/react';
import { Heart, Award, Sparkles, Quote } from 'lucide-react';
import { BRAND } from '../data/constants';

export const HistorySection: React.FC = () => {
  return (
    <section
      id="history-section"
      className="relative min-h-[90vh] sm:min-h-screen flex flex-col justify-center px-6 sm:px-10 py-20 sm:py-28 bg-[#F5F4F0] border-t border-[#ECEAE5] overflow-hidden"
    >
      {/* Decorative luxury backdrop watermarks */}
      <div className="absolute top-12 right-12 text-[#EAE6DF] opacity-40 select-none pointer-events-none">
        <Quote className="w-32 h-32 rotate-180" />
      </div>

      <div className="max-w-2xl lg:max-w-3xl w-full mx-auto relative z-10">
        {/* Section Pill Badge */}
        <div className="flex flex-col items-center text-center mb-8 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-3 px-3.5 py-1.5 rounded-full bg-white border border-[#E5E1D8] text-[11px] font-semibold tracking-wider text-[#73655C] uppercase shadow-xs"
          >
            <Heart className="w-3 h-3 text-[#C5A880]" />
            <span>Propósito & Trajetória</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#221E1C]"
          >
            Minha História
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-16 h-[2px] bg-[#C5A880] mt-4"
          />
        </div>

        {/* Narrative Card with balanced spacing and typography */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="rounded-3xl bg-white p-7 sm:p-10 md:p-12 border border-[#E9E5DD] shadow-[0_12px_40px_-15px_rgba(40,32,25,0.06)] relative"
        >
          <div className="space-y-6 sm:space-y-8 text-base sm:text-lg text-[#473F3A] leading-relaxed font-normal">
            {/* Paragraph 1 */}
            <p className="first-letter:font-serif first-letter:text-4xl sm:first-letter:text-5xl first-letter:font-bold first-letter:mr-2.5 first-letter:float-left first-letter:text-[#382F2A]">
              Se olhar para trás, eu jamais imaginava onde Deus iria me levar. A
              história do{' '}
              <span className="font-semibold text-[#201C1A]">MS Lasanha</span>{' '}
              começou com um sonho, muita fé e quase nada de estrutura:{' '}
              <span className="text-[#201C1A] font-medium bg-[#F7F5F0] px-1.5 py-0.5 rounded-md">
                eu não tinha nem forno próprio
              </span>
              . Comecei vendendo apenas 2 sabores e 2 tamanhos, para as pessoas
              aquecerem no micro-ondas ou no forno de casa.
            </p>

            {/* Paragraph 2 */}
            <p className="border-l-2 border-[#C5A880]/60 pl-4 sm:pl-6 text-[#4F4640] italic">
              Sempre busquei inspiração na história de grandes empresas e
              empresários. Fui atrás de conhecimento, fiz cursos de gastronomia,
              trabalhei em estágios e aprendi muito na prática — vendo chefs e
              profissionais experientes colocarem a mão na massa. Com o tempo e com
              o fruto do meu trabalho, fui comprando meus equipamentos e
              estruturando tudo.
            </p>

            {/* Paragraph 3 */}
            <p>
              Tenho muito orgulho de tudo o que passei e do homem que me tornei
              até aqui.{' '}
              <span className="font-semibold text-[#201C1A]">
                O MS Lasanha é o resultado do meu aprendizado diário, da minha
                dedicação e da minha certeza de que, com trabalho duro, as coisas
                acontecem.
              </span>
            </p>

            {/* Paragraph 4 - Final heartfelt acknowledgement */}
            <div className="pt-4 border-t border-[#F0ECE4] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="font-serif text-lg sm:text-xl font-medium text-[#292320] leading-snug">
                Obrigado a cada um de vocês que acredita no meu trabalho e faz
                parte desta jornada!
              </p>

              <div className="flex-shrink-0 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8F8177]">
                <Award className="w-4 h-4 text-[#C5A880]" />
                <span>Feito com Alma</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
