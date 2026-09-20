import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

import { StatCardSkeleton } from "./stat-card-skeleton"

interface StatCardGridProps {
    children: ReactNode
    className?: string
    isLoading?: boolean
    isError?: boolean
    skeletonCount?: number
}

export function StatCardGrid({
    children,
    className,
    isLoading = false,
    isError = false,
    skeletonCount = 4,
}: StatCardGridProps) {
    return (
        <div
            className={cn(
                "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
                className,
            )}
        >
            {isLoading ? (
                Array.from({ length: skeletonCount }).map((_, index) => (
                    <StatCardSkeleton key={index} />
                ))
            ) : isError ? (
                <div className="col-span-full rounded-lg border border-destructive/20 bg-destructive/5 p-4 text-sm text-destructive">
                    Failed to load dashboard statistics.
                </div>
            ) : (
                children
            )}
        </div>
    )
}