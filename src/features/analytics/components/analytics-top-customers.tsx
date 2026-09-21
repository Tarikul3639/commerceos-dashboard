import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import type { TopCustomer } from "../analytics.types"

export function AnalyticsTopCustomers({ data = [] }: { data?: TopCustomer[] }) {
    return (
        <Card>
            <CardHeader><CardTitle>Top Customers</CardTitle></CardHeader>
            <CardContent className="space-y-2">
                {data.map((customer) => (
                    <div key={customer.customerId} className="flex justify-between gap-3 text-sm">
                        <span className="truncate">{customer.customerName}</span>
                        <span className="shrink-0 text-muted-foreground">{customer.totalOrders} orders</span>
                    </div>
                ))}
            </CardContent>
        </Card>
    )
}
