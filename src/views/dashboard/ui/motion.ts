'use client'

import type { Variants } from 'framer-motion'

// Page-level: staggers direct children (sections/rows) as they mount or scroll into view
export const staggerContainer: Variants = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.09, delayChildren: 0.04 }
    }
}

// A single card/grid-item entrance — fade + rise + slight scale, spring-eased
export const fadeUpItem: Variants = {
    hidden: { opacity: 0, y: 28, scale: 0.97 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: 'spring', stiffness: 260, damping: 24, mass: 0.7 }
    }
}

// For rows inside a card (alarms, rankings, location list, status rows)
export const listStagger: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.055, delayChildren: 0.02 } }
}

export const listItem: Variants = {
    hidden: { opacity: 0, x: -18, scale: 0.97 },
    show: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: { type: 'spring', stiffness: 320, damping: 26 }
    },
    exit: {
        opacity: 0,
        x: 18,
        scale: 0.97,
        transition: { duration: 0.16, ease: 'easeIn' }
    }
}

// Hover/tap physics for whole cards
export const cardHoverProps = {
    whileHover: { y: -6, scale: 1.012, transition: { type: 'spring' as const, stiffness: 320, damping: 20 } },
    whileTap: { scale: 0.994 }
}

// Hover/tap physics for small interactive tiles (Quick Actions)
export const tileHoverProps = {
    whileHover: { y: -5, scale: 1.035, transition: { type: 'spring' as const, stiffness: 380, damping: 18 } },
    whileTap: { scale: 0.93 }
}

// Icon pop used inside hovered tiles/rows
export const iconPop = {
    rest: { scale: 1, rotate: 0 },
    hover: { scale: 1.12, rotate: -4, transition: { type: 'spring' as const, stiffness: 400, damping: 12 } }
}

// Scroll-reveal helper props (use for sections lower on the page)
export const revealOnScroll = {
    initial: 'hidden' as const,
    whileInView: 'show' as const,
    viewport: { once: true, amount: 0.2 }
}

// Continuous pulse for "LIVE" / critical indicators
export const pulseRing: Variants = {
    show: {
        scale: [1, 1.9],
        opacity: [0.7, 0],
        transition: { duration: 1.6, repeat: Infinity, ease: 'easeOut' }
    }
}