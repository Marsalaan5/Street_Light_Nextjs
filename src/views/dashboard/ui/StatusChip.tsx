'use client'

import Box from '@mui/material/Box'
import { useDashboardTokens } from '@/views/dashboard/ui/tokens'

interface StatusChipProps {
    status: 'Enabled' | 'Disabled'
}

const StatusChip = ({ status }: StatusChipProps) => {
    const t = useDashboardTokens()
    const on = status === 'Enabled'
    const color = on ? t.on : t.signalLoss

    return (
        <Box
            sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 0.6,
                fontSize: '11px',
                fontWeight: 700,
                color,
                background: on ? t.onDim : t.signalLossDim,
                border: `1px solid ${color}40`,
                borderRadius: '20px',
                px: 1.2,
                py: 0.4,
                whiteSpace: 'nowrap',
            }}
        >
            <Box sx={{ width: 6, height: 6, borderRadius: '50%', background: color }} />
            {status}
        </Box>
    )
}

export default StatusChip