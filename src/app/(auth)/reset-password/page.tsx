import type { Metadata } from "next"
import { Suspense } from "react"

import { ResetPasswordContent } from "@/features/auth/components/reset-password-content"

export const metadata: Metadata = {
  title: "Reset password",
  description: "Set a new password for your CommerceOS account.",
}

export default function ResetPasswordPage() {
  return (
    <Suspense
      fallback={
        <div className="flex h-full items-center justify-center">
          Loading...
        </div>
      }
    >
      <ResetPasswordContent />
    </Suspense>
  )
}
