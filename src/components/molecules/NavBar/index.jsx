import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';


const NavBar = ({ darkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  return (
    <>

      <nav className={`navbar navbar-expand-lg navbar-dark bg-black border-bottom border-body fixed-top ${isOpen ? 'active' : ''}`}>
        <div className="container-fluid">




          <a className="navbar-brand" href="#">
            <img src="./Untitled-1.jpg" alt="Logo" width="50" height="40" />
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
                <a className="nav-link" aria-disabled="false" herf='/VENDORS'> VENDORS</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>

            <Link to="/login" className="btn btn-outline-success" onClick={handleShow}>
              Login
            </Link>

            <Modal show={showModal} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Login Modal</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {/* Add your login form or content here */}
                {/* For example: */}
                <div className="wrapper">
      <span className="close-icon">
        <ion-icon name="close-outline"></ion-icon>
      </span>

      <div className="form-box login">
        <h2>Login</h2>
        <form action="#">
          <div className="input-box">
            <span className="icon">
              <ion-icon name="mail"></ion-icon>
            </span>
            <input type="email" required />
            <label>Email</label>
          </div>
          <div className="input-box">
            <span className="icon">
              <ion-icon name="lock-closed"></ion-icon>
            </span>
            <input type="Password" required />
            <label>Password</label>
          </div>
          <div className="remember-forget">
            <label>
              <input type="checkbox" />Remember Me
            </label>
            <a href="#">Forgot Password ?</a>
          </div>
          <button type="submit" className="btn">
            Login
          </button>
          <div className="login-register">
            <p>
              Don't have an account ?<a href="#" className="register-link">
                Register
              </a>
            </p>
          </div>
        </form>
      </div>

      <div className="form-box register">
        <h2>Registration</h2>
        <form action="#">
          <div className="input-box">
            <span className="icon">
              <ion-icon name="person"></ion-icon>
            </span>
            <input type="text" required />
            <label>Username</label>
          </div>
          <div className="input-box">
            <span className="icon">
              <ion-icon name="mail"></ion-icon>
            </span>
            <input type="email" required />
            <label>Email</label>
          </div>
          <div className="input-box">
            <span className="icon">
              <ion-icon name="lock-closed"></ion-icon>
            </span>
            <input type="Password" required />
            <label>Password</label>
          </div>
          <div className="remember-forget">
            <label>
              <input type="checkbox" />I agree to the terms & conditions
            </label>
          </div>
          <button type="submit" className="btn">
            Register
          </button>
          <div className="login-register">
            <p>
              Already have an account ?
              <a href="#" className="login-link">
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Login
                </Button>
              </Modal.Footer>
            </Modal>


          </div>

        </div>


      </nav>
    </>
  );
}

export default NavBar;
