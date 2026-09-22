"use client"

import type { DateRange } from "react-day-picker"

import { DatePickerWithRange } from "@/components/date-picker/date-picker-with-range"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"

import type { DashboardQuery } from "../dashboard.types"
import { PERIOD_OPTIONS } from "../dashboard.constants"

interface DashboardHeaderProps {
  query: DashboardQuery
  onQueryChange: (query: DashboardQuery) => void
  className?: string
}

export function DashboardHeader({
  query,
  onQueryChange,
  className,
}: DashboardHeaderProps) {
  const dateRange: DateRange | undefined =
    query.startDate || query.endDate
      ? {
          from: query.startDate ? new Date(query.startDate) : undefined,
          to: query.endDate ? new Date(query.endDate) : undefined,
        }
      : undefined

  const handlePeriodChange = (period: DashboardQuery["period"]) => {
    onQueryChange({
      period,
      startDate: undefined,
      endDate: undefined,
    })
  }

  const handleDateRangeChange = (range: DateRange | undefined) => {
    onQueryChange({
      period: undefined,
      startDate: range?.from?.toISOString(),
      endDate: range?.to?.toISOString(),
    })
  }

  return (
    <div
      className={cn(
        "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
        className
      )}
    >
      <div>
        <h1 className="text-lg font-semibold tracking-tight">Dashboard</h1>

        <p className="text-sm text-muted-foreground">
          Overview of your business performance
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-end gap-0.5">
        <Select
          value={query.period}
          onValueChange={(value) =>
            handlePeriodChange(value as DashboardQuery["period"])
          }
        >
          <SelectTrigger className="h-9 w-[150px]">
            <SelectValue placeholder="Select period" />
          </SelectTrigger>
          <SelectGroup>
            <SelectContent className="rounded-sm p-1">
              <SelectLabel>Period</SelectLabel>
              <SelectSeparator />

              {PERIOD_OPTIONS.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </SelectGroup>
        </Select>

        <DatePickerWithRange
          value={dateRange}
          onChange={handleDateRangeChange}
        />
      </div>
    </div>
  )
}
