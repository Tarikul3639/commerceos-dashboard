import {
    createApi,
    fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
    reducerPath: 'api',

    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_URL,
        credentials: 'include',
    }),

    tagTypes: [
        'Auth',
        'Dashboard',
        'Product',
        'Customer',
        'Supplier',
        'Purchase',
        'Order',
        'Inventory',
        'Employee',
        'Warehouse',
    ],

    endpoints: () => ({}),
});