

// // 'use client'

// // // Next Imports
// // import dynamic from 'next/dynamic'

// // // MUI Imports
// // import Card from '@mui/material/Card'
// // import Box from '@mui/material/Box'
// // import Typography from '@mui/material/Typography'
// // import Chip from '@mui/material/Chip'
// // import Grid from '@mui/material/Grid'

// // import type { ApexOptions } from 'apexcharts'

// // import { DASHBOARD_CARD_HEIGHT, RADIUS, useDashboardTokens } from './ui/tokens'
// // import SectionHeader from './ui/SectionHeader'

// // const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'))

// // const EnergyConsumption = () => {
// //   const t = useDashboardTokens()

// //   const energyStats = [
// //     { label: 'Total Load', value: '1718.49 KW', color: t.connected, icon: 'ri-flashlight-line' },
// //     { label: 'Current Load', value: '6.39 KW', color: t.on, icon: 'ri-pulse-line' },
// //     { label: 'Overload', value: '0.66%', color: t.energy, icon: 'ri-alert-line' },
// //     { label: 'Underload', value: '0.00%', color: t.off, icon: 'ri-arrow-down-line' }
// //   ]

// //   const options: ApexOptions = {
// //     chart: { type: 'bar', height: 220, toolbar: { show: false }, parentHeightOffset: 0, background: 'transparent' },
// //     theme: { mode: 'dark' },
// //     colors: [t.connected],
// //     plotOptions: { bar: { borderRadius: 8, columnWidth: '48%', distributed: false } },
// //     dataLabels: { enabled: false },
// //     stroke: { show: false },
// //     grid: { borderColor: t.border, strokeDashArray: 5, padding: { left: 8, right: 12, top: 10, bottom: 0 } },
// //     xaxis: {
// //       categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
// //       axisBorder: { show: false },
// //       axisTicks: { show: false },
// //       labels: { style: { fontSize: '11px', colors: t.textMuted } }
// //     },
// //     yaxis: {
// //       labels: { formatter: value => `${(value / 1000).toFixed(0)}k`, style: { fontSize: '11px', colors: t.textMuted } }
// //     },
// //     tooltip: { theme: 'dark', y: { formatter: value => `${value.toLocaleString()} kWh` } }
// //   }

// //   const series = [
// //     { name: 'Consumption', data: [38200, 41500, 36800, 44200, 49100, 47300, 52100, 48900, 43600, 45800, 41200, 38700] }
// //   ]

// //   return (
// //     <Card
// //       sx={{
// //         height: DASHBOARD_CARD_HEIGHT,
// //         display: 'flex',
// //         flexDirection: 'column',
// //         overflow: 'hidden',
// //         borderRadius: RADIUS.card,
// //         bgcolor: t.panel,
// //         backdropFilter: 'blur(14px)',
// //         border: `1px solid ${t.border}`,
// //         boxShadow: t.shadowCard,
// //         transition: 'all .3s ease',
// //         '&:hover': { transform: 'translateY(-4px)', boxShadow: t.shadowLifted, borderColor: t.borderStrong }
// //       }}
// //     >
// //       <SectionHeader
// //         title='Energy Consumption'
// //         subtitle='Annual power usage overview'
// //         icon='ri-flashlight-line'
// //         accent={t.connected}
// //         rightSlot={
// //           <Chip label='2026' size='small' sx={{ bgcolor: t.connectedDim, color: t.connected, fontWeight: 700 }} />
// //         }
// //       />

// //       <Box sx={{ p: 2.5, flexShrink: 0 }}>
// //         <Box
// //           sx={{
// //             p: 2,
// //             borderRadius: RADIUS.cardInner,
// //             border: `1px solid ${t.border}`,
// //             background: `linear-gradient(135deg, ${t.connectedDim}, transparent)`,
// //             display: 'flex',
// //             justifyContent: 'space-between',
// //             alignItems: 'center'
// //           }}
// //         >
// //           <Box>
// //             <Typography sx={{ fontSize: '.65rem', color: t.textMuted, textTransform: 'uppercase' }}>
// //               Total Consumption
// //             </Typography>
// //             <Typography sx={{ fontWeight: 800, fontSize: '1.4rem', mt: 0.3, color: t.text }}>491,075</Typography>
// //             <Typography sx={{ fontSize: '.7rem', color: t.textMuted }}>kWh</Typography>
// //           </Box>

