import { useState, useEffect, useCallback, memo } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

import Loader from '../Loader/Loader';

const containerStyle = {
    width: '100%',
    height: '400px',
};

const LocationMap = ({ address }) => {

    const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: googleMapsApiKey,
    });

    const [map, setMap] = useState(null);
    const [center, setCenter] = useState(null);

    // Геокодування адреси при завантаженні
    useEffect(() => {
        if (!isLoaded || !address) return;

        const geocoder = new window.google.maps.Geocoder();
        geocoder.geocode({ address }, (results, status) => {
            if (status === 'OK' && results[0]) {
                const { location } = results[0].geometry;
                setCenter({
                    lat: location.lat(),
                    lng: location.lng(),
                });
            } else {
                console.error('Geocode error: ', status);
            }
        });
    }, [isLoaded, address]);

    const onLoad = useCallback((mapInstance) => {
        setMap(mapInstance);
    }, []);

    const onUnmount = useCallback(() => {
        setMap(null);
    }, []);

    if (!isLoaded || !center) return <Loader />

    return (
        <>
            {isLoaded ? (
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
                    </GoogleMap>
                </div>
            ) : (
                <Loader />
            )}
        </>
    )
};

export default memo(LocationMap);