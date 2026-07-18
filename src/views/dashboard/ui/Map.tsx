// views/dashboard/ui/RealMap.tsx
'use client'

import dynamic from 'next/dynamic'
import Box from '@mui/material/Box'

import { useDashboardTokens } from './tokens'
import { FAULTY_COLOR } from '@/types/light/types'
import type { MapPoint } from './MapInner'

const MapInner = dynamic(() => import('./MapInner'), {
    ssr: false,
    loading: () => <Box sx={{ height: '100%', width: '100%' }} />
})

interface MapProps {
    points: MapPoint[]
    height: number
}

const Map = ({ points, height }: MapProps) => {
    const t = useDashboardTokens()

    return (
        <Box sx={{ height, borderRadius: 'inherit', overflow: 'hidden', border: `1px solid ${t.border}`, bgcolor:'#0a0e14' }}>
            <MapInner points={points} height={height} onColor={t.on} offColor={t.signalLoss} faultyColor={FAULTY_COLOR} />
        </Box>
    )
}

export default Map
export type { MapPoint }