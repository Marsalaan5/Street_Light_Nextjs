

// // 'use client'

// // // Next Imports
// // import dynamic from 'next/dynamic'

// // // MUI Imports
// // import Card from '@mui/material/Card'
// // import Box from '@mui/material/Box'
// // import Typography from '@mui/material/Typography'
// // import Chip from '@mui/material/Chip'

// // import type { ApexOptions } from 'apexcharts'

// // import { DASHBOARD_CARD_HEIGHT, RADIUS, useDashboardTokens } from './ui/tokens'
// // import SectionHeader from './ui/SectionHeader'
// // import AnimatedBar from './ui/AnimatedBar'

// // const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'))

// // const statusRows = [
// //   { label: 'CCMS Connected', value: 659, total: 693, colorKey: 'connected', icon: 'ri-wifi-line', pct: 95.1 },
// //   { label: 'Light OFF', value: 22496, total: 23998, colorKey: 'signalLoss', icon: 'ri-lightbulb-fill', pct: 93.7 },
// //   { label: 'Signal Loss', value: 34, total: 693, colorKey: 'off', icon: 'ri-signal-wifi-off-line', pct: 4.9 },
// //   { label: 'Power Cut', value: 77, total: 693, colorKey: 'energy', icon: 'ri-flashlight-off-line', pct: 11.1 }
// // ] as const

// // const donutSeries = [6, 653, 34, 77]


// // interface DeviceStatusProps {
// //   activeFilter?: string | null
// // }

// // const DeviceStatus = ({ activeFilter }: DeviceStatusProps) => {

// //   const t = useDashboardTokens()

// //   const donutColors = [t.on, t.signalLoss, t.off, t.energy]

// //   const donutLegend = [
// //     { label: 'ON', value: 6, color: t.on },
// //     { label: 'OFF', value: 653, color: t.signalLoss },
// //     { label: 'Signal', value: 34, color: t.off },
// //     { label: 'Power', value: 77, color: t.energy }
// //   ]

// //   const donutOptions: ApexOptions = {
// //     chart: { type: 'donut', sparkline: { enabled: true }, parentHeightOffset: 0, background: 'transparent' },
// //     labels: ['ON', 'OFF', 'Signal', 'Power'],
// //     colors: donutColors,
// //     legend: { show: false },
// //     dataLabels: { enabled: false },
// //     stroke: { width: 3, colors: [t.surfaceSolid] },
// //     plotOptions: {
// //       pie: {
// //         donut: {
// //           size: '74%',
// //           labels: {
// //             show: true,
// //             name: { show: false },
// //             value: { fontSize: '26px', fontWeight: 800, color: t.text, offsetY: -2 },
// //             total: { show: true, label: 'Devices', color: t.textMuted, fontSize: '12px', formatter: () => '693' }
// //           }
// //         }
// //       }
// //     },
// //     tooltip: { theme: 'dark' }
// //   }

// //   return (
// //     <Card
// //       sx={{
// //         height: DASHBOARD_CARD_HEIGHT,
// //         display: 'flex',
// //         flexDirection: 'column',
// //         borderRadius: RADIUS.card,
// //         overflow: 'hidden',
// //         border: `1px solid ${t.border}`,
// //         bgcolor: t.panel,
// //         backdropFilter: 'blur(14px)',
// //         boxShadow: t.shadowCard,
// //         transition: 'all .3s ease',
// //         '&:hover': { transform: 'translateY(-4px)', boxShadow: t.shadowLifted, borderColor: t.borderStrong }
// //       }}
// //     >
// //       <SectionHeader
// //         title='Device Status'
// //         subtitle='Real-time CCMS monitoring'
// //         icon='ri-radar-line'
// //         accent='#A855F7'
// //         rightSlot={
// //           <Chip
// //             label='LIVE'
// //             size='small'
// //             sx={{ bgcolor: t.onDim, color: t.on, fontWeight: 700, '& .MuiChip-label': { px: 1 } }}
// //           />
// //         }
// //       />

// //       {/* Donut Section */}
// //       <Box sx={{ p: 2.5, flexShrink: 0 }}>
// //         <Box sx={{ display: 'flex', justifyContent: 'center' }}>
// //           <AppReactApexCharts type='donut' width={220} height={220} series={donutSeries} options={donutOptions} />
// //         </Box>

