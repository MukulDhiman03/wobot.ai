import React, { createContext, useContext, useEffect, useState } from "react";
import CameraTable from "./components/camera/CameraTable";
import "./App.css";
import axios from "axios";
import { BASE_URL } from "./utils/constants";

const token = "4ApVMIn5sTxeW7GQ5VWeWiy";
export const CameraContext = createContext(null);

const App = () => {
  const [cameraData, setCameraData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const fetchCameraData = async () => {
    const res = await axios.get(BASE_URL + "/fetch/cameras", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setCameraData(res?.data?.data);
    setFilteredData(res?.data?.data);
  };
  useEffect(() => {
    fetchCameraData();
  }, []);

  return (
    <CameraContext.Provider value={{ cameraData, setCameraData,filteredData,setFilteredData }}>
      <CameraTable />
    </CameraContext.Provider>
  );
};

export default App;
