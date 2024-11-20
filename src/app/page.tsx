import Intro from "@/components/intro";
import { Navbar } from "@/components/navbar";
import SectionTitle from "@/components/section-title";
import SoundMapComponent from "@/components/sound-map";

export default function Home() {
  return (
    <>
      <Navbar/>
      
      <section id="introdução">
        <Intro/>
      </section>

      <section id="mapa" className="container lg:my-16 md:my-8 sm:my-8 h-screen p-10">
        <SectionTitle>Mapa Sonoro</SectionTitle>
        <SoundMapComponent/>
      </section>

      <section id="Contatos" className="container lg:my-16 md:my-8 sm:my-8 h-screen p-10">
        <SectionTitle>Contatos</SectionTitle> 
      </section>
      
    </>
  );
}