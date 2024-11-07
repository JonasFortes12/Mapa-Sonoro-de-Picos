'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          
          <div className="flex space-x-7">
            <div>
              <Link href="/" className="flex items-center py-4 px-2">
                <span className="font-semibold text-primary text-lg">Mapa Sonoro de Picos</span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <Link href="/" className="py-4 px-2 text-foreground font-semibold hover:text-primary transition duration-200">Introdução</Link>
              <Link href="/" className="py-4 px-2 text-foreground font-semibold hover:text-primary transition duration-200">Mapa Sonoro</Link>
              <Link href="/" className="py-4 px-2 text-foreground font-semibold hover:text-primary transition duration-200">O Projeto</Link>
              <Link href="/" className="py-4 px-2 text-foreground font-semibold hover:text-primary transition duration-200">Contatos</Link>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6 text-gray-500" /> : <Menu className="h-6 w-6 text-gray-500" />}
            </button>
          </div>
        </div>
      </div>
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <Link href="/" className="block py-2 px-4 text-base hover:bg-primary hover:text-secondary transition duration-200">Introdução</Link>
        <Link href="/" className="block py-2 px-4 text-base hover:bg-primary hover:text-secondary transition duration-200">Mapa Sonoro</Link>
        <Link href="/" className="block py-2 px-4 text-base hover:bg-primary hover:text-secondary transition duration-200">O Projeto</Link>
        <Link href="/" className="block py-2 px-4 text-base hover:bg-primary hover:text-secondary transition duration-200">Contatos</Link>
      </div>
    </nav>
  )
}