import React from "react";
import Main from "./Components/Main";
import Dashboard from "./Components/Secured/Dashboard";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="appcartsystems-task/" element={<Main />} />
        <Route path="appcartsystems-task/secured" element={<Dashboard />} />
        <Route path="appcartsystems-task/login" element={<Login />} />
      </Routes>

      {/* <Main /> */}
    </>
  );
};

export default App;
