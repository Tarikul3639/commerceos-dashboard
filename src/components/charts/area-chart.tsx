"use client"

import {
    Bar,
    BarChart as RechartsBarChart,
    CartesianGrid,
    ResponsiveContainer,
    XAxis,
    YAxis,
    Cell,
} from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    type ChartConfig,
} from "@/components/ui/chart"

import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"

export interface BarChartData {
    name: string
    value: number
    color?: string
}

interface AppBarChartProps {
    data: BarChartData[]
    title?: string
    description?: string
    config?: ChartConfig
    height?: number
    showGrid?: boolean
    showXAxis?: boolean
    showYAxis?: boolean
    showTooltip?: boolean
    barRadius?: number
    barSize?: number
    isLoading?: boolean
    emptyMessage?: string
    className?: string
}

export function AppBarChart({
    data,
    title,
    description,
    config = {}, // Not need
    height = 280,
    showGrid = true,
    showXAxis = true,
    showYAxis = true,
    showTooltip = true,
    barRadius = 6,
    barSize = 40,
    isLoading = false,
    emptyMessage = "No data available",
    className,
}: AppBarChartProps) {
    const isEmpty = !data?.length

    return (
        <Card className={cn("overflow-hidden", className)}>
            {(title || description) && (
                <CardHeader>
                    {title && <CardTitle>{title}</CardTitle>}

                    {description && (
                        <CardDescription>
                            {description}
                        </CardDescription>
                    )}
                </CardHeader>
            )}

            <CardContent>
                {isLoading ? (
                    <BarChartSkeleton height={height} />
                ) : isEmpty ? (
                    <div
                        className="flex items-center justify-center text-sm text-muted-foreground"
                        style={{ height }}
                    >
                        {emptyMessage}
                    </div>
                ) : (
                    <ChartContainer
                        config={config}
                        className="w-full"
                        style={{ height }}
                    >
                        <ResponsiveContainer
                            width="100%"
                            height="100%"
                        >
                            <RechartsBarChart
                                accessibilityLayer
                                data={data}
                                margin={{
                                    top: 8,
                                    right: 8,
                                    left: 0,
                                    bottom: 0,
                                }}
                            >
                                {showGrid && (
                                    <CartesianGrid vertical={false} />
                                )}

                                {showXAxis && (
                                    <XAxis
                                        dataKey="name"
                                        tickLine={false}
                                        axisLine={false}
                                        tickMargin={10}
                                    />
                                )}

                                {showYAxis && (
                                    <YAxis
                                        tickLine={false}
                                        axisLine={false}
                                        tickMargin={8}
                                        allowDecimals={false}
                                    />
                                )}

                                {showTooltip && (
                                    <ChartTooltip
                                        cursor={false}
                                        content={
                                            <ChartTooltipContent />
                                        }
                                    />
                                )}

                                <Bar
                                    dataKey="value"
                                    radius={barRadius}
                                    barSize={barSize}
                                >
                                    {data.map((item) => (
                                        <Cell
                                            key={item.name}
                                            fill={item.color}
                                        />
                                    ))}
                                </Bar>
                            </RechartsBarChart>
                        </ResponsiveContainer>
                    </ChartContainer>
                )}
            </CardContent>
        </Card>
    )
}

function BarChartSkeleton({ height }: { height: number }) {
    return (
        <div
            className="flex items-end justify-center gap-4 px-8 pb-6"
            style={{ height }}
        >
            <Skeleton className="h-[35%] w-10 rounded-t-md" />
            <Skeleton className="h-[65%] w-10 rounded-t-md" />
            <Skeleton className="h-[45%] w-10 rounded-t-md" />
            <Skeleton className="h-[80%] w-10 rounded-t-md" />
            <Skeleton className="h-[55%] w-10 rounded-t-md" />
        </div>
    )
}