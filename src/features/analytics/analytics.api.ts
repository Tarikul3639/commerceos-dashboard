import { baseApi } from "@/lib/api/base-api"

import type {
    AnalyticsOverview,
    AnalyticsQuery,
    PurchaseChartResponse,
    RevenueChartResponse,
    SalesChartResponse,
    TopCustomer,
    TopProduct,
} from "./analytics.types"

export const analyticsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAnalyticsOverview: builder.query<
            AnalyticsOverview,
            AnalyticsQuery | void
        >({
            query: (params) => ({
                url: "/analytics",
                params: params ?? undefined,
            }),
            providesTags: ["Analytics"],
        }),

        getRevenueChart: builder.query<RevenueChartResponse, AnalyticsQuery | void>(
            {
                query: (params) => ({
                    url: "/analytics/revenue-chart",
                    params: params ?? undefined,
                }),
                providesTags: ["Analytics"],
            }
        ),

        getSalesChart: builder.query<SalesChartResponse, AnalyticsQuery | void>({
            query: (params) => ({
                url: "/analytics/sales-chart",
                params: params ?? undefined,
            }),
            providesTags: ["Analytics"],
        }),

        getPurchaseChart: builder.query<
            PurchaseChartResponse,
            AnalyticsQuery | void
        >({
            query: (params) => ({
                url: "/analytics/purchase-chart",
                params: params ?? undefined,
            }),
            providesTags: ["Analytics"],
        }),

        getTopProducts: builder.query<TopProduct[], AnalyticsQuery | void>({
            query: (params) => ({
                url: "/analytics/top-products",
                params: params ?? undefined,
            }),
            providesTags: ["Analytics"],
        }),

        getTopCustomers: builder.query<TopCustomer[], AnalyticsQuery | void>({
            query: (params) => ({
                url: "/analytics/top-customers",
                params: params ?? undefined,
            }),
            providesTags: ["Analytics"],
        }),
    }),
})

export const {
    useGetAnalyticsOverviewQuery,
    useGetRevenueChartQuery,
    useGetSalesChartQuery,
    useGetPurchaseChartQuery,
    useGetTopProductsQuery,
    useGetTopCustomersQuery,
} = analyticsApi
