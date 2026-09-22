import type { ReactNode } from "react"
import { TakaIcon } from "@/components/icons/taka-icon"

import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface MetricCardProps {
  label: string
  value: ReactNode
  isAmount?: boolean
  description?: ReactNode
  icon?: ReactNode
  className?: string
  valueClassName?: string
}

export function MetricCard({
  label,
  value,
  isAmount = false,
  description,
  icon,
  className,
  valueClassName,
}: MetricCardProps) {
  return (
    <Card className={cn("py-0 shadow-sm sm:py-1 md:py-2", className)}>
      <CardContent className="p-2 sm:p-3 md:p-4">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0 space-y-2">
            <p className="text-sm font-medium text-muted-foreground">{label}</p>

            <div
              className={cn(
                "flex min-w-0 items-baseline gap-1 text-2xl font-semibold tracking-tight",
                valueClassName
              )}
            >
              {isAmount && (
                <span className="shrink-0 text-muted-foreground">
                  <TakaIcon className="size-4.5" />
                </span>
              )}

              <span className="truncate">{value}</span>
            </div>

            {description && (
              <div className="text-xs text-muted-foreground">{description}</div>
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
