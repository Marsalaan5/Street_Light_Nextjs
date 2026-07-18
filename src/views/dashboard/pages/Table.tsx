// 'use client'

// import type { CSSProperties } from 'react'
// import { useMemo, useState } from 'react'

// import Typography from '@mui/material/Typography'
// import Card from '@mui/material/Card'
// import Box from '@mui/material/Box'
// import Chip from '@mui/material/Chip'
// import Button from '@mui/material/Button'
// import TextField from '@mui/material/TextField'
// import Select from '@mui/material/Select'
// import MenuItem from '@mui/material/MenuItem'
// import FormControl from '@mui/material/FormControl'
// import InputAdornment from '@mui/material/InputAdornment'
// import IconButton from '@mui/material/IconButton'
// import Switch from '@mui/material/Switch'
// import Pagination from '@mui/material/Pagination'
// import Dialog from '@mui/material/Dialog'
// import DialogTitle from '@mui/material/DialogTitle'
// import DialogContent from '@mui/material/DialogContent'
// import DialogActions from '@mui/material/DialogActions'
// import Tooltip from '@mui/material/Tooltip'

// // ---------------------------------------------------------------------------
// // Types
// // ---------------------------------------------------------------------------

// type ConnectivityType = 'CONNECTED' | 'DISCONNECTED'
// type OnOffType = 'ON' | 'OFF'
// type DoorStatusType = 'OPEN' | 'CLOSED'

// type LiveRecordType = {
//   id: number
//   dataStamp: string
//   fNo: string
//   location: string
//   ward: string
//   zone: string
//   imei: string
//   mobileNo: string
//   fittings: number
//   physicalLoad: number
//   actualLoad: number
//   ampR: number
//   ampY: number
//   ampB: number
//   power: OnOffType
//   doorStatus: DoorStatusType
//   lat: number
//   long: number
//   output: OnOffType
//   ol: number
//   ul: number
//   lightOn: number
//   lightOff: number
//   timeStamp: string
//   networkStatus: ConnectivityType
//   lastSeen: string
//   isLightOff: boolean
// }

// // ---------------------------------------------------------------------------
// // Mock data — replace with API data, shape must stay the same
// // ---------------------------------------------------------------------------

// const rowsData: LiveRecordType[] = [
//   {
//     id: 1340,
//     dataStamp: '18-06-2026 11:14',
//     fNo: '1340',
//     location: 'Usmanpur yes bi...',
//     ward: '*6',
//     zone: 'Zone 3',
//     imei: '861305086415701',
//     mobileNo: '5754230982666',
//     fittings: 15,
//     physicalLoad: 0.875,
//     actualLoad: 0.0,
//     ampR: 0.0,
//     ampY: 0.0,
//     ampB: 0.0,
//     power: 'ON',
//     doorStatus: 'CLOSED',
//     lat: 27.876443,
//     long: 78.061798,
//     output: 'OFF',
//     ol: 0,
//     ul: 100.0,
//     lightOn: 0,
//     lightOff: 15,
//     timeStamp: '18-06-2026 11:14',
//     networkStatus: 'CONNECTED',
//     lastSeen: '0 Minutes ago',
//     isLightOff: true
//   },
//   {
//     id: 1341,
//     dataStamp: '18-06-2026 11:12',
//     fNo: '1341',
//     location: 'Civil Lines',
//     ward: '*2',
//     zone: 'Zone 1',
//     imei: '861305086417123',
//     mobileNo: '5754230982667',
//     fittings: 22,
//     physicalLoad: 1.42,
//     actualLoad: 1.18,
//     ampR: 1.9,
//     ampY: 1.8,
//     ampB: 1.7,
//     power: 'ON',
//     doorStatus: 'OPEN',
//     lat: 27.880112,
//     long: 78.05512,
//     output: 'ON',
//     ol: 0,
//     ul: 96.4,
//     lightOn: 22,
//     lightOff: 0,
//     timeStamp: '18-06-2026 11:12',
//     networkStatus: 'CONNECTED',
//     lastSeen: '2 Minutes ago',
//     isLightOff: false
//   },
//   {
//     id: 1342,
//     dataStamp: '18-06-2026 10:58',
//     fNo: '1342',
//     location: 'Kotwali Road',
//     ward: '*4',
//     zone: 'Zone 2',
//     imei: '861305086419988',
//     mobileNo: '5754230982668',
//     fittings: 10,
//     physicalLoad: 0.0,
//     actualLoad: 0.0,
//     ampR: 0.0,
//     ampY: 0.0,
//     ampB: 0.0,
//     power: 'OFF',
//     doorStatus: 'CLOSED',
//     lat: 27.871234,
//     long: 78.06912,
//     output: 'OFF',
//     ol: 0,
//     ul: 0.0,
//     lightOn: 0,
//     lightOff: 10,
//     timeStamp: '18-06-2026 10:58',
//     networkStatus: 'DISCONNECTED',
//     lastSeen: '16 Minutes ago',
//     isLightOff: true
//   },
//   {
//     id: 1343,
//     dataStamp: '18-06-2026 11:09',
//     fNo: '1343',
//     location: 'Subhash Park',
//     ward: '*6',
//     zone: 'Zone 3',
//     imei: '861305086421345',
//     mobileNo: '5754230982669',
//     fittings: 18,
//     physicalLoad: 0.93,
//     actualLoad: 0.9,
//     ampR: 1.2,
//     ampY: 1.1,
//     ampB: 1.2,
//     power: 'ON',
//     doorStatus: 'CLOSED',
//     lat: 27.877981,
//     long: 78.0599,
//     output: 'ON',
//     ol: 0,
//     ul: 99.1,
//     lightOn: 18,
//     lightOff: 0,
//     timeStamp: '18-06-2026 11:09',
//     networkStatus: 'CONNECTED',
//     lastSeen: '5 Minutes ago',
//     isLightOff: false
//   }
// ]

// // ---------------------------------------------------------------------------
// // Static config
// // ---------------------------------------------------------------------------

// const ACCENT = '#fb8c00'
// const SHOW_OPTIONS = [10, 25, 50, 100]

// const columns = [
//   'Data Stamp',
//   'F.No.',
//   'Location',
//   'Ward',
//   'Zone',
//   'IMEI',
//   'Mobile No',
//   'Fittings',
//   'Physical Load',
//   'Actual Load',
//   'AMP R',
//   'AMP Y',
//   'AMP B',
//   'Power',
//   'Door Status',
//   'GEO Location',
//   'Output',
//   'OL',
//   'UL',
//   'Light ON',
//   'Light OFF',
//   'Time Stamp',
//   'Network Status',
//   'Actions'
// ]

// // ---------------------------------------------------------------------------
// // Small render helpers
// // ---------------------------------------------------------------------------

// const StatusChip = ({ label, positive }: { label: string; positive: boolean }) => (
//   <Chip
//     label={label}
//     size='small'
//     sx={{
//       fontSize: '0.62rem',
//       height: 18,
//       fontWeight: 600,
//       color: '#fff',
//       bgcolor: positive ? '#43a047' : '#e53935',
//       '& .MuiChip-label': { px: 0.8 }
//     }}
//   />
// )

// const exportToCsv = (rows: LiveRecordType[]) => {
//   const header = columns.filter(c => c !== 'Actions').join(',')

//   const lines = rows.map(r =>
//     [
//       r.dataStamp,
//       r.fNo,
//       r.location,
//       r.ward,
//       r.zone,
//       r.imei,
//       r.mobileNo,
//       r.fittings,
//       r.physicalLoad,
//       r.actualLoad,
//       r.ampR,
//       r.ampY,
//       r.ampB,
//       r.power,
//       r.doorStatus,
//       `${r.lat} ${r.long}`,
//       r.output,
//       r.ol,
//       r.ul,
//       r.lightOn,
//       r.lightOff,
//       r.timeStamp,
//       r.networkStatus
//     ].join(',')
//   )

//   const csv = [header, ...lines].join('\n')
//   const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
//   const url = URL.createObjectURL(blob)
//   const link = document.createElement('a')

//   link.href = url
//   link.download = `live-records-${Date.now()}.csv`
//   link.click()
//   URL.revokeObjectURL(url)
// }

// // ---------------------------------------------------------------------------
// // Component
// // ---------------------------------------------------------------------------

// const Table = () => {
//   const [data, setData] = useState<LiveRecordType[]>(rowsData)

//   // filters
//   const [search, setSearch] = useState('')
//   const [connectivityFilter, setConnectivityFilter] = useState<'All' | ConnectivityType>('All')
//   const [zoneFilter, setZoneFilter] = useState('All Zone')
//   const [wardFilter, setWardFilter] = useState('All Wards')

//   // pagination
//   const [showCount, setShowCount] = useState(100)
//   const [page, setPage] = useState(1)

//   // emergency confirm dialog
//   const [emergencyDialog, setEmergencyDialog] = useState<OnOffType | null>(null)
//   const [emergencyState, setEmergencyState] = useState<OnOffType | null>(null)

//   const zoneOptions = useMemo(() => ['All Zone', ...Array.from(new Set(data.map(r => r.zone)))], [data])
//   const wardOptions = useMemo(() => ['All Wards', ...Array.from(new Set(data.map(r => r.ward)))], [data])

//   const [sortColumn, setSortColumn] = useState<string | null>(null)
//   const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc')

//   const filteredRows = useMemo(() => {
//     return data.filter(row => {
//       if (connectivityFilter !== 'All' && row.networkStatus !== connectivityFilter) return false
//       if (zoneFilter !== 'All Zone' && row.zone !== zoneFilter) return false
//       if (wardFilter !== 'All Wards' && row.ward !== wardFilter) return false

