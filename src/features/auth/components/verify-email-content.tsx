"use client"

import Link from "next/link"
import { siteConfig } from "@/config/site"
import { useEffect } from "react"
import { ArrowLeft, CheckCircle2, Loader2, Mail, XCircle } from "lucide-react"
import { useSearchParams, useRouter } from "next/navigation"

import { Logo } from "@/components/layout/logo"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

import { useVerifyEmailMutation } from "@/features/auth/auth.api"
import { getErrorMessage } from "@/lib/utils/error"

export function VerifyEmailContent() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const [verifyEmail, { isLoading, isError, error, isSuccess }] =
    useVerifyEmailMutation()

  useEffect(() => {
    const token = searchParams.get("token")

    if (!token) {
      return
    }

    verifyEmail({ token })
      .unwrap()
      .catch(() => {})
  }, [searchParams, verifyEmail])

  const hasToken = Boolean(searchParams.get("token"))

  return (
    <main className="min-h-svh bg-background">
      <div className="grid min-h-svh lg:grid-cols-2">
        <div className="relative hidden overflow-hidden bg-primary lg:flex lg:flex-col lg:justify-between">
          <div className="absolute inset-0 bg-linear-to-br from-primary via-primary to-primary/80" />

          <div className="relative z-10 p-10">
            <Logo inverted />
          </div>

          <div className="relative z-10 max-w-xl p-10 pb-16">
            <p className="mb-4 text-sm font-medium tracking-widest text-primary-foreground/70 uppercase">
              Email Verification
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-primary-foreground xl:text-5xl">
              Verify your email address.
            </h1>

            <p className="mt-5 max-w-lg text-base leading-7 text-primary-foreground/75">
              Confirm your email address to activate your account and securely
              access your {siteConfig.name} dashboard.
            </p>
          </div>

          <div className="relative z-10 p-10 text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </div>
        </div>

        <div className="flex min-h-svh items-center justify-center px-6 py-12">
          <div className="w-full max-w-md">
            <div className="mb-8 lg:hidden">
              <Logo />
            </div>

            <div className="text-center">
              <div className="mx-auto mb-6 flex size-14 items-center justify-center rounded-full bg-primary/10">
                {isLoading && (
                  <Loader2 className="size-7 animate-spin text-primary" />
                )}

                {isSuccess && <CheckCircle2 className="size-7 text-primary" />}

                {isError && <XCircle className="size-7 text-destructive" />}

                {!hasToken && !isLoading && !isSuccess && !isError && (
                  <XCircle className="size-7 text-destructive" />
                )}
              </div>

              {isLoading && (
                <>
                  <h2 className="text-3xl font-bold tracking-tight">
                    Verifying your email
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    Please wait while we verify your email address.
                  </p>
                </>
              )}

              {isSuccess && (
                <>
                  <h2 className="text-3xl font-bold tracking-tight">
                    Email verified
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    Your email address has been successfully verified.
                  </p>

                  <Button
                    type="button"
                    className="mt-8 w-full"
                    onClick={() => router.push("/login")}
                  >
                    Continue to sign in
                  </Button>
                </>
              )}

              {isError && (
                <>
                  <h2 className="text-3xl font-bold tracking-tight">
                    Verification failed
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {getErrorMessage(error)}
                  </p>

                  <div className="mt-8 space-y-3">
                    <Button asChild className="w-full">
                      <Link href="/verify-email/resend">
                        Resend verification email
                      </Link>
                    </Button>

                    <Button asChild variant="outline" className="w-full">
                      <Link href="/login">Back to sign in</Link>
                    </Button>
                  </div>
                </>
              )}

              {!hasToken && !isLoading && !isSuccess && !isError && (
                <>
                  <h2 className="text-3xl font-bold tracking-tight">
                    Invalid verification link
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    The verification token is missing. Please request a new
                    verification email.
                  </p>

                  <div className="mt-8 space-y-3">
                    <Button asChild className="w-full">
                      <Link href="/verify-email/resend">
                        Resend verification email
                      </Link>
                    </Button>

                    <Button asChild variant="outline" className="w-full">
                      <Link href="/login">Back to sign in</Link>
                    </Button>
                  </div>
                </>
              )}
            </div>

            <div className="my-7 flex items-center gap-4">
              <Separator className="flex-1" />

              <span className="text-xs tracking-wider text-muted-foreground uppercase">
                Account security
              </span>

              <Separator className="flex-1" />
            </div>

            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Mail className="size-4" />

              <span>
                Having trouble?{" "}
                <Link
                  href="/verify-email/resend"
                  className="font-medium text-primary hover:underline"
                >
                  Resend verification email
                </Link>
              </span>
            </div>

            <div className="mt-6 text-center">
              <Link
                href="/login"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                <ArrowLeft className="size-4" />
                Back to sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
