export interface PermissionGroup {
    label: string
    checks: string[]
}

export interface PermissionSection {
    section: string
    groups: PermissionGroup[]
}

export interface RolePermissions {
    [key: string]: boolean
}

export interface Role {
    id: number
    title: string
    status: 'Enabled' | 'Disabled'
    permissions: RolePermissions
}