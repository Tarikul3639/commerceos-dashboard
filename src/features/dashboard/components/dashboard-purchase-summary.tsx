"use client"

import {
  ArrowDownRight,
  ArrowUpRight,
  ClipboardList,
  ShoppingCart,
  Clock3,
} from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"

import type { PurchaseSummary } from "../dashboard.types"
import { TakaIcon } from "@/components/icons/taka-icon"

interface DashboardPurchaseSummaryProps {
  purchases?: PurchaseSummary
  isLoading?: boolean
}

export function DashboardPurchaseSummary({
  purchases,
  isLoading = false,
}: DashboardPurchaseSummaryProps) {
  if (isLoading) {
    return <DashboardPurchaseSummarySkeleton />
  }

  const growth = purchases?.purchaseGrowth ?? 0
  const isPositive = growth >= 0

  return (
    <Card className="min-w-0 gap-5.5 overflow-hidden py-2 sm:py-3 md:py-4">
      <CardHeader>
        <CardTitle>Purchase Overview</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Total Purchases */}
          <PurchaseMetric
            icon={TakaIcon}
            label="Total Purchases"
            value={`${formatAmount(purchases?.totalPurchases)}`}
          />

          {/* Today's Purchases */}
          <PurchaseMetric
            icon={ShoppingCart}
            label="Today's Purchases"
            value={`${formatAmount(purchases?.todayPurchases)}`}
          />

          {/* Purchase Orders */}
          <PurchaseMetric
            icon={ClipboardList}
            label="Purchase Orders"
            value={formatNumber(purchases?.totalPurchaseOrders)}
          />

          {/* Purchase Growth */}
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Purchase Growth</p>

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

        {/* Pending purchases */}
        {purchases?.pendingPurchases !== undefined && (
          <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
            <Clock3 className="size-4" />

            <span>
              {purchases.pendingPurchases.toLocaleString("en-BD")} pending
              purchase orders
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

interface PurchaseMetricProps {
  icon: React.ElementType
  label: string
  value: string
}

function PurchaseMetric({ icon: Icon, label, value }: PurchaseMetricProps) {
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

function DashboardPurchaseSummarySkeleton() {
  return (
    <Card className="min-w-0 overflow-hidden">
      <CardHeader>
        <Skeleton className="h-6 w-40" />
      </CardHeader>

      <CardContent>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="space-y-2">
              <Skeleton className="h-4 w-28" />
              <Skeleton className="h-8 w-32" />
            </div>
          ))}
        </div>

        <Skeleton className="mt-4 h-5 w-48" />
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

function formatNumber(value?: number) {
  if (value === undefined) return "0"

  return value.toLocaleString("en-BD")
}
