import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./component/navbar";
import "./component/style/style.css";
import Login from "./component/Login";
import Rejecter from "./component/rejecter";
import Home from "./component/home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/rejecter" element={<Rejecter />} />
      </Routes>
    </div>
  );
}

export default App;