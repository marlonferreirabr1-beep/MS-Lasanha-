import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Scale, Sparkles, ShoppingBag, Users, Check } from 'lucide-react';
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
      className="relative min-h-[90vh] sm:min-h-screen flex flex-col justify-center px-4 sm:px-8 py-20 sm:py-28 bg-transparent border-t border-[#201C1A]/5 overflow-hidden"
    >
      <div className="max-w-6xl w-full mx-auto">
        {/* Header Section with 3D Pill & Cinematic Stagger */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 14, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-white/90 border-t border-t-white border-b border-b-[#DDD2C4] border-x border-white/60 text-[11px] font-bold tracking-widest text-[#6E5E54] uppercase shadow-[0_6px_16px_rgba(60,45,30,0.06),inset_0_1px_1px_rgba(255,255,255,0.95)]"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>Cardápio Artesanal</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#221E1C] mb-3"
          >
            Feitas para dar água na boca
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm sm:text-base text-[#6E635B] max-w-lg font-normal leading-relaxed px-4"
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
            className="p-3.5 rounded-2xl bg-white/90 border-t border-t-white border-b-2 border-b-[#D0C4B4] border-x border-white/80 text-[#382F2A] hover:bg-[#382F2A] hover:text-white transition-all duration-300 shadow-[0_8px_16px_rgba(50,40,30,0.08)] active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            id="desktop-carousel-next"
            onClick={nextSlide}
            aria-label="Próximo produto"
            className="p-3.5 rounded-2xl bg-white/90 border-t border-t-white border-b-2 border-b-[#D0C4B4] border-x border-white/80 text-[#382F2A] hover:bg-[#382F2A] hover:text-white transition-all duration-300 shadow-[0_8px_16px_rgba(50,40,30,0.08)] active:scale-95 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Swipe Container with 3D cards */}
        <div
          ref={carouselRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="md:hidden flex gap-5 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory px-4 py-4"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {PRODUCTS.map((product, idx) => (
            <div
              key={product.id}
              className="w-[84vw] max-w-[360px] flex-shrink-0 snap-center"
            >
              <ProductCard
                product={product}
                isFeatured={idx === currentIndex}
                onSelectProduct={onSelectProduct}
              />
            </div>
          ))}
        </div>

        {/* Desktop Grid / 3D Perspective Staged Cards */}
        <div className="hidden md:grid md:grid-cols-3 gap-7 lg:gap-8">
          {PRODUCTS.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 35, rotateX: 6 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.85, delay: 0.12 + idx * 0.14, ease: [0.16, 1, 0.3, 1] }}
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
              className={`h-2.5 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? 'w-8 bg-[#382F2A]'
                  : 'w-2.5 bg-[#D5CDC3] hover:bg-[#B3A89E]'
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
  onSelectProduct,
}) => {
  const [showOptions, setShowOptions] = useState(false);
  const isOneKg = product.id === 'frango-1kg' || product.weight === '1kg';

  return (
    <div className="card-3d group relative flex flex-col h-full rounded-[28px] overflow-hidden">
      {/* Top 3D Weight & Category Badges */}
      <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
        <span className="px-3.5 py-1.5 rounded-full text-xs font-extrabold tracking-wide uppercase bg-[#241E1C]/90 backdrop-blur-md text-[#FAF8F5] border-t border-t-white/40 shadow-md">
          {product.weight}
        </span>
        {product.badge && (
          <span className="px-3 py-1.5 rounded-full text-[11px] font-bold tracking-wider uppercase bg-[#C5A880] text-white border-t border-t-white/50 shadow-md">
            {product.badge}
          </span>
        )}
      </div>

      {/* Product Image Frame with 3D Zoom & Ambient Depth */}
      <div className="relative w-full pt-[76%] bg-[#EFE9DF] overflow-hidden">
        <img
          src={product.image}
          alt={product.alt}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
        />
        {/* Subtle realistic lighting vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10 pointer-events-none" />
      </div>

      {/* Card Content */}
      <div className="flex-1 flex flex-col justify-between p-6 sm:p-7">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-bold tracking-widest uppercase text-[#8C7E74]">
              {product.subtitle || 'Artesanal'}
            </span>
            <div className="flex items-center gap-1.5 text-xs text-[#8C7E74] font-semibold">
              <Scale className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>{product.weight}</span>
            </div>
          </div>

          <h3 className="font-serif text-2xl sm:text-[26px] font-semibold text-[#201C1A] group-hover:text-[#685B53] transition-colors leading-tight mb-3">
            {product.name}
          </h3>

          {/* CRITICAL USER REQUIREMENT: SPECIAL VISUAL PROMINENCE FOR "SERVE 2 PESSOAS" on 1kg Lasanha */}
          {isOneKg && (
            <div className="my-3">
              <div className="badge-serves-3d flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-center">
                <Users className="w-4 h-4 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]" />
                <span className="text-xs sm:text-sm font-extrabold tracking-widest">
                  SERVE 2 PESSOAS
                </span>
              </div>
            </div>
          )}

          <p className="text-xs sm:text-sm text-[#736861] leading-relaxed mb-4 font-normal">
            {isOneKg
              ? 'Porção generosa de 1kg, receita tradicional montada com molho especial artesanal e camadas suculentas.'
              : 'Receita tradicional montada com ingredientes selecionados, molho especial e camadas suculentas.'}
          </p>
        </div>

        {/* 3D Order Selection Area: iFood or 99Food options */}
        <div className="pt-4 border-t border-[#EDE5DA] flex flex-col gap-2.5">
          {!showOptions ? (
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => {
                  setShowOptions(true);
                  onSelectProduct(product);
                }}
                className="btn-3d-primary flex-1 inline-flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl text-[#FAF8F5] text-xs font-extrabold tracking-wider uppercase cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4 text-[#E2D2BE]" />
                <span>PEDIR AGORA</span>
              </button>

              <button
                type="button"
                onClick={() => setShowOptions(true)}
                title="Escolher entre iFood ou 99Food"
                className="p-3.5 rounded-xl border-t border-t-white border-b-2 border-b-[#DDD2C4] border-x border-white/80 bg-white/90 hover:bg-[#F5ECE1] text-[#382F2A] font-bold text-xs transition-colors cursor-pointer shadow-sm"
              >
                Opções
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-2 animate-in fade-in zoom-in-95 duration-200">
              <span className="text-[11px] font-bold text-[#736861] text-center uppercase tracking-wider">
                Escolha onde pedir:
              </span>
              <div className="grid grid-cols-2 gap-2">
                {/* Option 1: iFood */}
                <a
                  href={LINKS.ifood}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-3d-red inline-flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl text-white text-xs font-bold tracking-wide"
                >
                  <PlatformBadge platform="ifood" size="sm" className="scale-75 -mr-1" />
                  <span>iFood</span>
                </a>

                {/* Option 2: 99Food */}
                <a
                  href={LINKS.ninetyNineFood}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-3d-orange inline-flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl text-white text-xs font-bold tracking-wide"
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

