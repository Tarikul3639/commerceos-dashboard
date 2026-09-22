"use client"

import Link from "next/link"
import { ArrowLeft, Home, ShieldX } from "lucide-react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"

export function UnauthorizedContent() {
  const router = useRouter()

  return (
    <main className="flex min-h-svh items-center justify-center bg-background px-6 py-12">
      <div className="w-full max-w-md text-center">
        <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-2xl border border-destructive/20 bg-destructive/10">
          <ShieldX className="size-8 text-destructive/70" strokeWidth={1.75} />
        </div>

        <p className="mb-2 text-sm font-medium tracking-wider text-muted-foreground">
          ERROR 403
        </p>

        <h1 className="text-3xl font-semibold tracking-tight">Access denied</h1>

        <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-muted-foreground">
          You don&apos;t have permission to access this page. Please contact
          your administrator if you believe you should have access.
        </p>

        <div className="mt-8 flex justify-center gap-3">
          <Button asChild>
            <Link href="/dashboard">
              <Home className="size-4" />
              Go to dashboard
            </Link>
          </Button>

          <Button type="button" variant="outline" onClick={() => router.back()}>
            <ArrowLeft className="size-4" />
            Go back
          </Button>
        </div>
      </div>
    </main>
  )
}
