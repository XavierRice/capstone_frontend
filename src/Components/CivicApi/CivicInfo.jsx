import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";

const CivicInfo = () => {

    const [userAddress, setUserAddress] = useState({});
    const [usersLocation, setUsersLocation] = useState(null);
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
    const [civicData, setCivicData] = useState(null)
    const [civicOfficials, setCivicOfficials] = useState(null)
    const [civicOffices, setCivicOffices] = useState(null)
    const googlekey = import.meta.env.VITE_X_GOOGLE_API_KEY
    const url = `https://www.googleapis.com/civicinfo/v2/representatives?key=${googlekey}&address=${userAddress}`;



    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setLat(latitude);
                    setLng(longitude)
                    getGeocode({ location: { lat: latitude, lng: longitude } })
                        .then((results) => {
                            const address = results[0].formatted_address;
                            setUsersLocation(address);
                            setValue(address); // Update autocomplete input with the geolocated address
                            setUserAddress(address)
                        })
                        .catch((error) => {
                            console.error("Error converting geolocation to address:", error);
                        });
                },
                (error) => {
                    console.error("Error obtaining user location", error);
                }
            );
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }, []);


    useEffect(() => {
        const url = `https://www.googleapis.com/civicinfo/v2/representatives?key=${googlekey}&address=${encodeURIComponent(usersLocation)}`;
        if (usersLocation) {
            axios.get(url)
                .then(response => {
                    console.log('the api data:', response);
                    const data = response.data
                    setCivicData(data)
                    setCivicOfficials(data.officials)
                    setCivicOffices(data.offices)

                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }
    }, [usersLocation])

    const {
        ready,
        value,
        suggestions: { status, data },
        setValue,
        clearSuggestions,
    } = usePlacesAutocomplete({
        requestOptions: {
            /* Define search scope here */
        },
        debounce: 300,
    });

    const ref = useOnclickOutside(() => {
        clearSuggestions();
    });

    const handleInput = (e) => {
        setValue(e.target.value);
    };

    const handleSelect = ({ description }) => () => {
        setValue(description, false);
        clearSuggestions();

        getGeocode({ address: description })
            .then((results) => {
                const { lat, lng } = getLatLng(results[0]);
                setLat(lat);
                setLng(lng);
                setUsersLocation(description);
                console.log("📍 Coordinates: ", { lat, lng });
            });
    };

    console.log(`The lat: ${lat}, the lng: ${lng}, and location :${value}`);

    const renderSuggestions = () =>
        data.map((suggestion) => {
            const {
                place_id,
                structured_formatting: { main_text, secondary_text },
            } = suggestion;

            return (
                <li className="dropdown-item-hover" style={{ color: "#D5E673" }} key={place_id} onClick={handleSelect(suggestion)} >
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
                    placeholder="What's your address?"
                    disabled={!ready}
                />
                {status === "OK" && <ul>{renderSuggestions()}</ul>}
            </Form.Group>
            <div>
                {civicOffices && civicOfficials.map((official, index) => (
                    <div key={index}>
                        {/* <h4>{}</h4>  */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CivicInfo;
