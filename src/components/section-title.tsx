"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";

interface SectionTitleProps {
  children: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  useEffect(() => {
    // Seleciona as barras do SVG para animar
    gsap.to(".wave-line", {
      scaleY: (i) => 0.5 + Math.random(), // Escala aleatória
      transformOrigin: "50% 50%",
      repeat: -1,
      yoyo: true,
      duration: 0.005,
      stagger: 0.05, // Delay entre cada barra
    });
  }, []);

  return (
    <div className="text-center relative pb-8">
      <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
        {children}
      </h1>
      {/* SVG do sinal sonoro */}
      <div className="flex justify-center items-center">
        <svg
          width="300"
          height="50"
          viewBox="0 0 200 50"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Barras do sinal */}
          {[...Array(20)].map((_, i) => (
            <rect
              key={i}
              className="wave-line"
              x={i * 10} // Espaçamento entre barras
              y="15"
              width="4"
              height="15"
              fill="#f97316"
              rx="2" // Cantos arredondados
            />
          ))}
        </svg>
      </div>
    </div>
  );
};

export default SectionTitle;
