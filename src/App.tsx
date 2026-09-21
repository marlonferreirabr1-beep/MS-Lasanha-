import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { OrderOptionsSection } from './components/OrderOptionsSection';
import { ProductCarousel } from './components/ProductCarousel';
import { OtherOptionsSection } from './components/OtherOptionsSection';
import { HistorySection } from './components/HistorySection';
import { InstagramSection } from './components/InstagramSection';
import { FinalOrderSection } from './components/FinalOrderSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { OrderModal } from './components/OrderModal';
import { ThreeDBackground } from './components/ThreeDBackground';
import { ProductItem } from './data/constants';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHeroOrderClick = () => {
    setSelectedProduct(null);
    setIsModalOpen(true);
  };

  const handleProductSelect = (product: ProductItem) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleBeverageOrder = () => {
    setSelectedProduct(null);
    setIsModalOpen(true);
  };

  const handleHeroScrollDown = () => {
    scrollToSection('order-options-section');
  };

  return (
    <div className="relative min-h-screen text-[#1E1B19] selection:bg-[#4A3F38] selection:text-[#FAF8F5]">
      {/* 3D Kinetic Background with Glass Bubbles, Parallax & Creamy Warm Ambient Lights */}
      <ThreeDBackground />

      {/* Top micro brand banner (discreet, luxury, 3D glassmorphism) */}
      <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#FAF6F0]/80 border-b border-white/60 shadow-[0_4px_20px_rgba(50,40,30,0.04),inset_0_1px_1px_rgba(255,255,255,0.8)] transition-all">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
          <button
            onClick={() => scrollToSection('hero-section')}
            className="flex items-center gap-2.5 text-left cursor-pointer group"
          >
            <span className="font-serif font-bold text-lg sm:text-2xl tracking-tight text-[#221E1C] group-hover:text-[#685B53] transition-colors">
              MS Lasanha
            </span>
            <span className="hidden xs:inline-block w-1.5 h-1.5 rounded-full bg-[#C5A880] shadow-[0_0_8px_rgba(197,168,128,0.8)]" />
            <span className="hidden sm:inline-block text-xs text-[#82746B] font-medium tracking-wide">
              Gastronomia Artesanal
            </span>
          </button>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => scrollToSection('products-section')}
              className="text-xs sm:text-sm font-semibold text-[#685B53] hover:text-[#221E1C] px-3 py-1.5 rounded-xl hover:bg-white/60 transition-all cursor-pointer"
            >
              Lasanhas
            </button>
            <button
              onClick={() => scrollToSection('history-section')}
              className="text-xs sm:text-sm font-semibold text-[#685B53] hover:text-[#221E1C] px-3 py-1.5 rounded-xl hover:bg-white/60 transition-all cursor-pointer"
            >
              Nossa História
            </button>
            <button
              onClick={() => {
                setSelectedProduct(null);
                setIsModalOpen(true);
              }}
              className="btn-3d-primary text-xs font-bold uppercase tracking-wider text-white px-4 sm:px-5 py-2 rounded-xl cursor-pointer"
            >
              Pedir
            </button>
          </div>
        </div>
      </header>

      {/* Main Vertical Content Slides */}
      <main className="w-full">
        {/* Slide 1: Primeira Tela - MS Lasanha */}
        <HeroSection
          onOrderClick={handleHeroOrderClick}
          onScrollDown={handleHeroScrollDown}
        />

        {/* Slide 2: Escolha Onde Pedir (iFood, 99Food, WhatsApp) */}
        <OrderOptionsSection />

        {/* Slide 3: Nossas Lasanhas (Horizontal Carousel with real photos & cards) */}
        <ProductCarousel onSelectProduct={handleProductSelect} />

        {/* Slide 4: Outras Opções (Coca-Cola, Coca Zero, Guaraná) */}
        <OtherOptionsSection onOpenOrderModal={handleBeverageOrder} />

        {/* Slide 5: Nossa História (Minha História) */}
        <HistorySection />

        {/* Slide 6: Instagram Oficial */}
        <InstagramSection />

        {/* Slide 7: Seção Final — Pedido (3 Big Buttons) */}
        <FinalOrderSection />
      </main>

      {/* Slide 8: Rodapé Minimalista */}
      <Footer />

      {/* Floating Discreet WhatsApp CTA */}
      <FloatingWhatsApp />

      {/* Quick Order Modal / Tray */}
      <OrderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={selectedProduct}
      />
    </div>
  );
}
