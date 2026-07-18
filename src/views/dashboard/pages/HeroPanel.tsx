// // views/dashboard/HeroPanel.tsx
// 'use client'

// import Box from '@mui/material/Box'
// import Typography from '@mui/material/Typography'

// import StreetLight3D from './three/StreetLight3D'
// import { useDashboardTokens } from './ui/tokens'

// const HeroPanel = () => {
//     const t = useDashboardTokens()

//     const stats = [
//         { label: 'Grid uptime', value: '99.2%', color: t.on },
//         { label: 'Active alerts', value: '6', color: t.energy },
//         { label: 'kWh today', value: '491,075', color: t.connected },
//     ]

//     return (
//         <Box
//             sx={{
//                 position: 'relative',
//                 display: 'grid',
//                 gridTemplateColumns: { xs: '1fr', md: '1fr 1.15fr' },
//                 gap: 1,
//                 alignItems: 'center',
//                 background: t.panel,
//                 backdropFilter: t.backdrop,
//                 WebkitBackdropFilter: t.backdrop,
//                 border: `1px solid ${t.border}`,
//                 borderRadius: '22px',
//                 px: { xs: 3, md: 4.5 },
//                 py: { xs: 3, md: 3.8 },
//                 mb: 2.5,
//                 overflow: 'hidden',
//                 '&::before': {
//                     content: '""',
//                     position: 'absolute',
//                     inset: 0,
//                     backgroundImage: 'radial-gradient(rgba(127,127,127,0.12) 1px, transparent 1px)',
//                     backgroundSize: '22px 22px',
//                     maskImage: 'radial-gradient(circle at 78% 45%, black, transparent 72%)',
//                     WebkitMaskImage: 'radial-gradient(circle at 78% 45%, black, transparent 72%)',
//                     pointerEvents: 'none',
//                 },
//             }}
//         >
//             <Box sx={{ position: 'relative', zIndex: 1 }}>
//                 <Box
//                     sx={{
//                         display: 'inline-flex',
//                         alignItems: 'center',
//                         gap: 0.8,
//                         fontSize: '0.68rem',
//                         fontWeight: 700,
//                         letterSpacing: '0.1em',
//                         textTransform: 'uppercase',
//                         color: t.connected,
//                         background: t.connectedDim,
//                         border: `1px solid ${t.connected}4D`,
//                         px: 1.4,
//                         py: 0.6,
//                         borderRadius: '20px',
//                         mb: 2,
//                     }}
//                 >
//                     <Box
//                         sx={{
//                             width: 6,
//                             height: 6,
//                             borderRadius: '50%',
//                             background: t.connected,
//                             animation: 'heroDot 1.8s infinite',
//                             '@keyframes heroDot': {
//                                 '0%, 100%': { opacity: 1 },
//                                 '50%': { opacity: 0.4 },
//                             },
//                         }}
//                     />
//                     23,998 units online
//                 </Box>

//                 <Typography
//                     sx={{
//                         fontFamily: "'Space Grotesk', 'Inter', sans-serif",
//                         fontWeight: 700,
//                         fontSize: { xs: '1.5rem', md: '1.85rem' },
//                         lineHeight: 1.15,
//                         letterSpacing: '-0.02em',
//                         color: t.text,
//                         mb: 1.2,
//                     }}
//                 >
//                     Every pole, <Box component='span' sx={{ color: t.energy }}>lit and listening</Box>.
//                 </Typography>

//                 <Typography sx={{ fontSize: '0.85rem', color: t.textMuted, lineHeight: 1.6, maxWidth: '38ch', mb: 2.8 }}>
//                     One feed for every CCMS controller and street light across the city — signal, power and lux, streamed
//                     from the pole to this screen.
//                 </Typography>

//                 <Box sx={{ display: 'flex', gap: 3.2 }}>
//                     {stats.map(s => (
//                         <Box key={s.label}>
//                             <Typography sx={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '1.15rem', fontWeight: 700, color: s.color }}>
//                                 {s.value}
//                             </Typography>
//                             <Typography sx={{ fontSize: '0.62rem', color: t.textMuted, textTransform: 'uppercase', letterSpacing: '0.08em', mt: 0.2 }}>
//                                 {s.label}
//                             </Typography>
//                         </Box>
//                     ))}
//                 </Box>
//             </Box>

//             <Box sx={{ position: 'relative', zIndex: 1, width: '100%', height: { xs: 220, md: 300 } }}>
//                 {/* <StreetLightSVG accent={t.energy} cyan={t.connected} green={t.on} /> */}
//                 <StreetLight3D accent={t.energy} cyan={t.connected} green={t.on} />
//             </Box>
//         </Box>
//     )
// }

// export default HeroPanel



'use client'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import StreetLight3D from '../three/StreetLight3D'
import { useDashboardTokens } from '../ui/tokens'

