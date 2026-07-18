


// 'use client'

// // Next Imports
// import dynamic from 'next/dynamic'

// // MUI Imports
// import Card from '@mui/material/Card'
// import Box from '@mui/material/Box'
// import Typography from '@mui/material/Typography'

// import type { ApexOptions } from 'apexcharts'

// import { DASHBOARD_CARD_HEIGHT, RADIUS, useDashboardTokens } from './ui/tokens'
// import SectionHeader from './ui/SectionHeader'
// import AnimatedBar from './ui/AnimatedBar'

// const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'))

// const topConsumers = [
//   { rank: 1, name: 'Zone 3 – Aligarh City', value: 98450, pct: 100, color: '#F04438' },
//   { rank: 2, name: 'Zone 4 – Civil Lines', value: 76210, pct: 77, color: '#F5A623' },
//   { rank: 3, name: 'Zone 2 – Quarsi', value: 61880, pct: 63, color: '#FBBF24' },
//   { rank: 4, name: 'Zone 1 – Ramghat Road', value: 49530, pct: 50, color: '#38BDF8' },
//   { rank: 5, name: 'Zone 5 – Marris Road', value: 38020, pct: 39, color: '#60A5FA' },
//   { rank: 6, name: 'Zone 6 – Dodhpur', value: 27640, pct: 28, color: '#22C55E' }
// ]

// const TopEnergyConsumption = () => {
//   const t = useDashboardTokens()

//   const sparkOptions: ApexOptions = {
//     chart: { type: 'line', sparkline: { enabled: true }, toolbar: { show: false }, background: 'transparent' },
//     stroke: { curve: 'smooth', width: 3 },
//     colors: [t.energy],
//     dataLabels: { enabled: false },
//     grid: { show: false },
//     tooltip: { enabled: false }
//   }

//   const sparkSeries = [{ data: [42, 51, 47, 58, 63, 55, 67, 61, 70, 65, 72, 68] }]

//   return (
//     <Card
//       sx={{
//         height: DASHBOARD_CARD_HEIGHT,
//         display: 'flex',
//         flexDirection: 'column',
//         borderRadius: RADIUS.card,
//         overflow: 'hidden',
//         bgcolor: t.panel,
//         backdropFilter: 'blur(14px)',
//         border: `1px solid ${t.border}`,
//         boxShadow: t.shadowCard,
//         transition: '.3s',
//         '&:hover': { transform: 'translateY(-4px)', boxShadow: t.shadowLifted, borderColor: t.borderStrong }
//       }}
//     >
//       <SectionHeader title='Top Energy Consumption' subtitle='Highest consuming zones' icon='ri-bar-chart-horizontal-line' accent={t.energy} />

//       {/* Hero */}
//       <Box sx={{ p: 2.5, flexShrink: 0 }}>
//         <Box
//           sx={{
//             borderRadius: RADIUS.cardInner,
//             p: 2,
//             bgcolor: t.surface,
//             border: `1px solid ${t.border}`,
//             display: 'flex',
//             justifyContent: 'space-between',
//             alignItems: 'center',
//             gap: 2,
//             flexWrap: 'wrap'
//           }}
//         >
//           <Box>
//             <Typography sx={{ fontSize: '.72rem', color: t.textMuted, textTransform: 'uppercase', letterSpacing: '.08em', fontWeight: 700 }}>
//               Highest Consumer
//             </Typography>
//             <Typography sx={{ mt: 0.6, fontSize: '1.0rem', fontWeight: 800, color: t.text }}>98,450</Typography>
//             <Typography sx={{ mt: 0.35, fontSize: '.65rem', color: t.textMuted }}>kWh • Zone 3 – Aligarh City</Typography>
//           </Box>

//           <Box sx={{ width: { xs: '100%', sm: 130 } }}>
//             <AppReactApexCharts type='line' height={48} width='100%' options={sparkOptions} series={sparkSeries} />
//           </Box>
//         </Box>
//       </Box>

//       {/* Top Consumers */}
//       <Box sx={{ flex: 1, minHeight: 0, overflowY: 'auto', px: 2.5, pb: 2.5, display: 'flex', flexDirection: 'column', gap: 1.25 }}>
//         {topConsumers.map(zone => (
//           <Box
//             key={zone.rank}
//             sx={{
//               position: 'relative',
//               borderRadius: RADIUS.cardInner,
//               bgcolor: t.surface,
//               border: `1px solid ${t.border}`,
//               overflow: 'hidden',
//               transition: '.25s',
//               '&:hover': { transform: 'translateX(6px)', borderColor: t.borderStrong },
//               '&::before': { content: '""', position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, bgcolor: zone.color }
//             }}
//           >
//             <Box sx={{ p: 1.6, display: 'flex', alignItems: 'center', gap: 2 }}>
//               <Box
//                 sx={{
//                   width: 42,
//                   height: 42,
//                   borderRadius: '50%',
//                   bgcolor: `${zone.color}22`,
//                   color: zone.color,
//                   display: 'flex',
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                   fontWeight: 800,
//                   fontSize: '.6rem',
//                   flexShrink: 0
//                 }}
//               >
//                 #{zone.rank}
//               </Box>

