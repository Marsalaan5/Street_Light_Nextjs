'use client'

import { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import { Add, Delete, Edit, Search } from '@mui/icons-material'

import GlassPanel from '@/views/dashboard/ui/GlassPanel'
import { useDashboardTokens } from '@/views/dashboard/ui/tokens'
import InitialsAvatar from '@/views/dashboard/ui/InitialAvatar'
import StatusChip from '@/views/dashboard/ui/StatusChip'
import UserFormDialog from './UserFormDialog'
import type { User, UserFormValues } from '@/types/users/types'

const SEED_USERS: User[] = [
  { id: 1, username: 'admin', email: 'admin@nlc.gov.in', phone: '9876543210', role: 'Admin', status: 'Enabled', statePerm: 'Full Access', ulbPerm: 'Full Access' },
  { id: 2, username: 'operator1', email: 'op1@nlc.gov.in', phone: '9876500001', role: 'Operator', status: 'Enabled', statePerm: 'Read Only', ulbPerm: 'Read Only' },
  { id: 3, username: 'viewer1', email: 'viewer@nlc.gov.in', phone: '9800000011', role: 'Viewer', status: 'Disabled', statePerm: 'No Access', ulbPerm: 'No Access' },
]

const UserList = () => {
  const t = useDashboardTokens()
  const [users, setUsers] = useState<User[]>(SEED_USERS)
  const [open, setOpen] = useState(false)
  const [editUser, setEditUser] = useState<User | null>(null)
  const [search, setSearch] = useState('')

  const filtered = users.filter(
    u =>
      u.username.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase()) ||
      u.role.toLowerCase().includes(search.toLowerCase()),
  )

  const openAdd = () => {
    setEditUser(null)
    setOpen(true)
  }

  const openEdit = (user: User) => {
    setEditUser(user)
    setOpen(true)
  }

  const handleSubmit = (values: UserFormValues & { password: string }) => {
    const { password, ...rest } = values
    if (editUser) {
      setUsers(prev => prev.map(u => (u.id === editUser.id ? { ...rest, id: editUser.id } : u)))
    } else {
      setUsers(prev => [...prev, { ...rest, id: Date.now() }])
    }
    setOpen(false)
  }

  const handleDelete = (id: number) => setUsers(prev => prev.filter(u => u.id !== id))

  return (
    <Box sx={{ p: { xs: 2, md: 3 } }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3, flexWrap: 'wrap', gap: 2 }}>
        <Box>
          <Typography sx={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '1.35rem', color: t.text }}>
            User Management
          </Typography>
          <Typography sx={{ fontSize: '0.8rem', color: t.textMuted, mt: 0.3 }}>
            {users.length} users · {users.filter(u => u.status === 'Enabled').length} active
          </Typography>
        </Box>
        <Button
          variant='contained'
          startIcon={<Add />}
          onClick={openAdd}
          sx={{
            background: `linear-gradient(135deg, ${t.energy}, ${t.consumption})`,
            borderRadius: '12px',
            textTransform: 'none',
            fontWeight: 700,
            px: 2.5,
            boxShadow: `0 6px 18px ${t.energy}40`,
            transition: 'transform .2s ease, box-shadow .2s ease',
            '&:hover': { transform: 'translateY(-2px)', boxShadow: `0 10px 24px ${t.energy}55` },
          }}
        >
          Add User
        </Button>
      </Box>

      <GlassPanel sx={{ p: { xs: 2, md: 2.5 } }}>
        <TextField
          size='small'
          placeholder='Search by username, email or role…'
          value={search}
          onChange={e => setSearch(e.target.value)}
          sx={{
            mb: 2.5,
            maxWidth: 360,
            '& .MuiOutlinedInput-root': {
              borderRadius: '12px',
              background: t.surface,
              color: t.text,
              '& fieldset': { borderColor: t.border },
              '&:hover fieldset': { borderColor: t.borderStrong },
              '&.Mui-focused fieldset': { borderColor: t.energy },
              transition: 'border-color .2s ease',
            },
          }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <Search sx={{ fontSize: 18, color: t.textMuted }} />
                </InputAdornment>
              ),
            },
          }}
        />

        <Box sx={{ overflowX: 'auto' }}>
          <Box sx={{ minWidth: 720 }}>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: '2.2fr 2fr 1.4fr 1.2fr 1fr 0.8fr',
                gap: 1,
                px: 1.5,
                py: 1,
                borderBottom: `1px solid ${t.border}`,
              }}
            >
              {['User', 'Email', 'Phone', 'Role', 'Status', 'Actions'].map(h => (
                <Typography key={h} sx={{ fontSize: '10.5px', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: t.textMuted }}>
                  {h}
                </Typography>
              ))}
            </Box>

            {filtered.map((user, idx) => (
              <Box
                key={user.id}
                sx={{
                  display: 'grid',
                  gridTemplateColumns: '2.2fr 2fr 1.4fr 1.2fr 1fr 0.8fr',
                  gap: 1,
                  alignItems: 'center',
                  px: 1.5,
                  py: 1.4,
                  borderBottom: `1px dashed ${t.border}`,
                  borderRadius: '10px',
                  transition: 'background .2s ease',
                  animation: 'fadeSlideIn .4s ease both',
                  animationDelay: `${idx * 0.04}s`,
                  '@keyframes fadeSlideIn': { from: { opacity: 0, transform: 'translateY(6px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
                  '&:hover': { background: t.surface },
                  '&:last-of-type': { borderBottom: 'none' },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
                  <InitialsAvatar name={user.username} />
                  <Typography sx={{ fontSize: '13px', fontWeight: 600, color: t.text }}>{user.username}</Typography>
                </Box>
                <Typography sx={{ fontSize: '12.5px', color: t.textMuted }}>{user.email}</Typography>
                <Typography sx={{ fontSize: '12.5px', color: t.textMuted, fontFamily: "'JetBrains Mono', monospace" }}>{user.phone}</Typography>
                <Typography sx={{ fontSize: '12.5px', color: t.text }}>{user.role}</Typography>
                <StatusChip status={user.status} />
                <Box sx={{ display: 'flex', gap: 0.5 }}>
                  <IconButton size='small' onClick={() => openEdit(user)} sx={{ color: t.textMuted, transition: 'color .2s ease', '&:hover': { color: t.connected } }}>
                    <Edit fontSize='small' />
                  </IconButton>
                  <IconButton size='small' onClick={() => handleDelete(user.id)} sx={{ color: t.textMuted, transition: 'color .2s ease', '&:hover': { color: t.signalLoss } }}>
                    <Delete fontSize='small' />
                  </IconButton>
                </Box>
              </Box>
            ))}

            {filtered.length === 0 && (
              <Box sx={{ py: 5, textAlign: 'center' }}>
                <Typography sx={{ fontSize: '13px', color: t.textMuted }}>No users found</Typography>
              </Box>
            )}
          </Box>
        </Box>
      </GlassPanel>

      <UserFormDialog open={open} editUser={editUser} onClose={() => setOpen(false)} onSubmit={handleSubmit} />
    </Box>
  )
}

export default UserList