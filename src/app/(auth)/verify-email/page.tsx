import type { Metadata } from "next"

import { VerifyEmailContent } from "@/features/auth/components/verify-email-content"

export const metadata: Metadata = {
  title: "Verify email",
  description: "Verify your email address to activate your CommerceOS account.",
}

export default function VerifyEmailPage() {
  return <VerifyEmailContent />
}
