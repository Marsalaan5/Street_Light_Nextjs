
// 'use client'

// import { useState } from 'react'
// import Box from '@mui/material/Box'
// import { Canvas } from '@react-three/fiber'

// import {
//     Router3D, Wifi3D, SignalOff3D, ToggleOn3D, ToggleOff3D,
//     StreetLampBase3D, StreetLampFlash3D, StreetLampOff3D, ConsumptionIcon3D,
// } from './models'
// import { Spin } from './Spin'

// const MODELS: Record<string, React.ComponentType<{ color: string; hovered: boolean }>> = {
//     router: Router3D,
//     wifi: Wifi3D,
//     'signal-off': SignalOff3D,
//     'toggle-on': ToggleOn3D,
//     'toggle-off': ToggleOff3D,
//     bulb: StreetLampBase3D,
//     'bulb-flash': StreetLampFlash3D,
//     'bulb-off': StreetLampOff3D,
//     bolt: ConsumptionIcon3D,
// }

// interface Icon3DProps {
//     name: string
//     color: string
//     size?: number
// }

// const Icon3D = ({ name, color, size = 46 }: Icon3DProps) => {
//     const [hovered, setHovered] = useState(false)
//     const Model = MODELS[name] ?? StreetLampBase3D

//     return (
//         <Box onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} sx={{ width: size, height: size }}>
//             <Canvas
//                 camera={{ position: [0, 0, 2.9], fov: 30 }}
//                 gl={{ alpha: true, antialias: true }}
//                 dpr={[1, 2]}
//                 style={{ background: 'transparent', display: 'block' }}
//             >
//                 <ambientLight intensity={0.5} />
//                 <directionalLight position={[2, 3, 4]} intensity={1.4} />
//                 <directionalLight position={[-2, -1, 2]} intensity={0.5} color={color} />
//                 <pointLight position={[0, 1, 2]} intensity={0.6} color='#ffffff' />
//                 <Spin Model={Model} color={color} hovered={hovered} />
//             </Canvas>
//         </Box>
//     )
// }

// export default Icon3D




'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Box from '@mui/material/Box'
import { Canvas } from '@react-three/fiber'

import {
    Router3D, Wifi3D, SignalOff3D, ToggleOn3D, ToggleOff3D,
    StreetLampBase3D, StreetLampFlash3D, StreetLampOff3D, ConsumptionIcon3D
} from './models'
import { Spin } from './Spin'

const MotionBox = motion(Box)

const MODELS: Record<string, React.ComponentType<{ color: string; hovered: boolean }>> = {
    router: Router3D,
    wifi: Wifi3D,
    'signal-off': SignalOff3D,
    'toggle-on': ToggleOn3D,
    'toggle-off': ToggleOff3D,
    bulb: StreetLampBase3D,
    'bulb-flash': StreetLampFlash3D,
    'bulb-off': StreetLampOff3D,
    bolt: ConsumptionIcon3D
}

interface Icon3DProps {
    name: string
    color: string
    size?: number
}

const Icon3D = ({ name, color, size = 46 }: Icon3DProps) => {
    const [hovered, setHovered] = useState(false)
    const Model = MODELS[name] ?? StreetLampBase3D

    return (
        <MotionBox
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            initial={{ opacity: 0, scale: 0.5, rotate: -30 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            whileHover={{ scale: 1.14 }}
            transition={{ type: 'spring', stiffness: 300, damping: 16 }}
            sx={{ width: size, height: size }}
        >
            <Canvas
                camera={{ position: [0, 0, 2.9], fov: 30 }}
                gl={{ alpha: true, antialias: true }}
                dpr={[1, 2]}
                style={{ background: 'transparent', display: 'block' }}
            >
                <ambientLight intensity={0.5} />
                <directionalLight position={[2, 3, 4]} intensity={1.4} />
                <directionalLight position={[-2, -1, 2]} intensity={0.5} color={color} />
                <pointLight position={[0, 1, 2]} intensity={0.6} color='#ffffff' />
                <Spin Model={Model} color={color} hovered={hovered} />
            </Canvas>
        </MotionBox>
    )
}

export default Icon3D