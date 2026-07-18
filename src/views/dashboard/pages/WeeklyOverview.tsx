// // 'use client'

// // // Next Imports
// // import dynamic from 'next/dynamic'

// // // MUI Imports
// // import Card from '@mui/material/Card'
// // import Button from '@mui/material/Button'
// // import { useTheme } from '@mui/material/styles'
// // import CardHeader from '@mui/material/CardHeader'
// // import Typography from '@mui/material/Typography'
// // import CardContent from '@mui/material/CardContent'

// // // Third Party Imports
// // import type { ApexOptions } from 'apexcharts'

// // // Components Imports
// // import OptionsMenu from '@core/components/option-menu'

// // // Styled Component Imports
// // const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'))

// // const WeeklyOverview = () => {
// //   // Hooks
// //   const theme = useTheme()

// //   // Vars
// //   const divider = 'var(--mui-palette-divider)'
// //   const disabled = 'var(--mui-palette-text-disabled)'

// //   const options: ApexOptions = {
// //     chart: {
// //       parentHeightOffset: 0,
// //       toolbar: { show: false }
// //     },
// //     plotOptions: {
// //       bar: {
// //         borderRadius: 7,
// //         distributed: true,
// //         columnWidth: '40%'
// //       }
// //     },
// //     stroke: {
// //       width: 2,
// //       colors: ['var(--mui-palette-background-paper)']
// //     },
// //     legend: { show: false },
// //     grid: {
// //       xaxis: { lines: { show: false } },
// //       strokeDashArray: 7,
// //       padding: { left: -9, top: -20, bottom: 13 },
// //       borderColor: divider
// //     },
// //     dataLabels: { enabled: false },
// //     colors: [
// //       'var(--mui-palette-customColors-trackBg)',
// //       'var(--mui-palette-customColors-trackBg)',
// //       'var(--mui-palette-customColors-trackBg)',
// //       'var(--mui-palette-primary-main)',
// //       'var(--mui-palette-customColors-trackBg)',
// //       'var(--mui-palette-customColors-trackBg)'
// //     ],
// //     states: {
// //       hover: {
// //         filter: { type: 'none' }
// //       },
// //       active: {
// //         filter: { type: 'none' }
// //       }
// //     },
// //     xaxis: {
// //       categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
// //       tickPlacement: 'on',
// //       labels: { show: false },
// //       axisTicks: { show: false },
// //       axisBorder: { show: false }
// //     },
// //     yaxis: {
// //       show: true,
// //       tickAmount: 4,
// //       labels: {
// //         offsetY: 2,
// //         offsetX: -17,
// //         style: { colors: disabled, fontSize: theme.typography.body2.fontSize as string },
// //         formatter: value => `${value > 999 ? `${(value / 1000).toFixed(0)}` : value}k`
// //       }
// //     }
// //   }

// //   return (
// //     <Card>
// //       <CardHeader
// //         title='Weekly Overview'
// //         action={<OptionsMenu iconClassName='text-textPrimary' options={['Refresh', 'Update', 'Delete']} />}
// //       />
// //       <CardContent sx={{ '& .apexcharts-xcrosshairs.apexcharts-active': { opacity: 0 } }}>
// //         <AppReactApexCharts
// //           type='bar'
// //           height={206}
// //           width='100%'
// //           series={[{ name: 'Sales', data: [37, 57, 45, 75, 57, 40, 65] }]}
// //           options={options}
// //         />
// //         <div className='flex items-center mbe-4 gap-4'>
// //           <Typography variant='h4'>45%</Typography>
// //           <Typography>Your sales performance is 45% 😎 better compared to last month</Typography>
// //         </div>
// //         <Button fullWidth variant='contained'>
// //           Details
// //         </Button>
// //       </CardContent>
// //     </Card>
// //   )
// // }

// // export default WeeklyOverview

// 'use client'

// // Next Imports
// import dynamic from 'next/dynamic'

// // MUI Imports
// import Card from '@mui/material/Card'
// import Box from '@mui/material/Box'
// import Button from '@mui/material/Button'
// import { useTheme } from '@mui/material/styles'
// import Typography from '@mui/material/Typography'

// // Third Party Imports
// import type { ApexOptions } from 'apexcharts'

// // Styled Component Imports
// const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'))

// const WeeklyOverview = () => {
//   const theme = useTheme()

//   const divider = 'var(--mui-palette-divider)'
//   const disabled = 'var(--mui-palette-text-disabled)'

//   const options: ApexOptions = {
//     chart: { parentHeightOffset: 0, toolbar: { show: false } },
//     plotOptions: {
//       bar: { borderRadius: 5, distributed: true, columnWidth: '40%' }
//     },
//     stroke: { width: 2, colors: ['var(--mui-palette-background-paper)'] },
//     legend: { show: false },
//     grid: {
//       xaxis: { lines: { show: false } },
//       strokeDashArray: 7,
//       padding: { left: -9, top: -15, bottom: 5 },
//       borderColor: divider
//     },
//     dataLabels: { enabled: false },
//     colors: [
//       'var(--mui-palette-customColors-trackBg)',
//       'var(--mui-palette-customColors-trackBg)',
//       'var(--mui-palette-customColors-trackBg)',
//       '#26a69a',
//       'var(--mui-palette-customColors-trackBg)',
//       'var(--mui-palette-customColors-trackBg)'
//     ],
//     states: { hover: { filter: { type: 'none' } }, active: { filter: { type: 'none' } } },
//     xaxis: {
//       categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
//       labels: { show: false },
//       axisTicks: { show: false },
//       axisBorder: { show: false }
//     },
//     yaxis: {
//       show: true,
//       tickAmount: 3,
//       labels: {
//         offsetY: 2,
//         offsetX: -17,
//         style: { colors: disabled, fontSize: '10px' },
//         formatter: value => `${value > 999 ? `${(value / 1000).toFixed(0)}` : value}k`
//       }
//     }
//   }

