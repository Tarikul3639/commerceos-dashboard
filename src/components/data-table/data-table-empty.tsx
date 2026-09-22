"use client"

import { Inbox, type LucideIcon } from "lucide-react"

import { TableCell, TableRow } from "@/components/ui/table"

interface DataTableEmptyProps {
  /** Number of columns the empty state should span. */
  colSpan: number

  /** Empty state message. */
  emptyText?: string

  /** Empty state icon component. */
  emptyIcon?: LucideIcon
}

/** Renders an empty table state. */
export function DataTableEmpty({
  colSpan,
  emptyText = "No results found.",
  emptyIcon: EmptyIcon = Inbox,
}: DataTableEmptyProps) {
  return (
    <TableRow>
      <TableCell colSpan={colSpan} className="p-0">
        <div className="flex min-h-45 flex-col items-center justify-center gap-2 text-muted-foreground sm:min-h-64">
          <EmptyIcon className="size-8" />

          <p className="text-sm">{emptyText}</p>
        </div>
      </TableCell>
    </TableRow>
  )
}
