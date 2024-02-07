import React, { useState } from 'react';


const LocationSelector = ({ setLocation }) => {
  const [inputLocation, setInputLocation] = useState('');

  const handleLocationChange = (e) => {
    setInputLocation(e.target.value);
  };

  const handleLocationSubmit = (e) => {
    e.preventDefault();
    setLocation(inputLocation);
  };

  return (
    <div className="location-selector">
      <form onSubmit={handleLocationSubmit}>
        <label>
          Enter Location:
          <input
            type="text"
            value={inputLocation}
            onChange={handleLocationChange}
            placeholder="E.g., New York"
          />
        </label>
        <button type="submit">Get Weather</button>
      </form>
    </div>
  );
};

export default LocationSelector;
