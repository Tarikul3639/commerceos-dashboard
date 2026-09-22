import type { Metadata } from "next"

import { CreateCategoryContent } from "@/features/categories/components/create-category-content"

export const metadata: Metadata = {
  title: "Create category",
  description: "Create a category for your product catalog.",
}

export default function CreateCategoryPage() {
  return <CreateCategoryContent />
}
