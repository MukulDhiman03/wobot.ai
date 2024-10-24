import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const TableHeader = () => {
  return (
    <div className="main_section">
      <div className="left">
        <div>
          <h1>Cameras</h1>
        </div>
        <div style={{ position: "relative" }}>
          <input type="text" placeholder="search" />
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
