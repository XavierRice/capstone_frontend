import React, {useEffect, useState} from 'react';
import {
    APIProvider,
    Map,
    useMapsLibrary,
    useMap
} from "@vis.gl/react-google-maps"

const GoogleMap = ({lat, lng}) => {
    const GoogleKey = import.meta.env.VITE_X_GOOGLE_API_KEY
    const position = { lat: 43.6532, lng: -79.3832}

    return (
        <div style={{height: '80vh', width: "100%"}}>
            <APIProvider apiKey={GoogleKey}>
                <Map
                center={position}
                zoom={9}
                mapId={import.meta.env.VITE_GOOGLE_MAP_ID}
                ></Map>
            </APIProvider>
        </div>
    );
};

export default GoogleMap;