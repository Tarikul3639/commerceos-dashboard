import type { Metadata } from "next"

import { StockTransfersContent } from "@/features/stock-transfers/components/stock-transfers-content"

export const metadata: Metadata = {
  title: "Stock transfers",
  description: "Manage inventory transfers between locations.",
}

export default function StockTransfersPage() {
  return <StockTransfersContent />
}
