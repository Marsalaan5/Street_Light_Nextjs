'use client'

import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import InputBase from '@mui/material/InputBase'

import { useDashboardTokens } from './tokens'

const mockCommands = [
    { id: 'zone-1', label: 'Go to Zone 1 – Ramghat Road', group: 'Zones', icon: 'ri-map-pin-line' },
    { id: 'zone-2', label: 'Go to Zone 2 – Quarsi', group: 'Zones', icon: 'ri-map-pin-line' },
    { id: 'zone-3', label: 'Go to Zone 3 – Aligarh City', group: 'Zones', icon: 'ri-map-pin-line' },
    { id: 'emergency-on', label: 'Emergency ON — all lights', group: 'Actions', icon: 'ri-flashlight-line' },
    { id: 'emergency-off', label: 'Emergency OFF — all lights', group: 'Actions', icon: 'ri-flashlight-off-line' },
    { id: 'reports', label: 'Open Reports & Compliance', group: 'Navigate', icon: 'ri-file-chart-line' },
    { id: 'complaints', label: 'Open Complaints / Tickets', group: 'Navigate', icon: 'ri-customer-service-2-line' }
]

interface CommandPaletteProps {
    onRun?: (id: string) => void
}

const CommandPalette = ({ onRun }: CommandPaletteProps) => {
    const t = useDashboardTokens()
    const [open, setOpen] = useState(false)
    const [query, setQuery] = useState('')
    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
                e.preventDefault()
                setOpen(o => !o)
            }
            if (e.key === 'Escape') setOpen(false)
        }
        window.addEventListener('keydown', handler)
        return () => window.removeEventListener('keydown', handler)
    }, [])

    useEffect(() => {
        if (!open) {
            setQuery('')
            setActiveIndex(0)
        }
    }, [open])

    const results = useMemo(() => {
        const q = query.trim().toLowerCase()
        const list = q ? mockCommands.filter(c => c.label.toLowerCase().includes(q)) : mockCommands
        return list.map(c => ({ ...c, action: () => { onRun?.(c.id); setOpen(false) } }))
    }, [query, onRun])

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'ArrowDown') { e.preventDefault(); setActiveIndex(i => Math.min(i + 1, results.length - 1)) }
        if (e.key === 'ArrowUp') { e.preventDefault(); setActiveIndex(i => Math.max(i - 1, 0)) }
        if (e.key === 'Enter' && results[activeIndex]) results[activeIndex].action()
    }

    return (
        <AnimatePresence>
            {open && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setOpen(false)}
                        style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(3px)', zIndex: 200000 }}
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.94, y: -16 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.96, y: -10 }}
                        transition={{ type: 'spring', stiffness: 340, damping: 28 }}
                        style={{ position: 'fixed', top: '14%', left: '50%', transform: 'translateX(-50%)', width: 'min(560px, 92vw)', zIndex: 200001 }}
                    >
                        <Box sx={{ borderRadius: '16px', border: `1px solid ${t.borderStrong}`, bgcolor: t.panel, backdropFilter: 'blur(20px)', boxShadow: t.shadowLifted, overflow: 'hidden' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2, px: 2, py: 1.6, borderBottom: `1px solid ${t.border}` }}>
                                <i className='ri-search-line' style={{ color: t.textMuted, fontSize: 18 }} />
                                <InputBase
                                    autoFocus
                                    placeholder='Search zones, actions, pages…'
                                    value={query}
                                    onChange={e => { setQuery(e.target.value); setActiveIndex(0) }}
                                    onKeyDown={handleKeyDown}
                                    sx={{ flex: 1, fontSize: '.9rem', color: t.text, '& input::placeholder': { color: t.textMuted, opacity: 1 } }}
                                />
                                <Box sx={{ fontSize: '.65rem', color: t.textMuted, border: `1px solid ${t.border}`, borderRadius: '5px', px: 0.7, py: 0.2 }}>ESC</Box>
                            </Box>

                            <Box sx={{ maxHeight: 360, overflowY: 'auto', p: 1 }}>
                                {results.length === 0 && (
                                    <Typography sx={{ textAlign: 'center', py: 3, fontSize: '.8rem', color: t.textMuted }}>No results.</Typography>
                                )}
                                {results.map((item, i) => (
                                    <motion.div
                                        key={item.id}
                                        onClick={item.action}
                                        onMouseEnter={() => setActiveIndex(i)}
                                        animate={{ backgroundColor: i === activeIndex ? `${t.connected}18` : 'transparent' }}
                                        style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 10px', borderRadius: 10, cursor: 'pointer' }}
                                    >
                                        <Box sx={{ width: 28, height: 28, borderRadius: '8px', bgcolor: `${t.connected}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                            <i className={item.icon} style={{ fontSize: 14, color: t.connected }} />
                                        </Box>
                                        <Box sx={{ minWidth: 0, flex: 1 }}>
                                            <Typography noWrap sx={{ fontSize: '.82rem', fontWeight: 600, color: t.text }}>{item.label}</Typography>
                                        </Box>
                                        <Typography sx={{ fontSize: '.62rem', color: t.textMuted }}>{item.group}</Typography>
                                    </motion.div>
                                ))}
                            </Box>
                        </Box>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}

export default CommandPalette