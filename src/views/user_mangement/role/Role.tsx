
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import { Add, Delete, Edit, Search, Shield } from '@mui/icons-material'

import GlassPanel from '@/views/dashboard/ui/GlassPanel'
import { useDashboardTokens } from '@/views/dashboard/ui/tokens'
import StatusChip from '@/views/dashboard/ui/StatusChip'
import { buildEmptyPermissions, countEnabled, summarisePermissions } from '@/types/roles/permissionSchema'
import { useRoles } from './RoleContext'

const RoleList = () => {
  const t = useDashboardTokens()
  const router = useRouter()
  const { roles, deleteRole } = useRoles()
  const [search, setSearch] = useState('')

  const filtered = roles.filter(r => r.title.toLowerCase().includes(search.toLowerCase()))

  return (
    <Box sx={{ p: { xs: 2, md: 3 } }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3, flexWrap: 'wrap', gap: 2 }}>
        <Box>
          <Typography sx={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '1.35rem', color: t.text }}>
            Role Management
          </Typography>
          <Typography sx={{ fontSize: '0.8rem', color: t.textMuted, mt: 0.3 }}>{roles.length} roles configured</Typography>
        </Box>
        <Button
          variant='contained'
          startIcon={<Add />}
          onClick={() => router.push('/permission')}
          sx={{
            background: `linear-gradient(135deg, ${t.energy}, ${t.consumption})`,
            borderRadius: '12px', textTransform: 'none', fontWeight: 700, px: 2.5,
            boxShadow: `0 6px 18px ${t.energy}40`,
            transition: 'transform .2s ease, box-shadow .2s ease',
            '&:hover': { transform: 'translateY(-2px)', boxShadow: `0 10px 24px ${t.energy}55` },
          }}
        >
          Add Role
        </Button>
      </Box>

      <GlassPanel sx={{ p: { xs: 2, md: 2.5 } }}>
        <TextField
          size="small"
          placeholder="Search roles…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{
            mb: 2.5,
            maxWidth: 320,
            '& .MuiOutlinedInput-root': {
              borderRadius: '12px',
              background: t.surface,
              color: t.text,
              '& fieldset': { borderColor: t.border },
              '&:hover fieldset': { borderColor: t.borderStrong },
              '&.Mui-focused fieldset': { borderColor: t.energy },
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


        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.4 }}>
          {filtered.map((role, idx) => (
            <Box
              key={role.id}
              onClick={() => router.push(`/role/${role.id}`)}
              sx={{
                display: 'flex', alignItems: 'center', gap: 2, p: 2,
                background: t.surface, border: `1px solid ${t.border}`, borderRadius: '14px',
                cursor: 'pointer', transition: 'border-color .2s ease, transform .2s ease',
                animation: 'fadeSlideIn .4s ease both', animationDelay: `${idx * 0.05}s`,
                '@keyframes fadeSlideIn': { from: { opacity: 0, transform: 'translateY(6px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
                '&:hover': { borderColor: t.energy, transform: 'translateY(-2px)' },
              }}
            >
              <Box sx={{ width: 42, height: 42, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: `${t.energy}22`, color: t.energy, flexShrink: 0 }}>
                <Shield fontSize='small' />
              </Box>

              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Typography sx={{ fontSize: '13.5px', fontWeight: 700, color: t.text }}>{role.title}</Typography>
                  <StatusChip status={role.status} />
                </Box>
                <Typography sx={{ fontSize: '11.5px', color: t.textMuted, mt: 0.4 }}>{summarisePermissions(role.permissions)}</Typography>
              </Box>

              <Box sx={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', fontWeight: 700, color: t.connected, background: t.connectedDim, borderRadius: '8px', px: 1, py: 0.4, flexShrink: 0 }}>
                {countEnabled(role.permissions)} perms
              </Box>

              <Box sx={{ display: 'flex', gap: 0.5 }} onClick={e => e.stopPropagation()}>
                <IconButton size='small' onClick={() => router.push(`/role/${role.id}`)} sx={{ color: t.textMuted, '&:hover': { color: t.connected } }}>
                  <Edit fontSize='small' />
                </IconButton>
                <IconButton size='small' onClick={() => deleteRole(role.id)} sx={{ color: t.textMuted, '&:hover': { color: t.signalLoss } }}>
                  <Delete fontSize='small' />
                </IconButton>
              </Box>
            </Box>
          ))}

          {filtered.length === 0 && (
            <Box sx={{ py: 5, textAlign: 'center' }}>
              <Typography sx={{ fontSize: '13px', color: t.textMuted }}>No roles found</Typography>
            </Box>
          )}
        </Box>
      </GlassPanel>
    </Box>
  )
}

export default RoleList