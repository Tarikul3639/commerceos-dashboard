"use client"

import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

import { Skeleton } from "@/components/ui/skeleton"
import { formatCurrency } from "@/lib/utils/format-currency"
import type { SalesChartData } from "../analytics.types"

import { salesChartData } from "../analytics.data"

const chartConfig = {
  sales: {
    label: "Sales",
    color: "var(--chart-1)",
  },
  orders: {
    label: "Orders",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export function AnalyticsSales({
  sales,
  isLoading,
}: {
  sales?: SalesChartData[]
  isLoading: boolean
}) {
  sales = salesChartData

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sales Overview</CardTitle>

        <CardDescription>Daily sales and order performance</CardDescription>
      </CardHeader>

      <CardContent className="p-0">
        {isLoading ? (
          <div className="h-[250px] w-full p-6">
            <Skeleton className="h-full w-full" />
          </div>
        ) : (
          <ChartContainer
            config={chartConfig}
            className="aspect-auto h-[250px] w-full"
          >
            <BarChart
              accessibilityLayer
              data={sales}
              barCategoryGap={1}
              margin={{
                top: 5,
                left: 5,
                right: 5,
              }}
            >
              <CartesianGrid vertical={false} />

              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                minTickGap={32}
                tickFormatter={(value) => {
                  const date = new Date(value)

                  return date.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })
                }}
              />

              <YAxis
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => formatCurrency(value)}
              />

              <ChartTooltip cursor={true} content={<ChartTooltipContent />} />

              <Bar
                dataKey="sales"
                fill="var(--color-sales)"
                radius={[4, 4, 0, 0]}
                maxBarSize={50}
              >
                <LabelList
                  dataKey="orders"
                  position="top"
                  className="fill-foreground"
                  fontSize={12}
                />
              </Bar>
            </BarChart>
          </ChartContainer>
        )}
      </CardContent>
    </Card>
  )
}
