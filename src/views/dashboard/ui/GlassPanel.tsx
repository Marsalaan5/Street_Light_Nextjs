// // views/dashboard/ui/GlassPanel.tsx
// 'use client'

// import Box, { BoxProps } from '@mui/material/Box'
// import { useDashboardTokens } from './tokens'

// interface GlassPanelProps extends BoxProps {
//     glow?: string // rgba color used for the top-corner ambient glow
// }

// const GlassPanel = ({ glow, children, sx, ...rest }: GlassPanelProps) => {
//     const COLORS = useDashboardTokens()

//     return (
//         <Box
//             {...rest}
//             sx={{
//                 position: 'relative',
//                 background: COLORS.panel,
//                 backdropFilter: 'blur(14px)',
//                 WebkitBackdropFilter: 'blur(14px)',
//                 border: `1px solid ${COLORS.border}`,
//                 borderRadius: '16px',
//                 overflow: 'hidden',
//                 transition: 'border-color .25s ease, transform .25s ease, box-shadow .25s ease',
//                 '&:hover': {
//                     borderColor: COLORS.borderStrong,
//                     transform: 'translateY(-2px)',
//                 },
//                 '&::before': glow
//                     ? {
//                         content: '""',
//                         position: 'absolute',
//                         inset: 0,
//                         background: `radial-gradient(120px 80px at 85% -10%, ${glow}, transparent 70%)`,
//                         pointerEvents: 'none',
//                     }
//                     : undefined,
//                 ...sx,
//             }}
//         >
//             {children}
//         </Box>
//     )
// }

// export default GlassPanel


// views/dashboard/ui/GlassPanel.tsx


'use client'

import { motion, type MotionProps } from 'framer-motion'
import Box, { type BoxProps } from '@mui/material/Box'
import { useDashboardTokens } from './tokens'

const MotionBox = motion(Box)

interface GlassPanelProps
    extends Omit<BoxProps, keyof MotionProps>,
    MotionProps {
    glow?: string
}
const GlassPanel = ({ glow, children, sx, whileHover, whileTap, animate, initial, transition, ...rest }: GlassPanelProps) => {
    const COLORS = useDashboardTokens()

    return (
        <MotionBox
            {...rest}
            whileHover={whileHover ?? { y: -4 }}
            whileTap={whileTap}
            animate={animate}
            initial={initial}
            transition={transition ?? { type: 'spring', stiffness: 300, damping: 24 }}
            sx={{
                position: 'relative',
                background: COLORS.panel,
                backdropFilter: 'blur(14px)',
                WebkitBackdropFilter: 'blur(14px)',
                border: `1px solid ${COLORS.border}`,
                borderRadius: '16px',
                overflow: 'hidden',
                transition: 'border-color .25s ease, box-shadow .25s ease',
                '&:hover': { borderColor: COLORS.borderStrong },
                '&::before': glow
                    ? {
                        content: '""',
                        position: 'absolute',
                        inset: 0,
                        background: `radial-gradient(120px 80px at 85% -10%, ${glow}, transparent 70%)`,
                        pointerEvents: 'none'
                    }
                    : undefined,
                ...sx
            }}
        >
            {children}
        </MotionBox>
    )
}

export default GlassPanel