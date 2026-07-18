
import { RolesProvider } from "@/views/user_mangement/role/RoleContext"

export default function RolesLayout({ children }: { children: React.ReactNode }) {
    return <RolesProvider>{children}</RolesProvider>
}