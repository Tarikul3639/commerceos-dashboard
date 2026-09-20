"use client"

import { SidebarProvider } from "@/components/ui/sidebar"
import { TooltipProvider } from "@/components/ui/tooltip"

import { AppSidebar } from "./sidebar/app-sidebar"
import { AppHeader } from "./app-header"

interface AppShellProps {
    children: React.ReactNode
}

export function AppShell({ children }: AppShellProps) {
    return (
        <TooltipProvider>
            <SidebarProvider>
                <AppSidebar />

                <div className="flex min-h-svh w-full flex-col">
                    <AppHeader />

                    <main className="flex-1 p-2 sm:p-3 md:p-4">{children}</main>
                </div>
            </SidebarProvider>
        </TooltipProvider>
    )
}