// //         <Box sx={{ mt: 1.5, display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 1.2 }}>
// //           {donutLegend.map(item => (
// //             <Box
// //               key={item.label}
// //               sx={{
// //                 borderRadius: RADIUS.cardInner,
// //                 border: `1px solid ${t.border}`,
// //                 p: 1.2,
// //                 display: 'flex',
// //                 justifyContent: 'space-between',
// //                 alignItems: 'center',
// //                 bgcolor: t.surface
// //               }}
// //             >
// //               <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.7 }}>
// //                 <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: item.color, boxShadow: `0 0 8px ${item.color}80` }} />
// //                 <Typography sx={{ fontSize: '.72rem', fontWeight: 600, color: t.text }}>{item.label}</Typography>
// //               </Box>
// //               <Typography sx={{ fontWeight: 800, color: item.color }}>{item.value}</Typography>
// //             </Box>
// //           ))}
// //         </Box>
// //       </Box>

// //       {/* Device Health */}
// //       <Box sx={{ flex: 1, minHeight: 0, overflowY: 'auto', px: 2.5, pb: 2.5 }}>
// //         <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
// //           <Typography sx={{ fontWeight: 700, fontSize: '.9rem', color: t.text }}>Device Health</Typography>
// //           <Chip
// //             label='Top Metrics'
// //             size='small'
// //             sx={{ fontWeight: 700, bgcolor: t.connectedDim, color: t.connected }}
// //           />
// //         </Box>

// //         <Box sx={{ mt: 2, pt: 2, borderTop: `1px solid ${t.border}` }}>
// //           {statusRows.map((row, index) => {
// //             const color = t[row.colorKey]
// //             const isActive = activeFilter && row.label.toLowerCase().includes(activeFilter.toLowerCase())

// //             return (
// //               <Box
// //                 key={row.label}
// //                 sx={{
// //                   p: 1.5,
// //                   mb: index !== statusRows.length - 1 ? 1.2 : 0,
// //                   borderRadius: RADIUS.cardInner,
// //                   bgcolor: t.surface,
// //                   // border: `1px solid ${t.border}`,
// //                   border: `1px solid ${isActive ? color + '88' : t.border}`,
// //                   boxShadow: isActive ? `0 0 0 2px ${color}33` : 'none',
// //                   transition: '.25s',
// //                   '&:hover': { transform: 'translateX(4px)', borderColor: t.borderStrong }
// //                 }}
// //               >
// //                 <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
// //                   {/* <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}> */}
// //                   <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, minWidth: 0 }}>
// //                     <Box
// //                       sx={{
// //                         width: 34,
// //                         height: 34,
// //                         borderRadius: 2,
// //                         bgcolor: `${color}22`,
// //                         display: 'flex',
// //                         justifyContent: 'center',
// //                         alignItems: 'center'
// //                       }}
// //                     >
// //                       <i className={row.icon} style={{ fontSize: 18, color }} />
// //                     </Box>
// //                     {/* <Box> */}
// //                     {/* <Typography sx={{ fontWeight: 700, fontSize: '.78rem', color: t.text }}>{row.label}</Typography>
// //                       <Typography sx={{ fontSize: '.68rem', color: t.textMuted }}> */}
// //                     <Box sx={{ minWidth: 0 }}>
// //                       <Typography noWrap sx={{ fontWeight: 700, fontSize: '.78rem', color: t.text }}>{row.label}</Typography>
// //                       <Typography noWrap sx={{ fontSize: '.68rem', color: t.textMuted }}>
// //                         {row.value.toLocaleString()} / {row.total.toLocaleString()}
// //                       </Typography>
// //                     </Box>
// //                   </Box>
// //                   {/* <Typography sx={{ fontWeight: 800, color, fontSize: '.82rem' }}>{row.pct}%</Typography> */}
// //                   <Typography sx={{ fontWeight: 800, color, fontSize: '.82rem', flexShrink: 0 }}>{row.pct}%</Typography>
// //                 </Box>

// //                 <AnimatedBar percent={row.pct} color={color} height={7} />
// //               </Box>
// //             )
// //           })}
// //         </Box>

