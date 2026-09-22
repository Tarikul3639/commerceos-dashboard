import type { Metadata } from "next"

import { SettingsContent } from "@/features/settings/components/settings-content"

export const metadata: Metadata = {
  title: "Settings",
  description: "Configure your CommerceOS workspace settings.",
}

export default function SettingsPage() {
  return <SettingsContent />
}
