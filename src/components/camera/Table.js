import React, { useContext, useState } from "react";
import { CameraContext } from "../../App";
import TableRow from "./TableRow";

const Table = () => {
  const { filteredData, setFilteredData } = useContext(CameraContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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

  return (
    <div style={{ marginTop: "10px" }}>
      <div>
        <h2>Sample Table</h2>
        <div style={{ padding: "14px" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
            }}
          >
            <thead style={{ color: "gray" }}>
              <tr>
                <td style={{ padding: "10px", textAlign: "left" }}>
                  <input type="checkbox" />
                </td>
                <th
                  style={{
                    padding: "10px",
                    textAlign: "left",
                  }}
                >
                  NAME
                </th>
                <th
                  style={{
                    padding: "10px",
                    textAlign: "left",
                  }}
                >
                  HEALTH
                </th>
                <th
                  style={{
                    padding: "10px",
                    textAlign: "left",
                  }}
                >
                  LOCATION
                </th>
                <th
                  style={{
                    padding: "10px",
                    textAlign: "left",
                  }}
                >
                  RECORDER
                </th>
                <th
                  style={{
                    padding: "10px",
                    textAlign: "left",
                  }}
                >
                  TASKS
                </th>
                <th
                  style={{
                    padding: "10px",
                    textAlign: "left",
                  }}
                >
                  STATUS
                </th>
                <th
                  style={{
                    padding: "10px",
                    textAlign: "left",
                  }}
                >
                  ACTIONS
                </th>
              </tr>
            </thead>
            {currentItems.map((cam) => (
              <tbody key={cam.id}>
                <TableRow cam={cam} />
              </tbody>
            ))}
          </table>
          <div className="pagination">
            {/* <div>^ {totalPages}</div> */}
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
        </div>
      </div>
    </div>
  );
};

export default Table;
