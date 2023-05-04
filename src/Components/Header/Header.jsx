import React, { useState } from "react";
import "./Header.css";
import catDogImage from '../../Assets/catdogheader.png';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false); 

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const openRegistrationModal = () => { 
    setIsRegistrationModalOpen(true);
  };

  const closeRegistrationModal = () => {
    setIsRegistrationModalOpen(false);
  };

  return (
    <div className="header">
      <div className="logo">
        <img src={catDogImage} alt="Cat and dog" />
      </div>
      <div className="links">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/pets">Search</Link>
            </li>
            {!isLoggedIn && (
              <>
                <li>
                  <a href="#" onClick={openRegistrationModal}>Register</a> 
                </li>
                <li>
                  <a href="#" onClick={openLoginModal}>
                    Login
                  </a>
                </li>
              </>
            )}
            {isLoggedIn && (
              <>
                <li>
                  <a href="#">Profile</a>
                </li>
                <li>
                  <a href="#" onClick={handleLogout}>
                    Logout
                  </a>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
      {/* LoginModal component */}
      {/* {isLoginModalOpen && (
         <LoginModal showModal={true} closeModal={closeLoginModal} handleLogin={handleLogin} />
      )} */}
      {/* RegistrationModal component */}
      {/* {isRegistrationModalOpen && ( 
        <RegistrationModal showModal={true} closeModal={closeRegistrationModal} />
      )} */}
    </div>
  );
};

export default Header;
