// views/dashboard/ui/Sparkline.tsx
'use client'

import { useMemo } from 'react'
import Box from '@mui/material/Box'

interface SparklineProps {
    data: number[]
    color: string
    height?: number
}

const Sparkline = ({ data, color, height = 26 }: SparklineProps) => {
    const { path, area, lastX, lastY } = useMemo(() => {
        const w = 100
        const h = height
        const min = Math.min(...data)
        const max = Math.max(...data)
        const range = max - min || 1
        const pts = data.map((d, i) => {
            const x = (i / (data.length - 1)) * w
            const y = h - ((d - min) / range) * (h - 4) - 2
            return [x, y]
        })
        const path = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0]},${p[1]}`).join(' ')
        const area = `${path} L${w},${h} L0,${h} Z`
        const [lastX, lastY] = pts[pts.length - 1]
        return { path, area, lastX, lastY }
    }, [data, height])

    return (
        <Box sx={{ width: '100%', height }}>
            <svg viewBox={`0 0 100 ${height}`} preserveAspectRatio='none' width='100%' height={height}>
                <defs>
                    <linearGradient id={`spark-${color}`} x1='0' y1='0' x2='0' y2='1'>
                        <stop offset='0%' stopColor={color} stopOpacity={0.35} />
                        <stop offset='100%' stopColor={color} stopOpacity={0} />
                    </linearGradient>
                </defs>
                <path d={area} fill={`url(#spark-${color})`} stroke='none' />
                <path
                    d={path}
                    fill='none'
                    stroke={color}
                    strokeWidth={1.6}
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    vectorEffect='non-scaling-stroke'
                    style={{
                        strokeDasharray: 200,
                        strokeDashoffset: 200,
                        animation: 'sparkDraw 1.1s cubic-bezier(0.4,0,0.2,1) forwards',
                    }}
                />
                <circle cx={lastX} cy={lastY} r={2} fill={color} />
                <style>{`@keyframes sparkDraw { to { stroke-dashoffset: 0; } }`}</style>
            </svg>
        </Box>
    )
}

export default Sparkline