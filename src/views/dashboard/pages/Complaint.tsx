// 'use client'

// import { useEffect, useState } from 'react'

// import Card from '@mui/material/Card'
// import CardContent from '@mui/material/CardContent'
// import Typography from '@mui/material/Typography'
// import TextField from '@mui/material/TextField'
// import MenuItem from '@mui/material/MenuItem'
// import Button from '@mui/material/Button'
// import Table from '@mui/material/Table'
// import TableHead from '@mui/material/TableHead'
// import TableBody from '@mui/material/TableBody'
// import TableRow from '@mui/material/TableRow'
// import TableCell from '@mui/material/TableCell'
// import TableContainer from '@mui/material/TableContainer'
// import Pagination from '@mui/material/Pagination'
// import Chip from '@mui/material/Chip'
// import CircularProgress from '@mui/material/CircularProgress'

// // import PermissionGate from '@/components/auth/PermissionGate'
// // import { getComplaints } from '@/services/complaintService'
// // import { exportToCsv } from '@/utils/exportCsv'
// import type { Complaint } from '@/types/complaint'

// const Complaint = () => {
//   const [rows, setRows] = useState<Complaint[]>([])
//   const [total, setTotal] = useState(0)
//   const [page, setPage] = useState(1)
//   const [perPage, setPerPage] = useState(10)
//   const [search, setSearch] = useState('')
//   const [from, setFrom] = useState('')
//   const [to, setTo] = useState('')
//   const [complaintType, setComplaintType] = useState('')
//   const [status, setStatus] = useState('')
//   const [ward, setWard] = useState('')
//   const [supervisor, setSupervisor] = useState('')
//   const [quickFilter, setQuickFilter] = useState<'not-closed' | 'today' | null>(null)
//   const [isLoading, setIsLoading] = useState(true)

//   // useEffect(() => {
//   //   setIsLoading(true)
//   //   getComplaints({
//   //     page,
//   //     perPage,
//   //     search,
//   //     from: from || undefined,
//   //     to: to || undefined,
//   //     complaintType: complaintType || undefined,
//   //     status: status || undefined,
//   //     ward: ward || undefined,
//   //     supervisor: supervisor || undefined,
//   //     notClosedOnly: quickFilter === 'not-closed',
//   //     todayOnly: quickFilter === 'today'
//   //   })
//   //     .then(res => {
//   //       setRows(res.rows)
//   //       setTotal(res.total)
//   //     })
//   //     .finally(() => setIsLoading(false))
//   // }, [page, perPage, search, from, to, complaintType, status, ward, supervisor, quickFilter])

//   const handleClear = () => {
//     setSearch('')
//     setComplaintType('')
//     setStatus('')
//     setWard('')
//     setSupervisor('')
//   }

//   // const handleDownloadCsv = () => exportToCsv('complaints.csv', rows)

//   const fromIdx = rows.length ? (page - 1) * perPage + 1 : 0
//   const toIdx = Math.min((page - 1) * perPage + rows.length, total)
//   const pageCount = Math.max(1, Math.ceil(total / perPage))

//   return (
//     <div>
//       <div
//         className='relative px-6 py-10 text-white'
//         // TODO: drop your real background photo at this path (or remove the style)
//         style={{ backgroundImage: "url('/images/dashboard/highway-night-bg.jpg')", backgroundSize: 'cover' }}
//       >
//         {/* <div className='flex items-center justify-between'>
//           <Typography variant='h5'>Manage Complaints (24 Hour Data)</Typography>
//           <PermissionGate module='Complaints' action='can_create'>
//             <Button variant='contained' color='warning'>
//               Add Complaint
//             </Button>
//           </PermissionGate>
//         </div> */}
//       </div>

//       <Card className='m-4'>
//         <CardContent className='flex flex-col gap-4'>
//           <div className='flex flex-wrap items-center gap-3'>
//             <Typography variant='body2'>From:</Typography>
//             <TextField
//               size='small'
//               type='date'
//               value={from}
//               onChange={e => {
//                 setFrom(e.target.value)
//                 setPage(1)
//               }}
//             />
//             <Typography variant='body2'>To:</Typography>
//             <TextField
//               size='small'
//               type='date'
//               value={to}
//               onChange={e => {
//                 setTo(e.target.value)
//                 setPage(1)
//               }}
//             />
//             <Button variant='outlined' onClick={() => setPage(1)}>
//               Show
//             </Button>

