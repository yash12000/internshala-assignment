import React from "react";

const FilterSection = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    setFilters((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Filters</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="text"
          name="profile"
          placeholder="Search by profile"
          value={filters.profile}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="location"
          placeholder="Search by location"
          value={filters.location}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="number"
          name="duration"
          placeholder="Search by duration (in months)"
          value={filters.duration}
          onChange={handleChange}
          className="border p-2 rounded"
        />
      </div>
    </div>
  );
};

export default FilterSection;
