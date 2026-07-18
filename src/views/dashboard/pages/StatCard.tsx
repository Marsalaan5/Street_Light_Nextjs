// // // // // 'use client'

// // // // // import Box from '@mui/material/Box'
// // // // // import Typography from '@mui/material/Typography'

// // // // // import { RADIUS } from './ui/tokens'

// // // // // interface StatCardProps {
// // // // //   title: string
// // // // //   value: string | number
// // // // //   subtitle?: string
// // // // //   icon: string // Remix icon class e.g. 'ri-router-line'
// // // // //   accent: string // full card colour — fixed in both themes on purpose
// // // // // }

// // // // // const StatCard = ({ title, value, subtitle, icon, accent }: StatCardProps) => {
// // // // //   return (
// // // // //     <Box
// // // // //       sx={{
// // // // //         position: 'relative',
// // // // //         borderRadius: RADIUS.card,
// // // // //         background: `linear-gradient(135deg, ${accent} 0%, ${accent}cc 60%, ${accent}99 100%)`,
// // // // //         overflow: 'hidden',
// // // // //         display: 'flex',
// // // // //         flexDirection: 'column',
// // // // //         boxShadow: `0 4px 20px ${accent}35, 0 1px 3px rgba(0,0,0,0.1)`,
// // // // //         transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
// // // // //         '&:hover': {
// // // // //           boxShadow: `0 8px 32px ${accent}50, 0 2px 8px rgba(0,0,0,0.15)`,
// // // // //           transform: 'translateY(-4px) scale(1.01)',
// // // // //         },
// // // // //         // Decorative circle in background
// // // // //         '&::before': {
// // // // //           content: '""',
// // // // //           position: 'absolute',
// // // // //           top: -20,
// // // // //           right: -20,
// // // // //           width: 90,
// // // // //           height: 90,
// // // // //           borderRadius: '50%',
// // // // //           background: 'rgba(255,255,255,0.08)',
// // // // //           pointerEvents: 'none',
// // // // //         },
// // // // //         '&::after': {
// // // // //           content: '""',
// // // // //           position: 'absolute',
// // // // //           bottom: -30,
// // // // //           right: 20,
// // // // //           width: 60,
// // // // //           height: 60,
// // // // //           borderRadius: '50%',
// // // // //           background: 'rgba(255,255,255,0.05)',
// // // // //           pointerEvents: 'none',
// // // // //         },
// // // // //       }}
// // // // //     >
// // // // //       {/* ── Main content ───────────────────────────────────── */}
// // // // //       <Box
// // // // //         sx={{
// // // // //           position: 'relative',
// // // // //           zIndex: 1,
// // // // //           px: 2.5,
// // // // //           pt: 2.5,
// // // // //           pb: 1.5,
// // // // //           display: 'flex',
// // // // //           alignItems: 'flex-start',
// // // // //           justifyContent: 'space-between',
// // // // //           gap: 1.5,
// // // // //         }}
// // // // //       >
// // // // //         {/* Icon circle */}
// // // // //         <Box
// // // // //           sx={{
// // // // //             width: 46,
// // // // //             height: 46,
// // // // //             borderRadius: '12px',
// // // // //             background: 'rgba(255,255,255,0.18)',
// // // // //             backdropFilter: 'blur(8px)',
// // // // //             border: '1px solid rgba(255,255,255,0.2)',
// // // // //             display: 'flex',
// // // // //             alignItems: 'center',
// // // // //             justifyContent: 'center',
// // // // //             flexShrink: 0,
// // // // //           }}
// // // // //         >
// // // // //           <i className={icon} style={{ fontSize: 22, color: '#fff' }} />
// // // // //         </Box>

// // // // //         {/* Value */}
// // // // //         <Box sx={{ textAlign: 'right', minWidth: 0, flex: 1 }}>
// // // // //           <Typography
// // // // //             sx={{
// // // // //               fontSize: '1.45rem',
// // // // //               fontWeight: 800,
// // // // //               color: '#fff',
// // // // //               lineHeight: 1.15,
// // // // //               whiteSpace: 'nowrap',
// // // // //               overflow: 'hidden',
// // // // //               textOverflow: 'ellipsis',
// // // // //               letterSpacing: '-0.02em',
// // // // //               textShadow: '0 1px 3px rgba(0,0,0,0.15)',
// // // // //             }}
// // // // //           >
// // // // //             {value}
// // // // //           </Typography>
// // // // //           {subtitle && (
// // // // //             <Typography
// // // // //               sx={{
// // // // //                 fontSize: '0.62rem',
// // // // //                 fontWeight: 600,
// // // // //                 color: 'rgba(255,255,255,0.8)',
// // // // //                 mt: 0.4,
// // // // //                 display: 'inline-block',
// // // // //                 px: 0.8,
// // // // //                 py: 0.2,
// // // // //                 borderRadius: '6px',
// // // // //                 bgcolor: 'rgba(255,255,255,0.15)',
// // // // //                 border: '1px solid rgba(255,255,255,0.12)',
// // // // //               }}
// // // // //             >
// // // // //               {subtitle}
// // // // //             </Typography>
// // // // //           )}
// // // // //         </Box>
// // // // //       </Box>

