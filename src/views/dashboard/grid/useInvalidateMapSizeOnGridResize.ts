'use client'

import { useEffect } from 'react'

/**
 * Leaflet measures its container once on init and caches it. If the grid
 * resizes/repositions the map's container without Leaflet knowing, tiles
 * render into the wrong area. Call the passed callback with
 * `mapInstance.invalidateSize()` — see usage note below.
 */
export const useInvalidateMapSizeOnGridResize = (onSettled: () => void) => {
    useEffect(() => {
        window.addEventListener('grid-resize-settled', onSettled)
        return () => window.removeEventListener('grid-resize-settled', onSettled)
    }, [onSettled])
}