//             <div className='flex-1' />

//             <Button
//               variant={quickFilter === 'not-closed' ? 'contained' : 'outlined'}
//               color='warning'
//               onClick={() => {
//                 setQuickFilter(prev => (prev === 'not-closed' ? null : 'not-closed'))
//                 setPage(1)
//               }}
//             >
//               Not Close Comp.
//             </Button>
//             <Button
//               variant={quickFilter === 'today' ? 'contained' : 'outlined'}
//               color='inherit'
//               onClick={() => {
//                 setQuickFilter(prev => (prev === 'today' ? null : 'today'))
//                 setPage(1)
//               }}
//             >
//               Todays Comp.
//             </Button>
//             {/* <Button variant='contained' color='warning' onClick={handleDownloadCsv}>
//               Download CSV
//             </Button> */}
//           </div>

//           <div className='flex flex-wrap items-center justify-between gap-3'>
//             <div className='flex flex-wrap items-center gap-3'>
//               <Typography variant='body2'>Show</Typography>
//               <TextField
//                 select
//                 size='small'
//                 value={perPage}
//                 onChange={e => {
//                   setPerPage(Number(e.target.value))
//                   setPage(1)
//                 }}
//                 className='w-20'
//               >
//                 {[10, 25, 50].map(n => (
//                   <MenuItem key={n} value={n}>
//                     {n}
//                   </MenuItem>
//                 ))}
//               </TextField>
//               <Typography variant='body2'>entries</Typography>

//               <Typography variant='body2' className='ml-3'>
//                 Filters
//               </Typography>
//               <TextField
//                 select
//                 size='small'
//                 label='Complaint Type'
//                 value={complaintType}
//                 onChange={e => {
//                   setComplaintType(e.target.value)
//                   setPage(1)
//                 }}
//                 className='min-w-[140px]'
//               >
//                 <MenuItem value=''>Complaint Type</MenuItem>
//                 <MenuItem value='ccms'>CCMS</MenuItem>
//                 <MenuItem value='street-light'>Street Light</MenuItem>
//               </TextField>
//               <TextField
//                 select
//                 size='small'
//                 label='All Status'
//                 value={status}
//                 onChange={e => {
//                   setStatus(e.target.value)
//                   setPage(1)
//                 }}
//                 className='min-w-[120px]'
//               >
//                 <MenuItem value=''>All Status</MenuItem>
//                 <MenuItem value='Open'>Open</MenuItem>
//                 <MenuItem value='Closed'>Closed</MenuItem>
//               </TextField>
//               {/* TODO: populate from your wards endpoint */}
//               <TextField
//                 select
//                 size='small'
//                 label='All Wards'
//                 value={ward}
//                 onChange={e => {
//                   setWard(e.target.value)
//                   setPage(1)
//                 }}
//                 className='min-w-[120px]'
//               >
//                 <MenuItem value=''>All Wards</MenuItem>
//               </TextField>
//               {/* TODO: populate from your supervisors endpoint */}
//               <TextField
//                 select
//                 size='small'
//                 label='All Supervisor'
//                 value={supervisor}
//                 onChange={e => {
//                   setSupervisor(e.target.value)
//                   setPage(1)
//                 }}
//                 className='min-w-[150px]'
//               >
//                 <MenuItem value=''>All Supervisor</MenuItem>
//               </TextField>
//             </div>

//             <div className='flex items-center gap-2'>
//               <Typography variant='body2'>Filter</Typography>
//               <TextField
//                 size='small'
//                 placeholder='Type to Search'
//                 value={search}
//                 onChange={e => {
//                   setSearch(e.target.value)
//                   setPage(1)
//                 }}
//               />
//               <Button variant='outlined' onClick={handleClear}>
//                 Clear
//               </Button>
//             </div>
//           </div>

