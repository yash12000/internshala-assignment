const Filters = ({ filters, onFilterChange }) => {
  return (
    <div className="space-y-4">
      <input
        className="w-full p-2 border rounded"
        type="text"
        placeholder="Filter by profile"
        name="profile"
        value={filters.profile}
        onChange={onFilterChange}
      />
      <input
        className="w-full p-2 border rounded"
        type="text"
        placeholder="Filter by location"
        name="location"
        value={filters.location}
        onChange={onFilterChange}
      />
      <input
        className="w-full p-2 border rounded"
        type="text"
        placeholder="Filter by duration"
        name="duration"
        value={filters.duration}
        onChange={onFilterChange}
      />
    </div>
  );
};

export default Filters;
