import React from 'react';

export const ThreeDBackground: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none"
    >
      {/* 1. Base Creamy Beige Luxury Atmosphere Canvas */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAF6F0] via-[#F3ECE3] to-[#E9DFCF]" />

      {/* 2. Soft Warm Ambient Light Caustics & Vignette */}
      <div className="absolute top-[-15%] left-[20%] w-[800px] h-[700px] rounded-full bg-gradient-to-br from-[#FFF9F2] via-[#EFE6D8]/60 to-transparent blur-[120px] opacity-90" />
      <div className="absolute top-[40%] right-[-10%] w-[650px] h-[650px] rounded-full bg-gradient-to-tl from-[#E2D5C3]/70 via-[#EFE7DC]/50 to-transparent blur-[100px] opacity-80" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[750px] h-[750px] rounded-full bg-gradient-to-tr from-[#D8CABE]/60 via-[#EAE1D4]/40 to-transparent blur-[130px] opacity-75" />

      {/* 3. Subtle Neutral Organic Wave Overlay with soft blend */}
      <div
        className="absolute inset-0 opacity-25 mix-blend-multiply bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{
          backgroundImage: `url('https://i.postimg.cc/ZKfJ6WBd/modelo-de-plano-de-fundo-padrao-de-cor-neutra-vetor-656853-281.jpg')`,
        }}
      />

      {/* 4. Subtle Fine Texture Layer for High Craftsmanship Depth */}
      <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none bg-[radial-gradient(#201C1A_1px,transparent_1px)] [background-size:16px_16px]" />
    </div>
  );
};

