// 'use client'

// import type { ReactNode } from 'react'
// import { motion } from 'framer-motion'
// import Box from '@mui/material/Box'
// import Typography from '@mui/material/Typography'

// import { useDashboardTokens } from './tokens'

// interface Crumb { label: string; href?: string }

// interface PageHeaderProps {
//     title: string
//     subtitle?: string
//     crumbs?: Crumb[]
//     actions?: ReactNode
// }

// const PageHeader = ({ title, subtitle, crumbs, actions }: PageHeaderProps) => {
//     const t = useDashboardTokens()

//     return (
//         <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
//             <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 2, mb: 2.5 }}>
//                 <Box>
//                     {crumbs && crumbs.length > 0 && (
//                         <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.6, mb: 0.6 }}>
//                             {crumbs.map((c, i) => (
//                                 <Box key={c.label} sx={{ display: 'flex', alignItems: 'center', gap: 0.6 }}>
//                                     <Typography sx={{ fontSize: '.72rem', color: i === crumbs.length - 1 ? t.text : t.textMuted, fontWeight: i === crumbs.length - 1 ? 700 : 500 }}>
//                                         {c.label}
//                                     </Typography>
//                                     {i < crumbs.length - 1 && <Typography sx={{ fontSize: '.72rem', color: t.textDisabled }}>/</Typography>}
//                                 </Box>
//                             ))}
//                         </Box>
//                     )}
//                     <Typography sx={{ fontSize: { xs: '1.15rem', md: '1.35rem' }, fontWeight: 800, color: t.text, letterSpacing: '-0.02em' }}>
//                         {title}
//                     </Typography>
//                     {subtitle && <Typography sx={{ fontSize: '.8rem', color: t.textMuted, mt: 0.4 }}>{subtitle}</Typography>}
//                 </Box>
//                 {actions && (
//                     <motion.div initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} style={{ display: 'flex', gap: 8 }}>
//                         {actions}
//                     </motion.div>
//                 )}
//             </Box>
//         </motion.div>
//     )
// }

// export default PageHeader






'use client'

import type { ReactNode } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import { useDashboardTokens } from './tokens'

interface Crumb { label: string; href?: string }

interface PageHeaderProps {
    title: string
    subtitle?: string
    crumbs?: Crumb[]
    actions?: ReactNode
    /** Set to false to hide the back-to-dashboard link (e.g. on the dashboard itself) */
    showBack?: boolean
    /** Route the back link points to */
    backHref?: string
    /** Label shown next to the back arrow */
    backLabel?: string
}

const PageHeader = ({
    title,
    subtitle,
    crumbs,
    actions,
    showBack = true,
    backHref = '/',
    backLabel = 'Back to Dashboard'
}: PageHeaderProps) => {
    const t = useDashboardTokens()

    return (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            {showBack && (
                <Link href={backHref} style={{ textDecoration: 'none' }}>
                    <motion.div
                        whileHover={{ x: -3 }}
                        whileTap={{ scale: 0.97 }}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 6,
                            marginBottom: 14,
                            padding: '6px 10px 6px 6px',
                            borderRadius: 8,
                            color: t.textMuted,
                            fontSize: '.78rem',
                            fontWeight: 700,
                            cursor: 'pointer'
                        }}
                    >
                        <i className='ri-arrow-left-line' style={{ fontSize: 15 }} />
                        {backLabel}
                    </motion.div>
                </Link>
            )}

            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 2, mb: 2.5 }}>
                <Box>
                    {crumbs && crumbs.length > 0 && (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.6, mb: 0.6 }}>
                            {crumbs.map((c, i) => (
                                <Box key={c.label} sx={{ display: 'flex', alignItems: 'center', gap: 0.6 }}>
                                    <Typography sx={{ fontSize: '.72rem', color: i === crumbs.length - 1 ? t.text : t.textMuted, fontWeight: i === crumbs.length - 1 ? 700 : 500 }}>
                                        {c.label}
                                    </Typography>
                                    {i < crumbs.length - 1 && <Typography sx={{ fontSize: '.72rem', color: t.textDisabled }}>/</Typography>}
                                </Box>
                            ))}
                        </Box>
                    )}
                    <Typography sx={{ fontSize: { xs: '1.15rem', md: '1.35rem' }, fontWeight: 800, color: t.text, letterSpacing: '-0.02em' }}>
                        {title}
                    </Typography>
                    {subtitle && <Typography sx={{ fontSize: '.8rem', color: t.textMuted, mt: 0.4 }}>{subtitle}</Typography>}
                </Box>
                {actions && (
                    <motion.div initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} style={{ display: 'flex', gap: 8 }}>
                        {actions}
                    </motion.div>
                )}
            </Box>
        </motion.div>
    )
}

export default PageHeader