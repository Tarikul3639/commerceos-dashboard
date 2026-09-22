import type { Metadata } from "next"

import { ForgotPasswordContent } from "@/features/auth/components/forgot-password-content"

export const metadata: Metadata = {
  title: "Forgot password",
  description: "Request instructions to reset your CommerceOS password.",
}

export default function ForgotPasswordPage() {
  return <ForgotPasswordContent />
}
