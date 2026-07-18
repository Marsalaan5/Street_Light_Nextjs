'use client'

import { useEffect, useState } from 'react'

import {
    Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle,
    Divider, FormControl, FormControlLabel, FormGroup, IconButton, MenuItem, Select, TextField, Typography,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';

import { PERMISSION_SCHEMA, buildEmptyPermissions, isGroupEnabled, permKey } from '@/types/roles/permissionSchema'
import type { PermissionGroup, Role, RolePermissions } from '@/types/roles/types';

interface RoleFormDialogProps {
    open: boolean
    editRole: Role | null
    onClose: () => void
    onSubmit: (values: { title: string; status: 'Enabled' | 'Disabled'; permissions: RolePermissions }) => void
}

const SectionDivider = ({ title }: { title: string }) => (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, my: 1.5 }}>
        <Divider sx={{ flex: 1 }} />

        <Typography color='text.secondary' sx={{ whiteSpace: 'nowrap', fontWeight: 600, fontSize: 13 }}>
            {title}
        </Typography>
        <Divider sx={{ flex: 1 }} />
    </Box>
)

const RoleFormDialog = ({ open, editRole, onClose, onSubmit }: RoleFormDialogProps) => {
    const [title, setTitle] = useState('')
    const [status, setStatus] = useState<'Enabled' | 'Disabled'>('Enabled')
    const [permissions, setPermissions] = useState<RolePermissions>(buildEmptyPermissions())

    useEffect(() => {
        if (open) {
            setTitle(editRole?.title ?? '')
            setStatus(editRole?.status ?? 'Enabled')
            setPermissions(editRole ? { ...editRole.permissions } : buildEmptyPermissions())
        }
    }, [open, editRole])

    const handleGroupCheck = (group: PermissionGroup, check: string, checked: boolean) => {
        const key = permKey(group.label, check)
        if (check === 'Enabled' && !checked) {
            const reset: RolePermissions = { ...permissions }
            group.checks.forEach(c => {
                reset[permKey(group.label, c)] = false
            })
            setPermissions(reset)
        } else {
            setPermissions(prev => ({ ...prev, [key]: checked }))
        }
    }

    const handleSubmit = () => {
        if (!title.trim()) return
        onSubmit({ title, status, permissions })
    }

    return (
        <Dialog open={open} onClose={onClose} maxWidth='sm' fullWidth>
            <DialogTitle sx={{ background: '#F4923A', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', py: 1.5, px: 2.5 }}>
                <Typography sx={{ fontWeight: 600, fontSize: 16 }}>
                    {editRole ? 'Edit Role' : 'Add Roles'}
                </Typography>
                <IconButton onClick={onClose} sx={{ color: '#fff' }} size='small'>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>

            <DialogContent sx={{ pt: 2.5 }}>
                <Box sx={{ display: 'grid', gridTemplateColumns: '100px 1fr', alignItems: 'center', gap: 1, mb: 1.5 }}>
                    <Typography sx={{ fontSize: 13, color: 'text.secondary', textAlign: 'right' }}  >
                        Title
                    </Typography>
                    <TextField size='small' value={title} onChange={e => setTitle(e.target.value)} placeholder='Role name' sx={{
                        '& .MuiInputBase-input': {
                            fontSize: 13,
                        },
                    }} />
                </Box>
                <Box sx={{ display: 'grid', gridTemplateColumns: '100px 1fr', alignItems: 'center', gap: 1, mb: 2 }}>
                    <Typography sx={{ fontSize: 13, color: 'text.secondary', textAlign: 'right' }}>
                        Status
                    </Typography>
                    <FormControl size='small'>
                        <Select value={status} onChange={e => setStatus(e.target.value as 'Enabled' | 'Disabled')} sx={{ fontSize: 13 }}>
                            <MenuItem value='Enabled' sx={{ fontSize: 13 }}>Enabled</MenuItem>
                            <MenuItem value='Disabled' sx={{ fontSize: 13 }}>Disabled</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                <Typography sx={{ fontSize: 12, fontWeight: 600, color: 'text.secondary', mb: 0.5 }} >
                    Permissions
                </Typography>

                {PERMISSION_SCHEMA.map(section => (
                    <Box key={section.section}>
                        <SectionDivider title={section.section} />
                        {section.groups.map(group => {
                            const groupEnabled = isGroupEnabled(group, permissions)
                            return (
                                <Box key={group.label} sx={{ mb: 1.5 }}>
                                    <Typography sx={{ fontSize: 12, fontWeight: 600, color: '#F4923A', mb: 0.5 }}>
                                        {group.label}
                                    </Typography>
                                    <FormGroup row sx={{ gap: 0 }}>
                                        {group.checks.map(check => {
                                            const key = permKey(group.label, check)
                                            const isEnabledCheck = check === 'Enabled'
                                            const disabled = !isEnabledCheck && !groupEnabled
                                            return (
                                                <FormControlLabel
                                                    key={key}
                                                    control={
                                                        <Checkbox
                                                            size='small'
                                                            checked={!!permissions[key]}
                                                            disabled={disabled}
                                                            onChange={e => handleGroupCheck(group, check, e.target.checked)}
                                                            sx={{ p: 0.4, '&.Mui-checked': { color: '#F4923A' }, '&.Mui-disabled': { color: '#ccc' } }}
                                                        />
                                                    }
                                                    label={
                                                        <Typography sx={{ fontSize: 12, color: disabled ? 'text.disabled' : 'text.primary' }}>
                                                            {check}
                                                        </Typography>
                                                    }
                                                    sx={{ mr: 1.5, ml: 0 }}
                                                />
                                            )
                                        })}
                                    </FormGroup>
                                </Box>
                            )
                        })}
                    </Box>
                ))}
            </DialogContent>

            <DialogActions sx={{ px: 3, py: 1.5, borderTop: '1px solid #eee' }}>
                <Button onClick={onClose} variant='outlined' color='error' size='small' sx={{ textTransform: 'none' }}>
                    Cancel
                </Button>
                <Button onClick={handleSubmit} variant='contained' size='small' sx={{ background: '#2d9e5e', '&:hover': { background: '#247a4a' }, textTransform: 'none' }}>
                    Submit
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default RoleFormDialog