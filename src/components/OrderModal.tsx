import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Sparkles } from 'lucide-react';
import { LINKS, ProductItem } from '../data/constants';
import { PlatformBadge } from './PlatformBadge';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  product?: ProductItem | null;
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  product,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
          />

          {/* Modal / Bottom Sheet */}
          <motion.div
            initial={{ y: '100%', opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: '100%', opacity: 0, scale: 0.95 }}
            transition={{ type: 'spring', damping: 26, stiffness: 280 }}
            className="relative w-full max-w-md bg-gradient-to-b from-[#FAF7F2] to-[#F3EDE3] rounded-t-[32px] sm:rounded-[32px] p-6 sm:p-8 shadow-[0_25px_60px_-15px_rgba(40,30,20,0.35),0_0_0_1px_rgba(255,255,255,0.9)_inset] z-10 border border-[#E2D8CC] overflow-hidden"
          >
            {/* Top Close & Header */}
            <div className="flex items-start justify-between pb-4 border-b border-[#E8DFC9]">
              <div>
                <div className="inline-flex items-center gap-1.5 mb-1 px-3 py-1 rounded-full bg-white/90 border border-[#E0D5C5] shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span className="text-[10px] font-extrabold tracking-widest text-[#73655C] uppercase">
                    {product ? 'Escolha sua Plataforma' : 'Delivery Oficial'}
                  </span>
                </div>
                <h3 className="font-serif text-2xl sm:text-[26px] font-semibold text-[#201C1A] leading-tight mt-1">
                  {product ? `Pedir ${product.name}` : 'Onde você deseja pedir?'}
                </h3>
                {product && (
                  <p className="text-xs text-[#736861] mt-1 font-semibold">
                    {product.subtitle || 'Artesanal'} • {product.weight}
                  </p>
                )}
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full text-[#736861] hover:text-[#201C1A] bg-white/80 hover:bg-white border border-[#E2D8CC] transition-colors cursor-pointer shadow-xs"
                aria-label="Fechar janela"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Subheading emphasizing the two delivery options */}
            <p className="text-xs sm:text-sm text-[#6E645D] mt-4 mb-3 font-semibold">
              Escolha entre <span className="text-[#EA1D2C] font-extrabold">iFood</span> ou <span className="text-[#F57C00] font-extrabold">99Food</span> para fazer seu pedido:
            </p>

            {/* Platform Selection: iFood & 99Food prominently */}
            <div className="flex flex-col gap-3.5 my-4">
              {/* iFood */}
              <a
                id="modal-btn-ifood"
                href={LINKS.ifood}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="flex items-center justify-between p-4 rounded-2xl bg-white/95 hover:bg-white border-t border-t-white border-b-3 border-b-[#F4BAC0] border-x border-[#F8D2D7] transition-all duration-300 group shadow-[0_6px_16px_rgba(234,29,44,0.08)] hover:shadow-[0_10px_24px_rgba(234,29,44,0.18)] hover:-translate-y-0.5 active:translate-y-0.5 cursor-pointer"
              >
                <div className="flex items-center gap-3.5">
                  <PlatformBadge platform="ifood" size="md" className="group-hover:scale-105 transition-transform" />
                  <div className="text-left">
                    <p className="font-extrabold text-base tracking-tight text-[#201C1A]">iFood</p>
                    <p className="text-xs text-[#736861]">
                      Pedir pelo aplicativo do iFood
                    </p>
                  </div>
                </div>
                <span className="btn-3d-red flex items-center gap-1 text-xs font-bold uppercase tracking-wider py-2 px-4 rounded-xl text-white">
                  Pedir
                  <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </a>

              {/* 99Food */}
              <a
                id="modal-btn-99food"
                href={LINKS.ninetyNineFood}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="flex items-center justify-between p-4 rounded-2xl bg-white/95 hover:bg-white border-t border-t-white border-b-3 border-b-[#FCD6AA] border-x border-[#FFE4C4] transition-all duration-300 group shadow-[0_6px_16px_rgba(245,124,0,0.08)] hover:shadow-[0_10px_24px_rgba(245,124,0,0.18)] hover:-translate-y-0.5 active:translate-y-0.5 cursor-pointer"
              >
                <div className="flex items-center gap-3.5">
                  <PlatformBadge platform="99food" size="md" className="group-hover:scale-105 transition-transform" />
                  <div className="text-left">
                    <p className="font-extrabold text-base tracking-tight text-[#201C1A]">99Food</p>
                    <p className="text-xs text-[#736861]">
                      Pedir pelo aplicativo do 99Food
                    </p>
                  </div>
                </div>
                <span className="btn-3d-orange flex items-center gap-1 text-xs font-bold uppercase tracking-wider py-2 px-4 rounded-xl text-white">
                  Pedir
                  <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </a>

              {/* WhatsApp Alternative */}
              <a
                id="modal-btn-whatsapp"
                href={LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="flex items-center justify-between p-3.5 rounded-2xl bg-white/80 hover:bg-white border border-[#DCEADF] transition-all duration-300 group shadow-xs hover:shadow-md cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <PlatformBadge platform="whatsapp" size="sm" />
                  <div className="text-left">
                    <p className="font-bold text-sm text-[#201C1A]">WhatsApp</p>
                    <p className="text-xs text-[#736861]">
                      Atendimento direto para tirar dúvidas
                    </p>
                  </div>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#1EBE5D] group-hover:text-[#169446] transition-colors py-1.5 px-3 rounded-lg bg-[#EBF7EE]">
                  Conversar
                </span>
              </a>
            </div>

            <p className="text-center text-[11px] font-medium text-[#8F8177] pt-2">
              MS Lasanha — Feita com dedicação, sabor e história.
            </p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
