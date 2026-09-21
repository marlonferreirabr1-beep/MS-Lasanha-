import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Users, Sparkles, Scale, ExternalLink } from 'lucide-react';
import { ProductItem, LINKS } from '../data/constants';
import { PlatformBadge } from './PlatformBadge';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeProduct: ProductItem | null;
  products: ProductItem[];
  onNavigate: (product: ProductItem) => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  activeProduct,
  products,
  onNavigate,
}) => {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Keyboard navigation (Esc to close, Left/Right arrows to switch photos)
  useEffect(() => {
    if (!isOpen || !activeProduct) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        const currentIndex = products.findIndex((p) => p.id === activeProduct.id);
        const prevIndex = currentIndex > 0 ? currentIndex - 1 : products.length - 1;
        onNavigate(products[prevIndex]);
      } else if (e.key === 'ArrowRight') {
        const currentIndex = products.findIndex((p) => p.id === activeProduct.id);
        const nextIndex = currentIndex < products.length - 1 ? currentIndex + 1 : 0;
        onNavigate(products[nextIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, activeProduct, products, onClose, onNavigate]);

  if (!activeProduct) return null;

  const currentIndex = products.findIndex((p) => p.id === activeProduct.id);
  const isOneKg = activeProduct.id === 'frango-1kg' || activeProduct.weight === '1kg';

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : products.length - 1;
    onNavigate(products[prevIndex]);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIndex = currentIndex < products.length - 1 ? currentIndex + 1 : 0;
    onNavigate(products[nextIndex]);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Visualização completa: ${activeProduct.name} ${activeProduct.weight}`}
          className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 md:p-6 select-none"
        >
          {/* Deep Frosted Dark Vignette Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#141110]/85 backdrop-blur-md cursor-zoom-out"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 15 }}
            transition={{ type: 'spring', damping: 28, stiffness: 320 }}
            className="relative z-10 w-full max-w-4xl max-h-[96vh] flex flex-col rounded-[28px] sm:rounded-[32px] bg-gradient-to-b from-[#25201D] to-[#1A1614] text-white shadow-[0_25px_70px_rgba(0,0,0,0.7),inset_0_1px_2px_rgba(255,255,255,0.25)] border border-white/15 overflow-hidden"
          >
            {/* Top Bar with Title, Weight & Close Button */}
            <div className="flex items-center justify-between px-5 sm:px-7 py-4 border-b border-white/10 bg-white/[0.03]">
              <div className="flex items-center gap-3">
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-[10px] font-extrabold tracking-widest text-[#E5C9A4] uppercase">
                      {activeProduct.subtitle || 'Artesanal'}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase bg-white/15 text-white border border-white/20">
                      <Scale className="w-2.5 h-2.5 text-[#E5C9A4]" />
                      {activeProduct.weight}
                    </span>
                    {isOneKg && (
                      <span className="badge-serves-3d inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold tracking-wider uppercase text-white">
                        <Users className="w-2.5 h-2.5" />
                        SERVE 2 PESSOAS
                      </span>
                    )}
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#F8F3ED] tracking-tight">
                    {activeProduct.name}
                  </h3>
                </div>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                aria-label="Fechar visualização"
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white/90 hover:text-white transition-all duration-200 cursor-pointer shadow-md hover:scale-105 active:scale-95"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Central Stage: Full Uncropped Image with Next/Prev Controls */}
            <div className="relative flex-1 min-h-[300px] max-h-[62vh] sm:max-h-[68vh] flex items-center justify-center p-3 sm:p-6 bg-[#0E0C0B] overflow-hidden">
              {/* Previous Photo Button */}
              {products.length > 1 && (
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Foto anterior"
                  className="absolute left-3 sm:left-6 z-20 p-3 sm:p-3.5 rounded-full bg-black/60 hover:bg-black/85 text-white/90 hover:text-white border border-white/20 backdrop-blur-md transition-all duration-200 cursor-pointer shadow-xl hover:scale-110 active:scale-95"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              )}

              {/* The Complete Uncropped Image */}
              <motion.img
                key={activeProduct.id}
                src={activeProduct.image}
                alt={activeProduct.alt}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="max-h-[58vh] sm:max-h-[64vh] w-auto max-w-full object-contain rounded-xl sm:rounded-2xl shadow-2xl drop-shadow-[0_15px_35px_rgba(0,0,0,0.8)]"
              />

              {/* Next Photo Button */}
              {products.length > 1 && (
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Próxima foto"
                  className="absolute right-3 sm:right-6 z-20 p-3 sm:p-3.5 rounded-full bg-black/60 hover:bg-black/85 text-white/90 hover:text-white border border-white/20 backdrop-blur-md transition-all duration-200 cursor-pointer shadow-xl hover:scale-110 active:scale-95"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              )}

              {/* Photo Index Tag */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-semibold text-white/80 pointer-events-none">
                {currentIndex + 1} de {products.length}
              </div>
            </div>

            {/* Bottom Footer: Direct Order Shortcuts */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 px-5 sm:px-7 py-3.5 sm:py-4 bg-[#1F1A18] border-t border-white/10">
              <div className="flex items-center gap-2 text-xs text-white/70">
                <Sparkles className="w-3.5 h-3.5 text-[#E5C9A4]" />
                <span className="text-center sm:text-left">
                  Gostou da foto? Peça agora direto pelo seu app favorito:
                </span>
              </div>

              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <a
                  href={LINKS.ifood}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-3d-red flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-white text-xs font-extrabold tracking-wide"
                >
                  <PlatformBadge platform="ifood" size="sm" className="scale-75 -mr-1" />
                  <span>Pedir no iFood</span>
                  <ExternalLink className="w-3 h-3 text-white/80" />
                </a>

                <a
                  href={LINKS.ninetyNineFood}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-3d-orange flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-white text-xs font-extrabold tracking-wide"
                >
                  <PlatformBadge platform="99food" size="sm" className="scale-75 -mr-1" />
                  <span>Pedir na 99Food</span>
                  <ExternalLink className="w-3 h-3 text-white/80" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
