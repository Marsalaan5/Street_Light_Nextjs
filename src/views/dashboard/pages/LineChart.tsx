

// 'use client'

// // Next Imports
// import dynamic from 'next/dynamic'

// // MUI Imports
// import Card from '@mui/material/Card'
// import Box from '@mui/material/Box'
// import Typography from '@mui/material/Typography'

// import type { ApexOptions } from 'apexcharts'

// import { useDashboardTokens } from './ui/tokens'

// const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'))

// const series = [{ data: [0, 20, 5, 30, 15, 45] }]

// const LineChart = () => {
//   const t = useDashboardTokens()
//   const primaryColor = t.connected

//   const options: ApexOptions = {
//     chart: { parentHeightOffset: 0, toolbar: { show: false }, background: 'transparent' },
//     tooltip: { enabled: false },
//     grid: {
//       strokeDashArray: 6,
//       borderColor: t.border,
//       xaxis: { lines: { show: true } },
//       yaxis: { lines: { show: false } },
//       padding: { top: -10, left: -7, right: 5, bottom: 5 }
//     },
//     stroke: { width: 2, lineCap: 'butt', curve: 'straight' },
//     colors: [primaryColor],
//     markers: {
//       size: 5,
//       offsetY: 4,
//       offsetX: -2,
//       strokeWidth: 2,
//       colors: ['transparent'],
//       strokeColors: 'transparent',
//       discrete: [
//         {
//           size: 4.5,
//           seriesIndex: 0,
//           strokeColor: primaryColor,
//           fillColor: t.surfaceSolid,
//           dataPointIndex: series[0].data.length - 1
//         }
//       ]
//     },
//     xaxis: { labels: { show: false }, axisTicks: { show: false }, axisBorder: { show: false } },
//     yaxis: { labels: { show: false } }
//   }

//   return (
//     <Card
//       sx={{
//         borderRadius: '12px',
//         overflow: 'hidden',
//         bgcolor: t.panel,
//         backdropFilter: 'blur(14px)',
//         border: `1px solid ${t.border}`,
//         boxShadow: t.shadowCard
//       }}
//     >
//       <Box sx={{ px: 1.5, py: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: `1px solid ${t.border}` }}>
//         <Typography sx={{ color: t.text, fontWeight: 700, fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
//           Total CCMS
//         </Typography>
//         <Box
//           sx={{
//             width: 28,
//             height: 28,
//             borderRadius: '50%',
//             bgcolor: t.connectedDim,
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             boxShadow: `0 0 10px ${t.connected}40`
//           }}
//         >
//           <i className='ri-line-chart-line' style={{ fontSize: 14, color: t.connected }} />
//         </Box>
//       </Box>

//       <Box sx={{ px: 1.5, pt: 1, pb: 1.2 }}>
//         <Typography sx={{ fontSize: '1.35rem', fontWeight: 700, color: t.text, lineHeight: 1.2 }}>$86.4k</Typography>
//         <AppReactApexCharts type='line' height={70} width='100%' options={options} series={series} />
//       </Box>
//     </Card>
//   )
// }

// export default LineChart