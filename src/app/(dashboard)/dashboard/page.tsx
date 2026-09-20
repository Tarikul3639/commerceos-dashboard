import type { Metadata } from "next"
import { DashboardContent } from "@/features/dashboard/components/dashboard-content"

export const metadata: Metadata = {
    title: "Dashboard",
    description: "Overview of your business performance.",
}

export default function DashboardPage() {
    return <DashboardContent />
}
