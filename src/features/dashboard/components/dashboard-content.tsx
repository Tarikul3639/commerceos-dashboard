"use client"

import { useState } from "react"

import { useGetDashboardOverviewQuery } from "../dashboard.api"
import type { DashboardQuery } from "../dashboard.types"

import { DashboardHeader } from "./dashboard-header"
import { DashboardOrderStatus } from "./dashboard-order-status"
import { DashboardStockOverview } from "./dashboard-stock-overview"
import { DashboardStats } from "./dashboard-stats"
import { DashboardSalesSummary } from "./dashboard-sales-summary"
import { DashboardRecentOrders } from "./dashboard-recent-orders"
import { DashboardLowStockProducts } from "./dashboard-low-stock-products"
import { DashboardRecentActivities } from "./dashboard-recent-activities"

export function DashboardContent() {
    // State to manage the current dashboard query
    const [query, setQuery] = useState<DashboardQuery>({
        period: "30d",
    })

    // Fetch dashboard overview data based on the current query
    const {
        data: overview,
        isLoading,
        isFetching,
        isError,
    } = useGetDashboardOverviewQuery(query)

    // Determine if the dashboard is in a loading state
    const loading = isLoading || isFetching

    return (
        <div className="space-y-6">
            {/* Dashboard Header */}
            <DashboardHeader query={query} onQueryChange={setQuery} />

            {/* Dashboard Stats */}
            <DashboardStats data={overview} isLoading={loading} isError={isError} />

            {/* Sales Summary */}
            <DashboardSalesSummary sales={overview?.sales} isLoading={loading} />

            {/* Order & Inventory Overview */}
            <div className="grid min-w-0 gap-4 lg:grid-cols-2">
                <DashboardOrderStatus
                    orders={overview?.orders}
                    query={query}
                    isLoading={loading}
                />

                <DashboardStockOverview stock={overview?.stock} isLoading={loading} />
            </div>

            {/* Recent Orders & Dashboard Insights */}
            <div className="grid min-w-0 gap-4 lg:max-h-[600px] lg:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)]">
                {/* Recent Orders */}
                <DashboardRecentOrders
                    orders={overview?.recentOrders}
                    isLoading={loading}
                />

                {/* Low Stock Products */}
                <DashboardLowStockProducts
                    products={overview?.lowStockProducts}
                    isLoading={loading}
                />
            </div>

            {/* Dashboard Insights */}
            <div className="grid min-w-0 gap-4">
                {/* Recent Activities */}
                <DashboardRecentActivities
                    activities={overview?.recentActivities}
                    isLoading={loading}
                />
            </div>
        </div>
    )
}
