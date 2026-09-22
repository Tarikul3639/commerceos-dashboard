import { PermissionName } from "@/config/permissions.config"
import { RoleName } from "@/config/roles.config"

export function can(
  role: RoleName,
  permissions: PermissionName[],
  permission: PermissionName
): boolean {
  if (role === RoleName.SUPER_ADMIN) {
    return true
  }

  return permissions.includes(permission)
}
