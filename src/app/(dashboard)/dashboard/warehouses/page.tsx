import type { Metadata } from "next"

import { WarehousesContent } from "@/features/warehouses/components/warehouses-content"

export const metadata: Metadata = {
  title: "Warehouses",
  description: "Manage warehouse locations and inventory operations.",
}

export default function WarehousesPage() {
  return <WarehousesContent />
}
