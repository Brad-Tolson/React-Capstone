import React, { useState } from "react";
import "./PetCard.css";
import { Link } from "react-router-dom";

const PetCard = ({ pet }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

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
        <div className="pet-card-buttons">
          <button onClick={handleFavorite}>
            {isFavorite ? "Unfavorite" : "Favorite"}
          </button>
          <Link to={`/adoption-form/${pet.petId}`}>
            <button>Adopt</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PetCard;
