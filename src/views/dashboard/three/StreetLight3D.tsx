


// // views/dashboard/three/StreetLight3D.tsx
// 'use client'

// import { useRef, useState } from 'react'
// import Box from '@mui/material/Box'
// import { Canvas, useFrame } from '@react-three/fiber'
// import { OrbitControls } from '@react-three/drei'
// import type { Mesh, Group } from 'three'

// interface LampProps {
//     accent: string
//     cyan: string
//     green: string
// }

// const Lamp = ({ accent, cyan, green }: LampProps) => {
//     const bulb = useRef<Mesh>(null)
//     const cone = useRef<Mesh>(null)
//     const group = useRef<Group>(null)

//     useFrame(({ clock }) => {
//         const t = clock.getElapsedTime()
//         if (bulb.current) {
//             const mat = bulb.current.material as any
//             mat.emissiveIntensity = 1.8 + Math.sin(t * 2.2) * 0.3
//         }
//         if (cone.current) {
//             const mat = cone.current.material as any
//             mat.opacity = 0.16 + Math.sin(t * 2.2) * 0.03
//         }
//         if (group.current) group.current.position.y = Math.sin(t * 0.8) * 0.03
//     })

//     return (
//         <group ref={group}>
//             {/* base */}
//             <mesh position={[0, 0.1, 0]}>
//                 <cylinderGeometry args={[0.5, 0.55, 0.2, 24]} />
//                 <meshStandardMaterial color='#1B212D' roughness={0.5} metalness={0.4} />
//             </mesh>

//             {/* pole */}
//             <mesh position={[0, 1.7, 0]}>
//                 <cylinderGeometry args={[0.07, 0.09, 3, 20]} />
//                 <meshPhysicalMaterial color='#3A4256' roughness={0.3} metalness={0.7} clearcoat={0.6} />
//             </mesh>

//             {/* riser at top of pole */}
//             <mesh position={[0, 3.35, 0]}>
//                 <cylinderGeometry args={[0.06, 0.06, 0.3, 16]} />
//                 <meshPhysicalMaterial color='#3A4256' roughness={0.3} metalness={0.7} />
//             </mesh>

//             {/* horizontal arm */}
//             <mesh position={[0.55, 3.5, 0]} rotation={[0, 0, Math.PI / 2]}>
//                 <cylinderGeometry args={[0.055, 0.055, 1.1, 16]} />
//                 <meshPhysicalMaterial color='#3A4256' roughness={0.3} metalness={0.7} />
//             </mesh>

//             {/* drop to lamp head */}
//             <mesh position={[1.1, 3.35, 0]}>
//                 <cylinderGeometry args={[0.05, 0.05, 0.3, 16]} />
//                 <meshPhysicalMaterial color='#3A4256' roughness={0.3} metalness={0.7} />
//             </mesh>

//             {/* lamp housing */}
//             <mesh position={[1.1, 3.12, 0]} rotation={[0, 0, Math.PI / 2]}>
//                 <capsuleGeometry args={[0.16, 0.4, 8, 16]} />
//                 <meshPhysicalMaterial color='#232A38' roughness={0.25} metalness={0.5} clearcoat={0.8} />
//             </mesh>

//             {/* glowing bulb, hanging just under the housing */}
//             <mesh ref={bulb} position={[1.1, 2.95, 0]}>
//                 <sphereGeometry args={[0.13, 20, 20]} />
//                 <meshStandardMaterial color='#FFD680' emissive={accent} emissiveIntensity={1.8} toneMapped={false} />
//             </mesh>
//             <pointLight position={[1.1, 2.95, 0]} intensity={2.4} color={accent} distance={4.5} />

//             {/* light cone, apex at the bulb, spreading down */}
//             <mesh ref={cone} position={[1.1, 2, 0]}>
//                 <coneGeometry args={[1, 1.9, 28, 1, true]} />
//                 <meshBasicMaterial color={accent} transparent opacity={0.16} depthWrite={false} side={2} />
//             </mesh>