//           <TableContainer>
//             <Table size='small'>
//               <TableHead>
//                 <TableRow className='[&_th]:!bg-[#F4923A] [&_th]:!text-white'>
//                   <TableCell>ID</TableCell>
//                   <TableCell>FP No.</TableCell>
//                   <TableCell>Supervisor</TableCell>
//                   <TableCell>Location</TableCell>
//                   <TableCell>Ward</TableCell>
//                   <TableCell>Complaint Type</TableCell>
//                   <TableCell>Complaint Register Time</TableCell>
//                   <TableCell>Complain Type</TableCell>
//                   <TableCell>Complain Close Type</TableCell>
//                   <TableCell>Complain Close Time</TableCell>
//                   <TableCell>Duration</TableCell>
//                   <TableCell>Status</TableCell>
//                   <TableCell align='right'>Actions</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {isLoading && (
//                   <TableRow>
//                     <TableCell colSpan={13} align='center'>
//                       <CircularProgress size={24} />
//                     </TableCell>
//                   </TableRow>
//                 )}
//                 {!isLoading && rows.length === 0 && (
//                   <TableRow>
//                     <TableCell colSpan={13} align='center'>
//                       There are no records to show
//                     </TableCell>
//                   </TableRow>
//                 )}
//                 {!isLoading &&
//                   rows.map(row => (
//                     <TableRow key={row.id}>
//                       <TableCell>{row.id}</TableCell>
//                       <TableCell>{row.fp_no}</TableCell>
//                       <TableCell>{row.supervisor}</TableCell>
//                       <TableCell>{row.location}</TableCell>
//                       <TableCell>{row.ward}</TableCell>
//                       <TableCell>{row.complaint_type}</TableCell>
//                       <TableCell>{row.register_time}</TableCell>
//                       <TableCell>{row.complain_type}</TableCell>
//                       <TableCell>{row.close_type ?? '—'}</TableCell>
//                       <TableCell>{row.close_time ?? '—'}</TableCell>
//                       <TableCell>{row.duration ?? '—'}</TableCell>
//                       <TableCell>
//                         <Chip size='small' label={row.status} color={row.status === 'Closed' ? 'success' : 'warning'} />
//                       </TableCell>
//                       {/* <TableCell align='right'>
//                         <PermissionGate module='Complaints' action='can_edit'>
//                           <Button size='small'>View</Button>
//                         </PermissionGate>
//                       </TableCell> */}
//                     </TableRow>
//                   ))}
//               </TableBody>
//             </Table>
//           </TableContainer>

//           <div className='flex items-center justify-between'>
//             <Typography variant='body2'>
//               Showing {fromIdx} to {toIdx} of {total} entries
//             </Typography>
//             <Pagination count={pageCount} page={page} onChange={(_, p) => setPage(p)} color='primary' />
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   )
// }

// export default Complaint

'use client'

import { useState } from 'react'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import Pagination from '@mui/material/Pagination'
import Chip from '@mui/material/Chip'
import Divider from '@mui/material/Divider'

// import { getComplaints } from '@/services/complaintService'
// import { exportToCsv } from '@/utils/exportCsv'
import type { Complaint } from '@/types/complaint'

// ─── Sub-components ──────────────────────────────────────────────────────────

const PageBanner = () => (
  <div
    className='relative px-6 py-8 overflow-hidden'
    // style={{
    //   backgroundImage: "url('/images/pages/img1.jpeg')",
    //   backgroundSize: 'cover',
    //   backgroundPosition: 'center'
    // }}
  >
    <div className='absolute inset-0' />
    <div className='relative z-10 flex items-center justify-between'>
      <div>
        <Typography variant='h5' fontWeight={800} className='!text-white'>
          Complaint Management
        </Typography>
        <Typography variant='body2' className='!text-white/60 mt-1'>
          24-hour rolling data — all zones
        </Typography>
      </div>
      {/* Uncomment once PermissionGate is wired:
      <PermissionGate module='Complaints' action='can_create'>
        <Button variant='contained' color='warning' sx={{ fontWeight: 700 }}>
          + Add Complaint
        </Button>
      </PermissionGate>
      */}
    </div>
  </div>
)

