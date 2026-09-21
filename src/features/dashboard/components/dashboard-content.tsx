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

export function DashboardContent() {
    // State to manage the current dashboard query (filters)
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

            {/* Sales summary */}
            <DashboardSalesSummary sales={overview?.sales} isLoading={loading} />

            {/* Order & Inventory */}
            <div className="grid min-w-0 gap-4 lg:grid-cols-2">
                {/* Order status */}
                <DashboardOrderStatus
                    orders={overview?.orders}
                    query={query}
                    isLoading={loading}
                />

                {/* Inventory overview */}
                <DashboardStockOverview stock={overview?.stock} isLoading={loading} />
            </div>

            {/* Recent orders */}
            <DashboardRecentOrders
                orders={overview?.recentOrders}
                isLoading={loading}
            />

            {/* Top products */}

            {/* Top customers */}

            {/* Low stock products */}

            {/* Recent activities */}
        </div>
    )
}
