import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const TableRow = ({cam}) => {
  console.log(cam);
  return (
    <tr>
      <td style={{ padding: "10px", textAlign: "left" }}>
        <input type="checkbox" />
      </td>
      <td style={{ padding: "10px", textAlign: "left" }}>{cam?.name}</td>
      <td style={{ padding: "10px", textAlign: "left" }}>
        {cam?.health?.device}
      </td>
      <td style={{ padding: "10px", textAlign: "left" }}>{cam?.location}</td>
      <td style={{ padding: "10px", textAlign: "left" }}>{cam?.recorder}</td>
      <td style={{ padding: "10px", textAlign: "left" }}>{cam?.tasks}</td>
      <td style={{ padding: "10px", textAlign: "left" }}>{cam?.status}</td>
      <td>
        <div
          style={{
            // padding: "10px",
            marginLeft: "40px",
          }}
        >
          {cam?.status === "Active" ? (
            <div>
              <FontAwesomeIcon icon={faBan} />
            </div>
          ) : (
            <div>
              <FontAwesomeIcon icon={faCircleCheck} />
            </div>
          )}
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