//   return (
//     <Card sx={{ borderRadius: '6px', overflow: 'hidden', boxShadow: '0 2px 6px rgba(0,0,0,0.12)' }}>
//       {/* Header bar */}
//       <Box
//         sx={{
//           bgcolor: '#26a69a',
//           px: 1.5,
//           py: 0.6,
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'space-between'
//         }}
//       >
//         <Typography
//           sx={{
//             color: '#fff',
//             fontWeight: 600,
//             fontSize: '0.7rem',
//             textTransform: 'uppercase',
//             letterSpacing: '0.04em'
//           }}
//         >
//           Weekly Overview
//         </Typography>
//         <Box
//           sx={{
//             width: 28,
//             height: 28,
//             borderRadius: '50%',
//             bgcolor: 'rgba(255,255,255,0.2)',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center'
//           }}
//         >
//           <i className='ri-bar-chart-2-line' style={{ fontSize: 14, color: '#fff' }} />
//         </Box>
//       </Box>

//       {/* Chart */}
//       <Box
//         sx={{
//           px: 1.5,
//           pt: 0.5,
//           pb: 0.5,
//           bgcolor: '#fff',
//           '& .apexcharts-xcrosshairs.apexcharts-active': { opacity: 0 }
//         }}
//       >
//         <AppReactApexCharts
//           type='bar'
//           height={120}
//           width='100%'
//           series={[{ name: 'Sales', data: [37, 57, 45, 75, 57, 40, 65] }]}
//           options={options}
//         />
//         <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
//           <Typography sx={{ fontSize: '1rem', fontWeight: 700, color: '#2d2d2d' }}>45%</Typography>
//           <Typography sx={{ fontSize: '0.65rem', color: '#888' }}>Sales 45% better vs last month 😎</Typography>
//         </Box>
//         <Button
//           fullWidth
//           variant='contained'
//           size='small'
//           sx={{ fontSize: '0.65rem', py: 0.3, bgcolor: '#26a69a', '&:hover': { bgcolor: '#1e8e84' } }}
//         >
//           Details
//         </Button>
//       </Box>
//     </Card>
//   )
// }

// export default WeeklyOverview




'use client'

// Next Imports
import dynamic from 'next/dynamic'

// MUI Imports
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

// Third Party Imports
import type { ApexOptions } from 'apexcharts'

import { useDashboardTokens } from './ui/tokens'

const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'))

const WeeklyOverview = () => {
  const t = useDashboardTokens()

  const options: ApexOptions = {
    chart: { parentHeightOffset: 0, toolbar: { show: false }, background: 'transparent' },
    plotOptions: { bar: { borderRadius: 5, distributed: true, columnWidth: '40%' } },
    stroke: { width: 2, colors: [t.surfaceSolid] },
    legend: { show: false },
    grid: {
      xaxis: { lines: { show: false } },
      strokeDashArray: 7,
      padding: { left: -9, top: -15, bottom: 5 },
      borderColor: t.border
    },
    dataLabels: { enabled: false },
    colors: [t.surface, t.surface, t.surface, t.energy, t.surface, t.surface],
    states: { hover: { filter: { type: 'none' } }, active: { filter: { type: 'none' } } },
    xaxis: {
      categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false }
    },
    yaxis: {
      show: true,
      tickAmount: 3,
      labels: {
        offsetY: 2,
        offsetX: -17,
        style: { colors: t.textMuted, fontSize: '10px' },
        formatter: value => `${value > 999 ? `${(value / 1000).toFixed(0)}` : value}k`
      }
    }
  }

  return (
    <Card
      sx={{
        borderRadius: '12px',
        overflow: 'hidden',
        bgcolor: t.panel,
        backdropFilter: 'blur(14px)',
        border: `1px solid ${t.border}`,
        boxShadow: t.shadowCard
      }}
    >
      <Box sx={{ px: 1.5, py: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: `1px solid ${t.border}` }}>
        <Typography sx={{ color: t.text, fontWeight: 700, fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
          Weekly Overview
        </Typography>
        <Box
          sx={{
            width: 28,
            height: 28,
            borderRadius: '50%',
            bgcolor: t.energyDim,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: `0 0 10px ${t.energy}40`
          }}
        >
          <i className='ri-bar-chart-2-line' style={{ fontSize: 14, color: t.energy }} />
        </Box>
      </Box>

      <Box sx={{ px: 1.5, pt: 1, pb: 1 }}>
        <AppReactApexCharts
          type='bar'
          height={120}
          width='100%'
          series={[{ name: 'Sales', data: [37, 57, 45, 75, 57, 40, 65] }]}
          options={options}
        />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
          <Typography sx={{ fontSize: '1rem', fontWeight: 700, color: t.text }}>45%</Typography>
          <Typography sx={{ fontSize: '0.65rem', color: t.textMuted }}>Sales 45% better vs last month</Typography>
        </Box>
        <Button
          fullWidth
          variant='contained'
          size='small'
          sx={{ fontSize: '0.65rem', py: 0.3, bgcolor: t.energy, color: '#1A1200', '&:hover': { bgcolor: '#D9911E' } }}
        >
          Details
        </Button>
      </Box>
    </Card>
  )
}

export default WeeklyOverview