import type { Metadata } from "next"

import { ResetPasswordContent } from "@/features/auth/components/reset-password-content"

export const metadata: Metadata = {
  title: "Reset password",
  description: "Set a new password for your CommerceOS account.",
}

export default function ResetPasswordPage() {
  return <ResetPasswordContent />
}
