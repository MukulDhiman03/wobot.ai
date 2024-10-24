import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const TableHeader = () => {
  return (
    <div>
      <div className="search_container">
        <h1>Cameras</h1>
        <div className="search_input">
          <input type="text" placeholder="Search" />
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
