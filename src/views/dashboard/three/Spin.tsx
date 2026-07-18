

// // views/dashboard/three/Spin.tsx
// 'use client'

// import { useRef } from 'react'
// import { useFrame } from '@react-three/fiber'
// import type { Group } from 'three'

// interface SpinProps {
//     Model: React.ComponentType<{ color: string; hovered: boolean }>
//     color: string
//     hovered: boolean
// }

// export const Spin = ({ Model, color, hovered }: SpinProps) => {
//     const group = useRef<Group>(null)
//     useFrame(({ clock }, delta) => {
//         if (!group.current) return
//         group.current.rotation.y += delta * (hovered ? 1.6 : 0.4)
//         group.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.6) * 0.12
//     })
//     return (
//         <group ref={group}>
//             <Model color={color} hovered={hovered} />
//         </group>
//     )
// }



// views/dashboard/three/Spin.tsx
'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { MathUtils } from 'three'
import type { Group } from 'three'

interface SpinProps {
    Model: React.ComponentType<{ color: string; hovered: boolean }>
    color: string
    hovered: boolean
}

const IDLE_SPEED = 0.4
const HOVER_SPEED = 1.6
const IDLE_SCALE = 1
const HOVER_SCALE = 1.12

export const Spin = ({ Model, color, hovered }: SpinProps) => {
    const group = useRef<Group>(null)

    // Smoothed values that chase the target — this is what turns a snap into an ease
    const speed = useRef(IDLE_SPEED)
    const scale = useRef(IDLE_SCALE)

    useFrame(({ clock }, delta) => {
        if (!group.current) return

        // damp(current, target, smoothing time constant, delta) — exponential ease, frame-rate independent
        speed.current = MathUtils.damp(speed.current, hovered ? HOVER_SPEED : IDLE_SPEED, 4, delta)
        scale.current = MathUtils.damp(scale.current, hovered ? HOVER_SCALE : IDLE_SCALE, 6, delta)

        group.current.rotation.y += delta * speed.current
        group.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.6) * 0.12
        group.current.scale.setScalar(scale.current)
    })

    return (
        <group ref={group}>
            <Model color={color} hovered={hovered} />
        </group>
    )
}