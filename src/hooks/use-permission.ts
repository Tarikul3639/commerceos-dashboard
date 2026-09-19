"use client";

import { PermissionName } from "@/config/permissions.config";
import { can } from "@/lib/permissions/can";
import { useAppSelector } from "@/store/hooks";

export function usePermission(permission: PermissionName): boolean {
  const user = useAppSelector((state) => state.auth.user);

  if (!user) {
    return false;
  }

  return can(user.role, user.permissions, permission);
}