const HeroPanel = () => {
    const t = useDashboardTokens()

    const stats = [
        { label: 'Grid uptime', value: '99.2%', color: t.on },
        { label: 'Active alerts', value: '6', color: t.energy },
        { label: 'kWh today', value: '491,075', color: t.connected }
    ]

    return (
        <Box
            sx={{
                position: 'relative',
                minHeight: { xs: 340, md: 430 },
                borderRadius: '24px',
                overflow: 'hidden',
                mb: 2.5,
                border: `1px solid ${t.border}`,
                background: t.panel,
                backdropFilter: t.backdrop,
                WebkitBackdropFilter: t.backdrop
            }}
        >
            {/* ==================== 3D BACKGROUND ==================== */}
            <Box
                sx={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 0
                }}
            >
                <StreetLight3D
                    accent={t.energy}
                    cyan={t.connected}
                    green={t.on}
                />
            </Box>

            {/* ==================== OVERLAY ==================== */}
            <Box
                sx={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 1,
                    background: `
            linear-gradient(
              90deg,
              rgba(7,12,20,.92) 0%,
              rgba(7,12,20,.82) 32%,
              rgba(7,12,20,.45) 62%,
              rgba(7,12,20,.15) 100%
            )
          `
                }}
            />

            {/* ==================== GRID PATTERN ==================== */}
            <Box
                sx={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 1,
                    opacity: .05,
                    backgroundImage:
                        'radial-gradient(rgba(255,255,255,.35) 1px, transparent 1px)',
                    backgroundSize: '22px 22px',
                    pointerEvents: 'none'
                }}
            />

            {/* ==================== CONTENT ==================== */}
            <Box
                sx={{
                    position: 'relative',
                    zIndex: 2,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    maxWidth: 620,
                    px: { xs: 3, md: 5 },
                    py: { xs: 4, md: 5 }
                }}
            >
                {/* Badge */}
                <Box
                    sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 1,
                        width: 'fit-content',
                        px: 2,
                        py: .8,
                        mb: 3,
                        borderRadius: '999px',
                        border: `1px solid ${t.connected}55`,
                        background: 'rgba(0,0,0,.25)',
                        backdropFilter: 'blur(12px)'
                    }}
                >
                    <Box
                        sx={{
                            width: 8,
                            height: 8,
                            borderRadius: '50%',
                            bgcolor: t.connected,
                            animation: 'pulse 1.5s infinite',
                            '@keyframes pulse': {
                                '0%': {
                                    transform: 'scale(.9)',
                                    opacity: .7
                                },
                                '50%': {
                                    transform: 'scale(1.4)',
                                    opacity: 1
                                },
                                '100%': {
                                    transform: 'scale(.9)',
                                    opacity: .7
                                }
                            }
                        }}
                    />

                    <Typography
                        sx={{
                            color: t.connected,
                            fontWeight: 700,
                            fontSize: '.72rem',
                            letterSpacing: '.12em',
                            textTransform: 'uppercase'
                        }}
                    >
                        23,998 Units Online
                    </Typography>
                </Box>

                {/* Heading */}
                <Typography
                    sx={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 700,
                        fontSize: {
                            xs: '2rem',
                            md: '3rem'
                        },
                        lineHeight: 1.05,
                        color: '#fff',
                        mb: 2
                    }}
                >
                    Every Pole,
                    <br />
                    <Box
                        component="span"
                        sx={{
                            color: t.energy
                        }}
                    >
                        Lit & Listening
                    </Box>
                </Typography>

                {/* Description */}
                <Typography
                    sx={{
                        color: 'rgba(255,255,255,.75)',
                        fontSize: '.95rem',
                        lineHeight: 1.8,
                        maxWidth: 500,
                        mb: 5
                    }}
                >
                    Monitor every CCMS controller, street light, energy meter and
                    communication link from a single intelligent dashboard with
                    real-time analytics and instant fault detection.
                </Typography>

                {/* Stats */}
                <Box
                    sx={{
                        display: 'flex',
                        gap: 2,
                        flexWrap: 'wrap'
                    }}
                >
                    {stats.map((item) => (
                        <Box
                            key={item.label}
                            sx={{
                                minWidth: 140,
                                px: 2.5,
                                py: 2,
                                borderRadius: '18px',
                                backdropFilter: 'blur(20px)',
                                background: 'rgba(255,255,255,.06)',
                                border: '1px solid rgba(255,255,255,.08)'
                            }}
                        >
                            <Typography
                                sx={{
                                    color: item.color,
                                    fontWeight: 700,
                                    fontSize: '1.4rem'
                                }}
                            >
                                {item.value}
                            </Typography>

                            <Typography
                                sx={{
                                    color: 'rgba(255,255,255,.65)',
                                    fontSize: '.72rem',
                                    letterSpacing: '.08em',
                                    textTransform: 'uppercase',
                                    mt: .5
                                }}
                            >
                                {item.label}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    )
}

export default HeroPanel