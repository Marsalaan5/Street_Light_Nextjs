'use client'

import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

export const SectionLabel = styled(Typography)(({ theme }) => ({
  fontSize: '0.7rem',
  fontWeight: 800,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: theme.palette.text.secondary,
  whiteSpace: 'nowrap',
  background: `linear-gradient(135deg, ${theme.palette.text.secondary}, ${theme.palette.text.primary})`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
}))
