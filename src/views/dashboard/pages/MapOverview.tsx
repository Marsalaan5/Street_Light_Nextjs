



// // 'use client'

// // import Card from '@mui/material/Card'
// // import Box from '@mui/material/Box'
// // import Typography from '@mui/material/Typography'
// // import Chip from '@mui/material/Chip'
// // import Divider from '@mui/material/Divider'

// // import { DASHBOARD_CARD_HEIGHT, RADIUS, useDashboardTokens } from './ui/tokens'
// // import SectionHeader from './ui/SectionHeader'

// // const locationPoints = [
// //   { label: 'Zone 3 – Alpha School', status: 'CONNECTED', lat: '27.878', lng: '78.052' },
// //   { label: 'Zone 3 – Hqins Sarai Ku.', status: 'CONNECTED', lat: '27.873', lng: '78.032' },
// //   { label: 'Zone 2 – Civil Lines', status: 'OFFLINE', lat: '27.881', lng: '78.071' }
// // ]

// // const MapOverview = () => {
// //   const t = useDashboardTokens()

// //   const online = locationPoints.filter(x => x.status === 'CONNECTED').length
// //   const offline = locationPoints.length - online

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
// //       <SectionHeader title='Map Overview' subtitle='Monitor all connected locations' icon='ri-map-pin-2-fill' accent={t.connected} />

// //       {/* MAP */}
// //       <Box sx={{ p: 2, flexShrink: 0 }}>
// //         <Box
// //           sx={{
// //             position: 'relative',
// //             height: 220,
// //             borderRadius: RADIUS.cardInner,
// //             overflow: 'hidden',
// //             border: `1px solid ${t.border}`,
// //             background: 'radial-gradient(circle at 30% 20%, #14202F, #0A0E14 70%)',
// //             boxShadow: 'inset 0 0 30px rgba(0,0,0,.5)'
// //           }}
// //         >
// //           {/* grid */}
// //           <Box
// //             sx={{
// //               position: 'absolute',
// //               inset: 0,
// //               backgroundImage: `
// // linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),
// // linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)
// // `,
// //               backgroundSize: '28px 28px'
// //             }}
// //           />

// //           {/* roads */}
// //           <Box
// //             sx={{
// //               position: 'absolute',
// //               top: '42%',
// //               left: -40,
// //               right: -20,
// //               height: 2,
// //               bgcolor: 'rgba(255,255,255,.12)',
// //               transform: 'rotate(-4deg)'
// //             }}
// //           />
// //           <Box
// //             sx={{
// //               position: 'absolute',
// //               left: '48%',
// //               top: -30,
// //               bottom: -30,
// //               width: 2,
// //               bgcolor: 'rgba(255,255,255,.12)',
// //               transform: 'rotate(7deg)'
// //             }}
// //           />

// //           {/* city label */}
// //           <Box
// //             sx={{
// //               position: 'absolute',
// //               top: 16,
// //               left: 16,
// //               px: 1,
// //               py: 0.4,
// //               borderRadius: 2,
// //               bgcolor: 'rgba(255,255,255,.08)',
// //               border: `1px solid ${t.border}`
// //             }}
// //           >
// //             <Typography sx={{ fontSize: '.65rem', fontWeight: 700, color: t.text }}>ALIGARH</Typography>
// //           </Box>

// //           {/* floating stats */}
// //           <Box sx={{ position: 'absolute', top: 16, right: 16, display: 'flex', gap: 1 }}>
// //             <Chip label={`${online} Online`} size='small' sx={{ bgcolor: t.onDim, color: t.on, fontWeight: 700 }} />
// //             <Chip label={`${offline} Offline`} size='small' sx={{ bgcolor: t.signalLossDim, color: t.signalLoss, fontWeight: 700 }} />
// //           </Box>

