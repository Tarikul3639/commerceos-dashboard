import type { AnalyticsOverview as AnalyticsOverviewData } from "../analytics.types"

import { AnalyticsPurchases } from "./analytics-purchases"
import { AnalyticsRevenue } from "./analytics-revenue"
import { AnalyticsSales } from "./analytics-sales"

export function AnalyticsOverview({ data }: { data?: AnalyticsOverviewData }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <AnalyticsRevenue data={data?.revenue} />
      <AnalyticsSales data={data?.sales} />
      <AnalyticsPurchases data={data?.purchases} />
    </div>
  )
}
