import React, { useState } from "react";
import "./Search.css";

const Search = ({ onSearch, searchOptions }) => {
  const [searchTerms, setSearchTerms] = useState(
    Object.fromEntries(searchOptions.map((option) => [option, ""]))
  );

  const handleSearchTermChange = (event) => {
    const { name, value } = event.target;
    setSearchTerms((prevTerms) => ({
      ...prevTerms,
      [name]: value
    }));
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerms);
  };

  return (
    <form onSubmit={handleSearchSubmit}>
      {searchOptions.map((option) => (
        <input
          key={option}
          type="text"
          name={option}
          value={searchTerms[option]}
          onChange={handleSearchTermChange}
          placeholder={`Search by ${option}`}
        />
      ))}
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
