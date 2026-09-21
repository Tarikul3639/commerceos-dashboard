import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import type { TopProduct } from "../analytics.types"

export function AnalyticsTopProducts({ data = [] }: { data?: TopProduct[] }) {
    return (
        <Card>
            <CardHeader><CardTitle>Top Products</CardTitle></CardHeader>
            <CardContent className="space-y-2">
                {data.map((product) => (
                    <div key={product.variantId ?? product.productId} className="flex justify-between gap-3 text-sm">
                        <span className="truncate">{product.productName}</span>
                        <span className="shrink-0 text-muted-foreground">{product.totalSold} sold</span>
                    </div>
                ))}
            </CardContent>
        </Card>
    )
}
