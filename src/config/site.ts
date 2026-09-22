import { env } from "@/config/env"

export const siteConfig = {
  name: env.appName,
  description:
    "CommerceOS business management platform for products, orders, inventory, customers, suppliers, and warehouses.",
  url: env.apiUrl,
} as const
