import React, { useContext, useEffect, useState } from "react";
import { CameraContext } from "../../App";
import TableRow from "./TableRow";
import TableShimmer from "../shimmerui/TableShimmer";
const Table = () => {
  const { filteredData } = useContext(CameraContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

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
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsDropdownOpen(false);
  };
  if (isLoading) return <TableShimmer />;
  if (filteredData.length === 0)
    return (
      <h1 style={{ textAlign: "center", marginTop: "5vh" }}>Nothing to show</h1>
    );
  return (
    <div className="table_container">
      <div>
        <table>
          <thead>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <th>NAME</th>
              <th>HEALTH</th>
              <th>LOCATION</th>
              <th>RECORDER</th>
              <th>TASKS</th>
              <th>STATUS</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          {currentItems.map((cam) => (
            <tbody key={cam.id}>
              <TableRow cam={cam} />
            </tbody>
          ))}
        </table>
        {/* pagination for table */}
        {filteredData.length > 0 && (
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
        )}
      </div>
    </div>
  );
};

export default Table;
