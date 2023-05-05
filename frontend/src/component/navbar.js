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
            E-Commerce-Dashboard
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
<<<<<<< HEAD:frontend/src/component/navbar.tsx
            <ul className="navbar-nav ms-auto me-2 nav-pills ">
              <>
                <li className="nav-item">
                  <NavLink className="nav-link " aria-current="page" to="/">
                    Home
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/rejecter">
                    Rejecter
                  </NavLink>
                </li>
              </>
            </ul>
=======
          <Nav className="me-auto">
            <Link className='nav-link' to={"/"}>Home</Link>
            <Link className='nav-link' to={"/login"}>Login</Link>

            <Link className='nav-link' to={"/rejecter"}>Register</Link>
            <Link className='nav-link' to={"/manage-products"}>Manage Products</Link>

          </Nav>
          
>>>>>>> b644957bf7a687d83bff72682c14e877afd54a10:frontend/src/component/navbar.js
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