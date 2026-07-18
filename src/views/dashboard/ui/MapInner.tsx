// views/dashboard/ui/RealMapInner.tsx
'use client'

import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet'
import type { LatLngExpression, LatLngTuple } from 'leaflet'
import 'leaflet/dist/leaflet.css'

import type { LightStatus } from '@/types/light/types'

export interface MapPoint {
    id?: string
    label: string
    status: LightStatus
    lat: number
    lng: number
}

interface MapInnerProps {
    points: MapPoint[]
    height: number
    onColor: string
    offColor: string
    faultyColor: string
}

const statusLabel: Record<LightStatus, string> = {
    CONNECTED: 'Connected',
    OFFLINE: 'Offline',
    FAULTY: 'Faulty'
}

const MapInner = ({ points, height, onColor, offColor, faultyColor }: MapInnerProps) => {
    const colorFor = (status: LightStatus) =>
        status === 'CONNECTED' ? onColor : status === 'OFFLINE' ? offColor : faultyColor

    const center: LatLngTuple =
        points.length > 0
            ? [points.reduce((s, p) => s + p.lat, 0) / points.length, points.reduce((s, p) => s + p.lng, 0) / points.length]
            : [27.8974, 78.088]

    return (
        <MapContainer center={center as LatLngExpression} zoom={13} style={{ height, width: '100%' }} scrollWheelZoom={false}>
            <TileLayer
                url='https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
                attribution='&copy; OpenStreetMap contributors &copy; CARTO'
            />
            {points.map((p, i) => {
                const color = colorFor(p.status)
                const position: LatLngTuple = [p.lat, p.lng]
                return (
                    <CircleMarker
                        key={p.id ?? i}
                        center={position}
                        radius={7}
                        pathOptions={{ color, fillColor: color, fillOpacity: 0.85, weight: 2 }}
                    >
                        <Popup>
                            <strong>{p.label}</strong>
                            <br />
                            {statusLabel[p.status]}
                        </Popup>
                    </CircleMarker>
                )
            })}
        </MapContainer>
    )
}

export default MapInner