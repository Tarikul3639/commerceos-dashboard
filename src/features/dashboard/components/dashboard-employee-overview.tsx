"use client"

import { Users } from "lucide-react"
import { AppPieChart, type PieChartData } from "@/components/charts"
import type { EmployeeSummary } from "../dashboard.types"
import { employeeSummary } from "../dashboard.data"

interface DashboardEmployeeOverviewProps {
    employees?: EmployeeSummary
    isLoading?: boolean
}

const chartConfig = {
    Active: {
        label: "Active",
        color: "var(--chart-1)",
    },
    Inactive: {
        label: "Inactive",
        color: "var(--chart-2)",
    },
}

export function DashboardEmployeeOverview({
    employees,
    isLoading = false,
}: DashboardEmployeeOverviewProps) {
    employees = employeeSummary // TODO: Remove this line when API is ready

    const totalEmployees = employees?.totalEmployees ?? 0
    const activeEmployees = employees?.activeEmployees ?? 0

    const inactiveEmployees = Math.max(totalEmployees - activeEmployees, 0)

    const data: PieChartData[] = [
        {
            name: "Active",
            value: activeEmployees,
        },
        {
            name: "Inactive",
            value: inactiveEmployees,
        },
    ]

    return (
        <AppPieChart
            data={data}
            title="Employee Overview"
            description="Employee activity overview"
            config={chartConfig}
            donut
            height={260}
            innerRadius="60%"
            outerRadius="100%"
            centerContent={
                <div className="flex flex-col items-center">
                    <Users className="mb-1 size-5 text-muted-foreground" />

                    <span className="text-2xl font-bold tracking-tight">
                        {totalEmployees.toLocaleString("en-BD")}
                    </span>

                    <span className="text-xs text-muted-foreground">Employees</span>
                </div>
            }
            footerTitle={`${employees?.newEmployees?.toLocaleString("en-BD") ?? 0} new employees`}
            footerDescription="New employees in the selected period"
            isLoading={isLoading}
        />
    )
}
