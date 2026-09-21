"use client"

import { Search, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

interface DataTableSearchProps {
    /** Current search value. */
    value: string

    /** Handles search value changes. */
    onChange: (value: string) => void

    /** Placeholder displayed inside the search input. */
    placeholder?: string

    /** Additional classes for the search container. */
    className?: string
}

/** Renders a reusable table search input. */
export function DataTableSearch({
    value,
    onChange,
    placeholder = "Search...",
    className,
}: DataTableSearchProps) {
    return (
        <div className={cn("relative w-full sm:w-64", className)}>
            <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />

            <Input
                value={value}
                onChange={(event) => onChange(event.target.value)}
                placeholder={placeholder}
                className="h-9 pr-9 pl-9"
            />

            {value && (
                <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => onChange("")}
                    className="absolute top-1/2 right-1 size-7 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                    <X className="size-4" />

                    <span className="sr-only">Clear search</span>
                </Button>
            )}
        </div>
    )
}
