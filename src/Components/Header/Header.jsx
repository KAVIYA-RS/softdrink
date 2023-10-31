import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (

    <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
      
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse ml-2 navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <NavLink to="/" >
            <li className="nav-item nav-link active">Home</li>
          </NavLink>
          <NavLink to="/about">
            <li className="nav-item nav-link ">About</li>
          </NavLink>
          <NavLink to="/service">
            <li className="nav-item nav-link">Service</li>
          </NavLink>

          <NavLink to="/contact">
            <li className="nav-item nav-link">Contact</li>
          </NavLink>

        </ul>
      </div>
    </nav>

  );
}

export default Header