//             {/* status rings around the pole */}
//             <mesh position={[0, 2.4, 0]} rotation={[Math.PI / 2, 0, 0]}>
//                 <torusGeometry args={[0.13, 0.018, 8, 24]} />
//                 <meshStandardMaterial color={cyan} emissive={cyan} emissiveIntensity={1.2} />
//             </mesh>
//             <mesh position={[0, 1.7, 0]} rotation={[Math.PI / 2, 0, 0]}>
//                 <torusGeometry args={[0.11, 0.016, 8, 24]} />
//                 <meshStandardMaterial color={green} emissive={green} emissiveIntensity={1.2} />
//             </mesh>

//             {/* ground glow */}
//             <mesh position={[1.1, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
//                 <circleGeometry args={[1.2, 32]} />
//                 <meshBasicMaterial color={accent} transparent opacity={0.14} depthWrite={false} />
//             </mesh>
//         </group>
//     )
// }

// const StreetLight3D = ({ accent, cyan, green }: LampProps) => {
//     const [autoRotate, setAutoRotate] = useState(true)




// const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

// const handleStart = () => {
//     setAutoRotate(false)

//     if (idleTimer.current !== null) {
//         clearTimeout(idleTimer.current)
//         idleTimer.current = null
//     }
// }
// // 

// const handleEnd = () => {
//     idleTimer.current = setTimeout(() => {
//         setAutoRotate(true)
//     }, 2500)
// }


//     return (
//         <Box sx={{ width: '100%', height: '100%', cursor: 'grab', '&:active': { cursor: 'grabbing' } }}>
//             <Canvas
//                 camera={{ position: [3.2, 2.4, 4.6], fov: 38 }}
//                 gl={{ alpha: true, antialias: true }}
//                 dpr={[1, 2]}
//                 style={{ background: 'transparent' }}
//             >
//                 <ambientLight intensity={0.55} />
//                 <directionalLight position={[3, 4, 2]} intensity={0.9} />
//                 <Lamp accent={accent} cyan={cyan} green={green} />
//                 <OrbitControls
//                     makeDefault
//                     enablePan={false}
//                     enableZoom={false}
//                     autoRotate={autoRotate}
//                     autoRotateSpeed={1.1}
//                     minPolarAngle={Math.PI / 2.7}
//                     maxPolarAngle={Math.PI / 2.15}
//                     target={[0.5, 2, 0]}
//                     onStart={handleStart}
//                     onEnd={handleEnd}
//                 />
//             </Canvas>
//         </Box>
//     )
// }

// export default StreetLight3D




// // views/dashboard/three/StreetLight3D.tsx
// 'use client'

// import { useRef, useState } from 'react'
// import Box from '@mui/material/Box'
// import { Canvas, useFrame } from '@react-three/fiber'
// import { OrbitControls, MeshReflectorMaterial } from '@react-three/drei'
// import { FogExp2 } from 'three'
// import type { Group } from 'three'

// import { CobraLamp } from './CobraLamp'

// interface Props {
//     accent: string
//     cyan: string
//     green: string
// }

// const LAMP_POSITIONS: [number, number, number][] = [
//     [-1.6, 0, -1.5],
//     [1.6, 0, 0.5],
//     [-1.6, 0, 2.5],
//     [1.6, 0, 4.5],
// ]

// const Road = () => (
//     <group>
//         <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 1.5]}>
//             <planeGeometry args={[4.2, 14]} />
//             <MeshReflectorMaterial
//                 blur={[300, 60]}
//                 resolution={1024}
//                 mixBlur={1}
//                 mixStrength={35}
//                 roughness={0.55}
//                 depthScale={0.4}
//                 minDepthThreshold={0.85}
//                 color='#0c0f16'
//                 metalness={0.55}
//             />
//         </mesh>

//         {Array.from({ length: 8 }).map((_, i) => (
//             <mesh key={i} position={[0, 0.006, -3 + i * 2]} rotation={[-Math.PI / 2, 0, 0]}>
//                 <planeGeometry args={[0.08, 0.9]} />
//                 <meshStandardMaterial color='#e8e8e8' emissive='#e8e8e8' emissiveIntensity={0.15} />
//             </mesh>
//         ))}
//     </group>
// )

