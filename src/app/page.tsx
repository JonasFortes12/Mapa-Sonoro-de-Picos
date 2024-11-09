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

      <section id="mapa" className="container lg:my-24 md:my-16 sm:my-8 h-screen p-10">
        <SectionTitle>Mapa Sonoro</SectionTitle>
        <SoundMapComponent/>
      </section>
      
    </>
  );
}