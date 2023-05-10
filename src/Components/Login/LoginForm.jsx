import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext";
import "../Registration/RegistrationForm.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async () => {
    try {
      const response = await axios.post("/api/auth/login", {
        email,
        password,
      });
      const { token } = response.data;
      localStorage.setItem("token", token); 
      console.log(`Token saved to local storage: ${token}`);
      login(token); 
      console.log(`Logged in with token: ${token}`);
      setMessage("Login successful");
      navigate("/"); 
    } catch (error) {
      console.error(error);
      setMessage("Login failed");
    }
  };
  

  return (
    <div className="registration-form-container">
      <form className="registration-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
};

export default LoginForm;