interface FilterBarProps {
  from: string
  to: string
  perPage: number
  complaintType: string
  status: string
  ward: string
  supervisor: string
  search: string
  quickFilter: 'not-closed' | 'today' | null
  onFrom: (v: string) => void
  onTo: (v: string) => void
  onPerPage: (v: number) => void
  onComplaintType: (v: string) => void
  onStatus: (v: string) => void
  onWard: (v: string) => void
  onSupervisor: (v: string) => void
  onSearch: (v: string) => void
  onQuickFilter: (v: 'not-closed' | 'today' | null) => void
  onShow: () => void
  onClear: () => void
}

const FilterBar = ({
  from,
  to,
  perPage,
  complaintType,
  status,
  ward,
  supervisor,
  search,
  quickFilter,
  onFrom,
  onTo,
  onPerPage,
  onComplaintType,
  onStatus,
  onWard,
  onSupervisor,
  onSearch,
  onQuickFilter,
  onShow,
  onClear
}: FilterBarProps) => (
  <div className='flex flex-col gap-4'>
    {/* Row 1: date range + quick filters */}
    <div className='flex flex-wrap items-center gap-3'>
      <div className='flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2 border border-gray-200'>
        <Typography variant='caption' fontWeight={600} className='!text-gray-500 uppercase tracking-wide'>
          From
        </Typography>
        <TextField
          size='small'
          type='date'
          value={from}
          onChange={e => onFrom(e.target.value)}
          variant='standard'
          InputProps={{ disableUnderline: true }}
          sx={{ width: 130 }}
        />
        <Typography variant='caption' fontWeight={600} className='!text-gray-400'>
          →
        </Typography>
        <Typography variant='caption' fontWeight={600} className='!text-gray-500 uppercase tracking-wide'>
          To
        </Typography>
        <TextField
          size='small'
          type='date'
          value={to}
          onChange={e => onTo(e.target.value)}
          variant='standard'
          InputProps={{ disableUnderline: true }}
          sx={{ width: 130 }}
        />
        <Button
          variant='contained'
          size='small'
          onClick={onShow}
          sx={{
            background: 'linear-gradient(135deg, #F4923A, #e07c28)',
            boxShadow: 'none',
            fontWeight: 700,
            px: 2
          }}
        >
          Apply
        </Button>
      </div>

      <div className='flex-1' />

      <Button
        variant={quickFilter === 'not-closed' ? 'contained' : 'outlined'}
        color='warning'
        size='small'
        onClick={() => onQuickFilter(quickFilter === 'not-closed' ? null : 'not-closed')}
        sx={{ fontWeight: 600, borderRadius: 2 }}
      >
        ⚠ Not Closed
      </Button>
      <Button
        variant={quickFilter === 'today' ? 'contained' : 'outlined'}
        color='inherit'
        size='small'
        onClick={() => onQuickFilter(quickFilter === 'today' ? null : 'today')}
        sx={{ fontWeight: 600, borderRadius: 2 }}
      >
        📅 Today
      </Button>
      {/* <Button variant='outlined' size='small' onClick={handleDownloadCsv} sx={{ fontWeight: 600 }}>
        ↓ CSV
      </Button> */}
    </div>

    <Divider />

    {/* Row 2: per-page + dropdowns + search */}
    <div className='flex flex-wrap items-center justify-between gap-3'>
      <div className='flex flex-wrap items-center gap-2'>
        <div className='flex items-center gap-2'>
          <Typography variant='body2' className='!text-gray-500'>
            Show
          </Typography>
          <TextField
            select
            size='small'
            value={perPage}
            onChange={e => onPerPage(Number(e.target.value))}
            sx={{ width: 72 }}
          >
            {[10, 25, 50].map(n => (
              <MenuItem key={n} value={n}>
                {n}
              </MenuItem>
            ))}
          </TextField>
          <Typography variant='body2' className='!text-gray-500'>
            entries
          </Typography>
        </div>

        <TextField
          select
          size='small'
          label='Type'
          value={complaintType}
          onChange={e => onComplaintType(e.target.value)}
          sx={{ minWidth: 130 }}
        >
          <MenuItem value=''>All Types</MenuItem>
          <MenuItem value='ccms'>CCMS</MenuItem>
          <MenuItem value='street-light'>Street Light</MenuItem>
        </TextField>

        <TextField
          select
          size='small'
          label='Status'
          value={status}
          onChange={e => onStatus(e.target.value)}
          sx={{ minWidth: 120 }}
        >
          <MenuItem value=''>All Status</MenuItem>
          <MenuItem value='Open'>Open</MenuItem>
          <MenuItem value='Closed'>Closed</MenuItem>
        </TextField>

        {/* TODO: populate from wards endpoint */}
        <TextField
          select
          size='small'
          label='Ward'
          value={ward}
          onChange={e => onWard(e.target.value)}
          sx={{ minWidth: 120 }}
        >
          <MenuItem value=''>All Wards</MenuItem>
        </TextField>

        {/* TODO: populate from supervisors endpoint */}
        <TextField
          select
          size='small'
          label='Supervisor'
          value={supervisor}
          onChange={e => onSupervisor(e.target.value)}
          sx={{ minWidth: 140 }}
        >
          <MenuItem value=''>All Supervisors</MenuItem>
        </TextField>
      </div>

      <div className='flex items-center gap-2'>
        <TextField
          size='small'
          placeholder='Search complaints…'
          value={search}
          onChange={e => onSearch(e.target.value)}
          sx={{ minWidth: 200 }}
          InputProps={{
            startAdornment: <span className='mr-1 text-gray-400'>🔍</span>
          }}
        />
        <Button variant='outlined' size='small' onClick={onClear} sx={{ fontWeight: 600 }}>
          Clear
        </Button>
      </div>
    </div>
  </div>
)

