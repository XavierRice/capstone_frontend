import React, {useState, useEffect } from 'react';
import {
    useMapsLibrary,
    useMap
} from "@vis.gl/react-google-maps"

const Directions = ({destination, desLat, desLng}) => {
    const map = useMap();
    const routesLibrary = useMapsLibrary("routes")
    const [directionService, setDirectionService] = useState()
    const [directionsRenderer, setDirectionsRenderer] = useState()
    const [userLocation, setUserLocation] = useState(null);
    const [routes, setRoutes] = useState([])
    const [routeIndex, setRouteIndex] = useState(0)

    const selected = routes[routeIndex]
    const leg = selected?.legs[0]

    useEffect(() => {
        if ("geolocation" in navigator) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              console.log(position.coords.latitude, position.coords.longitude);
              const { latitude, longitude } = position.coords;
              setUserLocation({ lat: latitude, lng: longitude });
            },
            (error) => {
              console.error("Error obtaining user location", error);
            }
          );
        } else {
          console.log("Geolocation is not working.");
        }
      }, []);


    useEffect(() => {
        if(!routesLibrary || !map) return;
        const ds = new routesLibrary.DirectionsService()
        const dr = new routesLibrary.DirectionsRenderer({ map })
        setDirectionService(ds);
        setDirectionsRenderer(dr);
    }, [routesLibrary, map])

    useEffect(()=> {
        if( !directionService || !directionsRenderer || !userLocation) return;

        const origin = `${userLocation.lat}, ${userLocation.lng}`;
        const destinationLatLng = `${desLat}, ${desLng}`;

        directionService.route({
            origin,
            destination: destinationLatLng,
            travelMode: google.maps.TravelMode.DRIVING,
            provideRouteAlternatives: true,
        }).then(response => {
            directionsRenderer.setDirections(response) 
            setRoutes(response.routes)      
         }).catch(err => {
            console.error("failed to fetch directions", err)
         });
    }, [directionService, directionsRenderer, userLocation, desLat, desLng])



    if (!leg) return null
    return (
        <div className='direction'>
        </div>
    );
};

export default Directions;