'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Checkbox from '@mui/material/Checkbox'
import Chip from '@mui/material/Chip'

import GlassPanel from '@/views/dashboard/ui/GlassPanel'
import PageHeader from '@/views/dashboard/ui/PageHeader'
import ConfirmDialog from '@/views/dashboard/ui/ConfirmDialog'
import { useDashboardTokens } from '@/views/dashboard/ui/tokens'

type Severity = 'critical' | 'warning' | 'info'
interface AlertRow { id: string; title: string; location: string; severity: Severity; time: string }

const initialAlerts: AlertRow[] = [
    { id: '1', title: 'Signal Loss', location: 'Zone 3 – Alpha School', severity: 'critical', time: '2 min ago' },
    { id: '2', title: 'Low Voltage', location: 'Zone 4 – Sector 9', severity: 'warning', time: '18 min ago' },
    { id: '3', title: 'Manual Override', location: 'Zone 1 – Ward 12', severity: 'info', time: '34 min ago' },
    { id: '4', title: 'Door Open', location: 'Zone 3 – Parshad Ji Wali', severity: 'critical', time: '41 min ago' },
    { id: '5', title: 'Over Voltage', location: 'Zone 2 – Civil Lines', severity: 'warning', time: '1 hr ago' }
]

const AlertList = () => {
    const t = useDashboardTokens()
    const [alerts, setAlerts] = useState(initialAlerts)
    const [tab, setTab] = useState<'all' | Severity>('all')
    const [selected, setSelected] = useState<string[]>([])
    const [confirmOpen, setConfirmOpen] = useState(false)

    const cfg = {
        critical: { color: t.signalLoss, icon: 'ri-alarm-warning-line' },
        warning: { color: t.energy, icon: 'ri-error-warning-line' },
        info: { color: t.connected, icon: 'ri-information-line' }
    }

    const filtered = tab === 'all' ? alerts : alerts.filter(a => a.severity === tab)

    const toggleSelect = (id: string) => setSelected(s => (s.includes(id) ? s.filter(x => x !== id) : [...s, id]))

    const resolveSelected = () => {
        setAlerts(a => a.filter(x => !selected.includes(x.id)))
        setSelected([])
        setConfirmOpen(false)
    }

    return (
        <Box sx={{ p: { xs: 2, md: 3 }, pb: 10 }}>
            <PageHeader title='Alerts & Fault Management' subtitle='Real-time faults across all zones' crumbs={[{ label: 'Monitoring' }, { label: 'Alerts' }]} />

            <Box sx={{ display: 'flex', gap: 1, mb: 2.5, flexWrap: 'wrap' }}>
                {(['all', 'critical', 'warning', 'info'] as const).map(key => (
                    <motion.button
                        key={key}
                        onClick={() => setTab(key)}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        style={{
                            padding: '8px 16px', borderRadius: 10, border: `1px solid ${tab === key ? t.connected + '77' : t.border}`,
                            background: tab === key ? `${t.connected}18` : t.surface, color: tab === key ? t.connected : t.textMuted,
                            fontWeight: 700, fontSize: '.78rem', cursor: 'pointer', textTransform: 'capitalize'
                        }}
                    >
                        {key} {key !== 'all' && `(${alerts.filter(a => a.severity === key).length})`}
                    </motion.button>
                ))}
            </Box>

            <GlassPanel sx={{ p: 1 }}>
                <motion.div layout style={{ display: 'flex', flexDirection: 'column', gap: 8, padding: 12 }}>
                    <AnimatePresence initial={false}>
                        {filtered.map(a => {
                            const c = cfg[a.severity]
                            const isSelected = selected.includes(a.id)
                            return (
                                <motion.div
                                    key={a.id}
                                    layout
                                    initial={{ opacity: 0, y: -8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, x: 60, transition: { duration: 0.2 } }}
                                    whileHover={{ x: 4 }}
                                    style={{
                                        position: 'relative', borderRadius: 12, background: t.surface,
                                        border: `1px solid ${isSelected ? t.connected + '77' : t.border}`, overflow: 'hidden'
                                    }}
                                >
                                    <Box sx={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, bgcolor: c.color }} />
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, p: 1.6, pl: 2.2 }}>
                                        <Checkbox checked={isSelected} onChange={() => toggleSelect(a.id)} size='small' sx={{ color: t.textMuted, '&.Mui-checked': { color: t.connected } }} />
                                        <Box sx={{ width: 38, height: 38, borderRadius: '10px', bgcolor: `${c.color}22`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                            <i className={c.icon} style={{ color: c.color, fontSize: 18 }} />
                                        </Box>
                                        <Box sx={{ flex: 1, minWidth: 0 }}>
                                            <Typography sx={{ fontWeight: 700, fontSize: '.85rem', color: t.text }}>{a.title}</Typography>
                                            <Typography sx={{ fontSize: '.72rem', color: t.textMuted }}>{a.location} • {a.time}</Typography>
                                        </Box>
                                        <Chip label={a.severity} size='small' sx={{ textTransform: 'capitalize', bgcolor: `${c.color}22`, color: c.color, fontWeight: 700 }} />
                                    </Box>
                                </motion.div>
                            )
                        })}
                    </AnimatePresence>
                    {filtered.length === 0 && (
                        <Typography sx={{ textAlign: 'center', py: 4, color: t.textMuted, fontSize: '.85rem' }}>No alerts in this category. 🎉</Typography>
                    )}
                </motion.div>
            </GlassPanel>

            <AnimatePresence>
                {selected.length > 0 && (
                    <motion.div
                        initial={{ y: 80, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 80, opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 320, damping: 28 }}
                        style={{ position: 'fixed', bottom: 24, left: '50%', transform: 'translateX(-50%)', zIndex: 500 }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, px: 2.5, py: 1.4, borderRadius: '14px', bgcolor: t.panel, backdropFilter: 'blur(20px)', border: `1px solid ${t.borderStrong}`, boxShadow: t.shadowLifted }}>
                            <Typography sx={{ fontSize: '.82rem', fontWeight: 700, color: t.text }}>{selected.length} selected</Typography>
                            <motion.button
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.96 }}
                                onClick={() => setConfirmOpen(true)}
                                style={{ padding: '8px 16px', borderRadius: 10, border: 'none', background: t.on, color: '#fff', fontWeight: 700, fontSize: '.78rem', cursor: 'pointer' }}
                            >
                                Resolve Selected
                            </motion.button>
                            <Box component='button' onClick={() => setSelected([])} sx={{ bgcolor: 'transparent', border: 'none', color: t.textMuted, cursor: 'pointer', fontSize: '.78rem' }}>Clear</Box>
                        </Box>
                    </motion.div>
                )}
            </AnimatePresence>

            <ConfirmDialog
                open={confirmOpen}
                onClose={() => setConfirmOpen(false)}
                onConfirm={resolveSelected}
                title={`Resolve ${selected.length} alert${selected.length > 1 ? 's' : ''}?`}
                description='This marks the selected alerts as resolved and removes them from the active feed.'
                confirmWord='RESOLVE'
                danger={false}
            />
        </Box>
    )
}

export default AlertList