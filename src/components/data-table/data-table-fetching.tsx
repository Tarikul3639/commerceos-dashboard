import {
    TableHead,
    TableRow,
} from "@/components/ui/table"

interface DataTableFetchingProps {
    /** Indicates whether the table is currently fetching data. */
    isFetching: boolean

    /** Number of columns the loading row should span. */
    colSpan: number
}

/** Renders a reusable loading row during data refresh. */
export function DataTableFetching({
    isFetching,
    colSpan,
}: DataTableFetchingProps) {
    if (!isFetching) {
        return null
    }

    return (
        <TableRow className="h-0 border-0">
            <TableHead
                colSpan={colSpan}
                className="relative h-0 p-0"
            >
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 z-20 h-0.5 overflow-hidden"
                >
                    <div className="h-full w-1/3 animate-[loading-progress_1s_ease-in-out_infinite] bg-primary" />
                </div>
            </TableHead>
        </TableRow>
    )
}