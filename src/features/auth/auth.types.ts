import type { PermissionName } from "@/config/permissions.config"
import type { RoleName } from "@/config/roles.config"

export interface CurrentUserResponse {
  id: string
  name: string
  email: string
  phone: string | null
  avatar: string | null
  role: RoleName
  permissions: PermissionName[]
  isVerified: boolean
  lastLoginAt: string | null
}

export interface CurrentUserPayload {
  id: string
  email: string
  role: string
  permissions: string[]
}

export interface UserLoginRequest {
  email: string
  password: string
  remember: boolean
}

export interface UserLoginResponse {
  message: string
}

export interface ChangePasswordRequest {
  currentPassword: string
  newPassword: string
}

export interface ChangePasswordResponse {
  message: string
}

export interface ForgotPasswordRequest {
  email: string
}

export interface ForgotPasswordResponse {
  message: string
}

export interface ResetPasswordRequest {
  token: string
  password: string
}

export interface ResetPasswordResponse {
  message: string
}

export interface VerifyEmailRequest {
  token: string
}

export interface VerifyEmailResponse {
  message: string
}

export interface ResendVerificationEmailRequest {
  email: string
}

export interface ResendVerificationEmailResponse {
  message: string
}
