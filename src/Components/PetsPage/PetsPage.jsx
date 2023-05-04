import React, { useState } from "react";
import PetList from "../PetList/PetList";
import { pets } from '../PetList/PetList';
import Search from "../Search/Search";

function PetsPage() {
  const [searchResults, setSearchResults] = useState(pets);

  const handleSearch = (searchTerms) => {
    const filteredPets = pets.filter(pet => {
      return Object.keys(searchTerms).every((option) => {
        const searchTerm = searchTerms[option].toLowerCase();
        switch(option) {
          case 'species':
            return pet.species.toLowerCase().includes(searchTerm);
          case 'breed':
            return pet.breed.toLowerCase().includes(searchTerm);
          case 'age':
            return pet.age.toString().includes(searchTerm);
          case 'location':
            return pet.location.toLowerCase().includes(searchTerm);
          default:
            return true;
        }
      });
    });
    setSearchResults(filteredPets);
  };

  return (
    <div>
      <h1>Our Pets</h1>
      <Search onSearch={handleSearch} searchOptions={['species', 'breed', 'age', 'location']} />
      <PetList pets={searchResults} />
    </div>
  );
}

export default PetsPage;
