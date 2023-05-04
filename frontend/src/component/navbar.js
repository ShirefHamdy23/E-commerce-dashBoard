import { NavLink } from "react-router-dom";
import React from 'react';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';


const Logout=()=>{};

const Navbar = () => {

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            E-commerce
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Nav className="me-auto">
            <Link className='nav-link' to={"/"}>Home</Link>
            <Link className='nav-link' to={"/login"}>Login</Link>

            <Link className='nav-link' to={"/rejecter"}>Register</Link>
            <Link className='nav-link' to={"/manage-products"}>Manage Products</Link>

          </Nav>
          
          </div>
          <Nav className='ms-auto'>
            <Nav. Link onClick={Logout}>Logout</Nav. Link>
          </Nav>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