// // // // //       {/* ── Footer — title label ────────────────────────────── */}
// // // // //       <Box
// // // // //         sx={{
// // // // //           position: 'relative',
// // // // //           zIndex: 1,
// // // // //           px: 2.5,
// // // // //           py: 1.4,
// // // // //           display: 'flex',
// // // // //           alignItems: 'center',
// // // // //           gap: 1,
// // // // //           borderTop: '1px solid rgba(255,255,255,0.12)',
// // // // //           background: 'rgba(0,0,0,0.06)',
// // // // //         }}
// // // // //       >
// // // // //         <Box
// // // // //           sx={{
// // // // //             width: 6,
// // // // //             height: 6,
// // // // //             borderRadius: '50%',
// // // // //             bgcolor: '#fff',
// // // // //             flexShrink: 0,
// // // // //             boxShadow: '0 0 8px rgba(255,255,255,0.5)',
// // // // //           }}
// // // // //         />
// // // // //         <Typography
// // // // //           sx={{
// // // // //             fontSize: '0.7rem',
// // // // //             fontWeight: 700,
// // // // //             color: 'rgba(255,255,255,0.85)',
// // // // //             textTransform: 'uppercase',
// // // // //             letterSpacing: '0.06em',
// // // // //             lineHeight: 1.2,
// // // // //           }}
// // // // //         >
// // // // //           {title}
// // // // //         </Typography>
// // // // //       </Box>
// // // // //     </Box>
// // // // //   )
// // // // // }

// // // // // export default StatCard




// // // // // views/dashboard/StatCard.tsx
// // // // 'use client'

// // // // import Box from '@mui/material/Box'
// // // // import Typography from '@mui/material/Typography'

// // // // import GlassPanel from './ui/GlassPanel'
// // // // import RadialGauge from './ui/RadialGuage'
// // // // import { useDashboardTokens } from './ui/tokens'

// // // // interface StatCardProps {
// // // //   title: string
// // // //   value: string
// // // //   icon: string // remixicon class, e.g. 'ri-router-line'
// // // //   accent: string
// // // //   subtitle?: string
// // // //   /** 0-100 — renders an animated radial gauge instead of decorative bars */
// // // //   percent?: number
// // // //   /** overrides the auto-generated glow tint if you want a specific one */
// // // //   glow?: string
// // // // }

// // // // const StatCard = ({ title, value, icon, accent, subtitle, percent, glow }: StatCardProps) => {
// // // //   const COLORS = useDashboardTokens()

// // // //   return (
// // // //     <GlassPanel glow={glow ?? `${accent}26`} sx={{ p: 2.25, height: '100%' }}>
// // // //       <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1.75 }}>
// // // //         <Box
// // // //           sx={{
// // // //             width: 38,
// // // //             height: 38,
// // // //             borderRadius: '11px',
// // // //             display: 'flex',
// // // //             alignItems: 'center',
// // // //             justifyContent: 'center',
// // // //             fontSize: 18,
// // // //             background: `${accent}26`,
// // // //             color: accent,
// // // //             boxShadow: `0 0 18px ${accent}40`,
// // // //           }}
// // // //         >
// // // //           <i className={icon} />
// // // //         </Box>

// // // //         {typeof percent === 'number' && <RadialGauge value={percent} color={accent} />}
// // // //       </Box>

// // // //       <Typography
// // // //         sx={{
// // // //           fontSize: '11px',
// // // //           fontWeight: 700,
// // // //           letterSpacing: '0.04em',
// // // //           textTransform: 'uppercase',
// // // //           color: COLORS.textMuted,
// // // //           mb: 0.5,
// // // //         }}
// // // //       >
// // // //         {title}
// // // //       </Typography>

// // // //       <Typography
// // // //         sx={{
// // // //           fontSize: '1.375rem',
// // // //           fontWeight: 800,
// // // //           letterSpacing: '-0.01em',
// // // //           color: COLORS.text,
// // // //           fontVariantNumeric: 'tabular-nums',
// // // //         }}
// // // //       >
// // // //         {value}
// // // //       </Typography>

// // // //       {subtitle && (
// // // //         <Typography sx={{ fontSize: '11px', color: COLORS.textMuted, mt: 0.5 }}>{subtitle}</Typography>
// // // //       )}

