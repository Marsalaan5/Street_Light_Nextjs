'use client'

import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import InputBase from '@mui/material/InputBase'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'

import Map from '@/views/dashboard/ui/Map'
import PageHeader from '@/views/dashboard/ui/PageHeader'
import { useDashboardTokens } from '@/views/dashboard/ui/tokens'

import type { LightPoint, LightStatus } from '@/types/light/types'
import { statusMeta, FAULTY_COLOR } from '@/types/light/types'


const points: LightPoint[] = [
    { id: 'ALG-Z3-04521', label: 'Zone 3 – Alpha School', status: 'CONNECTED', lat: 27.878, lng: 78.052, zone: 'Zone 3', wattage: 60, energyToday: 0.42, lastSeen: 'Just now' },
    { id: 'ALG-Z3-04522', label: 'Zone 3 – Hqins Sarai Ku.', status: 'CONNECTED', lat: 27.873, lng: 78.032, zone: 'Zone 3', wattage: 60, energyToday: 0.39, lastSeen: '2 min ago' },
    { id: 'ALG-Z2-01187', label: 'Zone 2 – Civil Lines', status: 'OFFLINE', lat: 27.881, lng: 78.071, zone: 'Zone 2', wattage: 90, energyToday: 0, lastSeen: '6 hrs ago' },
    { id: 'ALG-Z2-01188', label: 'Zone 2 – Marris Road', status: 'FAULTY', lat: 27.889, lng: 78.076, zone: 'Zone 2', wattage: 60, energyToday: 0.11, lastSeen: '18 min ago' },
    { id: 'ALG-Z4-02290', label: 'Zone 4 – Dodhpur', status: 'CONNECTED', lat: 27.902, lng: 78.041, zone: 'Zone 4', wattage: 90, energyToday: 0.51, lastSeen: 'Just now' },
    { id: 'ALG-Z1-00340', label: 'Zone 1 – Railway Rd', status: 'CONNECTED', lat: 27.895, lng: 78.062, zone: 'Zone 1', wattage: 60, energyToday: 0.35, lastSeen: '1 min ago' }
]




