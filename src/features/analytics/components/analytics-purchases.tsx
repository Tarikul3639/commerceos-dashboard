import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import type { PurchaseChartData } from "../analytics.types"

export function AnalyticsPurchases({ data }: { data?: PurchaseChartData[] }) {
  const total =
    data?.reduce((sum, item) => sum + Number(item.purchases), 0) ?? 0

  return (
    <Card>
      <CardHeader>
        <CardTitle>Purchases</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-semibold">{total.toLocaleString()}</p>
      </CardContent>
    </Card>
  )
}
