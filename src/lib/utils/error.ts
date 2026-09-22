export interface ApiErrorResponse {
  statusCode?: number
  message?: string | string[]
  error?: string
}

export function getErrorMessage(error: unknown): string {
  if (!error) {
    return "Something went wrong."
  }

  if (typeof error === "string") {
    return error
  }

  if (error instanceof Error) {
    return error.message
  }

  if (typeof error === "object" && error !== null) {
    const value = error as {
      data?: ApiErrorResponse
      message?: string | string[]
    }

    const data = value.data

    if (data?.message) {
      return Array.isArray(data.message)
        ? data.message.join(", ")
        : data.message
    }

    if (value.message) {
      return Array.isArray(value.message)
        ? value.message.join(", ")
        : value.message
    }
  }

  return "Something went wrong."
}
