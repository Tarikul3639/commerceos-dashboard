import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import type { SalesChartResponse } from "../analytics.types"

export function AnalyticsSales({ data }: { data?: SalesChartResponse }) {
  const orders = data?.data.reduce((sum, item) => sum + item.orders, 0) ?? 0

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sales</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-semibold">
          {orders.toLocaleString()} orders
        </p>
      </CardContent>
    </Card>
  )
}
