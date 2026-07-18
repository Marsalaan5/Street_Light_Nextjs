

// // 'use client'

// // import Card from '@mui/material/Card'
// // import Box from '@mui/material/Box'
// // import Typography from '@mui/material/Typography'
// // import Chip from '@mui/material/Chip'

// // import { useDashboardTokens, RADIUS } from './ui/tokens'

// // type AlarmType = {
// //   type: 'critical' | 'warning' | 'info'
// //   title: string
// //   location: string
// //   time: string
// //   icon: string
// // }

// // const alarms: AlarmType[] = [
// //   {
// //     type: 'critical',
// //     title: 'Signal Loss',
// //     location: 'Zone 3 – Alpha School',
// //     time: '2 min ago',
// //     icon: 'ri-signal-wifi-off-line'
// //   },

// //   {
// //     type: 'info',
// //     title: 'Manual Override',
// //     location: 'Zone 1 – Ward 12',
// //     time: '34 min ago',
// //     icon: 'ri-settings-3-line'
// //   },
// //   {
// //     type: 'critical',
// //     title: 'Door Open',
// //     location: 'Zone 3 – Parshad Ji Wali',
// //     time: '41 min ago',
// //     icon: 'ri-door-open-line'
// //   },
// //   {
// //     type: 'warning',
// //     title: 'Low Voltage',
// //     location: 'Zone 4 – Sector 9',
// //     time: '52 min ago',
// //     icon: 'ri-battery-low-line'
// //   }
// // ]

// // // bg is now an 8-digit alpha hex of `color` instead of a flat pastel, so it
// // // reads correctly on a dark card too — same trick used for the status pills.
// // const typeConfig = {
// //   critical: { color: '#ef5350', bg: '#ef53501F', label: 'Critical' },
// //   warning: { color: '#ffa726', bg: '#ffa7261F', label: 'Warning' },
// //   info: { color: '#29b6f6', bg: '#29b6f61F', label: 'Info' }
// // }

// // const RecentAlarms = () => {
// //   const t = useDashboardTokens()

// //   const criticalCount = alarms.filter(a => a.type === 'critical').length

// //   return (
// //     <Card
// //       sx={{
// //         height: DASHBOARD_CARD_HEIGHT,
// //         display: 'flex',
// //         flexDirection: 'column',
// //         borderRadius: RADIUS.card,
// //         bgcolor: t.surfaceSolid,
// //         border: `1px solid ${t.border}`,
// //         boxShadow: t.shadowCard,
// //         overflow: 'hidden'
// //       }}
// //     >
// //       {/* Header — fixed brand color in both themes */}
// //       <Box
// //         sx={{
// //           flexShrink: 0,
// //           position: 'relative',

// //           overflow: 'hidden',

// //           px: 2.5,

// //           py: 2,

// //           display: 'flex',

// //           justifyContent: 'space-between',

// //           alignItems: 'center',

// //           background:
// //             'linear-gradient(135deg,#dc2626 0%,#ef4444 55%,#f87171 100%)',

// //           '&::before': {
// //             content: '""',
// //             position: 'absolute',
// //             right: -30,
// //             top: -30,
// //             width: 110,
// //             height: 110,
// //             borderRadius: '50%',
// //             bgcolor: 'rgba(255,255,255,.08)'
// //           },

// //           '&::after': {
// //             content: '""',
// //             position: 'absolute',
// //             bottom: -30,
// //             right: 20,
// //             width: 70,
// //             height: 70,
// //             borderRadius: '50%',
// //             bgcolor: 'rgba(255,255,255,.05)'
// //           }
// //         }}
// //       >
// //         <Box sx={{ zIndex: 1 }}>
// //           <Typography
// //             sx={{
// //               color: '#fff',
// //               fontWeight: 700,
// //               fontSize: '1rem'
// //             }}
// //           >
// //             Recent Alarms
// //           </Typography>

// //           <Typography
// //             sx={{
// //               mt: .3,
// //               color: 'rgba(255,255,255,.8)',
// //               fontSize: '.72rem'
// //             }}
// //           >
// //             Live fault monitoring
// //           </Typography>
// //         </Box>

