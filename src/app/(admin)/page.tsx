



'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import StatCard from '@/views/dashboard/pages/StatCard'
import MapOverview from '@/views/dashboard/pages/MapOverview'
import EnergyConsumption from '@/views/dashboard/pages/EnergyConsumption'
import DeviceStatus from '@/views/dashboard/pages/DeviceStatus'
import RecentAlarms from '@/views/dashboard/pages/RecentAlarms'
import TopEnergyConsumption from '@/views/dashboard/pages/TopEnergyConsumption'
import QuickActions from '@/views/dashboard/pages/QuickActions'

import HeroPanel from '@/views/dashboard/pages/HeroPanel'
import IconSprite from '@/views/dashboard/ui/IconSprite'
import CanvasRoot from '@/views/dashboard/three/CanvasRoot'
import { StatCardSkeleton } from '@/views/dashboard/ui/Skeleton'
import { useDashboardTokens } from '@/views/dashboard/ui/tokens'

import GridSection from '@/views/dashboard/grid/GridSection'
import { autoFlow, slugify } from '@/views/dashboard/grid/layoutUtils'
import type { ResponsiveLayouts } from 'react-grid-layout'
import CommandPalette from '@/views/dashboard/ui/CommandPalette'


const DashboardAnalytics = () => {


  const COLORS = useDashboardTokens()
  const [activeFilter, setActiveFilter] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500)
    return () => clearTimeout(timer)
  }, [])

  const ccmsStats = [
    { title: 'Total CCMS', value: '693', icon: 'router', accent: COLORS.energy, trend: [640, 655, 662, 670, 681, 688, 693], updatedSecondsAgo: 8 },
    { title: 'CCMS Connected', value: '659 Nos', icon: 'wifi', accent: COLORS.connected, percent: (659 / 693) * 100, updatedSecondsAgo: 8 },
    { title: 'Signal Loss', value: '34 Nos', icon: 'signal-off', accent: COLORS.signalLoss, trend: [52, 47, 44, 40, 38, 36, 34], updatedSecondsAgo: 12, rawValue: 34, thresholds: { warning: 20, critical: 40 } },
    { title: 'CCMS ON', value: '6 Nos', icon: 'toggle-on', accent: COLORS.on, percent: (6 / 693) * 100, updatedSecondsAgo: 8 },
    { title: 'CCMS OFF', value: '653 Nos', icon: 'toggle-off', accent: COLORS.off, subtitle: 'Power Cut: 77 Nos', percent: (653 / 693) * 100, updatedSecondsAgo: 8, rawValue: 77, thresholds: { warning: 50, critical: 100 } },
  ]

  const lightStats = [
    { title: 'Total Lights', value: '23,898', icon: 'bulb', accent: COLORS.energy, trend: [23850, 23890, 23920, 23955, 23970, 23985, 23998], updatedSecondsAgo: 5 },
    { title: 'Total Light ON', value: '184 (0.77%)', icon: 'bulb-flash', accent: COLORS.on, percent: 0.77, updatedSecondsAgo: 5 },
    { title: 'Total Light OFF', value: '22,496 (93.74%)', icon: 'bulb-off', accent: COLORS.off, percent: 93.74, updatedSecondsAgo: 5 },
    { title: 'Signal Loss (Light)', value: '1,318 (5.49%)', icon: 'signal-off', accent: COLORS.signalLoss, percent: 5.49, updatedSecondsAgo: 90, rawValue: 5.49, thresholds: { warning: 3, critical: 6 } },
    { title: 'Total Consumption', value: '491,075 kWh', icon: 'bolt', accent: COLORS.consumption, trend: [462000, 470500, 478200, 483900, 487600, 489800, 491075], updatedSecondsAgo: 5 },
  ]



  // ── CCMS Overview grid ──────────────────────────────────────
  const ccmsIds = ccmsStats.map(s => slugify(s.title))
  const ccmsItems = ccmsStats.map((s, idx) => ({
    id: ccmsIds[idx],
    node: isLoading ? <StatCardSkeleton /> : <StatCard {...s} onClick={() => setActiveFilter(prev => (prev === s.title ? null : s.title))} />,
  }))
  const ccmsCols = { lg: 10, md: 10, sm: 6, xs: 4, xxs: 2 }
  const ccmsDefaultLayouts: ResponsiveLayouts = {
    lg: autoFlow(ccmsIds, 10, 2, 4),
    md: autoFlow(ccmsIds, 10, 2, 4),
    sm: autoFlow(ccmsIds, 6, 2, 4),
    xs: autoFlow(ccmsIds, 4, 2, 4),
    xxs: autoFlow(ccmsIds, 2, 2, 4),
  }

  // ── Street Light Overview grid ──────────────────────────────
  const lightIds = lightStats.map(s => slugify(s.title))
  const lightItems = lightStats.map((s, idx) => ({
    id: lightIds[idx],
    node: isLoading ? <StatCardSkeleton /> : <StatCard {...s} onClick={() => setActiveFilter(prev => (prev === s.title ? null : s.title))} />,
  }))
  const lightCols = { lg: 10, md: 10, sm: 6, xs: 4, xxs: 2 }
  const lightDefaultLayouts: ResponsiveLayouts = {
    lg: autoFlow(lightIds, 10, 2, 4),
    md: autoFlow(lightIds, 10, 2, 4),
    sm: autoFlow(lightIds, 6, 2, 4),
    xs: autoFlow(lightIds, 4, 2, 4),
    xxs: autoFlow(lightIds, 2, 2, 4),
  }

  // ── Live Monitoring grid — merged, no Row 1 / Row 2 split ──
  const liveIds = ['map-overview', 'energy-consumption', 'device-status', 'recent-alarms', 'top-energy-consumption', 'quick-actions']
  const liveItems = [
    { id: liveIds[0], node: <MapOverview activeFilter={activeFilter} onClearFilter={() => setActiveFilter(null)} /> },
    { id: liveIds[1], node: <EnergyConsumption /> },
    { id: liveIds[2], node: <DeviceStatus activeFilter={activeFilter} /> },
    { id: liveIds[3], node: <RecentAlarms /> },
    { id: liveIds[4], node: <TopEnergyConsumption /> },
    { id: liveIds[5], node: <QuickActions /> },
  ]
  const liveCols = { lg: 12, md: 12, sm: 6, xs: 4, xxs: 2 }
  const liveDefaultLayouts: ResponsiveLayouts = {
    lg: autoFlow(liveIds, 12, 4, 8),
    md: autoFlow(liveIds, 12, 4, 8),
    sm: autoFlow(liveIds, 6, 3, 8),
    xs: autoFlow(liveIds, 4, 4, 8),
    xxs: autoFlow(liveIds, 2, 2, 8),
  }


  return (
    <Box sx={{ p: { xs: 2, md: 3 }, minHeight: '100vh' }}>
      <CommandPalette onRun={id => console.log('run command:', id)} />
      <CanvasRoot />
      <IconSprite />

      <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
        <Box sx={{ mb: 2.5 }}>
          <Typography sx={{ fontSize: { xs: '1.2rem', md: '1.4rem' }, fontWeight: 800, color: COLORS.text, letterSpacing: '-0.02em', lineHeight: 1.3 }}>
            Street Lights — Operations Dashboard
          </Typography>
          <Typography sx={{ fontSize: '0.8rem', color: COLORS.textMuted, mt: 0.5, fontWeight: 500 }}>
            Real-time CCMS &amp; Street Light Monitoring
          </Typography>
        </Box>
      </motion.div>

      {/* <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.1 }}>
        <HeroPanel />
      </motion.div> */}

      <GridSection
        storageKey='grid-ccms-overview'
        title='CCMS Overview'
        items={ccmsItems}
        cols={ccmsCols}
        rowHeight={42}
        defaultLayouts={ccmsDefaultLayouts}
      />

      <GridSection
        storageKey='grid-street-light-overview'
        title='Street Light Overview'
        items={lightItems}
        cols={lightCols}
        rowHeight={42}
        defaultLayouts={lightDefaultLayouts}
      />

      <GridSection
        storageKey='grid-live-monitoring'
        title='Live Monitoring'
        items={liveItems}
        cols={liveCols}
        rowHeight={42}
        defaultLayouts={liveDefaultLayouts}
      />
    </Box>
  )
}

export default DashboardAnalytics