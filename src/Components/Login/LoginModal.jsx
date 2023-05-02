import React, { useState } from "react";
import "./LoginModal.css";
import { login } from "../Utils/db";
import dotenv from "dotenv";
dotenv.config();

const LoginModal = ({ showModal, closeModal, setUser }) => { 
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await login(username, password);
    if (user) {
      setUser(user); 
    } else {
      setError("Invalid username or password"); 
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
          {error && <p className="error">{error}</p>} 
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
