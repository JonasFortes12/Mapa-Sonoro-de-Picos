"use client";

import React, { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Volume2, VolumeX } from 'lucide-react'
import { FaMousePointer, FaVolumeUp, FaListOl } from 'react-icons/fa'
import { HiCursorClick } from "react-icons/hi";

interface SoundPoint {
  id: number
  position: [number, number]
  soundFile: string
  name: string
  image: string
  description: string
}

const soundPoints: SoundPoint[] = [
  { id: 1, position: [-7.085229, -41.471446], 
    soundFile: '/sounds/asas_do_pagode_compressed.mp3', 
    name: 'Asas do Pagode, 1998.' ,
    image: '/point_imgs/point1.png', 
    description: 'Um encontro animado com o grupo Asas do Pazgode em 1998.'},

  { id: 2, position: [-7.079547, -41.433069], 
    soundFile: '/sounds/show_de_calouros_compressed.mp3', 
    name: 'Show de Calouros, 1992.',
    image: '/point_imgs/point2.png', 
    description: 'Um evento memorável com talentos locais em 1992.' },

  { id: 3, position: [-7.085356, -41.467399], 
    soundFile: '/sounds/encontro_dos_seresteiros_compressed.mp3', 
    name: 'Encontro de Seresteiros.',
    image: '/point_imgs/point3.png', 
    description: 'Uma noite inesquecível com os melhores seresteiros da região.'},
  
]

const SoundMapComponent: React.FC = () => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [activePointId, setActivePointId] = useState<number | null>(null)

  useEffect(() => {
    return () => {
      if (audio) {
        audio.pause()
        audio.currentTime = 0
      }
    }
  }, [audio])

  const playSound = (soundFile: string, pointId: number) => {
    if (audio) {
      audio.pause()
      audio.currentTime = 0
    }

    const newAudio = new Audio(soundFile)
    newAudio.play()
    setAudio(newAudio)
    setIsPlaying(true)
    setActivePointId(pointId)

    newAudio.onended = () => {
      setIsPlaying(false)
      setActivePointId(null)
    }
  }

  const stopSound = () => {
    if (audio) {
      audio.pause()
      audio.currentTime = 0
      setIsPlaying(false)
      setActivePointId(null)
    }
  }

  const customIcons = soundPoints.map((_, index) => { 
    return new L.Icon({
      iconUrl: `/marker-icon-${index+1}.png`,
      iconSize: [60, 60],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
    })
  })

  

  return (
    <div className="w-11/12 mx-auto space-y-6">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className='hover:shadow-lg transition-shadow'>
          <CardContent className="flex flex-col items-center p-6">
            <HiCursorClick className="text-4xl mb-4 text-primary" />
            <h3 className="text-lg font-semibold mb-2">Navegação no Mapa</h3>
            <p className="text-center">Use o scroll para zoom e clique e arraste para mover o mapa.</p>
          </CardContent>
        </Card>
        <Card className='hover:shadow-lg transition-shadow'>
          <CardContent className="flex flex-col items-center p-6">
            <FaVolumeUp className="text-4xl mb-4 text-primary" />
            <h3 className="text-lg font-semibold mb-2">Reproduzir Sons</h3>
            <p className="text-center">Clique nos ícones no mapa e depois no botão 'Reproduzir' para ouvir os sons.</p>
          </CardContent>
        </Card>
        <Card className='hover:shadow-lg transition-shadow'>
          <CardContent className="flex flex-col items-center p-6">
            <FaListOl className="text-4xl mb-4 text-primary" />
            <h3 className="text-lg font-semibold mb-2">Ordem Recomendada</h3>
            <p className="text-center">Ouça os sons nesta ordem:
              <span className='font-medium'> 1º Asas do Pagode</span>, 
              <span className='font-medium'> 2º Show de Calouros</span>, 
              <span className='font-medium'> 3º Encontro de Seresteiros.</span>
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="max-w-full">
        <CardContent className="p-6">
          <MapContainer center={[-7.075605, -41.467326]} zoom={13} style={{ height: '500px', width: '100%',  zIndex: 10}}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {soundPoints.map((point) => (
              <Marker key={point.id} position={point.position} icon={customIcons[point.id-1]}>
                <Popup>
                  <div className="flex flex-col items-center">
                    <h3 className="font-bold mb-2 sm:text-base md:text-lg lg:text-lg">{point.name}</h3>
                    <img src={point.image} alt={point.name} className="w-full h-32 object-cover rounded mb-2" />
                    <p className="text-sm text-gray-600 mb-2">{point.description}</p>
                    <Button
                      onClick={() => activePointId === point.id && isPlaying ? stopSound() : playSound(point.soundFile, point.id)}
                      variant={activePointId === point.id && isPlaying ? "secondary" : "default"}
                      className="mb-2 text-primary border border-primary bg-orange-100
                      hover:text-background hover:bg-primary"
                    >
                      {activePointId === point.id && isPlaying ? <VolumeX className="mr-2 h-4 w-4" /> : <Volume2 className="mr-2 h-4 w-4" />}
                      {activePointId === point.id && isPlaying ? 'Parar' : 'Reproduzir'}
                    </Button>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </CardContent>
      </Card>


    </div>
    

  )
}

export default SoundMapComponent
