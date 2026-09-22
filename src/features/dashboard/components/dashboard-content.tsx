"use client"

import { useState } from "react"

import { useGetDashboardOverviewQuery } from "../dashboard.api"
import type { DashboardQuery } from "../dashboard.types"

import { DashboardHeader } from "./dashboard-header"
import { DashboardStats } from "./dashboard-stats"

import { DashboardSalesSummary } from "./dashboard-sales-summary"
import { DashboardPurchaseSummary } from "./dashboard-purchase-summary"

import { DashboardOrderStatus } from "./dashboard-order-status"
import { DashboardStockOverview } from "./dashboard-stock-overview"

import { DashboardCustomerOverview } from "./dashboard-customer-overview"
import { DashboardEmployeeOverview } from "./dashboard-employee-overview"

import { DashboardRecentOrders } from "./dashboard-recent-orders"
import { DashboardLowStockProducts } from "./dashboard-low-stock-products"
import { DashboardRecentActivities } from "./dashboard-recent-activities"

export function DashboardContent() {
    const [query, setQuery] = useState<DashboardQuery>({
        period: "30d",
    })

    const {
        data: overview,
        isLoading,
        isFetching,
        isError,
    } = useGetDashboardOverviewQuery(query)

    const loading = isLoading || isFetching

    return (
        <div className="space-y-6">
            {/* Dashboard Header */}
            <DashboardHeader query={query} onQueryChange={setQuery} />

            {/* Key Business Metrics */}
            <DashboardStats data={overview} isLoading={loading} isError={isError} />

            {/* Financial Overview */}
            <div className="grid min-w-0 gap-4">
                <DashboardSalesSummary sales={overview?.sales} isLoading={loading} />
            </div>

            {/* Operational Overview */}
            <div className="grid min-w-0 gap-4 lg:grid-cols-2">
                <DashboardOrderStatus
                    orders={overview?.orders}
                    query={query}
                    isLoading={loading}
                />

                <DashboardStockOverview stock={overview?.stock} isLoading={loading} />
            </div>

            {/* People Overview */}
            <div className="grid min-w-0 gap-4 lg:grid-cols-2">
                <DashboardCustomerOverview
                    customers={overview?.customers}
                    isLoading={loading}
                />

                <DashboardEmployeeOverview
                    employees={overview?.employees}
                    isLoading={loading}
                />
            </div>

            {/* Purchase Overview */}
            <div className="grid min-w-0 gap-4">
                <DashboardPurchaseSummary
                    purchases={overview?.purchases}
                    isLoading={loading}
                />
            </div>

            {/* Recent Orders */}
            <div className="grid min-w-0 gap-4">
                <DashboardRecentOrders
                    orders={overview?.recentOrders}
                    isLoading={loading}
                />
            </div>

            {/* Recent Activities & Inventory Alerts */}
            <div className="grid min-w-0 gap-4 lg:grid-cols-5">
                {/* Recent Activities */}
                <div className="lg:col-span-3 h-full min-w-0 max-h-[520px] min-h-0">
                    <DashboardRecentActivities
                        activities={overview?.recentActivities}
                        isLoading={loading}
                    />
                </div>

                {/* Low Stock Products */}
                <div className="lg:col-span-2 h-full min-w-0 max-h-[520px] min-h-0">
                    <DashboardLowStockProducts
                        products={overview?.lowStockProducts}
                        isLoading={loading}
                    />
                </div>
            </div>
        </div>
    )
}
