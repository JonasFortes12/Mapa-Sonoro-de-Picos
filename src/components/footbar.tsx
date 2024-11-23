"use client"

import Image from 'next/image'

export default function Footbar() {
  return (
    <footer className="bg-orange-100 py-4 h-auto ">
      <div className="container mx-auto px-4">
        
        {/* Título centralizado */}
        <h4 className="text-xl sm:text-xl md:text-xl lg:text-xl 
        font-bold mb-8 text-center relative 
        pb-3 after:content-[''] after:absolute after:bottom-0 
        after:left-1/2 after:-translate-x-1/2 after:w-1/4 after:h-0.5 
        after:bg-primary">Apoio</h4>
        
        {/* Seção das logos */}
        <div className="flex flex-col p-4 sm:flex-row items-center justify-center sm:justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <div className="flex items-center space-x-8 sm:space-x-10">
            <Image
              src="/ppgh.png"
              alt="Logo 1"
              width={120}
              height={40}
              className="lg:h-auto md:h-12 h-8 w-auto"
            />
            <Image
              src="/Brasão_UFPI_recortado.png"
              alt="Logo 2"
              width={120}
              height={40}
              className="lg:h-auto md:h-12 h-8 w-auto"
            />
            <Image
              src="/CAPES logo.png"
              alt="Logo 3"
              width={120}
              height={40}
              className="lg:h-auto md:h-12 h-8 w-auto"
            />
          </div>
        </div>


      </div>
    </footer>
  )
}
