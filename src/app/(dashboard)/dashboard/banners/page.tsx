import type { Metadata } from "next"

import { BannersContent } from "@/features/banners/components/banners-content"

export const metadata: Metadata = {
  title: "Banners",
  description: "Manage banners displayed in your storefront.",
}

export default function BannersPage() {
  return <BannersContent />
}
