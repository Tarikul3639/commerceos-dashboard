"use client"

import { type ReactNode } from "react"
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

  /** Additional classes for the button. */
  className?: string
}

/** Renders a reusable sortable table column header. */
export function DataTableColumnHeader<TData extends RowData, TValue>({
  column,
  title,
  children,
  className,
}: DataTableColumnHeaderProps<TData, TValue>) {
  const sorted = column.getIsSorted()

  return (
    <Button
      variant="ghost"
      onClick={() => column.toggleSorting()}
      className={cn("-ml-3 h-8 text-xs uppercase", className)}
    >
      {children ?? title}

      {sorted === "asc" ? (
        <ArrowUp className="ml-2 size-4" />
      ) : sorted === "desc" ? (
        <ArrowDown className="ml-2 size-4" />
      ) : (
        <ChevronsUpDown className="ml-2 size-4" />
      )}
    </Button>
  )
}
