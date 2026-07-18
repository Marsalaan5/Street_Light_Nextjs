// // 'use client'

// // import { useTheme } from '@mui/material/styles'

// // // ─── Fixed accent palette — vibrant, modern, and clearly distinguishable ─────

// // const ACCENTS = {
// //   energy: '#0ea5e9',       // sky-500 — total / connected
// //   signalLoss: '#94a3b8',   // slate-400 — signal loss
// //   on: '#22c55e',           // green-500 — ON states
// //   off: '#f43f5e',          // rose-500 — OFF states
// //   powerCut: '#f59e0b',     // amber-500 — power-cut
// //   consumption: '#a855f7',  // violet-500 — energy consumption
// //   connected: '#06b6d4',    // cyan-500 — connected
// // }

// // // ─── Shared constants ────────────────────────────────────────────────────────

// // export const RADIUS = {
// //   card: '14px',
// //   cardInner: '10px',
// //   chip: '8px',
// //   button: '10px',
// // }

// // export const DASHBOARD_CARD_HEIGHT = 600

// // export const PANEL_BORDER_WIDTH = 1

// // // ─── Hook — reads MUI theme + returns all tokens ────────────────────────────

// // export const useDashboardTokens = () => {
// //   const theme = useTheme()
// //   const isDark = theme.palette.mode === 'dark'

// //   return {
// //     // Surfaces
// //     bg: theme.palette.background.default,
// //     surface: isDark
// //       ? 'rgba(30, 41, 59, 0.72)'
// //       : 'rgba(255, 255, 255, 0.82)',
// //     surfaceSolid: theme.palette.background.paper,

// //     // Text
// //     text: theme.palette.text.primary,
// //     textMuted: theme.palette.text.secondary,

// //     // Borders
// //     border: isDark ? 'rgba(148, 163, 184, 0.14)' : 'rgba(148, 163, 184, 0.25)',

// //     // Zebra rows
// //     zebra: theme.palette.action.hover,

// //     // Shadows — layered for modern depth
// //     shadowCard: isDark
// //       ? '0 1px 2px rgba(0,0,0,0.3), 0 4px 16px rgba(0,0,0,0.25)'
// //       : '0 1px 3px rgba(0,0,0,0.06), 0 6px 24px rgba(0,0,0,0.06)',
// //     shadowLifted: isDark
// //       ? '0 8px 32px rgba(0,0,0,0.45)'
// //       : '0 8px 32px rgba(0,0,0,0.12)',

// //     // Glassmorphism backdrop
// //     backdrop: isDark
// //       ? 'blur(20px) saturate(1.6)'
// //       : 'blur(20px) saturate(1.8)',

// //     // Accents
// //     ...ACCENTS,
// //   }
// // }



// // views/dashboard/ui/tokens.ts
// // Dark glass palette — amber is the "light" signature color (fits the street-light subject),
// // cyan = connectivity, green = on/healthy, red = alarm/signal loss.

// export const useDashboardTokens = () => ({
//   // Surfaces
//   bg: '#0A0E14',
//   panel: 'rgba(22, 29, 45, 0.55)',
//   panelSolid: '#111826',
//   border: 'rgba(255,255,255,0.08)',
//   borderStrong: 'rgba(255,255,255,0.16)',

//   // Text
//   text: '#E8ECF3',
//   textMuted: '#7C8698',

//   // Semantic accents (reuse across StatCard, gauges, bars)
//   energy: '#F5A623',
//   connected: '#38BDF8',
//   signalLoss: '#F04438',
//   on: '#22C55E',
//   off: '#9AA4B5',
//   consumption: '#FBBF24',

//   // Dim/tint variants for icon badge backgrounds
//   energyDim: 'rgba(245,166,35,0.15)',
//   connectedDim: 'rgba(56,189,248,0.15)',
//   signalLossDim: 'rgba(240,68,56,0.15)',
//   onDim: 'rgba(34,197,94,0.15)',
//   offDim: 'rgba(154,164,181,0.15)',
// })

