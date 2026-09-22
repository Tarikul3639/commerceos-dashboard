import Link from "next/link"

import { siteConfig } from "@/config/site"

import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function SidebarBrand() {
  return (
    <SidebarHeader className="flex h-16 items-center justify-center">
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton asChild size="lg" tooltip={siteConfig.name}>
            <Link href="/dashboard">
              <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <span className="text-base font-bold">
                  {siteConfig.name[0]}
                </span>
              </div>

              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">
                  {siteConfig.name}
                </span>

                <span className="truncate text-xs text-muted-foreground">
                  Workspace
                </span>
              </div>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
  )
}
