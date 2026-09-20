import type { ReactNode } from "react"

import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface MetricCardProps {
    label: string
    value: ReactNode
    description?: ReactNode
    icon?: ReactNode
    className?: string
    valueClassName?: string
}

export function MetricCard({
    label,
    value,
    description,
    icon,
    className,
    valueClassName,
}: MetricCardProps) {
    return (
        <Card className={cn("shadow-sm py-0 sm:py-1 md:py-2", className)}>
            <CardContent className="p-2 sm:p-3 md:p-4">
                <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0 space-y-2">
                        <p className="text-sm font-medium text-muted-foreground">
                            {label}
                        </p>

                        <p
                            className={cn(
                                "truncate text-2xl font-semibold tracking-tight",
                                valueClassName,
                            )}
                        >
                            {value}
                        </p>

                        {description && (
                            <div className="text-xs text-muted-foreground">
                                {description}
                            </div>
                        )}
                    </div>

                    {icon && (
                        <div className="flex size-9 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                            {icon}
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    )
}