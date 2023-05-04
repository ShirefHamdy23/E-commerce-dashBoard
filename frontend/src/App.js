import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar";
import "./component/style/style.css";
import Login from "./component/Login";
import Rejecter from "./component/rejecter";
import Home from "./home/Home";
import Mobiles from "./Categories/Mobiles";
import Brands from "./Categories/Brands";
import Payment from "./Payment";
import Gaming from "./Categories/Gaming";
import ManageProducts from "./ManageProducts/ManageProducts";
import AddProduct from "./ManageProducts/AddProduct";
import UpdateProduct from "./ManageProducts/UpdateProduct";
import Footer from "./component/Footer";
import ProductList from "./Categories/ProductList";
import ProductList2 from "./Categories/ProductList2";
import ProductList3 from "./Categories/ProductList3";





function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path ="/gaming" element={<ProductList3/>}/>

        <Route path ="/mobiles" element={<ProductList/>}/>
        <Route path ="/brands" element={<ProductList2/>}/>

        <Route path="/login" element={<Login />} />
        <Route path="/rejecter" element={<Rejecter />} />
        { <Route path="/" element={<Home />} /> }
        <Route path="/mobiles" element={<Mobiles />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/gaming" element={<Gaming />} />

        <Route path="/payment" element={<Payment />} />

        <Route path="/manage-products" element={<ManageProducts />} />
        <Route path="/manage-products/add" element={<AddProduct />} />
        <Route path="/manage-products/update" element={< UpdateProduct/>} />

</Routes>
<Footer/>




        



        



      
    </div>
  );
}

export default App;
