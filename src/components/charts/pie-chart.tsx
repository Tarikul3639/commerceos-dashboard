"use client"

import type { ReactNode } from "react"
import {
    Cell,
    Pie,
    PieChart as RechartsPieChart,
    ResponsiveContainer,
} from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
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
import { TrendingUp } from "lucide-react"

export interface PieChartData {
    name: string
    value: number
}

interface AppPieChartProps {
    data: PieChartData[]

    title?: string
    description?: string

    config?: ChartConfig

    /** Show donut instead of regular pie */
    donut?: boolean

    /** Inner radius of donut */
    innerRadius?: number | string

    /** Outer radius of chart */
    outerRadius?: number | string

    /** Space between slices */
    paddingAngle?: number

    /** Chart height */
    height?: number

    /** Show tooltip */
    showTooltip?: boolean

    /** Optional center content for donut */
    centerContent?: ReactNode

    /** Optional footer title and description */
    footerTitle?: string

    /** Optional footer description */
    footerDescription?: string

    /** Loading state */
    isLoading?: boolean

    className?: string
}

export function AppPieChart({
    data,
    title,
    description,
    config = {},
    donut = false,
    innerRadius = "60%",
    outerRadius = "80%",
    paddingAngle = 2,
    height = 280,
    showTooltip = true,
    centerContent,
    footerTitle,
    footerDescription,
    isLoading = false,
    className,
}: AppPieChartProps) {
    return (
        <Card className={cn("overflow-hidden", className)}>
            {(title || description) && (
                <CardHeader>
                    {title && <CardTitle>{title}</CardTitle>}

                    {description && <CardDescription>{description}</CardDescription>}
                </CardHeader>
            )}

            <CardContent>
                {isLoading ? (
                    <div className="flex items-center justify-center" style={{ height }}>
                        <Skeleton className="size-52 rounded-full" />
                    </div>
                ) : (
                    <ChartContainer
                        config={config}
                        className="mx-auto w-full"
                        style={{ height }}
                    >
                        <ResponsiveContainer width="100%" height="100%">
                            <RechartsPieChart>
                                {showTooltip && (
                                    <ChartTooltip
                                        cursor={false}
                                        content={<ChartTooltipContent hideLabel />}
                                    />
                                )}

                                <Pie
                                    data={data}
                                    dataKey="value"
                                    nameKey="name"
                                    innerRadius={donut ? innerRadius : 0}
                                    outerRadius={outerRadius}
                                    paddingAngle={donut ? paddingAngle : 0}
                                    strokeWidth={2}
                                >
                                    {data.map((item) => (
                                        <Cell key={item.name} fill={`var(--color-${item.name})`} />
                                    ))}
                                </Pie>

                                {donut && centerContent && (
                                    <foreignObject x="35%" y="35%" width="30%" height="30%">
                                        <div className="flex h-full w-full items-center justify-center text-center">
                                            {centerContent}
                                        </div>
                                    </foreignObject>
                                )}
                            </RechartsPieChart>
                        </ResponsiveContainer>
                    </ChartContainer>
                )}
            </CardContent>

            <CardFooter className="flex-col gap-2 text-sm">
                <div className="flex items-center gap-2 leading-none font-medium">
                    {footerTitle ?? "Total Visitors"}
                    <TrendingUp className="h-4 w-4" />
                </div>
                <div className="leading-none text-muted-foreground">
                    {footerDescription ?? "Visitors in the last 30 days"}
                </div>
            </CardFooter>
        </Card>
    )
}
