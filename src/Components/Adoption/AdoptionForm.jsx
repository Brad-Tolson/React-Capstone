import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


import "./AdoptionForm.css";

const AdoptionForm = () => {
    const { petId } = useParams();
    const { currentUser } = useAuth();
    const [userId, setUserId] = useState("");
    const [petIdState, setPetIdState] = useState("");
    const [children, setChildren] = useState("");
    const [homeType, setHomeType] = useState("");
    const [experience, setExperience] = useState("");
    const [petHistory, setPetHistory] = useState("");
    const [submissionStatus, setSubmissionStatus] = useState("");

  useEffect(() => {
    if (currentUser) {
      console.log("currentUser:", currentUser);
      setUserId(currentUser.id);
    }
  }, [currentUser]);
  
  useEffect(() => {
    if (petId) {
      console.log("petId:", petId);
      setPetIdState(petId);
    }
  }, [petId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!children || !homeType || !experience || !petHistory) {
      setSubmissionStatus("error");
      return;
    }

    try {
      console.log("petId:", petId);
      const response = await axios.post("/api/adoption", {
        petId: petIdState,
        userId,
        children,
        homeType,
        experience,
        petHistory,
      });
      console.log(response.data);
      setSubmissionStatus("success");
    } catch (error) {
      console.log(error);
      setSubmissionStatus("error");
    }
  };

  return (
    <div className="adoption-form-container">
      <div className="adoption-form">
        <h1>Adoption Form</h1>
        {submissionStatus === "success" ? (
          <p className="submission-status success">
            Form submitted successfully!
          </p>
        ) : submissionStatus === "error" ? (
          <p className="submission-status error">
            There was an error submitting the form. Please try again.
          </p>
        ) : null}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="petId" hidden>
              Pet ID:
            </label>
            <input type="text" id="petId" value={petIdState} readOnly hidden />
          </div>
          <div className="form-group">
            <label htmlFor="userId" hidden>
              User ID:
            </label>
            <input type="text" id="userId" value={userId} readOnly hidden />
          </div>
          <div className="form-group">
            <label htmlFor="children">Children:</label>
            <input
              type="text"
              id="children"
              value={children}
              onChange={(e) => setChildren(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="homeType">Home Type:</label>
            <input
              type="text"
              id="homeType"
              value={homeType}
              onChange={(e) => setHomeType(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="experience">Experience:</label>
            <input
              type="text"
              id="experience"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="petHistory">Pet History:</label>
            <input
              type="text"
              id="petHistory"
              value={petHistory}
              onChange={(e) => setPetHistory(e.target.value)}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AdoptionForm;
