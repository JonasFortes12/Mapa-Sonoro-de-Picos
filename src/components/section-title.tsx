
"use client";

import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  return (
    <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-center relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-1/4 after:h-0.5 after:bg-primary">
      {children}
    </h1>
  );
};

export default SectionTitle;
