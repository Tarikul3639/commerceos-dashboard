import type { Metadata } from "next"

import { EditProductContent } from "@/features/products/components/edit-product-content"

export const metadata: Metadata = {
  title: "Edit product",
  description: "Update product details in your catalog.",
}

export default function ProductEditPage() {
  return <EditProductContent />
}