// //           <Box sx={{ display: 'flex', gap: 1 }}>
// //             <Chip label='🟢 19:05' size='small' sx={{ bgcolor: t.onDim, color: t.on, fontWeight: 700 }} />
// //             <Chip label='🔴 05:10' size='small' sx={{ bgcolor: t.signalLossDim, color: t.signalLoss, fontWeight: 700 }} />
// //           </Box>
// //         </Box>

// //         <Box
// //           sx={{
// //             mt: 2.5,
// //             flexShrink: 0,
// //             borderRadius: RADIUS.cardInner,
// //             border: `1px solid ${t.border}`,
// //             bgcolor: t.surface,
// //             p: 2
// //           }}
// //         >
// //           <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
// //             <Typography sx={{ fontWeight: 700, fontSize: '.9rem', color: t.text }}>Monthly Consumption</Typography>
// //             <Chip size='small' label='+8.4%' sx={{ bgcolor: t.onDim, color: t.on, fontWeight: 700 }} />
// //           </Box>

// //           <AppReactApexCharts type='bar' height={240} width='100%' options={options} series={series} />
// //         </Box>
// //       </Box>

// //       <Box sx={{ flex: 1, minHeight: 0, overflowY: 'auto', px: 2.5, pb: 2.5 }}>
// //         <Grid container spacing={1.5}>
// //           {energyStats.map((stat, index) => (
// //             // <Grid item xs={6} md={6} key={index}>
// //             <Grid size={{ xs: 6, md: 6 }} key={index}>
// //               <Box
// //                 sx={{
// //                   display: 'flex',
// //                   alignItems: 'center',
// //                   gap: 1.2,
// //                   p: 1.5,
// //                   borderRadius: RADIUS.cardInner,
// //                   bgcolor: t.surface,
// //                   border: `1px solid ${t.border}`,
// //                   transition: '.25s',
// //                   minWidth: 0,
// //                   '&:hover': { transform: 'translateY(-2px)', borderColor: t.borderStrong }
// //                 }}
// //               >
// //                 <Box
// //                   sx={{
// //                     width: 38,
// //                     height: 38,
// //                     borderRadius: 2,
// //                     bgcolor: `${stat.color}22`,
// //                     display: 'flex',
// //                     alignItems: 'center',
// //                     justifyContent: 'center',
// //                     flexShrink: 0
// //                   }}
// //                 >
// //                   <i className={stat.icon} style={{ fontSize: 18, color: stat.color }} />
// //                 </Box>
// //                 {/* <Box>   */}
// //                 <Box sx={{ minWidth: 0 }}>
// //                   {/* <Typography sx={{ fontSize: '.62rem', color: t.textMuted, textTransform: 'uppercase' }}> */}
// //                   <Typography noWrap sx={{ fontSize: '.62rem', color: t.textMuted, textTransform: 'uppercase' }}>
// //                     {stat.label}
// //                   </Typography>
// //                   {/* <Typography sx={{ mt: 0.2, fontWeight: 700, fontSize: '.95rem', color: t.text }}> */}
// //                   <Typography noWrap sx={{ mt: 0.2, fontWeight: 700, fontSize: '.95rem', color: t.text }}>
// //                     {stat.value}

// //                   </Typography>
// //                 </Box>
// //               </Box>
// //             </Grid>
// //           ))}
// //         </Grid>
// //       </Box>
// //     </Card>
// //   )
// // }

// // export default EnergyConsumption

// 'use client'

// import { useState } from 'react'
// import dynamic from 'next/dynamic'
// import Card from '@mui/material/Card'
// import Box from '@mui/material/Box'
// import Typography from '@mui/material/Typography'
// import Chip from '@mui/material/Chip'
// import Grid from '@mui/material/Grid'

// import type { ApexOptions } from 'apexcharts'

// import { DASHBOARD_CARD_HEIGHT, RADIUS, useDashboardTokens } from './ui/tokens'
// import SectionHeader from './ui/SectionHeader'
// import ExpandModal from './ui/ExpandModal'

// const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'))