// //         <Box
// //           sx={{
// //             display: 'flex',
// //             alignItems: 'center',
// //             gap: 1,
// //             zIndex: 1
// //           }}
// //         >
// //           <Chip
// //             label={`${criticalCount} Critical`}
// //             sx={{
// //               bgcolor: 'rgba(255,255,255,.16)',
// //               color: '#fff',
// //               fontWeight: 700,

// //               '& .MuiChip-label': {
// //                 px: 1
// //               }
// //             }}
// //           />

// //           <Box
// //             sx={{
// //               width: 48,
// //               height: 48,

// //               borderRadius: 3,

// //               bgcolor: 'rgba(255,255,255,.15)',

// //               border: '1px solid rgba(255,255,255,.18)',

// //               backdropFilter: 'blur(10px)',

// //               display: 'flex',

// //               justifyContent: 'center',

// //               alignItems: 'center'
// //             }}
// //           >
// //             <i
// //               className="ri-alarm-warning-line"
// //               style={{
// //                 color: '#fff',
// //                 fontSize: 22
// //               }}
// //             />
// //           </Box>
// //         </Box>
// //       </Box>

// //       {/* Alarm feed — theme-aware */}
// //       <Box
// //         sx={{
// //           flex: 1,
// //           minHeight: 0,
// //           overflowY: 'auto',

// //           px: 2.5,
// //           pt: 2.5,
// //           pb: 1.5,

// //           display: 'flex',
// //           flexDirection: 'column',
// //           gap: 1.3
// //         }}
// //       >
// //         {alarms.map(alarm => {
// //           const cfg = typeConfig[alarm.type]

// //           return (
// //             <Box
// //               key={alarm.title}
// //               sx={{
// //                 position: 'relative',

// //                 borderRadius: RADIUS.cardInner,

// //                 bgcolor: t.surface,

// //                 border: `1px solid ${t.border}`,

// //                 overflow: 'hidden',

// //                 transition: '.25s',

// //                 '&:hover': {
// //                   transform: 'translateX(5px)',
// //                   boxShadow: t.shadowCard
// //                 },

// //                 '&::before': {
// //                   content: '""',
// //                   position: 'absolute',
// //                   left: 0,
// //                   top: 0,
// //                   bottom: 0,
// //                   width: 4,
// //                   bgcolor: cfg.color
// //                 }
// //               }}
// //             >
// //               <Box
// //                 sx={{
// //                   display: 'flex',
// //                   alignItems: 'center',

// //                   gap: 2,

// //                   p: 1.5
// //                 }}
// //               >
// //                 <Box
// //                   sx={{
// //                     width: 42,
// //                     height: 42,

// //                     borderRadius: 3,

// //                     background: `linear-gradient(135deg, ${cfg.color}20, ${cfg.color}08)`,

// //                     border: `1px solid ${cfg.color}25`,

// //                     display: 'flex',

// //                     justifyContent: 'center',

// //                     alignItems: 'center',

// //                     flexShrink: 0
// //                   }}
// //                 >
// //                   <i
// //                     className={alarm.icon}
// //                     style={{
// //                       color: cfg.color,
// //                       fontSize: 20
// //                     }}
// //                   />
// //                 </Box>

// //                 <Box sx={{ flex: 1 }}>
// //                   <Typography
// //                     sx={{
// //                       fontWeight: 700,
// //                       fontSize: '.82rem'
// //                     }}
// //                   >
// //                     {alarm.title}
// //                   </Typography>

// //                   <Typography
// //                     sx={{
// //                       mt: .3,
// //                       fontSize: '.72rem',
// //                       color: 'text.secondary'
// //                     }}
// //                   >
// //                     {alarm.location}
// //                   </Typography>

// //                   <Typography
// //                     sx={{
// //                       mt: .4,
// //                       fontSize: '.68rem',
// //                       color: 'text.disabled'
// //                     }}
// //                   >
// //                     {alarm.time}
// //                   </Typography>
// //                 </Box>

// //                 <Chip
// //                   label={cfg.label}
// //                   size="small"
// //                   sx={{
// //                     height: 26,

// //                     fontWeight: 700,

// //                     borderRadius: 2,

// //                     bgcolor: cfg.bg,

// //                     color: cfg.color,

// //                     border: `1px solid ${cfg.color}30`,

// //                     '& .MuiChip-label': {
// //                       px: 1
// //                     }
// //                   }}
// //                 />
// //               </Box>
// //             </Box>
// //           )
// //         })}
// //       </Box>