// //           {/* pins */}
// //           {[
// //             { top: '28%', left: '32%', color: t.on },
// //             { top: '45%', left: '60%', color: t.on },
// //             { top: '22%', left: '68%', color: t.signalLoss },
// //             { top: '66%', left: '52%', color: t.on },
// //             { top: '55%', left: '28%', color: t.energy }
// //           ].map((pin, index) => (
// //             <Box
// //               key={index}
// //               sx={{
// //                 position: 'absolute',
// //                 top: pin.top,
// //                 left: pin.left,
// //                 transform: 'translate(-50%, -100%)',
// //                 '&:hover': { transform: 'translate(-50%, -100%) scale(1.15)' },
// //                 transition: '.25s'
// //               }}
// //             >
// //               <Box
// //                 sx={{
// //                   width: 16,
// //                   height: 16,
// //                   borderRadius: '50% 50% 50% 0',
// //                   transform: 'rotate(-45deg)',
// //                   bgcolor: pin.color,
// //                   border: `2px solid ${t.bg}`,
// //                   boxShadow: `0 0 14px ${pin.color}90`
// //                 }}
// //               />
// //               <Box sx={{ position: 'absolute', top: 5, left: 5, width: 4, height: 4, borderRadius: '50%', bgcolor: '#fff' }} />
// //             </Box>
// //           ))}
// //         </Box>
// //       </Box>

// //       <Divider sx={{ borderColor: t.border }} />

// //       {/* LOCATION LIST */}
// //       <Box sx={{ flex: 1, minHeight: 0, p: 2, display: 'flex', flexDirection: 'column', gap: 1, overflowY: 'auto' }}>
// //         {locationPoints.map((loc, index) => {
// //           const connected = loc.status === 'CONNECTED'
// //           const color = connected ? t.on : t.signalLoss

// //           return (
// //             <Box
// //               key={index}
// //               sx={{
// //                 p: 1.5,
// //                 borderRadius: RADIUS.cardInner,
// //                 border: `1px solid ${t.border}`,
// //                 bgcolor: t.surface,
// //                 transition: '.25s',
// //                 display: 'flex',
// //                 justifyContent: 'space-between',
// //                 alignItems: 'center',
// //                 '&:hover': { transform: 'translateX(4px)', borderColor: t.borderStrong }
// //               }}
// //             >
// //               <Box sx={{ display: 'flex', gap: 1.2, alignItems: 'center' }}>
// //                 <Box
// //                   sx={{
// //                     width: 36,
// //                     height: 36,
// //                     borderRadius: 2,
// //                     bgcolor: `${color}22`,
// //                     display: 'flex',
// //                     justifyContent: 'center',
// //                     alignItems: 'center'
// //                   }}
// //                 >
// //                   <i className='ri-map-pin-line' style={{ fontSize: 18, color }} />
// //                 </Box>
// //                 <Box>
// //                   <Typography sx={{ fontWeight: 600, fontSize: '.82rem', color: t.text }}>{loc.label}</Typography>
// //                   <Typography sx={{ color: t.textMuted, fontSize: '.68rem' }}>
// //                     {loc.lat}, {loc.lng}
// //                   </Typography>
// //                 </Box>
// //               </Box>

// //               <Chip
// //                 label={connected ? 'Connected' : 'Offline'}
// //                 size='small'
// //                 sx={{ height: 26, fontWeight: 700, borderRadius: RADIUS.chip, bgcolor: `${color}22`, color }}
// //               />
// //             </Box>
// //           )
// //         })}
// //       </Box>

// //       <Divider sx={{ borderColor: t.border }} />

// //       {/* FOOTER */}
// //       <Box sx={{ flexShrink: 0, px: 2.5, py: 1.6, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
// //         <Typography sx={{ fontSize: '.78rem', color: t.textMuted }}>Live Monitoring Enabled</Typography>
// //         <Box
// //           sx={{
// //             display: 'flex',
// //             alignItems: 'center',
// //             gap: 0.6,
// //             color: t.connected,
// //             cursor: 'pointer',
// //             fontWeight: 700,
// //             transition: '.25s',
// //             '&:hover': { transform: 'translateX(4px)' }
// //           }}
// //         >
// //           <Typography sx={{ fontSize: '.8rem', fontWeight: 700 }}>View Live Map</Typography>
// //           <i className='ri-arrow-right-line' style={{ fontSize: 18 }} />
// //         </Box>
// //       </Box>
// //     </Card>
// //   )
// // }

