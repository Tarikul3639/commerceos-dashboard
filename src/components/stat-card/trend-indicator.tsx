import { ArrowDown, ArrowUp, Minus } from "lucide-react"

import { cn } from "@/lib/utils"

type TrendDirection = "up" | "down" | "neutral"

interface TrendIndicatorProps {
    value: number
    direction?: TrendDirection
    label?: string
    className?: string
}

export function TrendIndicator({
    value,
    direction,
    label = "from previous period",
    className,
}: TrendIndicatorProps) {
    const resolvedDirection: TrendDirection =
        direction ??
        (value > 0 ? "up" : value < 0 ? "down" : "neutral")

    const Icon =
        resolvedDirection === "up"
            ? ArrowUp
            : resolvedDirection === "down"
              ? ArrowDown
              : Minus

    const displayValue = Math.abs(value).toFixed(1)

    return (
        <div
            className={cn(
                "inline-flex items-center gap-1 text-xs font-medium",
                resolvedDirection === "up" && "text-emerald-600 dark:text-emerald-500",
                resolvedDirection === "down" && "text-destructive",
                resolvedDirection === "neutral" && "text-muted-foreground",
                className,
            )}
        >
            <Icon className="size-3.5" />

            <span>{displayValue}%</span>

            {label && (
                <span className="font-normal text-muted-foreground">
                    {label}
                </span>
            )}
        </div>
    )
}