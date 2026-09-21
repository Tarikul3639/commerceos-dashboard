import {
    TableCell,
    TableRow,
} from "@/components/ui/table"

import { Skeleton } from "@/components/ui/skeleton"

interface DataTableSkeletonProps {
    /** Number of skeleton rows. */
    rows: number

    /** Number of skeleton columns. */
    columns: number
}

/** Renders loading skeleton rows for the data table. */
export function DataTableSkeleton({
    rows,
    columns,
}: DataTableSkeletonProps) {
    return (
        <>
            {Array.from({ length: rows }).map((_, rowIndex) => (
                <TableRow
                    key={rowIndex}
                    className="hover:bg-transparent"
                >
                    {Array.from({ length: columns }).map(
                        (_, columnIndex) => (
                            <TableCell
                                key={columnIndex}
                                className="px-4 py-3"
                            >
                                <Skeleton className="h-5 w-full" />
                            </TableCell>
                        )
                    )}
                </TableRow>
            ))}
        </>
    )
}