// //         <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
// //           <Typography sx={{ fontSize: '.75rem', color: t.textMuted }}>Updated just now</Typography>
// //           <Box
// //             sx={{
// //               display: 'flex',
// //               alignItems: 'center',
// //               gap: 0.5,
// //               color: t.connected,
// //               cursor: 'pointer',
// //               fontWeight: 700,
// //               transition: '.25s',
// //               '&:hover': { transform: 'translateX(3px)' }
// //             }}
// //           >
// //             <Typography sx={{ fontSize: '.82rem', fontWeight: 700 }}>View Devices</Typography>
// //             <i className='ri-arrow-right-line' style={{ fontSize: 18 }} />
// //           </Box>
// //         </Box>
// //       </Box>
// //     </Card>
// //   )
// // }

// // export default DeviceStatus




// 'use client'

// import { useState } from 'react'
// import dynamic from 'next/dynamic'
// import Card from '@mui/material/Card'
// import Box from '@mui/material/Box'
// import Typography from '@mui/material/Typography'
// import Chip from '@mui/material/Chip'

// import type { ApexOptions } from 'apexcharts'

// import { DASHBOARD_CARD_HEIGHT, RADIUS, useDashboardTokens } from './ui/tokens'
// import SectionHeader from './ui/SectionHeader'
// import AnimatedBar from './ui/AnimatedBar'
// import ExpandModal from './ui/ExpandModal'

// const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'))

// const statusRows = [
//   { label: 'CCMS Connected', value: 659, total: 693, colorKey: 'connected', icon: 'ri-wifi-line', pct: 95.1 },
//   { label: 'Light OFF', value: 22496, total: 23998, colorKey: 'signalLoss', icon: 'ri-lightbulb-fill', pct: 93.7 },
//   { label: 'Signal Loss', value: 34, total: 693, colorKey: 'off', icon: 'ri-signal-wifi-off-line', pct: 4.9 },
//   { label: 'Power Cut', value: 77, total: 693, colorKey: 'energy', icon: 'ri-flashlight-off-line', pct: 11.1 },
// ] as const

// const donutSeries = [6, 653, 34, 77]

// interface DeviceStatusProps {
//   activeFilter?: string | null
// }

// const DeviceStatus = ({ activeFilter }: DeviceStatusProps) => {
//   const t = useDashboardTokens()
//   const [expanded, setExpanded] = useState(false)

//   const donutColors = [t.on, t.signalLoss, t.off, t.energy]
//   const donutLegend = [
//     { label: 'ON', value: 6, color: t.on },
//     { label: 'OFF', value: 653, color: t.signalLoss },
//     { label: 'Signal', value: 34, color: t.off },
//     { label: 'Power', value: 77, color: t.energy },
//   ]

//   const buildDonutOptions = (valueSize: string): ApexOptions => ({
//     chart: { type: 'donut', sparkline: { enabled: true }, parentHeightOffset: 0, background: 'transparent' },
//     labels: ['ON', 'OFF', 'Signal', 'Power'],
//     colors: donutColors,
//     legend: { show: false },
//     dataLabels: { enabled: false },
//     stroke: { width: 3, colors: [t.surfaceSolid] },
//     plotOptions: {
//       pie: {
//         donut: {
//           size: '78%',
//           labels: {
//             show: true,
//             name: { show: false },
//             value: { fontSize: valueSize, fontWeight: 800, color: t.text, offsetY: -2 },
//             total: { show: true, label: 'Devices', color: t.textMuted, fontSize: '10px', formatter: () => '693' },
//           },
//         },
//       },
//     },
//     tooltip: { theme: 'dark' },
//   })

