// // import type { Metadata } from "next";
// // import { EcommerceMetrics } from "@/components/ecommerce/EcommerceMetrics";
// // import React from "react";
// // import MonthlyTarget from "@/components/ecommerce/MonthlyTarget";
// // import MonthlySalesChart from "@/components/ecommerce/MonthlySalesChart";
// // import StatisticsChart from "@/components/ecommerce/StatisticsChart";
// // import RecentOrders from "@/components/ecommerce/RecentOrders";
// // import DemographicCard from "@/components/ecommerce/DemographicCard";

// // export const metadata: Metadata = {
// //   title:
// //     "Next.js E-commerce Dashboard | TailAdmin - Next.js Dashboard Template",
// //   description: "This is Next.js Home for TailAdmin Dashboard Template",
// // };

// // export default function Ecommerce() {
// //   return (
// //     <div className="grid grid-cols-12 gap-4 md:gap-6">
// //       <div className="col-span-12 space-y-6 xl:col-span-7">
// //         <EcommerceMetrics />

// //         <MonthlySalesChart />
// //       </div>

// //       <div className="col-span-12 xl:col-span-5">
// //         <MonthlyTarget />
// //       </div>

// //       <div className="col-span-12">
// //         <StatisticsChart />
// //       </div>

// //       <div className="col-span-12 xl:col-span-5">
// //         <DemographicCard />
// //       </div>

// //       <div className="col-span-12 xl:col-span-7">
// //         <RecentOrders />
// //       </div>
// //     </div>
// //   );
// // }




// 'use client'

// import { useState } from 'react'
// import Grid from '@mui/material/Grid'
// import Box from '@mui/material/Box'
// import Typography from '@mui/material/Typography'
// import Divider from '@mui/material/Divider'

// import StatCard from '@/views/dashboard/StatCard'
// import MapOverview from '@/views/dashboard/MapOverview'
// import EnergyConsumption from '@/views/dashboard/EnergyConsumption'
// import DeviceStatus from '@/views/dashboard/DeviceStatus'
// import RecentAlarms from '@/views/dashboard/RecentAlarms'
// import TopEnergyConsumption from '@/views/dashboard/TopEnergyConsumption'
// import QuickActions from '@/views/dashboard/QuickActions'
// // import Table from '@/views/dashboard/Table'

// import HeroPanel from '@/views/dashboard/HeroPanel'
// import IconSprite from '@/views/dashboard/ui/IconSprite'

// import { SectionLabel } from '@/views/dashboard/ui/primitives'
// import { useDashboardTokens } from '@/views/dashboard/ui/tokens'

// import CanvasRoot from '@/views/dashboard/three/CanvasRoot'

// // ─── Section header with animated accent dot ─────────────────────────────────

// const SectionDivider = ({ label, borderColor }: { label: string; borderColor: string }) => (
//   <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2, mt: 0.5 }}>
//     <Box
//       sx={{
//         width: 8,
//         height: 8,
//         borderRadius: '50%',
//         background: 'linear-gradient(135deg, #0ea5e9, #a855f7)',
//         boxShadow: '0 0 10px rgba(14,165,233,0.4)',
//         flexShrink: 0,
//         animation: 'pulse 2s ease-in-out infinite',
//         '@keyframes pulse': {
//           '0%, 100%': { opacity: 1, transform: 'scale(1)' },
//           '50%': { opacity: 0.6, transform: 'scale(0.85)' },
//         },
//       }}
//     />
//     <SectionLabel>{label}</SectionLabel>
//     <Divider
//       sx={{
//         flex: 1,
//         borderColor,
//         borderStyle: 'dashed',
//         opacity: 0.5,
//       }}
//     />
//   </Box>
// )

// const DashboardAnalytics = () => {
//   const COLORS = useDashboardTokens()

//   const [activeFilter, setActiveFilter] = useState<string | null>(null)



//   const ccmsStats = [

