import { Project, Block } from "@/types";
import { Heart } from "lucide-react";
import Link from "next/link";

interface FeedCardProps {
    project: Project
}

function renderPortrait(portrait: Block) {
    switch (portrait.type) {
        case "image":
            return <div>Image</div>
        case "video":
            return <div>Video</div>
        case "music":
            return <div>Music</div>
        case "place":
            return <div>Place</div>
        case "text":
            return <div>Text</div>
        default:
            const _exhaustive: never = portrait
            return null

    }
}

export default function FeedCard({ project }: FeedCardProps) {
    const { portrait, title, author, tags, likeCount } = project




    return (
        <div className="w-full rounded-2xl overflow-hidden bg-white shadow-sm">
            <div className="aspect-square w-full bg-gray-100">
                {renderPortrait(portrait)}
            </div>

            <div className="p-3 flex flex-col items-center gap-2">
                <h1 className="text-lg font-bold text-center">{title}</h1>
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