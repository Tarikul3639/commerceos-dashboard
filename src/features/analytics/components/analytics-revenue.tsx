import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import type { RevenueChartData } from "../analytics.types"

export function AnalyticsRevenue({ data }: { data?: RevenueChartData[] }) {
  const total =
    data?.reduce((sum, item) => sum + Number(item.revenue), 0) ?? 0

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
