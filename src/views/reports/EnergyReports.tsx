'use client'

import { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import GlassPanel from '@/views/dashboard/ui/GlassPanel'
import PageHeader from '@/views/dashboard/ui/PageHeader'
import { useDashboardTokens } from '@/views/dashboard/ui/tokens'
import { StatCard, BarRow, TrendChart, ExportButton, ReportRangeSelect } from '@/views/dashboard/ui/ReportComponents'

const RANGES = ['Last 7 days', 'Last 30 days', 'This month', 'Last quarter'] as const

const energyByZone = [
    { zone: 'Zone 1', kwh: 412 },
    { zone: 'Zone 2', kwh: 356 },
    { zone: 'Zone 3', kwh: 501 },
    { zone: 'Zone 4', kwh: 288 }
]

const dailyTrend = [64, 71, 68, 80, 76, 90, 84, 88, 95, 91, 99, 104]

const EnergyReport = () => {
    const t = useDashboardTokens()
    const [range, setRange] = useState<string>(RANGES[1])

    const total = energyByZone.reduce((a, z) => a + z.kwh, 0)
    const max = Math.max(...energyByZone.map(z => z.kwh))

    return (
        <Box sx={{ p: { xs: 2, md: 3 } }}>
            <PageHeader
                title='Energy Reports'
                subtitle='Consumption by zone and daily trend across the network'
                crumbs={[{ label: 'Analytics' }, { label: 'Reports' }, { label: 'Energy' }]}
                actions={
                    <Box sx={{ display: 'flex', gap: 1 }}>
                        <ReportRangeSelect value={range} onChange={setRange} options={RANGES} />
                        <ExportButton />
                    </Box>
                }
            />

            <Box sx={{ display: 'flex', gap: 1.2, mb: 2.5, flexWrap: 'wrap' }}>
                <StatCard label='Total Energy' value={`${total} kWh`} color={t.text} />
                <StatCard label='Avg / Zone' value={`${Math.round(total / energyByZone.length)} kWh`} color={t.connected} />
                <StatCard label='Peak Zone' value={energyByZone.reduce((a, b) => (b.kwh > a.kwh ? b : a)).zone} color={t.on} />
                <StatCard label='Range' value={range} color={t.textMuted} />
            </Box>

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2 }}>
                <GlassPanel sx={{ p: 2.4 }}>
                    <Typography sx={{ fontWeight: 700, color: t.text, mb: 2 }}>Consumption by Zone</Typography>
                    {energyByZone.map(z => <BarRow key={z.zone} label={z.zone} value={z.kwh} max={max} unit='kWh' color={t.connected} />)}
                </GlassPanel>

                <GlassPanel sx={{ p: 2.4 }}>
                    <Typography sx={{ fontWeight: 700, color: t.text, mb: 2 }}>Daily Consumption Trend</Typography>
                    <TrendChart data={dailyTrend} color={t.connected} />
                </GlassPanel>
            </Box>
        </Box>
    )
}

export default EnergyReport