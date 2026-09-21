import React from 'react';
import { motion } from 'motion/react';
import { Heart, Award, Sparkles, Quote } from 'lucide-react';

export const HistorySection: React.FC = () => {
  return (
    <section
      id="history-section"
      className="relative min-h-[90vh] sm:min-h-screen flex flex-col justify-center px-6 sm:px-10 py-20 sm:py-28 bg-transparent border-t border-[#201C1A]/5 overflow-hidden"
    >
      {/* Decorative luxury backdrop 3D watermarks */}
      <div className="absolute top-12 right-12 text-[#C5A880]/15 select-none pointer-events-none">
        <Quote className="w-36 h-36 rotate-180 drop-shadow-[0_4px_12px_rgba(197,168,128,0.1)]" />
      </div>

      <div className="max-w-2xl lg:max-w-3xl w-full mx-auto relative z-10">
        {/* Section Pill Badge */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-white/90 border-t border-t-white border-b border-b-[#DDD2C4] border-x border-white/60 text-[11px] font-bold tracking-widest text-[#6E5E54] uppercase shadow-[0_6px_16px_rgba(60,45,30,0.06),inset_0_1px_1px_rgba(255,255,255,0.95)]"
          >
            <Heart className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>Propósito & Trajetória</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#221E1C]"
          >
            Minha História
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-20 h-[3px] bg-gradient-to-r from-transparent via-[#C5A880] to-transparent mt-4 shadow-sm"
          />
        </div>

        {/* Narrative 3D High-Relief Card */}
        <motion.div
          initial={{ opacity: 0, y: 35, rotateX: 4 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="card-3d rounded-3xl p-7 sm:p-10 md:p-12 relative"
        >
          <div className="space-y-6 sm:space-y-8 text-base sm:text-lg text-[#473F3A] leading-relaxed font-normal">
            {/* Paragraph 1 */}
            <p className="first-letter:font-serif first-letter:text-4xl sm:first-letter:text-5xl first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:text-[#382F2A]">
              Se olhar para trás, eu jamais imaginava onde Deus iria me levar. A
              história do{' '}
              <span className="font-semibold text-[#201C1A]">MS Lasanha</span>{' '}
              começou com um sonho, muita fé e quase nada de estrutura:{' '}
              <span className="text-[#201C1A] font-semibold bg-[#F5EFE6] px-2 py-0.5 rounded-md border border-[#E8DFC9]">
                eu não tinha nem forno próprio
              </span>
              . Comecei vendendo apenas 2 sabores e 2 tamanhos, para as pessoas
              aquecerem no micro-ondas ou no forno de casa.
            </p>

            {/* Paragraph 2 */}
            <p className="border-l-3 border-[#C5A880] pl-5 sm:pl-6 text-[#4F4640] italic bg-white/40 py-2 rounded-r-xl">
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
            <div className="pt-6 border-t border-[#EDE5DA] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="font-serif text-lg sm:text-xl font-medium text-[#292320] leading-snug">
                Obrigado a cada um de vocês que acredita no meu trabalho e faz
                parte desta jornada!
              </p>

              <div className="flex-shrink-0 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#E2D8CC] text-xs font-bold uppercase tracking-wider text-[#8F8177] shadow-xs">
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
