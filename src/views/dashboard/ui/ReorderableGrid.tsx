// 'use client'

// import { useEffect, useState } from 'react'
// import { Reorder, useDragControls } from 'framer-motion'
// import Box from '@mui/material/Box'
// import Grid from '@mui/material/Grid'

// import { useDashboardTokens } from './tokens'

// interface WidgetItem {
//     id: string
//     render: () => React.ReactNode
// }

// interface ReorderableGridProps {
//     storageKey: string
//     items: WidgetItem[]
// }

// const DragHandle = ({ controls }: { controls: ReturnType<typeof useDragControls> }) => {
//     const t = useDashboardTokens()
//     return (
//         <Box
//             onPointerDown={e => controls.start(e)}
//             sx={{
//                 position: 'absolute',
//                 top: 10,
//                 right: 10,
//                 zIndex: 5,
//                 width: 26,
//                 height: 26,
//                 borderRadius: '8px',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 cursor: 'grab',
//                 bgcolor: t.surface,
//                 border: `1px solid ${t.border}`,
//                 color: t.textMuted,
//                 '&:active': { cursor: 'grabbing' }
//             }}
//         >
//             <i className='ri-draggable' style={{ fontSize: 15 }} />
//         </Box>
//     )
// }

// const ReorderableCard = ({ item }: { item: WidgetItem }) => {
//     const controls = useDragControls()
//     return (
//         <Grid size={{ xs: 12, md: 4 }} sx={{ alignSelf: 'flex-start' }}>
//             <Reorder.Item
//                 value={item}
//                 dragListener={false}
//                 dragControls={controls}
//                 as='div'
//                 whileDrag={{ scale: 1.03, zIndex: 20, boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}
//                 style={{ position: 'relative', listStyle: 'none' }}
//             >
//                 <DragHandle controls={controls} />
//                 {item.render()}
//             </Reorder.Item>
//         </Grid>
//     )
// }

// const ReorderableGrid = ({ storageKey, items }: ReorderableGridProps) => {
//     const [order, setOrder] = useState<WidgetItem[]>(items)

//     useEffect(() => {
//         const saved = localStorage.getItem(storageKey)
//         if (saved) {
//             try {
//                 const ids: string[] = JSON.parse(saved)
//                 const byId = Object.fromEntries(items.map(i => [i.id, i]))
//                 const restored = ids.map(id => byId[id]).filter(Boolean) as WidgetItem[]
//                 const missing = items.filter(i => !ids.includes(i.id))
//                 if (restored.length) setOrder([...restored, ...missing])
//             } catch {
//                 /* ignore corrupt storage */
//             }
//         }
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [])

//     const handleReorder = (newOrder: WidgetItem[]) => {
//         setOrder(newOrder)
//         localStorage.setItem(storageKey, JSON.stringify(newOrder.map(i => i.id)))
//     }

//     return (
//         <Reorder.Group as='div' axis='y' values={order} onReorder={handleReorder} style={{ listStyle: 'none', padding: 0, margin: 0 }}>
//             <Grid container spacing={2} sx={{ alignItems: 'flex-start' }}>
//                 {order.map(item => (
//                     <ReorderableCard key={item.id} item={item} />
//                 ))}
//             </Grid>
//         </Reorder.Group>
//     )
// }

// export default ReorderableGrid