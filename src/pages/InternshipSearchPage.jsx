import React, { useEffect, useState } from "react";
import FilterSection from "../components/FilterSection";
import InternshipCard from "../components/InternshipCard";

const InternshipSearchPage = () => {
  const [internships, setInternships] = useState([]);
  const [filteredInternships, setFilteredInternships] = useState([]);
  const [filters, setFilters] = useState({
    profile: "",
    location: "",
    duration: "",
  });

  useEffect(() => {
    fetch("https://internshala.com/hiring/search")
      .then((res) => res.json())
      .then((data) => {
        setInternships(data.internships || []);
        setFilteredInternships(data.internships || []);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    const filtered = internships.filter((internship) => {
      const matchProfile =
        filters.profile === "" ||
        internship.profile
          .toLowerCase()
          .includes(filters.profile.toLowerCase());
      const matchLocation =
        filters.location === "" ||
        internship.location
          .toLowerCase()
          .includes(filters.location.toLowerCase());
      const matchDuration =
        filters.duration === "" ||
        internship.duration.toString() === filters.duration;
      return matchProfile && matchLocation && matchDuration;
    });

    setFilteredInternships(filtered);
  }, [filters, internships]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">
        InternVista – Internship Finder
      </h1>
      <FilterSection filters={filters} setFilters={setFilters} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {filteredInternships.map((item) => (
          <InternshipCard key={item.id} internship={item} />
        ))}
      </div>
    </div>
  );
};

export default InternshipSearchPage;