// // // //       {/* decorative signal bars shown only when there's no gauge, to avoid empty space */}
// // // //       {typeof percent !== 'number' && (
// // // //         <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: '3px', height: 20, mt: 1.5 }}>
// // // //           {[40, 65, 50, 80, 60, 90, 70, 95].map((h, i) => (
// // // //             <Box
// // // //               key={i}
// // // //               sx={{
// // // //                 flex: 1,
// // // //                 height: `${h}%`,
// // // //                 borderRadius: '2px',
// // // //                 background: `linear-gradient(180deg, ${accent}, transparent)`,
// // // //                 opacity: 0.85,
// // // //                 transformOrigin: 'bottom',
// // // //                 '@keyframes rise': { from: { transform: 'scaleY(0)' }, to: { transform: 'scaleY(1)' } },
// // // //                 animation: `rise 1s cubic-bezier(0.4,0,0.2,1) ${i * 0.05}s both`,
// // // //               }}
// // // //             />
// // // //           ))}
// // // //         </Box>
// // // //       )}
// // // //     </GlassPanel>
// // // //   )
// // // // }

// // // // export default StatCard




// // // // // views/dashboard/StatCard.tsx
// // // // 'use client'

// // // // import Box from '@mui/material/Box'
// // // // import Typography from '@mui/material/Typography'

// // // // import GlassPanel from './ui/GlassPanel'
// // // // import RadialGauge from './ui/RadialGuage'
// // // // import Icon from './ui/Icon'
// // // // import { useDashboardTokens } from './ui/tokens'

// // // // interface StatCardProps {
// // // //   title: string
// // // //   value: string
// // // //   icon: string // sprite icon name, e.g. 'router', 'wifi', 'bulb-flash'
// // // //   accent: string
// // // //   subtitle?: string
// // // //   /** 0-100 — renders an animated radial gauge instead of decorative bars */
// // // //   percent?: number
// // // //   /** overrides the auto-generated glow tint if you want a specific one */
// // // //   glow?: string
// // // // }

// // // // const StatCard = ({ title, value, icon, accent, subtitle, percent, glow }: StatCardProps) => {
// // // //   const COLORS = useDashboardTokens()

// // // //   return (
// // // //     <GlassPanel glow={glow ?? `${accent}26`} sx={{ p: 2.25, height: '100%' }}>
// // // //       <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1.75 }}>
// // // //         <Box
// // // //           sx={{
// // // //             width: 38,
// // // //             height: 38,
// // // //             borderRadius: '11px',
// // // //             display: 'flex',
// // // //             alignItems: 'center',
// // // //             justifyContent: 'center',
// // // //             background: `${accent}26`,
// // // //             color: accent,
// // // //             boxShadow: `0 0 18px ${accent}40`,
// // // //           }}
// // // //         >
// // // //           <Icon name={icon} size={18} />
// // // //         </Box>

// // // //         {typeof percent === 'number' && <RadialGauge value={percent} color={accent} />}
// // // //       </Box>

// // // //       <Typography
// // // //         sx={{
// // // //           fontSize: '11px',
// // // //           fontWeight: 700,
// // // //           letterSpacing: '0.04em',
// // // //           textTransform: 'uppercase',
// // // //           color: COLORS.textMuted,
// // // //           mb: 0.5,
// // // //         }}
// // // //       >
// // // //         {title}
// // // //       </Typography>

// // // //       <Typography
// // // //         sx={{
// // // //           fontFamily: "'JetBrains Mono', monospace",
// // // //           fontSize: '1.375rem',
// // // //           fontWeight: 700,
// // // //           letterSpacing: '-0.01em',
// // // //           color: COLORS.text,
// // // //           fontVariantNumeric: 'tabular-nums',
// // // //         }}
// // // //       >
// // // //         {value}
// // // //       </Typography>

// // // //       {subtitle && (
// // // //         <Typography sx={{ fontSize: '11px', color: COLORS.textMuted, mt: 0.5 }}>{subtitle}</Typography>
// // // //       )}

// // // //       {/* decorative signal bars shown only when there's no gauge, to avoid empty space */}
// // // //       {typeof percent !== 'number' && (
// // // //         <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: '3px', height: 20, mt: 1.5 }}>
// // // //           {[40, 65, 50, 80, 60, 90, 70, 95].map((h, i) => (
// // // //             <Box
// // // //               key={i}
// // // //               sx={{
// // // //                 flex: 1,
// // // //                 height: `${h}%`,
// // // //                 borderRadius: '2px',
// // // //                 background: `linear-gradient(180deg, ${accent}, transparent)`,
// // // //                 opacity: 0.85,
// // // //                 transformOrigin: 'bottom',
// // // //                 '@keyframes rise': { from: { transform: 'scaleY(0)' }, to: { transform: 'scaleY(1)' } },
// // // //                 animation: `rise 1s cubic-bezier(0.4,0,0.2,1) ${i * 0.05}s both`,
// // // //               }}
// // // //             />
// // // //           ))}
// // // //         </Box>
// // // //       )}
// // // //     </GlassPanel>
// // // //   )
// // // // }

// // // // export default StatCard



// // // // views/dashboard/StatCard.tsx
// // // 'use client'

// // // import { useEffect, useRef, useState } from 'react'
// // // import Box from '@mui/material/Box'
// // // import Typography from '@mui/material/Typography'

// // // import GlassPanel from './ui/GlassPanel'
// // // import RadialGauge from './ui/RadialGuage'
// // // import Icon3D from './three/Icon3D'
// // // import { useDashboardTokens } from './ui/tokens'

