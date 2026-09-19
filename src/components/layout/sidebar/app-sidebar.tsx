"use client"

import { Sidebar, SidebarSeparator } from "@/components/ui/sidebar"
import { SidebarBrand } from "./sidebar-brand"
import { SidebarNavigation } from "./sidebar-navigation"
import { SidebarProfile } from "./sidebar-profile"

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon">
            <SidebarBrand />
            <SidebarSeparator />
            <SidebarNavigation />
            <SidebarSeparator />
            <SidebarProfile />
        </Sidebar>
    )
}