// const seriesData = [38200, 41500, 36800, 44200, 49100, 47300, 52100, 48900, 43600, 45800, 41200, 38700]
// const categories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

// const energyStats = [
//   { label: 'Total Load', value: '1718.49 KW', color: '#0ea5e9', icon: 'ri-flashlight-line' },
//   { label: 'Current Load', value: '6.39 KW', color: '#22c55e', icon: 'ri-pulse-line' },
//   { label: 'Overload', value: '0.66%', color: '#f59e0b', icon: 'ri-alert-line' },
//   { label: 'Underload', value: '0.00%', color: '#6b7280', icon: 'ri-arrow-down-line' },
// ]

// const EnergyConsumption = () => {
//   const t = useDashboardTokens()
//   const [expanded, setExpanded] = useState(false)

//   const buildOptions = (height: number): ApexOptions => ({
//     chart: { type: 'area', height, toolbar: { show: false }, parentHeightOffset: 0, background: 'transparent' },
//     theme: { mode: 'dark' },
//     colors: [t.connected],
//     fill: {
//       type: 'gradient',
//       gradient: { shadeIntensity: 1, opacityFrom: 0.45, opacityTo: 0, stops: [0, 90, 100] },
//     },
//     stroke: { curve: 'smooth', width: 2.5 },
//     dataLabels: { enabled: false },
//     grid: { borderColor: t.border, strokeDashArray: 4, padding: { left: 4, right: 8, top: 6, bottom: 0 } },
//     xaxis: {
//       categories,
//       axisBorder: { show: false },
//       axisTicks: { show: false },
//       labels: { style: { fontSize: '10px', colors: t.textMuted } },
//     },
//     yaxis: { labels: { formatter: v => `${(v / 1000).toFixed(0)}k`, style: { fontSize: '10px', colors: t.textMuted } } },
//     tooltip: { theme: 'dark', y: { formatter: v => `${v.toLocaleString()} kWh` } },
//   })

//   const series = [{ name: 'Consumption', data: seriesData }]

//   const StatGrid = ({ dense }: { dense?: boolean }) => (
//     <Grid container spacing={1.2}>
//       {energyStats.map((stat, index) => (
//         <Grid size={{ xs: 6, md: 6 }} key={index}>
//           <Box
//             sx={{
//               display: 'flex', alignItems: 'center', gap: 1, p: dense ? 1 : 1.5, borderRadius: RADIUS.cardInner,
//               bgcolor: t.surface, border: `1px solid ${t.border}`, minWidth: 0, transition: '.2s',
//               '&:hover': { borderColor: t.borderStrong },
//             }}
//           >
//             <Box sx={{ width: dense ? 30 : 38, height: dense ? 30 : 38, borderRadius: '9px', bgcolor: `${stat.color}22`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
//               <i className={stat.icon} style={{ fontSize: dense ? 14 : 18, color: stat.color }} />
//             </Box>
//             <Box sx={{ minWidth: 0 }}>
//               <Typography noWrap sx={{ fontSize: dense ? '.58rem' : '.62rem', color: t.textMuted, textTransform: 'uppercase' }}>{stat.label}</Typography>
//               <Typography noWrap sx={{ mt: 0.1, fontWeight: 700, fontSize: dense ? '.78rem' : '.95rem', color: t.text }}>{stat.value}</Typography>
//             </Box>
//           </Box>
//         </Grid>
//       ))}
//     </Grid>
//   )

//   return (
//     <>
//       <Card
//         sx={{
//           height: DASHBOARD_CARD_HEIGHT, display: 'flex', flexDirection: 'column', overflow: 'hidden',
//           borderRadius: RADIUS.card, bgcolor: t.panel, backdropFilter: 'blur(14px)', border: `1px solid ${t.border}`,
//           boxShadow: t.shadowCard, transition: 'all .3s ease',
//           '&:hover': { transform: 'translateY(-4px)', boxShadow: t.shadowLifted, borderColor: t.borderStrong },
//         }}
//       >
//         <SectionHeader
//           title='Energy Consumption'
//           subtitle='Annual power usage overview'
//           icon='ri-flashlight-line'
//           accent={t.connected}
//           onExpand={() => setExpanded(true)}
//           rightSlot={<Chip label='2026' size='small' sx={{ bgcolor: t.connectedDim, color: t.connected, fontWeight: 700, fontSize: '.65rem', height: 22 }} />}
//         />

