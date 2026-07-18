

// 'use client'

// import { useCallback, useEffect, useRef, useState } from 'react'
// import type { LayoutItem, ResponsiveLayouts } from 'react-grid-layout/legacy'

// interface UseGridLayoutOptions {
//     storageKey: string
//     defaultLayouts: ResponsiveLayouts
// }

// export const useGridLayout = ({ storageKey, defaultLayouts }: UseGridLayoutOptions) => {
//     const [layouts, setLayouts] = useState<ResponsiveLayouts>(defaultLayouts)
//     const [mounted, setMounted] = useState(false)
//     const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

//     useEffect(() => {
//         try {
//             const raw = localStorage.getItem(storageKey)
//             if (raw) setLayouts(JSON.parse(raw) as ResponsiveLayouts)
//         } catch {
//             // corrupted/blocked storage — silently fall back to defaults
//         }
//         setMounted(true)
//     }, [storageKey])

//     const handleLayoutChange = useCallback(
//         (_current: LayoutItem[], all: ResponsiveLayouts) => {
//             setLayouts(all)
//             if (saveTimer.current) clearTimeout(saveTimer.current)
//             saveTimer.current = setTimeout(() => {
//                 try {
//                     localStorage.setItem(storageKey, JSON.stringify(all))
//                 } catch {
//                     /* storage full/unavailable — layout still works in-memory */
//                 }
//             }, 300)
//         },
//         [storageKey],
//     )

//     const resetLayout = useCallback(() => {
//         setLayouts(defaultLayouts)
//         try {
//             localStorage.removeItem(storageKey)
//         } catch {
//             /* ignore */
//         }
//     }, [storageKey, defaultLayouts])

//     const notifyResizeSettled = useCallback(() => {
//         window.dispatchEvent(new Event('resize'))
//     }, [])

//     return { layouts, mounted, handleLayoutChange, resetLayout, notifyResizeSettled }
// }


'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import type { Layout, ResponsiveLayouts } from 'react-grid-layout/legacy'

interface UseGridLayoutOptions {
    storageKey: string
    defaultLayouts: ResponsiveLayouts
}

export const useGridLayout = ({ storageKey, defaultLayouts }: UseGridLayoutOptions) => {
    const [layouts, setLayouts] = useState<ResponsiveLayouts>(defaultLayouts)
    const [mounted, setMounted] = useState(false)
    const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

    useEffect(() => {
        try {
            const raw = localStorage.getItem(storageKey)
            if (raw) setLayouts(JSON.parse(raw) as ResponsiveLayouts)
        } catch {
            // corrupted/blocked storage — silently fall back to defaults
        }
        setMounted(true)
    }, [storageKey])

    const handleLayoutChange = useCallback(
        (_current: Layout, all: ResponsiveLayouts) => {
            setLayouts(all)
            if (saveTimer.current) clearTimeout(saveTimer.current)
            saveTimer.current = setTimeout(() => {
                try {
                    localStorage.setItem(storageKey, JSON.stringify(all))
                } catch {
                    /* storage full/unavailable — layout still works in-memory */
                }
            }, 300)
        },
        [storageKey],
    )

    const resetLayout = useCallback(() => {
        setLayouts(defaultLayouts)
        try {
            localStorage.removeItem(storageKey)
        } catch {
            /* ignore */
        }
    }, [storageKey, defaultLayouts])

    const notifyResizeSettled = useCallback(() => {
        window.dispatchEvent(new Event('resize'))
    }, [])

    return { layouts, mounted, handleLayoutChange, resetLayout, notifyResizeSettled }
}