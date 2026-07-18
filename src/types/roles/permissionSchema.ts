import type { PermissionGroup, PermissionSection, RolePermissions } from './types'

export const PERMISSION_SCHEMA: PermissionSection[] = [
    {
        section: 'Pages',
        groups: [
            {
                label: 'Page Devices',
                checks: [
                    'Enabled', 'Replace CCMS/DCU', 'View CCMS/DCU', 'Add CCMS/DCU', 'Edit CCMS/DCU',
                    'Delete CCMS/DCU', 'Display Light Fault List', 'Maintenance', 'Controls', 'Export',
                ],
            },
            { label: 'Page Control', checks: ['Enabled'] },
            { label: 'Page Complaints', checks: ['Enabled', 'View', 'Add', 'Edit', 'Change Status', 'Delete'] },
        ],
    },
    {
        section: 'Reports',
        groups: [
            { label: 'ULB Reports', checks: ['Enabled', 'View', 'Export'] },
            { label: 'CCMS/DCU Reports', checks: ['Enabled', 'View', 'Export'] },
        ],
    },
    {
        section: 'Settings',
        groups: [
            { label: 'Manage User', checks: ['Enabled', 'View', 'Add', 'Edit', 'Delete'] },
            { label: 'Manage Roles', checks: ['Enabled', 'View', 'Add', 'Edit', 'Delete'] },
            { label: 'Manage ULBs', checks: ['Enabled', 'View', 'Add', 'Edit', 'Delete', 'Schedule'] },
            { label: 'Manage City', checks: ['Enabled', 'Add', 'Edit', 'Delete'] },
            { label: 'Manage Zones', checks: ['Enabled', 'View', 'Add', 'Edit', 'Delete'] },
            { label: 'Manage Wards', checks: ['Enabled', 'Add', 'Edit', 'Delete'] },
            { label: 'Master Devices', checks: ['Enabled', 'View', 'SMS', 'Replace', 'Edit', 'Delete'] },
            { label: 'Corrections', checks: ['Enabled'] },
            { label: 'Check Devices', checks: ['Enabled', 'View', 'SMS', 'Replace', 'Edit', 'Delete'] },
            { label: 'Tariff Rate', checks: ['Enabled', 'View', 'Add', 'Edit'] },
            { label: 'Schedule', checks: ['Enabled', 'View', 'Add', 'Edit'] },
            { label: 'Unregistered Devices', checks: ['Enabled', 'View', 'Add'] },
            { label: 'Broadcast Permission', checks: ['Enabled', 'Light ON', 'Light OFF', 'RTC', 'SCHEDULE'] },
            { label: 'Change Password', checks: ['Enabled'] },
        ],
    },
]

export const permKey = (group: string, check: string) => `${group}__${check}`

export const buildEmptyPermissions = (): RolePermissions => {
    const perms: RolePermissions = {}
    PERMISSION_SCHEMA.forEach(section => {
        section.groups.forEach(group => {
            group.checks.forEach(check => {
                perms[permKey(group.label, check)] = false
            })
        })
    })
    return perms
}

export const summarisePermissions = (perms: RolePermissions): string => {
    const enabled: string[] = []
    PERMISSION_SCHEMA.forEach(section => {
        const sectionEnabled = section.groups.some(g => perms[permKey(g.label, 'Enabled')])
        if (sectionEnabled) enabled.push(section.section)
    })
    return enabled.length ? enabled.join(', ') : 'No permissions set'
}

export const isGroupEnabled = (group: PermissionGroup, perms: RolePermissions) =>
    perms[permKey(group.label, 'Enabled')] === true

export const countEnabled = (perms: RolePermissions) => Object.values(perms).filter(Boolean).length