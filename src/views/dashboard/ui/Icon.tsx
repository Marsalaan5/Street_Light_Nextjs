// views/dashboard/ui/Icon.tsx
'use client'

interface IconProps {
    name: string
    size?: number
    className?: string
}

const Icon = ({ name, size = 18, className }: IconProps) => (
    <svg width={size} height={size} className={className} style={{ display: 'block' }}>
        <use href={`#icon-${name}`} />
    </svg>
)

export default Icon