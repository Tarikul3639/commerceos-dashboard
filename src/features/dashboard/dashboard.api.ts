import { baseApi } from "@/lib/api/base-api"

import type {
    CustomerSummary,
    DashboardOverview,
    EmployeeSummary,
    LowStockProduct,
    OrderSummary,
    PurchaseSummary,
    SalesSummary,
    StockSummary,
    TopCustomer,
    TopProduct,
    RecentActivity,
    DashboardQuery,
} from "./dashboard.types"

export const dashboardApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getDashboardOverview: builder.query<
            DashboardOverview,
            DashboardQuery | void
        >({
            query: (params) => ({
                url: "/dashboard",
                params: params ?? undefined,
            }),
            providesTags: ["Dashboard"],
        }),

        getSalesSummary: builder.query<SalesSummary, DashboardQuery | void>({
            query: (params) => ({
                url: "/dashboard/sales-summary",
                params: params ?? undefined,
            }),
            providesTags: ["Dashboard"],
        }),

        getPurchaseSummary: builder.query<PurchaseSummary, DashboardQuery | void>({
            query: (params) => ({
                url: "/dashboard/purchase-summary",
                params: params ?? undefined,
            }),
            providesTags: ["Dashboard"],
        }),

        getStockSummary: builder.query<StockSummary, DashboardQuery | void>({
            query: (params) => ({
                url: "/dashboard/stock-summary",
                params: params ?? undefined,
            }),
            providesTags: ["Dashboard"],
        }),

        getOrderSummary: builder.query<OrderSummary, DashboardQuery | void>({
            query: (params) => ({
                url: "/dashboard/order-summary",
                params: params ?? undefined,
            }),
            providesTags: ["Dashboard"],
        }),

        getCustomerSummary: builder.query<CustomerSummary, DashboardQuery | void>({
            query: (params) => ({
                url: "/dashboard/customer-summary",
                params: params ?? undefined,
            }),
            providesTags: ["Dashboard"],
        }),

        getEmployeeSummary: builder.query<EmployeeSummary, DashboardQuery | void>({
            query: (params) => ({
                url: "/dashboard/employee-summary",
                params: params ?? undefined,
            }),
            providesTags: ["Dashboard"],
        }),

        getTopProducts: builder.query<TopProduct[], DashboardQuery | void>({
            query: (params) => ({
                url: "/dashboard/top-products",
                params: params ?? undefined,
            }),
            providesTags: ["Dashboard"],
        }),

        getTopCustomers: builder.query<TopCustomer[], DashboardQuery | void>({
            query: (params) => ({
                url: "/dashboard/top-customers",
                params: params ?? undefined,
            }),
            providesTags: ["Dashboard"],
        }),

        getLowStockProducts: builder.query<
            LowStockProduct[],
            DashboardQuery | void
        >({
            query: (params) => ({
                url: "/dashboard/low-stock-products",
                params: params ?? undefined,
            }),
            providesTags: ["Dashboard"],
        }),

        getRecentActivities: builder.query<RecentActivity[], DashboardQuery | void>(
            {
                query: (params) => ({
                    url: "/dashboard/recent-activities",
                    params: params ?? undefined,
                }),
                providesTags: ["Dashboard"],
            }
        ),
    }),
})

export const {
    useGetDashboardOverviewQuery,
    useGetSalesSummaryQuery,
    useGetPurchaseSummaryQuery,
    useGetStockSummaryQuery,
    useGetOrderSummaryQuery,
    useGetCustomerSummaryQuery,
    useGetEmployeeSummaryQuery,
    useGetTopProductsQuery,
    useGetTopCustomersQuery,
    useGetLowStockProductsQuery,
    useGetRecentActivitiesQuery,
} = dashboardApi
