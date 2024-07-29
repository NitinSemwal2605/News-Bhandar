import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { FaHome, FaInfoCircle } from 'react-icons/fa';
import { NavLink } from 'react-router-dom'; // Import NavLink
import Logo from '../Assests/LOgo.png';
import './Navbar.css'; // Import your custom CSS file

export default class Navbar extends Component {
  render() {
    return (
      <>
        <header>
          <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#1B1F3B' }}>
            <div className="container-fluid">
              <a className="navbar-brand" href="/">
                <img src={Logo} alt="HamaraNews Logo" style={{ width: '30px', marginRight: '10px' }} />
                NewsBhandar
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      exact
                      to="/"
                      activeClassName="active-link"
                    >
                      <FaHome style={{ marginRight: '5px' }} /> Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      to="/About"
                      activeClassName="active-link"
                    >
                      <FaInfoCircle style={{ marginRight: '5px' }} /> About
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </>
    );
  }
}
