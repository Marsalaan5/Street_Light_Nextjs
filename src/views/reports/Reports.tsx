'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import GlassPanel from '@/views/dashboard/ui/GlassPanel'
import PageHeader from '@/views/dashboard/ui/PageHeader'
import { useDashboardTokens } from '@/views/dashboard/ui/tokens'

const reportCards = [
    { href: '/reports/energy', icon: 'ri-flashlight-line', title: 'Energy Reports', desc: 'Consumption by zone, daily trend and peak usage', accent: '#22c55e' },
    { href: '/reports/communication', icon: 'ri-signal-tower-line', title: 'Communication Reports', desc: 'RTU sync health, signal strength and comms uptime', accent: '#3b82f6' },
    { href: '/reports/faulty', icon: 'ri-error-warning-line', title: 'Faulty Reports', desc: 'Open faults, severity breakdown and resolution time', accent: '#f5a524' }
]

const Reports = () => {
    const t = useDashboardTokens()

    return (
        <Box sx={{ p: { xs: 2, md: 3 } }}>
            <PageHeader
                title='Reports'
                subtitle='Choose a report to drill into'
                crumbs={[{ label: 'Analytics' }, { label: 'Reports' }]}
            />

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: 2 }}>
                {reportCards.map((c, i) => (
                    <Link key={c.href} href={c.href} style={{ textDecoration: 'none' }}>
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.06 }}
                            whileHover={{ y: -4 }}
                        >
                            <GlassPanel sx={{ p: 2.6, height: '100%', cursor: 'pointer' }}>
                                <Box sx={{ width: 42, height: 42, borderRadius: '12px', bgcolor: `${c.accent}1c`, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1.6 }}>
                                    <i className={c.icon} style={{ fontSize: 20, color: c.accent }} />
                                </Box>
                                <Typography sx={{ fontWeight: 800, color: t.text, mb: 0.6 }}>{c.title}</Typography>
                                <Typography sx={{ fontSize: '.8rem', color: t.textMuted, lineHeight: 1.5 }}>{c.desc}</Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 2 }}>
                                    <Typography sx={{ fontSize: '.78rem', fontWeight: 700, color: c.accent }}>Open report</Typography>
                                    <i className='ri-arrow-right-line' style={{ fontSize: 14, color: c.accent }} />
                                </Box>
                            </GlassPanel>
                        </motion.div>
                    </Link>
                ))}
            </Box>
        </Box>
    )
}

export default Reports