import React, { useState } from "react";
import "./Header.css";
import catDogImage from '../../Assets/catdogheader.png';

import LoginModal from "../Login/LoginModal";
import RegistrationModal from "../Registration/RegistrationModal"; // step 1

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false); // step 2

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

  const openRegistrationModal = () => { // step 3
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
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Search</a>
            </li>
            {!isLoggedIn && (
              <>
                <li>
                  <a href="#" onClick={openRegistrationModal}>Register</a> {/* step 4 */}
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
      {isLoginModalOpen && (
        <LoginModal showModal={true} closeModal={closeLoginModal} handleLogin={handleLogin} />
      )}
      {isRegistrationModalOpen && ( // step 5
        <RegistrationModal showModal={true} closeModal={closeRegistrationModal} />
      )}
    </div>
  );
};

export default Header;