//   const Rows = ({ dense }: { dense?: boolean }) => (
//     <Box sx={{ mt: dense ? 1 : 2, pt: dense ? 1 : 2, borderTop: `1px solid ${t.border}` }}>
//       {statusRows.map((row, index) => {
//         const color = t[row.colorKey]
//         const isActive = activeFilter && row.label.toLowerCase().includes(activeFilter.toLowerCase())
//         return (
//           <Box
//             key={row.label}
//             sx={{
//               p: dense ? 1 : 1.5, mb: index !== statusRows.length - 1 ? (dense ? 0.8 : 1.2) : 0, borderRadius: RADIUS.cardInner,
//               bgcolor: t.surface, border: `1px solid ${isActive ? color + '88' : t.border}`,
//               boxShadow: isActive ? `0 0 0 2px ${color}33` : 'none', transition: '.25s',
//               '&:hover': { borderColor: t.borderStrong },
//             }}
//           >
//             <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.6 }}>
//               <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8, minWidth: 0 }}>
//                 <Box sx={{ width: dense ? 26 : 34, height: dense ? 26 : 34, borderRadius: '8px', bgcolor: `${color}22`, display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0 }}>
//                   <i className={row.icon} style={{ fontSize: dense ? 13 : 18, color }} />
//                 </Box>
//                 <Box sx={{ minWidth: 0 }}>
//                   <Typography noWrap sx={{ fontWeight: 700, fontSize: dense ? '.68rem' : '.78rem', color: t.text }}>{row.label}</Typography>
//                   <Typography noWrap sx={{ fontSize: dense ? '.58rem' : '.68rem', color: t.textMuted }}>{row.value.toLocaleString()} / {row.total.toLocaleString()}</Typography>
//                 </Box>
//               </Box>
//               <Typography sx={{ fontWeight: 800, color, fontSize: dense ? '.7rem' : '.82rem', flexShrink: 0 }}>{row.pct}%</Typography>
//             </Box>
//             <AnimatedBar percent={row.pct} color={color} height={dense ? 5 : 7} />
//           </Box>
//         )
//       })}
//     </Box>
//   )

//   return (
//     <>
//       <Card
//         sx={{
//           height: DASHBOARD_CARD_HEIGHT, display: 'flex', flexDirection: 'column', borderRadius: RADIUS.card,
//           overflow: 'hidden', border: `1px solid ${t.border}`, bgcolor: t.panel, backdropFilter: 'blur(14px)',
//           boxShadow: t.shadowCard, transition: 'all .3s ease',
//           '&:hover': { transform: 'translateY(-4px)', boxShadow: t.shadowLifted, borderColor: t.borderStrong },
//         }}
//       >
//         <SectionHeader
//           title='Device Status'
//           subtitle='Real-time CCMS monitoring'
//           icon='ri-radar-line'
//           accent='#A855F7'
//           onExpand={() => setExpanded(true)}
//           rightSlot={<Chip label='LIVE' size='small' sx={{ bgcolor: t.onDim, color: t.on, fontWeight: 700, fontSize: '.62rem', height: 22 }} />}
//         />

//         <Box sx={{ p: 1.6, flexShrink: 0 }}>
//           <Box sx={{ display: 'flex', justifyContent: 'center' }}>
//             <AppReactApexCharts type='donut' width={150} height={150} series={donutSeries} options={buildDonutOptions('18px')} />
//           </Box>
//           <Box sx={{ mt: 1, display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 0.8 }}>
//             {donutLegend.map(item => (
//               <Box key={item.label} sx={{ borderRadius: RADIUS.cardInner, border: `1px solid ${t.border}`, p: 0.8, display: 'flex', justifyContent: 'space-between', alignItems: 'center', bgcolor: t.surface }}>
//                 <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
//                   <Box sx={{ width: 7, height: 7, borderRadius: '50%', bgcolor: item.color, boxShadow: `0 0 6px ${item.color}80` }} />
//                   <Typography sx={{ fontSize: '.62rem', fontWeight: 600, color: t.text }}>{item.label}</Typography>
//                 </Box>
//                 <Typography sx={{ fontWeight: 800, fontSize: '.68rem', color: item.color }}>{item.value}</Typography>
//               </Box>
//             ))}
//           </Box>
//         </Box>

//         <Box sx={{ flex: 1, minHeight: 0, overflowY: 'auto', px: 1.6, pb: 1.6 }}>
//           <Rows dense />
//         </Box>
//       </Card>

//       {/* <ExpandModal open={expanded} onClose={() => setExpanded(false)} title='Device Status' subtitle='Real-time CCMS monitoring'> */}

//       <ExpandModal open={expanded} onClose={() => setExpanded(false)} title='Map Overview'
//         subtitle='Monitor all connected locations' icon='ri-map-pin-2-fill' accent={t.connected}>