//       if (search.trim()) {
//         const q = search.trim().toLowerCase()

//         const haystack = [row.fNo, row.location, row.imei, row.mobileNo, row.zone, row.ward].join(' ').toLowerCase()

//         if (!haystack.includes(q)) return false
//       }

//       return true
//     })
//   }, [data, connectivityFilter, zoneFilter, wardFilter, search])

//   const pageCount = Math.max(1, Math.ceil(filteredRows.length / showCount))
//   const currentPage = Math.min(page, pageCount)
//   const startIdx = (currentPage - 1) * showCount
//   // const visibleRows = filteredRows.slice(startIdx, startIdx + showCount)

//   const sortedRows = [...filteredRows].sort((a: any, b: any) => {
//     if (!sortColumn) return 0

//     const keyMap: Record<string, string> = {
//       'Data Stamp': 'dataStamp',
//       'F.No.': 'fNo',
//       Location: 'location',
//       Ward: 'ward',
//       Zone: 'zone',
//       IMEI: 'imei',
//       'Mobile No': 'mobileNo',
//       Fittings: 'fittings',
//       'Physical Load': 'physicalLoad',
//       'Actual Load': 'actualLoad',
//       'AMP R': 'ampR'
//     }

//     const key = keyMap[sortColumn]
//     if (!key) return 0

//     const valA = a[key]
//     const valB = b[key]

//     if (valA < valB) return sortDirection === 'asc' ? -1 : 1
//     if (valA > valB) return sortDirection === 'asc' ? 1 : -1
//     return 0
//   })

//   const visibleRows = sortedRows.slice(startIdx, startIdx + showCount)

//   const handleClearFilters = () => {
//     setSearch('')
//     setConnectivityFilter('All')
//     setZoneFilter('All Zone')
//     setWardFilter('All Wards')
//     setPage(1)
//   }

//   const toggleLight = (id: number) => {
//     setData(prev =>
//       prev.map(row =>
//         row.id === id
//           ? {
//               ...row,
//               isLightOff: !row.isLightOff,
//               lightOn: !row.isLightOff ? 0 : row.fittings,
//               lightOff: !row.isLightOff ? row.fittings : 0
//             }
//           : row
//       )
//     )
//   }

//   const confirmEmergency = () => {
//     if (emergencyDialog) setEmergencyState(emergencyDialog)
//     setEmergencyDialog(null)
//   }

//   const handleSort = (column: string) => {
//     if (sortColumn === column) {
//       setSortDirection(prev => (prev === 'asc' ? 'desc' : 'asc'))
//     } else {
//       setSortColumn(column)
//       setSortDirection('asc')
//     }
//   }

//   return (
//     <Card sx={{ borderRadius: '4px', overflow: 'hidden', boxShadow: '0 2px 6px rgba(0,0,0,0.12)' }}>
//       {/* Header bar */}
//       <Box
//         sx={{
//           px: 1.5,
//           py: 0.8,
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           borderBottom: '1px solid #eee',
//           bgcolor: '#fff'
//         }}
//       >
//         <Chip
//           label='LIVE RECORDS'
//           sx={{
//             // bgcolor: ACCENT,
//             // color: ' #fff',

//             fontWeight: 700,
//             fontSize: '0.7rem',
//             letterSpacing: '0.04em',
//             borderRadius: '4px'
//           }}
//         />

//         {/* <Box sx={{ display: 'flex', gap: 1 }}>
//           <Button
//             size='small'
//             variant='contained'
//             sx={{ bgcolor: ACCENT, fontSize: '0.65rem', '&:hover': { bgcolor: '#ef6c00' } }}
//             startIcon={<i className='ri-add-line' style={{ fontSize: 14 }} />}
//           >
//             Add CCMS
//           </Button>
//           <Button
//             size='small'
//             variant='outlined'
//             sx={{ borderColor: ACCENT, color: ACCENT, fontSize: '0.65rem' }}
//             startIcon={<i className='ri-download-2-line' style={{ fontSize: 14 }} />}
//             onClick={() => exportToCsv(filteredRows)}
//           >
//             Export
//           </Button>
//           <Button
//             size='small'
//             variant='contained'
//             color='success'
//             sx={{ fontSize: '0.65rem', opacity: emergencyState === 'ON' ? 1 : 0.85 }}
//             onClick={() => setEmergencyDialog('ON')}
//           >
//             Emergency ON
//           </Button>
//           <Button
//             size='small'
//             variant='contained'
//             color='error'
//             sx={{ fontSize: '0.65rem', opacity: emergencyState === 'OFF' ? 1 : 0.85 }}
//             onClick={() => setEmergencyDialog('OFF')}
//           >
//             Emergency OFF
//           </Button>
//         </Box> */}
//       </Box>

//       {/* Filter bar */}

//       <Box
//         sx={{
//           px: 2,
//           py: 1,
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'space-between',
//           bgcolor: '#fafafa',
//           borderBottom: '1px solid #eee',
//           gap: 2
//         }}
//       >
//         {/* LEFT */}
//         <Box sx={{ minWidth: 180, display: 'flex', alignItems: 'center', gap: 1 }}>
//           <Typography sx={{ fontSize: '0.7rem', color: '#666' }}>Show</Typography>

//           <FormControl size='small'>
//             <Select
//               value={showCount}
//               onChange={e => {
//                 setShowCount(Number(e.target.value))
//                 setPage(1)
//               }}
//               sx={{ fontSize: '0.7rem', height: 30, minWidth: 64 }}
//             >
//               {SHOW_OPTIONS.map(opt => (
//                 <MenuItem key={opt} value={opt} sx={{ fontSize: '0.7rem' }}>
//                   {opt}
//                 </MenuItem>
//               ))}
//             </Select>
//           </FormControl>
//         </Box>

//         {/* CENTER */}
//         <Box
//           sx={{
//             flex: 1,
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             gap: 1
//           }}
//         >
//           <Typography sx={{ fontSize: '0.7rem', color: '#666' }}>Filters</Typography>

//           <FormControl size='small'>
//             <Select
//               value={connectivityFilter}
//               onChange={e => {
//                 setConnectivityFilter(e.target.value as ConnectivityType)
//                 setPage(1)
//               }}
//               sx={{ fontSize: '0.7rem', height: 30, minWidth: 130 }}
//             >
//               <MenuItem value='All'>All</MenuItem>
//               <MenuItem value='CONNECTED'>Connected</MenuItem>
//               <MenuItem value='DISCONNECTED'>Disconnected</MenuItem>
//             </Select>
//           </FormControl>

//           <FormControl size='small'>
//             <Select
//               value={zoneFilter}
//               onChange={e => {
//                 setZoneFilter(e.target.value)
//                 setPage(1)
//               }}
//               sx={{ fontSize: '0.7rem', height: 30, minWidth: 110 }}
//             >
//               {zoneOptions.map(z => (
//                 <MenuItem key={z} value={z}>
//                   {z}
//                 </MenuItem>
//               ))}
//             </Select>
//           </FormControl>

//           <FormControl size='small'>
//             <Select
//               value={wardFilter}
//               onChange={e => {
//                 setWardFilter(e.target.value)
//                 setPage(1)
//               }}
//               sx={{ fontSize: '0.7rem', height: 30, minWidth: 110 }}
//             >
//               {wardOptions.map(w => (
//                 <MenuItem key={w} value={w}>
//                   {w}
//                 </MenuItem>
//               ))}
//             </Select>
//           </FormControl>
//         </Box>

//         {/* RIGHT */}
//         <Box
//           sx={{
//             minWidth: 320,
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'flex-end',
//             gap: 1
//           }}
//         >
//           <Typography sx={{ fontSize: '0.7rem', color: '#666' }}>Search</Typography>

//           <TextField
//             size='small'
//             placeholder='Type to Search'
//             value={search}
//             onChange={e => {
//               setSearch(e.target.value)
//               setPage(1)
//             }}
//             sx={{
//               minWidth: 180,
//               '& .MuiInputBase-input': {
//                 fontSize: '0.7rem',
//                 py: 0.6
//               }
//             }}
//             InputProps={{
//               endAdornment: (
//                 <InputAdornment position='end'>
//                   <i className='ri-search-line' style={{ fontSize: 14 }} />
//                 </InputAdornment>
//               )
//             }}
//           />

//           <Button
//             size='small'
//             variant='outlined'
//             color='inherit'
//             sx={{ fontSize: '0.65rem' }}
//             onClick={handleClearFilters}
//           >
//             Clear
//           </Button>
//         </Box>
//       </Box>

//       {/* Table */}
//       <Box sx={{ overflowX: 'auto', bgcolor: '#fff' }}>
//         <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.72rem' }}>
//           <thead>
//             <tr style={{ background: '#1e88e5' }}>
//               {columns.map(h => (
//                 <th
//                   key={h}
//                   style={{
//                     padding: '6px 10px',
//                     textAlign: 'left',
//                     fontWeight: 600,
//                     color: '#fff',
//                     fontSize: '0.66rem',
//                     textTransform: 'uppercase',
//                     letterSpacing: '0.03em',
//                     whiteSpace: 'nowrap',
//                     cursor: 'pointer'
//                   }}
//                   onClick={() => handleSort(h)}
//                 >
//                   <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
//                     {h}

