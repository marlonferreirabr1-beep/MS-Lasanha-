import React from 'react';

export const ThreeDBackground: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none"
    >
      {/* 1. Base Creamy Beige Luxury Atmosphere Canvas (Calibrated slightly deeper) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F0E6D8] via-[#E5DACB] to-[#D8CBBA]" />

      {/* 2. Soft Warm Ambient Light Caustics & Vignette */}
      <div className="absolute top-[-15%] left-[20%] w-[800px] h-[700px] rounded-full bg-gradient-to-br from-[#F6EDE1] via-[#E4D7C5]/60 to-transparent blur-[120px] opacity-90" />
      <div className="absolute top-[40%] right-[-10%] w-[650px] h-[650px] rounded-full bg-gradient-to-tl from-[#D6C5AF]/65 via-[#E3D6C6]/45 to-transparent blur-[100px] opacity-80" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[750px] h-[750px] rounded-full bg-gradient-to-tr from-[#C9B8A2]/60 via-[#DBCFBE]/35 to-transparent blur-[130px] opacity-75" />

      {/* 3. Subtle Neutral Organic Wave Overlay with calibrated richness */}
      <div
        className="absolute inset-0 opacity-35 mix-blend-multiply bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{
          backgroundImage: `url('https://i.postimg.cc/ZKfJ6WBd/modelo-de-plano-de-fundo-padrao-de-cor-neutra-vetor-656853-281.jpg')`,
        }}
      />

      {/* 4. Subtle Fine Texture Layer for High Craftsmanship Depth */}
      <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none bg-[radial-gradient(#201C1A_1px,transparent_1px)] [background-size:16px_16px]" />
    </div>
  );
};

