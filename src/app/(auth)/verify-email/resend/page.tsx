"use client"

import Link from "next/link"
import { siteConfig } from "@/config/site"
import { useState } from "react"
import { ArrowLeft, CheckCircle2, Loader2, Mail } from "lucide-react"

import { Logo } from "@/components/layout/logo"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { useResendVerificationEmailMutation } from "@/features/auth/auth.api"
import { getErrorMessage } from "@/lib/utils/error"

export default function ResendVerificationPage() {
    const [email, setEmail] = useState("")

    const [resendVerificationEmail, { isLoading, isError, error, isSuccess }] =
        useResendVerificationEmailMutation()

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (!email.trim()) {
            return
        }

        try {
            await resendVerificationEmail({
                email: email.trim(),
            }).unwrap()
        } catch {
            console.error("Failed to resend verification email", error)
        }
    }

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
                            Didn&apos;t receive your verification email? Enter your email
                            address and we&apos;ll send you a new verification link.
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
                                {isSuccess ? (
                                    <CheckCircle2 className="size-7 text-primary" />
                                ) : (
                                    <Mail className="size-7 text-primary" />
                                )}
                            </div>

                            {isSuccess ? (
                                <>
                                    <h2 className="text-3xl font-bold tracking-tight">
                                        Check your email
                                    </h2>

                                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                                        We&apos;ve sent a new verification link to{" "}
                                        <span className="font-medium">{email}</span>. Please check
                                        your inbox and follow the instructions to verify your
                                        email address.
                                    </p>
                                </>
                            ) : (
                                <>
                                    <h2 className="text-3xl font-bold tracking-tight">
                                        Resend verification email
                                    </h2>

                                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                                        Enter your email address and we&apos;ll send you a new
                                        verification link.
                                    </p>
                                </>
                            )}
                        </div>

                        {!isSuccess && (
                            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="email" className="text-sm font-medium">
                                        Email address
                                    </label>

                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="you@example.com"
                                        value={email}
                                        onChange={(event) => setEmail(event.target.value)}
                                        autoComplete="email"
                                        required
                                    />
                                </div>

                                {isError && (
                                    <div
                                        role="alert"
                                        className="rounded-md border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive"
                                    >
                                        {getErrorMessage(error)}
                                    </div>
                                )}

                                <Button
                                    type="submit"
                                    className="w-full"
                                    disabled={isLoading || !email.trim()}
                                >
                                    {isLoading ? (
                                        <>
                                            <Loader2 className="size-4 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        "Send verification email"
                                    )}
                                </Button>
                            </form>
                        )}

                        {isSuccess && (
                            <Button asChild variant="outline" className="mt-8 w-full">
                                <Link href="/login">Continue to sign in</Link>
                            </Button>
                        )}

                        <div className="my-7 flex items-center gap-4">
                            <Separator className="flex-1" />

                            <span className="text-xs tracking-wider text-muted-foreground uppercase">
                                Account security
                            </span>

                            <Separator className="flex-1" />
                        </div>

                        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                            <span>
                                Already verified?{" "}
                                <Link
                                    href="/login"
                                    className="font-medium text-primary hover:underline"
                                >
                                    Sign in
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
