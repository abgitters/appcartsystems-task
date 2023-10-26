import React from "react";
import Main from "./Components/Main";
import Dashboard from "./Components/Secured/Dashboard";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<Main />} />
        <Route path="/secured" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      {/* <Main /> */}
    </>
  );
};

export default App;
