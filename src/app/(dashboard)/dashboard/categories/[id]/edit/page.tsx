import type { Metadata } from "next"

import { EditCategoryContent } from "@/features/categories/components/edit-category-content"

export const metadata: Metadata = {
  title: "Edit category",
  description: "Update a category in your product catalog.",
}

export default function EditCategoryPage() {
  return <EditCategoryContent />
}
