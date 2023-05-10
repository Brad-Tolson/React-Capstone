import React, { useState } from "react";
import axios from "axios";
import "../Registration/RegistrationForm.css";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/login", {
        email,
        password,
      });
      const { token } = response.data;
      // Store the token in localStorage
      localStorage.setItem("token", token);
      // Update the user state or perform any other necessary actions
      setUser({ loggedIn: true });
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div className="registration-form-container">
      <form className="registration-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>

        <div className="form-group">
          <button type="submit">Login</button>
        </div>
      </form>

    </div>
  );
};

export default LoginForm;
