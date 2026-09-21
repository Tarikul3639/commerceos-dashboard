import type { ReactNode } from "react"

import { type Column, type RowData } from "@tanstack/react-table"

import { ArrowDown, ArrowUp, ChevronsUpDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

import type { DataTableFeatures } from "./data-table-features"

interface DataTableColumnHeaderProps<TData extends RowData, TValue> {
    /** TanStack Table column instance. */
    column: Column<DataTableFeatures, TData, TValue>

    /** Column display title. */
    title: string

    /** Optional custom header content. */
    children?: ReactNode

    /** Additional classes for the header button. */
    className?: string
}

/** Renders a reusable sortable table column header. */
export function DataTableColumnHeader<TData extends RowData, TValue>({
    column,
    title,
    children,
    className,
}: DataTableColumnHeaderProps<TData, TValue>) {
    const canSort = column.getCanSort()
    const sortDirection = column.getIsSorted()

    if (!canSort) {
        return (
            <div className={cn("whitespace-nowrap", className)}>
                {children ?? title}
            </div>
        )
    }

    return (
        <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => column.toggleSorting()}
            className={cn("-ml-3 h-8 px-3 whitespace-nowrap", className)}
        >
            {children ?? title}

            {sortDirection === "asc" ? (
                <ArrowUp className="size-3.5" />
            ) : sortDirection === "desc" ? (
                <ArrowDown className="size-3.5" />
            ) : (
                <ChevronsUpDown className="size-3.5" />
            )}
        </Button>
    )
}
