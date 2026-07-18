
// 'use client'

// import { useMemo, useState } from 'react'

// import dynamic from 'next/dynamic'

// import Box from '@mui/material/Box'
// import Card from '@mui/material/Card'
// import CardContent from '@mui/material/CardContent'
// import Chip from '@mui/material/Chip'
// import Tab from '@mui/material/Tab'
// import Tabs from '@mui/material/Tabs'
// import Typography from '@mui/material/Typography'

// import UpDistrictMap from '@/components/UpDistrictMap'
// import upDistrictsGeo from '@/data/up-districts.json'

// import {
//   buildCcmsPieStats,
//   buildDistrictSummaries,
//   buildStreetLightPieStats,
//   resolveDistrictName
// } from '@/utils/dashboardTransforms'

// import type { DistrictSummary, MasterDeviceRecord, PieStats } from '@/types/dashboard'

// const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

// // ─── Constants ───────────────────────────────────────────────────────────────

// const PIE_COLORS = {
//   ccms_on: '#3CB371',
//   ccms_off: '#E8521C',
//   signal_loss: '#BDBDBD',
//   power_cut: '#E0B400'
// }

// const PIE_LABELS = ['CCMS On', 'CCMS Off', 'Signal Loss', 'Power Cut']

// const STATUS_CHIPS = [
//   { label: 'CCMS On', color: PIE_COLORS.ccms_on },
//   { label: 'CCMS Off', color: PIE_COLORS.ccms_off },
//   { label: 'Signal Loss', color: PIE_COLORS.signal_loss },
//   { label: 'Power Cut', color: PIE_COLORS.power_cut }
// ]

// // ─── Shared glass card sx ─────────────────────────────────────────────────────

// const glassCardSx = {
//   borderRadius: 3,
//   background: 'rgba(255,255,255,0.08)',
//   backdropFilter: 'blur(14px)',
//   WebkitBackdropFilter: 'blur(14px)',
//   border: '0.5px solid rgba(255,255,255,0.18)',
//   boxShadow: '0 4px 32px rgba(0,0,0,0.18)'
// }

// // ─── Sub-components ──────────────────────────────────────────────────────────

// const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
//   <div className='mb-4'>
//     <Typography variant='h6' fontWeight={700} className='!text-white'>
//       {title}
//     </Typography>
//     {subtitle && (
//       <Typography variant='caption' className='!text-white/60'>
//         {subtitle}
//       </Typography>
//     )}
//   </div>
// )

// const StatusLegend = () => (
//   <div className='flex flex-wrap gap-2 mt-3'>
//     {STATUS_CHIPS.map(({ label, color }) => (
//       <Chip
//         key={label}
//         label={label}
//         size='small'
//         sx={{
//           backgroundColor: `${color}22`,
//           color: color,
//           border: `1px solid ${color}55`,
//           fontWeight: 600,
//           fontSize: '0.7rem'
//         }}
//       />
//     ))}
//   </div>
// )

// const StatCard = ({ label, value, color }: { label: string; value: number; color: string }) => (
//   <div
//     className='flex-1 rounded-xl p-3 flex flex-col items-center gap-1'
//     style={{ background: `${color}15`, border: `1px solid ${color}30` }}
//   >
//     <Typography variant='h6' fontWeight={800} style={{ color }}>
//       {value}
//     </Typography>
//     <Typography variant='caption' className='!text-gray-300 text-center leading-tight'>
//       {label}
//     </Typography>
//   </div>
// )

// interface PieCardProps {
//   stats: PieStats
//   tab: 'ccms' | 'street-lights'
//   onTabChange: (v: 'ccms' | 'street-lights') => void
// }

// const PieCard = ({ stats, tab, onTabChange }: PieCardProps) => {
//   const series = stats ? [stats.ccms_on, stats.ccms_off, stats.signal_loss, stats.power_cut] : [0, 0, 0, 0]
//   const total = stats?.total ?? 0

//   return (
//     <Card className='h-full flex flex-col' elevation={0} sx={glassCardSx}>
//       <Tabs
//         value={tab}
//         onChange={(_, v) => onTabChange(v)}
//         variant='fullWidth'
//         sx={{
//           borderBottom: '1px solid rgba(255,255,255,0.12)',
//           '& .MuiTab-root': { fontSize: '0.78rem', fontWeight: 600, color: 'rgba(255,255,255,0.6)' },
//           '& .Mui-selected': { color: '#F4923A !important' },
//           '& .MuiTabs-indicator': { backgroundColor: '#F4923A' }
//         }}
//       >
//         <Tab value='ccms' label='CCMS Status' />
//         <Tab value='street-lights' label='Street Lights' />
//       </Tabs>

