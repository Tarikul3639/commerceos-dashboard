import { configureStore } from "@reduxjs/toolkit"

import { baseApi } from "@/lib/api/base-api"

import authReducer from "./slices/auth.slice"
import uiReducer from "./slices/ui.slice"
import notificationReducer from "./slices/notification.slice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    ui: uiReducer,
    notification: notificationReducer,
    // Add the baseApi reducer to the store
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
