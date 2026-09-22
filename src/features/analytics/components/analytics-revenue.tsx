import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import type { RevenueChartResponse } from "../analytics.types"

export function AnalyticsRevenue({ data }: { data?: RevenueChartResponse }) {
  const total =
    data?.data.reduce((sum, item) => sum + Number(item.revenue), 0) ?? 0

  return (
    <Card>
      <CardHeader>
        <CardTitle>Revenue</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-semibold">{total.toLocaleString()}</p>
      </CardContent>
    </Card>
  )
}
