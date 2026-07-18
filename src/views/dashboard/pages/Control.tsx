'use client'

import { useEffect, useState } from 'react'

import Link from 'next/link'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import Pagination from '@mui/material/Pagination'
import CircularProgress from '@mui/material/CircularProgress'
import Divider from '@mui/material/Divider'
import Chip from '@mui/material/Chip'

import type { ControlDevice } from '@/types/device'

// ─── Mock Data ────────────────────────────────────────────────────────────────

const MOCK_ROWS: ControlDevice[] = [
  {
    id: 1,
    imei: '123456789012345',
    fp_no: 'FP001',
    location: 'Aligarh',
    device_group: 'Ward',
    supervisor: 'Rashid',
    ward: 'Ward 1',
    r_phase_on: '18:00',
    r_phase_off: '06:00',
    y_phase_on: '18:00',
    y_phase_off: '06:00',
    b_phase_on: '18:00',
    b_phase_off: '06:00'
  },
  {
    id: 2,
    imei: '987654321098765',
    fp_no: 'FP002',
    location: 'Noida',
    device_group: 'Ward',
    supervisor: 'Rahul',
    ward: 'Ward 2',
    r_phase_on: '19:00',
    r_phase_off: '05:30',
    y_phase_on: '19:00',
    y_phase_off: '05:30',
    b_phase_on: '19:00',
    b_phase_off: '05:30'
  }
]

// ─── Sub-components ──────────────────────────────────────────────────────────

const ConnectedBadge = ({ count }: { count: number }) => (
  <Chip
    label={`${count} Connected`}
    size='small'
    sx={{
      background: 'linear-gradient(135deg, #3CB37122, #3CB37144)',
      color: '#3CB371',
      border: '1px solid #3CB37155',
      fontWeight: 700,
      fontSize: '0.8rem'
    }}
  />
)

const PhaseCell = ({ on, off }: { on: string; off: string }) => (
  <div className='flex flex-col gap-0.5 text-xs'>
    <span className='text-green-600 font-semibold'>▲ {on}</span>
    <span className='text-red-500 font-semibold'>▼ {off}</span>
  </div>
)

interface RtcPanelProps {
  uniqueId: string
  rtcTimestamp: string
  isSubmitting: boolean
  onUniqueId: (v: string) => void
  onTimestamp: (v: string) => void
  onSubmit: () => void
}

const RtcPanel = ({ uniqueId, rtcTimestamp, isSubmitting, onUniqueId, onTimestamp, onSubmit }: RtcPanelProps) => (
  <Card elevation={2} sx={{ borderRadius: 3 }}>
    <CardContent>
      <div className='flex items-center gap-3 mb-4'>
        <div
          className='w-9 h-9 rounded-lg flex items-center justify-center text-lg'
          style={{ background: 'linear-gradient(135deg, #F4923A22, #F4923A44)' }}
        >
          🕐
        </div>
        <div>
          <Typography variant='subtitle1' fontWeight={700}>
            RTC Command
          </Typography>
          <Typography variant='caption' className='!text-gray-500'>
            Send real-time clock sync to a device
          </Typography>
        </div>
      </div>

      <Divider className='!mb-4' />

      <div className='flex flex-wrap items-end gap-3'>
        <TextField
          size='small'
          label='Device Unique ID'
          placeholder='Enter IMEI or device ID'
          value={uniqueId}
          onChange={e => onUniqueId(e.target.value)}
          sx={{ flex: '1 1 200px' }}
        />
        <TextField
          size='small'
          label='Timestamp'
          placeholder='e.g. 2024-06-19T18:00:00'
          value={rtcTimestamp}
          onChange={e => onTimestamp(e.target.value)}
          sx={{ flex: '1 1 220px' }}
        />
        <Button
          variant='contained'
          disabled={isSubmitting || !uniqueId || !rtcTimestamp}
          onClick={onSubmit}
          sx={{
            background: 'linear-gradient(135deg, #F4923A, #e07c28)',
            fontWeight: 700,
            minWidth: 120,
            boxShadow: 'none',
            '&:hover': { boxShadow: '0 4px 12px #F4923A44' }
          }}
        >
          {isSubmitting ? <CircularProgress size={20} color='inherit' /> : 'Send RTC'}
        </Button>
      </div>
    </CardContent>
  </Card>
)

