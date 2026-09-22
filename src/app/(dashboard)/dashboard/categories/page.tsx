import type { Metadata } from "next"

import { CategoriesContent } from "@/features/categories/components/categories-content"

export const metadata: Metadata = {
  title: "Categories",
  description: "Organize your product catalog with categories.",
}

export default function CategoriesPage() {
  return <CategoriesContent />
}
