'use client'

import { useEffect, useRef, useState } from 'react'
import Box from '@mui/material/Box'
import { useDashboardTokens } from './tokens'

interface RadialGaugeProps {
    value: number
    color: string
    size?: number
    strokeWidth?: number
    label?: string
}

const RadialGauge = ({ value, color, size = 52, strokeWidth = 5, label }: RadialGaugeProps) => {
    const t = useDashboardTokens()
    const [animated, setAnimated] = useState(0)
    const raf = useRef<number | null>(null)

    useEffect(() => {
        const timer = setTimeout(() => setAnimated(value), 80)

        return () => {
            clearTimeout(timer)

            if (raf.current !== null) {
                cancelAnimationFrame(raf.current)
            }
        }
    }, [value])

    const radius = (size - strokeWidth) / 2
    const circumference = 2 * Math.PI * radius
    const offset = circumference - (animated / 100) * circumference

    return (
        <Box sx={{ position: 'relative', width: size, height: size, flexShrink: 0 }}>
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ transform: 'rotate(-90deg)' }}>
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill='none'
                    stroke={t.trackBg}
                    strokeWidth={strokeWidth}
                />
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill='none'
                    stroke={color}
                    strokeWidth={strokeWidth}
                    strokeLinecap='round'
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    style={{ transition: 'stroke-dashoffset 1.4s cubic-bezier(0.4,0,0.2,1)' }}
                />
            </svg>
            <Box
                sx={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: size < 50 ? '10px' : '11px',
                    fontWeight: 700,
                    color: t.text,
                }}
            >
                {label ?? `${Math.round(value)}%`}
            </Box>
        </Box>
    )
}

export default RadialGauge