//     { title: 'Total CCMS', value: '693', icon: 'router', accent: COLORS.energy, trend: [640, 655, 662, 670, 681, 688, 693], updatedSecondsAgo: 8 },
//     { title: 'CCMS Connected', value: '659 Nos', icon: 'wifi', accent: COLORS.connected, percent: (659 / 693) * 100, updatedSecondsAgo: 8 },
//     { title: 'Signal Loss', value: '34 Nos', icon: 'signal-off', accent: COLORS.signalLoss, trend: [52, 47, 44, 40, 38, 36, 34], updatedSecondsAgo: 12, rawValue: 34, thresholds: { warning: 20, critical: 40 } },
//     { title: 'CCMS ON', value: '6 Nos', icon: 'toggle-on', accent: COLORS.on, percent: (6 / 693) * 100, updatedSecondsAgo: 8 },
//     { title: 'CCMS OFF', value: '653 Nos', icon: 'toggle-off', accent: COLORS.off, subtitle: 'Power Cut: 77 Nos', percent: (653 / 693) * 100, updatedSecondsAgo: 8, rawValue: 77, thresholds: { warning: 50, critical: 100 } },
//   ]

//   const lightStats = [
//     { title: 'Total Lights', value: '23,998', icon: 'bulb', accent: COLORS.energy, trend: [23850, 23890, 23920, 23955, 23970, 23985, 23998], updatedSecondsAgo: 5 },
//     { title: 'Total Light ON', value: '184 (0.77%)', icon: 'bulb-flash', accent: COLORS.on, percent: 0.77, updatedSecondsAgo: 5 },
//     { title: 'Total Light OFF', value: '22,496 (93.74%)', icon: 'bulb-off', accent: COLORS.off, percent: 93.74, updatedSecondsAgo: 5 },
//     { title: 'Signal Loss (Light)', value: '1,318 (5.49%)', icon: 'signal-off', accent: COLORS.signalLoss, percent: 5.49, updatedSecondsAgo: 90, rawValue: 5.49, thresholds: { warning: 3, critical: 6 } },
//     { title: 'Total Consumption', value: '491,075 kWh', icon: 'bolt', accent: COLORS.consumption, trend: [462000, 470500, 478200, 483900, 487600, 489800, 491075], updatedSecondsAgo: 5 },
//   ]



//   return (
//     <Box sx={{ p: { xs: 2, md: 3 }, minHeight: '100vh' }}>
//       {/* ── Page header ──────────────────────────────────────── */}
//       <CanvasRoot />
//       <IconSprite />

//       <Box sx={{ mb: 2.5 }}>
//         <Typography
//           sx={{
//             fontSize: { xs: '1.2rem', md: '1.4rem' },
//             fontWeight: 800,
//             color: COLORS.text,
//             letterSpacing: '-0.02em',
//             lineHeight: 1.3,
//           }}
//         >
//           Street Lights — Operations Dashboard
//         </Typography>
//         <Typography
//           sx={{
//             fontSize: '0.8rem',
//             color: COLORS.textMuted,
//             mt: 0.5,
//             fontWeight: 500,
//           }}
//         >
//           Real-time CCMS &amp; Street Light Monitoring
//         </Typography>
//       </Box>

//       <HeroPanel />

//       {/* ── CCMS Overview ────────────────────────────────────── */}
//       <SectionDivider label='CCMS Overview' borderColor={COLORS.border} />
//       <Grid container spacing={2.5} sx={{ mb: 2.5 }}>
//         {ccmsStats.map(s => (
//           <Grid size={{ xs: 6, sm: 4, md: 2 }} key={s.title}>
//             {/* <StatCard {...s} onClick={() => console.log('drill down:', s.title)} /> */}
//             <StatCard {...s} onClick={() => setActiveFilter(prev => (prev === s.title ? null : s.title))} />
//           </Grid>
//         ))}
//       </Grid>





