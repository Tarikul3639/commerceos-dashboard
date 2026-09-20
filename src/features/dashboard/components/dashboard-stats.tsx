import { DollarSign, ShoppingBag, ShoppingCart, Users, UsersRound, Warehouse } from "lucide-react"

import { StatCard, StatCardGrid } from "@/components/stat-card"
import type { DashboardOverview } from "../dashboard.types"

interface DashboardStatsProps {
    data?: DashboardOverview
    isLoading?: boolean
    isError?: boolean
}

export function DashboardStats({
    data,
    isLoading = false,
    isError = false,
}: DashboardStatsProps) {
    return (
        <StatCardGrid isLoading={isLoading} isError={isError} skeletonCount={6}>
            {data && (
                <>
                    <StatCard
                        title="Total Sales"
                        value={`৳${Number(data.sales.totalSales).toLocaleString()}`}
                        trend={data.sales.salesGrowth}
                        icon={<DollarSign className="size-4" />}
                    />

                    <StatCard
                        title="Total Orders"
                        value={data.orders.totalOrders.toLocaleString()}
                        icon={<ShoppingCart className="size-4" />}
                    />

                    <StatCard
                        title="Total Customers"
                        value={data.customers.totalCustomers.toLocaleString()}
                        trend={data.customers.customerGrowth}
                        icon={<Users className="size-4" />}
                    />

                    <StatCard
                        title="Stock Value"
                        value={`৳${Number(data.stock.totalStockValue).toLocaleString()}`}
                        icon={<Warehouse className="size-4" />}
                    />

                    <StatCard
                        title="Total Purchases"
                        value={`৳${Number(data.purchases.totalPurchases).toLocaleString()}`}
                        trend={data.purchases.purchaseGrowth}
                        icon={<ShoppingBag className="size-4" />}
                    />

                    <StatCard
                        title="Total Employees"
                        value={data.employees.totalEmployees.toLocaleString()}
                        icon={<UsersRound className="size-4" />}
                    />
                </>
            )}
        </StatCardGrid>
    )
}
