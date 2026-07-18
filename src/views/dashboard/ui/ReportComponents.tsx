'use client'

import { motion } from 'framer-motion'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import GlassPanel from '@/views/dashboard/ui/GlassPanel'
import { useDashboardTokens } from '@/views/dashboard/ui/tokens'

export const StatCard = ({ label, value, color }: { label: string; value: string; color: string }) => {
    const t = useDashboardTokens()
    return (
        <GlassPanel sx={{ px: 2.2, py: 1.4, minWidth: 150, flex: '1 1 150px' }}>
            <Typography sx={{ fontSize: '.72rem', color: t.textMuted, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.04em' }}>{label}</Typography>
            <Typography sx={{ fontSize: '1.5rem', fontWeight: 800, color }}>{value}</Typography>
        </GlassPanel>
    )
}

export const BarRow = ({ label, value, max, unit, color }: { label: string; value: number; max: number; unit: string; color: string }) => {
    const t = useDashboardTokens()
    return (
        <Box sx={{ mb: 1.6 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                <Typography sx={{ fontSize: '.78rem', color: t.text, fontWeight: 700 }}>{label}</Typography>
                <Typography sx={{ fontSize: '.78rem', color: t.textMuted }}>{value} {unit}</Typography>
            </Box>
            <Box sx={{ height: 8, borderRadius: 6, bgcolor: t.surface, overflow: 'hidden' }}>
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(value / max) * 100}%` }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    style={{ height: '100%', background: color, borderRadius: 6 }}
                />
            </Box>
        </Box>
    )
}

export const TrendChart = ({ data, color }: { data: number[]; color: string }) => {
    const max = Math.max(...data)
    return (
        <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 0.8, height: 140 }}>
            {data.map((v, i) => (
                <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${(v / max) * 100}%` }}
                    transition={{ duration: 0.5, delay: i * 0.03, ease: 'easeOut' }}
                    style={{ flex: 1, background: `linear-gradient(180deg, ${color}, ${color}55)`, borderRadius: '4px 4px 0 0', minWidth: 6 }}
                    title={`${v}`}
                />
            ))}
        </Box>
    )
}

export const ExportButton = ({ label = 'Export CSV' }: { label?: string }) => {
    const t = useDashboardTokens()
    return (
        <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{ padding: '9px 16px', borderRadius: 10, border: 'none', background: t.connected, color: '#fff', fontWeight: 700, fontSize: '.8rem', cursor: 'pointer', display: 'flex', gap: 6, alignItems: 'center' }}
        >
            <i className='ri-download-2-line' /> {label}
        </motion.button>
    )
}

export const ReportRangeSelect = ({ value, onChange, options }: { value: string; onChange: (v: string) => void; options: readonly string[] }) => {
    const t = useDashboardTokens()
    return (
        <select
            value={value}
            onChange={e => onChange(e.target.value)}
            style={{
                padding: '9px 12px', borderRadius: 10, border: `1px solid ${t.border}`, background: t.surface,
                color: t.text, fontWeight: 700, fontSize: '.8rem', cursor: 'pointer'
            }}
        >
            {options.map(o => <option key={o} value={o}>{o}</option>)}
        </select>
    )
}