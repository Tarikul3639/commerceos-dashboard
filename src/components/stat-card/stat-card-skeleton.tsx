import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function StatCardSkeleton() {
  return (
    <Card className="py-0 shadow-sm sm:py-1 md:py-2">
      <CardContent className="p-2 sm:p-3 md:p-4">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0 flex-1 space-y-3">
            {/* Label */}
            <Skeleton className="h-4 w-24" />

            {/* Value */}
            <Skeleton className="h-8 w-32" />

            {/* Trend / description */}
            <Skeleton className="h-3 w-40" />
          </div>

          {/* Icon */}
          <Skeleton className="size-9 shrink-0 rounded-md" />
        </div>
      </CardContent>
    </Card>
  )
}
