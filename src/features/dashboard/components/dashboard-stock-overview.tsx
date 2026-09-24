"use client"

import { Archive, Boxes, CircleDollarSign, Package } from "lucide-react"

import { AppPieChart } from "@/components/charts"
import type { ChartConfig } from "@/components/ui/chart"

import type { StockSummary } from "../dashboard.types"
import { stockSummary } from "../dashboard.data"

interface DashboardStockOverviewProps {
  stock?: StockSummary
  isLoading?: boolean
}

const stockStatusConfig = {
  healthy: {
    label: "Healthy",
    color: "var(--chart-1)",
  },
  lowStock: {
    label: "Low Stock",
    color: "var(--chart-2)",
  },
  outOfStock: {
    label: "Out of Stock",
    color: "var(--destructive)",
  },
} satisfies ChartConfig

export function DashboardStockOverview({
  stock,
  isLoading = false,
}: DashboardStockOverviewProps) {
  let currentStock = stockSummary

  const healthyCount = Math.max(
    currentStock.totalProducts -
      currentStock.lowStockCount -
      currentStock.outOfStockCount,
    0
  )

  const stockStatusData = [
    {
      name: "healthy",
      value: healthyCount,
    },
    {
      name: "lowStock",
      value: currentStock.lowStockCount,
    },
    {
      name: "outOfStock",
      value: currentStock.outOfStockCount,
    },
  ]

  return (
    <div className="min-w-0 space-y-4">
      <AppPieChart
        title="Stock Overview"
        description="Current inventory status"
        data={stockStatusData}
        config={stockStatusConfig}
        donut
        height={300}
        innerRadius="60%"
        outerRadius="90%"
        isLoading={isLoading}
        centerContent={
          <div className="space-y-1 text-center">
            <p className="text-2xl font-bold">
              {currentStock.totalProducts.toLocaleString("en-BD")}
            </p>

            <p className="text-xs text-muted-foreground">Total Products</p>
          </div>
        }
        footerTitle={`${currentStock.lowStockCount} Low Stock`}
        footerDescription="Current inventory status"
      />

      <div className="grid grid-cols-2 gap-4 rounded-xl border bg-card p-4 sm:grid-cols-4">
        <StockMetric
          icon={Package}
          label="Products"
          value={currentStock.totalProducts.toLocaleString("en-BD")}
        />

        <StockMetric
          icon={Boxes}
          label="Variants"
          value={currentStock.totalVariants.toLocaleString("en-BD")}
        />

        <StockMetric
          icon={Archive}
          label="Stock Quantity"
          value={currentStock.totalStockQuantity.toLocaleString("en-BD")}
        />

        <StockMetric
          icon={CircleDollarSign}
          label="Stock Value"
          value={`৳${formatAmount(currentStock.totalStockValue)}`}
        />
      </div>
    </div>
  )
}

interface StockMetricProps {
  icon: React.ElementType
  label: string
  value: string
}

function StockMetric({ icon: Icon, label, value }: StockMetricProps) {
  return (
    <div className="flex min-w-0 items-center gap-3">
      <div className="flex size-9 shrink-0 items-center justify-center rounded-md bg-muted">
        <Icon className="size-4 text-muted-foreground" />
      </div>

      <div className="min-w-0">
        <p className="truncate text-xs text-muted-foreground">{label}</p>

        <p className="truncate text-sm font-semibold">{value}</p>
      </div>
    </div>
  )
}

function formatAmount(value: string) {
  const amount = Number(value)

  if (Number.isNaN(amount)) {
    return value
  }

  return amount.toLocaleString("en-BD")
}
