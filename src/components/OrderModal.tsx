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
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{ type: 'spring', damping: 26, stiffness: 280 }}
            className="relative w-full max-w-md bg-white rounded-t-3xl sm:rounded-3xl p-6 sm:p-7 shadow-2xl z-10 border border-[#E9E6E0] overflow-hidden"
          >
            {/* Top Close & Header */}
            <div className="flex items-start justify-between pb-4 border-b border-[#F0EDE8]">
              <div>
                <div className="flex items-center gap-1.5 mb-1">
                  <Sparkles className="w-3 h-3 text-[#C5A880]" />
                  <span className="text-[10px] font-semibold tracking-wider text-[#8F8177] uppercase">
                    {product ? 'Escolha sua Plataforma' : 'Delivery Oficial'}
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-semibold text-[#201C1A] leading-tight">
                  {product ? `Pedir ${product.name}` : 'Onde você deseja pedir?'}
                </h3>
                {product && (
                  <p className="text-xs text-[#736861] mt-0.5 font-medium">
                    {product.subtitle || 'Artesanal'} • {product.weight}
                  </p>
                )}
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full text-[#736861] hover:text-[#201C1A] hover:bg-[#F5F3EF] transition-colors cursor-pointer"
                aria-label="Fechar janela"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Subheading emphasizing the two delivery options */}
            <p className="text-xs sm:text-sm text-[#6E645D] mt-4 mb-3 font-medium">
              Escolha entre <span className="text-[#EA1D2C] font-semibold">iFood</span> ou <span className="text-[#F57C00] font-semibold">99Food</span> para fazer seu pedido:
            </p>

            {/* Platform Selection: iFood & 99Food prominently */}
            <div className="flex flex-col gap-3 my-4">
              {/* iFood */}
              <a
                id="modal-btn-ifood"
                href={LINKS.ifood}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="flex items-center justify-between p-4 rounded-2xl bg-[#FFF5F5] hover:bg-[#EA1D2C] text-[#201C1A] hover:text-white border border-[#FCDADF] hover:border-[#EA1D2C] transition-all duration-300 group shadow-xs hover:shadow-md"
              >
                <div className="flex items-center gap-3.5">
                  <PlatformBadge platform="ifood" size="md" />
                  <div className="text-left">
                    <p className="font-bold text-base tracking-tight">iFood</p>
                    <p className="text-xs text-[#736861] group-hover:text-white/90">
                      Pedir pelo aplicativo do iFood
                    </p>
                  </div>
                </div>
                <span className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wider py-1.5 px-3 rounded-lg bg-white/80 group-hover:bg-white/20 text-[#EA1D2C] group-hover:text-white transition-colors">
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
                className="flex items-center justify-between p-4 rounded-2xl bg-[#FFF8F0] hover:bg-[#F57C00] text-[#201C1A] hover:text-white border border-[#FFE2C2] hover:border-[#F57C00] transition-all duration-300 group shadow-xs hover:shadow-md"
              >
                <div className="flex items-center gap-3.5">
                  <PlatformBadge platform="99food" size="md" />
                  <div className="text-left">
                    <p className="font-bold text-base tracking-tight">99Food</p>
                    <p className="text-xs text-[#736861] group-hover:text-white/90">
                      Pedir pelo aplicativo do 99Food
                    </p>
                  </div>
                </div>
                <span className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wider py-1.5 px-3 rounded-lg bg-white/80 group-hover:bg-white/20 text-[#F57C00] group-hover:text-white transition-colors">
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
                className="flex items-center justify-between p-3.5 rounded-2xl bg-[#F6FAF6] hover:bg-[#1EBE5D] text-[#201C1A] hover:text-white border border-[#DCF2E1] hover:border-[#1EBE5D] transition-all duration-300 group shadow-xs"
              >
                <div className="flex items-center gap-3">
                  <PlatformBadge platform="whatsapp" size="sm" />
                  <div className="text-left">
                    <p className="font-semibold text-sm">WhatsApp</p>
                    <p className="text-xs text-[#736861] group-hover:text-white/90">
                      Atendimento direto para tirar dúvidas
                    </p>
                  </div>
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#1EBE5D] group-hover:text-white transition-colors">
                  Conversar
                </span>
              </a>
            </div>

            <p className="text-center text-[11px] text-[#8F8177] pt-2">
              MS Lasanha — Feita com dedicação, sabor e história.
            </p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
