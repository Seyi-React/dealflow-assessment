import React, { useState } from 'react';

const SearchFilter = ({ onFilterChange }) => {
  const [filter, setFilter] = useState('');

  const handleInputChange = (event) => {
    const { value } = event.target;
    setFilter(value);
    onFilterChange(value);
  };

  return (
    <div>
      <input type="text" value={filter} onChange={handleInputChange} placeholder="Search freelancers" />
    </div>
  );
};

export default SearchFilter;
