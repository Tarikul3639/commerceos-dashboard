import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { CurrentUserResponse } from "@/features/auth/auth.types"

interface AuthState {
    user: CurrentUserResponse | null
    isAuthenticated: boolean
}

const initialState: AuthState = {
    user: null,
    isAuthenticated: false,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<CurrentUserResponse>) => {
            state.user = action.payload
            state.isAuthenticated = true
        },

        clearUser: (state) => {
            state.user = null
            state.isAuthenticated = false
        },

        logout: (state) => {
            state.user = null
            state.isAuthenticated = false
        },
    },
})

export const { setUser, clearUser, logout } = authSlice.actions
export default authSlice.reducer