// ─── Main Component ──────────────────────────────────────────────────────────

const Control = () => {
  const [rows, setRows] = useState<ControlDevice[]>([])
  const [total, setTotal] = useState(0)
  const [connected, setConnected] = useState(0)
  const [groups, setGroups] = useState<string[]>([])
  const [supervisors, setSupervisors] = useState<string[]>([])

  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(10)
  const [search, setSearch] = useState('')
  const [group, setGroup] = useState('')
  const [supervisor, setSupervisor] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const [uniqueId, setUniqueId] = useState('')
  const [rtcTimestamp, setRtcTimestamp] = useState('')
  const [isSubmittingRtc, setIsSubmittingRtc] = useState(false)

  useEffect(() => {
    setGroups(['Not Assigned', 'Ward'])
    setSupervisors(['Rashid', 'Faheem', 'Rahul'])
  }, [])

  useEffect(() => {
    setIsLoading(true)
    let filtered = [...MOCK_ROWS]
    if (search) filtered = filtered.filter(r => r.imei.toLowerCase().includes(search.toLowerCase()))
    if (group) filtered = filtered.filter(r => r.device_group === group)
    if (supervisor) filtered = filtered.filter(r => r.supervisor === supervisor)

    const paginated = filtered.slice((page - 1) * perPage, page * perPage)
    setRows(paginated)
    setTotal(filtered.length)
    setConnected(filtered.length)
    setIsLoading(false)
  }, [page, perPage, search, group, supervisor])

  const handleRtcSubmit = () => {
    if (!uniqueId || !rtcTimestamp) return
    setIsSubmittingRtc(true)
    setTimeout(() => {
      console.log('RTC Command Submitted:', { uniqueId, rtcTimestamp })
      setIsSubmittingRtc(false)
    }, 1000)
  }

  const fromIdx = rows.length ? (page - 1) * perPage + 1 : 0
  const toIdx = Math.min((page - 1) * perPage + rows.length, total)
  const pageCount = Math.max(1, Math.ceil(total / perPage))

  return (
    <div
      className='min-h-screen bg-gray-50 p-4 md:p-6 flex flex-col gap-5'
      style={{
        backgroundImage: "url('/images/pages/img1.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Page header */}
      <div className='flex items-center justify-between'>
        <div>
          <Typography variant='h5' fontWeight={800} className='!text-white'>
            Control Management
          </Typography>
          <Typography variant='body2' className='!text-white/60 mt-1'>
            Manage device schedules and issue RTC commands
          </Typography>
        </div>
        <ConnectedBadge count={connected} />
      </div>

      {/* Device table card */}
      <Card elevation={2} sx={{ borderRadius: 3 }}>
        <CardContent className='flex flex-col gap-4'>
          {/* Filters */}
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
                  onChange={e => {
                    setPerPage(Number(e.target.value))
                    setPage(1)
                  }}
                  sx={{ width: 72 }}
                >
                  {[10, 25, 50, 100].map(n => (
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
                label='Group'
                value={group}
                onChange={e => {
                  setGroup(e.target.value)
                  setPage(1)
                }}
                sx={{ minWidth: 130 }}
              >
                <MenuItem value=''>All Groups</MenuItem>
                {groups.map(g => (
                  <MenuItem key={g} value={g}>
                    {g}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                select
                size='small'
                label='Supervisor'
                value={supervisor}
                onChange={e => {
                  setSupervisor(e.target.value)
                  setPage(1)
                }}
                sx={{ minWidth: 140 }}
              >
                <MenuItem value=''>All Supervisors</MenuItem>
                {supervisors.map(s => (
                  <MenuItem key={s} value={s}>
                    {s}
                  </MenuItem>
                ))}
              </TextField>
            </div>

            <div className='flex items-center gap-2'>
              <TextField
                size='small'
                placeholder='Search by IMEI…'
                value={search}
                onChange={e => {
                  setSearch(e.target.value)
                  setPage(1)
                }}
                sx={{ minWidth: 200 }}
                InputProps={{ startAdornment: <span className='mr-1 text-gray-400'>🔍</span> }}
              />
              <Button
                variant='outlined'
                size='small'
                onClick={() => {
                  setSearch('')
                  setGroup('')
                  setSupervisor('')
                }}
                sx={{ fontWeight: 600 }}
              >
                Clear
              </Button>
            </div>
          </div>

          <Divider />

          {/* Table */}
          <TableContainer sx={{ borderRadius: 2, border: '1px solid', borderColor: 'divider' }}>
            <Table size='small'>
              <TableHead>
                <TableRow
                  sx={{
                    '& th': {
                      background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
                      color: '#e2e8f0',
                      fontWeight: 700,
                      fontSize: '0.75rem',
                      letterSpacing: '0.04em',
                      whiteSpace: 'nowrap',
                      py: 1.5
                    }
                  }}
                >
                  <TableCell>IMEI</TableCell>
                  <TableCell>FP No.</TableCell>
                  <TableCell>Location</TableCell>
                  <TableCell>Group</TableCell>
                  <TableCell>Supervisor</TableCell>
                  <TableCell>Ward</TableCell>
                  <TableCell align='center'>R Phase</TableCell>
                  <TableCell align='center'>Y Phase</TableCell>
                  <TableCell align='center'>B Phase</TableCell>
                  <TableCell align='right'>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {isLoading && (
                  <TableRow>
                    <TableCell colSpan={10} align='center' sx={{ py: 5 }}>
                      <CircularProgress size={28} sx={{ color: '#F4923A' }} />
                    </TableCell>
                  </TableRow>
                )}
                {!isLoading && rows.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={10} align='center' sx={{ py: 6, color: '#9ca3af' }}>
                      <div className='flex flex-col items-center gap-2'>
                        <span className='text-4xl'>📡</span>
                        <Typography variant='body2'>No devices match the current filters</Typography>
                      </div>
                    </TableCell>
                  </TableRow>
                )}
                {!isLoading &&
                  rows.map((row, i) => (
                    <TableRow
                      key={row.id}
                      sx={{
                        backgroundColor: i % 2 === 0 ? 'white' : '#f8fafc',
                        '&:hover': { backgroundColor: '#fff7f0' },
                        transition: 'background-color 0.15s'
                      }}
                    >
                      <TableCell>
                        <Typography
                          component={Link}
                          href={`/control/${row.id}`}
                          sx={{
                            color: '#F4923A',
                            fontWeight: 700,
                            fontSize: '0.82rem',
                            textDecoration: 'none',
                            '&:hover': { textDecoration: 'underline' }
                          }}
                        >
                          {row.imei}
                        </Typography>
                      </TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>{row.fp_no}</TableCell>
                      <TableCell>{row.location}</TableCell>
                      <TableCell>
                        <Chip label={row.device_group} size='small' variant='outlined' sx={{ fontSize: '0.72rem' }} />
                      </TableCell>
                      <TableCell>{row.supervisor}</TableCell>
                      <TableCell>{row.ward}</TableCell>
                      <TableCell align='center'>
                        <PhaseCell on={row.r_phase_on} off={row.r_phase_off} />
                      </TableCell>
                      <TableCell align='center'>
                        <PhaseCell on={row.y_phase_on} off={row.y_phase_off} />
                      </TableCell>
                      <TableCell align='center'>
                        <PhaseCell on={row.b_phase_on} off={row.b_phase_off} />
                      </TableCell>
                      <TableCell align='right'>
                        <IconButton size='small' sx={{ color: '#6366f1', '&:hover': { backgroundColor: '#6366f115' } }}>
                          <i className='ri-pencil-line' />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Pagination */}
          <div className='flex items-center justify-between flex-wrap gap-2'>
            <Typography variant='body2' className='!text-gray-500'>
              Showing <strong>{fromIdx}</strong>–<strong>{toIdx}</strong> of <strong>{total}</strong> entries
            </Typography>
            <Pagination count={pageCount} page={page} onChange={(_, p) => setPage(p)} color='primary' shape='rounded' />
          </div>
        </CardContent>
      </Card>

      {/* RTC Panel */}
      <RtcPanel
        uniqueId={uniqueId}
        rtcTimestamp={rtcTimestamp}
        isSubmitting={isSubmittingRtc}
        onUniqueId={setUniqueId}
        onTimestamp={setRtcTimestamp}
        onSubmit={handleRtcSubmit}
      />
    </div>
  )
}

export default Control
