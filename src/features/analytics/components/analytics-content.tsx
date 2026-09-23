"use client"

import { useState } from "react"

import {
  useGetAnalyticsOverviewQuery,
  useGetRevenueChartQuery,
  useGetSalesChartQuery,
  useGetTopCustomersQuery,
  useGetTopProductsQuery,
} from "../analytics.api"
import type { AnalyticsQuery } from "../analytics.types"

import { AnalyticsHeader } from "./analytics-header"
import { AnalyticsRevenue } from "./analytics-revenue"
import { AnalyticsSales } from "./analytics-sales"
import { AnalyticsTopCustomers } from "./analytics-top-customers"
import { AnalyticsTopProducts } from "./analytics-top-products"

export function AnalyticsContent() {
  const [query, setQuery] = useState<AnalyticsQuery>({
    period: "30d",
  })
  const { data: revenue, isLoading: isRevenueLoading } =
    useGetRevenueChartQuery(query)
  const { data: sales, isLoading: isSalesLoading } =
    useGetSalesChartQuery(query)
  const { data: topProducts } = useGetTopProductsQuery(query)
  const { data: topCustomers } = useGetTopCustomersQuery(query)

  return (
    <div className="space-y-6">
      <AnalyticsHeader query={query} onQueryChange={setQuery} />

      <div className="grid min-w-0 gap-4">
        <AnalyticsSales sales={sales} isLoading={isSalesLoading} />
        <AnalyticsRevenue revenue={revenue} isLoading={isRevenueLoading} />
      </div>

      <div className="grid min-w-0 gap-4 lg:grid-cols-2">
        <AnalyticsTopProducts data={topProducts} />
        <AnalyticsTopCustomers data={topCustomers} />
      </div>
    </div>
  )
}
