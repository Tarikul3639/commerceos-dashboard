"use client"

import { Columns3 } from "lucide-react"
import { type RowData, type ReactTable } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"

import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import type { DataTableFeatures } from "./data-table-features"

interface DataTableColumnVisibilityProps<TData extends RowData> {
    /** TanStack Table instance. */
    table: ReactTable<DataTableFeatures, TData>

    /** Optional button label. */
    label?: string

    /** Additional button classes. */
    className?: string
}

/** Renders a reusable column visibility control. */
export function DataTableColumnVisibility<TData extends RowData>({
    table,
    label = "Columns",
    className,
}: DataTableColumnVisibilityProps<TData>) {
    const columns = table
        .getAllLeafColumns()
        .filter((column) => column.getCanHide())

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button type="button" variant="outline" className={className}>
                    <Columns3 className="size-4" />

                    <span>{label}</span>
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>

                <DropdownMenuSeparator />

                {columns.map((column) => {
                    const columnLabel =
                        typeof column.columnDef.header === "string"
                            ? column.columnDef.header
                            : column.id

                    return (
                        <DropdownMenuCheckboxItem
                            key={column.id}
                            checked={column.getIsVisible()}
                            onCheckedChange={(value) => column.toggleVisibility(!!value)}
                            onSelect={(event) => {
                                event.preventDefault()
                            }}
                        >
                            {columnLabel}
                        </DropdownMenuCheckboxItem>
                    )
                })}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
