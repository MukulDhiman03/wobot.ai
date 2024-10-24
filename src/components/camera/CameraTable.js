import React from "react";
import "./Camera.css";
import wobotImg from "../../wobot.png";
import Filters from "./Filters";
import Table from "./Table";
import TableHeader from "./TableHeader";

const CameraTable = () => {
  return (
    <div className="container">
      <div className="logo">
        <img src={wobotImg} alt="wobotimg" />
      </div>
      {/* table header */}
      <TableHeader />
      <div>
        {/* table filters */}
        <Filters />
      </div>
      {/* table list*/}
      <div>
        <Table />
      </div>
    </div>
  );
};

export default CameraTable;