// export type DashboardTokens = ReturnType<typeof useDashboardTokens>




// views/dashboard/ui/tokens.ts
// Dark glass palette — amber is the "light" signature color (fits the street-light subject),
// cyan = connectivity, green = on/healthy, red = alarm/signal loss.



'use client'

import { useTheme } from '@/context/ThemeContext' // ⚠️ adjust to your actual ThemeProvider path

export const DASHBOARD_CARD_HEIGHT = 460

export const RADIUS = {
  card: '18px',
  cardInner: '12px',
  chip: '8px',
}

export const PANEL_BORDER_WIDTH = 2

const darkTokens = {
  // Surfaces
  bg: '#0A0E14',
  panel: 'rgba(22, 29, 45, 0.55)',
  surfaceSolid: '#0F1420',
  surface: 'rgba(255,255,255,0.035)',
  border: 'rgba(255,255,255,0.08)',
  borderStrong: 'rgba(255,255,255,0.16)',

  // Text
  text: '#E8ECF3',
  textMuted: '#7C8698',
  textDisabled: '#4B5567',

  // Semantic accents
  energy: '#F5A623',
  connected: '#38BDF8',
  signalLoss: '#F04438',
  on: '#22C55E',
  off: '#9AA4B5',
  consumption: '#FBBF24',

  energyDim: 'rgba(245,166,35,0.15)',
  connectedDim: 'rgba(56,189,248,0.15)',
  signalLossDim: 'rgba(240,68,56,0.15)',
  onDim: 'rgba(34,197,94,0.15)',
  offDim: 'rgba(154,164,181,0.15)',

  shadowCard: '0 4px 20px rgba(0,0,0,0.35)',
  shadowLifted: '0 14px 34px rgba(0,0,0,0.55)',
  backdrop: 'blur(8px)',

  // Track/shimmer for bars + gauges
  trackBg: 'rgba(255,255,255,0.07)',
  shimmer: 'rgba(255,255,255,0.35)',
}

const lightTokens = {
  // Surfaces — frosted white glass over a soft tinted page bg
  bg: '#EEF1F8',
  panel: 'rgba(255,255,255,0.72)',
  surfaceSolid: '#FFFFFF',
  surface: 'rgba(15,23,42,0.035)',
  border: 'rgba(15,23,42,0.09)',
  borderStrong: 'rgba(15,23,42,0.18)',

  // Text
  text: '#0F172A',
  textMuted: '#5B6472',
  textDisabled: '#A0AAB8',

  // Semantic accents — deepened slightly for contrast on white
  energy: '#E8930F',
  connected: '#0EA5E9',
  signalLoss: '#E11D48',
  on: '#16A34A',
  off: '#78829370',
  consumption: '#D97706',

  energyDim: 'rgba(232,147,15,0.14)',
  connectedDim: 'rgba(14,165,233,0.14)',
  signalLossDim: 'rgba(225,29,72,0.14)',
  onDim: 'rgba(22,163,74,0.14)',
  offDim: 'rgba(120,130,147,0.14)',

  // Soft colored elevation instead of flat black — this is what reads as "glossy"
  shadowCard: '0 4px 20px rgba(15,23,42,0.08), 0 1px 2px rgba(15,23,42,0.05)',
  shadowLifted: '0 14px 34px rgba(15,23,42,0.14), 0 4px 10px rgba(15,23,42,0.06)',
  backdrop: 'blur(8px) saturate(180%)',

  // Track/shimmer — dark-tinted track so it's visible on white, white shimmer sweep still pops over colored fills
  trackBg: 'rgba(15,23,42,0.08)',
  shimmer: 'rgba(255,255,255,0.65)',
}

export const useDashboardTokens = () => {
  const { theme } = useTheme()
  return theme === 'light' ? lightTokens : darkTokens
}

export type DashboardTokens = ReturnType<typeof useDashboardTokens>