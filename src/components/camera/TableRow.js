import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { BASE_URL, token } from "../../utils/constants";
import { CameraContext } from "../../App";

const TableRow = ({ cam }) => {
  const { setFilteredData } = useContext(CameraContext);

  const statusHandler = async (status, id) => {
    try {
      const res = await axios.put(
        `${BASE_URL}/update/camera/status`,
        { id, status },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setFilteredData((prevData) =>
        prevData.map((cam) =>
          cam.id === id ? { ...cam, status: res.data.data.status } : cam
        )
      );
    } catch (err) {
      alert(err.message);
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
      </td>
      <td
        style={{
          minWidth: "50px",
          display: "flex",
          gap: "20px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div>☁️</div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minWidth: "30px",
              minHeight: "30px",
              border: "2px solid red",
              borderRadius: "50%",
            }}
          >
            {cam?.health?.device}
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div>🏢</div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minWidth: "30px",
              minHeight: "30px",
              border: "2px solid red",
              borderRadius: "50%",
            }}
          >
            {cam?.health?.cloud}
          </div>
        </div>
      </td>
      <td style={{ padding: "10px", textAlign: "left" }}>{cam?.location}</td>
      <td style={{ padding: "10px", textAlign: "left" }}>
        {cam.recorder ? cam.recorder : "N/A"}
      </td>
      <td style={{ padding: "10px", textAlign: "left" }}>{cam?.tasks} Tasks</td>
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
        <div style={{ marginLeft: "40px" }}>
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
