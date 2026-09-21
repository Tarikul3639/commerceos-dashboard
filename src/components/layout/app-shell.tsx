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

        <div className="flex min-h-svh min-w-0 flex-1 flex-col">
          <AppHeader />

          <main className="min-w-0 flex-1 p-2 sm:p-3 md:p-4">{children}</main>
        </div>
      </SidebarProvider>
    </TooltipProvider>
  )
}
