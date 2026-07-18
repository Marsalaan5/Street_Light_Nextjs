// 'use client'

// import Box from '@mui/material/Box'
// import { useDashboardTokens } from './tokens'

// interface AnimatedBarProps {
//     percent: number
//     color: string
//     delay?: number
//     height?: number
// }

// const AnimatedBar = ({ percent, color, delay = 0, height = 6 }: AnimatedBarProps) => {
//     const t = useDashboardTokens()

//     return (
//         <Box
//             sx={{
//                 height,
//                 borderRadius: height,
//                 background: t.trackBg,
//                 overflow: 'hidden',
//             }}
//         >
//             <Box
//                 sx={{
//                     height: '100%',
//                     width: `${percent}%`,
//                     borderRadius: height,
//                     position: 'relative',
//                     background: `linear-gradient(90deg, ${color}, ${color}CC)`,
//                     '@keyframes fillIn': {
//                         from: { width: 0 },
//                     },
//                     animation: `fillIn 1.3s cubic-bezier(0.4,0,0.2,1) ${delay}s both`,
//                     '&::after': {
//                         content: '""',
//                         position: 'absolute',
//                         inset: 0,
//                         background: `linear-gradient(90deg, transparent, ${t.shimmer}, transparent)`,
//                         '@keyframes shimmer': {
//                             from: { transform: 'translateX(-100%)' },
//                             to: { transform: 'translateX(400%)' },
//                         },
//                         animation: 'shimmer 2.2s infinite',
//                     },
//                 }}
//             />
//         </Box>
//     )
// }

// export default AnimatedBar



'use client'

import { motion } from 'framer-motion'
import Box from '@mui/material/Box'
import { useDashboardTokens } from './tokens'

interface AnimatedBarProps {
    percent: number
    color: string
    delay?: number
    height?: number
}

const AnimatedBar = ({ percent, color, delay = 0, height = 6 }: AnimatedBarProps) => {
    const t = useDashboardTokens()

    return (
        <Box sx={{ height, borderRadius: height, background: t.trackBg, overflow: 'hidden' }}>
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${percent}%` }}
                transition={{ type: 'spring', stiffness: 90, damping: 17, delay }}
                style={{
                    height: '100%',
                    borderRadius: height,
                    position: 'relative',
                    overflow: 'hidden',
                    background: `linear-gradient(90deg, ${color}, ${color}CC)`
                }}
            >
                <motion.div
                    animate={{ x: ['-100%', '400%'] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: 'linear', delay: delay + 0.3 }}
                    style={{
                        position: 'absolute',
                        inset: 0,
                        width: '100%',
                        background: `linear-gradient(90deg, transparent, ${t.shimmer}, transparent)`
                    }}
                />
            </motion.div>
        </Box>
    )
}

export default AnimatedBar