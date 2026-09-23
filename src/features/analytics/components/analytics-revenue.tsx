"use client"

import type { ChartConfig } from "@/components/ui/chart"

import { AppAreaChart } from "@/components/charts"

import type { RevenueChartData } from "../analytics.types"
import { formatCurrency } from "@/lib/utils/format-currency"
import { revenueChartData } from "../analytics.data"

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

export function AnalyticsRevenue({
  revenue,
  isLoading,
}: {
  revenue?: RevenueChartData[]
  isLoading: boolean
}) {
  revenue = revenueChartData

  const data = revenue.map((item, index) => ({
    date: item.date,
    revenue: Number(item.revenue),
  }))

  return (
    <AppAreaChart
      data={data}
      config={chartConfig}
      xAxisKey="date"
      dataKeys={["revenue"]}
      title="Revenue Overview"
      description="Daily revenue performance"
      isLoading={isLoading}
      xAxisFormatter={(value) => {
        const date = new Date(value)

        return date.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        })
      }}
      yAxisFormatter={(value) => formatCurrency(value, { compact: true })}
      tooltipFormatter={(value) => formatCurrency(value, { compact: false })}
    />
  )
}
