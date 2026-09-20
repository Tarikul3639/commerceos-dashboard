"use client"

import type { ReactNode } from "react"

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"

interface ConfirmDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void

    title: string
    description?: ReactNode

    confirmLabel?: string
    cancelLabel?: string

    onConfirm: () => void

    isLoading?: boolean
    loadingLabel?: string

    variant?: "default" | "destructive"

    icon?: ReactNode
}

export function ConfirmDialog({
    open,
    onOpenChange,
    title,
    description,
    confirmLabel = "Confirm",
    cancelLabel = "Cancel",
    onConfirm,
    isLoading = false,
    loadingLabel = "Please wait...",
    variant = "default",
    icon,
}: ConfirmDialogProps) {
    return (
        <AlertDialog open={open} onOpenChange={onOpenChange}>
            <AlertDialogContent className="p-5.5 sm:p-6">
                <AlertDialogHeader className="flex flex-col items-start text-left">
                    {icon && (
                        <div className="mb-2 flex size-10 items-center justify-center rounded-full bg-muted">
                            {icon}
                        </div>
                    )}

                    <AlertDialogTitle>{title}</AlertDialogTitle>

                    {description && (
                        <AlertDialogDescription>{description}</AlertDialogDescription>
                    )}
                </AlertDialogHeader>

                <AlertDialogFooter className="mt-3 flex flex-row justify-end">
                    <AlertDialogCancel disabled={isLoading}>
                        {cancelLabel}
                    </AlertDialogCancel>

                    <AlertDialogAction
                        onClick={onConfirm}
                        disabled={isLoading}
                        variant={variant}
                    >
                        {isLoading ? loadingLabel : confirmLabel}
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
