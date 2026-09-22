import type { Metadata } from "next"

import { ActivityLogsContent } from "@/features/activity-logs/components/activity-logs-content"

export const metadata: Metadata = {
  title: "Activity logs",
  description: "Review activity across your CommerceOS workspace.",
}

export default function ActivityLogsPage() {
  return <ActivityLogsContent />
}
