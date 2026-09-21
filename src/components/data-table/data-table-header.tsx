import { type RowData, type ReactTable } from "@tanstack/react-table"
import { TableHead, TableHeader, TableRow } from "@/components/ui/table"
import type { DataTableFeatures } from "./data-table-features"
import { DataTableFetching } from "./data-table-fetching"

interface DataTableHeaderProps<TData extends RowData> {
  /** TanStack Table instance. */
  table: ReactTable<DataTableFeatures, TData>

  /** Indicates that existing table data is being refreshed. */
  isFetching?: boolean

  /** Number of visible columns spanned by the fetching indicator. */
  columnCount: number
}

/** Renders the table header and fetching indicator. */
export function DataTableHeader<TData extends RowData>({
  table,
  isFetching = false,
  columnCount,
}: DataTableHeaderProps<TData>) {
  return (
    <TableHeader className="bg-muted/40">
      {table.getHeaderGroups().map((headerGroup) => (
        <TableRow key={headerGroup.id} className="hover:bg-transparent">
          {headerGroup.headers.map((header) => (
            <TableHead
              key={header.id}
              className="h-11 px-4 text-xs font-semibold tracking-wide text-muted-foreground uppercase"
            >
              {header.isPlaceholder ? null : (
                <table.FlexRender header={header} />
              )}
            </TableHead>
          ))}
        </TableRow>
      ))}

      <DataTableFetching colSpan={columnCount} isFetching={isFetching} />
    </TableHeader>
  )
}
