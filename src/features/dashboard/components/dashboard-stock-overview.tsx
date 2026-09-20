"use client"

import { Archive, Boxes, CircleDollarSign, Package } from "lucide-react"

import { AppBarChart } from "@/components/charts"
import { Skeleton } from "@/components/ui/skeleton"
import type { StockSummary } from "../dashboard.types"

interface DashboardStockOverviewProps {
    stock?: StockSummary
    isLoading?: boolean
}

export function DashboardStockOverview({
    stock,
    isLoading = false,
}: DashboardStockOverviewProps) {
    if (isLoading) {
        return <StockOverviewSkeleton />
    }

    if (!stock) {
        return null
    }

    const healthyCount = Math.max(
        stock.totalProducts,
        stock.lowStockCount,
        stock.outOfStockCount,
        0
    )

    const stockStatusData = [
        {
            name: "Healthy",
            value: healthyCount,
        },
        {
            name: "Low Stock",
            value: stock.lowStockCount,
        },
        {
            name: "Out of Stock",
            value: stock.outOfStockCount,
        },
    ]

    return (
        <div className="min-w-0 space-y-4">
            <AppBarChart
                title="Stock Overview"
                description="Current stock status"
                data={stockStatusData}
                height={280}
                showGrid
                showXAxis
                showYAxis
                showTooltip
                barRadius={6}
                barSize={50}
            />

            <div className="grid grid-cols-2 gap-4 pt-2 sm:grid-cols-4">
                <StockMetric
                    icon={Package}
                    label="Products"
                    value={stock.totalProducts}
                />

                <StockMetric
                    icon={Boxes}
                    label="Variants"
                    value={stock.totalVariants}
                />

                <StockMetric
                    icon={Archive}
                    label="Stock Qty"
                    value={stock.totalStockQuantity}
                />

                <StockMetric
                    icon={CircleDollarSign}
                    label="Stock Value"
                    value={stock.totalStockValue}
                />
            </div>
        </div>
    )
}

interface StockMetricProps {
    icon: React.ElementType
    label: string
    value: string | number
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

function StockOverviewSkeleton() {
    return (
        <div className="space-y-4">
            <div className="rounded-xl border bg-card p-6">
                <div className="space-y-2">
                    <Skeleton className="h-5 w-32" />
                    <Skeleton className="h-4 w-48" />
                </div>

                <div className="flex h-[280px] items-end justify-center gap-5 px-8 pt-8 pb-6">
                    <Skeleton className="h-[45%] w-10 rounded-t-md" />
                    <Skeleton className="h-[75%] w-10 rounded-t-md" />
                    <Skeleton className="h-[55%] w-10 rounded-t-md" />
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2 sm:grid-cols-4">
                {Array.from({ length: 4 }).map((_, index) => (
                    <div key={index} className="flex min-w-0 items-center gap-3">
                        <Skeleton className="size-9 shrink-0 rounded-md" />

                        <div className="min-w-0 space-y-2">
                            <Skeleton className="h-3 w-16" />
                            <Skeleton className="h-4 w-20" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
