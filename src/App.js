import React, { createContext, useEffect } from "react";
import CameraTable from "./components/camera/CameraTable";
import "./App.css";

const App = () => {
  const CameraContext = createContext(null);
  useEffect(() => {
    fetchCameraData();
  }, []);

  return (
    <CameraContext.Provider value={{}}>
      <CameraTable />
    </CameraContext.Provider>
  );
};

export default App;