// // // interface StatCardProps {
// // //   title: string
// // //   value: string
// // //   icon: string
// // //   accent: string
// // //   subtitle?: string
// // //   percent?: number
// // //   glow?: string
// // //   delta?: number // optional trend chip, e.g. 4.2 or -1.1
// // // }

// // // const useCountUp = (value: string, duration = 1100) => {
// // //   const match = value.match(/^([\d,]+(?:\.\d+)?)/)
// // //   const target = match ? parseFloat(match[1].replace(/,/g, '')) : null
// // //   const decimals = match && match[1].includes('.') ? match[1].split('.')[1].length : 0
// // //   const suffix = match ? value.slice(match[1].length) : value
// // //   const [display, setDisplay] = useState(target === null ? value : '0')


// // //   const raf = useRef<number | null>(null)


// // //   useEffect(() => {
// // //     if (target === null) {
// // //       setDisplay(value)
// // //       return
// // //     }

// // //     const start = performance.now()

// // //     const tick = (now: number) => {
// // //       const p = Math.min(1, (now - start) / duration)
// // //       const eased = 1 - Math.pow(1 - p, 3)

// // //       setDisplay(
// // //         (target * eased).toLocaleString(undefined, {
// // //           minimumFractionDigits: decimals,
// // //           maximumFractionDigits: decimals,
// // //         })
// // //       )

// // //       if (p < 1) {
// // //         raf.current = requestAnimationFrame(tick)
// // //       }
// // //     }

// // //     raf.current = requestAnimationFrame(tick)

// // //     return () => {
// // //       if (raf.current !== null) {
// // //         cancelAnimationFrame(raf.current)
// // //       }
// // //     }
// // //     // eslint-disable-next-line react-hooks/exhaustive-deps
// // //   }, [value])

// // //   return target === null ? value : `${display}${suffix}`
// // // }

// // // const StatCard = ({ title, value, icon, accent, subtitle, percent, glow, delta }: StatCardProps) => {
// // //   const COLORS = useDashboardTokens()
// // //   const animatedValue = useCountUp(value)
// // //   const [tilt, setTilt] = useState({ x: 0, y: 0 })

// // //   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
// // //     const rect = e.currentTarget.getBoundingClientRect()
// // //     const px = (e.clientX - rect.left) / rect.width - 0.5
// // //     const py = (e.clientY - rect.top) / rect.height - 0.5
// // //     setTilt({ x: py * -6, y: px * 6 })
// // //   }

// // //   return (
// // //     <GlassPanel
// // //       glow={glow ?? `${accent}26`}
// // //       onMouseMove={handleMouseMove}
// // //       onMouseLeave={() => setTilt({ x: 0, y: 0 })}
// // //       sx={{ p: 2.25, height: '100%', transform: `perspective(700px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`, transition: 'transform 0.15s ease-out' }}
// // //     >
// // //       <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1.75 }}>
// // //         <Box sx={{ width: 38, height: 38, borderRadius: '11px', background: `${accent}26`, boxShadow: `0 0 18px ${accent}40` }}>
// // //           <Icon3D name={icon} color={accent} size={38} />
// // //         </Box>
// // //         {typeof percent === 'number' && <RadialGauge value={percent} color={accent} />}
// // //       </Box>

// // //       <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
// // //         <Typography sx={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', color: COLORS.textMuted, mb: 0.5 }}>
// // //           {title}
// // //         </Typography>
// // //         {typeof delta === 'number' && (
// // //           <Box sx={{ fontSize: '10px', fontWeight: 700, color: delta >= 0 ? COLORS.on : COLORS.signalLoss, background: delta >= 0 ? COLORS.onDim : COLORS.signalLossDim, px: 0.7, py: 0.1, borderRadius: '6px', mb: 0.5 }}>
// // //             {delta >= 0 ? '▲' : '▼'} {Math.abs(delta)}%
// // //           </Box>
// // //         )}
// // //       </Box>

// // //       <Typography sx={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '1.375rem', fontWeight: 700, letterSpacing: '-0.01em', color: COLORS.text, fontVariantNumeric: 'tabular-nums' }}>
// // //         {animatedValue}
// // //       </Typography>

// // //       {subtitle && <Typography sx={{ fontSize: '11px', color: COLORS.textMuted, mt: 0.5 }}>{subtitle}</Typography>}

// // //       {typeof percent !== 'number' && (
// // //         <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: '3px', height: 20, mt: 1.5 }}>
// // //           {[40, 65, 50, 80, 60, 90, 70, 95].map((h, i) => (
// // //             <Box key={i} sx={{ flex: 1, height: `${h}%`, borderRadius: '2px', background: `linear-gradient(180deg, ${accent}, transparent)`, opacity: 0.85, transformOrigin: 'bottom', '@keyframes rise': { from: { transform: 'scaleY(0)' }, to: { transform: 'scaleY(1)' } }, animation: `rise 1s cubic-bezier(0.4,0,0.2,1) ${i * 0.05}s both` }} />
// // //           ))}
// // //         </Box>
// // //       )}
// // //     </GlassPanel>
// // //   )
// // // }

