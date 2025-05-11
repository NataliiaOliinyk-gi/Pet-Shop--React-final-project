import { useState, useEffect, useCallback, memo, useRef } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';


const containerStyle = {
    width: '100%',
    height: '400px',
};

const libraries = ['places'];
// const libraries = ['maps', 'marker']

const LocationMap = ({ address }) => {

    const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: googleMapsApiKey,
        libraries: libraries,
        version: 'beta'
    });

    const [map, setMap] = useState(null);
    const [center, setCenter] = useState(null);
    const markerContentRef = useRef(null);

    // Геокодування адреси при завантаженні
    useEffect(() => {
        if (!isLoaded || !address) return;

        const geocoder = new window.google.maps.Geocoder();
        geocoder.geocode({ address }, (results, status) => {
            if (status === 'OK' && results[0]) {
                const location = results[0].geometry.location;
                setCenter({
                    lat: location.lat(),
                    lng: location.lng(),
                });
            } else {
                console.error('Geocode error: ', status);
            }
        });
    }, [isLoaded, address]);

    // Додаємо AdvancedMarkerElement вручну
    useEffect(() => {
        if (!map || !center || !window.google?.maps?.marker?.AdvancedMarkerElement) return;

        const marker = new window.google.maps.marker.AdvancedMarkerElement({
            map,
            position: center,
            content: markerContentRef.current,
        });

        return () => {
            if (marker.map) marker.map = null; // очищення
        };
    }, [map, center]);

    const onLoad = useCallback((mapInstance) => {
        setMap(mapInstance);
    }, []);

    const onUnmount = useCallback(() => {
        setMap(null);
    }, []);


    if (!isLoaded || !center) {
        return <p>Loading map...</p>;
    }

    return (

        <>
            {
                isLoaded ? (
                    <div>
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={center}
                            zoom={15}
                            onLoad={onLoad}
                            onUnmount={onUnmount}
                            options={{
                                mapId: 'ba0e6088b35bf1d52bcedee2'
                            }}
                        >

                            <Marker position={center} />
                            {/* AdvancedMarker додається вручну через useEffect */}

                        </GoogleMap>

                        {/* Рендеримо маркерний DOM-елемент поза картою */}
                        {/* <div
                            ref={markerContentRef}
                            style={{
                                backgroundColor: 'red',
                                width: '20px',
                                height: '20px',
                                borderRadius: '50%',
                                border: '2px solid white',
                                display: 'none'
                            }}
                        /> */}

                    </div>
                ) : (
                    <p>Loading map...</p>
                )
            }
        </>
    )
};

export default memo(LocationMap);