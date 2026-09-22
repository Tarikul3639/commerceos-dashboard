"use client"

import { ChevronsUpDown } from "lucide-react"

import { useAppSelector } from "@/store/hooks"

import {
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { SidebarProfileMenu } from "./sidebar-profile-menu"
import { SidebarUserAvatar } from "./sidebar-user-avatar"
import { SidebarUserInfo } from "./sidebar-user-info"

export function SidebarProfile() {
  const user = useAppSelector((state) => state.auth.user)

  const userInitials = user?.name
    ?.split(" ")
    .map((name) => name[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()

  return (
    <SidebarFooter>
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton
                size="lg"
                tooltip={user?.name}
                className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              >
                <SidebarUserAvatar
                  name={user?.name}
                  avatar={user?.avatar}
                  initials={userInitials}
                />

                <SidebarUserInfo name={user?.name} email={user?.email} />

                <ChevronsUpDown className="ml-auto size-4" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>

            <SidebarProfileMenu user={user} initials={userInitials} />
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  )
}
