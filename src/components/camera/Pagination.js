import React, { useContext, useEffect, useState } from "react";

const Pagination = ({
  filteredData,
  startIndex,
  endIndex,
  handlePrevPage,
  handleNextPage,
}) => {
  return (
    <div className="pagination">
      <p>
        {startIndex + 1}-{Math.min(endIndex, filteredData.length)} of{" "}
        {filteredData.length}
      </p>
      <div onClick={handlePrevPage} style={{ cursor: "pointer" }}>
        {"<<"}
      </div>
      <div onClick={handlePrevPage} style={{ cursor: "pointer" }}>
        {"<"}
      </div>
      <div onClick={handleNextPage} style={{ cursor: "pointer" }}>
        {">"}
      </div>
      <div onClick={handleNextPage} style={{ cursor: "pointer" }}>
        {">>"}
      </div>
    </div>
  );
};

export default Pagination;
