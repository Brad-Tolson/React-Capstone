import React, { useState, useEffect } from "react";
import PetList from "../PetList/PetList";
import Search from "../Search/Search";
import axios from "axios";

function PetsPage() {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("/api/pets");
      setSearchResults(result.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleSearch = (searchTerms) => {
    if (Object.values(searchTerms).every((val) => val === "")) {
      // If all search fields are blank, reload all pets
      setLoading(true);
      setSearchResults([]);
      const fetchData = async () => {
        const result = await axios.get("/api/pets");
        setSearchResults(result.data);
        setLoading(false);
      };
      fetchData();
    } else {
      // Otherwise, filter the pets based on search terms
      const filteredPets = searchResults.filter((pet) => {
        return Object.keys(searchTerms).every((option) => {
          const searchTerm = searchTerms[option].toLowerCase();
          switch (option) {
            case "species":
              return pet.species.toLowerCase().includes(searchTerm);
            case "breed":
              return pet.breed.toLowerCase().includes(searchTerm);
            case "age":
              return pet.age.toString().includes(searchTerm);
            case "location":
              return pet.location.toLowerCase().includes(searchTerm);
            default:
              return true;
          }
        });
      });
      setSearchResults(filteredPets);
    }
  };
  

  return (
    <div>
      <h1>Our Pets</h1>
      <Search
        onSearch={handleSearch}
        searchOptions={["species", "breed", "age", "location"]}
      />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <PetList pets={searchResults} />
      )}
    </div>
  );
}

export default PetsPage;
