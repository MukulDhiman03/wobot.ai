import React, { createContext, useEffect, useState } from "react";
import CameraTable from "./components/camera/CameraTable";
import "./App.css";
import axios from "axios";
import { BASE_URL } from "./utils/constants";

const token = "4ApVMIn5sTxeW7GQ5VWeWiy";
export const CameraContext = createContext(null);

const App = () => {
  const [cameraData, setCameraData] = useState([]);

  const fetchCameraData = async () => {
    const res = await axios.get(BASE_URL + "/fetch/cameras", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setCameraData(res?.data?.data);
  };
  useEffect(() => {
    fetchCameraData();
  }, []);

  return (
    <CameraContext.Provider value={{ cameraData, setCameraData }}>
      <CameraTable />
    </CameraContext.Provider>
  );
};

export default App;