//       {/* ── Street Light Overview ────────────────────────────── */}
//       <SectionDivider label='Street Light Overview' borderColor={COLORS.border} />
//       <Grid container spacing={2.5} sx={{ mb: 2.5 }}>
//         {lightStats.map(s => (
//           <Grid size={{ xs: 6, sm: 4, md: 2.4 }} key={s.title}>
//             {/* <StatCard {...s} onClick={() => console.log('drill down:', s.title)} /> */}
//             <StatCard {...s} onClick={() => setActiveFilter(prev => (prev === s.title ? null : s.title))} />
//           </Grid>
//         ))}
//       </Grid>

//       {/* ── Live Monitoring — Row 1 ──────────────────────────── */}
//       <SectionDivider label='Live Monitoring' borderColor={COLORS.border} />


//       <Grid container spacing={2}
//         sx={{ mb: 3, alignItems: "flex-start" }}
//       >
//         <Grid
//           size={{ xs: 12, md: 4 }}
//           sx={{
//             alignSelf: 'flex-start'
//           }}
//         >
//           {/* <MapOverview /> */}
//           <MapOverview activeFilter={activeFilter} onClearFilter={() => setActiveFilter(null)} />
//         </Grid>
//         <Grid
//           size={{ xs: 12, md: 4 }} sx={{ alignSelf: 'flex-start' }}>
//           <EnergyConsumption />
//         </Grid>

//         <Grid
//           size={{ xs: 12, md: 4 }} sx={{ alignSelf: 'flex-start' }}
//         >
//           {/* <DeviceStatus /> */}
//           <DeviceStatus activeFilter={activeFilter} />
//         </Grid>
//       </Grid>

//       {/* ── Live Monitoring — Row 2 ──────────────────────────── */}

//       <Grid container
//         spacing={2}

//         sx={{ mb: 2.5, alignItems: "flex-start" }}
//       >
//         <Grid
//           size={{ xs: 12, md: 4 }} sx={{ alignSelf: 'flex-start' }}>
//           <RecentAlarms />
//         </Grid>
//         <Grid
//           size={{ xs: 12, md: 4 }} sx={{ alignSelf: 'flex-start' }}>
//           <TopEnergyConsumption />
//         </Grid>
//         <Grid
//           size={{ xs: 12, md: 4 }} sx={{ alignSelf: 'flex-start' }}>
//           <QuickActions />
//         </Grid>
//       </Grid>

//       {/* <SectionDivider label='Live Records' borderColor={COLORS.border} />
//       <Grid container>
//         <Grid item xs={12}>
//           <Table />
//         </Grid>
//       </Grid> */}
//     </Box>
//   )
// }

// export default DashboardAnalytics




// 'use client'

// import { useEffect, useState } from 'react'
// import { motion } from 'framer-motion'
// import Grid from '@mui/material/Grid'
// import Box from '@mui/material/Box'
// import Typography from '@mui/material/Typography'
// import Divider from '@mui/material/Divider'

// import StatCard from '@/views/dashboard/StatCard'
// import MapOverview from '@/views/dashboard/MapOverview'
// import EnergyConsumption from '@/views/dashboard/EnergyConsumption'
// import DeviceStatus from '@/views/dashboard/DeviceStatus'
// import RecentAlarms from '@/views/dashboard/RecentAlarms'
// import TopEnergyConsumption from '@/views/dashboard/TopEnergyConsumption'
// import QuickActions from '@/views/dashboard/QuickActions'

// import HeroPanel from '@/views/dashboard/HeroPanel'
// import IconSprite from '@/views/dashboard/ui/IconSprite'

// import { SectionLabel } from '@/views/dashboard/ui/primitives'
// import { useDashboardTokens } from '@/views/dashboard/ui/tokens'
// import { staggerContainer, fadeUpItem, revealOnScroll } from '@/views/dashboard/ui/motion'

// import CanvasRoot from '@/views/dashboard/three/CanvasRoot'
// import { StatCardSkeleton } from '@/views/dashboard/ui/Skeleton'

// const MotionGrid = motion(Grid)
// const MotionBox = motion(Box)