// // export default MapOverview




// 'use client'

// import Card from '@mui/material/Card'
// import Box from '@mui/material/Box'
// import Typography from '@mui/material/Typography'
// import Chip from '@mui/material/Chip'
// import Divider from '@mui/material/Divider'

// import { DASHBOARD_CARD_HEIGHT, RADIUS, useDashboardTokens } from './ui/tokens'
// import SectionHeader from './ui/SectionHeader'

// const locationPoints = [
//   { label: 'Zone 3 – Alpha School', status: 'CONNECTED', lat: '27.878', lng: '78.052' },
//   { label: 'Zone 3 – Hqins Sarai Ku.', status: 'CONNECTED', lat: '27.873', lng: '78.032' },
//   { label: 'Zone 2 – Civil Lines', status: 'OFFLINE', lat: '27.881', lng: '78.071' }
// ]

// interface MapOverviewProps {
//   activeFilter?: string | null
//   onClearFilter?: () => void
// }

// const MapOverview = ({ activeFilter, onClearFilter }: MapOverviewProps) => {
//   const t = useDashboardTokens()

//   // basic heuristic: if the clicked stat title implies offline/loss, filter to OFFLINE, else show all
//   const wantsOfflineOnly = activeFilter ? /off|loss|cut/i.test(activeFilter) : false
//   const filteredPoints = wantsOfflineOnly ? locationPoints.filter(p => p.status === 'OFFLINE') : locationPoints

//   const online = locationPoints.filter(x => x.status === 'CONNECTED').length
//   const offline = locationPoints.length - online

//   return (
//     <Card
//       sx={{
//         height: DASHBOARD_CARD_HEIGHT,
//         display: 'flex',
//         flexDirection: 'column',
//         overflow: 'hidden',
//         borderRadius: RADIUS.card,
//         bgcolor: t.panel,
//         backdropFilter: 'blur(14px)',
//         border: `1px solid ${activeFilter ? t.connected + '66' : t.border}`,
//         boxShadow: t.shadowCard,
//         transition: 'all .3s ease',
//         '&:hover': { transform: 'translateY(-4px)', boxShadow: t.shadowLifted, borderColor: t.borderStrong }
//       }}
//     >
//       <SectionHeader title='Map Overview' subtitle='Monitor all connected locations' icon='ri-map-pin-2-fill' accent={t.connected} />

//       {activeFilter && (
//         <Box
//           sx={{
//             mx: 2, mt: 1.5, px: 1.5, py: 0.8, borderRadius: RADIUS.cardInner,
//             bgcolor: `${t.connected}18`, border: `1px solid ${t.connected}44`,
//             display: 'flex', alignItems: 'center', justifyContent: 'space-between'
//           }}
//         >
//           <Typography sx={{ fontSize: '.72rem', fontWeight: 700, color: t.connected }} noWrap>
//             Filtered by: {activeFilter}
//           </Typography>
//           <Box onClick={onClearFilter} sx={{ cursor: 'pointer', color: t.textMuted, fontSize: '.68rem', fontWeight: 700, flexShrink: 0, ml: 1 }}>
//             Clear ✕
//           </Box>
//         </Box>
//       )}

//       {/* MAP */}
//       <Box sx={{ p: 2, flexShrink: 0 }}>
//         <Box
//           sx={{
//             position: 'relative',
//             height: 220,
//             borderRadius: RADIUS.cardInner,
//             overflow: 'hidden',
//             border: `1px solid ${t.border}`,
//             background: 'radial-gradient(circle at 30% 20%, #14202F, #0A0E14 70%)',
//             boxShadow: 'inset 0 0 30px rgba(0,0,0,.5)'
//           }}
//         >
//           <Box
//             sx={{
//               position: 'absolute', inset: 0,
//               backgroundImage: `linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)`,
//               backgroundSize: '28px 28px'
//             }}
//           />

