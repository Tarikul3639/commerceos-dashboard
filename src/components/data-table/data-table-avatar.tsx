"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useImageViewer } from "@/components/image-viewer"
import { cn } from "@/lib/utils"

interface DataTableAvatarProps {
    name: string
    image?: string | null
    className?: string
}

export function DataTableAvatar({
    name,
    image,
    className,
}: DataTableAvatarProps) {
    const { open } = useImageViewer()

    const initials = name
        .trim()
        .split(/\s+/)
        .map((word) => word[0])
        .join("")
        .slice(0, 2)
        .toUpperCase()

    const handleImageClick = () => {
        if (!image) {
            return
        }

        open([
            {
                src: image,
                alt: name,
            },
        ])
    }

    return (
        <Avatar
            className={cn("size-8 shrink-0", image && "cursor-pointer", className)}
            onClick={handleImageClick}
        >
            {image && <AvatarImage src={image} alt={name} />}

            <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
    )
}
