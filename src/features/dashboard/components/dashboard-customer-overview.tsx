"use client"

import { Users } from "lucide-react"

import { AppPieChart, type PieChartData } from "@/components/charts"
import type { ChartConfig } from "@/components/ui/chart"

import type { CustomerSummary } from "../dashboard.types"
import { customerSummary } from "../dashboard.data"

interface DashboardCustomerOverviewProps {
  customers?: CustomerSummary
  isLoading?: boolean
}

const chartConfig = {
  Active: {
    label: "Active",
    color: "var(--chart-1)",
  },
  Inactive: {
    label: "Inactive",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export function DashboardCustomerOverview({
  customers,
  isLoading = false,
}: DashboardCustomerOverviewProps) {
  customers = customerSummary // TODO: Remove this line when API is ready

  const totalCustomers = customers?.totalCustomers ?? 0
  const activeCustomers = customers?.activeCustomers ?? 0

  const inactiveCustomers = Math.max(totalCustomers - activeCustomers, 0)

  const data: PieChartData[] = [
    {
      name: "Active",
      value: activeCustomers,
    },
    {
      name: "Inactive",
      value: inactiveCustomers,
    },
  ]

  const growth = customers?.customerGrowth ?? 0

  return (
    <AppPieChart
      data={data}
      title="Customer Overview"
      description="Customer activity overview"
      config={chartConfig}
      donut
      height={260}
      innerRadius="60%"
      outerRadius="90%"
      centerContent={
        <div className="flex flex-col items-center">
          <span className="text-2xl font-bold tracking-tight">
            {totalCustomers.toLocaleString("en-BD")}
          </span>

          <span className="text-xs text-muted-foreground">Customers</span>
        </div>
      }
      footerTitle={`${customers?.newCustomers?.toLocaleString("en-BD") ?? 0} new customers`}
      footerDescription={
        `${customers?.returningCustomers?.toLocaleString("en-BD") ?? 0} returning · ` +
        `${growth >= 0 ? "+" : ""}${growth.toFixed(1)}% growth`
      }
      isLoading={isLoading}
    />
  )
}
