import type { Metadata } from "next"

import { UsersContent } from "@/features/users/components/users-content"

export const metadata: Metadata = {
  title: "Users",
  description: "Manage user accounts and access for your CommerceOS workspace.",
}

export default function UsersPage() {
  return <UsersContent />
}
