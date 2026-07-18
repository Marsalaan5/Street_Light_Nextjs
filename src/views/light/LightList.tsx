'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import InputBase from '@mui/material/InputBase'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'

import GlassPanel from '@/views/dashboard/ui/GlassPanel'
import PageHeader from '@/views/dashboard/ui/PageHeader'
import { useDashboardTokens } from '@/views/dashboard/ui/tokens'

import type { Light, LightStatus, SortKey } from '@/types/light/types'
import { statusMeta, FAULTY_COLOR } from '@/types/light/types'

const lights: Light[] = [
    { poleId: 'ALG-Z3-04521', lightId: 'LT-90001', location: 'Alpha School Rd', zone: 'Zone 3', ward: 'Ward 12', lightType: 'LED 60W', wattage: 60, status: 'CONNECTED', brightness: 100, lastUpdate: 'Just now', controller: 'RTU-2201', feeder: 'FP-118' },
    { poleId: 'ALG-Z3-04522', lightId: 'LT-90002', location: 'Hqins Sarai Ku.', zone: 'Zone 3', ward: 'Ward 12', lightType: 'LED 60W', wattage: 60, status: 'CONNECTED', brightness: 85, lastUpdate: '2 min ago', controller: 'RTU-2201', feeder: 'FP-118' },
    { poleId: 'ALG-Z2-01187', lightId: 'LT-90003', location: 'Civil Lines Main Rd', zone: 'Zone 2', ward: 'Ward 07', lightType: 'LED 90W', wattage: 90, status: 'OFFLINE', brightness: 0, lastUpdate: '6 hrs ago', controller: 'RTU-1187', feeder: 'FP-041' },
    { poleId: 'ALG-Z2-01188', lightId: 'LT-90004', location: 'Marris Road', zone: 'Zone 2', ward: 'Ward 07', lightType: 'LED 60W', wattage: 60, status: 'FAULTY', brightness: 40, lastUpdate: '18 min ago', controller: 'RTU-1187', feeder: 'FP-041' },
    { poleId: 'ALG-Z4-02290', lightId: 'LT-90005', location: 'Dodhpur Crossing', zone: 'Zone 4', ward: 'Ward 19', lightType: 'LED 90W', wattage: 90, status: 'CONNECTED', brightness: 100, lastUpdate: 'Just now', controller: 'RTU-2290', feeder: 'FP-207' },
    { poleId: 'ALG-Z1-00340', lightId: 'LT-90006', location: 'Railway Road', zone: 'Zone 1', ward: 'Ward 02', lightType: 'LED 60W', wattage: 60, status: 'CONNECTED', brightness: 90, lastUpdate: '1 min ago', controller: 'RTU-0340', feeder: 'FP-009' },
    { poleId: 'ALG-Z1-00341', lightId: 'LT-90007', location: 'Railway Road', zone: 'Zone 1', ward: 'Ward 02', lightType: 'LED 60W', wattage: 60, status: 'OFFLINE', brightness: 0, lastUpdate: '3 hrs ago', controller: 'RTU-0341', feeder: 'FP-009' },
    { poleId: 'ALG-Z4-02291', lightId: 'LT-90008', location: 'Dodhpur Crossing', zone: 'Zone 4', ward: 'Ward 19', lightType: 'LED 90W', wattage: 90, status: 'FAULTY', brightness: 55, lastUpdate: '41 min ago', controller: 'RTU-2291', feeder: 'FP-207' }
]


