// types/light/types.ts

export type LightStatus = 'CONNECTED' | 'OFFLINE' | 'FAULTY'

export type SortKey = 'poleId' | 'lightId' | 'zone' | 'ward' | 'wattage' | 'status' | 'brightness'

export interface Light {
    poleId: string
    lightId: string
    location: string
    zone: string
    ward: string
    lightType: string
    wattage: number
    status: LightStatus
    brightness: number
    lastUpdate: string
    controller: string
    feeder: string
}

export interface LightPoint {
    id: string
    label: string
    status: LightStatus
    lat: number
    lng: number
    zone: string
    wattage: number
    energyToday: number
    lastSeen: string
}

export const statusMeta: Record<LightStatus, { label: string; colorKey: 'on' | 'signalLoss' | 'faulty' }> = {
    CONNECTED: { label: 'Online', colorKey: 'on' },
    OFFLINE: { label: 'Offline', colorKey: 'signalLoss' },
    FAULTY: { label: 'Faulty', colorKey: 'faulty' }
}

export const FAULTY_COLOR = '#f5a524'