const MapViewPage = () => {
    const t = useDashboardTokens()
    const [filtersOpen, setFiltersOpen] = useState(true)
    const [selected, setSelected] = useState<LightPoint | null>(null)
    const [search, setSearch] = useState('')
    const [zone, setZone] = useState('All')
    const [activeStatuses, setActiveStatuses] = useState<LightStatus[]>(['CONNECTED', 'OFFLINE', 'FAULTY'])
    const [heatmap, setHeatmap] = useState(false)

    const colorFor = (status: LightStatus) => (status === 'CONNECTED' ? t.on : status === 'OFFLINE' ? t.signalLoss : FAULTY_COLOR)

    const zones = useMemo(() => ['All', ...Array.from(new Set(points.map(p => p.zone)))], [])

    const filtered = useMemo(() => {
        return points.filter(p => {
            if (!activeStatuses.includes(p.status)) return false
            if (zone !== 'All' && p.zone !== zone) return false
            if (search && !`${p.label} ${p.id}`.toLowerCase().includes(search.toLowerCase())) return false
            return true
        })
    }, [search, zone, activeStatuses])

    const counts = useMemo(() => ({
        CONNECTED: points.filter(p => p.status === 'CONNECTED').length,
        OFFLINE: points.filter(p => p.status === 'OFFLINE').length,
        FAULTY: points.filter(p => p.status === 'FAULTY').length
    }), [])

    const toggleStatus = (s: LightStatus) => {
        setActiveStatuses(cur => (cur.includes(s) ? cur.filter(x => x !== s) : [...cur, s]))
    }

    return (
        <Box sx={{ p: { xs: 2, md: 3 }, height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <PageHeader
                title='Map View'
                subtitle='Live spatial view of every pole, feeder and controller'
                crumbs={[{ label: 'Monitoring' }, { label: 'Map View' }]}
                actions={
                    <Box sx={{ display: 'flex', gap: 1 }}>
                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => setHeatmap(h => !h)}
                            style={{
                                padding: '9px 16px', borderRadius: 10, border: `1px solid ${heatmap ? t.connected + '77' : t.border}`,
                                background: heatmap ? `${t.connected}18` : t.surface, color: heatmap ? t.connected : t.text,
                                fontWeight: 700, fontSize: '.8rem', cursor: 'pointer', display: 'flex', gap: 6, alignItems: 'center'
                            }}
                        >
                            <i className='ri-fire-line' /> Heatmap
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => setFiltersOpen(o => !o)}
                            style={{ padding: '9px 16px', borderRadius: 10, border: `1px solid ${t.border}`, background: t.surface, color: t.text, fontWeight: 700, fontSize: '.8rem', cursor: 'pointer', display: 'flex', gap: 6, alignItems: 'center' }}
                        >
                            <i className='ri-filter-3-line' /> Filters
                        </motion.button>
                    </Box>
                }
            />

            {/* status summary strip */}
            <Box sx={{ display: 'flex', gap: 1, mb: 1.5, flexWrap: 'wrap' }}>
                {(Object.keys(statusMeta) as LightStatus[]).map(s => (
                    <Box
                        key={s}
                        onClick={() => toggleStatus(s)}
                        sx={{
                            cursor: 'pointer', px: 1.4, py: 0.7, borderRadius: '10px',
                            border: `1px solid ${activeStatuses.includes(s) ? colorFor(s) + '55' : t.border}`,
                            bgcolor: activeStatuses.includes(s) ? `${colorFor(s)}14` : t.surface,
                            display: 'flex', alignItems: 'center', gap: 0.8, opacity: activeStatuses.includes(s) ? 1 : 0.5
                        }}
                    >
                        <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: colorFor(s) }} />
                        <Typography sx={{ fontSize: '.75rem', fontWeight: 700, color: t.text }}>
                            {statusMeta[s].label} · {counts[s]}
                        </Typography>
                    </Box>
                ))}
            </Box>

            <Box sx={{ position: 'relative', flex: 1, borderRadius: '18px', overflow: 'hidden', border: `1px solid ${t.border}` }}>
                <Map points={filtered} height={9999} />

                <AnimatePresence>
                    {filtersOpen && (
                        <motion.div
                            initial={{ x: -280, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -280, opacity: 0 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            style={{ position: 'absolute', top: 16, left: 16, width: 260, zIndex: 10 }}
                        >
                            <Box sx={{ borderRadius: '14px', border: `1px solid ${t.borderStrong}`, bgcolor: t.panel, backdropFilter: 'blur(16px)', p: 2, boxShadow: t.shadowLifted }}>
                                <Typography sx={{ fontWeight: 700, fontSize: '.85rem', color: t.text, mb: 1.2 }}>Search</Typography>
                                <InputBase
                                    placeholder='Pole ID or location…'
                                    value={search}
                                    onChange={e => setSearch(e.target.value)}
                                    sx={{ width: '100%', px: 1.2, py: 0.9, borderRadius: '10px', fontSize: '.8rem', color: t.text, bgcolor: t.surface, border: `1px solid ${t.border}`, mb: 1.6 }}
                                />

                                <Typography sx={{ fontWeight: 700, fontSize: '.85rem', color: t.text, mb: 1 }}>Zone</Typography>
                                <Select
                                    fullWidth
                                    size='small'
                                    value={zone}
                                    onChange={e => setZone(e.target.value)}
                                    sx={{ mb: 1.6, fontSize: '.8rem', bgcolor: t.surface, color: t.text, borderRadius: '10px', '.MuiOutlinedInput-notchedOutline': { borderColor: t.border } }}
                                >
                                    {zones.map(z => <MenuItem key={z} value={z} sx={{ fontSize: '.8rem' }}>{z}</MenuItem>)}
                                </Select>

                                <Typography sx={{ fontWeight: 700, fontSize: '.85rem', color: t.text, mb: 1 }}>Status</Typography>
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.6 }}>
                                    {(Object.keys(statusMeta) as LightStatus[]).map(s => (
                                        <Chip
                                            key={s}
                                            label={statusMeta[s].label}
                                            size='small'
                                            onClick={() => toggleStatus(s)}
                                            sx={{
                                                bgcolor: activeStatuses.includes(s) ? `${colorFor(s)}22` : t.surface,
                                                color: activeStatuses.includes(s) ? colorFor(s) : t.textMuted,
                                                border: `1px solid ${t.border}`,
                                                fontWeight: 700, cursor: 'pointer'
                                            }}
                                        />
                                    ))}
                                </Box>

                                <Box sx={{ mt: 1.6, pt: 1.6, borderTop: `1px solid ${t.border}` }}>
                                    <Typography sx={{ fontSize: '.72rem', color: t.textMuted }}>
                                        {filtered.length} of {points.length} lights shown
                                    </Typography>
                                </Box>
                            </Box>
                        </motion.div>
                    )}
                </AnimatePresence>

                <Box sx={{ position: 'absolute', bottom: 16, left: 16, right: 16, display: 'flex', gap: 1, zIndex: 10, overflowX: 'auto', pb: 0.5 }}>
                    {filtered.map(p => (
                        <motion.div key={p.id} whileHover={{ y: -3 }} onClick={() => setSelected(p)} style={{ cursor: 'pointer', flexShrink: 0 }}>
                            <Chip
                                label={p.label}
                                size='small'
                                sx={{ bgcolor: t.panel, backdropFilter: 'blur(10px)', color: colorFor(p.status), border: `1px solid ${t.border}`, fontWeight: 700 }}
                            />
                        </motion.div>
                    ))}
                    {filtered.length === 0 && (
                        <Typography sx={{ fontSize: '.78rem', color: t.textMuted, py: 0.6 }}>No lights match the current filters</Typography>
                    )}
                </Box>

                <AnimatePresence>
                    {selected && (
                        <motion.div
                            initial={{ x: 320, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 320, opacity: 0 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            style={{ position: 'absolute', top: 0, right: 0, height: '100%', width: 300, zIndex: 10 }}
                        >
                            <Box sx={{ height: '100%', bgcolor: t.panel, backdropFilter: 'blur(20px)', borderLeft: `1px solid ${t.border}`, p: 2.5, overflowY: 'auto' }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                                    <Typography sx={{ fontWeight: 800, color: t.text }}>{selected.label}</Typography>
                                    <Box component='button' onClick={() => setSelected(null)} sx={{ bgcolor: 'transparent', border: 'none', color: t.textMuted, cursor: 'pointer' }}>
                                        <i className='ri-close-line' style={{ fontSize: 18 }} />
                                    </Box>
                                </Box>

                                <Chip
                                    label={statusMeta[selected.status].label}
                                    size='small'
                                    sx={{ bgcolor: `${colorFor(selected.status)}22`, color: colorFor(selected.status), fontWeight: 700, mb: 2 }}
                                />

                                {[
                                    { label: 'Pole ID', value: selected.id },
                                    { label: 'Coordinates', value: `${selected.lat}, ${selected.lng}` },
                                    { label: 'Zone', value: selected.zone },
                                    { label: 'Wattage', value: `${selected.wattage} W` },
                                    { label: 'Energy today', value: `${selected.energyToday} kWh` },
                                    { label: 'Last seen', value: selected.lastSeen }
                                ].map(row => (
                                    <Box key={row.label} sx={{ display: 'flex', justifyContent: 'space-between', py: 0.9, borderBottom: `1px solid ${t.border}` }}>
                                        <Typography sx={{ fontSize: '.76rem', color: t.textMuted }}>{row.label}</Typography>
                                        <Typography sx={{ fontSize: '.78rem', color: t.text, fontWeight: 700 }}>{row.value}</Typography>
                                    </Box>
                                ))}

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    style={{ marginTop: 18, width: '100%', padding: '10px 0', borderRadius: 10, border: 'none', background: t.connected, color: '#fff', fontWeight: 700, fontSize: '.8rem', cursor: 'pointer' }}
                                >
                                    View full history
                                </motion.button>
                            </Box>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Box>
        </Box>
    )
}

export default MapViewPage