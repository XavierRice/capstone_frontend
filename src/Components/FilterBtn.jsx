/* eslint-disable no-unused-vars */
import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';

function FilterBtn() {
  return (
    <DropdownButton id="dropdown-basic-button" title="filter by">
      <Dropdown.Item href="#">Nearby</Dropdown.Item>
      <Dropdown.Item href="#">Online</Dropdown.Item>
      <Dropdown.Item href="#">All Events</Dropdown.Item>
      <Dropdown.Item href="#">News</Dropdown.Item>
      <Dropdown.Item href="#">Donations</Dropdown.Item>
    </DropdownButton>
  );
}

export default FilterBtn;