// const Scene = ({ accent, cyan, green }: Props) => {
//     const wobble = useRef<Group>(null)
//     useFrame(({ clock }) => {
//         if (wobble.current) wobble.current.position.y = Math.sin(clock.getElapsedTime() * 0.6) * 0.015
//     })

//     const colors = [accent, cyan, green]

//     return (
//         <group ref={wobble}>
//             <Road />
//             {LAMP_POSITIONS.map((p, i) => (
//                 <group key={i} position={p} rotation={[0, p[0] < 0 ? 0 : Math.PI, 0]}>
//                     <CobraLamp accent={colors[i % colors.length]} lit scale={0.62} poleHeight={2.6} flicker={i === 0} />
//                 </group>
//             ))}
//         </group>
//     )
// }

// const StreetLight3D = ({ accent, cyan, green }: Props) => {
//     const [autoRotate, setAutoRotate] = useState(true)


//     const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

//     const handleStart = () => {
//         setAutoRotate(false)

//         if (idleTimer.current !== null) {
//             clearTimeout(idleTimer.current)
//             idleTimer.current = null
//         }
//     }
//     // 

//     const handleEnd = () => {
//         idleTimer.current = setTimeout(() => {
//             setAutoRotate(true)
//         }, 2500)
//     }


//     return (
//         <Box sx={{ width: '100%', height: '100%', cursor: 'grab', '&:active': { cursor: 'grabbing' } }}>
//             <Canvas
//                 camera={{ position: [2.6, 1.9, 6.2], fov: 42 }}
//                 gl={{ alpha: true, antialias: true }}
//                 dpr={[1, 2]}
//                 style={{ background: 'transparent' }}
//                 onCreated={({ scene }) => {
//                     scene.fog = new FogExp2('#05070c', 0.055)
//                 }}
//             >
//                 <ambientLight intensity={0.35} />
//                 <directionalLight position={[3, 5, 2]} intensity={0.5} />
//                 <Scene accent={accent} cyan={cyan} green={green} />
//                 <OrbitControls
//                     makeDefault
//                     enablePan={false}
//                     enableZoom={false}
//                     autoRotate={autoRotate}
//                     autoRotateSpeed={0.8}
//                     minPolarAngle={Math.PI / 2.6}
//                     maxPolarAngle={Math.PI / 2.15}
//                     target={[0, 1.2, 1.5]}
//                     onStart={handleStart}
//                     onEnd={handleEnd}
//                 />
//             </Canvas>
//         </Box>
//     )
// }

// export default StreetLight3D


// views/dashboard/three/StreetLight3D.tsx
'use client'

import { useMemo, useRef, useState } from 'react'
import Box from '@mui/material/Box'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, MeshReflectorMaterial, RoundedBox } from '@react-three/drei'
import { FogExp2 } from 'three'
import type { Group, Mesh } from 'three'

import { CobraLamp } from './CobraLamp'

interface Props {
    accent: string
    cyan: string
    green: string
}

const LAMP_POSITIONS: [number, number, number][] = [
    [-1.6, 0, -1.5],
    [1.6, 0, 0.5],
    [-1.6, 0, 2.5],
    [1.6, 0, 4.5],
]


const Road = () => (
    <group>
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 1.5]}>
            <planeGeometry args={[4.2, 14]} />
            <MeshReflectorMaterial
                blur={[200, 50]}
                resolution={1024}
                mixBlur={0.6}
                mixStrength={8}
                roughness={1.75}
                depthScale={0.2}
                minDepthThreshold={0.9}
                color='#343d4e'
                metalness={0.25}
            />
        </mesh>

        {/* lane markings */}
        {Array.from({ length: 8 }).map((_, i) => (
            <mesh key={i} position={[0, 0.006, -3 + i * 2]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[0.08, 0.9]} />
                <meshStandardMaterial color='#e8e8e8' emissive='#e8e8e8' emissiveIntensity={0.2} />
            </mesh>
        ))}

        {/* sidewalks either side */}
        {[-2.5, 2.5].map(x => (
            <mesh key={x} rotation={[-Math.PI / 2, 0, 0]} position={[x, 0.01, 1.5]}>
                <planeGeometry args={[0.9, 14]} />
                <meshStandardMaterial color='#4a5162' roughness={0.9} />
            </mesh>
        ))}
    </group>
)