//           <Box sx={{ position: 'absolute', top: '42%', left: -40, right: -20, height: 2, bgcolor: 'rgba(255,255,255,.12)', transform: 'rotate(-4deg)' }} />
//           <Box sx={{ position: 'absolute', left: '48%', top: -30, bottom: -30, width: 2, bgcolor: 'rgba(255,255,255,.12)', transform: 'rotate(7deg)' }} />

//           <Box sx={{ position: 'absolute', top: 16, left: 16, px: 1, py: 0.4, borderRadius: 2, bgcolor: 'rgba(255,255,255,.08)', border: `1px solid ${t.border}` }}>
//             <Typography sx={{ fontSize: '.65rem', fontWeight: 700, color: t.text }}>ALIGARH</Typography>
//           </Box>

//           <Box sx={{ position: 'absolute', top: 16, right: 16, display: 'flex', gap: 1 }}>
//             <Chip label={`${online} Online`} size='small' sx={{ bgcolor: t.onDim, color: t.on, fontWeight: 700 }} />
//             <Chip label={`${offline} Offline`} size='small' sx={{ bgcolor: t.signalLossDim, color: t.signalLoss, fontWeight: 700 }} />
//           </Box>

//           {[
//             { top: '28%', left: '32%', color: t.on, offline: false },
//             { top: '45%', left: '60%', color: t.on, offline: false },
//             { top: '22%', left: '68%', color: t.signalLoss, offline: true },
//             { top: '66%', left: '52%', color: t.on, offline: false },
//             { top: '55%', left: '28%', color: t.energy, offline: false }
//           ].map((pin, index) => {
//             const dimmed = wantsOfflineOnly && !pin.offline
//             return (
//               <Box
//                 key={index}
//                 sx={{
//                   position: 'absolute', top: pin.top, left: pin.left,
//                   transform: 'translate(-50%, -100%)',
//                   opacity: dimmed ? 0.25 : 1,
//                   transition: '.3s',
//                   '&:hover': { transform: 'translate(-50%, -100%) scale(1.15)' }
//                 }}
//               >
//                 <Box
//                   sx={{
//                     width: 16, height: 16, borderRadius: '50% 50% 50% 0', transform: 'rotate(-45deg)',
//                     bgcolor: pin.color, border: `2px solid ${t.bg}`, boxShadow: `0 0 14px ${pin.color}90`
//                   }}
//                 />
//                 <Box sx={{ position: 'absolute', top: 5, left: 5, width: 4, height: 4, borderRadius: '50%', bgcolor: '#fff' }} />
//               </Box>
//             )
//           })}
//         </Box>
//       </Box>

//       <Divider sx={{ borderColor: t.border }} />

//       {/* LOCATION LIST */}
//       <Box sx={{ flex: 1, minHeight: 0, p: 2, display: 'flex', flexDirection: 'column', gap: 1, overflowY: 'auto' }}>
//         {filteredPoints.length === 0 && (
//           <Typography sx={{ fontSize: '.75rem', color: t.textMuted, textAlign: 'center', py: 2 }}>
//             No locations match this filter.
//           </Typography>
//         )}
//         {filteredPoints.map((loc, index) => {
//           const connected = loc.status === 'CONNECTED'
//           const color = connected ? t.on : t.signalLoss

