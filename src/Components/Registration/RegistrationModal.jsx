import React, { useState } from "react";
import "./RegistrationModal.css";
import { createUser } from "../Utils/db";

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return "Invalid email address";
  }
};

const validatePassword = (password) => {
  if (password.length < 8) {
    return "Password must be at least 8 characters long";
  }
  if (!/\d/.test(password)) {
    return "Password must contain at least one digit";
  }
  if (!/[a-z]/.test(password)) {
    return "Password must contain at least one lowercase letter";
  }
  if (!/[A-Z]/.test(password)) {
    return "Password must contain at least one uppercase letter";
  }
};

const RegistrationModal = ({ showModal, closeModal }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Invalid email address");
      return;
    }

    const passwordError = validatePassword(password);
    if (passwordError) {
      setError(passwordError);
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
        const user = await createUser(firstName, lastName, email, password);
        if (user) {
          
          const response = await loginUser(email, password);
          if (response.success) {
            
            closeModal();
            history.push("/");
          } else {
            setError(response.error);
          }
        }
      } catch (err) {
        console.error(err);
        setError("Failed to create user");
      }
      
  };

  return (
    showModal && (
      <div className="modal-overlay">
        <div className="modal">
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <form onSubmit={handleSubmit}>
            {error && <p className="error">{error}</p>}
            <label>
              First Name:
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </label>
            <label>
              Last Name:
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </label>
            <label className="modal-label">
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="modal-input"
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="modal-input"
              />
            </label>
            <label>
              Confirm Password:
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="modal-input"
              />
            </label>
            <input
              type="submit"
              value="Register"
              className="modal-submit-btn"
            />
          </form>
        </div>
      </div>
    )
  );
};

export default RegistrationModal;
