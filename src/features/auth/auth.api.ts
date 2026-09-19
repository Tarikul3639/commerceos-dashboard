import { baseApi } from "@/lib/api/base-api"

import type {
    ChangePasswordRequest,
    ChangePasswordResponse,
    CurrentUserResponse,
    ForgotPasswordRequest,
    ForgotPasswordResponse,
    ResendVerificationEmailRequest,
    ResendVerificationEmailResponse,
    ResetPasswordRequest,
    ResetPasswordResponse,
    UserLoginRequest,
    UserLoginResponse,
    VerifyEmailRequest,
    VerifyEmailResponse,
} from "./auth.types"

export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<UserLoginResponse, UserLoginRequest>({
            query: (body) => ({
                url: "/auth/user/login",
                method: "POST",
                body,
            }),
        }),

        getCurrentUser: builder.query<CurrentUserResponse, void>({
            query: () => ({
                url: "/auth/user/me",
                method: "GET",
            }),
        }),

        logout: builder.mutation<void, void>({
            query: () => ({
                url: "/auth/user/logout",
                method: "POST",
            }),
        }),

        logoutAll: builder.mutation<void, void>({
            query: () => ({
                url: "/auth/user/logout-all",
                method: "POST",
            }),
        }),

        changePassword: builder.mutation<
            ChangePasswordResponse,
            ChangePasswordRequest
        >({
            query: (body) => ({
                url: "/auth/user/change-password",
                method: "POST",
                body,
            }),
        }),

        forgotPassword: builder.mutation<
            ForgotPasswordResponse,
            ForgotPasswordRequest
        >({
            query: (body) => ({
                url: "/auth/user/forgot-password",
                method: "POST",
                body,
            }),
        }),

        resetPassword: builder.mutation<
            ResetPasswordResponse,
            ResetPasswordRequest
        >({
            query: (body) => ({
                url: "/auth/user/reset-password",
                method: "POST",
                body,
            }),
        }),

        verifyEmail: builder.mutation<
            VerifyEmailResponse,
            VerifyEmailRequest
        >({
            query: (body) => ({
                url: "/auth/user/verify-email",
                method: "POST",
                body,
            }),
        }),

        resendVerificationEmail: builder.mutation<
            ResendVerificationEmailResponse,
            ResendVerificationEmailRequest
        >({
            query: (body) => ({
                url: "/auth/user/resend-verification-email",
                method: "POST",
                body,
            }),
        }),
    }),
})

export const {
    useLoginMutation,
    useGetCurrentUserQuery,
    useLazyGetCurrentUserQuery,
    useLogoutMutation,
    useLogoutAllMutation,
    useChangePasswordMutation,
    useForgotPasswordMutation,
    useResetPasswordMutation,
    useVerifyEmailMutation,
    useResendVerificationEmailMutation,
} = authApi