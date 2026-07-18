'use client'

import { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'

import GlassPanel from '@/views/dashboard/ui/GlassPanel'
import PageHeader from '@/views/dashboard/ui/PageHeader'
import { useDashboardTokens } from '@/views/dashboard/ui/tokens'
import { StatCard, TrendChart, ExportButton, ReportRangeSelect } from '@/views/dashboard/ui/ReportComponents'

const RANGES = ['Last 7 days', 'Last 30 days', 'This month', 'Last quarter'] as const

const uptimeTrend = [98, 97, 99, 95, 96, 98, 99, 94, 97, 98, 99, 96]

const commsLog = [
    { controller: 'RTU-2201', zone: 'Zone 3', lastSync: 'Just now', signal: 92, status: 'HEALTHY' },
    { controller: 'RTU-1187', zone: 'Zone 2', lastSync: '6 hrs ago', signal: 0, status: 'LOST' },
    { controller: 'RTU-2290', zone: 'Zone 4', lastSync: '1 min ago', signal: 88, status: 'HEALTHY' },
    { controller: 'RTU-0341', zone: 'Zone 1', lastSync: '3 hrs ago', signal: 22, status: 'WEAK' },
    { controller: 'RTU-2291', zone: 'Zone 4', lastSync: '41 min ago', signal: 54, status: 'WEAK' }
] as const

const statusColor = (s: string) => (s === 'HEALTHY' ? '#22c55e' : s === 'WEAK' ? '#f5a524' : '#ef4444')

const CommunicationReport = () => {
    const t = useDashboardTokens()
    const [range, setRange] = useState<string>(RANGES[1])

    const healthy = commsLog.filter(c => c.status === 'HEALTHY').length
    const avgUptime = Math.round(uptimeTrend.reduce((a, b) => a + b, 0) / uptimeTrend.length)

    return (
        <Box sx={{ p: { xs: 2, md: 3 } }}>
            <PageHeader
                title='Communication Reports'
                subtitle='RTU sync health, signal strength and comms uptime'
                crumbs={[{ label: 'Analytics' }, { label: 'Reports' }, { label: 'Communication' }]}
                actions={
                    <Box sx={{ display: 'flex', gap: 1 }}>
                        <ReportRangeSelect value={range} onChange={setRange} options={RANGES} />
                        <ExportButton />
                    </Box>
                }
            />

            <Box sx={{ display: 'flex', gap: 1.2, mb: 2.5, flexWrap: 'wrap' }}>
                <StatCard label='Avg Comms Uptime' value={`${avgUptime}%`} color={t.connected} />
                <StatCard label='Healthy Controllers' value={`${healthy}/${commsLog.length}`} color={t.on} />
                <StatCard label='Lost Connections' value={`${commsLog.filter(c => c.status === 'LOST').length}`} color='#ef4444' />
                <StatCard label='Range' value={range} color={t.textMuted} />
            </Box>

            <GlassPanel sx={{ p: 2.4, mb: 2 }}>
                <Typography sx={{ fontWeight: 700, color: t.text, mb: 2 }}>Comms Uptime Trend</Typography>
                <TrendChart data={uptimeTrend} color={t.connected} />
            </GlassPanel>

            <GlassPanel sx={{ p: 0, overflow: 'hidden' }}>
                <Box sx={{ overflowX: 'auto' }}>
                    <Box component='table' sx={{ width: '100%', borderCollapse: 'collapse', minWidth: 600 }}>
                        <Box component='thead'>
                            <Box component='tr' sx={{ borderBottom: `1px solid ${t.border}` }}>
                                {['Controller', 'Zone', 'Last Sync', 'Signal Strength', 'Status'].map(h => (
                                    <Box component='th' key={h} sx={{ textAlign: 'left', px: 2, py: 1.4, fontSize: '.72rem', fontWeight: 700, color: t.textMuted, textTransform: 'uppercase', letterSpacing: '.04em' }}>{h}</Box>
                                ))}
                            </Box>
                        </Box>
                        <Box component='tbody'>
                            {commsLog.map(c => (
                                <Box component='tr' key={c.controller} sx={{ borderBottom: `1px solid ${t.border}` }}>
                                    <Box component='td' sx={{ px: 2, py: 1.3, fontSize: '.82rem', fontWeight: 700, color: t.text }}>{c.controller}</Box>
                                    <Box component='td' sx={{ px: 2, py: 1.3, fontSize: '.8rem', color: t.textMuted }}>{c.zone}</Box>
                                    <Box component='td' sx={{ px: 2, py: 1.3, fontSize: '.8rem', color: t.textMuted }}>{c.lastSync}</Box>
                                    <Box component='td' sx={{ px: 2, py: 1.3 }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
                                            <Box sx={{ width: 60, height: 6, borderRadius: 4, bgcolor: t.surface, overflow: 'hidden' }}>
                                                <Box sx={{ width: `${c.signal}%`, height: '100%', bgcolor: statusColor(c.status) }} />
                                            </Box>
                                            <Typography sx={{ fontSize: '.72rem', color: t.textMuted }}>{c.signal}%</Typography>
                                        </Box>
                                    </Box>
                                    <Box component='td' sx={{ px: 2, py: 1.3 }}>
                                        <Chip label={c.status} size='small' sx={{ bgcolor: `${statusColor(c.status)}22`, color: statusColor(c.status), fontWeight: 700 }} />
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>
            </GlassPanel>
        </Box>
    )
}

export default CommunicationReport