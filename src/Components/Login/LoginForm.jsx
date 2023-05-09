import React, { useState } from "react";
import axios from "axios";
import "../Registration/RegistrationForm.css";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/auth/login", {
        email,
        password,
      });
      console.log(response.data);
      setMessage("Login successful");
      setUser(true); // set the user state to true
      navigate("/"); // redirect to home screen
    } catch (error) {
      console.error(error);
      setMessage("Login failed");
    }
  };

  return (
    <div className="registration-form-container">
      <form className="registration-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
};

export default LoginForm;
