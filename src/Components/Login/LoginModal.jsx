import React, { useState } from "react";
import "./LoginModal.css";
import { login } from "../Utils/db";
import dotenv from "dotenv";
dotenv.config();

const LoginModal = ({ showModal, closeModal, setUser }) => { // Added setUser to pass the logged-in user to the parent component
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // Added error state to handle login errors

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await login(username, password);
    if (user) {
      setUser(user); // Set the logged-in user in the parent component
    } else {
      setError("Invalid username or password"); // Set the error message if login fails
    }
    closeModal();
  };

  return (
    showModal && (
      <div className="modal-overlay">
        <div className="modal">
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          {error && <p className="error">{error}</p>} // Show the error message if there is one
          <form onSubmit={handleSubmit}>
            <label>
              Username:
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <input type="submit" value="Login" />
          </form>
        </div>
      </div>
    )
  );
};

export default LoginModal;
