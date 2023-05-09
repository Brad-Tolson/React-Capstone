import React, { useState } from "react";
import "./PetCard.css";

const PetCard = ({ pet }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const favoritePet = () => {
    setIsFavorite(!isFavorite);
  };

  const adoptPet = () => {
    alert(`You have adopted ${pet.name}!`);
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
          <button onClick={favoritePet}>
            {isFavorite ? "Unfavorite" : "Favorite"}
          </button>
          <button onClick={adoptPet}>Adopt</button>
        </div>
      </div>
    </div>
  );
};

export default PetCard;
