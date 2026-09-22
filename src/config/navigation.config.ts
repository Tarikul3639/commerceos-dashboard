import type { LucideIcon } from "lucide-react"
import {
  BarChart3,
  Boxes,
  ClipboardList,
  LayoutDashboard,
  Package,
  Settings,
  ShoppingCart,
  Store,
  Truck,
  Users,
  Warehouse,
} from "lucide-react"

import { RoleName } from "@/config/roles.config"

export interface NavigationItem {
  title: string
  href: string
  icon: LucideIcon
  roles?: RoleName[]
}

export interface NavigationGroup {
  title: string
  items: NavigationItem[]
}

const ALL_ROLES: RoleName[] = [
  RoleName.ADMIN,
  RoleName.EMPLOYEE,
  RoleName.MANAGER,
  RoleName.SUPER_ADMIN,
]

export const navigation: NavigationGroup[] = [
  {
    title: "Overview",
    items: [
      {
        title: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
        roles: ALL_ROLES,
      },
      {
        title: "Analytics",
        href: "/dashboard/analytics",
        icon: BarChart3,
        roles: ALL_ROLES,
      },
    ],
  },

  {
    title: "Management",
    items: [
      {
        title: "Users",
        href: "/dashboard/users",
        icon: Users,
        roles: [RoleName.SUPER_ADMIN],
      },
      {
        title: "Customers",
        href: "/dashboard/customers",
        icon: Users,
        roles: [RoleName.SUPER_ADMIN, RoleName.ADMIN, RoleName.MANAGER],
      },
      {
        title: "Products",
        href: "/dashboard/products",
        icon: Package,
        roles: ALL_ROLES,
      },
      {
        title: "Categories",
        href: "/dashboard/categories",
        icon: Boxes,
        roles: ALL_ROLES,
      },
      {
        title: "Orders",
        href: "/dashboard/orders",
        icon: ShoppingCart,
        roles: ALL_ROLES,
      },
    ],
  },

  {
    title: "Inventory",
    items: [
      {
        title: "Warehouses",
        href: "/dashboard/warehouses",
        icon: Warehouse,
        roles: ALL_ROLES,
      },
      {
        title: "Stock Transfers",
        href: "/dashboard/stock-transfers",
        icon: Truck,
        roles: ALL_ROLES,
      },
      {
        title: "Suppliers",
        href: "/dashboard/suppliers",
        icon: Store,
        roles: ALL_ROLES,
      },
    ],
  },

  {
    title: "System",
    items: [
      {
        title: "Activity Logs",
        href: "/dashboard/activity-logs",
        icon: ClipboardList,
        roles: [RoleName.SUPER_ADMIN],
      },
      {
        title: "Settings",
        href: "/dashboard/settings",
        icon: Settings,
        roles: [RoleName.SUPER_ADMIN],
      },
    ],
  },
]
