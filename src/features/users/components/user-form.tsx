"use client"

import type { UseFormReturn } from "react-hook-form"

import { Input } from "@/components/ui/input"
import {
    Field,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectGroup,
    SelectLabel,
    SelectSeparator,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import type { Role } from "@/features/roles/types/role.types"
import { type UserFormValues } from "../schemas/user.schema"

import { UserAvatarUpload } from "./user-avatar-upload"

interface UserFormProps {
    form: UseFormReturn<UserFormValues>
    roles: Role[]
    isRolesLoading?: boolean
    isSubmitting?: boolean
}

export function UserForm({
    form,
    roles,
    isRolesLoading = false,
    isSubmitting = false,
}: UserFormProps) {
    const avatar = form.watch("avatar")
    const roleId = form.watch("roleId")

    return (
        <FieldGroup>
            {/* Avatar */}
            <UserAvatarUpload
                value={avatar ?? ""}
                onChange={({ url, publicId }) => {
                    form.setValue("avatar", url, {
                        shouldDirty: true,
                        shouldValidate: true,
                    })

                    form.setValue("publicId", publicId, {
                        shouldDirty: true,
                        shouldValidate: true,
                    })
                }}
                disabled={isSubmitting}
            />

            {/* Name + Role */}
            <div className="flex flex-col gap-4 sm:flex-row">
                {/* Name */}
                <Field>
                    <FieldLabel htmlFor="name">Name</FieldLabel>

                    <Input
                        id="name"
                        placeholder="John Doe"
                        disabled={isSubmitting}
                        {...form.register("name")}
                    />

                    {form.formState.errors.name && (
                        <FieldError>{form.formState.errors.name.message}</FieldError>
                    )}
                </Field>

                {/* Role */}
                <Field className="w-full sm:w-38">
                    <FieldLabel htmlFor="roleId">Role</FieldLabel>

                    <Select
                        value={roleId ?? ""}
                        onValueChange={(value) =>
                            form.setValue("roleId", value, {
                                shouldValidate: true,
                                shouldDirty: true,
                            })
                        }
                        disabled={isRolesLoading || isSubmitting}
                    >
                        <SelectTrigger id="roleId" className="capitalize">
                            <SelectValue
                                placeholder={
                                    isRolesLoading ? "Loading roles..." : "Select a role"
                                }
                            />
                        </SelectTrigger>

                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Roles</SelectLabel>

                                <SelectSeparator />

                                {roles.map((role) => (
                                    <SelectItem
                                        key={role.id}
                                        value={role.id}
                                        className="capitalize"
                                    >
                                        {role.name.toLowerCase()}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>

                    {form.formState.errors.roleId && (
                        <FieldError>{form.formState.errors.roleId.message}</FieldError>
                    )}
                </Field>
            </div>

            {/* Email */}
            <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>

                <Input
                    id="email"
                    type="email"
                    placeholder="user@example.com"
                    disabled={isSubmitting}
                    {...form.register("email")}
                />

                {form.formState.errors.email && (
                    <FieldError>{form.formState.errors.email.message}</FieldError>
                )}
            </Field>

            {/* Phone */}
            <Field>
                <FieldLabel htmlFor="phone">Phone</FieldLabel>

                <Input
                    id="phone"
                    placeholder="+8801712345678"
                    disabled={isSubmitting}
                    {...form.register("phone")}
                />

                {form.formState.errors.phone && (
                    <FieldError>{form.formState.errors.phone.message}</FieldError>
                )}
            </Field>
        </FieldGroup>
    )
}
