import { useState, type ReactNode } from "react"

import {
  type ColumnDef,
  type ColumnVisibilityState,
  type OnChangeFn,
  type PaginationState,
  type RowData,
  useTable,
} from "@tanstack/react-table"

import { Table, TableCell, TableFooter, TableRow } from "@/components/ui/table"

import { features, type DataTableFeatures } from "./data-table-features"
import { DataTableBody } from "./data-table-body"
import { DataTableHeader } from "./data-table-header"
import { DataTablePagination } from "./data-table-pagination"
import { DataTableToolbar } from "./data-table-toolbar"

interface DataTableProps<TData extends RowData> {
  /** Defines the table columns. */
  columns: ColumnDef<DataTableFeatures, TData>[]

  /** Contains the table data. */
  data: TData[]

  /** Optional table title. */
  title?: string

  /** Optional table description. */
  description?: string

  /** Optional search configuration. */
  search?: {
    value: string
    onChange: (value: string) => void
    placeholder?: string
    className?: string
  }

  /** Custom table filters. */
  filters?: ReactNode

  /** Shows or hides the column visibility button. */
  columnVisibility?: boolean

  /** Custom toolbar actions. */
  toolbarActions?: ReactNode

  /** Toolbar className. */
  toolbarClassName?: string

  /** Optional controlled pagination state. */
  pagination?: PaginationState

  /** Optional controlled pagination updater. */
  onPaginationChange?: OnChangeFn<PaginationState>

  /** Enables server-side pagination. */
  manualPagination?: boolean

  /** Total number of rows available on the server. */
  totalRows?: number

  /** Indicates the initial data loading state. */
  isLoading?: boolean

  /** Indicates that existing data is being refreshed. */
  isFetching?: boolean

  /** Initial column visibility state. */
  initialColumnVisibility?: ColumnVisibilityState
}

/** Generic reusable data table component. */
export function DataTable<TData extends RowData>({
  columns,
  data,
  title = "Data Table",
  description,
  search,
  filters,
  columnVisibility = false,
  toolbarActions,
  toolbarClassName,
  pagination: controlledPagination,
  onPaginationChange: controlledOnPaginationChange,
  manualPagination = false,
  totalRows,
  isLoading = false,
  isFetching = false,
  initialColumnVisibility,
}: DataTableProps<TData>) {
  // Internal pagination state for uncontrolled tables.
  const [internalPagination, setInternalPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  })

  // Uses controlled pagination when provided, otherwise falls back to internal state.
  const pagination = controlledPagination ?? internalPagination
  const onPaginationChange = controlledOnPaginationChange ?? setInternalPagination

  // Creates the TanStack Table instance.
  const table = useTable({
    features,
    data,
    columns,

    state: {
      pagination,
    },

    initialState: {
      columnVisibility: initialColumnVisibility,
    },

    onPaginationChange,

    manualPagination,

    rowCount: manualPagination ? totalRows : undefined,
  })

  // Number of currently visible columns.
  const visibleColumnCount = table.getVisibleLeafColumns().length

  return (
    <div className="w-full min-w-0 overflow-hidden rounded-lg border bg-card shadow-sm">
      {/* Table Toolbar */}
      <DataTableToolbar
        table={table}
        title={title}
        description={description}
        className={toolbarClassName}
        search={search}
        filters={filters}
        columnVisibility={columnVisibility}
        actions={toolbarActions}
      />

      {/* Data Table */}
      <div className="w-full min-w-0 overflow-x-auto">
        <Table className="min-w-max">
          {/* Table Header */}
          <DataTableHeader
            table={table}
            columnCount={visibleColumnCount}
            isFetching={isFetching && !isLoading}
          />

          {/* Table Body */}
          <DataTableBody
            table={table}
            isLoading={isLoading}
            columnCount={visibleColumnCount}
            skeletonRows={pagination.pageSize}
          />

          {/* Table Footer */}
          {!isLoading && (
            <TableFooter>
              <TableRow className="hover:bg-transparent">
                <TableCell colSpan={visibleColumnCount} className="px-4 py-0">
                  <DataTablePagination table={table} />
                </TableCell>
              </TableRow>
            </TableFooter>
          )}
        </Table>
      </div>
    </div>
  )
}