// ── Simple low-poly car, moves along Z, loops ──
const Car = ({ color, lane, speed, offset }: { color: string; lane: number; speed: number; offset: number }) => {
    const group = useRef<Group>(null)
    const range = 16 // loop distance



    useFrame(({ clock }) => {
        if (!group.current) return;

        const t = (clock.getElapsedTime() * speed + offset) % range;

        if (lane > 0) {
            group.current.position.z = -6 + t;
        } else {
            group.current.position.z = 10 - t;
        }
    });



    return (
        <group ref={group} position={[lane, 0.14, -6]} rotation={[0, lane < 0 ? Math.PI : 0, 0]}>
            <RoundedBox args={[0.34, 0.14, 0.7]} radius={0.04} smoothness={4}>
                <meshPhysicalMaterial color={color} roughness={0.3} metalness={0.4} clearcoat={0.6} />
            </RoundedBox>
            <RoundedBox args={[0.28, 0.1, 0.36]} radius={0.03} smoothness={4} position={[0, 0.11, -0.02]}>
                <meshPhysicalMaterial color='#1a1e28' roughness={0.2} metalness={0.3} clearcoat={0.8} />
            </RoundedBox>
            {/* headlights */}
            {[-0.11, 0.11].map(x => (
                <mesh key={`h${x}`} position={[x, 0, 0.36]}>
                    <sphereGeometry args={[0.03, 8, 8]} />
                    <meshStandardMaterial color='#fff9e0' emissive='#fff9e0' emissiveIntensity={2} toneMapped={false} />
                </mesh>
            ))}
            {/* taillights */}
            {[-0.11, 0.11].map(x => (
                <mesh key={`t${x}`} position={[x, 0, -0.36]}>
                    <sphereGeometry args={[0.025, 8, 8]} />
                    <meshStandardMaterial color='#ff3b3b' emissive='#ff3b3b' emissiveIntensity={1.6} toneMapped={false} />
                </mesh>
            ))}
            <pointLight position={[0, 0, 0.4]} intensity={0.4} color='#fff3d6' distance={1.2} />
        </group>
    )
}

// ── Simple pedestrian figure, walks a short stretch of sidewalk back and forth ──
const Pedestrian = ({ color, side, offset }: { color: string; side: number; offset: number }) => {
    const group = useRef<Group>(null)
    const legL = useRef<Mesh>(null)
    const legR = useRef<Mesh>(null)

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime() * 0.5 + offset
        const walk = Math.sin(t) * 2.2 // back-and-forth range
        if (group.current) {
            group.current.position.z = 1.5 + walk
            group.current.rotation.y = Math.cos(t) > 0 ? 0 : Math.PI
        }
        const stride = Math.sin(t * 6) * 0.35
        if (legL.current) legL.current.rotation.x = stride
        if (legR.current) legR.current.rotation.x = -stride
    })

    return (
        <group ref={group} position={[side, 0, 1.5]} scale={0.42}>
            {/* body */}
            <mesh position={[0, 0.9, 0]}>
                <capsuleGeometry args={[0.16, 0.5, 6, 12]} />
                <meshStandardMaterial color={color} roughness={0.6} />
            </mesh>
            {/* head */}
            <mesh position={[0, 1.35, 0]}>
                <sphereGeometry args={[0.13, 12, 12]} />
                <meshStandardMaterial color='#e8c39e' roughness={0.7} />
            </mesh>
            {/* legs */}
            <mesh ref={legL} position={[-0.07, 0.5, 0]}>
                <capsuleGeometry args={[0.06, 0.5, 4, 8]} />
                <meshStandardMaterial color='#2a2f3a' roughness={0.7} />
            </mesh>
            <mesh ref={legR} position={[0.07, 0.5, 0]}>
                <capsuleGeometry args={[0.06, 0.5, 4, 8]} />
                <meshStandardMaterial color='#2a2f3a' roughness={0.7} />
            </mesh>
        </group>
    )
}

