import {
    columnFilteringFeature,
    columnVisibilityFeature,
    globalFilteringFeature,
    rowPaginationFeature,
    createPaginatedRowModel,
    rowSelectionFeature,
    rowSortingFeature,
    tableFeatures,
} from "@tanstack/react-table"

export const features = tableFeatures({
    columnFilteringFeature,
    columnVisibilityFeature,
    rowPaginationFeature,
    paginatedRowModel: createPaginatedRowModel(),
    rowSelectionFeature,
    rowSortingFeature,
    globalFilteringFeature,
})

export type DataTableFeatures = typeof features