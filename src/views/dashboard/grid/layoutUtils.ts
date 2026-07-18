import type { LayoutItem } from 'react-grid-layout/legacy'

export const slugify = (s: string) =>
    s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

export const autoFlow = (ids: string[], colsAvailable: number, itemW: number, itemH: number): LayoutItem[] => {
    const perRow = Math.max(1, Math.floor(colsAvailable / itemW))
    return ids.map((id, idx) => ({
        i: id,
        x: (idx % perRow) * itemW,
        y: Math.floor(idx / perRow) * itemH,
        w: itemW,
        h: itemH,
    }))
}