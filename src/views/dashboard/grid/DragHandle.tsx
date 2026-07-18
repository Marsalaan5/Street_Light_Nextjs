'use client'

import Box from '@mui/material/Box'
import DragIndicatorIcon from '@mui/icons-material/DragIndicator'
import { useDashboardTokens } from '@/views/dashboard/ui/tokens'

const DragHandle = () => {
    const t = useDashboardTokens()

    return (
        <Box
            className='drag-handle'
            sx={{
                position: 'absolute',
                top: 8,
                right: 8,
                zIndex: 5,
                width: 26,
                height: 26,
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: t.textMuted,
                background: t.surface,
                border: `1px solid ${t.border}`,
                cursor: 'grab',
                opacity: 0,
                transition: 'opacity .18s ease, color .18s ease, border-color .18s ease',
                '&:active': { cursor: 'grabbing' },
            }}
        >
            <DragIndicatorIcon sx={{ fontSize: 16 }} />
        </Box>
    )
}

export default DragHandle