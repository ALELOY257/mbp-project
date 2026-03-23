import { TextBlock } from "@/types";

interface TextPortraitConfig {
    backgroundColor: string
    backgroundImage?: string
    textColor: string
    fontFamily: "sans" | "serif" | "mono"
    fontSize: "sm" | "md" | "lg"
    textAlign: "left" | "center" | "right"
}

const defaultTextConfig: TextPortraitConfig = {
    backgroundColor: "#0c0a09",
    textColor: "255,255,255",
    fontFamily: "serif",
    fontSize: "md",
    textAlign: "left"
}

interface TextPortraitProps {
    block: TextBlock
    config?: Partial<TextPortraitConfig>
}

export default function TextPortrait({ block, config: configProp }: TextPortraitProps) {
    const config = { ...defaultTextConfig, ...configProp }
    const fontMap = {
        sans: "font-sans",
        serif: "font-serif",
        mono: "font-mono"
    }

    const sizeMap = {
        sm: "text-sm",
        md: "text-base",
        lg: "text-xl"
    }

    const alignMap = {
        left: "text-left",
        center: "text-center",
        right: "text-right"
    }

    const backgroundStyle = config.backgroundImage
        ? { backgroundImage: `url(${config.backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }
        : { backgroundColor: config.backgroundColor }

    return (
        <div
            className="absolute inset-0"
            style={backgroundStyle}
        >
            {config.backgroundImage && (
                <div className="absolute inset-0 bg-black/40" />
            )}

            <div className="absolute inset-0 z-10 flex items-center p-6">
                <p className={`line-clamp-4 ${fontMap[config.fontFamily]} ${sizeMap[config.fontSize]} ${alignMap[config.textAlign]}`}
                    style={{ color: `rgb(${config.textColor})` }}
                >
                    {block.content}
                </p>
            </div>
        </div>
    )
}