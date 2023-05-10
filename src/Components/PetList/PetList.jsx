import React from "react";
import PetCard from "../PetCard/PetCard";



function PetList({ pets }) {
  

  return (
    <div>
      {pets.map((pet) => (
        <PetCard key={pet.id} pet={pet} />
      ))}
    </div>
  );
}

export default PetList;
