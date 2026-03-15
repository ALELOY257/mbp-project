import { Project, Block } from "@/types";
import { Heart } from "lucide-react";
import Link from "next/link";
import ImagePortrait from "./portraits/ImagePortrait";
import VideoPortrait from "./portraits/VideoPortrait";
import MusicPortrait from "./portraits/MusicPortrait";

interface FeedCardProps {
    project: Project
    isActive: boolean
}

function renderPortrait(portrait: Block) {
    switch (portrait.type) {
        case "image":
            return <ImagePortrait block={portrait}/>
        case "video":
            return <VideoPortrait block={portrait}/>
        case "music":
            return <MusicPortrait block={portrait}/>
        case "place":
            return <div className="absolute inset-0 ">Place</div>
        case "text":
            return <div className="absolute inset-0 ">Text</div>
        default:
            const _exhaustive: never = portrait
            return null

    }
}

export default function FeedCard({ project }: FeedCardProps) {
    const { portrait, title, author, tags, likeCount } = project




    return (
        <div className="w-full rounded-2xl overflow-hidden bg-white shadow-sm">
            <div className="relative h-[65vh] rounded-2xl overflow-hidden">
                {renderPortrait(portrait)}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h2 className="absolute bottom-4 left-4 text-white font-bold text-xl">{title}</h2>
            </div>

            <div className="p-3 flex flex-col items-center gap-2">
                <p className="text-sm text-gray-500 text-center">{author.name}</p>

                <div className="flex gap-2 flex-wrap justify-center mt-2">
                    {tags.map(tag => (

                        <Link
                            key={tag}
                            href={`/search?tag=${encodeURIComponent(tag)}`}
                            className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-sm text-gray-700 hover:bg-gray-200 focus:outline-none"
                        >
                            {tag}
                        </Link>
                    ))}
                </div>
                <div className="flex items-center gap-1 text-gray-500">
                    <Heart size={16} />
                    <span className="text-sm">{likeCount}</span>
                </div>
            </div>
        </div>

    )
}