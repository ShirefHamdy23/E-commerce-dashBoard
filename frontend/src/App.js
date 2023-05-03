import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar";
import "./component/style/style.css";
import Login from "./component/Login";
import Rejecter from "./component/rejecter";
import Home from "./home/Home";
import Mobiles from "./Mobiles";
import Payment from "./Payment";
import Brands from"./Brands";
import Gaming from"./Gaming";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/rejecter" element={<Rejecter />} />
        { <Route path="/" element={<Home />} /> }
        <Route path="/mobiles" element={<Mobiles />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/gaming" element={<Gaming />} />

        <Route path="/payment" element={<Payment />} />



      </Routes>
    </div>
  );
}

export default App;
