'use client'

import { useState, useEffect } from "react"
import { MOCK_PROJECTS } from "@/lib/mock-data"
import FeedCard from "@/components/feed/FeedCard"
import Link from "next/link"

export default function Proyects() {
    const [columns, setColumns] = useState<2 | 3 | 4>(() => {
        if (typeof window === 'undefined') return 3
        return (Number(localStorage.getItem('projectGridColumns')) as 2 | 3 | 4) || 3
    })

    const gridCols = {
        2: "grid-cols-2",
        3: "grid-cols-2 md:grid-cols-3",
        4: "grid-cols-2 md:grid-cols-4"
    }[columns]

    useEffect(() => {
        localStorage.setItem('projectGridColumns', String(columns))
    }, [columns])

    return (
        <div className="p-4 flex flex-col gap-4">
            {/* header row: title + column toggle */}
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-bold">My Projects</h1>
                <div className="flex gap-2">
                    {([2, 3, 4] as const).map(n => (
                        <button
                            key={n}
                            onClick={() => setColumns(n)}
                            className={`px-3 py-1 rounded-full text-sm ${columns === n
                                    ? 'bg-pink-600 text-white'
                                    : 'bg-gray-100 text-gray-600'
                                }`}
                        >
                            {n}
                        </button>
                    ))}
                </div>
            </div>

            {/* grid */}
            <div className={`grid gap-4 ${gridCols}`}>
                {MOCK_PROJECTS.map(project => (
                    <Link key={project.id} href={`/projects/${project.id}`}>
                        <FeedCard project={project} isActive={true} />
                    </Link>
                ))}
            </div>
        </div>
    )
}