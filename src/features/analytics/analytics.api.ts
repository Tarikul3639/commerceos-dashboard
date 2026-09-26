import { baseApi } from "@/lib/api/base-api"

import type {
  AnalyticsQuery,
  PurchaseSummary,
  RevenueChartData,
  SalesPurchaseChartData,
  TopCustomer,
  TopProduct,
} from "./analytics.types"

export const analyticsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getRevenueChart: builder.query<RevenueChartData[], AnalyticsQuery | void>({
      query: (params) => ({
        url: "/analytics/revenue-chart",
        params: params ?? undefined,
      }),
      providesTags: ["Analytics"],
    }),

    getSalesPurchaseChart: builder.query<
      SalesPurchaseChartData[],
      AnalyticsQuery | void
    >({
      query: (params) => ({
        url: "/analytics/sales-purchase-chart",
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

    getPurchaseSummary: builder.query<PurchaseSummary, AnalyticsQuery | void>({
      query: (params) => ({
        url: "/analytics/purchase-summary",
        params: params ?? undefined,
      }),
      providesTags: ["Analytics"],
    }),
  }),
})

export const {
  useGetRevenueChartQuery,
  useGetSalesPurchaseChartQuery,
  useGetTopProductsQuery,
  useGetTopCustomersQuery,
  useGetPurchaseSummaryQuery,
} = analyticsApi
