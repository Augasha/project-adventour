import React, { useState, useEffect } from "react";
import AccommodationsItem from "./AccommodationsItem";
import SearchBar from "./SearchBar";
import "./AccommodationsList.css"; 

function AccommodationsList() {
  const [accommodations, setAccommodations] = useState([]);
  const [searchWord, setSearchWord] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/accommodations")
      .then((response) => response.json())
      .then((accommodations) => setAccommodations(accommodations));
  }, []);

  const handleSearch = (word) => {
    setSearchWord(word);
  };

  const filteredAccommodations = accommodations.filter((accommodation) => {
    return accommodation.location
      .toLowerCase()
      .includes(searchWord.toLowerCase());
  });

  return (
    <div className="container">
      <h1>HOTELS TO STAY IN NAIROBI</h1>
      <div className="accomodations-list">
      <SearchBar onSearch={handleSearch} />
        <main>
          
          {filteredAccommodations.map((accommodation) => (
            <AccommodationsItem
              key={accommodation.id}
              image={accommodation.image}
              name={accommodation.name}
              location={accommodation.location}
            />
          ))}
        </main>
      </div>
    </div>
  );
}

export default AccommodationsList;
