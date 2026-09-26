"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { navigation } from "@/config/navigation.config"
import { cn } from "@/lib/utils"
import { usePermission } from "@/hooks/use-permission"

import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function SidebarNavigation() {
  const pathname = usePathname()
  const { has } = usePermission()

  return (
    <SidebarContent>
      {navigation.map((group) => {
        const visibleItems = group.items.filter((item) => {
          return item.permission ? has(item.permission) : true
        })

        if (visibleItems.length === 0) {
          return null
        }

        return (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel>{group.title}</SidebarGroupLabel>

            <SidebarGroupContent>
              <SidebarMenu>
                {visibleItems.map((item) => {
                  const Icon = item.icon

                  const isActive =
                    pathname === item.href ||
                    pathname.startsWith(`dashboard/${item.href}/`)

                  return (
                    <SidebarMenuItem key={item.href}>
                      <SidebarMenuButton
                        asChild
                        isActive={isActive}
                        tooltip={item.title}
                        className="px-3 py-4.5"
                      >
                        <Link href={item.href}>
                          <Icon
                            className={cn(
                              isActive && "text-primary",
                              "size-4.5!"
                            )}
                          />

                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )
      })}
    </SidebarContent>
  )
}
