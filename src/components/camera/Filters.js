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
  const [currentStatus, setCurrentStatus] = useState("");

  const statuses = ["Active", "Inactive"];
  const { cameraData, setFilteredData } = useContext(CameraContext);

  // to filter the data according to the location filter
  const handleCurrentLocation = (location) => {
    setCurrentLocation(location || "");
    if (location) {
      const filterData = cameraData.filter(
        (camera) => camera.location === location
      );
      setFilteredData(filterData);
    } else {
      setFilteredData(cameraData);
    }
  };

  // to filter the data according to the status filter
  const handleCurrentStatus = (status) => {
    setCurrentStatus(status || "");
    if (status) {
      const filterData = cameraData.filter(
        (camera) => camera.status === status
      );
      setFilteredData(filterData);
    } else {
      setFilteredData(cameraData);
    }
  };

  // toggle to open and close the location drop down
  const toggleLocationDropdown = () => {
    setLocationDropdownOpen(!isLocationDropdownOpen);
    setStatusDropdownOpen(false);
  };

  // toggle to open and close the status drop down
  const toggleStatusDropdown = () => {
    setStatusDropdownOpen(!isStatusDropdownOpen);
    setLocationDropdownOpen(false);
  };

  return (
    <div className="filter_container">
      {/* location drop down */}
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
        />

        <input
          className="location_input"
          type="text"
          placeholder="Location"
          value={currentLocation}
          onClick={toggleLocationDropdown}
          readOnly
        />

        {isLocationDropdownOpen && (
          <ul className="location_dropdown">
            <li
              style={{
                padding: "8px 15px",
                cursor: "pointer",
              }}
              onClick={() => {
                handleCurrentLocation("");
                setLocationDropdownOpen(false);
              }}
            >
              All
            </li>
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

      {/* status drop down */}
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
        />
        <input
          className="status_input"
          value={currentStatus}
          type="text"
          placeholder="Status"
          onClick={toggleStatusDropdown}
          readOnly
        />

        {isStatusDropdownOpen && (
          <ul className="status_dropdown">
            <li
              style={{
                padding: "8px 15px",
                cursor: "pointer",
              }}
              onClick={() => {
                handleCurrentStatus("");
                setStatusDropdownOpen(false);
              }}
            >
              All
            </li>
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
