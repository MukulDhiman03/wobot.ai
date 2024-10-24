import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

const LocationInputWithDropdown = () => {
  const [isLocationDropdownOpen, setLocationDropdownOpen] = useState(false);
  const [isStatusDropdownOpen, setStatusDropdownOpen] = useState(false);

  const locations = ["New York", "Los Angeles", "Chicago", "San Francisco"];
  const statuses = ["Active", "Inactive", "Pending", "Completed"];

  const toggleLocationDropdown = () => {
    setLocationDropdownOpen(!isLocationDropdownOpen);
    setStatusDropdownOpen(false); 
  };

  const toggleStatusDropdown = () => {
    setStatusDropdownOpen(!isStatusDropdownOpen);
    setLocationDropdownOpen(false); 
  };

  return (
    <div style={{ display: "flex", position: "relative", marginTop: "2vh" }}>
      {/* Location input field with dropdown */}
      <div style={{ width: "15vw", position: "relative", marginRight: "15px" }}>
        {/* Location icon on the left side */}
        <FontAwesomeIcon
          icon={faMapMarkerAlt}
          style={{
            position: "absolute",
            left: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            color: "#888",
          }}
        />
        {/* Dropdown icon on the right side */}
        <FontAwesomeIcon
          icon={faChevronDown}
          style={{
            position: "absolute",
            right: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            color: "#888",
            cursor: "pointer", 
          }}
          onClick={toggleLocationDropdown} 
        />
        {/* Location input field */}
        <input
          type="text"
          placeholder="Location"
          style={{
            paddingLeft: "35px",
            paddingRight: "35px",
            height: "35px",
            width: "100%",
          }}
        />
        {/* Location dropdown list */}
        {isLocationDropdownOpen && (
          <ul
            style={{
              position: "absolute",
              top: "40px",
              left: "0",
              width: "100%",
              backgroundColor: "white",
              border: "1px solid #ccc",
              listStyleType: "none",
              padding: "10px 0",
              margin: "0",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              zIndex: 10,
            }}
          >
            {locations.map((location, index) => (
              <li
                key={index}
                style={{
                  padding: "8px 15px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  alert(`You selected: ${location}`);
                  setLocationDropdownOpen(false); 
                }}
              >
                {location}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Status input field with dropdown */}
      <div style={{ width: "10vw", position: "relative" }}>
        {/* Location icon on the left side */}
        <FontAwesomeIcon
          icon={faMapMarkerAlt}
          style={{
            position: "absolute",
            left: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            color: "#888",
          }}
        />
        {/* Dropdown icon on the right side */}
        <FontAwesomeIcon
          icon={faChevronDown}
          style={{
            position: "absolute",
            right: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            color: "#888",
            cursor: "pointer", 
          }}
          onClick={toggleStatusDropdown} 
        />
        {/* Status input field */}
        <input
          type="text"
          placeholder="Status"
          style={{
            paddingLeft: "35px",
            paddingRight: "35px",
            height: "35px",
            width: "100%",
          }}
        />
        {/* Status dropdown list */}
        {isStatusDropdownOpen && (
          <ul
            style={{
              position: "absolute",
              top: "40px",
              left: "0",
              width: "100%",
              backgroundColor: "white",
              border: "1px solid #ccc",
              listStyleType: "none",
              padding: "10px 0",
              margin: "0",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              zIndex: 10,
            }}
          >
            {statuses.map((status, index) => (
              <li
                key={index}
                style={{
                  padding: "8px 15px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  alert(`You selected: ${status}`);
                  setStatusDropdownOpen(false); 
                }}
              >
                {status}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default LocationInputWithDropdown;
