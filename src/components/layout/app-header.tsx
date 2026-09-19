"use client"

import { Bell, Search } from "lucide-react"

import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import { Button } from "@/components/ui/button"

export function AppHeader() {
    const handleSearch = () => {
        // TODO: Open global search / command palette
    }

    return (
        <header className="sticky top-0 z-30 flex h-16 shrink-0 items-center gap-2 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80">
            <div className="flex w-full items-center gap-2 px-4">
                {/* Sidebar Toggle */}
                <SidebarTrigger className="-ml-1" />

                <Separator orientation="vertical" className="mr-2" />

                {/* Breadcrumb */}
                <Breadcrumb className="hidden sm:flex">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/dashboard">Workspace</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbSeparator />

                        <BreadcrumbItem>
                            <BreadcrumbPage>Dashboard</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                <div className="ml-auto flex items-center gap-2">
                    {/* Global Search */}
                    <Button
                        variant="outline"
                        className="hidden h-9 w-64 justify-start gap-2 text-muted-foreground md:flex lg:w-80"
                        onClick={handleSearch}
                    >
                        <Search className="size-4" />

                        <span className="flex-1 text-left">Search...</span>

                        <kbd className="pointer-events-none hidden h-5 items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium select-none sm:flex">
                            ⌘ K
                        </kbd>
                    </Button>

                    {/* Mobile Search */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="text-muted-foreground md:hidden"
                        onClick={handleSearch}
                    >
                        <Search />

                        <span className="sr-only">Search</span>
                    </Button>

                    {/* Notifications */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="relative text-muted-foreground"
                    >
                        <Bell />

                        <span className="absolute top-2 right-2 size-1.5 rounded-full bg-primary ring-2 ring-background" />

                        <span className="sr-only">Notifications</span>
                    </Button>
                </div>
            </div>
        </header>
    )
}
