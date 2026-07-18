// views/dashboard/ui/IconSprite.tsx
'use client'

const IconSprite = () => (
    <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden focusable={false}>
        <defs>
            <symbol id='icon-router' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={1.8} strokeLinecap='round' strokeLinejoin='round'>
                <path d='M12 20v-3.2' />
                <circle cx='12' cy='14.5' r='1.8' />
                <path d='M8.8 11.3a4.5 4.5 0 0 1 6.4 0' />
                <path d='M5.8 8.3a8.7 8.7 0 0 1 12.4 0' />
            </symbol>
            <symbol id='icon-wifi' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={1.8} strokeLinecap='round' strokeLinejoin='round'>
                <path d='M2.5 8.5a15 15 0 0 1 19 0' />
                <path d='M5.3 12.2a10.5 10.5 0 0 1 13.4 0' />
                <path d='M8.3 15.8a6 6 0 0 1 7.4 0' />
                <circle cx='12' cy='19' r='1.1' fill='currentColor' stroke='none' />
            </symbol>
            <symbol id='icon-signal-off' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={1.8} strokeLinecap='round' strokeLinejoin='round'>
                <path d='M3 3l18 18' />
                <path d='M5.3 12.2a10.5 10.5 0 0 1 9-3' />
                <path d='M17.3 10.7a10.5 10.5 0 0 1 1.4.9' />
                <path d='M8.3 15.8a6 6 0 0 1 5.6-1.6' />
                <circle cx='12' cy='19' r='1.1' fill='currentColor' stroke='none' />
            </symbol>
            <symbol id='icon-toggle-on' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={1.8} strokeLinecap='round' strokeLinejoin='round'>
                <rect x='2' y='7' width='20' height='10' rx='5' />
                <circle cx='16' cy='12' r='3' fill='currentColor' stroke='none' />
            </symbol>
            <symbol id='icon-toggle-off' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={1.8} strokeLinecap='round' strokeLinejoin='round'>
                <rect x='2' y='7' width='20' height='10' rx='5' />
                <circle cx='8' cy='12' r='3' fill='currentColor' stroke='none' />
            </symbol>
            <symbol id='icon-bulb' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={1.8} strokeLinecap='round' strokeLinejoin='round'>
                <path d='M9 18.2h6' />
                <path d='M10 21h4' />
                <path d='M12 3a6 6 0 0 0-3.8 10.6c.5.5.8 1.2.8 2h6c0-.8.3-1.5.8-2A6 6 0 0 0 12 3Z' />
            </symbol>
            <symbol id='icon-bulb-flash' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={1.8} strokeLinecap='round' strokeLinejoin='round'>
                <path d='M9 18.2h6' />
                <path d='M10 21h4' />
                <path d='M12 4.4a5.6 5.6 0 0 0-3.6 9.9c.5.5.8 1.1.8 1.9h5.6c0-.8.3-1.4.8-1.9A5.6 5.6 0 0 0 12 4.4Z' />
                <path d='M12 1v1.4M4.6 4.6l1 1M19.4 4.6l-1 1' />
            </symbol>
            <symbol id='icon-bulb-off' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={1.8} strokeLinecap='round' strokeLinejoin='round'>
                <path d='M9 18.2h6' opacity={0.5} />
                <path d='M10 21h4' opacity={0.5} />
                <path d='M12 3a6 6 0 0 0-3.8 10.6c.5.5.8 1.2.8 2h6c0-.8.3-1.5.8-2A6 6 0 0 0 12 3Z' opacity={0.5} />
                <path d='M3.5 3.5l17 17' />
            </symbol>
            <symbol id='icon-bolt' viewBox='0 0 24 24' fill='currentColor' stroke='none'>
                <path d='M13 2 4 14h6l-1 8 9-12h-6l1-8Z' />
            </symbol>
        </defs>
    </svg>
)

export default IconSprite