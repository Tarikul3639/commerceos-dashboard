"use client"

import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import type { DateRange } from "react-day-picker"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"

interface DatePickerWithRangeProps {
  value?: DateRange
  onChange?: (range: DateRange | undefined) => void
  className?: string
}

export function DatePickerWithRange({
  value,
  onChange,
  className,
}: DatePickerWithRangeProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className={cn(
            "h-9 justify-start px-3 font-normal",
            !value?.from && "text-muted-foreground",
            className
          )}
        >
          <CalendarIcon className="size-4" />

          {value?.from ? (
            value.to ? (
              <>
                {format(value.from, "LLL dd, y")} -{" "}
                {format(value.to, "LLL dd, y")}
              </>
            ) : (
              format(value.from, "LLL dd, y")
            )
          ) : (
            <span>Custom range</span>
          )}
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-auto p-0" align="end">
        <Calendar
          mode="range"
          selected={value}
          onSelect={onChange}
          numberOfMonths={2}
        />
      </PopoverContent>
    </Popover>
  )
}
