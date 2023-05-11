import React, { useState } from "react";
import "./RegistrationForm.css";
import axios from "axios";

const RegistrationForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [numChildren, setNumChildren] = useState("");
  const [homeType, setHomeType] = useState("");
  const [currentPets, setCurrentPets] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post("/api/auth/register", {
        firstName,
        lastName,
        email,
        password,
        address,
        phoneNumber,
        numChildren,
        homeType,
        currentPets,
      });

      console.log(response.data);
      setErrorMessage("Registration successful!");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setAddress("");
      setPhoneNumber("");
      setNumChildren("");
      setHomeType("");
      setCurrentPets("");
    } catch (err) {
      console.error(err);
      setErrorMessage(err.message);
    }
  };

  

  return (
    <div className="registration-form-container">
      <form className="registration-form" onSubmit={handleFormSubmit}>
        <h2>Register</h2>
        
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength="8"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            minLength="8"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
            placeholder="123-456-7890"
          />
        </div>

        <div className="form-group">
          <label htmlFor="numChildren">Number of Children:</label>
          <input
            type="number"
            id="numChildren"
            name="numChildren"
            value={numChildren}
            onChange={(e) => setNumChildren(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="homeType">Type of Home:</label>
          <select
            id="homeType"
            name="homeType"
            value={homeType}
            onChange={(e) => setHomeType(e.target.value)}
            required
          >
            <option value="">-- Select an option --</option>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="condo">Condo</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="currentPets">Current Pets:</label>
          <input
            type="text"
            id="currentPets"
            name="currentPets"
            value={currentPets}
            onChange={(e) => setCurrentPets(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </form>
    </div>
  );
};

export default RegistrationForm;
