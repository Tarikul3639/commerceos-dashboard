"use client"

import { useAppSelector } from "@/store/hooks"

export function useRole() {
  const user = useAppSelector((state) => state.auth.user)

  const role = user?.role

  const hasRole = (requiredRole: string) => {
    return role === requiredRole
  }

  const hasAnyRole = (roles: string[]) => {
    return roles.includes(role ?? "")
  }

  return {
    role,
    hasRole,
    hasAnyRole,
  }
}
