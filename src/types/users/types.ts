export interface User {
    id: number
    username: string
    email: string
    phone: string
    role: string
    status: 'Enabled' | 'Disabled'
    secureCode?: string
    multiLogin?: string
    logoLeft?: string
    logoCenter?: string
    logoRight?: string
    map?: string
    dashboard?: string
    statePerm?: string
    ulbPerm?: string
}

export type UserFormValues = Omit<User, 'id'>

export const ROLES = ['SuperAdmin', 'Admin', 'Operator', 'Viewer']
export const PERM_OPTIONS = ['Full Access', 'Read Only', 'No Access']

export const defaultUser: UserFormValues = {
    username: '',
    email: '',
    phone: '',
    role: '',
    status: 'Enabled',
    secureCode: '',
    multiLogin: 'No',
    logoLeft: '',
    logoCenter: '',
    logoRight: '',
    map: '',
    dashboard: '',
    statePerm: 'Full Access',
    ulbPerm: 'Full Access',
}