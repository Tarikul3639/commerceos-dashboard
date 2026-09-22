import type { Metadata } from "next"

import { CustomersContent } from "@/features/customers/components/customers-content"

export const metadata: Metadata = {
  title: "Customers",
  description: "Manage your customer records and relationships.",
}

export default function CustomersPage() {
  return <CustomersContent />
}