// //       {/* Footer */}
// //       <Box
// //         sx={{

// //           flexShrink: 0,
// //           px: 2.5,

// //           py: 2,

// //           borderTop: `1px solid ${t.border}`,

// //           display: 'flex',

// //           justifyContent: 'space-between',

// //           alignItems: 'center'
// //         }}
// //       >
// //         <Typography
// //           sx={{
// //             fontSize: '.75rem',
// //             color: 'text.secondary'
// //           }}
// //         >
// //           Last updated just now
// //         </Typography>

// //         <Box
// //           sx={{
// //             display: 'flex',

// //             alignItems: 'center',

// //             gap: .5,

// //             color: '#ef4444',

// //             cursor: 'pointer',

// //             fontWeight: 700,

// //             transition: '.25s',

// //             '&:hover': {
// //               transform: 'translateX(4px)'
// //             }
// //           }}
// //         >
// //           <Typography
// //             sx={{
// //               fontWeight: 700,
// //               fontSize: '.82rem'
// //             }}
// //           >
// //             View All
// //           </Typography>

// //           <i
// //             className="ri-arrow-right-line"
// //             style={{
// //               fontSize: 18
// //             }}
// //           />
// //         </Box>
// //       </Box>

// //     </Card>
// //   )
// // }

// // export default RecentAlarms






// 'use client'

// import Card from '@mui/material/Card'
// import Box from '@mui/material/Box'
// import Typography from '@mui/material/Typography'
// import Chip from '@mui/material/Chip'

// import { DASHBOARD_CARD_HEIGHT, RADIUS, useDashboardTokens } from './ui/tokens'
// import SectionHeader from './ui/SectionHeader'

// type AlarmType = {
//   type: 'critical' | 'warning' | 'info'
//   title: string
//   location: string
//   time: string
//   icon: string
// }

// const alarms: AlarmType[] = [
//   { type: 'critical', title: 'Signal Loss', location: 'Zone 3 – Alpha School', time: '2 min ago', icon: 'ri-signal-wifi-off-line' },
//   { type: 'info', title: 'Manual Override', location: 'Zone 1 – Ward 12', time: '34 min ago', icon: 'ri-settings-3-line' },
//   { type: 'critical', title: 'Door Open', location: 'Zone 3 – Parshad Ji Wali', time: '41 min ago', icon: 'ri-door-open-line' },
//   { type: 'warning', title: 'Low Voltage', location: 'Zone 4 – Sector 9', time: '52 min ago', icon: 'ri-battery-low-line' }
// ]

// const RecentAlarms = () => {
//   const t = useDashboardTokens()

//   const typeConfig = {
//     critical: { color: t.signalLoss, bg: t.signalLossDim, label: 'Critical' },
//     warning: { color: t.energy, bg: t.energyDim, label: 'Warning' },
//     info: { color: t.connected, bg: t.connectedDim, label: 'Info' }
//   }

//   const criticalCount = alarms.filter(a => a.type === 'critical').length

//   return (
//     <Card
//       sx={{
//         height: DASHBOARD_CARD_HEIGHT,
//         display: 'flex',
//         flexDirection: 'column',
//         borderRadius: RADIUS.card,
//         bgcolor: t.panel,
//         backdropFilter: 'blur(14px)',
//         border: `1px solid ${t.border}`,
//         boxShadow: t.shadowCard,
//         overflow: 'hidden',
//         transition: 'all .3s ease',
//         '&:hover': { transform: 'translateY(-4px)', boxShadow: t.shadowLifted, borderColor: t.borderStrong }
//       }}
//     >
//       <SectionHeader
//         title='Recent Alarms'
//         subtitle='Live fault monitoring'
//         icon='ri-alarm-warning-line'
//         accent={t.signalLoss}
//         rightSlot={
//           <Chip label={`${criticalCount} Critical`} sx={{ bgcolor: t.signalLossDim, color: t.signalLoss, fontWeight: 700, '& .MuiChip-label': { px: 1 } }} />
//         }
//       />

//       <Box sx={{ flex: 1, minHeight: 0, overflowY: 'auto', px: 2.5, pt: 2.5, pb: 1.5, display: 'flex', flexDirection: 'column', gap: 1.3 }}>
//         {alarms.map(alarm => {
//           const cfg = typeConfig[alarm.type]

