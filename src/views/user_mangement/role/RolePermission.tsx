'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import { ArrowBack, ExpandMore, Save } from '@mui/icons-material'

import GlassPanel from '@/views/dashboard/ui/GlassPanel'
import { useDashboardTokens } from '@/views/dashboard/ui/tokens'
import { PERMISSION_SCHEMA, buildEmptyPermissions, isGroupEnabled, permKey } from '@/types/roles/permissionSchema'
import { useRoles } from './RoleContext'
import type { PermissionGroup, RolePermissions } from '@/types/roles/types'

const SECTION_ACCENTS = ['energy', 'connected', 'on'] as const

interface RolePermissionPageProps {
    roleId?: number
}

const RolePermissionPage = ({ roleId }: RolePermissionPageProps) => {
    const t = useDashboardTokens()
    const router = useRouter()
    const { getRole, addRole, updateRole } = useRoles()
    const editRole = roleId ? getRole(roleId) : undefined

    const [title, setTitle] = useState('')
    const [status, setStatus] = useState<'Enabled' | 'Disabled'>('Enabled')
    const [permissions, setPermissions] = useState<RolePermissions>(buildEmptyPermissions())
    const [expanded, setExpanded] = useState<string | false>(PERMISSION_SCHEMA[0].section)

    useEffect(() => {
        if (editRole) {
            setTitle(editRole.title)
            setStatus(editRole.status)
            setPermissions({ ...editRole.permissions })
        }
    }, [editRole])

    const handleGroupChange = (group: PermissionGroup, value: string[]) => {
        const hadEnabled = permissions[permKey(group.label, 'Enabled')]
        const hasEnabled = value.includes('Enabled')

        if (hadEnabled && !hasEnabled) {
            const reset = { ...permissions }
            group.checks.forEach(c => (reset[permKey(group.label, c)] = false))
            setPermissions(reset)
            return
        }

        const next = { ...permissions }
        group.checks.forEach(c => {
            next[permKey(group.label, c)] = value.includes(c)
        })
        setPermissions(next)
    }

    const handleSave = () => {
        if (!title.trim()) return
        if (editRole) {
            updateRole(editRole.id, { title, status, permissions })
        } else {
            addRole({ title, status, permissions })
        }
        router.push('/role')
    }

    return (
        <Box sx={{ p: { xs: 2, md: 3 }, pb: 12 }}>
            <Button
                onClick={() => router.push('/role')}
                startIcon={<ArrowBack />}
                sx={{ textTransform: 'none', color: t.textMuted, mb: 2, '&:hover': { color: t.text } }}
            >
                Back to roles
            </Button>

            <Typography sx={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '1.4rem', color: t.text, mb: 0.4 }}>
                {editRole ? `Edit — ${editRole.title}` : 'Create a new role'}
            </Typography>
            <Typography sx={{ fontSize: '0.82rem', color: t.textMuted, mb: 3 }}>
                Define what this role can see and do across the platform.
            </Typography>

            <GlassPanel sx={{ p: 2.5, mb: 2.5 }}>
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '2fr 1fr' }, gap: 2 }}>
                    <TextField
                        size='small' label='Role title' value={title} onChange={e => setTitle(e.target.value)}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '10px', background: t.surface, color: t.text,
                                '& fieldset': { borderColor: t.border },
                                '&:hover fieldset': { borderColor: t.borderStrong },
                                '&.Mui-focused fieldset': { borderColor: t.energy },
                            },
                        }}
                    />
                    <FormControl size='small'>
                        <Select
                            value={status} onChange={e => setStatus(e.target.value as 'Enabled' | 'Disabled')}
                            sx={{ borderRadius: '10px', background: t.surface, color: t.text, '& .MuiOutlinedInput-notchedOutline': { borderColor: t.border } }}
                        >
                            <MenuItem value='Enabled'>Enabled</MenuItem>
                            <MenuItem value='Disabled'>Disabled</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </GlassPanel>

            {PERMISSION_SCHEMA.map((section, sIdx) => {
                const accentKey = SECTION_ACCENTS[sIdx % SECTION_ACCENTS.length]
                const accent = t[accentKey] as string

                return (
                    <Accordion
                        key={section.section}
                        expanded={expanded === section.section}
                        onChange={(_, isExp) => setExpanded(isExp ? section.section : false)}
                        disableGutters
                        sx={{
                            background: t.panel,
                            backdropFilter: 'blur(14px)',
                            border: `1px solid ${t.border}`,
                            borderRadius: '16px !important',
                            mb: 2,
                            overflow: 'hidden',
                            '&::before': { display: 'none' },
                            transition: 'border-color .2s ease',
                            '&:hover': { borderColor: t.borderStrong },
                        }}
                    >
                        <AccordionSummary expandIcon={<ExpandMore sx={{ color: t.textMuted }} />}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
                                <Box sx={{ width: 8, height: 8, borderRadius: '50%', background: accent }} />
                                <Typography sx={{ fontWeight: 700, fontSize: '0.9rem', color: t.text }}>{section.section}</Typography>
                            </Box>
                        </AccordionSummary>
                        <AccordionDetails sx={{ display: 'flex', flexDirection: 'column', gap: 2.2, pt: 0 }}>
                            {section.groups.map(group => {
                                const activeChecks = group.checks.filter(c => permissions[permKey(group.label, c)])
                                const groupOn = isGroupEnabled(group, permissions)

                                return (
                                    <Box key={group.label}>
                                        <Typography sx={{ fontSize: '11.5px', fontWeight: 700, color: t.textMuted, mb: 0.8 }}>{group.label}</Typography>
                                        <ToggleButtonGroup value={activeChecks} onChange={(_, value: string[]) => handleGroupChange(group, value)} sx={{ flexWrap: 'wrap', gap: 0.8 }}>
                                            {group.checks.map(check => {
                                                const isEnabledToggle = check === 'Enabled'
                                                const active = activeChecks.includes(check)
                                                const disabled = !isEnabledToggle && !groupOn

                                                return (
                                                    <ToggleButton
                                                        key={check}
                                                        value={check}
                                                        disabled={disabled}
                                                        sx={{
                                                            textTransform: 'none', fontSize: '11.5px', fontWeight: 600,
                                                            border: `1px solid ${active ? accent : t.border}`,
                                                            borderRadius: '20px !important', px: 1.6, py: 0.5,
                                                            color: active ? accent : t.textMuted,
                                                            transition: 'all .18s ease',
                                                            '&.Mui-selected': { background: `${accent}1F`, color: accent, '&:hover': { background: `${accent}2E` } },
                                                            '&.Mui-disabled': { color: t.textDisabled, borderColor: t.border, opacity: 0.5 },
                                                            '&:hover': { borderColor: accent, transform: disabled ? 'none' : 'translateY(-1px)' },
                                                        }}
                                                    >
                                                        {isEnabledToggle && <Box sx={{ width: 6, height: 6, borderRadius: '50%', background: active ? accent : t.textDisabled, mr: 0.8 }} />}
                                                        {check}
                                                    </ToggleButton>
                                                )
                                            })}
                                        </ToggleButtonGroup>
                                    </Box>
                                )
                            })}
                        </AccordionDetails>
                    </Accordion>
                )
            })}

            <Box
                sx={{
                    position: 'sticky', bottom: 16, mt: 3,
                    display: 'flex', justifyContent: 'flex-end', gap: 1.2,
                    p: 1.6, borderRadius: '16px',
                    background: t.panel, backdropFilter: 'blur(14px)', border: `1px solid ${t.border}`,
                    boxShadow: t.shadowLifted,
                    animation: 'slideUp .4s ease both',
                    '@keyframes slideUp': { from: { opacity: 0, transform: 'translateY(12px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
                }}
            >
                <Button onClick={() => router.push('/role')} sx={{ textTransform: 'none', color: t.textMuted }}>
                    Cancel
                </Button>
                <Button
                    onClick={handleSave}
                    variant='contained'
                    startIcon={<Save fontSize='small' />}
                    sx={{ textTransform: 'none', fontWeight: 700, borderRadius: '10px', px: 3, background: `linear-gradient(135deg, ${t.on}, #16A34A)`, transition: 'transform .2s ease', '&:hover': { transform: 'translateY(-1px)' } }}
                >
                    Save role
                </Button>
            </Box>
        </Box>
    )
}

export default RolePermissionPage