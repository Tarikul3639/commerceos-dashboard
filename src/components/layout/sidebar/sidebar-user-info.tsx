interface SidebarUserInfoProps {
    name?: string
    email?: string
}

export function SidebarUserInfo({ name, email }: SidebarUserInfoProps) {
    return (
        <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">{name}</span>

            <span className="truncate text-xs text-muted-foreground">{email}</span>
        </div>
    )
}
