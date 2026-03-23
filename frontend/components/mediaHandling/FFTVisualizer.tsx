"use client"

import { useRef, useState, useEffect } from "react"
import { MusicBlock } from "@/types"
import { Play, Pause } from "lucide-react"


interface VisualizerConfig {
  fftSize: 128 | 256 | 512 | 1024  // must be power of 2
  barColor: string
  backgroundColor: string
  style: "bars" | "mirror" | "line" | "dots"
  minOpacity: number
}

const defaultConfig: VisualizerConfig = {
  fftSize: 256,
  barColor: "255,255,255",
  backgroundColor: "#030712",
  style: "mirror",
  minOpacity: 0.3
}

interface FFTVisualizerProps {
    block: MusicBlock
    config?: Partial<VisualizerConfig>
}

export default function FFTVisualizer({ block, config: configProp}: FFTVisualizerProps) {
    const config = { ...defaultConfig, ...configProp }
    const audioRef = useRef<HTMLAudioElement>(null)
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const audioCtxRef = useRef<AudioContext | null>(null)
    const analyserRef = useRef<AnalyserNode | null>(null)
    const animationRef = useRef<number>(0)
    const sourceRef = useRef<MediaElementAudioSourceNode | null>(null)

    const [isPlaying, setIsPlaying] = useState(false)

    useEffect(() => {
        return () => {
            cancelAnimationFrame(animationRef.current)
            audioCtxRef.current?.close()
        }
    }, [])

    function draw() {
        const analyser = analyserRef.current
        const canvas = canvasRef.current
        if (!analyser || !canvas) return

        const ctx = canvas.getContext('2d')!
        const bufferLength = analyser.frequencyBinCount
        const dataArray = new Uint8Array(bufferLength)

        analyser.getByteFrequencyData(dataArray)
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        const barWidth = canvas.width / bufferLength

        dataArray.forEach((value, i) => {
            const barHeight = (value / 255) * canvas.height
            const opacity = 0.3 + (value / 255) * 0.7
            ctx.fillStyle = `rgba(${config.barColor},${opacity})`

            const centerX = canvas.width / 2
            const x = (i / bufferLength) * (canvas.width / 2)

            // right side
            ctx.fillRect(centerX + x, canvas.height - barHeight, barWidth - 1, barHeight)
            // left side (mirrored)
            ctx.fillRect(centerX - x - barWidth, canvas.height - barHeight, barWidth - 1, barHeight)

        })

        animationRef.current = requestAnimationFrame(draw)
    }

    function handlePlay() {
        const audio = audioRef.current
        if (!audio) return

        if (!audioCtxRef.current) {
            const ctx = new AudioContext()
            const analyser = ctx.createAnalyser()
            analyser.fftSize = config.fftSize

            if (!sourceRef.current) {
                const source = ctx.createMediaElementSource(audio)
                source.connect(analyser)
                sourceRef.current = source
            }
            analyser.connect(ctx.destination)
            audioCtxRef.current = ctx
            analyserRef.current = analyser
        }

        if (audio.paused) {
            audio.play()
            draw()
            setIsPlaying(true)
        } else {
            audio.pause()
            cancelAnimationFrame(animationRef.current)
            setIsPlaying(false)
        }
    }

    const src = block.filepath ?? block.url

    return (
        <div className="absolute inset-0 bg-gray-950">
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full pointer-events-none"
            />
            <audio
                ref={audioRef}
                src={src}
            />
            <button
                onClick={handlePlay}
                className="absolute inset-0 flex items-center justify-center"
            >
                <div className="h-14 w-14 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                    {isPlaying ? <Pause size={24} className="text-white" /> : <Play size={24} className="text-white" />}
                </div>
            </button>
        </div>
    )

}

