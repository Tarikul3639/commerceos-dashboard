"use client"

import { useState } from "react"

import { Inbox } from "lucide-react"
import type { PaginationState } from "@tanstack/react-table"

import { DataTable } from "@/components/data-table"

import type { RecentOrder } from "../dashboard.types"
import { recentOrders } from "../dashboard.data"
import { columns } from "./dashboard-recent-orders-columns"

interface DashboardRecentOrdersProps {
  orders?: RecentOrder[]
  isLoading?: boolean
  isFetching?: boolean
}

export function DashboardRecentOrders({
  orders = [],
  isLoading = false,
  isFetching = false,
}: DashboardRecentOrdersProps) {
  const [search, setSearch] = useState<string>("")

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  })

  return (
    <div className="h-full max-h-150 min-h-80 min-w-0">
      <DataTable
        columns={columns}
        data={recentOrders}
        title="Recent Orders"
        description="Latest customer orders"
        search={{
          value: search,
          onChange: setSearch,
          placeholder: "Search orders...",
        }}
        isLoading={isLoading}
        isFetching={isFetching}
        columnVisibility
        emptyText="No recent orders"
        emptyIcon={Inbox}
      />
    </div>
  )
}
