'use client'

import { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'

import GlassPanel from '@/views/dashboard/ui/GlassPanel'
import PageHeader from '@/views/dashboard/ui/PageHeader'
import { useDashboardTokens } from '@/views/dashboard/ui/tokens'
import { StatCard, ExportButton, ReportRangeSelect } from '@/views/dashboard/ui/ReportComponents'

const RANGES = ['Last 7 days', 'Last 30 days', 'This month', 'Last quarter'] as const

const faultLog = [
    { id: 'ALG-Z2-01188', zone: 'Zone 2', issue: 'Voltage fluctuation', raised: '18 min ago', severity: 'Medium' },
    { id: 'ALG-Z4-02291', zone: 'Zone 4', issue: 'Lamp not igniting', raised: '41 min ago', severity: 'High' },
    { id: 'ALG-Z2-01187', zone: 'Zone 2', issue: 'Controller offline', raised: '6 hrs ago', severity: 'High' },
    { id: 'ALG-Z1-00341', zone: 'Zone 1', issue: 'Communication loss', raised: '3 hrs ago', severity: 'Low' }
] as const

const severityColor = (s: string) => (s === 'High' ? '#ef4444' : s === 'Medium' ? '#f5a524' : '#64748b')

const FaultyReport = () => {
    const t = useDashboardTokens()
    const [range, setRange] = useState<string>(RANGES[1])

    return (
        <Box sx={{ p: { xs: 2, md: 3 } }}>
            <PageHeader
                title='Faulty Reports'
                subtitle='Open faults, severity breakdown and resolution time'
                crumbs={[{ label: 'Analytics' }, { label: 'Reports' }, { label: 'Faulty' }]}
                actions={
                    <Box sx={{ display: 'flex', gap: 1 }}>
                        <ReportRangeSelect value={range} onChange={setRange} options={RANGES} />
                        <ExportButton />
                    </Box>
                }
            />

            <Box sx={{ display: 'flex', gap: 1.2, mb: 2.5, flexWrap: 'wrap' }}>
                <StatCard label='Open Faults' value={`${faultLog.length}`} color='#f5a524' />
                <StatCard label='High Severity' value={`${faultLog.filter(f => f.severity === 'High').length}`} color='#ef4444' />
                <StatCard label='Avg Resolution' value='3.2 hrs' color={t.text} />
                <StatCard label='Range' value={range} color={t.textMuted} />
            </Box>

            <GlassPanel sx={{ p: 0, overflow: 'hidden' }}>
                <Box sx={{ overflowX: 'auto' }}>
                    <Box component='table' sx={{ width: '100%', borderCollapse: 'collapse', minWidth: 600 }}>
                        <Box component='thead'>
                            <Box component='tr' sx={{ borderBottom: `1px solid ${t.border}` }}>
                                {['Pole ID', 'Zone', 'Issue', 'Raised', 'Severity'].map(h => (
                                    <Box component='th' key={h} sx={{ textAlign: 'left', px: 2, py: 1.4, fontSize: '.72rem', fontWeight: 700, color: t.textMuted, textTransform: 'uppercase', letterSpacing: '.04em' }}>{h}</Box>
                                ))}
                            </Box>
                        </Box>
                        <Box component='tbody'>
                            {faultLog.map(f => (
                                <Box component='tr' key={f.id} sx={{ borderBottom: `1px solid ${t.border}` }}>
                                    <Box component='td' sx={{ px: 2, py: 1.3, fontSize: '.82rem', fontWeight: 700, color: t.text }}>{f.id}</Box>
                                    <Box component='td' sx={{ px: 2, py: 1.3, fontSize: '.8rem', color: t.textMuted }}>{f.zone}</Box>
                                    <Box component='td' sx={{ px: 2, py: 1.3, fontSize: '.8rem', color: t.text }}>{f.issue}</Box>
                                    <Box component='td' sx={{ px: 2, py: 1.3, fontSize: '.8rem', color: t.textMuted }}>{f.raised}</Box>
                                    <Box component='td' sx={{ px: 2, py: 1.3 }}>
                                        <Chip label={f.severity} size='small' sx={{ bgcolor: `${severityColor(f.severity)}22`, color: severityColor(f.severity), fontWeight: 700 }} />
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

export default FaultyReport