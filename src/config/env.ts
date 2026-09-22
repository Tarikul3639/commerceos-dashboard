import { z } from "zod"

const envSchema = z.object({
  NEXT_PUBLIC_APP_NAME: z.string().min(1),
  NEXT_PUBLIC_API_URL: z.url(),
})

const parsedEnv = envSchema.safeParse({
  NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
})

if (!parsedEnv.success) {
  console.error(
    "Invalid environment variables:",
    parsedEnv.error.flatten().fieldErrors
  )
  throw new Error("Invalid environment variables")
}

export const env = {
  appName: parsedEnv.data.NEXT_PUBLIC_APP_NAME,
  apiUrl: parsedEnv.data.NEXT_PUBLIC_API_URL,
  nodeEnv: process.env.NODE_ENV,
  isDevelopment: process.env.NODE_ENV === "development",
  isProduction: process.env.NODE_ENV === "production",
} as const
