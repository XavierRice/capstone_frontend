import React, { useEffect, useState } from 'react';
import Directions from './Directions';
import {
    APIProvider,
    Map,
    useMapsLibrary,
    useMap
} from "@vis.gl/react-google-maps"

const GoogleMap = ({ location, lat, lng }) => {
    const latitude = Number(lat)
    const longitude = Number(lng)

    console.log(latitude, longitude)

    const GoogleKey = import.meta.env.VITE_X_GOOGLE_API_KEY
    const position = { lat: latitude, lng: longitude }

    return (
        <div style={{ height: '80vh', width: "100%" }}>
            <APIProvider apiKey={GoogleKey}>
                <Map
                    center={position}
                    zoom={12}
                    mapId={import.meta.env.VITE_GOOGLE_MAP_ID}
                >
                    <Directions destination={location} desLat={latitude} desLng={longitude}/>
                </Map>
            </APIProvider>
        </div>
    );
};

export default GoogleMap;