//         <Box sx={{ display: 'flex', justifyContent: 'center' }}>
//           <AppReactApexCharts type='donut' width={260} height={260} series={donutSeries} options={buildDonutOptions('30px')} />
//         </Box>
//         <Box sx={{ mt: 2, display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 1 }}>
//           {donutLegend.map(item => (
//             <Box key={item.label} sx={{ borderRadius: RADIUS.cardInner, border: `1px solid ${t.border}`, p: 1, textAlign: 'center', bgcolor: t.surface }}>
//               <Typography sx={{ fontSize: '.68rem', color: t.textMuted }}>{item.label}</Typography>
//               <Typography sx={{ fontWeight: 800, color: item.color }}>{item.value}</Typography>
//             </Box>
//           ))}
//         </Box>
//         <Rows />
//       </ExpandModal >
//     </>
//   )
// }

// export default DeviceStatus



'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'

import type { ApexOptions } from 'apexcharts'

import { DASHBOARD_CARD_HEIGHT, RADIUS, useDashboardTokens } from '../ui/tokens'
import SectionHeader from '../ui/SectionHeader'
import AnimatedBar from '../ui/AnimatedBar'
import ExpandModal from '../ui/ExpandModal'
import { cardHoverProps, listStagger, listItem } from '../ui/motion'

const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'))
const MotionCard = motion(Card)
const MotionBox = motion(Box)

const statusRows = [
  { label: 'CCMS Connected', value: 659, total: 693, colorKey: 'connected', icon: 'ri-wifi-line', pct: 95.1 },
  { label: 'Light OFF', value: 22496, total: 23998, colorKey: 'signalLoss', icon: 'ri-lightbulb-fill', pct: 93.7 },
  { label: 'Signal Loss', value: 34, total: 693, colorKey: 'off', icon: 'ri-signal-wifi-off-line', pct: 4.9 },
  { label: 'Power Cut', value: 77, total: 693, colorKey: 'energy', icon: 'ri-flashlight-off-line', pct: 11.1 }
] as const

const donutSeries = [6, 653, 34, 77]

interface DeviceStatusProps {
  activeFilter?: string | null
}

