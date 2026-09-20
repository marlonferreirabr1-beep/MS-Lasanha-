import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Scale, Sparkles, ShoppingBag } from 'lucide-react';
import { PRODUCTS, ProductItem, LINKS } from '../data/constants';
import { PlatformBadge } from './PlatformBadge';

interface ProductCarouselProps {
  onSelectProduct: (product: ProductItem) => void;
}

export const ProductCarousel: React.FC<ProductCarouselProps> = ({
  onSelectProduct,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? PRODUCTS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === PRODUCTS.length - 1 ? 0 : prev + 1));
  };

  // Scroll mobile carousel when index changes
  useEffect(() => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      const cardWidth = container.offsetWidth * 0.85;
      container.scrollTo({
        left: currentIndex * cardWidth,
        behavior: 'smooth',
      });
    }
  }, [currentIndex]);

  const handleTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    startX.current = e.touches[0].pageX - (carouselRef.current?.offsetLeft || 0);
    scrollLeft.current = carouselRef.current?.scrollLeft || 0;
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
    if (carouselRef.current) {
      const container = carouselRef.current;
      const cardWidth = container.offsetWidth * 0.85;
      const newIndex = Math.round(container.scrollLeft / cardWidth);
      if (newIndex >= 0 && newIndex < PRODUCTS.length) {
        setCurrentIndex(newIndex);
      }
    }
  };

  return (
    <section
      id="products-section"
      className="relative min-h-[90vh] sm:min-h-screen flex flex-col justify-center px-4 sm:px-8 py-16 sm:py-24 bg-[#FAF9F7] border-t border-[#ECEAE5] overflow-hidden"
    >
      <div className="max-w-6xl w-full mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-8 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-white border border-[#E8E6E1] text-[11px] font-semibold tracking-wider text-[#73655C] uppercase shadow-xs"
          >
            <Sparkles className="w-3 h-3 text-[#C5A880]" />
            <span>Cardápio Artesanal</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#221E1C] mb-3"
          >
            Feitas para dar água na boca
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-sm sm:text-base text-[#6E645D] max-w-lg font-normal leading-relaxed"
          >
            Camadas generosas, recheio farto, queijo gratinado e receitas
            artesanais preparadas com o mais puro cuidado.
          </motion.p>
        </div>

        {/* Desktop Controls */}
        <div className="hidden md:flex justify-end items-center gap-3 mb-6">
          <button
            id="desktop-carousel-prev"
            onClick={prevSlide}
            aria-label="Produto anterior"
            className="p-3 rounded-full bg-white border border-[#E5E2DC] text-[#423832] hover:bg-[#382F2A] hover:text-white transition-all duration-200 shadow-sm active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            id="desktop-carousel-next"
            onClick={nextSlide}
            aria-label="Próximo produto"
            className="p-3 rounded-full bg-white border border-[#E5E2DC] text-[#423832] hover:bg-[#382F2A] hover:text-white transition-all duration-200 shadow-sm active:scale-95 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Swipe Container (showing 1 card with next card discreetly peeking) */}
        <div
          ref={carouselRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="md:hidden flex gap-4 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory px-4 py-2"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {PRODUCTS.map((product, idx) => (
            <div
              key={product.id}
              className="w-[84vw] max-w-[350px] flex-shrink-0 snap-center"
            >
              <ProductCard
                product={product}
                isFeatured={idx === currentIndex}
                onSelectProduct={onSelectProduct}
              />
            </div>
          ))}
        </div>

        {/* Desktop Grid / Interactive View (Large, Sophisticated, High-Precision) */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8">
          {PRODUCTS.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 + idx * 0.12 }}
            >
              <ProductCard
                product={product}
                isFeatured={true}
                onSelectProduct={onSelectProduct}
              />
            </motion.div>
          ))}
        </div>

        {/* Mobile Indicators */}
        <div className="flex md:hidden justify-center items-center gap-2 mt-6">
          {PRODUCTS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Ir para produto ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? 'w-7 bg-[#382F2A]'
                  : 'w-2 bg-[#D1CBC3] hover:bg-[#A89E95]'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ProductCardProps {
  product: ProductItem;
  isFeatured: boolean;
  onSelectProduct: (product: ProductItem) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isFeatured,
  onSelectProduct,
}) => {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div className="group relative flex flex-col h-full rounded-3xl bg-white border border-[#E9E6E0] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_18px_38px_-8px_rgba(40,32,25,0.12)] transition-all duration-500 hover:-translate-y-1">
      {/* Top Badge: e.g. "Mais Pedida", "500g" */}
      <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
        <span className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide uppercase bg-[#382F2A]/90 backdrop-blur-md text-[#FAF8F5] shadow-xs">
          {product.weight}
        </span>
        {product.badge && (
          <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wide uppercase bg-[#C5A880] text-white shadow-xs">
            {product.badge}
          </span>
        )}
      </div>

      {/* Product Image Frame: Preserving real proportions, professional food photography presentation */}
      <div className="relative w-full pt-[78%] bg-[#F4F2EE] overflow-hidden">
        <img
          src={product.image}
          alt={product.alt}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Subtle gradient vignette to highlight the dish naturally */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/5 pointer-events-none" />
      </div>

      {/* Card Content */}
      <div className="flex-1 flex flex-col justify-between p-6">
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[11px] font-semibold tracking-wider uppercase text-[#8C7E74]">
              {product.subtitle || 'Artesanal'}
            </span>
            <div className="flex items-center gap-1 text-xs text-[#8C7E74]">
              <Scale className="w-3.5 h-3.5 text-[#C5A880]" />
              <span className="font-medium">{product.weight}</span>
            </div>
          </div>

          <h3 className="font-serif text-2xl font-semibold text-[#201C1A] group-hover:text-[#685B53] transition-colors leading-tight mb-2">
            {product.name}
          </h3>

          <p className="text-xs sm:text-sm text-[#736861] leading-relaxed mb-4">
            Receita tradicional montada com ingredientes selecionados, molho especial e camadas suculentas.
          </p>
        </div>

        {/* Order Selection Area: iFood ou 99Food options appear when pressing Pedir */}
        <div className="pt-4 border-t border-[#F0ECE6] flex flex-col gap-2.5">
          {!showOptions ? (
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  setShowOptions(true);
                  onSelectProduct(product);
                }}
                className="flex-1 inline-flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl bg-[#382F2A] hover:bg-[#201C1A] text-[#FAF8F5] text-xs font-bold tracking-wide uppercase transition-all duration-300 shadow-xs hover:shadow-md active:scale-[0.98] cursor-pointer"
              >
                <ShoppingBag className="w-3.5 h-3.5 text-[#D8C7B5]" />
                <span>PEDIR AGORA</span>
              </button>

              <button
                type="button"
                onClick={() => setShowOptions(true)}
                title="Escolher entre iFood ou 99Food"
                className="p-3.5 rounded-xl border border-[#E5E2DC] bg-[#FAF8F5] hover:bg-[#F0ECE6] text-[#423832] transition-colors cursor-pointer text-xs font-semibold"
              >
                Opções
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-2 animate-in fade-in zoom-in-95 duration-200">
              <span className="text-[11px] font-semibold text-[#736861] text-center uppercase tracking-wider">
                Escolha sua plataforma:
              </span>
              <div className="grid grid-cols-2 gap-2">
                {/* Option 1: iFood */}
                <a
                  href={LINKS.ifood}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-[#EA1D2C] hover:bg-[#D41423] text-white text-xs font-bold tracking-wide transition-all shadow-xs hover:shadow-md"
                >
                  <PlatformBadge platform="ifood" size="sm" className="scale-75 -mr-1" />
                  <span>iFood</span>
                </a>

                {/* Option 2: 99Food */}
                <a
                  href={LINKS.ninetyNineFood}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-[#F57C00] hover:bg-[#E65100] text-white text-xs font-bold tracking-wide transition-all shadow-xs hover:shadow-md"
                >
                  <PlatformBadge platform="99food" size="sm" className="scale-75 -mr-1" />
                  <span>99Food</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
