'use client'

import { createContext, useContext, useMemo, useState } from 'react'
import type { ReactNode } from 'react'

import { buildEmptyPermissions } from '@/types/roles/permissionSchema'

import { Role, RolePermissions } from '@/types/roles/types'

const buildAdminPermissions = (): RolePermissions => {
    const perms = buildEmptyPermissions()
    Object.keys(perms).forEach(k => (perms[k] = true))
    return perms
}

const buildOperatorPermissions = (): RolePermissions => {
    const perms = buildEmptyPermissions()
    const enabled = [
        'Page Devices__Enabled', 'Page Devices__View CCMS/DCU', 'Page Devices__Controls',
        'Page Control__Enabled', 'ULB Reports__Enabled', 'ULB Reports__View', 'ULB Reports__Export',
        'CCMS/DCU Reports__Enabled', 'CCMS/DCU Reports__View',
        'Master Devices__Enabled', 'Master Devices__View', 'Master Devices__SMS',
    ]
    enabled.forEach(k => (perms[k] = true))
    return perms
}

const SEED_ROLES: Role[] = [
    { id: 1, title: 'Admin', status: 'Enabled', permissions: buildAdminPermissions() },
    { id: 2, title: 'Operator', status: 'Enabled', permissions: buildOperatorPermissions() },
    { id: 3, title: 'Viewer', status: 'Disabled', permissions: buildEmptyPermissions() },
]

interface RolesContextType {
    roles: Role[]
    getRole: (id: number) => Role | undefined
    addRole: (values: Omit<Role, 'id'>) => Role
    updateRole: (id: number, values: Omit<Role, 'id'>) => void
    deleteRole: (id: number) => void
}

const RolesContext = createContext<RolesContextType | undefined>(undefined)

export const RolesProvider = ({ children }: { children: ReactNode }) => {
    const [roles, setRoles] = useState<Role[]>(SEED_ROLES)

    const value = useMemo<RolesContextType>(
        () => ({
            roles,
            getRole: id => roles.find(r => r.id === id),
            addRole: values => {
                const role = { id: Date.now(), ...values }
                setRoles(prev => [...prev, role])
                return role
            },
            updateRole: (id, values) => setRoles(prev => prev.map(r => (r.id === id ? { id, ...values } : r))),
            deleteRole: id => setRoles(prev => prev.filter(r => r.id !== id)),
        }),
        [roles],
    )

    return <RolesContext.Provider value={value}>{children}</RolesContext.Provider>
}

export const useRoles = () => {
    const ctx = useContext(RolesContext)
    if (!ctx) throw new Error('useRoles must be used within RolesProvider')
    return ctx
}