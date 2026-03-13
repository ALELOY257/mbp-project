import Image from "next/image"
import { Imageblock } from "@/types"

interface ImagePortraitProps {
    block: Imageblock
}

export default function ImagePortrait({ block }: ImagePortraitProps) {
    return (<Image
        src={block.url ?? ''}
        alt={block.author}
        fill
        className="object-cover"
    />)

}