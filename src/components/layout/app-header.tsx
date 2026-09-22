"use client"

import { Bell, Moon, Search, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import { AppBreadcrumb } from "./app-breadcrumb"

import { Button } from "@/components/ui/button"

export function AppHeader() {
  const { theme, setTheme } = useTheme()

  const handleThemeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const handleSearch = () => {
    // TODO: Open global search / command palette
  }

  return (
    <header className="sticky top-0 z-30 flex h-16 shrink-0 items-center gap-2 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80">
      <div className="flex w-full items-center gap-2 px-4">
        {/* Sidebar Toggle */}
        <Tooltip>
          <TooltipTrigger asChild>
            <SidebarTrigger className="-ml-1" />
          </TooltipTrigger>

          <TooltipContent>
            <p>Toggle Sidebar</p>
          </TooltipContent>
        </Tooltip>

        <Separator orientation="vertical" className="mr-2" />

        {/* Breadcrumb */}
        <AppBreadcrumb />

        <div className="ml-auto flex items-center gap-2">
          {/* Global Search */}
          <Tooltip>
            <TooltipTrigger asChild>
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
            </TooltipTrigger>

            <TooltipContent>
              <p>Search</p>
            </TooltipContent>
          </Tooltip>

          {/* Mobile Search */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground md:hidden"
                onClick={handleSearch}
              >
                <Search />

                <span className="sr-only">Search</span>
              </Button>
            </TooltipTrigger>

            <TooltipContent>
              <p>Search</p>
            </TooltipContent>
          </Tooltip>

          {/* Theme Toggle */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground"
                onClick={handleThemeToggle}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="size-4" />
                ) : (
                  <Moon className="size-4" />
                )}

                <span className="sr-only">Toggle theme</span>
              </Button>
            </TooltipTrigger>

            <TooltipContent>
              <p>
                {theme === "dark"
                  ? "Switch to Light Mode"
                  : "Switch to Dark Mode"}
              </p>
            </TooltipContent>
          </Tooltip>

          {/* Notifications */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="relative text-muted-foreground"
              >
                <Bell />

                <span className="absolute top-2 right-2 size-1.5 rounded-full bg-primary ring-2 ring-background" />

                <span className="sr-only">Notifications</span>
              </Button>
            </TooltipTrigger>

            <TooltipContent>
              <p>Notifications</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </header>
  )
}
