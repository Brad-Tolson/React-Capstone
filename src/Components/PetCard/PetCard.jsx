import React from "react";
import "./PetCard.css";

const PetCard = ({ pet }) => {
  return (
    <div className="pet-card">
      <div className="pet-card-img">
        <img src={pet.photo_url} alt={pet.name} />
      </div>
      <div className="pet-card-details">
        <p>Name: {pet.name}</p>
        <p>Breed: {pet.breed}</p>
        <p>Age: {pet.age}</p>
        <p>Location: {pet.location}</p>
        <p>Description: {pet.description}</p>
      </div>
    </div>
  );
};

export default PetCard;
