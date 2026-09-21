import { createColumnHelper } from "@tanstack/react-table"
import type { RecentOrder } from "../dashboard.types"
import {
    DataTableColumnHeader,
    type DataTableFeatures,
} from "@/components/data-table"

export const columnHelper = createColumnHelper<DataTableFeatures, RecentOrder>()

export const columns = columnHelper.columns([
    columnHelper.accessor("id", {
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Order ID" />
        ),
        sortFn: "sortFn_alphanumeric",
        cell: (info) => info.getValue(),
    }),

    columnHelper.accessor("orderNumber", {
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Order Number" />
        ),
        sortFn: "sortFn_alphanumeric",
        cell: (info) => info.getValue(),
    }),

    columnHelper.accessor((row) => row.customer.name, {
        id: "customerName",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Customer" />
        ),
        sortFn: "sortFn_text",
        cell: (info) => info.getValue(),
    }),

    columnHelper.accessor("status", {
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Status" />
        ),
        sortFn: "sortFn_text",
        cell: (info) => info.getValue(),
    }),

    columnHelper.accessor("total", {
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Total" />
        ),
        sortFn: "sortFn_alphanumeric",
        cell: (info) => info.getValue(),
    }),

    columnHelper.accessor("paymentStatus", {
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Payment Status" />
        ),
        sortFn: "sortFn_text",
        cell: (info) => info.getValue() || "N/A",
    }),

    columnHelper.accessor("createdAt", {
        header: "Created At",
        cell: (info) => new Date(info.getValue()).toLocaleDateString(),
    }),
])
