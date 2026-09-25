import { baseApi } from "@/lib/api/base-api"

import type {
    AssignPermissionsPayload,
    CreateRolePayload,
    Role,
    UpdateRolePayload,
} from "../types/role.types"

export const roleApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        /**
         * Create role
         */
        createRole: builder.mutation<Role, CreateRolePayload>({
            query: (body) => ({
                url: "/roles",
                method: "POST",
                body,
            }),
            invalidatesTags: ["Role"],
        }),

        /**
         * Get all roles
         */
        getRoles: builder.query<Role[], void>({
            query: () => ({
                url: "/roles",
            }),
            providesTags: ["Role"],
        }),

        /**
         * Get role by ID
         */
        getRole: builder.query<Role, string>({
            query: (roleId) => ({
                url: `/roles/${roleId}`,
            }),
            providesTags: ["Role"],
        }),

        /**
         * Update role
         */
        updateRole: builder.mutation<
            Role,
            {
                roleId: string
                data: UpdateRolePayload
            }
        >({
            query: ({ roleId, data }) => ({
                url: `/roles/${roleId}`,
                method: "PATCH",
                body: data,
            }),
            invalidatesTags: ["Role"],
        }),

        /**
         * Replace role permissions
         */
        assignRolePermissions: builder.mutation<
            void,
            {
                roleId: string
                data: AssignPermissionsPayload
            }
        >({
            query: ({ roleId, data }) => ({
                url: `/roles/${roleId}/permissions`,
                method: "PATCH",
                body: data,
            }),
            invalidatesTags: ["Role"],
        }),

        /**
         * Delete role
         */
        deleteRole: builder.mutation<void, string>({
            query: (roleId) => ({
                url: `/roles/${roleId}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Role"],
        }),
    }),
})

export const {
    useCreateRoleMutation,
    useGetRolesQuery,
    useGetRoleQuery,
    useUpdateRoleMutation,
    useAssignRolePermissionsMutation,
    useDeleteRoleMutation,
} = roleApi
