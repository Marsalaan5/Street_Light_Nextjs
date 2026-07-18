'use client'

import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'

interface AnimatedNumberProps {
    value: number
    format?: (n: number) => string
    duration?: number
    style?: React.CSSProperties
    className?: string
}

const defaultFormat = (n: number) => Math.round(n).toLocaleString()

const AnimatedNumber = ({ value, format = defaultFormat, duration = 1.1, style, className }: AnimatedNumberProps) => {
    const motionVal = useMotionValue(0)
    const display = useTransform(motionVal, latest => format(latest))
    const ref = useRef<HTMLSpanElement>(null)

    useEffect(() => {
        const controls = animate(motionVal, value, { duration, ease: [0.16, 1, 0.3, 1] })
        return controls.stop
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])

    useEffect(() => {
        const unsub = display.on('change', v => {
            if (ref.current) ref.current.textContent = v
        })
        return unsub
    }, [display])

    return (
        <motion.span ref={ref} style={style} className={className}>
            0
        </motion.span>
    )
}

export default AnimatedNumber