//         <Box sx={{ p: 1.6, flexShrink: 0 }}>
//           <Box sx={{ p: 1.4, borderRadius: RADIUS.cardInner, border: `1px solid ${t.border}`, background: `linear-gradient(135deg, ${t.connectedDim}, transparent)`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//             <Box>
//               <Typography sx={{ fontSize: '.58rem', color: t.textMuted, textTransform: 'uppercase' }}>Total Consumption</Typography>
//               <Typography sx={{ fontWeight: 800, fontSize: '1.1rem', color: t.text }}>491,075 <Box component='span' sx={{ fontSize: '.6rem', color: t.textMuted, fontWeight: 500 }}>kWh</Box></Typography>
//             </Box>
//             <Chip size='small' label='+8.4%' sx={{ bgcolor: t.onDim, color: t.on, fontWeight: 700, fontSize: '.62rem', height: 22 }} />
//           </Box>
//         </Box>

//         <Box sx={{ px: 1.6, flexShrink: 0 }}>
//           <AppReactApexCharts type='area' height={130} width='100%' options={buildOptions(130)} series={series} />
//         </Box>

//         <Box sx={{ flex: 1, minHeight: 0, overflowY: 'auto', px: 1.6, pb: 1.6, pt: 1 }}>
//           <StatGrid dense />
//         </Box>
//       </Card>

//       <ExpandModal open={expanded} onClose={() => setExpanded(false)} title='Energy Consumption' subtitle='Annual power usage overview'>
//         <AppReactApexCharts type='area' height={320} width='100%' options={buildOptions(320)} series={series} />
//         <Box sx={{ mt: 2.5 }}>
//           <StatGrid />
//         </Box>
//       </ExpandModal>
//     </>
//   )
// }

// export default EnergyConsumption




'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import Grid from '@mui/material/Grid'

import type { ApexOptions } from 'apexcharts'

import { DASHBOARD_CARD_HEIGHT, RADIUS, useDashboardTokens } from '../ui/tokens'
import SectionHeader from '../ui/SectionHeader'
import ExpandModal from '../ui/ExpandModal'
import AnimatedNumber from '../ui/AnimatedNumber'
import { cardHoverProps, staggerContainer, fadeUpItem } from '../ui/motion'

const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'))
const MotionCard = motion(Card)

const seriesData = [38200, 41500, 36800, 44200, 49100, 47300, 52100, 48900, 43600, 45800, 41200, 38700]
const categories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const energyStats = [
  { label: 'Total Load', value: '1718.49 KW', color: '#0ea5e9', icon: 'ri-flashlight-line' },
  { label: 'Current Load', value: '6.39 KW', color: '#22c55e', icon: 'ri-pulse-line' },
  { label: 'Overload', value: '0.66%', color: '#f59e0b', icon: 'ri-alert-line' },
  { label: 'Underload', value: '0.00%', color: '#6b7280', icon: 'ri-arrow-down-line' }
]

