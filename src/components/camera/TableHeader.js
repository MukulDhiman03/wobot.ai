import React, { useContext, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { CameraContext } from "../../App";

const TableHeader = () => {
  const { cameraData, setFilteredData } = useContext(CameraContext);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    if (searchInput.trim() === "") {
      setFilteredData(cameraData);
    } else {
      const filtered = cameraData.filter(
        (camera) =>
          camera.name.toLowerCase().includes(searchInput.toLowerCase()) ||
          camera.location.toLowerCase().includes(searchInput.toLowerCase())
      );
      setFilteredData(filtered);
    }
  }, [searchInput]);
  return (
    <div>
      <div className="search_container">
        <h1>Cameras</h1>
        <div className="search_input">
          <input
            value={searchInput}
            type="text"
            placeholder="Search"
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button className="search-icon-button">
            <FontAwesomeIcon icon={faSearch} className="fa-search" />
          </button>
        </div>
      </div>
      <p>Manage Your cameras here.</p>
    </div>
  );
};

export default TableHeader;
