import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";
import { CameraContext } from "../../App";

const TableRow = ({ cam }) => {
  const token = "4ApVMIn5sTxeW7GQ5VWeWiy";
  const { cameraData, setCameraData } = useContext(CameraContext);

  const statusHandler = async (status, id) => {
    try {
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
      setCameraData((prevData) =>
        prevData.map((cam) =>
          cam.id === id ? { ...cam, status: res.data.data.status } : cam
        )
      );
    } catch (err) {
      console.log(err);
    }
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
        {/* <span style={{ color: "gray", fontSize: "10px" }}>
          sherwinwilliams@wobot.ai
        </span> */}
      </td>
      <td
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <span>
          <span>☁️</span>
          <span
            style={{
              border: "2px solid red",
              padding: "5px",
              borderRadius: "30px",
            }}
          >
            {cam?.health?.device}
          </span>
        </span>
        <span>
          <span>🏢</span>
          <span
            style={{
              border: "2px solid orange",
              padding: "5px",
              borderRadius: "50px",
            }}
          >
            {cam?.health?.cloud}
          </span>
        </span>
      </td>
      <td style={{ padding: "10px", textAlign: "left" }}>{cam?.location}</td>
      <td style={{ padding: "10px", textAlign: "left" }}>
        {cam.recorder ? cam.recorder : "N/A"}
      </td>
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
