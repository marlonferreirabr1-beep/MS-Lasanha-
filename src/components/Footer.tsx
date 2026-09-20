import React from 'react';
import { BRAND, LINKS } from '../data/constants';
import { PlatformBadge } from './PlatformBadge';

export const Footer: React.FC = () => {
  return (
    <footer
      id="footer-section"
      className="py-14 px-6 bg-[#201C1A] text-[#EDEAE5] border-t border-[#302B27] select-none"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Official Logo */}
        <div className="max-w-[180px] sm:max-w-[210px] mb-6">
          <img
            src={BRAND.logo}
            alt="MS Lasanha"
            className="w-full h-auto object-contain brightness-105 filter"
            loading="lazy"
          />
        </div>

        {/* Links to platforms */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mb-8 flex-wrap">
          <a
            id="footer-link-instagram"
            href={LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram da MS Lasanha"
            className="hover:opacity-90 transition-transform hover:scale-105 active:scale-95"
          >
            <PlatformBadge platform="instagram" size="sm" />
          </a>

          <a
            id="footer-link-whatsapp"
            href={LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp da MS Lasanha"
            className="hover:opacity-90 transition-transform hover:scale-105 active:scale-95"
          >
            <PlatformBadge platform="whatsapp" size="sm" />
          </a>

          <a
            id="footer-link-ifood"
            href={LINKS.ifood}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="iFood da MS Lasanha"
            className="hover:opacity-90 transition-transform hover:scale-105 active:scale-95"
          >
            <PlatformBadge platform="ifood" size="sm" />
          </a>

          <a
            id="footer-link-99food"
            href={LINKS.ninetyNineFood}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="99Food da MS Lasanha"
            className="hover:opacity-90 transition-transform hover:scale-105 active:scale-95"
          >
            <PlatformBadge platform="99food" size="sm" />
          </a>
        </div>

        {/* Strict requested text */}
        <p className="font-serif text-sm sm:text-base text-[#D4C8BE] tracking-wide max-w-md leading-relaxed">
          MS Lasanha — feita com dedicação, sabor e história.
        </p>

        <div className="w-12 h-[1px] bg-[#423832] my-6" />

        <p className="text-[11px] text-[#8C7F77]">
          © {new Date().getFullYear()} MS Lasanha. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};
