import type { Metadata } from "next"

import { EmployeesContent } from "@/features/employees/components/employees-content"

export const metadata: Metadata = {
  title: "Employees",
  description: "Manage employee accounts and workforce access.",
}

export default function EmployeesPage() {
  return <EmployeesContent />
}