const ComplaintTableHead = () => (
  <TableHead>
    <TableRow
      sx={{
        '& th': {
          background: 'linear-gradient(135deg, #F4923A 0%, #e07c28 100%)',
          color: '#fff',
          fontWeight: 700,
          fontSize: '0.78rem',
          letterSpacing: '0.03em',
          whiteSpace: 'nowrap',
          py: 1.5
        }
      }}
    >
      <TableCell>ID</TableCell>
      <TableCell>FP No.</TableCell>
      <TableCell>Supervisor</TableCell>
      <TableCell>Location</TableCell>
      <TableCell>Ward</TableCell>
      <TableCell>Type</TableCell>
      <TableCell>Registered</TableCell>
      <TableCell>Complain Type</TableCell>
      <TableCell>Close Type</TableCell>
      <TableCell>Closed At</TableCell>
      <TableCell>Duration</TableCell>
      <TableCell>Status</TableCell>
      <TableCell align='right'>Actions</TableCell>
    </TableRow>
  </TableHead>
)

const EmptyRow = ({ colSpan, message }: { colSpan: number; message: string }) => (
  <TableRow>
    <TableCell colSpan={colSpan} align='center' sx={{ py: 6, color: '#9ca3af' }}>
      <div className='flex flex-col items-center gap-2'>
        <span className='text-4xl'>📭</span>
        <Typography variant='body2'>{message}</Typography>
      </div>
    </TableCell>
  </TableRow>
)

// ─── Main Component ──────────────────────────────────────────────────────────

