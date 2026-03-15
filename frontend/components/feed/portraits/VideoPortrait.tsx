import { VideoBlock } from "@/types"


function extractYoutubeId(url: string): string | null {
    const params = new URL(url).searchParams
    return params.get('v')
}

interface VideoPortraitProps {
    block: VideoBlock
}

function isYoutube(url: string): boolean {
    return url.includes('youtube.com') || url.includes('youtu.be')
}

export default function VideoPortrait({ block }: VideoPortraitProps) {
    const videoSrc = block.url ?? block.filepath
    if (!videoSrc) {
        return <div className="absolute inset-0 bg-gray-800" />
    }

    if (isYoutube(videoSrc)) {
        const videoId = extractYoutubeId(videoSrc)
        if (!videoId) return <div className="absolute inset-0 bg-gray-800" />
        return (<iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}`}
            className="absolute inset-0 w-full h-full"
            allow="autoplay"
        />)
    }

    return (
        <video
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
        />
    )
}