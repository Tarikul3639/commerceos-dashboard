"use client"

import Link from "next/link"
import { Bell, LogOut, User } from "lucide-react"
import { useRouter } from "next/navigation"

import { useLogoutMutation } from "@/features/auth/auth.api"
import { logout } from "@/store/slices/auth.slice"

import {
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"

import { SidebarUserAvatar } from "./sidebar-user-avatar"
import { SidebarUserInfo } from "./sidebar-user-info"

interface SidebarProfileMenuProps {
    user: {
        name?: string
        email?: string
        avatar?: string | null
    } | null
    initials?: string
}

export function SidebarProfileMenu({
    user,
    initials,
}: SidebarProfileMenuProps) {
    const router = useRouter()

    const [logoutMutation] = useLogoutMutation()

    const handleLogout = async () => {
        try {
            await logoutMutation().unwrap()

            logout()
            router.push("/login")
        } catch (error) {
            console.error("Logout failed:", error)
        }
    }

    return (
        <DropdownMenuContent
            side="top"
            align="end"
            sideOffset={8}
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
        >
            {/* User Info */}
            <div className="flex items-center gap-2 p-2">
                <SidebarUserAvatar
                    name={user?.name}
                    avatar={user?.avatar}
                    initials={initials}
                />

                <SidebarUserInfo name={user?.name} email={user?.email} />
            </div>

            <DropdownMenuSeparator />

            {/* Profile */}
            <DropdownMenuItem asChild>
                <Link href="/dashboard/profile">
                    <User />
                    <span>Profile</span>
                </Link>
            </DropdownMenuItem>

            {/* Notifications */}
            <DropdownMenuItem asChild>
                <Link href="/dashboard/notifications">
                    <Bell />
                    <span>Notifications</span>
                </Link>
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            {/* Logout */}
            <DropdownMenuItem variant="destructive" onClick={handleLogout}>
                <LogOut />
                <span>Logout</span>
            </DropdownMenuItem>
        </DropdownMenuContent>
    )
}