// // // export default StatCard



// // // views/dashboard/StatCard.tsx
// // 'use client'

// // import { useEffect, useRef, useState } from 'react'
// // import Box from '@mui/material/Box'
// // import Typography from '@mui/material/Typography'

// // import GlassPanel from './ui/GlassPanel'
// // import RadialGauge from './ui/RadialGuage'
// // import Sparkline from './ui/SparkLine'
// // import Icon3D from './three/Icon3D'
// // import { useDashboardTokens } from './ui/tokens'

// // interface StatCardProps {
// //   title: string
// //   value: string
// //   icon: string
// //   accent: string
// //   subtitle?: string
// //   percent?: number
// //   trend?: number[]
// //   glow?: string
// //   delta?: number
// // }

// // const useCountUp = (value: string, duration = 1000) => {
// //   const match = value.match(/^([\d,]+(?:\.\d+)?)/)
// //   const target = match ? parseFloat(match[1].replace(/,/g, '')) : null
// //   const decimals = match && match[1].includes('.') ? match[1].split('.')[1].length : 0
// //   const suffix = match ? value.slice(match[1].length) : value
// //   const [display, setDisplay] = useState(target === null ? value : '0')

// //   const raf = useRef<number | null>(null)


// //   useEffect(() => {
// //     if (target === null) {
// //       setDisplay(value)
// //       return
// //     }

// //     const start = performance.now()

// //     const tick = (now: number) => {
// //       const p = Math.min(1, (now - start) / duration)
// //       const eased = 1 - Math.pow(1 - p, 3)

// //       setDisplay(
// //         (target * eased).toLocaleString(undefined, {
// //           minimumFractionDigits: decimals,
// //           maximumFractionDigits: decimals,
// //         })
// //       )

// //       if (p < 1) {
// //         raf.current = requestAnimationFrame(tick)
// //       }
// //     }

// //     raf.current = requestAnimationFrame(tick)
// //     // eslint-disable-next-line react-hooks/exhaustive-deps
// //   }, [value])

// //   return target === null ? value : `${display}${suffix}`
// // }

// // const StatCard = ({ title, value, icon, accent, subtitle, percent, trend, glow, delta }: StatCardProps) => {
// //   const COLORS = useDashboardTokens()
// //   const animatedValue = useCountUp(value)
// //   const [tilt, setTilt] = useState({ x: 0, y: 0 })

// //   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
// //     const rect = e.currentTarget.getBoundingClientRect()
// //     const px = (e.clientX - rect.left) / rect.width - 0.5
// //     const py = (e.clientY - rect.top) / rect.height - 0.5
// //     setTilt({ x: py * -4, y: px * 4 })
// //   }

// //   return (
// //     <GlassPanel
// //       glow={glow ?? `${accent}22`}
// //       onMouseMove={handleMouseMove}
// //       onMouseLeave={() => setTilt({ x: 0, y: 0 })}
// //       sx={{
// //         p: 1.6,
// //         height: '100%',
// //         transform: `perspective(700px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
// //         transition: 'transform 0.15s ease-out',
// //       }}
// //     >
// //       <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 1 }}>
// //         <Box sx={{ minWidth: 0, flex: 1 }}>
// //           <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.6, mb: 0.3 }}>
// //             <Typography
// //               noWrap
// //               sx={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', color: COLORS.textMuted }}
// //             >
// //               {title}
// //             </Typography>
// //             {typeof delta === 'number' && (
// //               <Box
// //                 sx={{
// //                   fontSize: '9px',
// //                   fontWeight: 700,
// //                   color: delta >= 0 ? COLORS.on : COLORS.signalLoss,
// //                   whiteSpace: 'nowrap',
// //                 }}
// //               >
// //                 {delta >= 0 ? '▲' : '▼'}{Math.abs(delta)}%
// //               </Box>
// //             )}
// //           </Box>

// //           <Typography
// //             sx={{
// //               fontFamily: "'JetBrains Mono', monospace",
// //               fontSize: '1.15rem',
// //               fontWeight: 700,
// //               letterSpacing: '-0.01em',
// //               color: COLORS.text,
// //               fontVariantNumeric: 'tabular-nums',
// //               lineHeight: 1.2,
// //             }}
// //           >
// //             {animatedValue}
// //           </Typography>

// //           {subtitle && (
// //             <Typography noWrap sx={{ fontSize: '10px', color: COLORS.textMuted, mt: 0.2 }}>
// //               {subtitle}
// //             </Typography>
// //           )}
// //         </Box>

// //         <Box
// //           sx={{
// //             width: 34,
// //             height: 34,
// //             flexShrink: 0,
// //             borderRadius: '9px',
// //             background: `${accent}22`,
// //             boxShadow: `0 0 12px ${accent}33`,
// //           }}
// //         >
// //           <Icon3D name={icon} color={accent} size={34} />
// //         </Box>
// //       </Box>

