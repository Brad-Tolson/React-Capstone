import React, { useState } from "react";
import axios from "axios";

const AdoptionForm = ({ petId, userId }) => {
  const [applicationStatus, setApplicationStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/adoptions", {
        user_id: userId,
        pet_id: petId,
        application_status: applicationStatus,
      });
      console.log(response.data);
      setApplicationStatus("Adoption application submitted successfully");
    } catch (error) {
      console.error(error);
      setApplicationStatus("Failed to submit adoption application");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Adoption Application Form</h3>
      <label>
        Have you owned a pet before?
        <select
          value={applicationStatus}
          onChange={(e) => setApplicationStatus(e.target.value)}
        >
          <option value="">Please select</option>
          <option value="Approved">Yes</option>
          <option value="Denied">No</option>
        </select>
      </label>
      <button type="submit">Submit Application</button>
      <p>{applicationStatus}</p>
    </form>
  );
};

export default AdoptionForm;
