import type { Metadata } from "next"

import { ResendVerificationEmailContent } from "@/features/auth/components/resend-verification-email-content"

export const metadata: Metadata = {
  title: "Resend verification email",
  description:
    "Request a new email verification link for your CommerceOS account.",
}

export default function ResendVerificationEmailPage() {
  return <ResendVerificationEmailContent />
}
