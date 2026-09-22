"use client"

import { AppBarChart } from "@/components/charts"
import type { ChartConfig } from "@/components/ui/chart"

import type { OrderSummary, DashboardQuery } from "../dashboard.types"
import { PERIOD_OPTIONS } from "../dashboard.constants"
import { orderSummary } from "../dashboard.data"

interface DashboardOrderStatusProps {
  orders?: OrderSummary
  query: DashboardQuery
  isLoading?: boolean
}

const orderStatusConfig = {
  value: {
    label: "Orders",
  },
  pending: {
    label: "Pending",
    color: "var(--chart-1)",
  },
  processing: {
    label: "Processing",
    color: "var(--chart-2)",
  },
  shipped: {
    label: "Shipped",
    color: "var(--chart-3)",
  },
  delivered: {
    label: "Delivered",
    color: "var(--chart-4)",
  },
  cancelled: {
    label: "Cancelled",
    color: "var(--destructive)",
  },
} satisfies ChartConfig

export function DashboardOrderStatus({
  orders,
  isLoading = false,
  query,
}: DashboardOrderStatusProps) {
  const currentOrders = orderSummary

  const orderStatusData = [
    {
      name: "delivered",
      value: currentOrders.deliveredOrders,
      fill: "var(--color-delivered)",
    },
    {
      name: "pending",
      value: currentOrders.pendingOrders,
      fill: "var(--color-pending)",
    },
    {
      name: "processing",
      value: currentOrders.processingOrders,
      fill: "var(--color-processing)",
    },
    {
      name: "shipped",
      value: currentOrders.shippedOrders,
      fill: "var(--color-shipped)",
    },
    {
      name: "cancelled",
      value: currentOrders.cancelledOrders,
      fill: "var(--color-cancelled)",
    },
  ]

  const periodLabel =
    PERIOD_OPTIONS.find((option) => option.value === query.period)?.label ??
    "selected period"

  return (
    <AppBarChart
      title="Order Status"
      description="Current order distribution"
      data={orderStatusData}
      config={orderStatusConfig}
      isLoading={isLoading}
      footerTitle={`Total Orders: ${currentOrders.totalOrders}`}
      footerDescription={`Orders in ${periodLabel}`}
    />
  )
}