//           return (
//             <Box
//               key={index}
//               sx={{
//                 p: 1.5, borderRadius: RADIUS.cardInner, border: `1px solid ${t.border}`, bgcolor: t.surface,
//                 transition: '.25s', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 1,
//                 '&:hover': { transform: 'translateX(4px)', borderColor: t.borderStrong }
//               }}
//             >
//               <Box sx={{ display: 'flex', gap: 1.2, alignItems: 'center', minWidth: 0 }}>
//                 <Box sx={{ width: 36, height: 36, borderRadius: 2, bgcolor: `${color}22`, display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0 }}>
//                   <i className='ri-map-pin-line' style={{ fontSize: 18, color }} />
//                 </Box>
//                 <Box sx={{ minWidth: 0 }}>
//                   <Typography noWrap sx={{ fontWeight: 600, fontSize: '.82rem', color: t.text, maxWidth: 160 }}>{loc.label}</Typography>
//                   <Typography sx={{ color: t.textMuted, fontSize: '.68rem' }}>{loc.lat}, {loc.lng}</Typography>
//                 </Box>
//               </Box>

//               <Chip label={connected ? 'Connected' : 'Offline'} size='small' sx={{ height: 26, fontWeight: 700, borderRadius: RADIUS.chip, bgcolor: `${color}22`, color, flexShrink: 0 }} />
//             </Box>
//           )
//         })}
//       </Box>

//       <Divider sx={{ borderColor: t.border }} />

//       <Box sx={{ flexShrink: 0, px: 2.5, py: 1.6, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//         <Typography sx={{ fontSize: '.78rem', color: t.textMuted }}>Live Monitoring Enabled</Typography>
//         <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.6, color: t.connected, cursor: 'pointer', fontWeight: 700, transition: '.25s', '&:hover': { transform: 'translateX(4px)' } }}>
//           <Typography sx={{ fontSize: '.8rem', fontWeight: 700 }}>View Live Map</Typography>
//           <i className='ri-arrow-right-line' style={{ fontSize: 18 }} />
//         </Box>
//       </Box>
//     </Card>
//   )
// }

// export default MapOverview

'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import Divider from '@mui/material/Divider'

import { DASHBOARD_CARD_HEIGHT, RADIUS, useDashboardTokens } from '../ui/tokens'
import SectionHeader from '../ui/SectionHeader'
import ExpandModal from '../ui/ExpandModal'
import Map from '../ui/Map'
import { cardHoverProps, listStagger, listItem } from '../ui/motion'

const MotionCard = motion(Card)
const MotionBox = motion(Box)

const locationPoints = [
  { label: 'Zone 3 – Alpha School', status: 'CONNECTED' as const, lat: 27.878, lng: 78.052 },
  { label: 'Zone 3 – Hqins Sarai Ku.', status: 'CONNECTED' as const, lat: 27.873, lng: 78.032 },
  { label: 'Zone 2 – Civil Lines', status: 'OFFLINE' as const, lat: 27.881, lng: 78.071 }
]

interface MapOverviewProps {
  activeFilter?: string | null
  onClearFilter?: () => void
}