// //       {typeof percent === 'number' && (
// //         <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
// //           <RadialGauge value={percent} color={accent} size={30} strokeWidth={3.5} />
// //         </Box>
// //       )}

// //       {typeof percent !== 'number' && trend && trend.length > 1 && (
// //         <Box sx={{ mt: 1 }}>
// //           <Sparkline data={trend} color={accent} height={22} />
// //         </Box>
// //       )}
// //     </GlassPanel>
// //   )
// // }

// // export default StatCard






// // views/dashboard/StatCard.tsx
// 'use client'

// import { useEffect, useRef, useState } from 'react'
// import Box from '@mui/material/Box'
// import Typography from '@mui/material/Typography'

// import GlassPanel from './ui/GlassPanel'
// import RadialGauge from './ui/RadialGuage'
// import Sparkline from './ui/SparkLine'
// import Icon3D from './three/Icon3D'
// import { useDashboardTokens } from './ui/tokens'

// type Status = 'normal' | 'warning' | 'critical'

// interface StatCardProps {
//   title: string
//   value: string
//   icon: string
//   accent: string
//   subtitle?: string
//   percent?: number
//   trend?: number[]
//   glow?: string
//   delta?: number
//   /** seconds since this stat last refreshed — drives the live/stale dot */
//   updatedSecondsAgo?: number
//   /** raw numeric value used only for threshold comparison, e.g. 34 for "34 Nos" */
//   rawValue?: number
//   /** { warning: 20, critical: 40 } — rawValue crossing these recolors the card */
//   thresholds?: { warning: number; critical: number }
//   /** higher rawValue is BETTER (e.g. uptime %) — inverts threshold direction */
//   higherIsBetter?: boolean
//   onClick?: () => void
// }

// const useCountUp = (value: string, duration = 1000) => {
//   const match = value.match(/^([\d,]+(?:\.\d+)?)/)
//   const target = match ? parseFloat(match[1].replace(/,/g, '')) : null
//   const decimals = match && match[1].includes('.') ? match[1].split('.')[1].length : 0
//   const suffix = match ? value.slice(match[1].length) : value
//   const [display, setDisplay] = useState(target === null ? value : '0')
//   const raf = useRef<number | null>(null)


//   useEffect(() => {
//     if (target === null) {
//       setDisplay(value)
//       return
//     }

//     const start = performance.now()

//     const tick = (now: number) => {
//       const p = Math.min(1, (now - start) / duration)
//       const eased = 1 - Math.pow(1 - p, 3)

//       setDisplay(
//         (target * eased).toLocaleString(undefined, {
//           minimumFractionDigits: decimals,
//           maximumFractionDigits: decimals,
//         })
//       )

//       if (p < 1) {
//         raf.current = requestAnimationFrame(tick)
//       }
//     }

//     raf.current = requestAnimationFrame(tick)
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [value])



//   return target === null ? value : `${display}${suffix}`
// }

// const getStatus = (rawValue: number | undefined, thresholds: StatCardProps['thresholds'], higherIsBetter: boolean): Status => {
//   if (rawValue === undefined || !thresholds) return 'normal'
//   if (higherIsBetter) {
//     if (rawValue <= thresholds.critical) return 'critical'
//     if (rawValue <= thresholds.warning) return 'warning'
//     return 'normal'
//   }
//   if (rawValue >= thresholds.critical) return 'critical'
//   if (rawValue >= thresholds.warning) return 'warning'
//   return 'normal'
// }

// const StatCard = ({
//   title, value, icon, accent, subtitle, percent, trend, glow, delta,
//   updatedSecondsAgo, rawValue, thresholds, higherIsBetter = false, onClick,
// }: StatCardProps) => {
//   const COLORS = useDashboardTokens()
//   const animatedValue = useCountUp(value)
//   const [tilt, setTilt] = useState({ x: 0, y: 0 })

//   const status = getStatus(rawValue, thresholds, higherIsBetter)
//   const statusColor = status === 'critical' ? COLORS.signalLoss : status === 'warning' ? COLORS.energy : accent
//   const isStale = typeof updatedSecondsAgo === 'number' && updatedSecondsAgo > 60

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     const rect = e.currentTarget.getBoundingClientRect()
//     const px = (e.clientX - rect.left) / rect.width - 0.5
//     const py = (e.clientY - rect.top) / rect.height - 0.5
//     setTilt({ x: py * -4, y: px * 4 })
//   }

