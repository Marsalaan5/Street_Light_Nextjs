


// views/dashboard/three/models.tsx
'use client'

import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { RoundedBox } from '@react-three/drei'
import { MathUtils, Shape } from 'three'
import type { Mesh, Group } from 'three'

import { CobraLamp } from './CobraLamp'

interface ModelProps {
    color: string
    hovered: boolean
}

const glossy = (color: string, extra = {}) => (
    <meshPhysicalMaterial color={color} roughness={0.22} metalness={0.25} clearcoat={0.9} clearcoatRoughness={0.15} {...extra} />
)

// export const Router3D = ({ color, hovered }: ModelProps) => {
//     const tip = useRef<Mesh>(null)
//     useFrame(({ clock }) => {
//         if (tip.current) tip.current.scale.setScalar(1 + Math.sin(clock.getElapsedTime() * 4) * (hovered ? 0.28 : 0.14))
//     })

export const Router3D = ({ color, hovered }: ModelProps) => {
    const tip = useRef<Mesh>(null)
    const amp = useRef(0.14)
    useFrame(({ clock }, delta) => {
        amp.current = MathUtils.damp(amp.current, hovered ? 0.28 : 0.14, 5, delta)
        if (tip.current) tip.current.scale.setScalar(1 + Math.sin(clock.getElapsedTime() * 4) * amp.current)
    })

    return (
        <group scale={0.85}>
            <mesh position={[0, -0.3, 0]}>
                <boxGeometry args={[0.5, 0.55, 0.5]} />
                {glossy('#232A38', { metalness: 0.5 })}
            </mesh>
            <mesh position={[0, 0.3, 0]}>
                <cylinderGeometry args={[0.035, 0.035, 0.6, 12]} />
                {glossy(color)}
            </mesh>
            <mesh ref={tip} position={[0, 0.62, 0]}>
                <sphereGeometry args={[0.09, 16, 16]} />
                <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.8} toneMapped={false} />
            </mesh>
            <mesh position={[0, 0.05, 0]} rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[0.26, 0.02, 8, 24, Math.PI]} />
                <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
            </mesh>
        </group>
    )
}

export const Wifi3D = ({ color, hovered }: ModelProps) => {
    const group = useRef<Group>(null)
    useFrame(({ clock }) => {
        if (!group.current) return
        const t = clock.getElapsedTime()
        group.current.children.forEach((c, i) => {
            const phase = t * (hovered ? 3 : 1.4) - i * 0.5
            c.scale.setScalar(1 + Math.max(0, Math.sin(phase)) * 0.12)
        })
    })
    return (
        <group ref={group} scale={0.85} rotation={[0.3, 0, 0]}>
            {[0.2, 0.34, 0.48].map((r, i) => (
                <mesh key={r} position={[0, -0.15 + i * 0.02, 0]}>
                    <torusGeometry args={[r, 0.035, 8, 24, Math.PI]} />
                    <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5 - i * 0.1} roughness={0.3} />
                </mesh>
            ))}
            <mesh position={[0, -0.15, 0]}>
                <sphereGeometry args={[0.07, 16, 16]} />
                <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.5} toneMapped={false} />
            </mesh>
        </group>
    )
}

// export
//  const SignalOff3D = ({ color, hovered }: ModelProps) => (
//     <group scale={0.85}>
//         <mesh rotation={[0, 0, Math.PI / 4]}>
//             <boxGeometry args={[0.75, 0.09, 0.09]} />
//             {glossy(color)}
//         </mesh>
//         <mesh rotation={[0, 0, -Math.PI / 4]}>
//             <boxGeometry args={[0.75, 0.09, 0.09]} />
//             {glossy(color)}
//         </mesh>
//         <mesh position={[0, -0.42, 0]} scale={hovered ? 1.15 : 1}>
//             <torusGeometry args={[0.22, 0.03, 8, 20, Math.PI]} />
//             <meshStandardMaterial color={color} opacity={0.4} transparent />
//         </mesh>
//     </group>
// )


