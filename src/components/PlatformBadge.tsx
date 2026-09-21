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
    sm: 'w-9 h-9 rounded-xl',
    md: 'w-13 h-13 rounded-2xl',
    lg: 'w-16 h-16 rounded-[22px]',
    xl: 'w-20 h-20 rounded-[28px]',
  };

  const getPlatformDetails = () => {
    switch (platform) {
      case 'ifood':
        return {
          name: 'iFood',
          bg: 'bg-gradient-to-b from-[#FF2B3A] via-[#EA1D2C] to-[#B30F1C]',
          shadow: 'shadow-[0_12px_28px_-6px_rgba(234,29,44,0.48),0_4px_10px_rgba(234,29,44,0.25),inset_0_2px_3px_rgba(255,255,255,0.65),inset_0_-3px_5px_rgba(0,0,0,0.35)]',
          border: 'border-t-2 border-t-white/70 border-b-2 border-b-black/30 border-x border-white/30',
          glow: 'group-hover:shadow-[0_16px_36px_-4px_rgba(234,29,44,0.65),0_6px_14px_rgba(234,29,44,0.35),inset_0_2.5px_4px_rgba(255,255,255,0.85)]',
          renderLogo: () => (
            <svg
              viewBox="0 0 1004 530.58"
              className="w-full h-full p-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
              fill="#FFFFFF"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="iFood"
            >
              {/* Official iFood vector logotype & smile arrow */}
              <path
                d="M-4,529.31H72.41l42.46-211.2H38.45ZM42.66,292.92h76.73L132,229.73H55.3Zm59.47,295.82h76.42l46.69-228.18h57.31L291,318.11H234.79l2.13-9.55c3.18-18,9.55-38.21,38.2-38.21,17,0,32.91,1.06,48.82,8.49l8.5-44.57a167.8,167.8,0,0,0-55.19-9.56c-61.56,0-104,36.09-119.93,93.4H130.79l-8.49,42.45h26.53Z"
                transform="translate(4 -224.71)"
              />
              <path
                d="M344.11,533.56c90.21,0,152.83-81.73,152.83-148.59,0-49.88-45.64-71.11-90.21-71.11C308,313.86,253.9,402,253.9,462.45c0,49.88,46.7,71.11,90.21,71.11m242,0c90.21,0,152.83-81.73,152.83-148.59,0-49.88-46.7-71.11-91.28-71.11-98.7,0-152.82,88.09-152.82,148.59,0,49.88,47.76,71.11,91.27,71.11m277-4.25h75.35L1000,229H923.59l-18.05,89.15-31.84-3.18c-74.29,0-142.21,95.51-142.21,163.44,0,27.59,18,55.19,48.82,55.19,43.51,0,74.29-21.23,87-42.46h4.24ZM627.48,687.45a295,295,0,0,1-212.26,66.86c-100.83-6.37-173-83.85-185.73-165.57h4.24c23.35,51,79.6,98.71,148.59,106.13,70,8.49,153.89-23.34,199.52-66.86L530.9,588.74H684.79l-34,163.45-22.29-63.68Z"
                transform="translate(4 -224.71)"
              />
            </svg>
          ),
        };
      case '99food':
        return {
          name: '99Food',
          bg: 'bg-gradient-to-b from-[#FFA726] via-[#FF8F00] to-[#E65100]',
          shadow: 'shadow-[0_12px_28px_-6px_rgba(255,143,0,0.48),0_4px_10px_rgba(255,143,0,0.25),inset_0_2px_3px_rgba(255,255,255,0.7),inset_0_-3px_5px_rgba(0,0,0,0.3)]',
          border: 'border-t-2 border-t-white/70 border-b-2 border-b-black/30 border-x border-white/30',
          glow: 'group-hover:shadow-[0_16px_36px_-4px_rgba(255,143,0,0.65),0_6px_14px_rgba(255,143,0,0.35),inset_0_2.5px_4px_rgba(255,255,255,0.9)]',
          renderLogo: () => (
            <svg
              viewBox="40 100 420 370"
              className="w-full h-full p-1.5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="99Food"
            >
              {/* Official 99 Brand Vector Glyphs */}
              <path
                d="m336.5 131.94c-26.428 0-49.864 13.069-64.467 33.217-9.3301 12.868-15.036 28.624-15.63 45.716l-0.0746 2.953c0 38.867 26.527 71.387 62.089 79.765l-44.431 69.233c-1.4402 2.2464 0.13947 5.2286 2.7661 5.2286h54.571c1.3301 0 2.5738-0.68593 3.3035-1.8223l68.789-107.2c8.4043-12.943 13.256-28.505 13.256-45.202v-2.953c-0.66985-17.137-6.4084-32.932-15.779-45.819-14.608-20.091-38.007-33.114-64.392-33.114zm0 49.034c16.179 0 29.299 13.38 29.325 29.9 2e-3 5.2954-1.3217 10.221-3.6399 14.508l-2.2382 3.4857c-5.3517 7.283-13.846 12.018-23.447 12.018-16.199 0-29.33-13.41-29.33-29.956 0.0311-16.572 13.148-29.956 29.33-29.956zm-173-49.033c26.385 0 49.787 13.021 64.397 33.113 9.3706 12.887 15.105 28.685 15.772 45.821v2.9502c0 16.698-4.8488 32.26-13.252 45.202l-68.789 107.2c-0.7299 1.1364-1.9703 1.8206-3.3014 1.8206h-54.573c-2.6275 0-4.2038-2.9785-2.7641-5.2249l44.428-69.234c-35.563-8.378-62.086-40.9-62.086-79.767l0.07392-2.9502c0.59235-17.092 6.301-32.852 15.629-45.72 14.605-20.149 38.038-33.214 64.467-33.214zm-2.4e-4 108.94c9.6014 0 18.098-4.733 23.448-12.016l2.238-3.4878c2.3175-4.2868 3.6431-9.2098 3.6409-14.505-0.028-16.519-13.146-29.903-29.327-29.903-16.181 0-29.298 13.383-29.329 29.955 0 16.545 13.131 29.956 29.329 29.956z"
                fill="#FFFFFF"
              />
              {/* Food Sub-typography */}
              <text
                x="250"
                y="435"
                textAnchor="middle"
                fill="#FFFFFF"
                fontSize="76"
                fontWeight="900"
                letterSpacing="4"
                fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
              >
                FOOD
              </text>
            </svg>
          ),
        };
      case 'whatsapp':
        return {
          name: 'WhatsApp',
          bg: 'bg-gradient-to-b from-[#4EED85] via-[#25D366] to-[#128C7E]',
          shadow: 'shadow-[0_12px_28px_-6px_rgba(37,211,102,0.48),0_4px_10px_rgba(37,211,102,0.25),inset_0_2px_3px_rgba(255,255,255,0.7),inset_0_-3px_5px_rgba(0,0,0,0.3)]',
          border: 'border-t-2 border-t-white/70 border-b-2 border-b-black/30 border-x border-white/30',
          glow: 'group-hover:shadow-[0_16px_36px_-4px_rgba(37,211,102,0.65),0_6px_14px_rgba(37,211,102,0.35),inset_0_2.5px_4px_rgba(255,255,255,0.9)]',
          renderLogo: () => (
            <svg
              viewBox="0 0 24 24"
              className="w-full h-full p-2.5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
              fill="#FFFFFF"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="WhatsApp"
            >
              {/* Authentic official WhatsApp vector path with speech bubble & telephone receiver */}
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          ),
        };
      case 'instagram':
        return {
          name: 'Instagram',
          bg: 'bg-gradient-to-tr from-[#FFDC80] via-[#F77737] via-[#E1306C] via-[#C13584] to-[#833AB4]',
          shadow: 'shadow-[0_12px_28px_-6px_rgba(225,48,108,0.48),0_4px_10px_rgba(225,48,108,0.25),inset_0_2px_3px_rgba(255,255,255,0.7),inset_0_-3px_5px_rgba(0,0,0,0.3)]',
          border: 'border-t-2 border-t-white/70 border-b-2 border-b-black/30 border-x border-white/30',
          glow: 'group-hover:shadow-[0_16px_36px_-4px_rgba(225,48,108,0.65),0_6px_14px_rgba(225,48,108,0.35),inset_0_2.5px_4px_rgba(255,255,255,0.9)]',
          renderLogo: () => (
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full p-2.5 drop-shadow-[0_2px_5px_rgba(0,0,0,0.35)]"
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
        className={`relative flex items-center justify-center ${sizeClasses[size]} ${config.bg} ${config.shadow} ${config.border} ${config.glow} overflow-hidden group cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:scale-105 active:translate-y-0.5 active:scale-95`}
      >
        {/* Curved Glass Specular Highlight (Lens Reflection Dome) */}
        <div className="absolute -top-[10%] inset-x-0 h-[60%] bg-gradient-to-b from-white/60 via-white/20 to-transparent pointer-events-none rounded-t-[inherit]" />
        
        {/* Micro-dot corner specular highlight */}
        <div className="absolute top-1.5 left-2 w-2 h-1 bg-white/70 rounded-full blur-[0.5px] pointer-events-none" />

        {/* Diagonal high-gloss light beam */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/15 to-transparent pointer-events-none" />

        {/* Physical lower ambient occlusion shadow inside button */}
        <div className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-t from-black/35 to-transparent pointer-events-none rounded-b-[inherit]" />

        {/* The Authentic Crisp Logo */}
        <div className="relative z-10 w-full h-full flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
          {config.renderLogo()}
        </div>
      </div>

      {showLabel && (
        <span className="font-semibold text-sm text-[#231E1B] tracking-tight">
          {config.name}
        </span>
      )}
    </div>
  );
};