const MapOverview = ({ activeFilter, onClearFilter }: MapOverviewProps) => {
  const t = useDashboardTokens()
  const [expanded, setExpanded] = useState(false)

  const wantsOfflineOnly = activeFilter ? /off|loss|cut/i.test(activeFilter) : false
  const filteredPoints = wantsOfflineOnly ? locationPoints.filter(p => p.status === 'OFFLINE') : locationPoints
  const online = locationPoints.filter(x => x.status === 'CONNECTED').length
  const offline = locationPoints.length - online

  const LocationList = ({ dense }: { dense?: boolean }) => (
    <MotionBox variants={listStagger} initial='hidden' animate='show' sx={{ display: 'flex', flexDirection: 'column', gap: 0.8 }}>
      <AnimatePresence mode='popLayout'>
        {filteredPoints.length === 0 && (
          <motion.div key='empty' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Typography sx={{ fontSize: '.72rem', color: t.textMuted, textAlign: 'center', py: 2 }}>No locations match this filter.</Typography>
          </motion.div>
        )}
        {filteredPoints.map(loc => {
          const connected = loc.status === 'CONNECTED'
          const color = connected ? t.on : t.signalLoss
          return (
            <MotionBox
              key={loc.label}
              layout
              variants={listItem}
              exit='exit'
              whileHover={{ x: 4 }}
              sx={{
                p: dense ? 1 : 1.3,
                borderRadius: RADIUS.cardInner,
                border: `1px solid ${t.border}`,
                bgcolor: t.surface,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 1
              }}
            >
              <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', minWidth: 0 }}>
                <Box sx={{ width: 28, height: 28, borderRadius: '8px', bgcolor: `${color}22`, display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0 }}>
                  <i className='ri-map-pin-line' style={{ fontSize: 14, color }} />
                </Box>
                <Box sx={{ minWidth: 0 }}>
                  <Typography noWrap sx={{ fontWeight: 600, fontSize: '.74rem', color: t.text }}>{loc.label}</Typography>
                  <Typography noWrap sx={{ color: t.textMuted, fontSize: '.62rem' }}>{loc.lat}, {loc.lng}</Typography>
                </Box>
              </Box>
              <Chip label={connected ? 'Connected' : 'Offline'} size='small' sx={{ height: 22, fontSize: '.62rem', fontWeight: 700, bgcolor: `${color}22`, color, flexShrink: 0 }} />
            </MotionBox>
          )
        })}
      </AnimatePresence>
    </MotionBox>
  )

  return (
    <>
      <MotionCard
        {...cardHoverProps}
        sx={{
          // height: DASHBOARD_CARD_HEIGHT,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          borderRadius: RADIUS.card,
          bgcolor: t.panel,
          backdropFilter: 'blur(14px)',
          border: `1px solid ${activeFilter ? t.connected + '66' : t.border}`,
          boxShadow: t.shadowCard
        }}
      >
        <SectionHeader title='Map Overview' subtitle='Monitor all connected locations' icon='ri-map-pin-2-fill' accent={t.connected} onExpand={() => setExpanded(true)} />

        <AnimatePresence>
          {activeFilter && (
            <motion.div
              key='filter-banner'
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: 'auto', marginTop: 10 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              style={{ overflow: 'hidden', marginLeft: 16, marginRight: 16 }}
            >
              <Box sx={{ px: 1.3, py: 0.6, borderRadius: RADIUS.cardInner, bgcolor: `${t.connected}18`, border: `1px solid ${t.connected}44`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography sx={{ fontSize: '.68rem', fontWeight: 700, color: t.connected }} noWrap>Filtered: {activeFilter}</Typography>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={onClearFilter} style={{ cursor: 'pointer', color: t.textMuted, fontSize: '.62rem', fontWeight: 700, marginLeft: 8 }}>
                  Clear ✕
                </motion.div>
              </Box>
            </motion.div>
          )}
        </AnimatePresence>

        <Box sx={{ p: 1.6, flexShrink: 0 }}>
          <Map points={filteredPoints} height={150} />
          <Box sx={{ display: 'flex', gap: 0.8, mt: 1 }}>
            <Chip label={`${online} Online`} size='small' sx={{ bgcolor: t.onDim, color: t.on, fontWeight: 700, fontSize: '.65rem', height: 22 }} />
            <Chip label={`${offline} Offline`} size='small' sx={{ bgcolor: t.signalLossDim, color: t.signalLoss, fontWeight: 700, fontSize: '.65rem', height: 22 }} />
          </Box>
        </Box>

        <Divider sx={{ borderColor: t.border }} />

        <Box sx={{ flex: 1, minHeight: 0, p: 1.6, overflowY: 'auto' }}>
          <LocationList dense />
        </Box>
      </MotionCard>

      <ExpandModal open={expanded} onClose={() => setExpanded(false)} title='Map Overview' subtitle='Monitor all connected locations'>
        <Map points={filteredPoints} height={420} />
        <Box sx={{ mt: 2.5 }}>
          <LocationList />
        </Box>
      </ExpandModal>
    </>
  )
}

export default MapOverview