import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";

const TableRow = ({ cam }) => {
  const token = "4ApVMIn5sTxeW7GQ5VWeWiy";
  const { cameraData } = useContext(CameraContext);

  const statusHandler = async (status, id) => {
    const res = await axios.put(
      BASE_URL + "/update/camera/status",
      {
        id: id,
        status: status,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(status, id);
    console.log(res);
  };
  return (
    <tr>
      <td style={{ padding: "10px", textAlign: "left" }}>
        <input type="checkbox" />
      </td>
      <td style={{ padding: "10px", textAlign: "left" }}>
        <div>
          {cam?.current_status === "Online" ? <span>🟢</span> : <span>🔴</span>}
          <span>{cam?.name}</span>
        </div>
        <span style={{ color: "gray", fontSize: "10px" }}>
          sherwinwilliams@wobot.ai
        </span>
      </td>
      <td style={{ padding: "10px", textAlign: "left" }}>
        {cam?.health?.device}
      </td>
      <td style={{ padding: "10px", textAlign: "left" }}>{cam?.location}</td>
      <td style={{ padding: "10px", textAlign: "left" }}>{cam?.recorder}</td>
      <td style={{ padding: "10px", textAlign: "left" }}>{cam?.tasks}</td>
      <td style={{ padding: "10px", textAlign: "left" }}>
        <div
          className={
            cam?.status === "Active"
              ? "cam_status_active"
              : "cam_status_inactive"
          }
        >
          {cam?.status}
        </div>
      </td>
      <td>
        <div
          style={{
            // padding: "10px",
            marginLeft: "40px",
          }}
        >
          {cam?.status === "Active" ? (
            <div onClick={() => statusHandler("Inactive", cam?.id)}>
              <FontAwesomeIcon icon={faBan} />
            </div>
          ) : (
            <div onClick={() => statusHandler("Active", cam?.id)}>
              <FontAwesomeIcon icon={faCircleCheck} />
            </div>
          )}
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
