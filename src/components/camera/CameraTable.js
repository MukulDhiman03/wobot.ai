import React from "react";
import "./Camera.css";
import wobotImg from "../../wobot.png";
import Filters from "./Filters";
import Table from "./Table";
import TableHeader from "./TableHeader";

const CameraTable = () => {
  return (
    <div className="container">
      {/* logo */}
      <div className="logo">
        <img src={wobotImg} alt="wobotimg" />
      </div>
      {/* table header with search bar */}
      <TableHeader />
      <div>
        {/* table filters with location and status */}
        <Filters />
      </div>
      {/* table list for camera details*/}
      <div>
        <Table />
      </div>
    </div>
  );
};

export default CameraTable;
