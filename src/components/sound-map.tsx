"use client";

import React, { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Volume2, VolumeX } from 'lucide-react'

interface SoundPoint {
  id: number
  position: [number, number]
  soundFile: string
  name: string
}

const soundPoints: SoundPoint[] = [
  { id: 1, position: [-23.5505, -46.6333], soundFile: '/sounds/music.mp3', name: 'Som 1' },
  { id: 2, position: [-23.5605, -46.6433], soundFile: '/sounds/music.mp3', name: 'Som 2' },
  { id: 3, position: [-23.5405, -46.6233], soundFile: '/sounds/music.mp3', name: 'Som 3' },
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

  const customIcon = new L.Icon({
    iconUrl: '/marker-icon.png',
    iconSize: [60, 60],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  })

  return (
    <Card className="w-4/5 max-w h-auto mx-auto">
      <CardContent className="p-6">
        <MapContainer center={[-23.5505, -46.6333]} zoom={13} style={{ height: '500px', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {soundPoints.map((point) => (
            <Marker key={point.id} position={point.position} icon={customIcon}>
              <Popup>
                <div className="flex flex-col items-center">
                  <h3 className="font-bold mb-2">{point.name}</h3>
                  <Button
                    onClick={() => activePointId === point.id && isPlaying ? stopSound() : playSound(point.soundFile, point.id)}
                    variant={activePointId === point.id && isPlaying ? "secondary" : "default"}
                    className="mb-2"
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
  )
}

export default SoundMapComponent