//       <CardContent className='flex flex-col gap-4 flex-1'>
//         {/* Stat summary row */}
//         <div className='flex gap-2 flex-wrap'>
//           <StatCard label='Total' value={total} color='#6366f1' />
//           <StatCard label='On' value={stats?.ccms_on ?? 0} color={PIE_COLORS.ccms_on} />
//           <StatCard label='Off' value={stats?.ccms_off ?? 0} color={PIE_COLORS.ccms_off} />
//           <StatCard label='Signal Loss' value={stats?.signal_loss ?? 0} color={PIE_COLORS.signal_loss} />
//           <StatCard label='Power Cut' value={stats?.power_cut ?? 0} color={PIE_COLORS.power_cut} />
//         </div>

//         {/* Chart */}
//         <div className='flex-1 min-h-[280px]'>
//           {total === 0 ? (
//             <div className='flex items-center justify-center h-full text-gray-400'>
//               <div className='text-center'>
//                 <Typography variant='h1' className='!text-6xl'>
//                   📊
//                 </Typography>
//                 <Typography variant='body2' className='mt-2 !text-white/60'>
//                   No data available yet
//                 </Typography>
//                 <Typography variant='caption' className='!text-white/40'>
//                   Connect your API to see live stats
//                 </Typography>
//               </div>
//             </div>
//           ) : (
//             <ReactApexChart
//               type='donut'
//               height={300}
//               series={series}
//               options={{
//                 labels: PIE_LABELS,
//                 colors: [PIE_COLORS.ccms_on, PIE_COLORS.ccms_off, PIE_COLORS.signal_loss, PIE_COLORS.power_cut],
//                 legend: {
//                   position: 'bottom',
//                   fontSize: '13px',
//                   labels: { colors: ['#fff', '#fff', '#fff', '#fff'] }
//                 },
//                 dataLabels: {
//                   enabled: true,
//                   formatter: (val: number) => `${val.toFixed(1)}%`
//                 },
//                 plotOptions: {
//                   pie: {
//                     donut: {
//                       size: '60%',
//                       labels: {
//                         show: true,
//                         total: {
//                           show: true,
//                           label: 'Total',
//                           fontSize: '14px',
//                           fontWeight: 600,
//                           color: '#fff'
//                         }
//                       }
//                     }
//                   }
//                 },
//                 stroke: { width: 2 },
//                 tooltip: { y: { formatter: (val: number) => `${val} units` } }
//               }}
//             />
//           )}
//         </div>
//       </CardContent>
//     </Card>
//   )
// }

// // ─── Main Component ──────────────────────────────────────────────────────────

// const Home = () => {
//   const [tab, setTab] = useState<'ccms' | 'street-lights'>('ccms')
//   const [records] = useState<MasterDeviceRecord[]>([])

//   const districtMap = useMemo(() => {
//     const summaries: DistrictSummary[] = buildDistrictSummaries(records)
//     const resolved: Record<string, DistrictSummary> = {}

//     summaries.forEach(summary => {
//       const districtName = resolveDistrictName(summary.cityTitle, upDistrictsGeo)

//       if (districtName) {
//         resolved[districtName] = { ...summary, districtName }
//       }
//     })

//     return resolved
//   }, [records])

//   const highlightedDistricts = useMemo(() => Object.keys(districtMap), [districtMap])
//   const ccmsStats = useMemo(() => buildCcmsPieStats(records), [records])
//   const streetLightStats = useMemo(() => buildStreetLightPieStats(records), [records])
//   const activeStats = tab === 'ccms' ? ccmsStats : streetLightStats

//   return (
//     <div
//       className='min-h-screen p-4 md:p-6'
//     >
//       {/* Page header */}
//       <div className='mb-6'>
//         <Typography variant='h6' fontWeight={800}>
//           Dashboard Overview
//         </Typography>
//         <Typography variant='body2'>
//           Nagar Nigam Aligarh — Real-time CCMS & Street Light Monitoring
//         </Typography>
//       </div>

//       <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
//         {/* ── Map Card ── */}
//         <Card className='overflow-visible' elevation={0} sx={{ ...glassCardSx, minHeight: 460 }}>
//           {/* Header section with night road bg */}
//           <div
//             className='relative px-5 py-4 rounded-t-xl overflow-hidden'
//             style={{
//               backgroundImage: "url('/images/dashboard/night-road-bg.jpg')",
//               backgroundSize: 'cover',
//               backgroundPosition: 'center'
//             }}
//           >
//             {/* Dark overlay */}
//             <div className='absolute inset-0 bg-black/55 rounded-t-xl' />
//             <div className='relative z-10'>
//               <SectionHeader
//                 title='Uttar Pradesh — District Map'
//                 subtitle='Highlighted districts have active CCMS deployments'
//               />
//               <StatusLegend />
//             </div>
//           </div>

//           {/* Map content */}
//           <CardContent className='p-4'>
//             <UpDistrictMap geoData={upDistrictsGeo} highlighted={highlightedDistricts} districtData={districtMap} />
//           </CardContent>
//         </Card>

//         {/* ── Pie / Donut Chart Card ── */}
//         <PieCard stats={activeStats} tab={tab} onTabChange={setTab} />
//       </div>
//     </div>
//   )
// }

// export default Home