const Complaint = () => {
  const [rows] = useState<Complaint[]>([])
  const [total] = useState(0)
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(10)
  const [search, setSearch] = useState('')
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [complaintType, setComplaintType] = useState('')
  const [status, setStatus] = useState('')
  const [ward, setWard] = useState('')
  const [supervisor, setSupervisor] = useState('')
  const [quickFilter, setQuickFilter] = useState<'not-closed' | 'today' | null>(null)

  // ✅ FIX: don't block render when useEffect is commented out
  const isLoading = false

  const handleClear = () => {
    setSearch('')
    setComplaintType('')
    setStatus('')
    setWard('')
    setSupervisor('')
  }

  const fromIdx = rows.length ? (page - 1) * perPage + 1 : 0
  const toIdx = Math.min((page - 1) * perPage + rows.length, total)
  const pageCount = Math.max(1, Math.ceil(total / perPage))

  const resetPage = () => setPage(1)

  return (
    <div
      className='min-h-screen'
      style={{
        backgroundImage: "url('/images/pages/img1.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <PageBanner />

      <div className='p-4 md:p-6'>
        <Card elevation={2} sx={{ borderRadius: 3 }}>
          <CardContent className='flex flex-col gap-5'>
            <FilterBar
              from={from}
              to={to}
              perPage={perPage}
              complaintType={complaintType}
              status={status}
              ward={ward}
              supervisor={supervisor}
              search={search}
              quickFilter={quickFilter}
              onFrom={v => {
                setFrom(v)
                resetPage()
              }}
              onTo={v => {
                setTo(v)
                resetPage()
              }}
              onPerPage={v => {
                setPerPage(v)
                resetPage()
              }}
              onComplaintType={v => {
                setComplaintType(v)
                resetPage()
              }}
              onStatus={v => {
                setStatus(v)
                resetPage()
              }}
              onWard={v => {
                setWard(v)
                resetPage()
              }}
              onSupervisor={v => {
                setSupervisor(v)
                resetPage()
              }}
              onSearch={v => {
                setSearch(v)
                resetPage()
              }}
              onQuickFilter={v => {
                setQuickFilter(v)
                resetPage()
              }}
              onShow={resetPage}
              onClear={handleClear}
            />

            <TableContainer sx={{ borderRadius: 2, border: '1px solid', borderColor: 'divider' }}>
              <Table size='small'>
                <ComplaintTableHead />
                <TableBody>
                  {isLoading && <EmptyRow colSpan={13} message='Loading complaints…' />}
                  {!isLoading && rows.length === 0 && (
                    <EmptyRow colSpan={13} message='No complaints found. Connect your API or adjust filters.' />
                  )}
                  {!isLoading &&
                    rows.map((row, i) => (
                      <TableRow
                        key={row.id}
                        sx={{
                          backgroundColor: i % 2 === 0 ? 'white' : '#fafafa',
                          '&:hover': { backgroundColor: '#fff7f0' },
                          transition: 'background-color 0.15s'
                        }}
                      >
                        <TableCell sx={{ fontWeight: 600, color: '#F4923A' }}>#{row.id}</TableCell>
                        <TableCell>{row.fp_no}</TableCell>
                        <TableCell>{row.supervisor}</TableCell>
                        <TableCell>{row.location}</TableCell>
                        <TableCell>{row.ward}</TableCell>
                        <TableCell>{row.complaint_type}</TableCell>
                        <TableCell sx={{ fontSize: '0.75rem', color: '#6b7280' }}>{row.register_time}</TableCell>
                        <TableCell>{row.complain_type}</TableCell>
                        <TableCell>{row.close_type ?? '—'}</TableCell>
                        <TableCell sx={{ fontSize: '0.75rem', color: '#6b7280' }}>{row.close_time ?? '—'}</TableCell>
                        <TableCell>{row.duration ?? '—'}</TableCell>
                        <TableCell>
                          <Chip
                            size='small'
                            label={row.status}
                            color={row.status === 'Closed' ? 'success' : 'warning'}
                            sx={{ fontWeight: 700 }}
                          />
                        </TableCell>
                        <TableCell align='right'>
                          {/* <PermissionGate module='Complaints' action='can_edit'>
                          <Button size='small' sx={{ fontWeight: 600 }}>View</Button>
                        </PermissionGate> */}
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>

            <div className='flex items-center justify-between flex-wrap gap-2'>
              <Typography variant='body2' className='!text-gray-500'>
                Showing <strong>{fromIdx}</strong>–<strong>{toIdx}</strong> of <strong>{total}</strong> entries
              </Typography>
              <Pagination
                count={pageCount}
                page={page}
                onChange={(_, p) => setPage(p)}
                color='primary'
                shape='rounded'
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Complaint
