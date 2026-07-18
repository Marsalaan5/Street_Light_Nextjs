'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import InputBase from '@mui/material/InputBase'

import { useDashboardTokens } from './tokens'

interface ConfirmDialogProps {
    open: boolean
    onClose: () => void
    onConfirm: () => void
    title: string
    description: string
    confirmWord: string
    danger?: boolean
}

const ConfirmDialog = ({ open, onClose, onConfirm, title, description, confirmWord, danger = true }: ConfirmDialogProps) => {
    const t = useDashboardTokens()
    const [input, setInput] = useState('')
    const [shake, setShake] = useState(false)
    const matched = input.trim() === confirmWord

    const handleConfirm = () => {
        if (!matched) {
            setShake(true)
            setTimeout(() => setShake(false), 400)
            return
        }
        onConfirm()
        setInput('')
    }

    return (
        <AnimatePresence>
            {open && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        onClick={onClose}
                        style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(3px)', zIndex: 300000 }}
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.92, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0, x: shake ? [0, -10, 10, -8, 8, -4, 4, 0] : 0 }}
                        exit={{ opacity: 0, scale: 0.94, y: 10 }}
                        transition={shake ? { duration: 0.4 } : { type: 'spring', stiffness: 320, damping: 26 }}
                        style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 'min(440px, 92vw)', zIndex: 300001 }}
                    >
                        <Box sx={{ borderRadius: '16px', border: `1px solid ${danger ? t.signalLoss + '55' : t.borderStrong}`, bgcolor: t.panel, backdropFilter: 'blur(20px)', boxShadow: t.shadowLifted, p: 3 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2, mb: 1.2 }}>
                                <Box sx={{ width: 36, height: 36, borderRadius: '10px', bgcolor: `${danger ? t.signalLoss : t.energy}22`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <i className={danger ? 'ri-alarm-warning-line' : 'ri-question-line'} style={{ fontSize: 18, color: danger ? t.signalLoss : t.energy }} />
                                </Box>
                                <Typography sx={{ fontWeight: 800, fontSize: '1.05rem', color: t.text }}>{title}</Typography>
                            </Box>

                            <Typography sx={{ fontSize: '.82rem', color: t.textMuted, mb: 2 }}>{description}</Typography>

                            <Typography sx={{ fontSize: '.72rem', color: t.textMuted, mb: 0.6 }}>
                                Type <Box component='span' sx={{ fontWeight: 800, color: t.text }}>{confirmWord}</Box> to confirm
                            </Typography>
                            <InputBase
                                autoFocus
                                value={input}
                                onChange={e => setInput(e.target.value)}
                                onKeyDown={e => e.key === 'Enter' && handleConfirm()}
                                sx={{
                                    width: '100%', px: 1.4, py: 1, borderRadius: '10px', fontSize: '.85rem', color: t.text,
                                    bgcolor: t.surface, border: `1px solid ${matched ? t.on + '77' : t.border}`
                                }}
                            />

                            <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1, mt: 2.5 }}>
                                <Box component='button' onClick={onClose} sx={{ px: 2, py: 1, borderRadius: '10px', border: `1px solid ${t.border}`, bgcolor: 'transparent', color: t.textMuted, cursor: 'pointer', fontSize: '.8rem', fontWeight: 600 }}>
                                    Cancel
                                </Box>
                                <motion.button
                                    onClick={handleConfirm}
                                    whileHover={matched ? { scale: 1.03 } : {}}
                                    whileTap={matched ? { scale: 0.97 } : {}}
                                    style={{
                                        padding: '8px 16px', borderRadius: 10, border: 'none', cursor: matched ? 'pointer' : 'not-allowed',
                                        background: matched ? (danger ? t.signalLoss : t.connected) : t.surface,
                                        color: matched ? '#fff' : t.textDisabled, fontSize: '.8rem', fontWeight: 700
                                    }}
                                >
                                    Confirm
                                </motion.button>
                            </Box>
                        </Box>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}

export default ConfirmDialog