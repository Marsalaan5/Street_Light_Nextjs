'use client'

import { useMemo } from 'react'
import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Responsive, WidthProvider } from 'react-grid-layout/legacy'
import type { ResponsiveLayouts } from 'react-grid-layout/legacy'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import RestartAltIcon from '@mui/icons-material/RestartAlt'

import { useDashboardTokens } from '@/views/dashboard/ui/tokens'
import { useGridLayout } from './useGridLayout'
import DragHandle from './DragHandle'



const ResponsiveGridLayout = WidthProvider(Responsive)

export interface GridItem {
    id: string
    node: ReactNode
}


interface GridSectionProps {
    storageKey: string
    defaultLayouts: ResponsiveLayouts
    items: GridItem[]
    cols: Record<string, number>
    rowHeight?: number
    title?: string
}

const GridSection = ({ storageKey, defaultLayouts, items, cols, rowHeight = 42, title }: GridSectionProps) => {
    const t = useDashboardTokens()
    const { layouts, mounted, handleLayoutChange, resetLayout, notifyResizeSettled } = useGridLayout({
        storageKey,
        defaultLayouts,
    })

    const children = useMemo(
        () =>
            items.map((item, idx) => (
                <Box
                    key={item.id}
                    className='grid-item-wrapper'
                    sx={{ height: '100%', position: 'relative', '&:hover .drag-handle': { opacity: 1 } }}
                >
                    <DragHandle />
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: idx * 0.04 }}
                        style={{ height: '100%' }}
                    >
                        {item.node}
                    </motion.div>
                </Box>
            )),
        [items],
    )

    return (
        <Box sx={{ mb: 3 }}>
            {title && (
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
                    <Typography sx={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: t.textMuted }}>
                        {title}
                    </Typography>
                    <Tooltip title='Reset layout'>
                        <IconButton size='small' onClick={resetLayout} sx={{ color: t.textMuted, '&:hover': { color: t.energy } }}>
                            <RestartAltIcon sx={{ fontSize: 16 }} />
                        </IconButton>
                    </Tooltip>
                </Box>
            )}

            <ResponsiveGridLayout
                className='layout'
                layouts={layouts}
                breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
                cols={cols}
                rowHeight={rowHeight}
                margin={[16, 16]}
                containerPadding={[0, 0]}
                draggableHandle='.drag-handle'
                onLayoutChange={handleLayoutChange}
                onDragStop={notifyResizeSettled}
                onResizeStop={notifyResizeSettled}
                measureBeforeMount={!mounted}
            >
                {children}
            </ResponsiveGridLayout>
        </Box>
    )
}

export default GridSection