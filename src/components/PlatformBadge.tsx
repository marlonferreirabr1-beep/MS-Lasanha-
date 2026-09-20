import React from 'react';

type PlatformType = 'ifood' | '99food' | 'whatsapp' | 'instagram';

interface PlatformBadgeProps {
  platform: PlatformType;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showLabel?: boolean;
  className?: string;
}

export const PlatformBadge: React.FC<PlatformBadgeProps> = ({
  platform,
  size = 'md',
  showLabel = false,
  className = '',
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8 rounded-xl',
    md: 'w-12 h-12 rounded-2xl',
    lg: 'w-16 h-16 rounded-[22px]',
    xl: 'w-20 h-20 rounded-[28px]',
  };

  const iconSizes = {
    sm: 18,
    md: 26,
    lg: 36,
    xl: 46,
  };

  const getPlatformDetails = () => {
    switch (platform) {
      case 'ifood':
        return {
          name: 'iFood',
          bg: 'bg-gradient-to-b from-[#EA1D2C] to-[#C4121F]',
          shadow: 'shadow-[0_10px_25px_-5px_rgba(234,29,44,0.38),inset_0_1.5px_1.5px_rgba(255,255,255,0.4),inset_0_-2px_4px_rgba(0,0,0,0.25)]',
          border: 'border border-white/20',
          renderLogo: () => (
            // Official iFood smiley with red base and authentic white smile dots/mouth
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full p-2.5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="#FFFFFF">
                {/* iFood iconic typographic mark & smiley */}
                <path d="M22 36c-2.4 0-4.3 1.9-4.3 4.3v24.4c0 2.4 1.9 4.3 4.3 4.3 2.4 0 4.3-1.9 4.3-4.3V40.3c0-2.4-1.9-4.3-4.3-4.3z" />
                <circle cx="22" cy="27" r="4.3" />
                {/* Smile curve */}
                <path
                  d="M34 57c4.2 9.5 13.6 15 24 15 10.4 0 19.8-5.5 24-15 1.1-2.4-.4-5.1-3-5.5-2.4-.4-4.7 1.1-5.5 3.3-2.9 6.8-9.1 10.5-15.5 10.5-6.4 0-12.6-3.7-15.5-10.5-.8-2.2-3.1-3.7-5.5-3.3-2.6.4-4.1 3.1-3 5.5z"
                  fill="#FFFFFF"
                />
                {/* Food Dots / Taste accent */}
                <circle cx="45" cy="41" r="5" />
                <circle cx="71" cy="41" r="5" />
              </g>
            </svg>
          ),
        };
      case '99food':
        return {
          name: '99Food',
          bg: 'bg-gradient-to-b from-[#FFA726] to-[#F57C00]',
          shadow: 'shadow-[0_10px_25px_-5px_rgba(245,124,0,0.38),inset_0_1.5px_1.5px_rgba(255,255,255,0.45),inset_0_-2px_4px_rgba(0,0,0,0.2)]',
          border: 'border border-white/25',
          renderLogo: () => (
            // Official 99 / 99Food brand emblem
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full p-2.5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.18)]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="#FFFFFF">
                {/* Left '9' */}
                <path d="M38 30c-7.2 0-13 5.8-13 13 0 7.2 5.8 13 13 13 3.1 0 6-.9 8.2-2.7L39 70h7.5l8.5-27.5V30H38zm0 19.5c-3.6 0-6.5-2.9-6.5-6.5s2.9-6.5 6.5-6.5 6.5 2.9 6.5 6.5-2.9 6.5-6.5 6.5z" />
                {/* Right '9' */}
                <path d="M62 30c-7.2 0-13 5.8-13 13 0 7.2 5.8 13 13 13 3.1 0 6-.9 8.2-2.7L63 70h7.5l8.5-27.5V30H62zm0 19.5c-3.6 0-6.5-2.9-6.5-6.5s2.9-6.5 6.5-6.5 6.5 2.9 6.5 6.5-2.9 6.5-6.5 6.5z" />
              </g>
            </svg>
          ),
        };
      case 'whatsapp':
        return {
          name: 'WhatsApp',
          bg: 'bg-gradient-to-b from-[#2FD666] to-[#1EBE5D]',
          shadow: 'shadow-[0_10px_25px_-5px_rgba(37,211,102,0.38),inset_0_1.5px_1.5px_rgba(255,255,255,0.45),inset_0_-2px_4px_rgba(0,0,0,0.2)]',
          border: 'border border-white/25',
          renderLogo: () => (
            // Official WhatsApp icon with phone bubble
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full p-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M50 14c-19.9 0-36 16.1-36 36 0 6.3 1.6 12.3 4.8 17.6L14 84l17-4.5c5 2.8 10.8 4.5 17 4.5 19.9 0 36-16.1 36-36s-16.1-34-36-34zm0 65.5c-5.4 0-10.7-1.4-15.3-4.2l-1.1-.7-10.2 2.7 2.7-9.9-.7-1.2C22.4 61.6 21 55.9 21 50c0-16 13-29 29-29s29 13 29 29-13 29.5-29 29.5zm15.9-21.7c-.9-.4-5.2-2.6-6-2.9-.8-.3-1.4-.4-2 .4-.6.9-2.3 2.9-2.8 3.5-.5.6-1 .7-1.9.2-.9-.4-3.7-1.4-7-4.4-2.6-2.3-4.3-5.2-4.8-6.1-.5-.9 0-1.3.4-1.8.4-.4.9-1 1.4-1.6.4-.5.6-.9.9-1.5.3-.6.1-1.1-.1-1.5-.2-.4-2-4.9-2.8-6.7-.7-1.8-1.5-1.5-2-1.5h-1.7c-.6 0-1.6.2-2.4 1.1-.8.9-3.2 3.1-3.2 7.6s3.3 8.8 3.7 9.4c.5.6 6.4 9.8 15.5 13.8 2.2.9 3.9 1.5 5.2 2 2.2.7 4.2.6 5.8.4 1.8-.3 5.2-2.1 6-4.2.7-2.1.7-3.8.5-4.2-.2-.4-.8-.6-1.7-1.1z"
                fill="#FFFFFF"
              />
            </svg>
          ),
        };
      case 'instagram':
        return {
          name: 'Instagram',
          bg: 'bg-gradient-to-tr from-[#FFDC80] via-[#F77737] via-[#E1306C] via-[#C13584] to-[#833AB4]',
          shadow: 'shadow-[0_10px_25px_-5px_rgba(225,48,108,0.38),inset_0_1.5px_1.5px_rgba(255,255,255,0.45),inset_0_-2px_4px_rgba(0,0,0,0.2)]',
          border: 'border border-white/25',
          renderLogo: () => (
            // Official Instagram Camera Glyphs
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full p-2.5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="20"
                y="20"
                width="60"
                height="60"
                rx="16"
                stroke="#FFFFFF"
                strokeWidth="7"
              />
              <circle cx="50" cy="50" r="14" stroke="#FFFFFF" strokeWidth="7" />
              <circle cx="66" cy="34" r="4.5" fill="#FFFFFF" />
            </svg>
          ),
        };
    }
  };

  const config = getPlatformDetails();

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <div
        className={`relative flex items-center justify-center ${sizeClasses[size]} ${config.bg} ${config.shadow} ${config.border} overflow-hidden group cursor-pointer transition-transform duration-300 active:scale-95`}
      >
        {/* Physical 3D light reflection bevel across the top half */}
        <div className="absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-white/35 to-transparent pointer-events-none rounded-t-[inherit]" />
        
        {/* Subtle bottom bevel rim for 3D depth */}
        <div className="absolute inset-x-0 bottom-0 h-1 bg-black/15 pointer-events-none rounded-b-[inherit]" />

        {/* The Authentic Logo */}
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          {config.renderLogo()}
        </div>
      </div>

      {showLabel && (
        <span className="font-medium text-sm text-[#1D1B1A] tracking-tight">
          {config.name}
        </span>
      )}
    </div>
  );
};