// const SectionDivider = ({ label, borderColor }: { label: string; borderColor: string }) => (
//   <MotionBox
//     {...revealOnScroll}
//     variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
//     sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2, mt: 0.5 }}
//   >
//     <motion.div
//       animate={{ scale: [1, 0.85, 1], opacity: [1, 0.6, 1] }}
//       transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
//       style={{
//         width: 8,
//         height: 8,
//         borderRadius: '50%',
//         background: 'linear-gradient(135deg, #0ea5e9, #a855f7)',
//         boxShadow: '0 0 10px rgba(14,165,233,0.4)',
//         flexShrink: 0
//       }}
//     />
//     <SectionLabel>{label}</SectionLabel>
//     <motion.div
//       initial={{ scaleX: 0 }}
//       whileInView={{ scaleX: 1 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.6, ease: 'easeOut' }}
//       style={{ flex: 1, transformOrigin: 'left', borderTop: `1px dashed ${borderColor}`, opacity: 0.5 }}
//     />
//   </MotionBox>
// )

// const DashboardAnalytics = () => {
//   const COLORS = useDashboardTokens()
//   const [activeFilter, setActiveFilter] = useState<string | null>(null)
//   const [isLoading, setIsLoading] = useState(true)

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false)
//     }, 500)

//     return () => clearTimeout(timer)
//   }, [])

//   const ccmsStats = [
//     { title: 'Total CCMS', value: '693', icon: 'router', accent: COLORS.energy, trend: [640, 655, 662, 670, 681, 688, 693], updatedSecondsAgo: 8 },
//     { title: 'CCMS Connected', value: '659 Nos', icon: 'wifi', accent: COLORS.connected, percent: (659 / 693) * 100, updatedSecondsAgo: 8 },
//     { title: 'Signal Loss', value: '34 Nos', icon: 'signal-off', accent: COLORS.signalLoss, trend: [52, 47, 44, 40, 38, 36, 34], updatedSecondsAgo: 12, rawValue: 34, thresholds: { warning: 20, critical: 40 } },
//     { title: 'CCMS ON', value: '6 Nos', icon: 'toggle-on', accent: COLORS.on, percent: (6 / 693) * 100, updatedSecondsAgo: 8 },
//     { title: 'CCMS OFF', value: '653 Nos', icon: 'toggle-off', accent: COLORS.off, subtitle: 'Power Cut: 77 Nos', percent: (653 / 693) * 100, updatedSecondsAgo: 8, rawValue: 77, thresholds: { warning: 50, critical: 100 } }
//   ]

//   const lightStats = [
//     { title: 'Total Lights', value: '23,898', icon: 'bulb', accent: COLORS.energy, trend: [23850, 23890, 23920, 23955, 23970, 23985, 23998], updatedSecondsAgo: 5 },
//     { title: 'Total Light ON', value: '184 (0.77%)', icon: 'bulb-flash', accent: COLORS.on, percent: 0.77, updatedSecondsAgo: 5 },
//     { title: 'Total Light OFF', value: '22,496 (93.74%)', icon: 'bulb-off', accent: COLORS.off, percent: 93.74, updatedSecondsAgo: 5 },
//     { title: 'Signal Loss (Light)', value: '1,318 (5.49%)', icon: 'signal-off', accent: COLORS.signalLoss, percent: 5.49, updatedSecondsAgo: 90, rawValue: 5.49, thresholds: { warning: 3, critical: 6 } },
//     { title: 'Total Consumption', value: '491,075 kWh', icon: 'bolt', accent: COLORS.consumption, trend: [462000, 470500, 478200, 483900, 487600, 489800, 491075], updatedSecondsAgo: 5 }
//   ]

//   return (
//     <Box sx={{ p: { xs: 2, md: 3 }, minHeight: '100vh' }}>
//       <CanvasRoot />
//       <IconSprite />

//       <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
//         <Box sx={{ mb: 2.5 }}>
//           <Typography sx={{ fontSize: { xs: '1.2rem', md: '1.4rem' }, fontWeight: 800, color: COLORS.text, letterSpacing: '-0.02em', lineHeight: 1.3 }}>
//             Street Lights — Operations Dashboard
//           </Typography>
//           <Typography sx={{ fontSize: '0.8rem', color: COLORS.textMuted, mt: 0.5, fontWeight: 500 }}>
//             Real-time CCMS &amp; Street Light Monitoring
//           </Typography>
//         </Box>
//       </motion.div>

