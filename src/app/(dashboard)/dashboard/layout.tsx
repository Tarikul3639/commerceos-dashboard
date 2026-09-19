"use client"

import { useAuth } from "@/hooks/use-auth"
import { PageLoader } from "@/components/shared/page-loader"
import { AppShell } from "@/components/layout/app-shell"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const { user, isLoading, isAuthenticated } = useAuth()

    if (isLoading) {
        return <PageLoader />
    }

    if (!isAuthenticated || !user) {
        return null
    }

    return <AppShell>{children}</AppShell>
}
