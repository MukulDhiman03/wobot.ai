import React, { createContext, useEffect, useState } from "react";
import CameraTable from "./components/camera/CameraTable";
import "./App.css";
import axios from "axios";
import { BASE_URL, token } from "./utils/constants";

// created an context for handling states
export const CameraContext = createContext(null);

const App = () => {
  const [cameraData, setCameraData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  // function to fetcht the camera data
  const fetchCameraData = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/fetch/cameras`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCameraData(res?.data?.data);
      setFilteredData(res?.data?.data);
    } catch (err) {
      alert(err.message);
    }
  };
  useEffect(() => {
    fetchCameraData();
  }, []);

  return (
    <CameraContext.Provider
      value={{ cameraData, setCameraData, filteredData, setFilteredData }}
    >
      <CameraTable />
    </CameraContext.Provider>
  );
};

export default App;
