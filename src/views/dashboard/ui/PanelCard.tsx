/**
 * PanelCard
 * ─────────
 * The single card primitive every dashboard widget wraps itself in.
 * Provides the consistent left-border "instrument rack" look,
 * a standardised header bar, and optional scroll for tall content.
 *
 * Usage:
 *   <PanelCard title="Device Status" accent={COLORS.device} icon="ri-radar-line" badge="Live">
 *     …content…
 *   </PanelCard>
 */
'use client'

import type { ReactNode, CSSProperties } from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'

import { useDashboardTokens, RADIUS, PANEL_BORDER_WIDTH } from './tokens'

interface PanelCardProps {
  title: string
  accent: string // left-border + icon colour
  icon?: string // Remix icon class e.g. 'ri-radar-line'
  badge?: string // small pill text shown on the right
  badgeColor?: string // defaults to accent
  children: ReactNode
  scrollHeight?: number // if set, content area gets maxHeight + overflow-y: auto
  style?: CSSProperties
  className?: string
  noPadding?: boolean // skip the 12px content padding (for tables)
}

const PanelCard = ({
  title,
  accent,
  icon,
  badge,
  badgeColor,
  children,
  scrollHeight,
  style,
  className,
  noPadding = false
}: PanelCardProps) => {
  const { surface, surfaceSolid, text, border, shadowCard, shadowLifted, backdrop } = useDashboardTokens()
  const pillColor = badgeColor ?? accent

  return (
    <Box
      className={className}
      sx={{
        borderRadius: RADIUS.card,
        background: surface,
        backdropFilter: backdrop,
        WebkitBackdropFilter: backdrop,
        boxShadow: shadowCard,
        borderLeft: `${PANEL_BORDER_WIDTH + 2}px solid ${accent}`,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        transition: 'box-shadow 0.3s ease, transform 0.3s ease',
        '&:hover': {
          boxShadow: shadowLifted,
          transform: 'translateY(-2px)',
        },
        ...style
      }}
    >
      {/* ── Header ────────────────────────────────────────────────── */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 2,
          py: 1.2,
          borderBottom: `1px solid ${border}`,
          background: `linear-gradient(90deg, ${accent}10 0%, transparent 60%)`
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {icon && (
            <Box
              sx={{
                width: 30,
                height: 30,
                borderRadius: '8px',
                background: `${accent}18`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              <i className={icon} style={{ fontSize: 14, color: accent }} />
            </Box>
          )}
          <Typography
            sx={{
              fontSize: '0.74rem',
              fontWeight: 700,
              color: text,
              textTransform: 'uppercase',
              letterSpacing: '0.06em'
            }}
          >
            {title}
          </Typography>
        </Box>

        {badge && (
          <Chip
            label={badge}
            size='small'
            sx={{
              height: 20,
              fontSize: '0.6rem',
              fontWeight: 700,
              bgcolor: `${pillColor}18`,
              color: pillColor,
              border: `1px solid ${pillColor}30`,
              '& .MuiChip-label': { px: 1 }
            }}
          />
        )}
      </Box>

      {/* ── Content ───────────────────────────────────────────────── */}
      <Box
        sx={{
          flex: 1,
          overflow: scrollHeight ? 'hidden' : undefined,
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Box
          sx={{
            p: noPadding ? 0 : 2,
            flex: 1,
            overflowY: scrollHeight ? 'auto' : undefined,
            maxHeight: scrollHeight
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  )
}

export default PanelCard
