
import RolePermissionPage from "@/views/user_mangement/role/RolePermission"

interface PageProps {
    params: { id: string }
}

const Page = ({ params }: PageProps) => <RolePermissionPage roleId={Number(params.id)} />
export default Page