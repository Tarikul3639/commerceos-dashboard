import type { Metadata } from "next"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
  title: "CommerceOS",
  description: "CommerceOS business management dashboard.",
}

export default function HomePage() {
  redirect("/dashboard")
}
