import { createColumnHelper } from "@tanstack/react-table"

import type { LowStockProduct } from "../dashboard.types"
import type { DataTableFeatures } from "@/components/data-table"

export const columnHelper = createColumnHelper<
    DataTableFeatures,
    LowStockProduct
>()

export const columns = columnHelper.columns([
    columnHelper.accessor("productName", {
        header: "Product",
        cell: (info) => {
            const product = info.row.original

            return (
                <div className="min-w-0">
                    <p className="truncate font-medium">{product.productName}</p>

                    <p className="truncate text-xs text-muted-foreground">
                        {product.sku}
                    </p>
                </div>
            )
        },
    }),

    columnHelper.accessor("quantity", {
        header: "Stock",
        cell: (info) => {
            const quantity = info.getValue()

            return <span className="font-medium">{quantity}</span>
        },
    }),
])