//               <Box sx={{ flex: 1, minWidth: 0 }}>
//                 <Typography sx={{ fontWeight: 700, fontSize: '.82rem', color: t.text, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
//                   {zone.name}
//                 </Typography>

//                 <Typography sx={{ mt: 0.35, fontWeight: 800, fontSize: '.72rem', color: t.text }}>
//                   {zone.value.toLocaleString()}
//                   <Typography component='span' sx={{ ml: 0.5, fontSize: '.7rem', color: t.textMuted }}>
//                     kWh
//                   </Typography>
//                 </Typography>

//                 <Box sx={{ mt: 1 }}>
//                   <AnimatedBar percent={zone.pct} color={zone.color} height={6} delay={zone.rank * 0.05} />
//                 </Box>
//               </Box>

//               <Box sx={{ textAlign: 'right', minWidth: 48 }}>
//                 <Typography sx={{ fontWeight: 800, color: zone.color, fontSize: '.92rem' }}>{zone.pct}%</Typography>
//                 <Typography sx={{ mt: 0.3, fontSize: '.62rem', color: t.textMuted }}>Usage</Typography>
//               </Box>
//             </Box>
//           </Box>
//         ))}
//       </Box>

//       <Box sx={{ flexShrink: 0, px: 2.5, py: 2, borderTop: `1px solid ${t.border}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 1 }}>
//         <Typography sx={{ fontSize: '.75rem', color: t.textMuted }}>Updated a few seconds ago</Typography>
//         <Box
//           sx={{
//             display: 'flex',
//             alignItems: 'center',
//             gap: 0.5,
//             color: t.energy,
//             fontWeight: 700,
//             cursor: 'pointer',
//             transition: '.25s',
//             '&:hover': { transform: 'translateX(4px)' }
//           }}
//         >
//           <Typography sx={{ fontSize: '.82rem', fontWeight: 700 }}>View Rankings</Typography>
//           <i className='ri-arrow-right-line' style={{ fontSize: 18 }} />
//         </Box>
//       </Box>
//     </Card>
//   )
// }

// export default TopEnergyConsumption




'use client'

import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import type { ApexOptions } from 'apexcharts'

import { DASHBOARD_CARD_HEIGHT, RADIUS, useDashboardTokens } from '../ui/tokens'
import SectionHeader from '../ui/SectionHeader'
import AnimatedBar from '../ui/AnimatedBar'
import AnimatedNumber from '../ui/AnimatedNumber'
import { cardHoverProps, listStagger, listItem } from '../ui/motion'

const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'))
const MotionCard = motion(Card)
const MotionBox = motion(Box)

const topConsumers = [
  { rank: 1, name: 'Zone 3 – Aligarh City', value: 98450, pct: 100, color: '#F04438' },
  { rank: 2, name: 'Zone 4 – Civil Lines', value: 76210, pct: 77, color: '#F5A623' },
  { rank: 3, name: 'Zone 2 – Quarsi', value: 61880, pct: 63, color: '#FBBF24' },
  { rank: 4, name: 'Zone 1 – Ramghat Road', value: 49530, pct: 50, color: '#38BDF8' },
  { rank: 5, name: 'Zone 5 – Marris Road', value: 38020, pct: 39, color: '#60A5FA' },
  { rank: 6, name: 'Zone 6 – Dodhpur', value: 27640, pct: 28, color: '#22C55E' }
]

