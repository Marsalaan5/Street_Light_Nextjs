// views/dashboard/ui/StreetLightSVG.tsx
'use client'

interface StreetLightSVGProps {
    accent: string
    cyan: string
    green: string
}

const StreetLightSVG = ({ accent, cyan, green }: StreetLightSVGProps) => (
    <svg viewBox='0 0 420 340' preserveAspectRatio='xMidYMid meet' style={{ width: '100%', height: '100%', overflow: 'visible' }}>
        <defs>
            <radialGradient id='lampGlow' cx='50%' cy='50%' r='50%'>
                <stop offset='0%' stopColor={accent} stopOpacity={0.55} />
                <stop offset='100%' stopColor={accent} stopOpacity={0} />
            </radialGradient>
            <linearGradient id='lampHead' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='0%' stopColor='#FFD680' />
                <stop offset='100%' stopColor={accent} />
            </linearGradient>
            <linearGradient id='coneGrad' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='0%' stopColor={accent} stopOpacity={0.32} />
                <stop offset='100%' stopColor={accent} stopOpacity={0} />
            </linearGradient>
            <radialGradient id='groundGlow' cx='50%' cy='50%' r='50%'>
                <stop offset='0%' stopColor={accent} stopOpacity={0.45} />
                <stop offset='100%' stopColor={accent} stopOpacity={0} />
            </radialGradient>
            <linearGradient id='poleGrad' x1='0' y1='0' x2='1' y2='0'>
                <stop offset='0%' stopColor='#2A3242' />
                <stop offset='50%' stopColor='#4A5468' />
                <stop offset='100%' stopColor='#232A38' />
            </linearGradient>
        </defs>

        <style>{`
      @keyframes slPing { 0% { r: 4; opacity: 0.9; } 100% { r: 30; opacity: 0; } }
      @keyframes slGlow { 0%, 100% { opacity: 0.55; } 50% { opacity: 0.9; } }
      @keyframes slDot { 0%, 100% { opacity: 1; } 50% { opacity: 0.35; } }
      @keyframes slFlow { to { stroke-dashoffset: -24; } }
      .sl-ping { animation: slPing 2.4s cubic-bezier(0,0.4,0.6,1) infinite; }
      .sl-ping.sl-delay { animation-delay: 1.2s; }
      .sl-glow { animation: slGlow 4s ease-in-out infinite; }
      .sl-dot { animation: slDot 1.8s ease-in-out infinite; }
      .sl-connector { animation: slFlow 1.6s linear infinite; }
    `}</style>

        <circle className='sl-glow' cx='300' cy='72' r='90' fill='url(#lampGlow)' />
        <polygon points='300,84 244,318 362,318' fill='url(#coneGrad)' />
        <ellipse className='sl-glow' cx='303' cy='320' rx='85' ry='13' fill='url(#groundGlow)' />
        <ellipse cx='303' cy='322' rx='150' ry='4' fill='rgba(127,127,127,0.12)' />

        <rect x='212' y='316' width='36' height='10' rx='2' fill='#1B212D' stroke='rgba(255,255,255,0.16)' />
        <rect x='226' y='96' width='8' height='222' rx='2' fill='url(#poleGrad)' />
        <path d='M228,100 C232,78 262,66 296,72' fill='none' stroke='url(#poleGrad)' strokeWidth={7} strokeLinecap='round' />

        <ellipse cx='300' cy='66' rx='30' ry='15' fill='url(#lampHead)' />
        <ellipse cx='300' cy='60' rx='20' ry='7' fill='#FFF3D6' opacity={0.6} />

        <g>
            <rect x='206' y='176' width='30' height='22' rx='4' fill='#141B28' stroke='rgba(255,255,255,0.16)' />
            <rect x='211' y='181' width='20' height='4' rx='1.5' fill={cyan} opacity={0.7} />
            <rect x='211' y='188' width='12' height='4' rx='1.5' fill={green} opacity={0.7} />
            <path d='M236,178 L250,168' stroke='rgba(255,255,255,0.16)' strokeWidth={2} strokeLinecap='round' />
            <circle cx='250' cy='168' r='3' fill={cyan} />
            <circle className='sl-ping' cx='250' cy='168' r='4' fill='none' stroke={cyan} strokeWidth={2} />
            <circle className='sl-ping sl-delay' cx='250' cy='168' r='4' fill='none' stroke={cyan} strokeWidth={2} />
        </g>

        <path className='sl-connector' d='M320,60 C340,50 348,44 356,40' fill='none' stroke={accent} strokeWidth={1.2} strokeDasharray='3 3' opacity={0.55} />
        <g transform='translate(356,20)'>
            <rect x='0' y='0' width='72' height='42' rx='10' fill='rgba(10,14,20,0.82)' stroke={`${accent}66`} />
            <circle className='sl-dot' cx='14' cy='14' r='3.2' fill={accent} />
            <text x='24' y='12' fontSize='8.6' fontWeight='600' fill='#9AA4B5' letterSpacing='0.06em'>LUX LEVEL</text>
            <text x='10' y='32' fontSize='12.5' fontWeight='700' fontFamily="'JetBrains Mono', monospace" fill='#FFD680'>420 lx</text>
        </g>

        <path className='sl-connector' d='M253,168 C275,158 288,152 300,148' fill='none' stroke={cyan} strokeWidth={1.2} strokeDasharray='3 3' opacity={0.55} />
        <g transform='translate(300,128)'>
            <rect x='0' y='0' width='84' height='42' rx='10' fill='rgba(10,14,20,0.82)' stroke={`${cyan}66`} />
            <circle className='sl-dot' cx='14' cy='14' r='3.2' fill={cyan} />
            <text x='24' y='12' fontSize='8.6' fontWeight='600' fill='#9AA4B5' letterSpacing='0.06em'>SIGNAL</text>
            <text x='10' y='32' fontSize='12.5' fontWeight='700' fontFamily="'JetBrains Mono', monospace" fill='#7CD4FD'>95.1%</text>
        </g>

        <path className='sl-connector' d='M226,300 C190,290 150,282 120,276' fill='none' stroke={green} strokeWidth={1.2} strokeDasharray='3 3' opacity={0.55} />
        <g transform='translate(30,258)'>
            <rect x='0' y='0' width='90' height='42' rx='10' fill='rgba(10,14,20,0.82)' stroke={`${green}66`} />
            <circle className='sl-dot' cx='14' cy='14' r='3.2' fill={green} />
            <text x='24' y='12' fontSize='8.6' fontWeight='600' fill='#9AA4B5' letterSpacing='0.06em'>POWER</text>
            <text x='10' y='32' fontSize='12.5' fontWeight='700' fontFamily="'JetBrains Mono', monospace" fill='#6CE9A6'>230V · ON</text>
        </g>
    </svg>
)

export default StreetLightSVG