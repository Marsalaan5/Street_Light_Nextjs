// // views/dashboard/ui/ExpandModal.tsx
// 'use client'

// import Dialog from '@mui/material/Dialog'
// import Box from '@mui/material/Box'
// import Typography from '@mui/material/Typography'
// import IconButton from '@mui/material/IconButton'
// import { useDashboardTokens } from './tokens'

// interface ExpandModalProps {
//     open: boolean
//     onClose: () => void
//     title: string
//     subtitle?: string
//     icon?: string
//     accent?: string
//     children: React.ReactNode
// }

// const ExpandModal = ({ open, onClose, title, subtitle, icon, accent, children }: ExpandModalProps) => {
//     const t = useDashboardTokens()

//     return (
//         <Dialog
//             open={open}
//             onClose={onClose}
//             maxWidth='md'
//             fullWidth
//             sx={{ zIndex: 100000 }}
//             slotProps={{
//                 paper: {
//                     sx: {
//                         bgcolor: `${t.panel} !important`,
//                         backgroundImage: 'none !important',
//                         backdropFilter: 'blur(20px)',
//                         border: `1px solid ${t.borderStrong}`,
//                         borderRadius: '20px',
//                         colorScheme: 'dark',
//                         color: t.text,
//                     },
//                 },
//                 backdrop: {
//                     sx: { backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(2px)' },
//                 },
//             }}
//         >
//             <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 3, py: 2.2, borderBottom: `1px solid ${t.border}` }}>
//                 <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.3, minWidth: 0 }}>
//                     {icon && (
//                         <Box
//                             sx={{
//                                 width: 36, height: 36, borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center',
//                                 flexShrink: 0, background: `${accent ?? t.connected}22`, color: accent ?? t.connected,
//                             }}
//                         >
//                             <i className={icon} style={{ fontSize: 17 }} />
//                         </Box>
//                     )}
//                     <Box sx={{ minWidth: 0 }}>
//                         <Typography noWrap sx={{ fontWeight: 800, fontSize: '1.05rem', color: t.text }}>{title}</Typography>
//                         {subtitle && <Typography noWrap sx={{ fontSize: '.78rem', color: t.textMuted, mt: 0.3 }}>{subtitle}</Typography>}
//                     </Box>
//                 </Box>
//                 <IconButton onClick={onClose} size='small' sx={{ color: t.textMuted, '&:hover': { color: t.text } }}>
//                     <i className='ri-close-line' style={{ fontSize: 20 }} />
//                 </IconButton>
//             </Box>
//             <Box sx={{ p: 3, bgcolor: t.panel }}>{children}</Box>
//         </Dialog>
//     )
// }

// export default ExpandModal



'use client'

import { forwardRef } from 'react'
import Dialog from '@mui/material/Dialog'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import { motion } from 'framer-motion'

import { useDashboardTokens } from './tokens'

interface ExpandModalProps {
    open: boolean
    onClose: () => void
    title: string
    subtitle?: string
    icon?: string
    accent?: string
    children: React.ReactNode
}

// Bridges react-transition-group's API (which MUI Dialog drives internally)
// to framer-motion's variant system.
const ModalTransition = forwardRef(function ModalTransition(props: any, ref) {
    const { children, in: inProp, onEnter, onExited, ...other } = props
    return (
        <motion.div
            ref={ref}
            initial={false}
            animate={inProp ? 'enter' : 'exit'}
            variants={{
                enter: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 26 } },
                exit: { opacity: 0, scale: 0.94, y: 24, transition: { duration: 0.18, ease: 'easeIn' } }
            }}
            onAnimationStart={() => inProp && onEnter?.(true)}
            onAnimationComplete={() => !inProp && onExited?.(true)}
            {...other}
        >
            {children}
        </motion.div>
    )
})

const ExpandModal = ({ open, onClose, title, subtitle, icon, accent, children }: ExpandModalProps) => {
    const t = useDashboardTokens()

    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="md"
            fullWidth
            slots={{
                transition: ModalTransition,
            }}
            sx={{ zIndex: 100000 }}
            slotProps={{
                paper: {
                    sx: {
                        bgcolor: `${t.panel} !important`,
                        backgroundImage: 'none !important',
                        backdropFilter: 'blur(20px)',
                        border: `1px solid ${t.borderStrong}`,
                        borderRadius: '20px',
                        colorScheme: 'dark',
                        color: t.text,
                    },
                },
                backdrop: {
                    sx: {
                        backgroundColor: 'rgba(0,0,0,0.6)',
                        backdropFilter: 'blur(2px)',
                        transition: 'opacity .25s ease',
                    },
                },
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 3, py: 2.2, borderBottom: `1px solid ${t.border}` }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.3, minWidth: 0 }}>
                    {icon && (
                        <motion.div
                            initial={{ scale: 0.5, rotate: -20, opacity: 0 }}
                            animate={{ scale: 1, rotate: 0, opacity: 1 }}
                            transition={{ type: 'spring', stiffness: 280, damping: 18, delay: 0.05 }}
                            style={{
                                width: 36,
                                height: 36,
                                borderRadius: 10,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                                background: `${accent ?? t.connected}22`,
                                color: accent ?? t.connected
                            }}
                        >
                            <i className={icon} style={{ fontSize: 17 }} />
                        </motion.div>
                    )}
                    <Box sx={{ minWidth: 0 }}>
                        <Typography noWrap sx={{ fontWeight: 800, fontSize: '1.05rem', color: t.text }}>{title}</Typography>
                        {subtitle && <Typography noWrap sx={{ fontSize: '.78rem', color: t.textMuted, mt: 0.3 }}>{subtitle}</Typography>}
                    </Box>
                </Box>
                <IconButton onClick={onClose} size='small' sx={{ color: t.textMuted, '&:hover': { color: t.text } }}>
                    <i className='ri-close-line' style={{ fontSize: 20 }} />
                </IconButton>
            </Box>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1, duration: 0.3 }}>
                <Box sx={{ p: 3, bgcolor: t.panel }}>{children}</Box>
            </motion.div>
        </Dialog>
    )
}

export default ExpandModal