const TopEnergyConsumption = () => {
  const t = useDashboardTokens()

  const sparkOptions: ApexOptions = {
    chart: { type: 'line', sparkline: { enabled: true }, toolbar: { show: false }, background: 'transparent' },
    stroke: { curve: 'smooth', width: 3 },
    colors: [t.energy],
    dataLabels: { enabled: false },
    grid: { show: false },
    tooltip: { enabled: false }
  }

  const sparkSeries = [{ data: [42, 51, 47, 58, 63, 55, 67, 61, 70, 65, 72, 68] }]

  return (
    <MotionCard
      {...cardHoverProps}
      sx={{
        // height: DASHBOARD_CARD_HEIGHT,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: RADIUS.card,
        overflow: 'hidden',
        bgcolor: t.panel,
        backdropFilter: 'blur(14px)',
        border: `1px solid ${t.border}`,
        boxShadow: t.shadowCard
      }}
    >
      <SectionHeader title='Top Energy Consumption' subtitle='Highest consuming zones' icon='ri-bar-chart-horizontal-line' accent={t.energy} />

      <Box sx={{ p: 2.5, flexShrink: 0 }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 22 }}
        >
          <Box
            sx={{
              borderRadius: RADIUS.cardInner,
              p: 2,
              bgcolor: t.surface,
              border: `1px solid ${t.border}`,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 2,
              flexWrap: 'wrap'
            }}
          >
            <Box>
              <Typography sx={{ fontSize: '.72rem', color: t.textMuted, textTransform: 'uppercase', letterSpacing: '.08em', fontWeight: 700 }}>
                Highest Consumer
              </Typography>
              <Typography sx={{ mt: 0.6, fontSize: '1.0rem', fontWeight: 800, color: t.text }}>
                <AnimatedNumber value={98450} />
              </Typography>
              <Typography sx={{ mt: 0.35, fontSize: '.65rem', color: t.textMuted }}>kWh • Zone 3 – Aligarh City</Typography>
            </Box>

            <Box sx={{ width: { xs: '100%', sm: 130 } }}>
              <AppReactApexCharts type='line' height={48} width='100%' options={sparkOptions} series={sparkSeries} />
            </Box>
          </Box>
        </motion.div>
      </Box>

      <MotionBox
        variants={listStagger}
        initial='hidden'
        animate='show'
        sx={{ flex: 1, minHeight: 0, overflowY: 'auto', px: 2.5, pb: 2.5, display: 'flex', flexDirection: 'column', gap: 1.25 }}
      >
        {topConsumers.map(zone => (
          <MotionBox
            key={zone.rank}
            variants={listItem}
            whileHover={{ x: 6 }}
            sx={{
              position: 'relative',
              borderRadius: RADIUS.cardInner,
              bgcolor: t.surface,
              border: `1px solid ${t.border}`,
              overflow: 'hidden',
              '&::before': { content: '""', position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, bgcolor: zone.color }
            }}
          >
            <Box sx={{ p: 1.6, display: 'flex', alignItems: 'center', gap: 2 }}>
              <motion.div
                whileHover={{ scale: 1.12, rotate: -6 }}
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: '50%',
                  background: `${zone.color}22`,
                  color: zone.color,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontWeight: 800,
                  fontSize: '.6rem',
                  flexShrink: 0
                }}
              >
                #{zone.rank}
              </motion.div>

              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Typography sx={{ fontWeight: 700, fontSize: '.82rem', color: t.text, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {zone.name}
                </Typography>

                <Typography sx={{ mt: 0.35, fontWeight: 800, fontSize: '.72rem', color: t.text }}>
                  <AnimatedNumber value={zone.value} />
                  <Typography component='span' sx={{ ml: 0.5, fontSize: '.7rem', color: t.textMuted }}>
                    kWh
                  </Typography>
                </Typography>

                <Box sx={{ mt: 1 }}>
                  <AnimatedBar percent={zone.pct} color={zone.color} height={6} delay={zone.rank * 0.05} />
                </Box>
              </Box>

              <Box sx={{ textAlign: 'right', minWidth: 48 }}>
                <Typography sx={{ fontWeight: 800, color: zone.color, fontSize: '.92rem' }}>{zone.pct}%</Typography>
                <Typography sx={{ mt: 0.3, fontSize: '.62rem', color: t.textMuted }}>Usage</Typography>
              </Box>
            </Box>
          </MotionBox>
        ))}
      </MotionBox>

      <Box sx={{ flexShrink: 0, px: 2.5, py: 2, borderTop: `1px solid ${t.border}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 1 }}>
        <Typography sx={{ fontSize: '.75rem', color: t.textMuted }}>Updated a few seconds ago</Typography>
        <motion.div whileHover={{ x: 4 }} style={{ display: 'flex', alignItems: 'center', gap: 4, color: t.energy, fontWeight: 700, cursor: 'pointer' }}>
          <Typography sx={{ fontSize: '.82rem', fontWeight: 700 }}>View Rankings</Typography>
          <i className='ri-arrow-right-line' style={{ fontSize: 18 }} />
        </motion.div>
      </Box>
    </MotionCard>
  )
}

export default TopEnergyConsumption