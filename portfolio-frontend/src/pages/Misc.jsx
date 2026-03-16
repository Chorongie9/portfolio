import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Polyline, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const Misc = () => {
  const [runs, setRuns] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchRuns = async () => {
      try {
        const res = await fetch('http://localhost:3001/api/runs')
        if (!res.ok) {
          throw new Error(`Request failed: ${res.status}`)
        }
        const data = await res.json()
        setRuns(data)
      } catch (err) {
        setError(err.message || 'Failed to load runs')
      } finally {
        setLoading(false)
      }
    }

    fetchRuns()
  }, [])

  const formatDistance = (meters) =>
    (meters / 1000).toFixed(2)

  const formatPace = (avgSpeed) => {
    if (!avgSpeed) return '–'
    const paceSeconds = 1000 / avgSpeed
    const mins = Math.floor(paceSeconds / 60)
    const secs = Math.round(paceSeconds % 60)
    return `${mins}:${secs.toString().padStart(2, '0')} /km`
  }

  // very small polyline decoder (lat/lng pairs) adapted from Mapbox polyline
  const decodePolyline = (str) => {
    if (!str) return []
    let index = 0
    const len = str.length
    let lat = 0
    let lng = 0
    const coordinates = []

    while (index < len) {
      let result = 0
      let shift = 0
      let b
      do {
        b = str.charCodeAt(index++) - 63
        result |= (b & 0x1f) << shift
        shift += 5
      } while (b >= 0x20)
      const dlat = (result & 1) ? ~(result >> 1) : (result >> 1)
      lat += dlat

      result = 0
      shift = 0
      do {
        b = str.charCodeAt(index++) - 63
        result |= (b & 0x1f) << shift
        shift += 5
      } while (b >= 0x20)
      const dlng = (result & 1) ? ~(result >> 1) : (result >> 1)
      lng += dlng

      coordinates.push([lat * 1e-5, lng * 1e-5])
    }
    return coordinates
  }


  const FitBounds = ({ points }) => {
    const map = useMap()
    useEffect(() => {
      if (!points || points.length < 2) return
      const latLngs = points.map((p) => [p[0], p[1]])
      map.fitBounds(latLngs, { padding: [20, 20] })
    }, [points, map])
    return null
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-center font-bold text-3xl mb-2">misc</h1>
      <p className="text-center text-gray-500 mb-8">
        a couple of random things i added.
      </p>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          recent runs (strava)
        </h2>

        {loading && (
          <p className="text-center text-gray-500">loading runs...</p>
        )}

        {error && (
          <p className="text-center text-red-500">
            {error}
          </p>
        )}

        {!loading && !error && runs.length === 0 && (
          <p className="text-center text-gray-500">
            no runs found.
          </p>
        )}

        {!loading && !error && runs.length > 0 && (
          <div className="space-y-4">
            {/* simple distance scale for visual context */}
            <ul className="space-y-3">
              {runs.map((run) => {
                const distanceKm = Number(formatDistance(run.distance))
                const barWidth = Math.min((distanceKm / 15) * 100, 100) // assume ~15km max for scale
                const decoded = decodePolyline(run.summary_polyline)

                return (
                  <li
                    key={run.id}
                    className="rounded-xl border border-orange-200/80 bg-white/80 dark:bg-zinc-900/80 dark:border-orange-500/30 p-4 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-baseline justify-between gap-4">
                      <div>
                        <p className="font-semibold">
                          {run.name || 'Run'}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-zinc-400">
                          {new Date(run.start_date).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="text-right text-sm text-gray-700 dark:text-zinc-100">
                        <p className="font-medium">
                          {distanceKm} km
                        </p>
                        <p className="text-xs text-orange-500 dark:text-orange-300">
                          {formatPace(run.average_speed)}
                        </p>
                      </div>
                    </div>

                    {/* full map preview */}
                    {decoded && decoded.length > 1 && (
                      <div className="mt-3 h-56 rounded-lg overflow-hidden border border-orange-200/70 dark:border-orange-500/30">
                        <MapContainer
                          className="w-full h-full"
                          center={[decoded[0][0], decoded[0][1]]}
                          zoom={13}
                          scrollWheelZoom={false}
                          zoomControl={false}
                          attributionControl={false}
                          dragging={false}
                          doubleClickZoom={false}
                          keyboard={false}
                        >
                          <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution="&copy; OpenStreetMap"
                          />
                          <FitBounds points={decoded} />
                          <Polyline
                            positions={decoded.map(([lat, lng]) => [lat, lng])}
                            pathOptions={{
                              color: '#FC4C02',
                              weight: 4,
                            }}
                          />
                        </MapContainer>
                      </div>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
        )}
      </section>
    </div>
  )
}
export default Misc