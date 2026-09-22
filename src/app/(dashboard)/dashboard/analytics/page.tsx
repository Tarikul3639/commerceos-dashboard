import type { Metadata } from "next"

import { AnalyticsContent } from "@/features/analytics/components/analytics-content"

export const metadata: Metadata = {
  title: "Analytics",
  description: "Analytics overview for your store.",
}

export default function AnalyticsPage() {
  return <AnalyticsContent />
}
