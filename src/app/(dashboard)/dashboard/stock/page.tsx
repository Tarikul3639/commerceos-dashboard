import type { Metadata } from "next"

import { StockContent } from "@/features/stock/components/stock-content"

export const metadata: Metadata = {
  title: "Stock",
  description: "Monitor inventory stock levels.",
}

export default function StockPage() {
  return <StockContent />
}
