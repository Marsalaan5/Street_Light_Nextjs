// views/dashboard/three/CobraLamp.tsx
'use client'

import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { RoundedBox } from '@react-three/drei'
import { QuadraticBezierCurve3, Vector3 } from 'three'
import type { Mesh } from 'three'

interface CobraLampProps {
    accent: string
    lit: boolean
    scale?: number
    poleHeight?: number
    flicker?: boolean
}

// A modern "cobra head" LED highway lamp: pole -> smooth curved arm -> flat sleek housing -> LED strip glow.
export const CobraLamp = ({ accent, lit, scale = 1, poleHeight = 3, flicker = false }: CobraLampProps) => {
    const bulb = useRef<Mesh>(null)
    const led = useRef<Mesh>(null)

    const curve = useMemo(
        () =>
            new QuadraticBezierCurve3(
                new Vector3(0, poleHeight, 0),
                new Vector3(0.45, poleHeight + 0.28, 0),
                new Vector3(0.95, poleHeight + 0.05, 0)
            ),
        [poleHeight]
    )

    useFrame(({ clock }) => {
        if (!lit) return
        const t = clock.getElapsedTime()
        const pulse = flicker ? 1.6 + Math.sin(t * 2.4) * 0.35 : 1.6
        if (bulb.current) (bulb.current.material as any).emissiveIntensity = pulse
        if (led.current) (led.current.material as any).emissiveIntensity = pulse * 0.9
    })

    return (
        <group scale={scale}>
            {/* base */}
            <mesh position={[0, 0.11, 0]}>
                <cylinderGeometry args={[0.16, 0.19, 0.22, 20]} />
                <meshStandardMaterial color='#1B212D' roughness={0.5} metalness={0.4} />
            </mesh>

            {/* pole */}
            <mesh position={[0, poleHeight / 2 + 0.2, 0]}>
                <cylinderGeometry args={[0.045, 0.06, poleHeight, 16]} />
                <meshPhysicalMaterial color='#3A4256' roughness={0.25} metalness={0.75} clearcoat={0.7} />
            </mesh>

            {/* smooth curved arm (tube along a bezier, not a bent box) */}
            <mesh>
                <tubeGeometry args={[curve, 20, 0.032, 8, false]} />
                <meshPhysicalMaterial color='#3A4256' roughness={0.25} metalness={0.75} clearcoat={0.7} />
            </mesh>

            {/* cobra-head housing */}
            <group position={[0.95, poleHeight + 0.05, 0]} rotation={[0, 0, -0.12]}>
                <RoundedBox args={[0.5, 0.1, 0.22]} radius={0.045} smoothness={4}>
                    <meshPhysicalMaterial color='#20242F' roughness={0.3} metalness={0.55} clearcoat={0.85} />
                </RoundedBox>

                {/* LED strip underside */}
                <mesh ref={led} position={[0, -0.062, 0]}>
                    <boxGeometry args={[0.42, 0.02, 0.16]} />
                    <meshStandardMaterial
                        color={lit ? '#FFF3D6' : '#3A4050'}
                        emissive={lit ? accent : '#000'}
                        emissiveIntensity={lit ? 1.6 : 0}
                        toneMapped={false}
                    />
                </mesh>

                <mesh ref={bulb} position={[0, -0.06, 0]} visible={lit}>
                    <sphereGeometry args={[0.09, 16, 16]} />
                    <meshStandardMaterial color={accent} emissive={accent} emissiveIntensity={1.6} transparent opacity={0.55} toneMapped={false} />
                </mesh>

                {lit && <pointLight position={[0, -0.1, 0]} intensity={1.4} color={accent} distance={2.2} />}
            </group>

            {/* downward light cone — only exists when lit, this is what makes "on" vs "off" obvious */}
            {lit && (
                <mesh position={[0.95, poleHeight * 0.42, 0]}>
                    <coneGeometry args={[0.55, poleHeight * 0.9, 24, 1, true]} />
                    <meshBasicMaterial color={accent} transparent opacity={0.14} depthWrite={false} side={2} />
                </mesh>
            )}
        </group>
    )
}