const Scene = ({ accent, cyan, green }: Props) => {
    const wobble = useRef<Group>(null)
    useFrame(({ clock }) => {
        if (wobble.current) wobble.current.position.y = Math.sin(clock.getElapsedTime() * 0.6) * 0.015
    })

    const colors = [accent, cyan, green]
    const carColors = useMemo(() => ['#e63946', '#f1c40f', '#3b82f6', '#e5e5e5'], [])

    return (
        <group ref={wobble}>
            <Road />

            {LAMP_POSITIONS.map((p, i) => (
                <group key={i} position={p} rotation={[0, p[0] < 0 ? 0 : Math.PI, 0]}>
                    <CobraLamp accent={colors[i % colors.length]} lit scale={0.62} poleHeight={2.6} flicker={i === 0} />
                </group>
            ))}

            {/* cars — two lanes, opposite directions */}
            <Car color={carColors[0]} lane={-0.55} speed={1.6} offset={0} />
            <Car color={carColors[1]} lane={-0.55} speed={1.6} offset={8} />
            <Car color={carColors[2]} lane={0.55} speed={1.3} offset={4} />
            <Car color={carColors[3]} lane={0.55} speed={1.3} offset={12} />

            {/* pedestrians on each sidewalk */}
            <Pedestrian color='#4f7cff' side={-2.5} offset={0} />
            <Pedestrian color='#e8983c' side={2.5} offset={2} />
        </group>
    )
}

const StreetLight3D = ({ accent, cyan, green }: Props) => {
    const [autoRotate, setAutoRotate] = useState(true)
    const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

    const handleStart = () => {
        setAutoRotate(false)
        if (idleTimer.current !== null) {
            clearTimeout(idleTimer.current)
            idleTimer.current = null
        }
    }

    const handleEnd = () => {
        idleTimer.current = setTimeout(() => {
            setAutoRotate(true)
        }, 2500)
    }

    return (
        <Box sx={{ width: '100%', height: '100%', cursor: 'grab', '&:active': { cursor: 'grabbing' } }}>
            <Canvas
                // camera={{ position: [2.6, 1.9, 6.2], fov: 42 }}
                camera={{
                    position: [3.5, 3.5, 9],
                    fov: 38
                }}
                gl={{ alpha: true, antialias: true }}
                dpr={[1, 2]}
                style={{ background: 'transparent' }}
                onCreated={({ scene }) => {
                    // scene.fog = new FogExp2('#05070c', 0.05)
                    scene.fog = new FogExp2('#05070c', 0.02)
                }}
            >
                <ambientLight intensity={0.8} />
                {/* <directionalLight position={[3, 5, 2]} intensity={0.7} /> */}
                <directionalLight
                    position={[6, 8, 4]}
                    intensity={1.1}
                />
                {/* <directionalLight position={[-3, 4, -2]} intensity={0.3} /> */}
                <directionalLight
                    position={[-6, 5, -4]}
                    intensity={0.5}
                />

                <hemisphereLight
                    intensity={0.6}
                    groundColor="#1b2435"
                />
                <Scene accent={accent} cyan={cyan} green={green} />
                <OrbitControls
                    makeDefault
                    enablePan={false}
                    enableZoom={false}
                    autoRotate={autoRotate}
                    autoRotateSpeed={0.3}
                    minPolarAngle={Math.PI / 2.6}
                    maxPolarAngle={Math.PI / 2.15}
                    // target={[0, 1.2, 1.5]}
                    target={[0, 0.8, 0]}
                    onStart={handleStart}
                    onEnd={handleEnd}
                />
            </Canvas>
        </Box>
    )
}

export default StreetLight3D