//   return (
//     <GlassPanel
//       glow={glow ?? `${statusColor}22`}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={() => setTilt({ x: 0, y: 0 })}
//       onClick={onClick}
//       sx={{
//         p: 1.6,
//         height: '100%',
//         cursor: onClick ? 'pointer' : 'default',
//         border: status !== 'normal' ? `1px solid ${statusColor}55` : undefined,
//         transform: `perspective(700px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
//         transition: 'transform 0.15s ease-out, border-color 0.3s ease',
//       }}
//     >
//       <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 1 }}>
//         <Box sx={{ minWidth: 0, flex: 1 }}>
//           <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 0.3 }}>
//             {/* live/stale dot */}
//             {typeof updatedSecondsAgo === 'number' && (
//               <Box
//                 title={isStale ? `Stale — ${updatedSecondsAgo}s ago` : 'Live'}
//                 sx={{
//                   width: 5,
//                   height: 5,
//                   borderRadius: '50%',
//                   flexShrink: 0,
//                   background: isStale ? COLORS.textMuted : COLORS.on,
//                   boxShadow: isStale ? 'none' : `0 0 5px ${COLORS.on}`,
//                   animation: isStale ? 'none' : 'liveDot 1.8s ease-in-out infinite',
//                   '@keyframes liveDot': { '0%, 100%': { opacity: 1 }, '50%': { opacity: 0.35 } },
//                 }}
//               />
//             )}
//             <Typography
//               noWrap
//               sx={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', color: COLORS.textMuted }}
//             >
//               {title}
//             </Typography>
//             {typeof delta === 'number' && (
//               <Box sx={{ fontSize: '9px', fontWeight: 700, color: delta >= 0 ? COLORS.on : COLORS.signalLoss, whiteSpace: 'nowrap' }}>
//                 {delta >= 0 ? '▲' : '▼'}{Math.abs(delta)}%
//               </Box>
//             )}
//           </Box>

//           <Typography
//             sx={{
//               fontFamily: "'JetBrains Mono', monospace",
//               fontSize: '1.15rem',
//               fontWeight: 700,
//               letterSpacing: '-0.01em',
//               color: status === 'normal' ? COLORS.text : statusColor,
//               fontVariantNumeric: 'tabular-nums',
//               lineHeight: 1.2,
//               transition: 'color 0.3s ease',
//             }}
//           >
//             {animatedValue}
//           </Typography>

//           {subtitle && (
//             <Typography noWrap sx={{ fontSize: '10px', color: COLORS.textMuted, mt: 0.2 }}>
//               {subtitle}
//             </Typography>
//           )}
//         </Box>

//         <Box
//           sx={{
//             width: 34,
//             height: 34,
//             flexShrink: 0,
//             borderRadius: '9px',
//             background: `${statusColor}22`,
//             boxShadow: status !== 'normal' ? `0 0 14px ${statusColor}55` : `0 0 12px ${statusColor}33`,
//             transition: 'box-shadow 0.3s ease',
//           }}
//         >
//           <Icon3D name={icon} color={statusColor} size={34} />
//         </Box>
//       </Box>

//       {typeof percent === 'number' && (
//         <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
//           <RadialGauge value={percent} color={statusColor} size={30} strokeWidth={3.5} />
//         </Box>
//       )}

//       {typeof percent !== 'number' && trend && trend.length > 1 && (
//         <Box sx={{ mt: 1 }}>
//           <Sparkline data={trend} color={statusColor} height={22} />
//         </Box>
//       )}
//     </GlassPanel>
//   )
// }

// export default StatCard



'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useSpring, animate, useAnimationControls } from 'framer-motion'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import GlassPanel from '../ui/GlassPanel'
import RadialGauge from '../ui/RadialGuage'
import Sparkline from '../ui/SparkLine'
import Icon3D from '../three/Icon3D'
import { useDashboardTokens } from '../ui/tokens'

// const MotionGlassPanel = motion(GlassPanel)

type Status = 'normal' | 'warning' | 'critical'

interface StatCardProps {
  title: string
  value: string
  icon: string
  accent: string
  subtitle?: string
  percent?: number
  trend?: number[]
  glow?: string
  delta?: number
  updatedSecondsAgo?: number
  rawValue?: number
  thresholds?: { warning: number; critical: number }
  higherIsBetter?: boolean
  onClick?: () => void
}

const parseValue = (value: string) => {
  const match = value.match(/^([\d,]+(?:\.\d+)?)/)
  if (!match) return { target: null as number | null, decimals: 0, suffix: value }
  const decimals = match[1].includes('.') ? match[1].split('.')[1].length : 0
  return { target: parseFloat(match[1].replace(/,/g, '')), decimals, suffix: value.slice(match[1].length) }
}

