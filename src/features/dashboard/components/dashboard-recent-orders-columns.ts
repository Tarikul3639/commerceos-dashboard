import { createColumnHelper } from "@tanstack/react-table"
import type { RecentOrder } from "../dashboard.types"
import type { DataTableFeatures } from "@/components/data-table"

export const columnHelper = createColumnHelper<DataTableFeatures, RecentOrder>()

export const dashboardRecentOrdersColumns = columnHelper.columns([
    columnHelper.accessor("id", {
        header: "Order ID",
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("orderNumber", {
        header: "Order Number",
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("customer", {
        header: "Customer",
        cell: (info) => `$${info.getValue().name}`,
    }),
    columnHelper.accessor("status", {
        header: "Status",
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("total", {
        header: "Total",
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("paymentStatus", {
        header: "Payment Status",
        cell: (info) => info.getValue() || "N/A",
    }),
    columnHelper.accessor("createdAt", {
        header: "Created At",
        cell: (info) => new Date(info.getValue()).toLocaleDateString(),
    }),
])
