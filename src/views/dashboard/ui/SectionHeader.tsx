// // views/dashboard/ui/SectionHeader.tsx
// 'use client'

// import type { ReactNode } from 'react'

// import Box from '@mui/material/Box'
// import Typography from '@mui/material/Typography'
// // import IconButton from '@mui/material/IconButton'

// import { useDashboardTokens } from './tokens'

// interface SectionHeaderProps {
//     title: string
//     subtitle: string
//     icon: string
//     accent: string
//     rightSlot?: ReactNode
//     onExpand?: () => void
// }

// // const SectionHeader = ({ title, subtitle, icon, accent, rightSlot }: SectionHeaderProps) => {
// const SectionHeader = ({ title, subtitle, icon, accent, rightSlot, onExpand }: SectionHeaderProps) => {
//     const t = useDashboardTokens()

//     return (
//         <Box
//             sx={{
//                 flexShrink: 0,
//                 px: 2.5,
//                 py: 2,
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'space-between',
//                 borderBottom: `1px solid ${t.border}`,
//             }}
//         >
//             <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, minWidth: 0 }}>
//                 <Box
//                     sx={{
//                         width: 42,
//                         height: 42,
//                         borderRadius: '12px',
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         fontSize: 20,
//                         flexShrink: 0,
//                         background: `${accent}22`,
//                         color: accent,
//                         boxShadow: `0 0 18px ${accent}40`,
//                     }}
//                 >
//                     <i className={icon} />
//                 </Box>
//                 <Box sx={{ minWidth: 0 }}>
//                     <Typography sx={{ color: t.text, fontWeight: 700, fontSize: '0.95rem' }}>{title}</Typography>
//                     <Typography sx={{ color: t.textMuted, fontSize: '0.72rem', mt: 0.2 }}>{subtitle}</Typography>
//                 </Box>
//             </Box>
//             {/* {rightSlot} */}
//             <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
//                 {rightSlot}
//                 {onExpand && (
//                     // <IconButton
//                     //     size='small'
//                     //     onClick={onExpand}
//                     //     sx={{ color: t.textMuted, border: `1px solid ${t.border}`, borderRadius: '8px', '&:hover': { color: t.text, borderColor: t.borderStrong } }}
//                     // >
//                     //     <i className='ri-expand-diagonal-line' style={{ fontSize: 15 }} />
//                     // </IconButton>
//                     <Box
//                         component='button'
//                         onClick={onExpand}
//                         sx={{
//                             width: 30,
//                             height: 30,
//                             display: 'flex',
//                             alignItems: 'center',
//                             justifyContent: 'center',
//                             color: t.textMuted,
//                             bgcolor: 'transparent',
//                             border: `1px solid ${t.border}`,
//                             borderRadius: '8px',
//                             cursor: 'pointer',
//                             transition: '.2s',
//                             '&:hover': { color: t.text, borderColor: t.borderStrong, bgcolor: `${accent}14` },
//                         }}
//                     >
//                         <i className='ri-fullscreen-line' style={{ fontSize: 14 }} />
//                     </Box>
//                 )}
//             </Box>
//         </Box>
//     )
// }

// export default SectionHeader



'use client'

import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import { useDashboardTokens } from './tokens'

interface SectionHeaderProps {
    title: string
    subtitle: string
    icon: string
    accent: string
    rightSlot?: ReactNode
    onExpand?: () => void
}

const SectionHeader = ({ title, subtitle, icon, accent, rightSlot, onExpand }: SectionHeaderProps) => {
    const t = useDashboardTokens()

    return (
        <Box sx={{ flexShrink: 0, px: 2.5, py: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: `1px solid ${t.border}` }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, minWidth: 0 }}>
                <motion.div
                    initial={{ scale: 0.6, opacity: 0, rotate: -12 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                    whileHover={{ scale: 1.08, rotate: -4 }}
                    transition={{ type: 'spring', stiffness: 320, damping: 20 }}
                    style={{
                        width: 42,
                        height: 42,
                        borderRadius: 12,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 20,
                        flexShrink: 0,
                        background: `${accent}22`,
                        color: accent,
                        boxShadow: `0 0 18px ${accent}40`
                    }}
                >
                    <i className={icon} />
                </motion.div>
                <Box sx={{ minWidth: 0 }}>
                    <Typography sx={{ color: t.text, fontWeight: 700, fontSize: '0.95rem' }}>{title}</Typography>
                    <Typography sx={{ color: t.textMuted, fontSize: '0.72rem', mt: 0.2 }}>{subtitle}</Typography>
                </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
                {rightSlot && (
                    <motion.div initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
                        {rightSlot}
                    </motion.div>
                )}
                {onExpand && (
                    <motion.button
                        onClick={onExpand}
                        whileHover={{ scale: 1.1, rotate: 8 }}
                        whileTap={{ scale: 0.9 }}
                        style={{
                            width: 30,
                            height: 30,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: t.textMuted,
                            background: 'transparent',
                            border: `1px solid ${t.border}`,
                            borderRadius: 8,
                            cursor: 'pointer'
                        }}
                    >
                        <i className='ri-fullscreen-line' style={{ fontSize: 14 }} />
                    </motion.button>
                )}
            </Box>
        </Box>
    )
}

export default SectionHeader