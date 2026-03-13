"use client"

import useEmblaCarousel from "embla-carousel-react"
import { Project } from "@/types";
import FeedCard from "./FeedCard"
import { useEffect, useState } from "react";

interface FeedCarouselProps {
  projects: Project[]
}

export default function FeedCarousel({ projects }: FeedCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'center' })

  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    })
  }, [emblaApi])

  return (
    <div ref={emblaRef} className="overflow-hidden w-full h-[80vh]">
      <div className="flex ml-[-1rem]">
        {projects.map((project, index) => (
          <div key={project.id} className={`flex-none w-[80%] pl-[1rem] md:w-[35%] transition-transform duration-300 ${index === selectedIndex ? 'scale-100' : 'scale-90 opacity-60'
            }`}>
            <FeedCard project={project} isActive={index === selectedIndex} />
          </div>
        ))}
      </div>
    </div>
  )
}