//           return (
//             <Box
//               key={alarm.title}
//               sx={{
//                 position: 'relative',
//                 borderRadius: RADIUS.cardInner,
//                 bgcolor: t.surface,
//                 border: `1px solid ${t.border}`,
//                 overflow: 'hidden',
//                 transition: '.25s',
//                 '&:hover': { transform: 'translateX(5px)', borderColor: t.borderStrong },
//                 '&::before': { content: '""', position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, bgcolor: cfg.color }
//               }}
//             >
//               <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 1.5 }}>
//                 <Box
//                   sx={{
//                     width: 42,
//                     height: 42,
//                     borderRadius: 3,
//                     background: `linear-gradient(135deg, ${cfg.color}30, ${cfg.color}10)`,
//                     border: `1px solid ${cfg.color}40`,
//                     display: 'flex',
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     flexShrink: 0
//                   }}
//                 >
//                   <i className={alarm.icon} style={{ color: cfg.color, fontSize: 20 }} />
//                 </Box>

//                 <Box sx={{ flex: 1 }}>
//                   <Typography sx={{ fontWeight: 700, fontSize: '.82rem', color: t.text }}>{alarm.title}</Typography>
//                   <Typography sx={{ mt: 0.3, fontSize: '.72rem', color: t.textMuted }}>{alarm.location}</Typography>
//                   <Typography sx={{ mt: 0.4, fontSize: '.68rem', color: t.textDisabled }}>{alarm.time}</Typography>
//                 </Box>

//                 <Chip
//                   label={cfg.label}
//                   size='small'
//                   sx={{
//                     height: 26,
//                     fontWeight: 700,
//                     borderRadius: 2,
//                     bgcolor: cfg.bg,
//                     color: cfg.color,
//                     border: `1px solid ${cfg.color}40`,
//                     '& .MuiChip-label': { px: 1 }
//                   }}
//                 />
//               </Box>
//             </Box>
//           )
//         })}
//       </Box>

//       <Box sx={{ flexShrink: 0, px: 2.5, py: 2, borderTop: `1px solid ${t.border}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//         <Typography sx={{ fontSize: '.75rem', color: t.textMuted }}>Last updated just now</Typography>
//         <Box
//           sx={{
//             display: 'flex',
//             alignItems: 'center',
//             gap: 0.5,
//             color: t.signalLoss,
//             cursor: 'pointer',
//             fontWeight: 700,
//             transition: '.25s',
//             '&:hover': { transform: 'translateX(4px)' }
//           }}
//         >
//           <Typography sx={{ fontWeight: 700, fontSize: '.82rem' }}>View All</Typography>
//           <i className='ri-arrow-right-line' style={{ fontSize: 18 }} />
//         </Box>
//       </Box>
//     </Card>
//   )
// }

// export default RecentAlarms



'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'

import { DASHBOARD_CARD_HEIGHT, RADIUS, useDashboardTokens } from '../ui/tokens'
import SectionHeader from '../ui/SectionHeader'
import { cardHoverProps, listStagger, listItem, pulseRing } from '../ui/motion'

const MotionCard = motion(Card)
const MotionBox = motion(Box)

type AlarmType = {
  type: 'critical' | 'warning' | 'info'
  title: string
  location: string
  time: string
  icon: string
}

const alarms: AlarmType[] = [
  { type: 'critical', title: 'Signal Loss', location: 'Zone 3 – Alpha School', time: '2 min ago', icon: 'ri-signal-wifi-off-line' },
  { type: 'info', title: 'Manual Override', location: 'Zone 1 – Ward 12', time: '34 min ago', icon: 'ri-settings-3-line' },
  { type: 'critical', title: 'Door Open', location: 'Zone 3 – Parshad Ji Wali', time: '41 min ago', icon: 'ri-door-open-line' },
  { type: 'warning', title: 'Low Voltage', location: 'Zone 4 – Sector 9', time: '52 min ago', icon: 'ri-battery-low-line' }
]

