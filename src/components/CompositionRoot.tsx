import {
    AbsoluteFill,
    useVideoConfig,
} from "remotion"
import React from "react"
import { useColorPalette } from "../util/useColorPalette"

type CompositionRootProps =
    React.PropsWithChildren

function useBackground(): string {
    const { background, background2 } =
        useColorPalette()

    if (!background2) {
        return background
    }

    return `radial-gradient(${background2}, ${background})`
}

export const CompositionRoot: React.FC<
    CompositionRootProps
> = ({ children }: CompositionRootProps) => {
    const background = useBackground()
    const { width, height } = useVideoConfig()

    return (
        <AbsoluteFill style={{ background }}>
            <svg width={width} height={height}>
                {children}
            </svg>
        </AbsoluteFill>
    )
}
