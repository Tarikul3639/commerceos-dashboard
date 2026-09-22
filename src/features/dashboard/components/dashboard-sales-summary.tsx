"use client"

import { ArrowDownRight, ArrowUpRight, ShoppingCart } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"

import type { SalesSummary } from "../dashboard.types"
import { TakaIcon } from "@/components/icons/taka-icon"

interface DashboardSalesSummaryProps {
  sales?: SalesSummary
  isLoading?: boolean
}

export function DashboardSalesSummary({
  sales,
  isLoading = false,
}: DashboardSalesSummaryProps) {
  if (isLoading) {
    return <DashboardSalesSummarySkeleton />
  }

  const growth = sales?.salesGrowth ?? 0
  const isPositive = growth >= 0

  return (
    <Card className="min-w-0 gap-5.5 overflow-hidden py-2 sm:py-3 md:py-4">
      <CardHeader>
        <CardTitle>Sales Overview</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Total Sales */}
          <SalesMetric
            icon={TakaIcon}
            label="Total Sales"
            value={`${formatAmount(sales?.totalSales)}`}
          />

          {/* Today's Sales */}
          <SalesMetric
            icon={TakaIcon}
            label="Today's Sales"
            value={`${formatAmount(sales?.todaySales)}`}
          />

          {/* Average Order Value */}
          <SalesMetric
            icon={ShoppingCart}
            label="Average Order Value"
            value={`${formatAmount(sales?.averageOrderValue)}`}
          />

          {/* Sales Growth */}
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Sales Growth</p>

            <div
              className={cn(
                "flex items-center gap-1 text-2xl font-semibold",
                isPositive ? "text-emerald-600" : "text-red-600"
              )}
            >
              {isPositive ? (
                <ArrowUpRight className="size-5" />
              ) : (
                <ArrowDownRight className="size-5" />
              )}
              {Math.abs(growth).toFixed(1)}%
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

interface SalesMetricProps {
  icon: React.ElementType
  label: string
  value: string
}

function SalesMetric({ icon: Icon, label, value }: SalesMetricProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-1 text-muted-foreground">
        <Icon className="size-3.5" />
        <p className="text-sm">{label}</p>
      </div>

      <div className="flex items-center gap-1">
        <span className="shrink-0 text-muted-foreground">
          <TakaIcon className="size-4.5" />
        </span>

        <p className="text-2xl font-semibold tracking-tight">{value}</p>
      </div>
    </div>
  )
}

function DashboardSalesSummarySkeleton() {
  return (
    <Card className="min-w-0 overflow-hidden">
      <CardHeader>
        <Skeleton className="h-6 w-36" />
      </CardHeader>

      <CardContent>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="space-y-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-8 w-32" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

function formatAmount(value?: string) {
  if (!value) return "0"

  const amount = Number(value)

  if (Number.isNaN(amount)) {
    return value
  }

  return amount.toLocaleString("en-BD")
}
