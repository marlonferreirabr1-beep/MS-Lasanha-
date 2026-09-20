import React from 'react';
import { LINKS } from '../data/constants';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside
      aria-label="Atendimento via WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center group select-none"
    >
      <a
        id="floating-whatsapp-button"
        href={LINKS.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fazer pedido pelo WhatsApp"
        className="relative flex items-center gap-2.5 pl-3 pr-3.5 py-2.5 rounded-full bg-[#1EBE5D] text-white shadow-[0_10px_25px_-5px_rgba(30,190,93,0.45),0_3px_8px_rgba(0,0,0,0.12),inset_0_1.5px_1.5px_rgba(255,255,255,0.4)] hover:bg-[#18A450] hover:shadow-[0_14px_30px_-4px_rgba(30,190,93,0.55)] transition-all duration-300 active:scale-95"
      >
        {/* Pulsing gentle aura */}
        <span className="absolute -inset-1 rounded-full bg-[#1EBE5D]/25 animate-ping pointer-events-none -z-10" />

        {/* Official WhatsApp Glyph with 3D feel */}
        <div className="w-7 h-7 flex items-center justify-center filter drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full fill-white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M50 14c-19.9 0-36 16.1-36 36 0 6.3 1.6 12.3 4.8 17.6L14 84l17-4.5c5 2.8 10.8 4.5 17 4.5 19.9 0 36-16.1 36-36s-16.1-34-36-34zm0 65.5c-5.4 0-10.7-1.4-15.3-4.2l-1.1-.7-10.2 2.7 2.7-9.9-.7-1.2C22.4 61.6 21 55.9 21 50c0-16 13-29 29-29s29 13 29 29-13 29.5-29 29.5zm15.9-21.7c-.9-.4-5.2-2.6-6-2.9-.8-.3-1.4-.4-2 .4-.6.9-2.3 2.9-2.8 3.5-.5.6-1 .7-1.9.2-.9-.4-3.7-1.4-7-4.4-2.6-2.3-4.3-5.2-4.8-6.1-.5-.9 0-1.3.4-1.8.4-.4.9-1 1.4-1.6.4-.5.6-.9.9-1.5.3-.6.1-1.1-.1-1.5-.2-.4-2-4.9-2.8-6.7-.7-1.8-1.5-1.5-2-1.5h-1.7c-.6 0-1.6.2-2.4 1.1-.8.9-3.2 3.1-3.2 7.6s3.3 8.8 3.7 9.4c.5.6 6.4 9.8 15.5 13.8 2.2.9 3.9 1.5 5.2 2 2.2.7 4.2.6 5.8.4 1.8-.3 5.2-2.1 6-4.2.7-2.1.7-3.8.5-4.2-.2-.4-.8-.6-1.7-1.1z" />
          </svg>
        </div>

        <div className="flex flex-col text-left">
          <span className="text-[10px] uppercase font-semibold tracking-wider text-white/85 leading-none">
            Peça agora
          </span>
          <span className="text-xs font-bold leading-tight tracking-tight">
            WhatsApp
          </span>
        </div>
      </a>
    </aside>
  );
};
