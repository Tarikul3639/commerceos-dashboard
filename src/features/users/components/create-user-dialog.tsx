"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2, Plus } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
} from "@/components/ui/dialog"

import { useGetRolesQuery } from "@/features/roles/api/role.api"
import { getErrorMessage } from "@/lib/utils/error"

import { useCreateUserMutation } from "../api/user.api"
import { userSchema, type UserFormValues } from "../schemas/user.schema"

import { UserForm } from "./user-form"

export function CreateUserDialog() {
    const [open, setOpen] = useState(false)

    const [createUser, { isLoading: isCreating }] = useCreateUserMutation()

    const { data: rolesResponse, isLoading: isRolesLoading } = useGetRolesQuery()

    const roles = rolesResponse ?? []

    const form = useForm<UserFormValues>({
        resolver: zodResolver(userSchema),

        defaultValues: {
            name: "",
            email: "",
            phone: "",
            avatar: "",
            publicId: "",
            roleId: "",
        },
    })

    const handleOpenChange = (nextOpen: boolean) => {
        setOpen(nextOpen)

        if (!nextOpen) {
            form.reset()
        }
    }

    const onSubmit = async (values: UserFormValues) => {
        try {
            await createUser({
                ...values,
                phone: values.phone || undefined,
                avatar: values.avatar || undefined,
            }).unwrap()

            toast.success("User created successfully")

            form.reset()
            setOpen(false)
        } catch (error) {
            console.error("Failed to create user:", error)

            toast.error(
                getErrorMessage(error) || "Failed to create user. Please try again."
            )
        }
    }

    const isSubmitting = isCreating || isRolesLoading

    return (
        <Dialog open={open} onOpenChange={handleOpenChange}>
            <DialogTrigger asChild>
                <Button size="sm">
                    <Plus className="h-4 w-4" />
                    Add User
                </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                    <DialogTitle>Create User</DialogTitle>

                    <DialogDescription>Add a new user to the system.</DialogDescription>
                </DialogHeader>

                <form id="create-user-form" onSubmit={form.handleSubmit(onSubmit)}>
                    <UserForm
                        form={form}
                        roles={roles}
                        isRolesLoading={isRolesLoading}
                        isSubmitting={isSubmitting}
                    />
                </form>

                <DialogFooter className="flex-row justify-end">
                    <Button type="submit" form="create-user-form" disabled={isSubmitting}>
                        {isCreating ? (
                            <>
                                <Loader2 className="animate-spin" />
                                Creating...
                            </>
                        ) : (
                            "Create User"
                        )}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
