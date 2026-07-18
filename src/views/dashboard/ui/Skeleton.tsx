'use client'

import { motion } from 'framer-motion'
import Box from '@mui/material/Box'
import { useDashboardTokens } from './tokens'

interface ShimmerBlockProps {
    height?: number | string
    width?: number | string
    radius?: number | string
}

export const ShimmerBlock = ({ height = 16, width = '100%', radius = 6 }: ShimmerBlockProps) => {
    const t = useDashboardTokens()
    return (
        <Box sx={{ position: 'relative', height, width, borderRadius: radius, overflow: 'hidden', bgcolor: t.surface }}>
            <motion.div
                animate={{ x: ['-100%', '250%'] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: 'linear' }}
                style={{ position: 'absolute', inset: 0, width: '55%', background: `linear-gradient(90deg, transparent, ${t.shimmer}, transparent)` }}
            />
        </Box>
    )
}

export const StatCardSkeleton = () => {
    const t = useDashboardTokens()
    return (
        <Box sx={{ p: 1.6, height: '100%', borderRadius: '18px', border: `1px solid ${t.border}`, bgcolor: t.panel, display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 1 }}>
                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 0.8 }}>
                    <ShimmerBlock height={9} width='60%' />
                    <ShimmerBlock height={20} width='45%' />
                    <ShimmerBlock height={9} width='35%' />
                </Box>
                <ShimmerBlock height={34} width={34} radius={9} />
            </Box>
            <ShimmerBlock height={22} width='100%' />
        </Box>
    )
}

export const CardSkeleton = ({ height = 460 }: { height?: number }) => {
    const t = useDashboardTokens()
    return (
        <Box sx={{ height, borderRadius: '18px', border: `1px solid ${t.border}`, bgcolor: t.panel, p: 2.5, display: 'flex', flexDirection: 'column', gap: 1.4 }}>
            <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                <ShimmerBlock height={42} width={42} radius={12} />
                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 0.6 }}>
                    <ShimmerBlock height={12} width='40%' />
                    <ShimmerBlock height={9} width='60%' />
                </Box>
            </Box>
            {[...Array(4)].map((_, i) => <ShimmerBlock key={i} height={54} radius={12} />)}
        </Box>
    )
}