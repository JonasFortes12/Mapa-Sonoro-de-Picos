import Intro from "@/components/intro";
import { Navbar } from "@/components/navbar";
import SectionTitle from "@/components/section-title";
import SoundMapComponent from "@/components/sound-map";

export default function Home() {
  return (
    <>
      
      <Navbar/>
      <Intro/>
      
      <div className="container mx-auto py-10">
        <SectionTitle>Mapa Sonoro</SectionTitle>
        <SoundMapComponent/>
      </div>
    </>
  );
}