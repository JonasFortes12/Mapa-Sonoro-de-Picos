'use client'

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollingDown, setScrollingDown] = useState(false);  // Estado para controle da direção de rolagem
  const [lastScrollY, setLastScrollY] = useState(0);  // Armazena a última posição da rolagem

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      // Rolando para baixo
      setScrollingDown(true);
    } else {
      // Rolando para cima
      setScrollingDown(false);
    }

    setLastScrollY(window.scrollY); // Atualiza a posição da rolagem
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll); // Adiciona o evento de rolagem

    // Remove o evento de rolagem ao desmontar o componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`bg-background shadow-lg mb-6 fixed w-full top-0 left-0 transition-all duration-300 z-50 ${
        scrollingDown ? "transform -translate-y-full" : "transform translate-y-0"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-24">
            <div>
              <Link href="/" className="flex items-center py-4 px-2">
                <span className="font-semibold text-primary text-2xl">Mapa Sonoro de Picos</span>
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-1">
              <Link
                href="#introdução"
                className="tracking-wide text-lg py-4 px-2 text-foreground font-semibold hover:text-primary transition duration-200"
              >
                Introdução
              </Link>
              <Link
                href="#mapa"
                className="tracking-wide text-lg py-4 px-2 text-foreground font-semibold hover:text-primary transition duration-200"
              >
                Mapa Sonoro
              </Link>
              <Link
                href="/"
                className="tracking-wide text-lg py-4 px-2 text-foreground font-semibold hover:text-primary transition duration-200"
              >
                O Projeto
              </Link>
              <Link
                href="/"
                className="tracking-wide text-lg py-4 px-2 text-foreground font-semibold hover:text-primary transition duration-200"
              >
                Contatos
              </Link>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6 text-gray-500" /> : <Menu className="h-6 w-6 text-gray-500" />}
            </button>
          </div>
        </div>
      </div>
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <Link
          href="/"
          className="block py-2 px-4 text-base hover:bg-primary hover:text-primary-foreground transition duration-200"
        >
          Introdução
        </Link>
        <Link
          href="/"
          className="block py-2 px-4 text-base hover:bg-primary hover:text-primary-foreground transition duration-200"
        >
          O Projeto
        </Link>
        <Link
          href="/"
          className="block py-2 px-4 text-base hover:bg-primary hover:text-primary-foreground transition duration-200"
        >
          Mapa Sonoro
        </Link>
        <Link
          href="/"
          className="block py-2 px-4 text-base hover:bg-primary hover:text-primary-foreground transition duration-200"
        >
          Contatos
        </Link>
      </div>
    </nav>
  );
}
