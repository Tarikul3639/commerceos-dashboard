import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface SidebarUserAvatarProps {
    name?: string
    avatar?: string | null
    initials?: string
}

export function SidebarUserAvatar({
    name,
    avatar,
    initials,
}: SidebarUserAvatarProps) {
    return (
        <Avatar className="size-8 rounded-lg">
            <AvatarImage
                src={avatar ?? "/images/placeholders/avatar-blank.png"}
                alt={name}
            />

            <AvatarFallback className="rounded-lg bg-primary text-primary-foreground">
                {initials}
            </AvatarFallback>
        </Avatar>
    )
}