const DeviceStatus = ({ activeFilter }: DeviceStatusProps) => {
  const t = useDashboardTokens()
  const [expanded, setExpanded] = useState(false)

  const donutColors = [t.on, t.signalLoss, t.off, t.energy]
  const donutLegend = [
    { label: 'ON', value: 6, color: t.on },
    { label: 'OFF', value: 653, color: t.signalLoss },
    { label: 'Signal', value: 34, color: t.off },
    { label: 'Power', value: 77, color: t.energy }
  ]

  const buildDonutOptions = (valueSize: string): ApexOptions => ({
    chart: { type: 'donut', sparkline: { enabled: true }, parentHeightOffset: 0, background: 'transparent' },
    labels: ['ON', 'OFF', 'Signal', 'Power'],
    colors: donutColors,
    legend: { show: false },
    dataLabels: { enabled: false },
    stroke: { width: 3, colors: [t.surfaceSolid] },
    plotOptions: {
      pie: {
        donut: {
          size: '78%',
          labels: {
            show: true,
            name: { show: false },
            value: { fontSize: valueSize, fontWeight: 800, color: t.text, offsetY: -2 },
            total: { show: true, label: 'Devices', color: t.textMuted, fontSize: '10px', formatter: () => '693' }
          }
        }
      }
    },
    tooltip: { theme: 'dark' }
  })

  const Rows = ({ dense }: { dense?: boolean }) => (
    <MotionBox variants={listStagger} initial='hidden' animate='show' sx={{ mt: dense ? 1 : 2, pt: dense ? 1 : 2, borderTop: `1px solid ${t.border}` }}>
      {statusRows.map((row, index) => {
        const color = t[row.colorKey]
        const isActive = activeFilter && row.label.toLowerCase().includes(activeFilter.toLowerCase())
        return (
          <MotionBox
            key={row.label}
            variants={listItem}
            whileHover={{ x: 4 }}
            animate={isActive ? { boxShadow: [`0 0 0 2px ${color}33`, `0 0 0 5px ${color}00`, `0 0 0 2px ${color}33`] } : {}}
            transition={isActive ? { duration: 1.6, repeat: Infinity } : {}}
            sx={{
              p: dense ? 1 : 1.5, mb: index !== statusRows.length - 1 ? (dense ? 0.8 : 1.2) : 0, borderRadius: RADIUS.cardInner,
              bgcolor: t.surface, border: `1px solid ${isActive ? color + '88' : t.border}`
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.6 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8, minWidth: 0 }}>
                <Box sx={{ width: dense ? 26 : 34, height: dense ? 26 : 34, borderRadius: '8px', bgcolor: `${color}22`, display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0 }}>
                  <i className={row.icon} style={{ fontSize: dense ? 13 : 18, color }} />
                </Box>
                <Box sx={{ minWidth: 0 }}>
                  <Typography noWrap sx={{ fontWeight: 700, fontSize: dense ? '.68rem' : '.78rem', color: t.text }}>{row.label}</Typography>
                  <Typography noWrap sx={{ fontSize: dense ? '.58rem' : '.68rem', color: t.textMuted }}>{row.value.toLocaleString()} / {row.total.toLocaleString()}</Typography>
                </Box>
              </Box>
              <Typography sx={{ fontWeight: 800, color, fontSize: dense ? '.7rem' : '.82rem', flexShrink: 0 }}>{row.pct}%</Typography>
            </Box>
            <AnimatedBar percent={row.pct} color={color} height={dense ? 5 : 7} />
          </MotionBox>
        )
      })}
    </MotionBox>
  )

  return (
    <>
      <MotionCard
        {...cardHoverProps}
        sx={{
          // height: DASHBOARD_CARD_HEIGHT, display: 'flex', flexDirection: 'column', borderRadius: RADIUS.card,
          height: '100%', display: 'flex', flexDirection: 'column', borderRadius: RADIUS.card,
          overflow: 'hidden', border: `1px solid ${t.border}`, bgcolor: t.panel, backdropFilter: 'blur(14px)',
          boxShadow: t.shadowCard
        }}
      >
        <SectionHeader
          title='Device Status'
          subtitle='Real-time CCMS monitoring'
          icon='ri-radar-line'
          accent='#A855F7'
          onExpand={() => setExpanded(true)}
          rightSlot={
            <motion.div style={{ position: 'relative' }}>
              <motion.span
                animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
                transition={{ duration: 1.4, repeat: Infinity }}
                style={{ position: 'absolute', inset: 0, borderRadius: 20, background: t.on }}
              />
              <Chip label='LIVE' size='small' sx={{ position: 'relative', bgcolor: t.onDim, color: t.on, fontWeight: 700, fontSize: '.62rem', height: 22 }} />
            </motion.div>
          }
        />

        <Box sx={{ p: 1.6, flexShrink: 0 }}>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: 'spring', stiffness: 240, damping: 20 }}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <AppReactApexCharts type='donut' width={150} height={150} series={donutSeries} options={buildDonutOptions('18px')} />
            </Box>
          </motion.div>
          <Box sx={{ mt: 1, display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 0.8 }}>
            {donutLegend.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.06 }}
                style={{ borderRadius: 10, border: `1px solid ${t.border}`, padding: '6px 8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: t.surface }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <Box sx={{ width: 7, height: 7, borderRadius: '50%', bgcolor: item.color, boxShadow: `0 0 6px ${item.color}80` }} />
                  <Typography sx={{ fontSize: '.62rem', fontWeight: 600, color: t.text }}>{item.label}</Typography>
                </Box>
                <Typography sx={{ fontWeight: 800, fontSize: '.68rem', color: item.color }}>{item.value}</Typography>
              </motion.div>
            ))}
          </Box>
        </Box>

        <Box sx={{ flex: 1, minHeight: 0, overflowY: 'auto', px: 1.6, pb: 1.6 }}>
          <Rows dense />
        </Box>
      </MotionCard>

      <ExpandModal open={expanded} onClose={() => setExpanded(false)} title='Map Overview' subtitle='Monitor all connected locations' icon='ri-map-pin-2-fill' accent={t.connected}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <AppReactApexCharts type='donut' width={260} height={260} series={donutSeries} options={buildDonutOptions('30px')} />
        </Box>
        <Box sx={{ mt: 2, display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 1 }}>
          {donutLegend.map(item => (
            <Box key={item.label} sx={{ borderRadius: RADIUS.cardInner, border: `1px solid ${t.border}`, p: 1, textAlign: 'center', bgcolor: t.surface }}>
              <Typography sx={{ fontSize: '.68rem', color: t.textMuted }}>{item.label}</Typography>
              <Typography sx={{ fontWeight: 800, color: item.color }}>{item.value}</Typography>
            </Box>
          ))}
        </Box>
        <Rows />
      </ExpandModal>
    </>
  )
}

export default DeviceStatus