"use client"

import { useState } from "react"

import {
    useGetAnalyticsOverviewQuery,
    useGetTopCustomersQuery,
    useGetTopProductsQuery,
} from "../analytics.api"
import type { AnalyticsQuery } from "../analytics.types"

import { AnalyticsHeader } from "./analytics-header"
import { AnalyticsOverview } from "./analytics-overview"
import { AnalyticsTopCustomers } from "./analytics-top-customers"
import { AnalyticsTopProducts } from "./analytics-top-products"

export function AnalyticsContent() {
    const [query] = useState<AnalyticsQuery>({ period: "30d" })
    const { data: overview } = useGetAnalyticsOverviewQuery(query)
    const { data: topProducts } = useGetTopProductsQuery(query)
    const { data: topCustomers } = useGetTopCustomersQuery(query)

    return (
        <div className="space-y-6">
            <AnalyticsHeader query={query} />
            <AnalyticsOverview data={overview} />
            <div className="grid min-w-0 gap-4 lg:grid-cols-2">
                <AnalyticsTopProducts data={topProducts} />
                <AnalyticsTopCustomers data={topCustomers} />
            </div>
        </div>
    )
}