const useAnimatedValue = (value: string, duration = 1) => {
  const { target, decimals, suffix } = parseValue(value)
  const [display, setDisplay] = useState(
    target === null ? value : `${(0).toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}${suffix}`
  )

  useEffect(() => {
    if (target === null) {
      setDisplay(value)
      return
    }
    const controls = animate(0, target, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: latest =>
        setDisplay(`${latest.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}${suffix}`)
    })
    return controls.stop
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  return display
}

const getStatus = (rawValue: number | undefined, thresholds: StatCardProps['thresholds'], higherIsBetter: boolean): Status => {
  if (rawValue === undefined || !thresholds) return 'normal'
  if (higherIsBetter) {
    if (rawValue <= thresholds.critical) return 'critical'
    if (rawValue <= thresholds.warning) return 'warning'
    return 'normal'
  }
  if (rawValue >= thresholds.critical) return 'critical'
  if (rawValue >= thresholds.warning) return 'warning'
  return 'normal'
}

const StatCard = ({
  title, value, icon, accent, subtitle, percent, trend, glow, delta,
  updatedSecondsAgo, rawValue, thresholds, higherIsBetter = false, onClick
}: StatCardProps) => {
  const COLORS = useDashboardTokens()
  const animatedValue = useAnimatedValue(value)

  const status = getStatus(rawValue, thresholds, higherIsBetter)
  const statusColor = status === 'critical' ? COLORS.signalLoss : status === 'warning' ? COLORS.energy : accent
  const isStale = typeof updatedSecondsAgo === 'number' && updatedSecondsAgo > 60

  // spring-smoothed 3D tilt
  const rotateX = useSpring(0, { stiffness: 220, damping: 18 })
  const rotateY = useSpring(0, { stiffness: 220, damping: 18 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    rotateX.set(py * -6)
    rotateY.set(px * 6)
  }
  const handleMouseLeave = () => { rotateX.set(0); rotateY.set(0) }

  // flash-on-update — briefly rings the card when the live value actually changes
  const flashControls = useAnimationControls()
  const prevValue = useRef(value)

  useEffect(() => {
    if (prevValue.current !== value) {
      flashControls.start({
        boxShadow: [`0 0 0 0px ${statusColor}00`, `0 0 0 4px ${statusColor}55`, `0 0 0 0px ${statusColor}00`],
        transition: { duration: 0.9, ease: 'easeOut' }
      })
      prevValue.current = value
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  return (
    
    <GlassPanel
      glow={glow ?? `${statusColor}22`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      animate={flashControls}
      whileHover={{ scale: 1.015 }}
      whileTap={onClick ? { scale: 0.985 } : undefined}
      style={{ rotateX, rotateY, perspective: 700 }}
      sx={{
        p: 1.6,
        height: '100%',
        cursor: onClick ? 'pointer' : 'default',
        border: status !== 'normal' ? `1px solid ${statusColor}55` : undefined,
        transition: 'border-color 0.3s ease'
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 1 }}>
        <Box sx={{ minWidth: 0, flex: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 0.3 }}>
            {typeof updatedSecondsAgo === 'number' && (
              <Box
                title={isStale ? `Stale — ${updatedSecondsAgo}s ago` : 'Live'}
                sx={{
                  width: 5,
                  height: 5,
                  borderRadius: '50%',
                  flexShrink: 0,
                  background: isStale ? COLORS.textMuted : COLORS.on,
                  boxShadow: isStale ? 'none' : `0 0 5px ${COLORS.on}`,
                  animation: isStale ? 'none' : 'liveDot 1.8s ease-in-out infinite',
                  '@keyframes liveDot': { '0%, 100%': { opacity: 1 }, '50%': { opacity: 0.35 } }
                }}
              />
            )}
            <Typography noWrap sx={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', color: COLORS.textMuted }}>
              {title}
            </Typography>
            {typeof delta === 'number' && (
              <motion.div
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ fontSize: 9, fontWeight: 700, color: delta >= 0 ? COLORS.on : COLORS.signalLoss, whiteSpace: 'nowrap' }}
              >
                {delta >= 0 ? '▲' : '▼'}{Math.abs(delta)}%
              </motion.div>
            )}
          </Box>

          <Typography
            sx={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '1.15rem',
              fontWeight: 700,
              letterSpacing: '-0.01em',
              color: status === 'normal' ? COLORS.text : statusColor,
              fontVariantNumeric: 'tabular-nums',
              lineHeight: 1.2,
              transition: 'color 0.3s ease'
            }}
          >
            {animatedValue}
          </Typography>

          {subtitle && (
            <Typography noWrap sx={{ fontSize: '10px', color: COLORS.textMuted, mt: 0.2 }}>
              {subtitle}
            </Typography>
          )}
        </Box>

        <motion.div
          animate={
            status !== 'normal'
              ? { boxShadow: [`0 0 12px ${statusColor}33`, `0 0 20px ${statusColor}66`, `0 0 12px ${statusColor}33`] }
              : { boxShadow: `0 0 12px ${statusColor}33` }
          }
          transition={status !== 'normal' ? { duration: 1.6, repeat: Infinity } : {}}
          style={{ width: 34, height: 34, flexShrink: 0, borderRadius: 9, background: `${statusColor}22` }}
        >
          <Icon3D name={icon} color={statusColor} size={34} />
        </motion.div>
      </Box>

      {typeof percent === 'number' && (
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
          <RadialGauge value={percent} color={statusColor} size={30} strokeWidth={3.5} />
        </Box>
      )}

      {typeof percent !== 'number' && trend && trend.length > 1 && (
        <Box sx={{ mt: 1 }}>
          <Sparkline data={trend} color={statusColor} height={22} />
        </Box>
      )}
    </GlassPanel>
  )
}

export default StatCard