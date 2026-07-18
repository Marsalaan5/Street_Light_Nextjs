// // views/dashboard/three/CanvasRoot.tsx
// 'use client'

// import { Canvas } from '@react-three/fiber'
// import { View } from '@react-three/drei'
// import { Suspense } from 'react'

// const CanvasRoot = () => (
//     <Canvas
//         eventSource={typeof document !== 'undefined' ? document.body : undefined}
//         style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0 }}
//         gl={{ alpha: true, antialias: true }}
//         dpr={[1, 2]}
//     >
//         <Suspense fallback={null}>
//             <View.Port />
//         </Suspense>
//     </Canvas>
// )

// export default CanvasRoot


// views/dashboard/three/CanvasRoot.tsx
'use client'

import { Canvas } from '@react-three/fiber'
import { View } from '@react-three/drei'
import { Suspense } from 'react'
import { motion } from 'framer-motion'

const CanvasRoot = () => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0 }}
    >
        <Canvas
            eventSource={typeof document !== 'undefined' ? document.body : undefined}
            style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0 }}
            gl={{ alpha: true, antialias: true }}
            dpr={[1, 2]}
        >
            <Suspense fallback={null}>
                <View.Port />
            </Suspense>
        </Canvas>
    </motion.div>
)

export default CanvasRoot