const LightListPage = () => {
    const t = useDashboardTokens()
    const [search, setSearch] = useState('')
    const [zone, setZone] = useState('All')
    const [ward, setWard] = useState('All')
    const [lightType, setLightType] = useState('All')
    const [status, setStatus] = useState<'All' | LightStatus>('All')
    const [sortKey, setSortKey] = useState<SortKey>('poleId')
    const [sortAsc, setSortAsc] = useState(true)
    const [selected, setSelected] = useState<Light | null>(null)

    const colorFor = (s: LightStatus) => (s === 'CONNECTED' ? t.on : s === 'OFFLINE' ? t.signalLoss : FAULTY_COLOR)

    const zones = useMemo(() => ['All', ...Array.from(new Set(lights.map(l => l.zone)))], [])
    const wards = useMemo(() => ['All', ...Array.from(new Set(lights.map(l => l.ward)))], [])
    const lightTypes = useMemo(() => ['All', ...Array.from(new Set(lights.map(l => l.lightType)))], [])

    const rows = useMemo(() => {
        let out = lights.filter(l => {
            if (zone !== 'All' && l.zone !== zone) return false
            if (ward !== 'All' && l.ward !== ward) return false
            if (lightType !== 'All' && l.lightType !== lightType) return false
            if (status !== 'All' && l.status !== status) return false
            if (search && !`${l.poleId} ${l.lightId} ${l.location} ${l.zone} ${l.ward} ${l.controller} ${l.feeder}`.toLowerCase().includes(search.toLowerCase())) return false
            return true
        })
        out = out.sort((a, b) => {
            const av = a[sortKey]
            const bv = b[sortKey]
            const cmp = typeof av === 'number' && typeof bv === 'number' ? av - bv : String(av).localeCompare(String(bv))
            return sortAsc ? cmp : -cmp
        })
        return out
    }, [search, zone, ward, lightType, status, sortKey, sortAsc])

    const toggleSort = (key: SortKey) => {
        if (sortKey === key) setSortAsc(a => !a)
        else { setSortKey(key); setSortAsc(true) }
    }

    const counts = {
        total: lights.length,
        online: lights.filter(l => l.status === 'CONNECTED').length,
        offline: lights.filter(l => l.status === 'OFFLINE').length,
        faulty: lights.filter(l => l.status === 'FAULTY').length
    }

    const columns: { key: SortKey; label: string }[] = [
        { key: 'poleId', label: 'Pole ID' },
        { key: 'lightId', label: 'Light ID' },
        { key: 'zone', label: 'Zone' },
        { key: 'ward', label: 'Ward' },
        { key: 'wattage', label: 'Wattage' },
        { key: 'status', label: 'Status' },
        { key: 'brightness', label: 'Brightness' }
    ]

    return (
        <Box sx={{ p: { xs: 2, md: 3 } }}>
            <PageHeader
                title='Light List'
                subtitle='Every registered pole with live status and consumption'
                crumbs={[{ label: 'Home' }, { label: 'Light List' }]}
                actions={
                    <Link href='/add' style={{ textDecoration: 'none' }}>
                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            style={{ padding: '9px 16px', borderRadius: 10, border: 'none', background: t.connected, color: '#fff', fontWeight: 700, fontSize: '.8rem', cursor: 'pointer', display: 'flex', gap: 6, alignItems: 'center' }}
                        >
                            <i className='ri-add-line' /> Add Light
                        </motion.button>
                    </Link>
                }
            />

            {/* summary cards */}
            <Box sx={{ display: 'flex', gap: 1.2, mb: 2.5, flexWrap: 'wrap' }}>
                {[
                    { label: 'Total Lights', value: counts.total, color: t.text },
                    { label: 'Online', value: counts.online, color: t.on },
                    { label: 'Offline', value: counts.offline, color: t.signalLoss },
                    { label: 'Faulty', value: counts.faulty, color: FAULTY_COLOR }
                ].map(c => (
                    <GlassPanel key={c.label} sx={{ px: 2.2, py: 1.4, minWidth: 140, flex: '1 1 140px' }}>
                        <Typography sx={{ fontSize: '.72rem', color: t.textMuted, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.04em' }}>{c.label}</Typography>
                        <Typography sx={{ fontSize: '1.5rem', fontWeight: 800, color: c.color }}>{c.value}</Typography>
                    </GlassPanel>
                ))}
            </Box>

            {/* filter bar */}
            <GlassPanel sx={{ p: 1.8, mb: 2, display: 'flex', gap: 1.2, flexWrap: 'wrap', alignItems: 'center' }}>
                <InputBase
                    placeholder='Search pole ID, light ID, location…'
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    sx={{ flex: '1 1 220px', px: 1.4, py: 0.9, borderRadius: '10px', fontSize: '.82rem', color: t.text, bgcolor: t.surface, border: `1px solid ${t.border}` }}
                />
                <Select size='small' value={zone} onChange={e => setZone(e.target.value)} sx={{ minWidth: 120, fontSize: '.8rem', bgcolor: t.surface, color: t.text, borderRadius: '10px', '.MuiOutlinedInput-notchedOutline': { borderColor: t.border } }}>
                    {zones.map(z => <MenuItem key={z} value={z} sx={{ fontSize: '.8rem' }}>{z}</MenuItem>)}
                </Select>
                <Select size='small' value={ward} onChange={e => setWard(e.target.value)} sx={{ minWidth: 120, fontSize: '.8rem', bgcolor: t.surface, color: t.text, borderRadius: '10px', '.MuiOutlinedInput-notchedOutline': { borderColor: t.border } }}>
                    {wards.map(w => <MenuItem key={w} value={w} sx={{ fontSize: '.8rem' }}>{w}</MenuItem>)}
                </Select>
                <Select size='small' value={lightType} onChange={e => setLightType(e.target.value)} sx={{ minWidth: 130, fontSize: '.8rem', bgcolor: t.surface, color: t.text, borderRadius: '10px', '.MuiOutlinedInput-notchedOutline': { borderColor: t.border } }}>
                    {lightTypes.map(lt => <MenuItem key={lt} value={lt} sx={{ fontSize: '.8rem' }}>{lt}</MenuItem>)}
                </Select>
                <Box sx={{ display: 'flex', gap: 0.6 }}>
                    {(['All', 'CONNECTED', 'OFFLINE', 'FAULTY'] as const).map(s => (
                        <Chip
                            key={s}
                            label={s === 'All' ? 'All' : statusMeta[s as LightStatus].label}
                            size='small'
                            onClick={() => setStatus(s)}
                            sx={{
                                bgcolor: status === s ? (s === 'All' ? `${t.connected}22` : `${colorFor(s as LightStatus)}22`) : t.surface,
                                color: status === s ? (s === 'All' ? t.connected : colorFor(s as LightStatus)) : t.textMuted,
                                border: `1px solid ${t.border}`, fontWeight: 700, cursor: 'pointer'
                            }}
                        />
                    ))}
                </Box>
            </GlassPanel>

            {/* table */}
            <GlassPanel sx={{ p: 0, overflow: 'hidden' }}>
                <Box sx={{ overflowX: 'auto' }}>
                    <Box component='table' sx={{ width: '100%', borderCollapse: 'collapse', minWidth: 1040 }}>
                        <Box component='thead'>
                            <Box component='tr' sx={{ borderBottom: `1px solid ${t.border}` }}>
                                <Box component='th' sx={{ textAlign: 'left', px: 2, py: 1.4, fontSize: '.72rem', fontWeight: 700, color: t.textMuted, textTransform: 'uppercase', letterSpacing: '.04em', whiteSpace: 'nowrap' }}>Location</Box>
                                <Box component='th' sx={{ textAlign: 'left', px: 2, py: 1.4, fontSize: '.72rem', fontWeight: 700, color: t.textMuted, textTransform: 'uppercase', letterSpacing: '.04em', whiteSpace: 'nowrap' }}>Light Type</Box>
                                {columns.map(col => (
                                    <Box
                                        component='th'
                                        key={col.key}
                                        onClick={() => toggleSort(col.key)}
                                        sx={{ textAlign: 'left', px: 2, py: 1.4, fontSize: '.72rem', fontWeight: 700, color: t.textMuted, textTransform: 'uppercase', letterSpacing: '.04em', cursor: 'pointer', userSelect: 'none', whiteSpace: 'nowrap' }}
                                    >
                                        {col.label} {sortKey === col.key && (sortAsc ? '↑' : '↓')}
                                    </Box>
                                ))}
                                <Box component='th' sx={{ textAlign: 'left', px: 2, py: 1.4, fontSize: '.72rem', fontWeight: 700, color: t.textMuted, textTransform: 'uppercase', letterSpacing: '.04em', whiteSpace: 'nowrap' }}>Last Update</Box>
                                <Box component='th' sx={{ px: 2, py: 1.4, fontSize: '.72rem', fontWeight: 700, color: t.textMuted, textTransform: 'uppercase', letterSpacing: '.04em' }}>Actions</Box>
                            </Box>
                        </Box>
                        <Box component='tbody'>
                            {rows.map((l, i) => (
                                <Box
                                    component={motion.tr}
                                    key={l.poleId}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: i * 0.02 }}
                                    sx={{ borderBottom: `1px solid ${t.border}`, '&:hover': { bgcolor: t.surface } }}
                                >
                                    <Box component='td' sx={{ px: 2, py: 1.3, fontSize: '.8rem', color: t.text, whiteSpace: 'nowrap' }}>{l.location}</Box>
                                    <Box component='td' sx={{ px: 2, py: 1.3, fontSize: '.8rem', color: t.textMuted, whiteSpace: 'nowrap' }}>{l.lightType}</Box>
                                    <Box component='td' sx={{ px: 2, py: 1.3, fontSize: '.82rem', fontWeight: 700, color: t.text, whiteSpace: 'nowrap' }}>{l.poleId}</Box>
                                    <Box component='td' sx={{ px: 2, py: 1.3, fontSize: '.8rem', color: t.textMuted, whiteSpace: 'nowrap' }}>{l.lightId}</Box>
                                    <Box component='td' sx={{ px: 2, py: 1.3, fontSize: '.8rem', color: t.textMuted, whiteSpace: 'nowrap' }}>{l.zone}</Box>
                                    <Box component='td' sx={{ px: 2, py: 1.3, fontSize: '.8rem', color: t.textMuted, whiteSpace: 'nowrap' }}>{l.ward}</Box>
                                    <Box component='td' sx={{ px: 2, py: 1.3, fontSize: '.8rem', color: t.text, whiteSpace: 'nowrap' }}>{l.wattage} W</Box>
                                    <Box component='td' sx={{ px: 2, py: 1.3 }}>
                                        <Chip label={statusMeta[l.status].label} size='small' sx={{ bgcolor: `${colorFor(l.status)}22`, color: colorFor(l.status), fontWeight: 700 }} />
                                    </Box>
                                    <Box component='td' sx={{ px: 2, py: 1.3, minWidth: 90 }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
                                            <Box sx={{ width: 46, height: 6, borderRadius: 4, bgcolor: t.surface, overflow: 'hidden' }}>
                                                <Box sx={{ width: `${l.brightness}%`, height: '100%', bgcolor: l.brightness === 0 ? t.signalLoss : t.connected }} />
                                            </Box>
                                            <Typography sx={{ fontSize: '.72rem', color: t.textMuted }}>{l.brightness}%</Typography>
                                        </Box>
                                    </Box>
                                    <Box component='td' sx={{ px: 2, py: 1.3, fontSize: '.78rem', color: t.textMuted, whiteSpace: 'nowrap' }}>{l.lastUpdate}</Box>
                                    <Box component='td' sx={{ px: 2, py: 1.3 }}>
                                        <Box sx={{ display: 'flex', gap: 0.4 }}>
                                            <Box component='button' onClick={() => setSelected(l)} title='View' sx={{ bgcolor: 'transparent', border: 'none', color: t.textMuted, cursor: 'pointer', p: 0.4 }}>
                                                <i className='ri-eye-line' />
                                            </Box>
                                            <Link href={`/add-light?edit=${l.poleId}`} title='Edit' style={{ color: t.textMuted, display: 'flex' }}>
                                                <i className='ri-edit-line' />
                                            </Link>
                                            <Box component='button' title='Delete' sx={{ bgcolor: 'transparent', border: 'none', color: t.signalLoss, cursor: 'pointer', p: 0.4 }}>
                                                <i className='ri-delete-bin-line' />
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            ))}
                            {rows.length === 0 && (
                                <Box component='tr'>
                                    <Box component='td' colSpan={11} sx={{ px: 2, py: 4, textAlign: 'center', fontSize: '.82rem', color: t.textMuted }}>
                                        No lights match the current filters
                                    </Box>
                                </Box>
                            )}
                        </Box>
                    </Box>
                </Box>
            </GlassPanel>

            <AnimatePresence>
                {selected && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelected(null)}
                        style={{ position: 'fixed', inset: 0, background: '#0008', zIndex: 20, display: 'flex', justifyContent: 'flex-end' }}
                    >
                        <motion.div
                            initial={{ x: 320 }}
                            animate={{ x: 0 }}
                            exit={{ x: 320 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            onClick={e => e.stopPropagation()}
                            style={{ width: 320, height: '100%', background: t.panel, backdropFilter: 'blur(20px)', borderLeft: `1px solid ${t.border}`, padding: 22, overflowY: 'auto' }}
                        >
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                                <Typography sx={{ fontWeight: 800, color: t.text }}>{selected.poleId}</Typography>
                                <Box component='button' onClick={() => setSelected(null)} sx={{ bgcolor: 'transparent', border: 'none', color: t.textMuted, cursor: 'pointer' }}>
                                    <i className='ri-close-line' style={{ fontSize: 18 }} />
                                </Box>
                            </Box>
                            <Chip label={statusMeta[selected.status].label} size='small' sx={{ bgcolor: `${colorFor(selected.status)}22`, color: colorFor(selected.status), fontWeight: 700, mb: 2 }} />
                            {[
                                { label: 'Light ID', value: selected.lightId },
                                { label: 'Location', value: selected.location },
                                { label: 'Zone', value: selected.zone },
                                { label: 'Ward', value: selected.ward },
                                { label: 'Light Type', value: selected.lightType },
                                { label: 'Wattage', value: `${selected.wattage} W` },
                                { label: 'Brightness', value: `${selected.brightness}%` },
                                { label: 'Controller ID', value: selected.controller },
                                { label: 'Feeder Pillar', value: selected.feeder },
                                { label: 'Last update', value: selected.lastUpdate }
                            ].map(row => (
                                <Box key={row.label} sx={{ display: 'flex', justifyContent: 'space-between', py: 0.9, borderBottom: `1px solid ${t.border}` }}>
                                    <Typography sx={{ fontSize: '.76rem', color: t.textMuted }}>{row.label}</Typography>
                                    <Typography sx={{ fontSize: '.78rem', color: t.text, fontWeight: 700 }}>{row.value}</Typography>
                                </Box>
                            ))}
                            <Link href={`/add-light?edit=${selected.poleId}`} style={{ textDecoration: 'none' }}>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    style={{ marginTop: 18, width: '100%', padding: '10px 0', borderRadius: 10, border: 'none', background: t.connected, color: '#fff', fontWeight: 700, fontSize: '.8rem', cursor: 'pointer' }}
                                >
                                    Edit Light
                                </motion.button>
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </Box>
    )
}

export default LightListPage