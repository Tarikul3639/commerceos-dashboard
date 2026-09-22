import type { Metadata } from "next"

import { OrdersContent } from "@/features/orders/components/orders-content"

export const metadata: Metadata = {
  title: "Orders",
  description: "Manage customer orders and fulfilment.",
}

export default function OrdersPage() {
  return <OrdersContent />
}
