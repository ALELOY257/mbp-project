import { PlaceBlock } from "@/types"
import { MapPin } from "lucide-react"

interface PlacePortraitProps {
    block: PlaceBlock
}

export default function PlacePortrait({ block }: PlacePortraitProps) {
    const lat = block.coordinates?.lat
    const lng = block.coordinates?.lng
    if (!lat || !lng) {
        return (
            <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                <MapPin size={32} className="text-white/40" />
            </div>
        )
    }

    return (
        <div className="absolute inset-0 bg-gray-900 flex flex-col items-center justify-center gap-3">
            <MapPin size={40} className="text-white/40" />
            <p className="text-white/60 text-sm font-medium">{block.name}</p>
            {lat && lng && (
                <p className="text-white/30 text-xs">{lat.toFixed(4)}, {lng.toFixed(4)}</p>
            )}
        </div>
    )
}