//       <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.1 }}>
//         <HeroPanel />
//       </motion.div>

//       {/* ── CCMS Overview ────────────────────────────────────── */}
//       <SectionDivider label='CCMS Overview' borderColor={COLORS.border} />
//       <MotionGrid container spacing={2.5} sx={{ mb: 2.5 }} variants={staggerContainer} initial='hidden' animate='show'>
//         {ccmsStats.map(s => (
//           <Grid size={{ xs: 6, sm: 4, md: 2 }} key={s.title}>
//             <MotionBox variants={fadeUpItem} whileHover={{ y: -5 }}>
//               {isLoading ? <StatCardSkeleton /> : <StatCard {...s} onClick={() => setActiveFilter(prev => (prev === s.title ? null : s.title))} />}
//             </MotionBox>
//           </Grid>
//         ))}
//       </MotionGrid>

//       {/* ── Street Light Overview ────────────────────────────── */}
//       <SectionDivider label='Street Light Overview' borderColor={COLORS.border} />
//       <MotionGrid container spacing={2.5} sx={{ mb: 2.5 }} {...revealOnScroll} variants={staggerContainer}>
//         {lightStats.map(s => (
//           <Grid size={{ xs: 6, sm: 4, md: 2.4 }} key={s.title}>
//             <MotionBox variants={fadeUpItem} whileHover={{ y: -5 }}>
//               {isLoading ? <StatCardSkeleton /> : <StatCard {...s} onClick={() => setActiveFilter(prev => (prev === s.title ? null : s.title))} />}
//             </MotionBox>
//           </Grid>
//         ))}
//       </MotionGrid>

//       {/* ── Live Monitoring — Row 1 ──────────────────────────── */}
//       <SectionDivider label='Live Monitoring' borderColor={COLORS.border} />

//       <MotionGrid container spacing={2} sx={{ mb: 3, alignItems: 'flex-start' }} {...revealOnScroll} variants={staggerContainer}>
//         <Grid size={{ xs: 12, md: 4 }} sx={{ alignSelf: 'flex-start' }}>
//           <MotionBox variants={fadeUpItem}>
//             <MapOverview activeFilter={activeFilter} onClearFilter={() => setActiveFilter(null)} />
//           </MotionBox>
//         </Grid>
//         <Grid size={{ xs: 12, md: 4 }} sx={{ alignSelf: 'flex-start' }}>
//           <MotionBox variants={fadeUpItem}>
//             <EnergyConsumption />
//           </MotionBox>
//         </Grid>
//         <Grid size={{ xs: 12, md: 4 }} sx={{ alignSelf: 'flex-start' }}>
//           <MotionBox variants={fadeUpItem}>
//             <DeviceStatus activeFilter={activeFilter} />
//           </MotionBox>
//         </Grid>
//       </MotionGrid>

//       {/* ── Live Monitoring — Row 2 ──────────────────────────── */}
//       <MotionGrid container spacing={2} sx={{ mb: 2.5, alignItems: 'flex-start' }} {...revealOnScroll} variants={staggerContainer}>
//         <Grid size={{ xs: 12, md: 4 }} sx={{ alignSelf: 'flex-start' }}>
//           <MotionBox variants={fadeUpItem}>
//             <RecentAlarms />
//           </MotionBox>
//         </Grid>
//         <Grid size={{ xs: 12, md: 4 }} sx={{ alignSelf: 'flex-start' }}>
//           <MotionBox variants={fadeUpItem}>
//             <TopEnergyConsumption />
//           </MotionBox>
//         </Grid>
//         <Grid size={{ xs: 12, md: 4 }} sx={{ alignSelf: 'flex-start' }}>
//           <MotionBox variants={fadeUpItem}>
//             <QuickActions />
//           </MotionBox>
//         </Grid>
//       </MotionGrid>
//     </Box>
//   )
// }

// export default DashboardAnalytics




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