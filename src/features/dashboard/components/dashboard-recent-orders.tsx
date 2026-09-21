"use client"

import { useState } from "react"
import { DataTable } from "@/components/data-table"
import type { PaginationState } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"

import type { RecentOrder } from "../dashboard.types"
import { columns } from "./dashboard-recent-orders-columns"

export function OrderFilters() {
    return (
        <div className="flex flex-col gap-2">
            <Button variant="outline" size="sm">
                Filter by Status
            </Button>
        </div>
    )
}
interface DashboardRecentOrdersProps {
    orders?: RecentOrder[]
    isLoading?: boolean
}

export function DashboardRecentOrders({
    orders = [],
    isLoading = false,
}: DashboardRecentOrdersProps) {
    const [search, setSearch] = useState<string>("")
    const [pagination, setPagination] = useState<PaginationState>({
        pageIndex: 1,
        pageSize: 10,
    })

    const clearFilters = () => {
        setSearch("")
    }

    if (isLoading) {
        return <div>Loading...</div>
    }

    const data: RecentOrder[] = [
        {
            id: "1",
            orderNumber: "ORD-001",
            customer: {
                id: "05102502",
                name: "John Doe",
            },
            status: "Shipped",
            total: "100",
            paymentStatus: "Paid",
            createdAt: new Date().toISOString(),
        },
        {
            id: "2",
            orderNumber: "ORD-002",
            customer: {
                id: "05102503",
                name: "Jane Smith",
            },
            status: "Processing",
            total: "150",
            paymentStatus: "Pending",
            createdAt: new Date().toISOString(),
        },
        {
            id: "3",
            orderNumber: "ORD-003",
            customer: {
                id: "05102504",
                name: "Alice Johnson",
            },
            status: "Delivered",
            total: "200",
            paymentStatus: "Paid",
            createdAt: new Date().toISOString(),
        },
        {
            id: "4",
            orderNumber: "ORD-004",
            customer: {
                id: "05102505",
                name: "Bob Brown",
            },
            status: "Cancelled",
            total: "50",
            paymentStatus: "Refunded",
            createdAt: new Date().toISOString(),
        },
        {
            id: "5",
            orderNumber: "ORD-005",
            customer: {
                id: "05102506",
                name: "Charlie Davis",
            },
            status: "Shipped",
            total: "120",
            paymentStatus: "Paid",
            createdAt: new Date().toISOString(),
        },
        {
            id: "6",
            orderNumber: "ORD-006",
            customer: {
                id: "05102507",
                name: "Diana Evans",
            },
            status: "Processing",
            total: "80",
            paymentStatus: "Pending",
            createdAt: new Date().toISOString(),
        },
        {
            id: "7",
            orderNumber: "ORD-007",
            customer: {
                id: "05102508",
                name: "Frank Green",
            },
            status: "Delivered",
            total: "300",
            paymentStatus: "Paid",
            createdAt: new Date().toISOString(),
        },
        {
            id: "8",
            orderNumber: "ORD-008",
            customer: {
                id: "05102509",
                name: "Grace Harris",
            },
            status: "Cancelled",
            total: "60",
            paymentStatus: "Refunded",
            createdAt: new Date().toISOString(),
        },
        {
            id: "9",
            orderNumber: "ORD-009",
            customer: {
                id: "05102510",
                name: "Henry Johnson",
            },
            status: "Shipped",
            total: "90",
            paymentStatus: "Paid",
            createdAt: new Date().toISOString(),
        },
        {
            id: "10",
            orderNumber: "ORD-010",
            customer: {
                id: "05102511",
                name: "Isabella King",
            },
            status: "Processing",
            total: "110",
            paymentStatus: "Pending",
            createdAt: new Date().toISOString(),
        },
        {
            id: "11",
            orderNumber: "ORD-011",
            customer: {
                id: "05102512",
                name: "Jack Lee",
            },
            status: "Delivered",
            total: "250",
            paymentStatus: "Paid",
            createdAt: new Date().toISOString(),
        },
    ]

    return (
        <DataTable
            columns={columns}
            data={data}
            title="Recent Orders"
            description="Latest customer orders"

            search={{
                value: search,
                onChange: setSearch,
                placeholder: "Search orders...",
            }}

            columnVisibility
        />
    )
}
