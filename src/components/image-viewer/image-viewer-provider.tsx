"use client"

import {
    createContext,
    type ReactNode,
    useCallback,
    useContext,
    useState,
} from "react"

import { ImageViewer, type ImageViewerItem } from "./image-viewer"

interface ImageViewerContextValue {
    open: (images: ImageViewerItem[], initialIndex?: number) => void
    close: () => void
}

const ImageViewerContext = createContext<ImageViewerContextValue | null>(null)

interface ImageViewerProviderProps {
    children: ReactNode
}

export function ImageViewerProvider({ children }: ImageViewerProviderProps) {
    const [openState, setOpenState] = useState(false)
    const [images, setImages] = useState<ImageViewerItem[]>([])
    const [initialIndex, setInitialIndex] = useState(0)

    const open = useCallback(
        (viewerImages: ImageViewerItem[], viewerInitialIndex = 0) => {
            setImages(viewerImages)
            setInitialIndex(viewerInitialIndex)
            setOpenState(true)
        },
        []
    )

    const close = useCallback(() => {
        setOpenState(false)
    }, [])

    return (
        <ImageViewerContext.Provider value={{ open, close }}>
            {children}

            <ImageViewer
                images={images}
                open={openState}
                onOpenChange={setOpenState}
                initialIndex={initialIndex}
            />
        </ImageViewerContext.Provider>
    )
}

export function useImageViewer() {
    const context = useContext(ImageViewerContext)

    if (!context) {
        throw new Error("useImageViewer must be used within an ImageViewerProvider")
    }

    return context
}
