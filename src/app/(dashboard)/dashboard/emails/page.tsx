import type { Metadata } from "next"

import { EmailsContent } from "@/features/emails/components/emails-content"

export const metadata: Metadata = {
  title: "Emails",
  description: "Manage email communication for your business.",
}

export default function EmailsPage() {
  return <EmailsContent />
}
