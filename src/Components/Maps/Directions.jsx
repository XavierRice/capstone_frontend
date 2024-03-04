import React, {useState, useEffect } from 'react';
import {
    useMapsLibrary,
    useMap
} from "@vis.gl/react-google-maps"

const Directions = ({destination}) => {
    const map = useMap();
    const routesLibrary = useMapsLibrary("routes")
    const [directionService, setDirectionService] = useState()
    const [directionsRenderer, setDirectionsRenderer] = useState()
    const [routes, setRoutes] = useState([])
    const [routeIndex, setRouteIndex] = useState(0)

    const selected = routes[routeIndex]
    const leg = selected?.legs[0]

    useEffect(() => {
        if(!routesLibrary || !map) return;
        setDirectionService(new routesLibrary.DirectionsService())
        setDirectionsRenderer(new routesLibrary.DirectionsRenderer({ map }))
    }, [routesLibrary, map])

    useEffect(()=> {
        if( !directionService || !directionsRenderer) return;

        directionService.route({
            origin: "21702 w. 53 Terrace, Shawnee Ks",
            destination: "4934 Briar St, Roeland Park Ks",
            travelMode: google.maps.TravelMode.DRIVING,
            provideRouteAlternatives: true,
        }).then(response => {
            directionsRenderer.setDirections(response) 
            setRoutes(response.routes)      
         });
    }, [directionService, directionsRenderer])

    if (!leg) return null
    return (
        <div className='direction'>
            <h3>{selected.summary}</h3>
        </div>
    );
};

export default Directions;