//                     <span
//                       style={{
//                         display: 'flex',
//                         flexDirection: 'column',
//                         fontSize: '8px',
//                         lineHeight: 0.8,
//                         opacity: sortColumn === h ? 1 : 0.5
//                       }}
//                     >
//                       <span style={{ color: sortColumn === h && sortDirection === 'asc' ? '#fff' : '#ccc' }}>▲</span>
//                       <span style={{ color: sortColumn === h && sortDirection === 'desc' ? '#fff' : '#ccc' }}>▼</span>
//                     </span>
//                   </span>
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {visibleRows.length === 0 && (
//               <tr>
//                 <td colSpan={columns.length} style={{ padding: '20px', textAlign: 'center', color: '#999' }}>
//                   No matching records found.
//                 </td>
//               </tr>
//             )}

//             {visibleRows.map((row, index) => (
//               <tr
//                 key={row.id}
//                 style={{
//                   borderBottom: '1px solid #f0f0f0',
//                   background: index % 2 === 0 ? '#fff' : '#fafafa'
//                 }}
//               >
//                 <td style={cellStyle}>{row.dataStamp}</td>

//                 <td style={cellStyle}>
//                   <Typography
//                     component='a'
//                     href='#'
//                     sx={{ fontSize: '0.72rem', color: '#1976d2', textDecoration: 'none', fontWeight: 600 }}
//                   >
//                     {row.fNo}
//                   </Typography>
//                 </td>

//                 <td style={cellStyle}>{row.location}</td>
//                 <td style={cellStyle}>{row.ward}</td>
//                 <td style={cellStyle}>{row.zone}</td>
//                 <td style={cellStyle}>{row.imei}</td>
//                 <td style={cellStyle}>{row.mobileNo}</td>

//                 <td style={cellStyle}>
//                   <Chip
//                     label={row.fittings}
//                     size='small'
//                     sx={{
//                       fontSize: '0.62rem',
//                       height: 18,
//                       fontWeight: 600,
//                       color: '#fff',
//                       bgcolor: '#43a047',
//                       '& .MuiChip-label': { px: 0.8 }
//                     }}
//                   />
//                 </td>

//                 <td style={cellStyle}>{row.physicalLoad.toFixed(3)}</td>
//                 <td style={cellStyle}>{row.actualLoad.toFixed(3)}</td>
//                 <td style={cellStyle}>{row.ampR.toFixed(1)}</td>
//                 <td style={cellStyle}>{row.ampY.toFixed(1)}</td>
//                 <td style={cellStyle}>{row.ampB.toFixed(1)}</td>

//                 <td style={cellStyle}>
//                   <i
//                     className='ri-shut-down-line'
//                     style={{ fontSize: 16, color: row.power === 'ON' ? '#43a047' : '#e53935' }}
//                   />
//                 </td>

//                 <td style={cellStyle}>
//                   <StatusChip label={row.doorStatus} positive={row.doorStatus === 'OPEN'} />
//                 </td>

//                 <td style={cellStyle}>
//                   <Box sx={{ lineHeight: 1.2 }}>
//                     <Typography sx={{ fontSize: '0.68rem', color: '#555' }}>{row.lat}</Typography>
//                     <Typography sx={{ fontSize: '0.68rem', color: '#555' }}>{row.long}</Typography>
//                   </Box>
//                 </td>

//                 <td style={cellStyle}>
//                   <StatusChip label={row.output} positive={row.output === 'ON'} />
//                 </td>

//                 <td style={cellStyle}>{row.ol}</td>

//                 <td style={cellStyle}>
//                   <Chip
//                     label={`${row.ul.toFixed(1)} %`}
//                     size='small'
//                     sx={{
//                       fontSize: '0.62rem',
//                       height: 18,
//                       fontWeight: 600,
//                       color: '#fff',
//                       bgcolor: '#1e88e5',
//                       '& .MuiChip-label': { px: 0.8 }
//                     }}
//                   />
//                 </td>

//                 <td style={cellStyle}>{row.lightOn}</td>
//                 <td style={cellStyle}>{row.lightOff}</td>
//                 <td style={cellStyle}>{row.timeStamp}</td>

//                 <td style={cellStyle}>
//                   <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
//                     <Box>
//                       <StatusChip label={row.networkStatus} positive={row.networkStatus === 'CONNECTED'} />
//                       <Typography sx={{ fontSize: '0.6rem', color: '#999', mt: 0.2 }}>{row.lastSeen}</Typography>
//                     </Box>
//                   </Box>
//                 </td>

//                 {/* <td style={cellStyle}>
//                   <Box sx={{ display: 'flex', gap: 0.3 }}>
//                     <Tooltip title='Settings'>
//                       <IconButton size='small' sx={{ color: '#1e88e5' }}>
//                         <i className='ri-settings-3-line' style={{ fontSize: 14 }} />
//                       </IconButton>
//                     </Tooltip>
//                     <Tooltip title='View'>
//                       <IconButton size='small' sx={{ color: ACCENT }}>
//                         <i className='ri-eye-line' style={{ fontSize: 14 }} />
//                       </IconButton>
//                     </Tooltip>
//                     <Tooltip title='Edit'>
//                       <IconButton size='small' sx={{ color: ACCENT }}>
//                         <i className='ri-edit-2-line' style={{ fontSize: 14 }} />
//                       </IconButton>
//                     </Tooltip>
//                     <Tooltip title='Delete'>
//                       <IconButton
//                         size='small'
//                         sx={{ color: '#e53935' }}
//                         onClick={() => setData(prev => prev.filter(r => r.id !== row.id))}
//                       >
//                         <i className='ri-delete-bin-line' style={{ fontSize: 14 }} />
//                       </IconButton>
//                     </Tooltip>
//                   </Box>
//                 </td> */}

//                 <td style={cellStyle}>
//                   <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.8 }}>
//                     {/* Buttons Row */}
//                     <Box sx={{ display: 'flex', gap: 0.3 }}>
//                       <Tooltip title='Settings'>
//                         <IconButton size='small' sx={{ color: '#1e88e5' }}>
//                           <i className='ri-settings-3-line' style={{ fontSize: 14 }} />
//                         </IconButton>
//                       </Tooltip>

//                       <Tooltip title='View'>
//                         <IconButton size='small' sx={{ color: ACCENT }}>
//                           <i className='ri-eye-line' style={{ fontSize: 14 }} />
//                         </IconButton>
//                       </Tooltip>

//                       <Tooltip title='Edit'>
//                         <IconButton size='small' sx={{ color: ACCENT }}>
//                           <i className='ri-edit-2-line' style={{ fontSize: 14 }} />
//                         </IconButton>
//                       </Tooltip>

//                       <Tooltip title='Delete'>
//                         <IconButton
//                           size='small'
//                           sx={{ color: '#e53935' }}
//                           onClick={() => setData(prev => prev.filter(r => r.id !== row.id))}
//                         >
//                           <i className='ri-delete-bin-line' style={{ fontSize: 14 }} />
//                         </IconButton>
//                       </Tooltip>
//                     </Box>

//                     {/* Light Toggle */}
//                     <Tooltip title={row.isLightOff ? 'Turn light on' : 'Turn light off'}>
//                       <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
//                         <Switch
//                           size='small'
//                           checked={!row.isLightOff}
//                           onChange={() => toggleLight(row.id)}
//                           sx={{
//                             '& .MuiSwitch-switchBase.Mui-checked': { color: ACCENT },
//                             '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
//                               bgcolor: ACCENT
//                             }
//                           }}
//                         />

//                         <Typography sx={{ fontSize: '0.65rem', color: '#777' }}>
//                           {row.isLightOff ? 'Light OFF' : 'Light ON'}
//                         </Typography>
//                       </Box>
//                     </Tooltip>
//                   </Box>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </Box>

//       {/* Pagination footer */}
//       <Box
//         sx={{
//           px: 1.5,
//           py: 1,
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'space-between',
//           borderTop: '1px solid #eee',
//           bgcolor: '#fafafa'
//         }}
//       >
//         <Typography sx={{ fontSize: '0.7rem', color: '#777' }}>
//           {filteredRows.length === 0
//             ? 'Showing 0 entries'
//             : `Showing ${startIdx + 1} to ${Math.min(startIdx + showCount, filteredRows.length)} of ${
//                 filteredRows.length
//               } entries`}
//         </Typography>

//         <Pagination
//           count={pageCount}
//           page={currentPage}
//           onChange={(_, value) => setPage(value)}
//           size='small'
//           sx={{
//             '& .MuiPaginationItem-root.Mui-selected': { bgcolor: ACCENT, color: '#fff' }
//           }}
//         />
//       </Box>

//       {/* Emergency confirmation dialog */}
//       <Dialog open={Boolean(emergencyDialog)} onClose={() => setEmergencyDialog(null)}>
//         <DialogTitle sx={{ fontSize: '1rem' }}>Confirm Emergency {emergencyDialog === 'ON' ? 'ON' : 'OFF'}</DialogTitle>
//         <DialogContent>
//           <Typography sx={{ fontSize: '0.85rem' }}>
//             This will switch emergency mode {emergencyDialog === 'ON' ? 'ON' : 'OFF'} for all connected devices. Are you
//             sure you want to continue?
//           </Typography>
//         </DialogContent>
//         <DialogActions>
//           <Button size='small' onClick={() => setEmergencyDialog(null)}>
//             Cancel
//           </Button>
//           <Button
//             size='small'
//             variant='contained'
//             color={emergencyDialog === 'ON' ? 'success' : 'error'}
//             onClick={confirmEmergency}
//           >
//             Confirm
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Card>
//   )
// }

// const cellStyle: CSSProperties = {
//   padding: '5px 10px',
//   whiteSpace: 'nowrap'
// }

// export default Table

// // 'use client'

// // import type { CSSProperties } from 'react'
// // import { useMemo, useState } from 'react'

// // import Box from '@mui/material/Box'
// // import Typography from '@mui/material/Typography'
// // import Chip from '@mui/material/Chip'
// // import Button from '@mui/material/Button'
// // import TextField from '@mui/material/TextField'
// // import Select from '@mui/material/Select'
// // import MenuItem from '@mui/material/MenuItem'
// // import FormControl from '@mui/material/FormControl'
// // import InputAdornment from '@mui/material/InputAdornment'
// // import IconButton from '@mui/material/IconButton'
// // import Switch from '@mui/material/Switch'
// // import Pagination from '@mui/material/Pagination'
// // import Dialog from '@mui/material/Dialog'
// // import DialogTitle from '@mui/material/DialogTitle'
// // import DialogContent from '@mui/material/DialogContent'
// // import DialogActions from '@mui/material/DialogActions'
// // import Tooltip from '@mui/material/Tooltip'

// // import PanelCard from './ui/PanelCard'
// // import { StatusChip } from './ui/primitives'
// // import { COLORS } from './ui/tokens'

// // // ─── Types ───────────────────────────────────────────────────────────────────

// // type Connectivity = 'CONNECTED' | 'DISCONNECTED'
// // type OnOff = 'ON' | 'OFF'

// // interface LiveRecord {
// //   id: number
// //   dataStamp: string
// //   fNo: string
// //   location: string
// //   ward: string
// //   zone: string
// //   imei: string
// //   mobileNo: string
// //   fittings: number
// //   physicalLoad: number
// //   actualLoad: number
// //   ampR: number
// //   ampY: number
// //   ampB: number
// //   power: OnOff
// //   doorStatus: 'OPEN' | 'CLOSED'
// //   lat: number
// //   long: number
// //   output: OnOff
// //   ol: number
// //   ul: number
// //   lightOn: number
// //   lightOff: number
// //   timeStamp: string
// //   networkStatus: Connectivity
// //   lastSeen: string
// //   isLightOff: boolean
// // }

// // // ─── Mock data ────────────────────────────────────────────────────────────────

// // const INITIAL_ROWS: LiveRecord[] = [
// //   {
// //     id: 1340,
// //     dataStamp: '18-06-2026 11:14',
// //     fNo: '1340',
// //     location: 'Usmanpur yes bi...',
// //     ward: '*6',
// //     zone: 'Zone 3',
// //     imei: '861305086415701',
// //     mobileNo: '5754230982666',
// //     fittings: 15,
// //     physicalLoad: 0.875,
// //     actualLoad: 0.0,
// //     ampR: 0.0,
// //     ampY: 0.0,
// //     ampB: 0.0,
// //     power: 'ON',
// //     doorStatus: 'CLOSED',
// //     lat: 27.876443,
// //     long: 78.061798,
// //     output: 'OFF',
// //     ol: 0,
// //     ul: 100.0,
// //     lightOn: 0,
// //     lightOff: 15,
// //     timeStamp: '18-06-2026 11:14',
// //     networkStatus: 'CONNECTED',
// //     lastSeen: '0 min ago',
// //     isLightOff: true
// //   },
// //   {
// //     id: 1341,
// //     dataStamp: '18-06-2026 11:12',
// //     fNo: '1341',
// //     location: 'Civil Lines',
// //     ward: '*2',
// //     zone: 'Zone 1',
// //     imei: '861305086417123',
// //     mobileNo: '5754230982667',
// //     fittings: 22,
// //     physicalLoad: 1.42,
// //     actualLoad: 1.18,
// //     ampR: 1.9,
// //     ampY: 1.8,
// //     ampB: 1.7,
// //     power: 'ON',
// //     doorStatus: 'OPEN',
// //     lat: 27.880112,
// //     long: 78.05512,
// //     output: 'ON',
// //     ol: 0,
// //     ul: 96.4,
// //     lightOn: 22,
// //     lightOff: 0,
// //     timeStamp: '18-06-2026 11:12',
// //     networkStatus: 'CONNECTED',
// //     lastSeen: '2 min ago',
// //     isLightOff: false
// //   },
// //   {
// //     id: 1342,
// //     dataStamp: '18-06-2026 10:58',
// //     fNo: '1342',
// //     location: 'Kotwali Road',
// //     ward: '*4',
// //     zone: 'Zone 2',
// //     imei: '861305086419988',
// //     mobileNo: '5754230982668',
// //     fittings: 10,
// //     physicalLoad: 0.0,
// //     actualLoad: 0.0,
// //     ampR: 0.0,
// //     ampY: 0.0,
// //     ampB: 0.0,
// //     power: 'OFF',
// //     doorStatus: 'CLOSED',
// //     lat: 27.871234,
// //     long: 78.06912,
// //     output: 'OFF',
// //     ol: 0,
// //     ul: 0.0,
// //     lightOn: 0,
// //     lightOff: 10,
// //     timeStamp: '18-06-2026 10:58',
// //     networkStatus: 'DISCONNECTED',
// //     lastSeen: '16 min ago',
// //     isLightOff: true
// //   },
// //   {
// //     id: 1343,
// //     dataStamp: '18-06-2026 11:09',
// //     fNo: '1343',
// //     location: 'Subhash Park',
// //     ward: '*6',
// //     zone: 'Zone 3',
// //     imei: '861305086421345',
// //     mobileNo: '5754230982669',
// //     fittings: 18,
// //     physicalLoad: 0.93,
// //     actualLoad: 0.9,
// //     ampR: 1.2,
// //     ampY: 1.1,
// //     ampB: 1.2,
// //     power: 'ON',
// //     doorStatus: 'CLOSED',
// //     lat: 27.877981,
// //     long: 78.0599,
// //     output: 'ON',
// //     ol: 0,
// //     ul: 99.1,
// //     lightOn: 18,
// //     lightOff: 0,
// //     timeStamp: '18-06-2026 11:09',
// //     networkStatus: 'CONNECTED',
// //     lastSeen: '5 min ago',
// //     isLightOff: false
// //   }
// // ]

// // const COLUMNS = [
// //   'Data Stamp',
// //   'F.No.',
// //   'Location',
// //   'Ward',
// //   'Zone',
// //   'IMEI',
// //   'Mobile No',
// //   'Fittings',
// //   'Physical Load',
// //   'Actual Load',
// //   'AMP R',
// //   'AMP Y',
// //   'AMP B',
// //   'Power',
// //   'Door Status',
// //   'GEO Location',
// //   'Output',
// //   'OL',
// //   'UL',
// //   'Light ON',
// //   'Light OFF',
// //   'Time Stamp',
// //   'Network Status',
// //   'Actions'
// // ]

// // const SORT_KEY_MAP: Record<string, keyof LiveRecord> = {
// //   'Data Stamp': 'dataStamp',
// //   'F.No.': 'fNo',
// //   Location: 'location',
// //   Ward: 'ward',
// //   Zone: 'zone',
// //   IMEI: 'imei',
// //   'Mobile No': 'mobileNo',
// //   Fittings: 'fittings',
// //   'Physical Load': 'physicalLoad',
// //   'Actual Load': 'actualLoad',
// //   'AMP R': 'ampR'
// // }

// // const SHOW_OPTIONS = [10, 25, 50, 100]

// // // ─── Cell style ───────────────────────────────────────────────────────────────

// // const cell: CSSProperties = { padding: '5px 10px', whiteSpace: 'nowrap', fontSize: '0.72rem', color: COLORS.text }

// // // ─── Main ─────────────────────────────────────────────────────────────────────

// // const Table = () => {
// //   const [data, setData] = useState<LiveRecord[]>(INITIAL_ROWS)
// //   const [search, setSearch] = useState('')
// //   const [connectivity, setConnectivity] = useState<'All' | Connectivity>('All')
// //   const [zone, setZone] = useState('All Zone')
// //   const [ward, setWard] = useState('All Wards')
// //   const [showCount, setShowCount] = useState(100)
// //   const [page, setPage] = useState(1)
// //   const [emergencyDialog, setEmergencyDialog] = useState<OnOff | null>(null)
// //   const [emergencyState, setEmergencyState] = useState<OnOff | null>(null)
// //   const [sortCol, setSortCol] = useState<string | null>(null)
// //   const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc')

// //   const zoneOptions = useMemo(() => ['All Zone', ...Array.from(new Set(data.map(r => r.zone)))], [data])
// //   const wardOptions = useMemo(() => ['All Wards', ...Array.from(new Set(data.map(r => r.ward)))], [data])

// //   const filtered = useMemo(() => {
// //     return data.filter(row => {
// //       if (connectivity !== 'All' && row.networkStatus !== connectivity) return false
// //       if (zone !== 'All Zone' && row.zone !== zone) return false
// //       if (ward !== 'All Wards' && row.ward !== ward) return false
// //       if (search.trim()) {
// //         const q = search.toLowerCase()
// //         if (![row.fNo, row.location, row.imei, row.mobileNo, row.zone, row.ward].join(' ').toLowerCase().includes(q))
// //           return false
// //       }
// //       return true
// //     })
// //   }, [data, connectivity, zone, ward, search])

// //   const sorted = useMemo(() => {
// //     if (!sortCol) return filtered
// //     const key = SORT_KEY_MAP[sortCol]
// //     if (!key) return filtered
// //     return [...filtered].sort((a: any, b: any) => {
// //       if (a[key] < b[key]) return sortDir === 'asc' ? -1 : 1
// //       if (a[key] > b[key]) return sortDir === 'asc' ? 1 : -1
// //       return 0
// //     })
// //   }, [filtered, sortCol, sortDir])

// //   const pageCount = Math.max(1, Math.ceil(sorted.length / showCount))
// //   const curPage = Math.min(page, pageCount)
// //   const start = (curPage - 1) * showCount
// //   const visible = sorted.slice(start, start + showCount)

// //   const handleSort = (col: string) => {
// //     if (sortCol === col) setSortDir(d => (d === 'asc' ? 'desc' : 'asc'))
// //     else {
// //       setSortCol(col)
// //       setSortDir('asc')
// //     }
// //   }

// //   const toggleLight = (id: number) => {
// //     setData(prev =>
// //       prev.map(r =>
// //         r.id !== id
// //           ? r
// //           : {
// //               ...r,
// //               isLightOff: !r.isLightOff,
// //               lightOn: !r.isLightOff ? 0 : r.fittings,
// //               lightOff: !r.isLightOff ? r.fittings : 0
// //             }
// //       )
// //     )
// //   }

// //   const clearFilters = () => {
// //     setSearch('')
// //     setConnectivity('All')
// //     setZone('All Zone')
// //     setWard('All Wards')
// //     setPage(1)
// //   }

// //   // ── Toolbar ──────────────────────────────────────────────────────────────

// //   const Toolbar = () => (
// //     <Box
// //       sx={{
// //         px: 1.5,
// //         py: 0.8,
// //         display: 'flex',
// //         alignItems: 'center',
// //         justifyContent: 'space-between',
// //         borderBottom: `1px solid ${COLORS.border}`,
// //         gap: 2,
// //         flexWrap: 'wrap'
// //       }}
// //     >
// //       {/* Left: show + filters */}
// //       <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
// //         <Typography sx={{ fontSize: '0.7rem', color: COLORS.textMuted }}>Show</Typography>
// //         <FormControl size='small'>
// //           <Select
// //             value={showCount}
// //             onChange={e => {
// //               setShowCount(Number(e.target.value))
// //               setPage(1)
// //             }}
// //             sx={{ fontSize: '0.7rem', height: 30, minWidth: 64 }}
// //           >
// //             {SHOW_OPTIONS.map(n => (
// //               <MenuItem key={n} value={n} sx={{ fontSize: '0.7rem' }}>
// //                 {n}
// //               </MenuItem>
// //             ))}
// //           </Select>
// //         </FormControl>

// //         <Typography sx={{ fontSize: '0.7rem', color: COLORS.textMuted }}>|</Typography>

// //         <FormControl size='small'>
// //           <Select
// //             value={connectivity}
// //             onChange={e => {
// //               setConnectivity(e.target.value as any)
// //               setPage(1)
// //             }}
// //             sx={{ fontSize: '0.7rem', height: 30, minWidth: 130 }}
// //           >
// //             <MenuItem value='All'>All</MenuItem>
// //             <MenuItem value='CONNECTED'>Connected</MenuItem>
// //             <MenuItem value='DISCONNECTED'>Disconnected</MenuItem>
// //           </Select>
// //         </FormControl>
// //         <FormControl size='small'>
// //           <Select
// //             value={zone}
// //             onChange={e => {
// //               setZone(e.target.value)
// //               setPage(1)
// //             }}
// //             sx={{ fontSize: '0.7rem', height: 30, minWidth: 110 }}
// //           >
// //             {zoneOptions.map(z => (
// //               <MenuItem key={z} value={z} sx={{ fontSize: '0.7rem' }}>
// //                 {z}
// //               </MenuItem>
// //             ))}
// //           </Select>
// //         </FormControl>
// //         <FormControl size='small'>
// //           <Select
// //             value={ward}
// //             onChange={e => {
// //               setWard(e.target.value)
// //               setPage(1)
// //             }}
// //             sx={{ fontSize: '0.7rem', height: 30, minWidth: 110 }}
// //           >
// //             {wardOptions.map(w => (
// //               <MenuItem key={w} value={w} sx={{ fontSize: '0.7rem' }}>
// //                 {w}
// //               </MenuItem>
// //             ))}
// //           </Select>
// //         </FormControl>
// //       </Box>

// //       {/* Right: search + action buttons */}
// //       <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
// //         <TextField
// //           size='small'
// //           placeholder='Search…'
// //           value={search}
// //           onChange={e => {
// //             setSearch(e.target.value)
// //             setPage(1)
// //           }}
// //           sx={{ minWidth: 180, '& .MuiInputBase-input': { fontSize: '0.7rem', py: 0.6 } }}
// //           InputProps={{
// //             endAdornment: (
// //               <InputAdornment position='end'>
// //                 <i className='ri-search-line' style={{ fontSize: 14 }} />
// //               </InputAdornment>
// //             )
// //           }}
// //         />
// //         <Button size='small' variant='outlined' color='inherit' sx={{ fontSize: '0.65rem' }} onClick={clearFilters}>
// //           Clear
// //         </Button>

// //         {/* Uncomment once permissions are wired:
// //         <Button size='small' variant='contained' sx={{ bgcolor: COLORS.accent, fontSize: '0.65rem' }}
// //           startIcon={<i className='ri-add-line' style={{ fontSize: 14 }} />}> Add CCMS </Button>
// //         <Button size='small' variant='outlined' sx={{ borderColor: COLORS.accent, color: COLORS.accent, fontSize: '0.65rem' }}
// //           startIcon={<i className='ri-download-2-line' style={{ fontSize: 14 }} />}
// //           onClick={() => exportToCsv(filtered)}> Export </Button>
// //         <Button size='small' variant='contained' color='success' sx={{ fontSize: '0.65rem' }}
// //           onClick={() => setEmergencyDialog('ON')}> Emergency ON </Button>
// //         <Button size='small' variant='contained' color='error' sx={{ fontSize: '0.65rem' }}
// //           onClick={() => setEmergencyDialog('OFF')}> Emergency OFF </Button>
// //         */}
// //       </Box>
// //     </Box>
// //   )

// //   // ── Table ──────────────────────────────────────────────────────────────────

// //   return (
// //     <PanelCard
// //       title='Live Records'
// //       accent={COLORS.accent}
// //       icon='ri-live-line'
// //       badge='Live'
// //       badgeColor={COLORS.on}
// //       noPadding
// //     >
// //       <Toolbar />

// //       <Box sx={{ overflowX: 'auto' }}>
// //         <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.72rem' }}>
// //           <thead>
// //             <tr>
// //               {COLUMNS.map(h => (
// //                 <th
// //                   key={h}
// //                   onClick={() => handleSort(h)}
// //                   style={{
// //                     padding: '7px 10px',
// //                     textAlign: 'left',
// //                     fontWeight: 700,
// //                     fontSize: '0.64rem',
// //                     textTransform: 'uppercase',
// //                     letterSpacing: '0.03em',
// //                     whiteSpace: 'nowrap',
// //                     cursor: 'pointer',
// //                     background: `linear-gradient(135deg, ${COLORS.tableHeader} 0%, ${COLORS.tableHeaderAlt} 100%)`,
// //                     color: '#e2e8f0',
// //                     userSelect: 'none'
// //                   }}
// //                 >
// //                   <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
// //                     {h}
// //                     <span
// //                       style={{
// //                         display: 'flex',
// //                         flexDirection: 'column',
// //                         fontSize: '8px',
// //                         lineHeight: 0.8,
// //                         opacity: sortCol === h ? 1 : 0.4
// //                       }}
// //                     >
// //                       <span style={{ color: sortCol === h && sortDir === 'asc' ? '#fff' : '#94a3b8' }}>▲</span>
// //                       <span style={{ color: sortCol === h && sortDir === 'desc' ? '#fff' : '#94a3b8' }}>▼</span>
// //                     </span>
// //                   </span>
// //                 </th>
// //               ))}
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {visible.length === 0 && (
// //               <tr>
// //                 <td colSpan={COLUMNS.length} style={{ padding: '24px', textAlign: 'center', color: COLORS.textFaint }}>
// //                   No matching records found.
// //                 </td>
// //               </tr>
// //             )}
// //             {visible.map((row, idx) => (
// //               <tr
// //                 key={row.id}
// //                 style={{
// //                   borderBottom: `1px solid ${COLORS.border}`,
// //                   background: idx % 2 === 0 ? COLORS.surface : COLORS.tableRowAlt,
// //                   transition: 'background 0.12s'
// //                 }}
// //                 onMouseEnter={e => (e.currentTarget.style.background = COLORS.tableHover)}
// //                 onMouseLeave={e =>
// //                   (e.currentTarget.style.background = idx % 2 === 0 ? COLORS.surface : COLORS.tableRowAlt)
// //                 }
// //               >
// //                 <td style={cell}>{row.dataStamp}</td>
// //                 <td style={cell}>
// //                   <Typography
// //                     component='a'
// //                     href='#'
// //                     sx={{
// //                       fontSize: '0.72rem',
// //                       color: COLORS.accent,
// //                       fontWeight: 700,
// //                       textDecoration: 'none',
// //                       '&:hover': { textDecoration: 'underline' }
// //                     }}
// //                   >
// //                     {row.fNo}
// //                   </Typography>
// //                 </td>
// //                 <td style={cell}>{row.location}</td>
// //                 <td style={cell}>{row.ward}</td>
// //                 <td style={cell}>{row.zone}</td>
// //                 <td style={cell}>{row.imei}</td>
// //                 <td style={cell}>{row.mobileNo}</td>
// //                 <td style={cell}>
// //                   <Chip
// //                     label={row.fittings}
// //                     size='small'
// //                     sx={{
// //                       height: 18,
// //                       fontSize: '0.6rem',
// //                       fontWeight: 700,
// //                       bgcolor: `${COLORS.on}18`,
// //                       color: COLORS.on,
// //                       border: `1px solid ${COLORS.on}40`,
// //                       '& .MuiChip-label': { px: 0.8 }
// //                     }}
// //                   />
// //                 </td>
// //                 <td style={cell}>{row.physicalLoad.toFixed(3)}</td>
// //                 <td style={cell}>{row.actualLoad.toFixed(3)}</td>
// //                 <td style={cell}>{row.ampR.toFixed(1)}</td>
// //                 <td style={cell}>{row.ampY.toFixed(1)}</td>
// //                 <td style={cell}>{row.ampB.toFixed(1)}</td>
// //                 <td style={cell}>
// //                   <i
// //                     className='ri-shut-down-line'
// //                     style={{ fontSize: 16, color: row.power === 'ON' ? COLORS.on : COLORS.off }}
// //                   />
// //                 </td>
// //                 <td style={cell}>
// //                   <StatusChip label={row.doorStatus} positive={row.doorStatus === 'OPEN'} />
// //                 </td>
// //                 <td style={cell}>
// //                   <span style={{ fontSize: '0.68rem', color: COLORS.textMuted }}>{row.lat}</span>
// //                   <br />
// //                   <span style={{ fontSize: '0.68rem', color: COLORS.textMuted }}>{row.long}</span>
// //                 </td>
// //                 <td style={cell}>
// //                   <StatusChip label={row.output} positive={row.output === 'ON'} />
// //                 </td>
// //                 <td style={cell}>{row.ol}</td>
// //                 <td style={cell}>
// //                   <Chip
// //                     label={`${row.ul.toFixed(1)}%`}
// //                     size='small'
// //                     sx={{
// //                       height: 18,
// //                       fontSize: '0.6rem',
// //                       fontWeight: 700,
// //                       bgcolor: `${COLORS.map}18`,
// //                       color: COLORS.map,
// //                       border: `1px solid ${COLORS.map}40`,
// //                       '& .MuiChip-label': { px: 0.8 }
// //                     }}
// //                   />
// //                 </td>
// //                 <td style={cell}>{row.lightOn}</td>
// //                 <td style={cell}>{row.lightOff}</td>
// //                 <td style={cell}>{row.timeStamp}</td>
// //                 <td style={cell}>
// //                   <StatusChip label={row.networkStatus} positive={row.networkStatus === 'CONNECTED'} />
// //                   <br />
// //                   <span style={{ fontSize: '0.58rem', color: COLORS.textFaint }}>{row.lastSeen}</span>
// //                 </td>
// //                 <td style={cell}>
// //                   <Box sx={{ display: 'flex', gap: 0.2, mb: 0.5 }}>
// //                     <Tooltip title='Settings'>
// //                       <IconButton size='small' sx={{ color: COLORS.map }}>
// //                         <i className='ri-settings-3-line' style={{ fontSize: 14 }} />
// //                       </IconButton>
// //                     </Tooltip>
// //                     <Tooltip title='View'>
// //                       <IconButton size='small' sx={{ color: COLORS.accent }}>
// //                         <i className='ri-eye-line' style={{ fontSize: 14 }} />
// //                       </IconButton>
// //                     </Tooltip>
// //                     <Tooltip title='Edit'>
// //                       <IconButton size='small' sx={{ color: COLORS.accent }}>
// //                         <i className='ri-edit-2-line' style={{ fontSize: 14 }} />
// //                       </IconButton>
// //                     </Tooltip>
// //                     <Tooltip title='Delete'>
// //                       <IconButton
// //                         size='small'
// //                         sx={{ color: COLORS.off }}
// //                         onClick={() => setData(p => p.filter(r => r.id !== row.id))}
// //                       >
// //                         <i className='ri-delete-bin-line' style={{ fontSize: 14 }} />
// //                       </IconButton>
// //                     </Tooltip>
// //                   </Box>
// //                   <Tooltip title={row.isLightOff ? 'Turn light on' : 'Turn light off'}>
// //                     <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.4 }}>
// //                       <Switch
// //                         size='small'
// //                         checked={!row.isLightOff}
// //                         onChange={() => toggleLight(row.id)}
// //                         sx={{
// //                           '& .MuiSwitch-switchBase.Mui-checked': { color: COLORS.accent },
// //                           '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': { bgcolor: COLORS.accent }
// //                         }}
// //                       />
// //                       <Typography sx={{ fontSize: '0.62rem', color: COLORS.textMuted }}>
// //                         {row.isLightOff ? 'Light OFF' : 'Light ON'}
// //                       </Typography>
// //                     </Box>
// //                   </Tooltip>
// //                 </td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </Box>

// //       {/* Pagination footer */}
// //       <Box
// //         sx={{
// //           px: 1.5,
// //           py: 0.8,
// //           display: 'flex',
// //           alignItems: 'center',
// //           justifyContent: 'space-between',
// //           borderTop: `1px solid ${COLORS.border}`,
// //           bgcolor: COLORS.tableRowAlt
// //         }}
// //       >
// //         <Typography sx={{ fontSize: '0.7rem', color: COLORS.textMuted }}>
// //           {sorted.length === 0
// //             ? 'No entries'
// //             : `Showing ${start + 1}–${Math.min(start + showCount, sorted.length)} of ${sorted.length} entries`}
// //         </Typography>
// //         <Pagination
// //           count={pageCount}
// //           page={curPage}
// //           onChange={(_, v) => setPage(v)}
// //           size='small'
// //           sx={{ '& .MuiPaginationItem-root.Mui-selected': { bgcolor: COLORS.accent, color: '#fff' } }}
// //         />
// //       </Box>

// //       {/* Emergency dialog */}
// //       <Dialog open={Boolean(emergencyDialog)} onClose={() => setEmergencyDialog(null)}>
// //         <DialogTitle sx={{ fontSize: '1rem' }}>Confirm Emergency {emergencyDialog}</DialogTitle>
// //         <DialogContent>
// //           <Typography sx={{ fontSize: '0.85rem' }}>
// //             This will switch emergency mode {emergencyDialog} for all connected devices. Continue?
// //           </Typography>
// //         </DialogContent>
// //         <DialogActions>
// //           <Button size='small' onClick={() => setEmergencyDialog(null)}>
// //             Cancel
// //           </Button>
// //           <Button
// //             size='small'
// //             variant='contained'
// //             color={emergencyDialog === 'ON' ? 'success' : 'error'}
// //             onClick={() => {
// //               if (emergencyDialog) setEmergencyState(emergencyDialog)
// //               setEmergencyDialog(null)
// //             }}
// //           >
// //             Confirm
// //           </Button>
// //         </DialogActions>
// //       </Dialog>
// //     </PanelCard>
// //   )
// // }

// // export default Table

'use client'

import type { CSSProperties } from 'react'
import { useMemo, useState } from 'react'

import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import Switch from '@mui/material/Switch'
import Pagination from '@mui/material/Pagination'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Tooltip from '@mui/material/Tooltip'

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type ConnectivityType = 'CONNECTED' | 'DISCONNECTED'
type OnOffType = 'ON' | 'OFF'
type DoorStatusType = 'OPEN' | 'CLOSED'

type LiveRecordType = {
  id: number
  dataStamp: string
  fNo: string
  location: string
  ward: string
  zone: string
  imei: string
  mobileNo: string
  fittings: number
  physicalLoad: number
  actualLoad: number
  ampR: number
  ampY: number
  ampB: number
  power: OnOffType
  doorStatus: DoorStatusType
  lat: number
  long: number
  output: OnOffType
  ol: number
  ul: number
  lightOn: number
  lightOff: number
  timeStamp: string
  networkStatus: ConnectivityType
  lastSeen: string
  isLightOff: boolean
}

// ---------------------------------------------------------------------------
// Mock data — replace with API data, shape must stay the same
// ---------------------------------------------------------------------------

const rowsData: LiveRecordType[] = [
  {
    id: 1340,
    dataStamp: '18-06-2026 11:14',
    fNo: '1340',
    location: 'Usmanpur yes bi...',
    ward: '*6',
    zone: 'Zone 3',
    imei: '861305086415701',
    mobileNo: '5754230982666',
    fittings: 15,
    physicalLoad: 0.875,
    actualLoad: 0.0,
    ampR: 0.0,
    ampY: 0.0,
    ampB: 0.0,
    power: 'ON',
    doorStatus: 'CLOSED',
    lat: 27.876443,
    long: 78.061798,
    output: 'OFF',
    ol: 0,
    ul: 100.0,
    lightOn: 0,
    lightOff: 15,
    timeStamp: '18-06-2026 11:14',
    networkStatus: 'CONNECTED',
    lastSeen: '0 Minutes ago',
    isLightOff: true
  },
  {
    id: 1341,
    dataStamp: '18-06-2026 11:12',
    fNo: '1341',
    location: 'Civil Lines',
    ward: '*2',
    zone: 'Zone 1',
    imei: '861305086417123',
    mobileNo: '5754230982667',
    fittings: 22,
    physicalLoad: 1.42,
    actualLoad: 1.18,
    ampR: 1.9,
    ampY: 1.8,
    ampB: 1.7,
    power: 'ON',
    doorStatus: 'OPEN',
    lat: 27.880112,
    long: 78.05512,
    output: 'ON',
    ol: 0,
    ul: 96.4,
    lightOn: 22,
    lightOff: 0,
    timeStamp: '18-06-2026 11:12',
    networkStatus: 'CONNECTED',
    lastSeen: '2 Minutes ago',
    isLightOff: false
  },
  {
    id: 1342,
    dataStamp: '18-06-2026 10:58',
    fNo: '1342',
    location: 'Kotwali Road',
    ward: '*4',
    zone: 'Zone 2',
    imei: '861305086419988',
    mobileNo: '5754230982668',
    fittings: 10,
    physicalLoad: 0.0,
    actualLoad: 0.0,
    ampR: 0.0,
    ampY: 0.0,
    ampB: 0.0,
    power: 'OFF',
    doorStatus: 'CLOSED',
    lat: 27.871234,
    long: 78.06912,
    output: 'OFF',
    ol: 0,
    ul: 0.0,
    lightOn: 0,
    lightOff: 10,
    timeStamp: '18-06-2026 10:58',
    networkStatus: 'DISCONNECTED',
    lastSeen: '16 Minutes ago',
    isLightOff: true
  },
  {
    id: 1343,
    dataStamp: '18-06-2026 11:09',
    fNo: '1343',
    location: 'Subhash Park',
    ward: '*6',
    zone: 'Zone 3',
    imei: '861305086421345',
    mobileNo: '5754230982669',
    fittings: 18,
    physicalLoad: 0.93,
    actualLoad: 0.9,
    ampR: 1.2,
    ampY: 1.1,
    ampB: 1.2,
    power: 'ON',
    doorStatus: 'CLOSED',
    lat: 27.877981,
    long: 78.0599,
    output: 'ON',
    ol: 0,
    ul: 99.1,
    lightOn: 18,
    lightOff: 0,
    timeStamp: '18-06-2026 11:09',
    networkStatus: 'CONNECTED',
    lastSeen: '5 Minutes ago',
    isLightOff: false
  }
]

// ---------------------------------------------------------------------------
// Static config
// ---------------------------------------------------------------------------

const ACCENT = '#fb8c00'
const SHOW_OPTIONS = [10, 25, 50, 100]

const columns = [
  'Data Stamp',
  'F.No.',
  'Location',
  'Ward',
  'Zone',
  'IMEI',
  'Mobile No',
  'Fittings',
  'Physical Load',
  'Actual Load',
  'AMP R',
  'AMP Y',
  'AMP B',
  'Power',
  'Door Status',
  'GEO Location',
  'Output',
  'OL',
  'UL',
  'Light ON',
  'Light OFF',
  'Time Stamp',
  'Network Status',
  'Actions'
]

// Status colors stay fixed in both themes — same as everywhere else in this
// dashboard, these are semantic (on/off, connected/disconnected), not surface.
const StatusChip = ({ label, positive }: { label: string; positive: boolean }) => (
  <Chip
    label={label}
    size='small'
    sx={{
      fontSize: '0.62rem',
      height: 18,
      fontWeight: 600,
      color: '#fff',
      bgcolor: positive ? '#43a047' : '#e53935',
      '& .MuiChip-label': { px: 0.8 }
    }}
  />
)

const exportToCsv = (rows: LiveRecordType[]) => {
  const header = columns.filter(c => c !== 'Actions').join(',')

  const lines = rows.map(r =>
    [
      r.dataStamp,
      r.fNo,
      r.location,
      r.ward,
      r.zone,
      r.imei,
      r.mobileNo,
      r.fittings,
      r.physicalLoad,
      r.actualLoad,
      r.ampR,
      r.ampY,
      r.ampB,
      r.power,
      r.doorStatus,
      `${r.lat} ${r.long}`,
      r.output,
      r.ol,
      r.ul,
      r.lightOn,
      r.lightOff,
      r.timeStamp,
      r.networkStatus
    ].join(',')
  )

  const csv = [header, ...lines].join('\n')
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')

  link.href = url
  link.download = `live-records-${Date.now()}.csv`
  link.click()
  URL.revokeObjectURL(url)
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

const Table = () => {
  // The chrome around the table (Card, filter bar, pagination footer) is all
  // MUI Box/sx, so bare palette paths like 'background.paper' resolve on
  // their own. The <table> itself is raw HTML with inline `style`, though —
  // style can't resolve a palette path string, so the zebra rows + borders
  // in there need real resolved colors from useTheme().
  const theme = useTheme()

  const [data, setData] = useState<LiveRecordType[]>(rowsData)

  // filters
  const [search, setSearch] = useState('')
  const [connectivityFilter, setConnectivityFilter] = useState<'All' | ConnectivityType>('All')
  const [zoneFilter, setZoneFilter] = useState('All Zone')
  const [wardFilter, setWardFilter] = useState('All Wards')

  // pagination
  const [showCount, setShowCount] = useState(100)
  const [page, setPage] = useState(1)

  // emergency confirm dialog
  const [emergencyDialog, setEmergencyDialog] = useState<OnOffType | null>(null)
  const [emergencyState, setEmergencyState] = useState<OnOffType | null>(null)

  const zoneOptions = useMemo(() => ['All Zone', ...Array.from(new Set(data.map(r => r.zone)))], [data])
  const wardOptions = useMemo(() => ['All Wards', ...Array.from(new Set(data.map(r => r.ward)))], [data])

  const [sortColumn, setSortColumn] = useState<string | null>(null)
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc')

  const filteredRows = useMemo(() => {
    return data.filter(row => {
      if (connectivityFilter !== 'All' && row.networkStatus !== connectivityFilter) return false
      if (zoneFilter !== 'All Zone' && row.zone !== zoneFilter) return false
      if (wardFilter !== 'All Wards' && row.ward !== wardFilter) return false

      if (search.trim()) {
        const q = search.trim().toLowerCase()
        const haystack = [row.fNo, row.location, row.imei, row.mobileNo, row.zone, row.ward].join(' ').toLowerCase()

        if (!haystack.includes(q)) return false
      }

      return true
    })
  }, [data, connectivityFilter, zoneFilter, wardFilter, search])

  const pageCount = Math.max(1, Math.ceil(filteredRows.length / showCount))
  const currentPage = Math.min(page, pageCount)
  const startIdx = (currentPage - 1) * showCount

  const sortedRows = [...filteredRows].sort((a: any, b: any) => {
    if (!sortColumn) return 0

    const keyMap: Record<string, string> = {
      'Data Stamp': 'dataStamp',
      'F.No.': 'fNo',
      Location: 'location',
      Ward: 'ward',
      Zone: 'zone',
      IMEI: 'imei',
      'Mobile No': 'mobileNo',
      Fittings: 'fittings',
      'Physical Load': 'physicalLoad',
      'Actual Load': 'actualLoad',
      'AMP R': 'ampR'
    }

    const key = keyMap[sortColumn]
    if (!key) return 0

    const valA = a[key]
    const valB = b[key]

    if (valA < valB) return sortDirection === 'asc' ? -1 : 1
    if (valA > valB) return sortDirection === 'asc' ? 1 : -1
    return 0
  })

  const visibleRows = sortedRows.slice(startIdx, startIdx + showCount)

  const handleClearFilters = () => {
    setSearch('')
    setConnectivityFilter('All')
    setZoneFilter('All Zone')
    setWardFilter('All Wards')
    setPage(1)
  }

  const toggleLight = (id: number) => {
    setData(prev =>
      prev.map(row =>
        row.id === id
          ? {
              ...row,
              isLightOff: !row.isLightOff,
              lightOn: !row.isLightOff ? 0 : row.fittings,
              lightOff: !row.isLightOff ? row.fittings : 0
            }
          : row
      )
    )
  }

  const confirmEmergency = () => {
    if (emergencyDialog) setEmergencyState(emergencyDialog)
    setEmergencyDialog(null)
  }

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(prev => (prev === 'asc' ? 'desc' : 'asc'))
    } else {
      setSortColumn(column)
      setSortDirection('asc')
    }
  }

  // Resolved (not palette-path) colors, only for the raw <table> markup below.
  const rowBorderColor = theme.palette.divider
  const rowBaseBg = theme.palette.background.paper
  const rowAltBg = theme.palette.action.hover
  const cellTextColor = theme.palette.text.primary
  const mutedTextColor = theme.palette.text.secondary

  return (
    <Card sx={{ borderRadius: '4px', overflow: 'hidden' }}>
      {/* Header bar */}
      <Box
        sx={{
          px: 1.5,
          py: 0.8,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderBottom: 1,
          borderColor: 'divider',
          bgcolor: 'background.paper'
        }}
      >
        <Chip
          label='LIVE RECORDS'
          sx={{ fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.04em', borderRadius: '4px' }}
        />
      </Box>

      {/* Filter bar */}
      <Box
        sx={{
          px: 2,
          py: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          bgcolor: 'action.hover',
          borderBottom: 1,
          borderColor: 'divider',
          gap: 2,
          flexWrap: 'wrap'
        }}
      >
        {/* LEFT */}
        <Box sx={{ minWidth: 180, display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography sx={{ fontSize: '0.7rem', color: 'text.secondary' }}>Show</Typography>
          <FormControl size='small'>
            <Select
              value={showCount}
              onChange={e => {
                setShowCount(Number(e.target.value))
                setPage(1)
              }}
              sx={{ fontSize: '0.7rem', height: 30, minWidth: 64 }}
            >
              {SHOW_OPTIONS.map(opt => (
                <MenuItem key={opt} value={opt} sx={{ fontSize: '0.7rem' }}>
                  {opt}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        {/* CENTER */}
        <Box
          sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}
        >
          <Typography sx={{ fontSize: '0.7rem', color: 'text.secondary' }}>Filters</Typography>

          <FormControl size='small'>
            <Select
              value={connectivityFilter}
              onChange={e => {
                setConnectivityFilter(e.target.value as ConnectivityType)
                setPage(1)
              }}
              sx={{ fontSize: '0.7rem', height: 30, minWidth: 130 }}
            >
              <MenuItem value='All'>All</MenuItem>
              <MenuItem value='CONNECTED'>Connected</MenuItem>
              <MenuItem value='DISCONNECTED'>Disconnected</MenuItem>
            </Select>
          </FormControl>

          <FormControl size='small'>
            <Select
              value={zoneFilter}
              onChange={e => {
                setZoneFilter(e.target.value)
                setPage(1)
              }}
              sx={{ fontSize: '0.7rem', height: 30, minWidth: 110 }}
            >
              {zoneOptions.map(z => (
                <MenuItem key={z} value={z}>
                  {z}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl size='small'>
            <Select
              value={wardFilter}
              onChange={e => {
                setWardFilter(e.target.value)
                setPage(1)
              }}
              sx={{ fontSize: '0.7rem', height: 30, minWidth: 110 }}
            >
              {wardOptions.map(w => (
                <MenuItem key={w} value={w}>
                  {w}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        {/* RIGHT */}
        <Box sx={{ minWidth: 320, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 1 }}>
          <Typography sx={{ fontSize: '0.7rem', color: 'text.secondary' }}>Search</Typography>
          <TextField
            size='small'
            placeholder='Type to Search'
            value={search}
            onChange={e => {
              setSearch(e.target.value)
              setPage(1)
            }}
            sx={{ minWidth: 180, '& .MuiInputBase-input': { fontSize: '0.7rem', py: 0.6 } }}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <i className='ri-search-line' style={{ fontSize: 14 }} />
                </InputAdornment>
              )
            }}
          />
          <Button
            size='small'
            variant='outlined'
            color='inherit'
            sx={{ fontSize: '0.65rem' }}
            onClick={handleClearFilters}
          >
            Clear
          </Button>
        </Box>
      </Box>

      {/* Table — raw HTML, so the zebra/border/text colors below come from
          useTheme() rather than sx palette paths (see note above). */}
      <Box sx={{ overflowX: 'auto', bgcolor: 'background.paper' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.72rem' }}>
          <thead>
            {/* Fixed brand-blue header in both themes — same treatment as
                every other colored header bar in this dashboard. */}
            <tr style={{ background: '#1e88e5' }}>
              {columns.map(h => (
                <th
                  key={h}
                  style={{
                    padding: '6px 10px',
                    textAlign: 'left',
                    fontWeight: 600,
                    color: '#fff',
                    fontSize: '0.66rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.03em',
                    whiteSpace: 'nowrap',
                    cursor: 'pointer'
                  }}
                  onClick={() => handleSort(h)}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    {h}
                    <span
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        fontSize: '8px',
                        lineHeight: 0.8,
                        opacity: sortColumn === h ? 1 : 0.5
                      }}
                    >
                      <span style={{ color: sortColumn === h && sortDirection === 'asc' ? '#fff' : '#cfe3fb' }}>▲</span>
                      <span style={{ color: sortColumn === h && sortDirection === 'desc' ? '#fff' : '#cfe3fb' }}>
                        ▼
                      </span>
                    </span>
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {visibleRows.length === 0 && (
              <tr>
                <td colSpan={columns.length} style={{ padding: '20px', textAlign: 'center', color: mutedTextColor }}>
                  No matching records found.
                </td>
              </tr>
            )}

            {visibleRows.map((row, index) => (
              <tr
                key={row.id}
                style={{
                  borderBottom: `1px solid ${rowBorderColor}`,
                  background: index % 2 === 0 ? rowBaseBg : rowAltBg,
                  color: cellTextColor
                }}
              >
                <td style={cellStyle}>{row.dataStamp}</td>

                <td style={cellStyle}>
                  <Typography
                    component='a'
                    href='#'
                    sx={{ fontSize: '0.72rem', color: 'primary.main', textDecoration: 'none', fontWeight: 600 }}
                  >
                    {row.fNo}
                  </Typography>
                </td>

                <td style={cellStyle}>{row.location}</td>
                <td style={cellStyle}>{row.ward}</td>
                <td style={cellStyle}>{row.zone}</td>
                <td style={cellStyle}>{row.imei}</td>
                <td style={cellStyle}>{row.mobileNo}</td>

                <td style={cellStyle}>
                  <Chip
                    label={row.fittings}
                    size='small'
                    sx={{
                      fontSize: '0.62rem',
                      height: 18,
                      fontWeight: 600,
                      color: '#fff',
                      bgcolor: '#43a047',
                      '& .MuiChip-label': { px: 0.8 }
                    }}
                  />
                </td>

                <td style={cellStyle}>{row.physicalLoad.toFixed(3)}</td>
                <td style={cellStyle}>{row.actualLoad.toFixed(3)}</td>
                <td style={cellStyle}>{row.ampR.toFixed(1)}</td>
                <td style={cellStyle}>{row.ampY.toFixed(1)}</td>
                <td style={cellStyle}>{row.ampB.toFixed(1)}</td>

                <td style={cellStyle}>
                  <i
                    className='ri-shut-down-line'
                    style={{ fontSize: 16, color: row.power === 'ON' ? '#43a047' : '#e53935' }}
                  />
                </td>

                <td style={cellStyle}>
                  <StatusChip label={row.doorStatus} positive={row.doorStatus === 'OPEN'} />
                </td>

                <td style={cellStyle}>
                  <Box sx={{ lineHeight: 1.2 }}>
                    <Typography sx={{ fontSize: '0.68rem', color: 'text.secondary' }}>{row.lat}</Typography>
                    <Typography sx={{ fontSize: '0.68rem', color: 'text.secondary' }}>{row.long}</Typography>
                  </Box>
                </td>

                <td style={cellStyle}>
                  <StatusChip label={row.output} positive={row.output === 'ON'} />
                </td>

                <td style={cellStyle}>{row.ol}</td>

                <td style={cellStyle}>
                  <Chip
                    label={`${row.ul.toFixed(1)} %`}
                    size='small'
                    sx={{
                      fontSize: '0.62rem',
                      height: 18,
                      fontWeight: 600,
                      color: '#fff',
                      bgcolor: '#1e88e5',
                      '& .MuiChip-label': { px: 0.8 }
                    }}
                  />
                </td>

                <td style={cellStyle}>{row.lightOn}</td>
                <td style={cellStyle}>{row.lightOff}</td>
                <td style={cellStyle}>{row.timeStamp}</td>

                <td style={cellStyle}>
                  <Box>
                    <StatusChip label={row.networkStatus} positive={row.networkStatus === 'CONNECTED'} />
                    <Typography sx={{ fontSize: '0.6rem', color: 'text.secondary', mt: 0.2 }}>
                      {row.lastSeen}
                    </Typography>
                  </Box>
                </td>

                <td style={cellStyle}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.8 }}>
                    <Box sx={{ display: 'flex', gap: 0.3 }}>
                      <Tooltip title='Settings'>
                        <IconButton size='small' sx={{ color: '#1e88e5' }}>
                          <i className='ri-settings-3-line' style={{ fontSize: 14 }} />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title='View'>
                        <IconButton size='small' sx={{ color: ACCENT }}>
                          <i className='ri-eye-line' style={{ fontSize: 14 }} />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title='Edit'>
                        <IconButton size='small' sx={{ color: ACCENT }}>
                          <i className='ri-edit-2-line' style={{ fontSize: 14 }} />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title='Delete'>
                        <IconButton
                          size='small'
                          sx={{ color: '#e53935' }}
                          onClick={() => setData(prev => prev.filter(r => r.id !== row.id))}
                        >
                          <i className='ri-delete-bin-line' style={{ fontSize: 14 }} />
                        </IconButton>
                      </Tooltip>
                    </Box>

                    <Tooltip title={row.isLightOff ? 'Turn light on' : 'Turn light off'}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <Switch
                          size='small'
                          checked={!row.isLightOff}
                          onChange={() => toggleLight(row.id)}
                          sx={{
                            '& .MuiSwitch-switchBase.Mui-checked': { color: ACCENT },
                            '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': { bgcolor: ACCENT }
                          }}
                        />
                        <Typography sx={{ fontSize: '0.65rem', color: 'text.secondary' }}>
                          {row.isLightOff ? 'Light OFF' : 'Light ON'}
                        </Typography>
                      </Box>
                    </Tooltip>
                  </Box>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Box>

      {/* Pagination footer */}
      <Box
        sx={{
          px: 1.5,
          py: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderTop: 1,
          borderColor: 'divider',
          bgcolor: 'action.hover'
        }}
      >
        <Typography sx={{ fontSize: '0.7rem', color: 'text.secondary' }}>
          {filteredRows.length === 0
            ? 'Showing 0 entries'
            : `Showing ${startIdx + 1} to ${Math.min(startIdx + showCount, filteredRows.length)} of ${filteredRows.length} entries`}
        </Typography>

        <Pagination
          count={pageCount}
          page={currentPage}
          onChange={(_, value) => setPage(value)}
          size='small'
          sx={{ '& .MuiPaginationItem-root.Mui-selected': { bgcolor: ACCENT, color: '#fff' } }}
        />
      </Box>

      {/* Emergency confirmation dialog — MUI Dialog is theme-aware by default */}
      <Dialog open={Boolean(emergencyDialog)} onClose={() => setEmergencyDialog(null)}>
        <DialogTitle sx={{ fontSize: '1rem' }}>Confirm Emergency {emergencyDialog === 'ON' ? 'ON' : 'OFF'}</DialogTitle>
        <DialogContent>
          <Typography sx={{ fontSize: '0.85rem' }}>
            This will switch emergency mode {emergencyDialog === 'ON' ? 'ON' : 'OFF'} for all connected devices. Are you
            sure you want to continue?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button size='small' onClick={() => setEmergencyDialog(null)}>
            Cancel
          </Button>
          <Button
            size='small'
            variant='contained'
            color={emergencyDialog === 'ON' ? 'success' : 'error'}
            onClick={confirmEmergency}
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  )
}

const cellStyle: CSSProperties = {
  padding: '5px 10px',
  whiteSpace: 'nowrap'
}

export default Table
