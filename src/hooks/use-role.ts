"use client"

import { RoleName } from "@/config/roles.config"
import { useAppSelector } from "@/store/hooks"

export function useRole() {
    const user = useAppSelector((state) => state.auth.user)
    const role = user?.role

    const hasRole = (...roles: RoleName[]) => {
        if (!role) {
            return false
        }

        return roles.includes(role)
    }

    return {
        role,

        isSuperAdmin: role === RoleName.SUPER_ADMIN,
        isAdmin: role === RoleName.ADMIN,
        isManager: role === RoleName.MANAGER,
        isEmployee: role === RoleName.EMPLOYEE,

        hasRole,

        isAuthenticated: !!user,
    }
}
