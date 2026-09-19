"use client"

import { useGetCurrentUserQuery } from "@/features/auth/auth.api"

export default function DashboardPage() {
    const {
        data: user,
        isLoading,
        isError,
    } = useGetCurrentUserQuery()

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (isError || !user) {
        return <div>Failed to load user.</div>
    }

    return (
        <main className="space-y-6 p-6">
            <div>
                <h1 className="text-2xl font-bold">
                    Welcome, {user.name}
                </h1>

                <p className="text-muted-foreground">
                    {user.email}
                </p>
            </div>

            <div className="rounded-lg border p-4">
                <h2 className="mb-3 font-semibold">
                    Current User
                </h2>

                <div className="space-y-2 text-sm">
                    <p>
                        <strong>ID:</strong> {user.id}
                    </p>

                    <p>
                        <strong>Name:</strong> {user.name}
                    </p>

                    <p>
                        <strong>Email:</strong> {user.email}
                    </p>

                    <p>
                        <strong>Phone:</strong> {user.phone ?? "N/A"}
                    </p>

                    <p>
                        <strong>Role:</strong> {user.role}
                    </p>

                    <p>
                        <strong>Email Verified:</strong>{" "}
                        {user.isVerified ? "Yes" : "No"}
                    </p>
                </div>
            </div>

            <div className="rounded-lg border p-4">
                <h2 className="mb-3 font-semibold">
                    Permissions
                </h2>

                {user.permissions.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                        {user.permissions.map((permission) => (
                            <span
                                key={permission}
                                className="rounded-md bg-muted px-3 py-1 text-sm"
                            >
                                {permission}
                            </span>
                        ))}
                    </div>
                ) : (
                    <p className="text-sm text-muted-foreground">
                        No permissions found.
                    </p>
                )}
            </div>
        </main>
    )
}