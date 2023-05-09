import React from "react";
import "./Header.css";
import catDogImage from "../../Assets/catdogheader.png";
import { Link } from "react-router-dom";

const Header = ({ user, setUser }) => {
  const handleLogout = () => {
    setUser(null);
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
            {!user && (
              <>
                <li>
                  <Link to="/register">Register</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </>
            )}
            {user && (
              <>
                <li>
                  <Link to="/profile">Profile</Link>
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
    </div>
  );
};

export default Header;
