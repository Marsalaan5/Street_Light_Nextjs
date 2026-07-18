'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import InputBase from '@mui/material/InputBase'

import GlassPanel from '@/views/dashboard/ui/GlassPanel'
import PageHeader from '../dashboard/ui/PageHeader'
import { useDashboardTokens } from '@/views/dashboard/ui/tokens'

const fields = [
    { key: 'poleId', label: 'Pole ID', placeholder: 'ALG-Z3-04521' },
    { key: 'lightId', label: 'Light ID', placeholder: 'LT-90001' },
    { key: 'location', label: 'Location', placeholder: 'Alpha School Rd' },
    { key: 'lat', label: 'Latitude', placeholder: '27.8974' },
    { key: 'lng', label: 'Longitude', placeholder: '78.0880' },
    { key: 'zone', label: 'Zone', placeholder: 'Zone 3' },
    { key: 'ward', label: 'Ward', placeholder: 'Ward 12' },
    { key: 'luminaire', label: 'Light Type', placeholder: 'LED 60W' },
    { key: 'wattage', label: 'Wattage', placeholder: '60' },
    { key: 'controller', label: 'Controller ID', placeholder: 'RTU-2201' },
    { key: 'feeder', label: 'Feeder Pillar', placeholder: 'FP-118' },
    { key: 'contractor', label: 'Contractor', placeholder: 'ABC Infra Pvt Ltd' }
]

const Field = ({ label, placeholder, value, onChange }: any) => {
    const t = useDashboardTokens()
    return (
        <Box>
            <Typography sx={{ fontSize: '.72rem', fontWeight: 700, color: t.textMuted, mb: 0.6, textTransform: 'uppercase', letterSpacing: '.04em' }}>{label}</Typography>
            <InputBase
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                sx={{ width: '100%', px: 1.4, py: 1.1, borderRadius: '10px', fontSize: '.85rem', color: t.text, bgcolor: t.surface, border: `1px solid ${t.border}`, '&:focus-within': { borderColor: t.connected } }}
            />
        </Box>
    )
}

const AddLightPage = () => {
    const t = useDashboardTokens()
    const [tab, setTab] = useState<'single' | 'bulk'>('single')
    const [values, setValues] = useState<Record<string, string>>({})
    const [submitting, setSubmitting] = useState(false)
    const [success, setSuccess] = useState(false)
    const [fileName, setFileName] = useState<string | null>(null)

    const handleChange = (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => setValues(v => ({ ...v, [key]: e.target.value }))

    const handleSubmit = async () => {
        setSubmitting(true)
        await new Promise(r => setTimeout(r, 1100))
        setSubmitting(false)
        setSuccess(true)
        setTimeout(() => { setSuccess(false); setValues({}) }, 1800)
    }

    return (
        <Box sx={{ p: { xs: 2, md: 3 } }}>
            <PageHeader title='Add Street Light' subtitle='Register a new pole or import in bulk' crumbs={[{ label: 'Assets' }, { label: 'Add Light' }]} />

            <Box sx={{ display: 'flex', gap: 1, mb: 2.5 }}>
                {(['single', 'bulk'] as const).map(key => (
                    <motion.button
                        key={key}
                        onClick={() => setTab(key)}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        style={{
                            padding: '9px 18px', borderRadius: 10, border: `1px solid ${tab === key ? t.connected + '77' : t.border}`,
                            background: tab === key ? `${t.connected}18` : t.surface, color: tab === key ? t.connected : t.textMuted,
                            fontWeight: 700, fontSize: '.8rem', cursor: 'pointer'
                        }}
                    >
                        {key === 'single' ? 'Single Light' : 'Bulk Import (CSV)'}
                    </motion.button>
                ))}
            </Box>

            <GlassPanel sx={{ p: 3, position: 'relative', overflow: 'hidden' }}>
                <AnimatePresence mode='wait'>
                    {success ? (
                        <motion.div
                            key='success'
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px 0' }}
                        >
                            <motion.div
                                initial={{ scale: 0, rotate: -90 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ type: 'spring', stiffness: 260, damping: 16 }}
                                style={{ width: 64, height: 64, borderRadius: '50%', background: `${t.on}22`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}
                            >
                                <i className='ri-check-line' style={{ fontSize: 32, color: t.on }} />
                            </motion.div>
                            <Typography sx={{ fontWeight: 700, color: t.text }}>Light added successfully</Typography>
                        </motion.div>
                    ) : tab === 'single' ? (
                        <motion.div key='single' initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 12 }}>
                            <Grid container spacing={2.2}>
                                {fields.map((f, i) => (
                                    <Grid size={{ xs: 12, sm: 6 }} key={f.key} component={motion.div} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }}>
                                        <Field label={f.label} placeholder={f.placeholder} value={values[f.key] ?? ''} onChange={handleChange(f.key)} />
                                    </Grid>
                                ))}
                                <Grid size={{ xs: 12 }}>
                                    <motion.button
                                        whileHover={{ scale: 1.015 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={handleSubmit}
                                        disabled={submitting}
                                        style={{
                                            marginTop: 8, padding: '11px 22px', borderRadius: 10, border: 'none', cursor: 'pointer',
                                            background: t.connected, color: '#fff', fontWeight: 700, fontSize: '.85rem',
                                            display: 'flex', alignItems: 'center', gap: 8
                                        }}
                                    >
                                        {submitting && (
                                            <motion.span
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                                                style={{ width: 14, height: 14, border: '2px solid #fff5', borderTopColor: '#fff', borderRadius: '50%', display: 'inline-block' }}
                                            />
                                        )}
                                        {submitting ? 'Saving…' : 'Save Light'}
                                    </motion.button>
                                </Grid>
                            </Grid>
                        </motion.div>
                    ) : (
                        <motion.div key='bulk' initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -12 }}>
                            <Box
                                component='label'
                                sx={{
                                    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 1,
                                    border: `1.5px dashed ${t.border}`, borderRadius: '14px', py: 6, cursor: 'pointer', bgcolor: t.surface,
                                    '&:hover': { borderColor: t.connected }
                                }}
                            >
                                <i className='ri-upload-cloud-2-line' style={{ fontSize: 34, color: t.connected }} />
                                <Typography sx={{ fontWeight: 700, color: t.text, fontSize: '.88rem' }}>{fileName ?? 'Click to upload CSV'}</Typography>
                                <Typography sx={{ fontSize: '.72rem', color: t.textMuted }}>Pole ID, Lat, Lng, Zone, Wattage, Controller ID…</Typography>
                                <input type='file' accept='.csv' hidden onChange={e => setFileName(e.target.files?.[0]?.name ?? null)} />
                            </Box>
                            {fileName && (
                                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} style={{ marginTop: 16 }}>
                                    <motion.button
                                        whileHover={{ scale: 1.015 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={handleSubmit}
                                        style={{ padding: '11px 22px', borderRadius: 10, border: 'none', cursor: 'pointer', background: t.connected, color: '#fff', fontWeight: 700, fontSize: '.85rem' }}
                                    >
                                        Import {fileName}
                                    </motion.button>
                                </motion.div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </GlassPanel>
        </Box>
    )
}

export default AddLightPage