import type { Metadata } from "next"

import { NotificationsContent } from "@/features/notifications/components/notifications-content"

export const metadata: Metadata = {
  title: "Notifications",
  description: "View notifications for your CommerceOS workspace.",
}

export default function NotificationsPage() {
  return <NotificationsContent />
}
