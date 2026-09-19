"use client"

import { useGetCurrentUserQuery } from "@/features/auth/auth.api"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const { data: user, isLoading, isError } = useGetCurrentUserQuery()

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (isError || !user) {
        return null
    }

    return (
        <div>
            {/* Sidebar */}
            {/* Header */}
            {children}
        </div>
    )
}
