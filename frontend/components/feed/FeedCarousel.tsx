"use client"

import useEmblaCarousel from "embla-carousel-react"
import { Project } from "@/types";
import FeedCard from "./FeedCard"

interface FeedCarouselProps {
  projects: Project[]
}

export default function FeedCarousel({ projects }: FeedCarouselProps){
    const [emblaRef] = useEmblaCarousel({ loop: true, align: 'center' })

  return (
    <div ref={emblaRef} className="overflow-hidden w-full">
      <div className="flex">
        {projects.map(project => (
          <div key={project.id} className="flex-none w-[80%] px-6"> 
            <FeedCard project={project} />
          </div>
        ))}
      </div>
    </div>
  )
}