export const SignalOff3D = ({ color, hovered }: ModelProps) => {
    const ring = useRef<Mesh>(null)
    const s = useRef(1)
    useFrame((_, delta) => {
        s.current = MathUtils.damp(s.current, hovered ? 1.15 : 1, 6, delta)
        if (ring.current) ring.current.scale.setScalar(s.current)
    })
    return (
        <group scale={0.85}>
            <mesh rotation={[0, 0, Math.PI / 4]}>
                <boxGeometry args={[0.75, 0.09, 0.09]} />
                {glossy(color)}
            </mesh>
            <mesh rotation={[0, 0, -Math.PI / 4]}>
                <boxGeometry args={[0.75, 0.09, 0.09]} />
                {glossy(color)}
            </mesh>
            <mesh ref={ring} position={[0, -0.42, 0]}>
                <torusGeometry args={[0.22, 0.03, 8, 20, Math.PI]} />
                <meshStandardMaterial color={color} opacity={0.4} transparent />
            </mesh>
        </group>
    )
}


const ToggleBase = ({ color, knobRight }: { color: string; knobRight: boolean }) => (
    <group scale={0.85}>
        <RoundedBox args={[0.9, 0.42, 0.3]} radius={0.21} smoothness={6}>
            {glossy('#1B212D', { roughness: 0.35, metalness: 0.1 })}
        </RoundedBox>
        <mesh position={[knobRight ? 0.24 : -0.24, 0, 0.06]}>
            <sphereGeometry args={[0.17, 20, 20]} />
            <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.1} roughness={0.15} />
        </mesh>
    </group>
)

export const ToggleOn3D = ({ color }: ModelProps) => <ToggleBase color={color} knobRight />
export const ToggleOff3D = ({ color }: ModelProps) => <ToggleBase color={color} knobRight={false} />

// ── Street-lamp icons: mini versions of the same CobraLamp used in the hero ──

export const StreetLampBase3D = ({ color }: ModelProps) => (
    <group position={[-0.55, -1.05, 0]}>
        <CobraLamp accent={color} lit scale={0.5} poleHeight={2.6} />
    </group>
)

export const StreetLampFlash3D = ({ color, hovered }: ModelProps) => (
    <group position={[-0.55, -1.05, 0]}>
        <CobraLamp accent={color} lit scale={hovered ? 0.54 : 0.5} poleHeight={2.6} flicker />
    </group>
)

export const StreetLampOff3D = ({ color }: ModelProps) => (
    <group position={[-0.55, -1.05, 0]}>
        <CobraLamp accent={color} lit={false} scale={0.5} poleHeight={2.6} />
    </group>
)

// ── Consumption icon: glossy gauge dial + extruded lightning bolt ──

export const ConsumptionIcon3D = ({ color, hovered }: ModelProps) => {
    const ring = useRef<Mesh>(null)

    const boltShape = useMemo(() => {
        const s = new Shape()
        s.moveTo(0.08, 0.85)
        s.lineTo(-0.32, 0.05)
        s.lineTo(-0.06, 0.05)
        s.lineTo(-0.14, -0.85)
        s.lineTo(0.32, -0.05)
        s.lineTo(0.06, -0.05)
        s.lineTo(0.08, 0.85)
        s.closePath()
        return s
    }, [])

    useFrame((_, delta) => {
        if (ring.current) ring.current.rotation.z += delta * (hovered ? 1.2 : 0.4)
    })

    return (
        <group scale={0.62}>
            <mesh position={[0, 0, -0.1]} rotation={[Math.PI / 2, 0, 0]}>
                <cylinderGeometry args={[0.62, 0.62, 0.06, 32]} />
                <meshPhysicalMaterial color='#20242F' roughness={0.25} metalness={0.5} clearcoat={0.8} />
            </mesh>

            <mesh ref={ring} position={[0, 0, -0.05]}>
                <torusGeometry args={[0.52, 0.02, 8, 32]} />
                <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.9} />
            </mesh>

            <mesh>
                <extrudeGeometry args={[boltShape, { depth: 0.14, bevelEnabled: true, bevelThickness: 0.02, bevelSize: 0.02, bevelSegments: 2 }]} />
                <meshPhysicalMaterial color={color} emissive={color} emissiveIntensity={hovered ? 1.8 : 1.3} roughness={0.2} metalness={0.3} clearcoat={0.7} />
            </mesh>
        </group>
    )
}