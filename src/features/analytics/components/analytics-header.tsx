import type { AnalyticsQuery } from "../analytics.types"

interface AnalyticsHeaderProps {
    query: AnalyticsQuery
}

export function AnalyticsHeader({ query }: AnalyticsHeaderProps) {
    return (
        <div>
            <h1 className="text-lg font-semibold tracking-tight">Analytics</h1>
            <p className="text-sm text-muted-foreground">
                Performance insights for the {query.period ?? "30d"} period
            </p>
        </div>
    )
}
