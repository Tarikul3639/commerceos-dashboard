import type { Metadata } from "next"

import { UnauthorizedContent } from "@/features/permissions/components/unauthorized-content"

export const metadata: Metadata = {
  title: "Access denied",
  description: "You do not have permission to access this CommerceOS page.",
}

export default function UnauthorizedPage() {
  return <UnauthorizedContent />
}