const EnergyConsumption = () => {
  const t = useDashboardTokens()
  const [expanded, setExpanded] = useState(false)

  const buildOptions = (height: number): ApexOptions => ({
    chart: { type: 'area', height, toolbar: { show: false }, parentHeightOffset: 0, background: 'transparent' },
    theme: { mode: 'dark' },
    colors: [t.connected],
    fill: { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.45, opacityTo: 0, stops: [0, 90, 100] } },
    stroke: { curve: 'smooth', width: 2.5 },
    dataLabels: { enabled: false },
    grid: { borderColor: t.border, strokeDashArray: 4, padding: { left: 4, right: 8, top: 6, bottom: 0 } },
    xaxis: { categories, axisBorder: { show: false }, axisTicks: { show: false }, labels: { style: { fontSize: '10px', colors: t.textMuted } } },
    yaxis: { labels: { formatter: v => `${(v / 1000).toFixed(0)}k`, style: { fontSize: '10px', colors: t.textMuted } } },
    tooltip: { theme: 'dark', y: { formatter: v => `${v.toLocaleString()} kWh` } }
  })

  const series = [{ name: 'Consumption', data: seriesData }]

  const StatGrid = ({ dense }: { dense?: boolean }) => (
    <Grid container spacing={1.2} component={motion.div} variants={staggerContainer} initial='hidden' animate='show'>
      {energyStats.map((stat, index) => (
        <Grid size={{ xs: 6, md: 6 }} key={index} component={motion.div} variants={fadeUpItem} whileHover={{ y: -3 }}>
          <Box
            sx={{
              display: 'flex', alignItems: 'center', gap: 1, p: dense ? 1 : 1.5, borderRadius: RADIUS.cardInner,
              bgcolor: t.surface, border: `1px solid ${t.border}`, minWidth: 0
            }}
          >
            <Box sx={{ width: dense ? 30 : 38, height: dense ? 30 : 38, borderRadius: '9px', bgcolor: `${stat.color}22`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <i className={stat.icon} style={{ fontSize: dense ? 14 : 18, color: stat.color }} />
            </Box>
            <Box sx={{ minWidth: 0 }}>
              <Typography noWrap sx={{ fontSize: dense ? '.58rem' : '.62rem', color: t.textMuted, textTransform: 'uppercase' }}>{stat.label}</Typography>
              <Typography noWrap sx={{ mt: 0.1, fontWeight: 700, fontSize: dense ? '.78rem' : '.95rem', color: t.text }}>{stat.value}</Typography>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  )

  return (
    <>
      <MotionCard
        {...cardHoverProps}
        sx={{
          // height: DASHBOARD_CARD_HEIGHT, 
          height: '100%',
          display: 'flex', flexDirection: 'column', overflow: 'hidden',
          borderRadius: RADIUS.card, bgcolor: t.panel, backdropFilter: 'blur(14px)', border: `1px solid ${t.border}`,
          boxShadow: t.shadowCard
        }}
      >
        <SectionHeader
          title='Energy Consumption'
          subtitle='Annual power usage overview'
          icon='ri-flashlight-line'
          accent={t.connected}
          onExpand={() => setExpanded(true)}
          rightSlot={<Chip label='2026' size='small' sx={{ bgcolor: t.connectedDim, color: t.connected, fontWeight: 700, fontSize: '.65rem', height: 22 }} />}
        />

        <Box sx={{ p: 1.6, flexShrink: 0 }}>
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: 'spring', stiffness: 260, damping: 22 }}>
            <Box sx={{ p: 1.4, borderRadius: RADIUS.cardInner, border: `1px solid ${t.border}`, background: `linear-gradient(135deg, ${t.connectedDim}, transparent)`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Box>
                <Typography sx={{ fontSize: '.58rem', color: t.textMuted, textTransform: 'uppercase' }}>Total Consumption</Typography>
                <Typography sx={{ fontWeight: 800, fontSize: '1.1rem', color: t.text, display: 'flex', alignItems: 'baseline', gap: 0.5 }}>
                  <AnimatedNumber value={491075} />
                  <Box component='span' sx={{ fontSize: '.6rem', color: t.textMuted, fontWeight: 500 }}>kWh</Box>
                </Typography>
              </Box>
              <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
                <Chip size='small' label='+8.4%' sx={{ bgcolor: t.onDim, color: t.on, fontWeight: 700, fontSize: '.62rem', height: 22 }} />
              </motion.div>
            </Box>
          </motion.div>
        </Box>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35, duration: 0.5 }}>
          <Box sx={{ px: 1.6, flexShrink: 0 }}>
            <AppReactApexCharts type='area' height={130} width='100%' options={buildOptions(130)} series={series} />
          </Box>
        </motion.div>

        <Box sx={{ flex: 1, minHeight: 0, overflowY: 'auto', px: 1.6, pb: 1.6, pt: 1 }}>
          <StatGrid dense />
        </Box>
      </MotionCard>

      <ExpandModal open={expanded} onClose={() => setExpanded(false)} title='Energy Consumption' subtitle='Annual power usage overview'>
        <AppReactApexCharts type='area' height={320} width='100%' options={buildOptions(320)} series={series} />
        <Box sx={{ mt: 2.5 }}>
          <StatGrid />
        </Box>
      </ExpandModal>
    </>
  )
}

export default EnergyConsumption