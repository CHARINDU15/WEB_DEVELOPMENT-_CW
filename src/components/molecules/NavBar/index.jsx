import React, { useState } from 'react';
import { Link } from 'react-router-dom';



const NavBar = ({ darkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };


  return (
    <>
    
      <nav className={`navbar navbar-expand-lg navbar-dark bg-black border-bottom border-body fixed-top ${isOpen ? 'active' : ''}`}>
        <div className="container-fluid">

        
        
      
          <a className="navbar-brand" href="#">
            <img src="295ca237-dae0-4ff6-a64b-de49b62c5a08.png" alt="Logo" width="50" height="40" />
          </a>
          <button
            className={`navbar-toggler ${isOpen ? 'active' : ''}`}
            type="button"
            onClick={toggleNav}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  ABOUT
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/Events" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  EVENTS
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/weddings">WEDDINGS</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/Birthdays">BIRTHDAY PARTIES</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/cooparte">CO-OPARATE EVENTS</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/Conferences">CONFERENCES</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-disabled="false" herf = '/VENDORS'> VENDORS</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>

            <Link to="/login" href = '../'className="btn btn-outline-success">Login</Link>

             
            </div>

        </div>

        
      </nav>
    </>
  );
}

export default NavBar;
