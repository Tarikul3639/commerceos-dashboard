export interface AnalyticsQuery {
    startDate?: string
    endDate?: string
    period?: "7d" | "30d" | "3m" | "6m" | "1y"
}

export interface RevenueChartData {
    date: string
    revenue: string
}

export interface RevenueChartResponse {
    data: RevenueChartData[]
}

export interface SalesChartData {
    date: string
    sales: string
    orders: number
}

export interface SalesChartResponse {
    data: SalesChartData[]
}

export interface PurchaseChartData {
    date: string
    purchases: string
}

export interface PurchaseChartResponse {
    data: PurchaseChartData[]
}

export interface AnalyticsOverview {
    revenue: RevenueChartResponse
    sales: SalesChartResponse
    purchases: PurchaseChartResponse
}

export interface TopProduct {
    productId: string
    productName: string
    productImage?: string | null
    variantId?: string
    sku?: string
    totalSold: number
    totalRevenue: string
}

export interface TopCustomer {
    customerId: string
    customerName: string
    customerImage?: string | null
    email?: string
    phone?: string
    totalOrders: number
    totalSpent: string
}
