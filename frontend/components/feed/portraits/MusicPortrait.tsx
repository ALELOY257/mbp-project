"use client"

import { MusicBlock } from "@/types"
import AnimatedBars from "@/components/mediaHandling/AnimatedBars"
import { Music } from "lucide-react"

function isDirectFile(url: string): boolean {
  return url.match(/\.(mp3|wav|ogg|flac|aac)$/i) !== null
}

interface MusicPortraitProps{
    block:MusicBlock
}

export default function MusicPortrait({block}: MusicPortraitProps){
    const src = block.url ?? block.filePath

    if (!src){
        return <div className="absolute inset-0 bg-gray-950" />
    }

    if (isDirectFile(src)) {
    // FFTVisualizer goes here later
    return <AnimatedBars />
  }

  
  return (
    <div className="absolute inset-0 bg-gray-950 flex flex-col items-center justify-center gap-4">
      <Music size={32} className="text-white/40" />
      <AnimatedBars />
    </div>
  )
}