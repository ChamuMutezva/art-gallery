import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MapContainer, TileLayer, useMapEvents, Marker, Popup } from 'react-leaflet'
import LinkBtn from '../components/LinkBtn'
import Footer from './layouts/Footer'
import ArrowLeft from '../assets/icon-arrow-left.svg'


function Location() {

    gsap.registerPlugin(ScrollTrigger)
    const textRef = useRef(null)

    const [position, setPosition] = useState([51.505, -0.09])
    function LocationMarker() {

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
                <Popup>You are here!</Popup>
            </Marker>
        )
    }

    useEffect(() => {   

        gsap.fromTo(textRef.current,
            {
                autoAlpha: 0,
            },
            {
                autoAlpha: 1,
                scrollTrigger: {
                    trigger: textRef.current,
                    toggleActions: "play none none reverse",
                    start: "top bottom",
                    scrub: true,
                   
                }
            }

        )
        
    })


    return (
        <div className="location" tabIndex={-1}>
            <h1 className='sr-only'>Modern art gallery location centers </h1>
            <div className="map">
                <LinkBtn to="/" src={ArrowLeft} text="Back to home" mapBtn={true} />
                <MapContainer center={position} zoom={13} scrollWheelZoom={false} >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>
                            You are here.
                        </Popup>
                    </Marker>
                    <LocationMarker />
                </MapContainer>
            </div>
            <div className="location-address black-bg container">
                <div className="location-address-wrapper">
                    <h2 className="location-address-heading uppercase headings" ref={textRef}>Our location</h2>
                    <address className="address">
                        <h3 className="street uppercase headings">99 King Street</h3>
                        <span className="address-details">
                            <span className="city">Newport</span>
                            <span className="postal">RI 02840</span>
                            <span className="country">United States of America</span>
                        </span>
                        <p className="address-text">
                            Our newly opened gallery is located near the Edward King House on 99 King
                            Street, the Modern Art Gallery is free to all visitors and open seven days
                            a week from 8am to 9pm.
                        </p>
                    </address>
                </div>
            </div>
            <Footer locationFooter={true} />
        </div>
    )
}

export default Location