const RecentAlarms = () => {
  const t = useDashboardTokens()

  const typeConfig = {
    critical: { color: t.signalLoss, bg: t.signalLossDim, label: 'Critical' },
    warning: { color: t.energy, bg: t.energyDim, label: 'Warning' },
    info: { color: t.connected, bg: t.connectedDim, label: 'Info' }
  }

  const criticalCount = alarms.filter(a => a.type === 'critical').length

  return (
    <MotionCard
      {...cardHoverProps}
      sx={{
        // height: DASHBOARD_CARD_HEIGHT,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: RADIUS.card,
        bgcolor: t.panel,
        backdropFilter: 'blur(14px)',
        border: `1px solid ${t.border}`,
        boxShadow: t.shadowCard,
        overflow: 'hidden'
      }}
    >
      <SectionHeader
        title='Recent Alarms'
        subtitle='Live fault monitoring'
        icon='ri-alarm-warning-line'
        accent={t.signalLoss}
        rightSlot={
          <motion.div animate={{ scale: [1, 1.06, 1] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}>
            <Chip label={`${criticalCount} Critical`} sx={{ bgcolor: t.signalLossDim, color: t.signalLoss, fontWeight: 700, '& .MuiChip-label': { px: 1 } }} />
          </motion.div>
        }
      />

      <MotionBox
        variants={listStagger}
        initial='hidden'
        animate='show'
        sx={{ flex: 1, minHeight: 0, overflowY: 'auto', px: 2.5, pt: 2.5, pb: 1.5, display: 'flex', flexDirection: 'column', gap: 1.3 }}
      >
        <AnimatePresence>
          {alarms.map(alarm => {
            const cfg = typeConfig[alarm.type]

            return (
              <MotionBox
                key={alarm.title}
                variants={listItem}
                whileHover={{ x: 6 }}
                sx={{
                  position: 'relative',
                  borderRadius: RADIUS.cardInner,
                  bgcolor: t.surface,
                  border: `1px solid ${t.border}`,
                  overflow: 'hidden',
                  '&::before': { content: '""', position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, bgcolor: cfg.color }
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 1.5 }}>
                  <Box
                    sx={{
                      position: 'relative',
                      width: 42,
                      height: 42,
                      borderRadius: 3,
                      background: `linear-gradient(135deg, ${cfg.color}30, ${cfg.color}10)`,
                      border: `1px solid ${cfg.color}40`,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexShrink: 0
                    }}
                  >
                    {alarm.type === 'critical' && (
                      <motion.span
                        variants={pulseRing}
                        animate='show'
                        style={{
                          position: 'absolute',
                          inset: -4,
                          borderRadius: '50%',
                          border: `1.5px solid ${cfg.color}`
                        }}
                      />
                    )}
                    <i className={alarm.icon} style={{ color: cfg.color, fontSize: 20 }} />
                  </Box>

                  <Box sx={{ flex: 1 }}>
                    <Typography sx={{ fontWeight: 700, fontSize: '.82rem', color: t.text }}>{alarm.title}</Typography>
                    <Typography sx={{ mt: 0.3, fontSize: '.72rem', color: t.textMuted }}>{alarm.location}</Typography>
                    <Typography sx={{ mt: 0.4, fontSize: '.68rem', color: t.textDisabled }}>{alarm.time}</Typography>
                  </Box>

                  <Chip
                    label={cfg.label}
                    size='small'
                    sx={{
                      height: 26,
                      fontWeight: 700,
                      borderRadius: 2,
                      bgcolor: cfg.bg,
                      color: cfg.color,
                      border: `1px solid ${cfg.color}40`,
                      '& .MuiChip-label': { px: 1 }
                    }}
                  />
                </Box>
              </MotionBox>
            )
          })}
        </AnimatePresence>
      </MotionBox>

      <Box sx={{ flexShrink: 0, px: 2.5, py: 2, borderTop: `1px solid ${t.border}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography sx={{ fontSize: '.75rem', color: t.textMuted }}>Last updated just now</Typography>
        <motion.div
          whileHover={{ x: 4 }}
          style={{ display: 'flex', alignItems: 'center', gap: 4, color: t.signalLoss, cursor: 'pointer', fontWeight: 700 }}
        >
          <Typography sx={{ fontWeight: 700, fontSize: '.82rem' }}>View All</Typography>
          <i className='ri-arrow-right-line' style={{ fontSize: 18 }} />
        </motion.div>
      </Box>
    </MotionCard>
  )
}

export default RecentAlarms