import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";

const CivicInfo = () => {
    const [civicData, setCivicData] = useState(null);
    const [usersLocation, setUsersLocation] = useState("");
    const [civicOfficials, setCivicOfficials] = useState([]);
    const [pollingData, setPollingData] = useState(null);
    const googleApiKey = import.meta.env.VITE_X_GOOGLE_API_KEY;

    // usePlacesAutocomplete hook for address autocomplete
    const {
        ready,
        value,
        setValue,
        suggestions: { status, data },
        clearSuggestions,
    } = usePlacesAutocomplete({
        debounce: 300,
    });

    // Ref for the autocomplete dropdown to use with useOnclickOutside
    const ref = useOnclickOutside(() => {
        clearSuggestions();
    });

    // useEffect hook to geolocate the user and fetch their address
    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                const { latitude, longitude } = position.coords;
                try {
                    const results = await getGeocode({ location: { lat: latitude, lng: longitude } });
                    const address = results[0].formatted_address;
                    setUsersLocation(address);
                    setValue(address, false); // Sets the autocomplete input with the fetched address
                } catch (error) {
                    console.error("Error converting geolocation to address:", error);
                }
            }, (error) => {
                console.error("Error obtaining user location", error);
            });
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }, [setValue]);

    // useEffect hook for fetching civic and polling data based on the user's location
    useEffect(() => {
        const fetchData = async () => {
            if (usersLocation) {
                try {
                    // Fetch civic data
                    const civicUrl = `https://www.googleapis.com/civicinfo/v2/representatives?key=${googleApiKey}&address=${encodeURIComponent(usersLocation)}`;
                    const civicResponse = await axios.get(civicUrl);
                    setCivicData(civicResponse || [])
                    setCivicOfficials(civicResponse.data.officials || []);

                    // Fetch polling data
                    const pollingUrl = `https://www.googleapis.com/civicinfo/v2/voterinfo?address=${encodeURIComponent(usersLocation)}&key=${googleApiKey}`;
                    const pollingResponse = await axios.get(pollingUrl);
                    console.log(pollingResponse)
                    setPollingData(pollingResponse.data || null);
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            }
        };
        fetchData();
    }, [usersLocation, googleApiKey]);

    // Handlers for the autocomplete input
    const handleInput = (e) => {
        setValue(e.target.value);
    };

    const handleSelect = ({ description }) => () => {
        setValue(description, false);
        clearSuggestions();
        getGeocode({ address: description })
            .then((results) => {
                const { lat, lng } = getLatLng(results[0]);
                console.log("📍 Coordinates: ", { lat, lng });
                setUsersLocation(description);
            })
            .catch(error => {
                console.error("Error getting geocode:", error);
            });
    };

    // Render autocomplete suggestions
    const renderSuggestions = () => data.map((suggestion) => {
        const {
            place_id,
            structured_formatting: { main_text, secondary_text },
        } = suggestion;

        return (
            <li key={place_id} onClick={handleSelect(suggestion)} style={{ cursor: 'pointer', listStyleType: 'none' }}>
                <strong>{main_text}</strong> <small>{secondary_text}</small>
            </li>
        );
    });

    return (
        <div>
            <Form.Group className="mb-3" controlId="event_location" ref={ref}>
                <Form.Label>Address</Form.Label>
                <Form.Control
                    type="text"
                    value={value}
                    onChange={handleInput}
                    disabled={!ready}
                    placeholder="What's your address?"
                />
                {status === "OK" && <ul>{renderSuggestions()}</ul>}
            </Form.Group>
            <div>
                {civicOfficials.map((official, index) => (
                    <div key={index}>
                        <div>Party: {official.party}</div>
                        <div>Name: {official.name}</div>
                        <div>Email: {official.email ? official.email : 'N/A'}</div>
                        <div>Channel ID: {official.channels && official.channels.length > 0 ? official.channels[0].id : 'N/A'}</div>
                        <p>FOR MORE INFO: <a href={official.url ? official.url : '#'}>{official.url ? official.url : 'Unavailable'}</a></p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CivicInfo;
