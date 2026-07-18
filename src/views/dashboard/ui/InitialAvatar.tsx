'use client'

import Box from '@mui/material/Box'
import { useDashboardTokens } from '@/views/dashboard/ui/tokens'

const PALETTE_KEYS = ['energy', 'connected', 'on', 'consumption', 'signalLoss'] as const

const hashString = (str: string) => {
    let hash = 0
    for (let i = 0; i < str.length; i++) hash = str.charCodeAt(i) + ((hash << 5) - hash)
    return Math.abs(hash)
}

interface InitialsAvatarProps {
    name: string
    size?: number
}

const InitialsAvatar = ({ name, size = 34 }: InitialsAvatarProps) => {
    const t = useDashboardTokens()
    const key = PALETTE_KEYS[hashString(name) % PALETTE_KEYS.length]
    const color = t[key] as string
    const initials = name.slice(0, 2).toUpperCase()

    return (
        <Box
            sx={{
                width: size,
                height: size,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: size * 0.36,
                fontWeight: 700,
                color,
                background: `${color}22`,
                border: `1px solid ${color}40`,
                flexShrink: 0,
            }}
        >
            {initials}
        </Box>
    )
}

export default InitialsAvatar