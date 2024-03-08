import React, { useState, useEffect } from "react"
import Form from 'react-bootstrap/Form';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
const AutoComplete = ({ setLocation, setLat, setLng }) => {

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    callbackName: "YOUR_CALLBACK_NAME",
    requestOptions: {
      /* Define search scope here */
    },
    debounce: 300,
  });

  const ref = useOnclickOutside(() => {
    clearSuggestions();
  });

  const handleInput = (event) => {
    setValue(event.target.value)
  }

  const handleSelect = ({ description }) => () => {
      setValue(description, false);
      clearSuggestions();

      getGeocode({ address: description }).then((results) => {
        const { lat, lng } = getLatLng(results[0]);
        setLat(lat)
        setLng(lng)
        setLocation(results[0].formatted_address)
        console.log("📍 Coordinates: ", { lat, lng }, location)
      })
    }

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion

      return (
        <li style={{ color: "#D5E673" }} key={place_id} onClick={handleSelect(suggestion)} >
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      )
    })



  return (

    <Form.Group className="mb-3" controlId="event_location"  ref={ref}>
      <Form.Label>Location</Form.Label>
      <Form.Control 
      type='text'
      value={value}
      onChange={handleInput}
      placeholder="Where is your event" 
      disabled={!ready}
      />
      {status === "OK" && <ul>{renderSuggestions()}</ul>}
    </Form.Group>

  )

}

export default AutoComplete;