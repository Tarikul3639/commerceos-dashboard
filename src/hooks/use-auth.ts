"use client"

import { useEffect } from "react"

import { useGetCurrentUserQuery } from "@/features/auth/auth.api"
import { setUser } from "@/store/slices/auth.slice"
import { useAppDispatch, useAppSelector } from "@/store/hooks"

export function useAuth() {
    const dispatch = useAppDispatch()

    const user = useAppSelector(
        (state) => state.auth.user,
    )

    const {
        data,
        isLoading,
        isError,
    } = useGetCurrentUserQuery()

    useEffect(() => {
        if (data) {
            dispatch(setUser(data))
        }
    }, [data, dispatch])

    return {
        user,
        isLoading,
        isAuthenticated: !!user,
        isError,
    }
}