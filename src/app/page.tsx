"use client";

import Intro from "@/components/intro";
import { Navbar } from "@/components/navbar";
import SectionTitle from "@/components/section-title";
import Contacts from "@/components/contacts";
import AboutProject from "@/components/about";
import Footbar from "@/components/footbar";
import dynamic from 'next/dynamic';

const SoundMap = dynamic(() => import('@/components/sound-map'), { ssr: false });


export default function Home() {
  return (
    <>
      <Navbar/>
      
      <section id="introdução">
        <Intro/>
      </section>

      <section id="mapa" className="container lg:my-16 md:my-8 sm:my-8 h-auto p-10">
        <SectionTitle>Mapa Sonoro</SectionTitle>
        <SoundMap/>
      </section>

      <section id="sobre" className="container lg:my-16 md:my-8 sm:my-8 h-auto p-10">
        <SectionTitle>Sobre o Projeto</SectionTitle>
        <AboutProject/>
        
      </section>

      <section id="contatos" className="container lg:my-16 md:my-8 sm:my-8 h-auto p-10">
        <SectionTitle>Contatos</SectionTitle>
        <Contacts/>
      </section>

      <Footbar/>
      
    </>
  );
}