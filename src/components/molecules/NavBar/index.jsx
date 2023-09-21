import React, { useState } from 'react';
import { Link } from 'react-router-dom';


import { Button, Modal } from 'react-bootstrap';
import './lgstyle.css';

const NavBar = ({ darkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleShow = () => {
    setShowModal(true);
  };

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
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
            <Link to="/login" className="btn btn-outline-success" onClick={handleShow}>
              Login
            </Link>
          </div>
        </div>
      </nav>
      <div>
     

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
        <img src="./Untitled-1.jpg" alt="Logo" className="modal-logo" />
          <Modal.Title>
            {isLoginForm ? 'SIGN IN TO EVENTO' : 'SIGN UP WITH EVENTO'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {isLoginForm ? (
            // Render login form
            
               <div>
                  
                  <div className="wrapper">
                    <span className="close-icon">
                      <ion-icon name="close-outline"></ion-icon>
                    </span>
                    <div className="form-box login"></div>
                   <h2>SIGNIN</h2>
                     <form action="#" className="was-validated  auth-form">
                        <div className="input-box">
                          <span className="icon">
                            <ion-icon name="mail"></ion-icon>
                          </span>
                          <input type="email" required className="form-control is-invalid" placeholder=' Email'/>
                          <div className="invalid-feedback">
                            Please provide a valid email.
                          </div>
                          
                        </div>
                        <div className="input-box">
                          <span className="icon">
                            <ion-icon name="lock-closed"></ion-icon>
                          </span>
                          <input type="password" required className="form-control is-invalid" placeholder='Password'/>
                          <div className="invalid-feedback">
                            Password is required.
                          </div>
                          
                        </div>
                        <div className="remember-forget">
                          <label>
                            <input type="checkbox" />Remember Me
                          </label>
                          <a href="#">Forgot Password ?</a>
                        </div>
                        <button type="submit" className="btn btn-primary">
                          SignIn
                        </button>
                        <div className="login-register">
                          <p>
                            Don't have an account ?<a href="#" className="register-link" onClick={toggleForm}>
                              SignUp
                            </a>
                          </p>
                        </div>

                      </form>
                    </div>
             
            </div>
          ) : (
            
            
               <div className="form-box register">
              <h2>Sign Up</h2>
              <form action="#" className="was-validated auth-form" >
                        <div className="input-box">
                          <span className="icon">
                            <ion-icon name="person"></ion-icon>
                          </span>
                          <input type="text" required className="form-control is-invalid" placeholder= "Username" />
                          <div className="invalid-feedback">
                            Please provide a username.
                          </div>
                          
                        </div>
                        <div className="input-box">
                          <span className="icon">
                            <ion-icon name="mail"></ion-icon>
                          </span>
                          <input type="email" required className="form-control is-invalid" placeholder='Email' />
                          <div className="invalid-feedback">
                            Please provide a valid email.
                          </div>
                         
                        </div>
                        <div className="input-box">
                          <span className="icon">
                            <ion-icon name="lock-closed"></ion-icon>
                          </span>
                          <input type="password" required className="form-control is-invalid" placeholder='Password'/>
                          <div className="invalid-feedback">
                            Password is required.
                          </div>
                         
                        </div>
                        <div className="remember-forget">
                          <label>
                            <input type="checkbox" required />I agree to the terms & conditions
                          </label>
                        </div>
                        <button type="submit" className="btn btn-primary">
                          SignUp
                        </button>
                        <div className="login-register">
                         
                        </div>
                      </form>
              <p>
                Already have an account?{' '}
                <button className="btn btn-link" onClick={toggleForm}>
                  Login
                </button>
              </p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
        <p>&copy; {new Date().getFullYear()} Evento. All rights reserved.</p>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    </div>
    </>
  );
};

export default NavBar;
