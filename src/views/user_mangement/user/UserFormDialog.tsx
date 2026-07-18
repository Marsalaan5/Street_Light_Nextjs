
'use client'

import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Grow from '@mui/material/Grow'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import FormControl from '@mui/material/FormControl'
import InputAdornment from '@mui/material/InputAdornment'
import { Badge, Close, Email, Lock, Person, Phone, Security } from '@mui/icons-material'
import type { TransitionProps } from '@mui/material/transitions'

import { useDashboardTokens } from '@/views/dashboard/ui/tokens'
import { defaultUser, ROLES, PERM_OPTIONS } from '@/types/users/types'
import type { User, UserFormValues } from '@/types/users/types'

const GrowTransition = React.forwardRef(function GrowTransition(
    props: TransitionProps & { children: React.ReactElement },
    ref: React.Ref<unknown>,
) {
    return <Grow ref={ref} {...props} timeout={280} />
})

interface UserFormDialogProps {
    open: boolean
    editUser: User | null
    onClose: () => void
    onSubmit: (values: UserFormValues & { password: string }) => void
}

const UserFormDialog = ({ open, editUser, onClose, onSubmit }: UserFormDialogProps) => {
    const t = useDashboardTokens()
    const [form, setForm] = useState<UserFormValues>(defaultUser)
    const [password, setPassword] = useState('')

    useEffect(() => {
        if (open) {
            setForm(editUser ? { ...editUser } : defaultUser)
            setPassword('')
        }
    }, [open, editUser])

    const set = (key: keyof UserFormValues, value: string) => setForm(prev => ({ ...prev, [key]: value }))

    const handleSubmit = () => {
        if (!form.username.trim()) return
        onSubmit({ ...form, password })
    }

    const fieldSx = {
        '& .MuiOutlinedInput-root': {
            borderRadius: '10px',
            background: t.surface,
            color: t.text,
            transition: 'border-color .2s ease, box-shadow .2s ease',
            '& fieldset': { borderColor: t.border },
            '&:hover fieldset': { borderColor: t.borderStrong },
            '&.Mui-focused fieldset': { borderColor: t.energy, borderWidth: '1.5px' },
            '&.Mui-focused': { boxShadow: `0 0 0 3px ${t.energy}22` },
        },
        '& .MuiInputBase-input': { fontSize: 13, color: t.text },
        '& .MuiInputLabel-root': { color: t.textMuted },
    }

    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="md"
            fullWidth
            slots={{
                transition: GrowTransition,
            }}
            slotProps={{
                paper: {
                    sx: {
                        background: t.surfaceSolid,
                        backgroundImage: 'none',
                        border: `1px solid ${t.border}`,
                        borderRadius: '20px',
                        overflow: 'hidden',
                    },
                },
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    px: 3,
                    py: 2.2,
                    background: `linear-gradient(120deg, ${t.energy}22, transparent 70%)`,
                    borderBottom: `1px solid ${t.border}`,
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.4 }}>
                    <Box sx={{ width: 38, height: 38, borderRadius: '11px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: `${t.energy}22`, color: t.energy }}>
                        <Person fontSize='small' />
                    </Box>
                    <Typography sx={{ fontWeight: 700, fontSize: '1.05rem', color: t.text, fontFamily: "'Space Grotesk', sans-serif" }}>
                        {editUser ? 'Edit User' : 'Add User'}
                    </Typography>
                </Box>
                <IconButton onClick={onClose} size='small' sx={{ color: t.textMuted }}>
                    <Close fontSize='small' />
                </IconButton>
            </Box>

            <DialogContent sx={{ pt: 3, px: 3 }}>
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <Typography sx={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: t.textMuted }}>
                            Account details
                        </Typography>

                        <TextField size='small' label='Username' value={form.username} onChange={e => set('username', e.target.value)} sx={fieldSx}
                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Person fontSize="small" sx={{ color: t.textMuted }} />
                                        </InputAdornment>
                                    ),
                                },
                            }}
                        />
                        <TextField size='small' label='Email' type='email' value={form.email} onChange={e => set('email', e.target.value)} sx={fieldSx}
                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Person fontSize="small" sx={{ color: t.textMuted }} />
                                        </InputAdornment>
                                    ),
                                },
                            }}
                        />
                        <TextField size='small' label='Phone' value={form.phone} onChange={e => set('phone', e.target.value)} sx={fieldSx}
                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Person fontSize="small" sx={{ color: t.textMuted }} />
                                        </InputAdornment>
                                    ),
                                },
                            }}
                        />
                        <TextField size='small' label='Secure Code' value={form.secureCode} onChange={e => set('secureCode', e.target.value)} sx={fieldSx}
                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Person fontSize="small" sx={{ color: t.textMuted }} />
                                        </InputAdornment>
                                    ),
                                },
                            }}
                        />

                        <FormControl size='small'>
                            <Select
                                value={form.role} onChange={e => set('role', e.target.value)} displayEmpty
                                sx={{ borderRadius: '10px', background: t.surface, color: t.text, '& .MuiOutlinedInput-notchedOutline': { borderColor: t.border } }}
                                startAdornment={<InputAdornment position='start'><Badge fontSize='small' sx={{ color: t.textMuted, ml: 0.5 }} /></InputAdornment>}
                            >
                                <MenuItem value='' disabled><em>Select role</em></MenuItem>
                                {ROLES.map(r => <MenuItem key={r} value={r}>{r}</MenuItem>)}
                            </Select>
                        </FormControl>

                        <TextField size='small' label='Password' type='password' value={password} onChange={e => setPassword(e.target.value)} sx={fieldSx}
                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Person fontSize="small" sx={{ color: t.textMuted }} />
                                        </InputAdornment>
                                    ),
                                },
                            }}
                        />

                        <FormControl size='small'>
                            <Select value={form.status} onChange={e => set('status', e.target.value)}
                                sx={{ borderRadius: '10px', background: t.surface, color: t.text, '& .MuiOutlinedInput-notchedOutline': { borderColor: t.border } }}>
                                <MenuItem value='Enabled'>Enabled</MenuItem>
                                <MenuItem value='Disabled'>Disabled</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                    <Box sx={{ background: t.surface, border: `1px solid ${t.border}`, borderRadius: '14px', p: 2.2, display: 'flex', flexDirection: 'column', gap: 1.6 }}>
                        <Typography sx={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: t.energy, textAlign: 'center' }}>
                            Extra Permissions
                        </Typography>

                        <FormControl size='small'>
                            <Typography sx={{ fontSize: 11, color: t.textMuted, mb: 0.4 }}>Multi login</Typography>
                            <Select value={form.multiLogin ?? 'No'} onChange={e => set('multiLogin', e.target.value)}
                                sx={{ borderRadius: '10px', background: t.surfaceSolid, color: t.text, '& .MuiOutlinedInput-notchedOutline': { borderColor: t.border } }}>
                                <MenuItem value='No'>No</MenuItem>
                                <MenuItem value='Yes'>Yes</MenuItem>
                            </Select>
                        </FormControl>

                        {([
                            ['logoLeft', 'Logo (left)'], ['logoCenter', 'Logo (center)'], ['logoRight', 'Logo (right)'],
                            ['map', 'MAP'], ['dashboard', 'Dashboard'],
                        ] as const).map(([key, label]) => (
                            <TextField key={key} size='small' label={label} value={(form as any)[key] ?? ''} onChange={e => set(key, e.target.value)} sx={fieldSx} />
                        ))}

                        {([['statePerm', 'State Perm.'], ['ulbPerm', 'ULB Perm.']] as const).map(([key, label]) => (
                            <FormControl key={key} size='small'>
                                <Typography sx={{ fontSize: 11, color: t.textMuted, mb: 0.4 }}>{label}</Typography>
                                <Select value={(form as any)[key] ?? 'Full Access'} onChange={e => set(key, e.target.value)}
                                    sx={{ borderRadius: '10px', background: t.surfaceSolid, color: t.text, '& .MuiOutlinedInput-notchedOutline': { borderColor: t.border } }}>
                                    {PERM_OPTIONS.map(o => <MenuItem key={o} value={o}>{o}</MenuItem>)}
                                </Select>
                            </FormControl>
                        ))}
                    </Box>
                </Box>
            </DialogContent>

            <DialogActions sx={{ px: 3, py: 2, borderTop: `1px solid ${t.border}` }}>
                <Button onClick={onClose} sx={{ textTransform: 'none', color: t.textMuted }}>Cancel</Button>
                <Button
                    onClick={handleSubmit}
                    variant='contained'
                    sx={{
                        textTransform: 'none', fontWeight: 700, borderRadius: '10px', px: 3,
                        background: `linear-gradient(135deg, ${t.on}, #16A34A)`,
                        transition: 'transform .2s ease',
                        '&:hover': { transform: 'translateY(-1px)' },
                    }}
                >
                    Submit
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default UserFormDialog