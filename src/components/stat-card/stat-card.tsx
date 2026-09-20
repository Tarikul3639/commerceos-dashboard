import type { ReactNode } from "react"

import { MetricCard } from "./metric-card"
import { TrendIndicator } from "./trend-indicator"

interface StatCardProps {
    title: string
    value: ReactNode
    description?: string
    trend?: number
    trendDirection?: "up" | "down" | "neutral"
    className?: string
    valueClassName?: string
    trendLabel?: string
    icon?: ReactNode
}

export function StatCard({
    title,
    value,
    description,
    trend,
    trendDirection,
    trendLabel = "from previous period",
    icon,
    className,
    valueClassName,
}: StatCardProps) {
    return (
        <MetricCard
            label={title}
            value={value}
            className={className}
            valueClassName={valueClassName}
            description={
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    {trend !== undefined && (
                        <TrendIndicator
                            value={trend}
                            direction={trendDirection}
                            label={trendLabel}
                        />
                    )}

                    {description && (
                        <span className="text-muted-foreground">
                            {description}
                        </span>
                    )}
                </div>
            }
            icon={icon}
        />
    )
}