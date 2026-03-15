"use client"

import { useEffect, useState } from "react"

export default function AnimatedBars() {
    const [bars, setBars] = useState<number[]>([])
    useEffect(() => {
        setBars(Array.from({ length: 40 }, () => Math.random() * 100))
    }, [])
    return (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
            <div className="flex items-end gap-[2px] h-24 w-full px-4">
                {bars.map((height, index) => (
                    <div
                        key={index}
                        className="flex-1 rounded-full bg-white/70 animate-[bar-bounce_1.2s_ease-in-out_infinite]"
                        style={{
                            height: `${height}%`,
                            animationDelay: `${index * 0.05}s`,
                            transformOrigin: 'bottom'
                        }}
                    />
                ))}

            </div>
        </div>
    )
}