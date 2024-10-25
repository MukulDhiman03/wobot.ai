import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { CameraContext } from "../../App";

const LocationInputWithDropdown = () => {
  const [isLocationDropdownOpen, setLocationDropdownOpen] = useState(false);
  const [isStatusDropdownOpen, setStatusDropdownOpen] = useState(false);
  const [currentLocation, setCurrentLocation] = useState("");
  const [currenStatus, setCurrentStatus] = useState("");

  const statuses = ["Active", "Inactive"];

  const { cameraData, setFilteredData } = useContext(CameraContext);

  // to filter the data according to the location filter
  const handleCurrentLocation = (location) => {
    if (location) {
      setCurrentLocation(location);
      const filterData = cameraData.filter(
        (camera) => camera.location === location
      );
      setFilteredData(filterData);
    }
  };

  // to filter the data according to the status filter
  const handleCurrentStatus = (status) => {
    if (status) {
      setCurrentStatus(status);
      const filterData = cameraData.filter(
        (camera) => camera.status === status
      );
      setFilteredData(filterData);
    }
  };

  // toggle to open and close the location drop down
  const toggleLocationDropdown = () => {
    setLocationDropdownOpen(!isLocationDropdownOpen);
    setStatusDropdownOpen(false);
  };

  // toggle to open and closue the status drop down
  const toggleStatusDropdown = () => {
    setStatusDropdownOpen(!isStatusDropdownOpen);
    setLocationDropdownOpen(false);
  };

  return (
    <div className="filter_container">
      {/* Location input field with dropdown */}
      <div className="location_container">
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

        <input
          className="location_input"
          type="text"
          placeholder="Location"
          value={currentLocation}
        />

        {isLocationDropdownOpen && (
          <ul className="location_dropdown">
            {cameraData.map((cam, index) => (
              <li
                key={index}
                style={{
                  padding: "8px 15px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  handleCurrentLocation(cam.location);
                  setLocationDropdownOpen(false);
                }}
              >
                {cam.location}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="status_container">
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
        <input
          className="status_input"
          value={currenStatus}
          type="text"
          placeholder="Status"
        />
     
        {isStatusDropdownOpen && (
          <ul className="status_dropdown">
            {statuses.map((status, index) => (
              <li
                key={index}
                style={{
                  padding: "8px 15px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  handleCurrentStatus(status);
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
