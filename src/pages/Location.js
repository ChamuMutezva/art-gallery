import { useState } from 'react'
import { MapContainer, TileLayer,useMapEvents, Marker, Popup  } from 'react-leaflet'


function Location() {
     const position = [51.505, -0.09]
     function LocationMarker() {
        const [position, setPosition] = useState(null)
        const map = useMapEvents({
          click() {
            map.locate()
          },
          locationfound(e) {
            setPosition(e.latlng)
            map.flyTo(e.latlng, map.getZoom())
          },
        })
      
        return position === null ? null : (
          <Marker position={position}>
            <Popup>You are here</Popup>
          </Marker>
        )
      }
     

    return (
        <div id="map">
            <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: "30rem" }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
    
              <LocationMarker />
            </MapContainer>
        </div>
    )
}

export default Location
