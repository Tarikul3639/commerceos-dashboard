import type { Metadata } from "next"

import { LoginContent } from "@/features/auth/components/login-content"

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in to access your CommerceOS dashboard.",
}

export default function LoginPage() {
  return <LoginContent />
}
