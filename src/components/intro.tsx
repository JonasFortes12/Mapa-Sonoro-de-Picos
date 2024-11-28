"use client"

import React, { use, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'; // Supondo que ShadcnUI tem um componente de carrossel.
import Autoplay from "embla-carousel-autoplay"
import Typist from 'react-typist-component';
import { HiLightBulb } from "react-icons/hi";
import { IoMdMusicalNotes } from "react-icons/io";
import { GiPartyPopper } from "react-icons/gi";
import { FaGuitar } from "react-icons/fa6";

// imagens de boas vindas
const images = ["/picos-1_11zon.webp", "/picos-2_11zon.webp", "/picos-3_11zon.webp"];

const Intro = () => {

  const [currentImage, setCurrentImage] = React.useState(0);
  const [fade, setFade] = React.useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true); // Inicia o efeito de fade-out
      setTimeout(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        setFade(false); // Aplica o fade-in
      }, 500); // Duração do fade-out
    }, 5000); // Tempo entre as mudanças de imagens

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col md:flex-row h-screen bg-orange-100">
    
      {/* Lado esquerdo com a imagem de fundo e texto de boas-vindas */}
      <div className={`flex-1 bg-cover bg-center relative h-screen transition-opacity duration-500 ${
          fade ? "opacity-0" : "opacity-100"} `} 
        style={{ backgroundImage: `url(${images[currentImage]})` }}
      >

        <div className="absolute inset-0 bg-orange-500 bg-opacity-45 flex items-center justify-center">
          
          <Typist typingDelay={100} cursor={<span className='cursor'>|</span>} loop={true}>
            <span className="text-secondary font-bold p-8 text-center sm:text-4xl md:text-4xl lg:text-4xl">
              Bem-vindo ao Mapa Sonoro de Picos,
              década de 1990.
            </span>
            <Typist.Delay ms={1000} />
          </Typist>

        </div>
      </div>

      {/* Lado direito com o carrossel de texto explicativo */}
      <div className="flex-1 flex items-center justify-center p-5">
        
        <Carousel className="w-3/4 h-max"
        plugins={[
          Autoplay({
            delay: 15000,
          }), 
        ]}
        >
          <CarouselContent className="">
            <CarouselItem className="w-full">
              <div className='border border-primary p-8 rounded-md shadow-lg'>
                <HiLightBulb className="text-primary lg:text-7xl md:text-6xl sm:text-5xl" />
                <br />
                <p className="text-sm md:text-base lg:text-lg text-justify">
                  A ideia deste mapa virtual surgiu durante apresentação de trabalho acadêmico na 
                  realização do VIII Encontro Estadual de História – ANPUH PI, nas dependências do 
                  Centro de Ciências Humanas e Letras, na Universidade Federal do Piauí, campus de Teresina,
                  em agosto de 2024. Com uma pesquisa de mestrado em andamento, sob orientação 
                  do Prof. Dr. Raimundo Nonato Lima dos Santos, que analisa as sonoridades urbanas 
                  da cidade de Picos na década de 1990 achamos pertinente apresentar ao leitor as 
                  paisagens sonoras desta urbe, com a sonoridades de eventos e as músicas reverberadas,
                  das fontes audiovisuais que analisamos. Nelas, estão registradas também as memórias 
                  dos citadinos que vivenciaram esta urbe na referida década e as experiências e 
                  percepções aurais de lugares da cidade.
                </p>
              </div>
            </CarouselItem>


            <CarouselItem className="">
              <div className='border border-primary p-8 rounded-md'>
                <IoMdMusicalNotes className="text-primary lg:text-7xl md:text-6xl sm:text-5xl" />
                <br />
                <p className="text-sm md:text-base lg:text-lg text-justify">
                Neste Mapa Sonoro de Picos, convidamos você para ouvir as músicas interpretadas 
                pela banda Asas do Pagode na urbe em 1998 (com áudio original da época), 
                no centro da cidade, de forma específica no conhecido entre os picoenses 
                como “cruzamento das Pizzaria” (na Rua Olavo Bilac com a Rua Monsenhor Hipólito), 
                em ritmo carnavalesco. As músicas são: Dança da Manivela, de autoria do 
                artista Durval Lelys. Em seguida Mineirinho, de Alexandre Pires, a terceira
                e a quarta são pertencentes do grupo musical É o Tchan, que foram as músicas Bambolê
                e Dança do Põe Põe. A quinta música cantada foi Dança do Sensual, 
                da banda Cheiro de Amor, em seguida Dança da Vassourinha e Pensamento Verde,
                do grupo Molejo e pra encerrar Bom-bocado, do conjunto musical de samba Art Popular.
                </p>
              </div>
            </CarouselItem>

            <CarouselItem className="">
              <div className='border border-primary p-8 rounded-md'>
                <GiPartyPopper className="text-primary lg:text-7xl md:text-6xl sm:text-5xl" />
                <br />
                <p className="text-sm md:text-base lg:text-lg text-justify">
                Em seguida as músicas nacionais e internacionais das apresentações do 
                Show de Calouros realizado no ano de 1992 (com áudio original da época), 
                no Babilônia Club, que esteve localizado no bairro Junco. Com apresentações 
                de danças e músicas cantadas destacamos: Sympathy for the Devil, dos The Rolling Stones;
                I want to hold your hand, Twist and shout e All my loving, de “Os Beatles”; 
                a música Paixão Errante, do cantor Bartô Galeno; Black or White, do artista Michael Jackson;
                e, a canção La Bamba, de Ritchie Valens.
                </p>
              </div>
            </CarouselItem>

            <CarouselItem className="">
              <div className='border border-primary p-8 rounded-md'>
                <FaGuitar className="text-primary lg:text-7xl md:text-6xl sm:text-5xl" />
                <br />
                <p className="text-sm md:text-base lg:text-lg text-justify">
                Finalizamos nosso mapa sonoro nesta cartografia, apresentando a sonoridade das 
                músicas cantadas por intérpretes no Encontro de Seresteiros (com áudio original da época)
                na cidade de Picos, também no bairro Centro, no espaço denominado Country Bar, 
                que esteve localizado na Rua Padre Madeira.  As músicas são: Paloma, dos artistas
                João Paulo e Daniel;  Sem saída, de Odair José; Se eu pudesse, do cantor Lindomar 
                Castilho;  De igual para igual, da dupla Matogrosso e Mathias; Talismã, 
                da dupla Leandro e Leonardo; Deixe o tempo passar, de Robi Draco Rosa; e, 
                Majestade, o sabiá, da artista Roberta Miranda. 
                </p>
              </div>
            </CarouselItem>

          
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        
      </div>
    </div>
  );
};

export default Intro;
