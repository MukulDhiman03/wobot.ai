import React, { useContext, useEffect, useState } from "react";
import { CameraContext } from "../../App";
import TableRow from "./TableRow";
import TableShimmer from "../shimmerui/TableShimmer";
import Pagination from "./Pagination";
const Table = () => {
  const { filteredData } = useContext(CameraContext);
  const [currentPage, setCurrentPage] = useState(1);

  const [isLoading, setIsLoading] = useState(true);

  // shimmer ui logic
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  // calculation of no of items , to be shown in screen according to pagination
  const itemsPerPage = 10;
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredData.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (isLoading) return <TableShimmer />;
  if (filteredData.length === 0)
    return (
      <h1 style={{ textAlign: "center", marginTop: "5vh" }}>
        Nothing to show.
      </h1>
    );
  return (
    <div className="table_container">
      <div>
        <table>
          <thead>
            <tr>
              <td></td>
              <th>NAME</th>
              <th>HEALTH</th>
              <th>LOCATION</th>
              <th>RECORDER</th>
              <th>TASKS</th>
              <th>STATUS</th>
              <th>ACTIONS</th>
              <th>DELETE</th>
            </tr>
          </thead>

          {/* table row */}
          {currentItems.map((cam) => (
            <tbody key={cam.id}>
              <TableRow cam={cam} />
            </tbody>
          ))}
        </table>
        {/* pagination for table */}
        {filteredData.length > 0 && (
          <Pagination
            filteredData={filteredData}
            startIndex={startIndex}
            currentPage={currentPage}
            endIndex={endIndex}
            handlePrevPage={handlePrevPage}
            handleNextPage={handleNextPage}
          />
        )}
      </div>
    </div>
  );
};

export default Table;
