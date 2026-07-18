


// 'use client'

// import Card from '@mui/material/Card'
// import Box from '@mui/material/Box'
// import Typography from '@mui/material/Typography'
// import Grid from '@mui/material/Grid'
// import ButtonBase from '@mui/material/ButtonBase'

// import { DASHBOARD_CARD_HEIGHT, RADIUS, useDashboardTokens } from './ui/tokens'
// import SectionHeader from './ui/SectionHeader'

// type ActionType = { label: string; icon: string; color: string }

// const actions: ActionType[] = [
//   { label: 'Add CCMS', icon: 'ri-add-circle-line', color: '#26a69a' },
//   { label: 'Emergency ON', icon: 'ri-flashlight-line', color: '#22C55E' },
//   { label: 'Emergency OFF', icon: 'ri-flashlight-off-line', color: '#F04438' },
//   { label: 'Export Data', icon: 'ri-download-2-line', color: '#38BDF8' },
//   { label: 'Manual Mode', icon: 'ri-settings-3-line', color: '#A855F7' },
//   { label: 'Schedule', icon: 'ri-time-line', color: '#F5A623' },
//   { label: 'Complaints', icon: 'ri-customer-service-2-line', color: '#8d6e63' },
//   { label: 'Refresh', icon: 'ri-refresh-line', color: '#9AA4B5' }
// ]

// const QuickActions = () => {
//   const t = useDashboardTokens()

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
//       <SectionHeader title='Quick Actions' subtitle='Frequently used controls' icon='ri-flashlight-line' accent={t.off} />

//       <Box sx={{ flex: 1, minHeight: 0, overflowY: 'auto', p: 2.5 }}>
//         <Grid container spacing={2}>
//           {actions.map(action => (
//             <Grid size={{ xs: 6 }} key={action.label}>
//               <ButtonBase
//                 sx={{
//                   width: '100%',
//                   height: '100%',
//                   borderRadius: RADIUS.cardInner,
//                   overflow: 'hidden',
//                   border: `1px solid ${t.border}`,
//                   bgcolor: t.surface,
//                   transition: '.3s',
//                   '&:hover': { transform: 'translateY(-6px)', borderColor: t.borderStrong, boxShadow: t.shadowCard }
//                 }}
//               >
//                 <Box
//                   sx={{
//                     position: 'relative',
//                     width: '100%',
//                     p: 2,
//                     display: 'flex',
//                     flexDirection: 'column',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     gap: 1.2,
//                     '&::before': { content: '""', position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, bgcolor: action.color }
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       width: 48,
//                       height: 48,
//                       borderRadius: 3,
//                       bgcolor: `${action.color}22`,
//                       display: 'flex',
//                       justifyContent: 'center',
//                       alignItems: 'center',
//                       boxShadow: `0 0 16px ${action.color}30`,
//                       transition: '.25s',
//                       '.MuiButtonBase-root:hover &': { transform: 'scale(1.08)' }
//                     }}
//                   >
//                     <i className={action.icon} style={{ fontSize: 24, color: action.color }} />
//                   </Box>

//                   <Typography sx={{ fontSize: '.76rem', fontWeight: 700, textAlign: 'center', lineHeight: 1.3, color: t.text }}>
//                     {action.label}
//                   </Typography>
//                   <Typography sx={{ fontSize: '.64rem', color: t.textMuted }}>Tap to open</Typography>
//                 </Box>
//               </ButtonBase>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>

//       <Box
//         sx={{
//           flexShrink: 0,
//           px: 2.5,
//           py: 2,
//           borderTop: `1px solid ${t.border}`,
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           flexWrap: 'wrap',
//           gap: 1
//         }}
//       >
//         <Typography sx={{ fontSize: '.75rem', color: t.textMuted }}>8 quick actions available</Typography>
//         <Box
//           sx={{
//             display: 'flex',
//             alignItems: 'center',
//             gap: 0.5,
//             color: t.off,
//             fontWeight: 700,
//             cursor: 'pointer',
//             transition: '.25s',
//             '&:hover': { transform: 'translateX(4px)' }
//           }}
//         >
//           <Typography sx={{ fontWeight: 700, fontSize: '.82rem' }}>Manage Actions</Typography>
//           <i className='ri-arrow-right-line' style={{ fontSize: 18 }} />
//         </Box>
//       </Box>
//     </Card>
//   )
// }

