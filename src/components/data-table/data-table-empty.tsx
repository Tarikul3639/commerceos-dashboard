import { TableCell, TableRow } from "@/components/ui/table"

interface DataTableEmptyProps {
    colSpan: number
    message?: string
}

export function DataTableEmpty({
    colSpan,
    message = "No results found.",
}: DataTableEmptyProps) {
    return (
        <TableRow>
            <TableCell
                colSpan={colSpan}
                className="h-24 text-center text-muted-foreground"
            >
                {message}
            </TableCell>
        </TableRow>
    )
}