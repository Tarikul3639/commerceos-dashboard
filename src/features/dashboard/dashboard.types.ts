export interface DashboardQuery {
    startDate?: string
    endDate?: string
    period?: "7d" | "30d" | "3m" | "6m" | "1y"
}

export interface SalesSummary {
    totalSales: string
    todaySales: string
    averageOrderValue: string
    totalOrders: number
    salesGrowth: number
}

export interface PurchaseSummary {
    totalPurchases: string
    todayPurchases: string
    totalPurchaseOrders: number
    pendingPurchases: number
    purchaseGrowth: number
}

export interface StockSummary {
    totalProducts: number
    totalVariants: number
    totalStockQuantity: number
    totalStockValue: string
    lowStockCount: number
    outOfStockCount: number
}

export interface OrderSummary {
    totalOrders: number
    pendingOrders: number
    processingOrders: number
    shippedOrders: number
    deliveredOrders: number
    cancelledOrders: number
}

export interface CustomerSummary {
    totalCustomers: number
    newCustomers: number
    activeCustomers: number
    returningCustomers: number
    customerGrowth: number
}

export interface EmployeeSummary {
    totalEmployees: number
    activeEmployees: number
    newEmployees: number
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

export interface LowStockProduct {
    variantId: string
    sku: string
    productId: string
    productName: string
    productImage?: string | null
    quantity: number
}

export interface RecentUser {
    id: string
    name: string | null
    email: string
    avatar?: string | null
}

export interface RecentActivity {
    id: string
    type: string
    module: string
    action: string
    description: string | null
    entityType: string | null
    entityId: string | null
    userId: string | null
    user: RecentUser | null
    createdAt: string
}

export interface DashboardOverview {
    sales: SalesSummary
    purchases: PurchaseSummary
    stock: StockSummary
    orders: OrderSummary
    customers: CustomerSummary
    employees: EmployeeSummary
    topProducts: TopProduct[]
    topCustomers: TopCustomer[]
    lowStockProducts: LowStockProduct[]
    recentActivities: RecentActivity[]
}