// export default QuickActions




'use client'

import { motion } from 'framer-motion'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import ButtonBase from '@mui/material/ButtonBase'

import { DASHBOARD_CARD_HEIGHT, RADIUS, useDashboardTokens } from '../ui/tokens'
import SectionHeader from '../ui/SectionHeader'
import { cardHoverProps, staggerContainer, fadeUpItem, tileHoverProps } from '../ui/motion'

const MotionCard = motion(Card)
const MotionButtonBase = motion(ButtonBase)

type ActionType = { label: string; icon: string; color: string }

const actions: ActionType[] = [
  { label: 'Add CCMS', icon: 'ri-add-circle-line', color: '#26a69a' },
  { label: 'Emergency ON', icon: 'ri-flashlight-line', color: '#22C55E' },
  { label: 'Emergency OFF', icon: 'ri-flashlight-off-line', color: '#F04438' },
  { label: 'Export Data', icon: 'ri-download-2-line', color: '#38BDF8' },
  { label: 'Manual Mode', icon: 'ri-settings-3-line', color: '#A855F7' },
  { label: 'Schedule', icon: 'ri-time-line', color: '#F5A623' },
  { label: 'Complaints', icon: 'ri-customer-service-2-line', color: '#8d6e63' },
  { label: 'Refresh', icon: 'ri-refresh-line', color: '#9AA4B5' }
]

const QuickActions = () => {
  const t = useDashboardTokens()

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
      <SectionHeader title='Quick Actions' subtitle='Frequently used controls' icon='ri-flashlight-line' accent={t.off} />

      <Box sx={{ flex: 1, minHeight: 0, overflowY: 'auto', p: 2.5 }}>
        <Grid container spacing={2} component={motion.div} variants={staggerContainer} initial='hidden' animate='show'>
          {actions.map(action => (
            <Grid size={{ xs: 3 }} key={action.label} component={motion.div} variants={fadeUpItem}>
              <MotionButtonBase
                {...tileHoverProps}
                sx={{
                  width: '100%',
                  height: '100%',
                  borderRadius: RADIUS.cardInner,
                  overflow: 'hidden',
                  border: `1px solid ${t.border}`,
                  bgcolor: t.surface
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 1.2,
                    '&::before': { content: '""', position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, bgcolor: action.color }
                  }}
                >
                  <Box
                    sx={{
                      width: 18,
                      height: 18,
                      borderRadius: 3,
                      bgcolor: `${action.color}22`,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      boxShadow: `0 0 16px ${action.color}30`
                    }}
                  >
                    <i className={action.icon} style={{ fontSize: 24, color: action.color }} />
                  </Box>

                  <Typography sx={{ fontSize: '.76rem', fontWeight: 700, textAlign: 'center', lineHeight: 1.3, color: t.text }}>
                    {action.label}
                  </Typography>
                  <Typography sx={{ fontSize: '.64rem', color: t.textMuted }}>Tap to open</Typography>
                </Box>
              </MotionButtonBase>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ flexShrink: 0, px: 2.5, py: 2, borderTop: `1px solid ${t.border}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 1 }}>
        <Typography sx={{ fontSize: '.75rem', color: t.textMuted }}>8 quick actions available</Typography>
        <motion.div whileHover={{ x: 4 }} style={{ display: 'flex', alignItems: 'center', gap: 4, color: t.off, fontWeight: 700, cursor: 'pointer' }}>
          <Typography sx={{ fontWeight: 700, fontSize: '.82rem' }}>Manage Actions</Typography>
          <i className='ri-arrow-right-line' style={{ fontSize: 18 }} />
        </motion.div>
      </Box>
    </MotionCard>
  )
}

export default QuickActions