import type { Metadata } from "next"

import { SuppliersContent } from "@/features/suppliers/components/suppliers-content"

export const metadata: Metadata = {
  title: "Suppliers",
  description: "Manage supplier information and relationships.",
}

export default function SuppliersPage() {
  return <SuppliersContent />
}
