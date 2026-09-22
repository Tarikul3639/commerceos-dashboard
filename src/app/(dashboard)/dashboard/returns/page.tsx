import type { Metadata } from "next"

import { ReturnsContent } from "@/features/returns/components/returns-content"

export const metadata: Metadata = {
  title: "Returns",
  description: "Manage product returns and return processing.",
}

export default function ReturnsPage() {
  return <ReturnsContent />
}
