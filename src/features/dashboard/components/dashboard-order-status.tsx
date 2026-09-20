"use client";

import { AppPieChart } from "@/components/charts"
import type { ChartConfig } from "@/components/ui/chart"

import type { OrderSummary, DashboardQuery } from "../dashboard.types"
import { PERIOD_OPTIONS } from "../dashboard.constants"

interface DashboardOrderStatusProps {
    orders?: OrderSummary
    query: DashboardQuery
    isLoading?: boolean
}

const orderStatusConfig = {
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
        color: "var(--chart-5)",
    },
} satisfies ChartConfig

export function DashboardOrderStatus({
    orders,
    isLoading = false,
    query,
}: DashboardOrderStatusProps) {
    const orderStatusData = [
        {
            name: "pending",
            value: orders?.pendingOrders ?? 0,
        },
        {
            name: "processing",
            value: orders?.processingOrders ?? 0,
        },
        {
            name: "shipped",
            value: orders?.shippedOrders ?? 0,
        },
        {
            name: "delivered",
            value: orders?.deliveredOrders ?? 0,
        },
        {
            name: "cancelled",
            value: orders?.cancelledOrders ?? 0,
        },
    ]

    const periodLabel =
        PERIOD_OPTIONS.find((option) => option.value === query.period)?.label ??
        "selected period"

    return (
        <AppPieChart
            title="Order Status"
            description="Current order distribution"
            data={orderStatusData}
            config={orderStatusConfig}
            donut
            innerRadius="50%"
            outerRadius="80%"
            isLoading={isLoading}
            centerContent={
                <div className="space-y-1 text-center">
                    <p className="text-2xl font-bold">
                        {orders?.totalOrders.toLocaleString() ?? 0}
                    </p>

                    <p className="text-xs text-muted-foreground">
                        Total Orders
                    </p>
                </div>
            }
            footerTitle="Total Orders"
            footerDescription={`Showing total orders for ${periodLabel.toLowerCase()}`}
        />
    )
}
