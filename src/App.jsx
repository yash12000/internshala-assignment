import { useEffect, useState } from "react";
import Filters from "./components/Filters";
import InternshipList from "./components/InternshipList";

function App() {
  const [internships, setInternships] = useState([]);
  const [filters, setFilters] = useState({
    profile: "",
    location: "",
    duration: "",
  });

  useEffect(() => {
    fetch("https://internshala.com/hiring/search")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data.internships)) {
          setInternships(data.internships);
        } else {
          console.error("Unexpected data format:", data);
        }
      });
  }, []);

  const filtered = internships.filter((item) =>
    item.profile_name.toLowerCase().includes(filters.profile.toLowerCase()) &&
    item.location_names.toLowerCase().includes(filters.location.toLowerCase()) &&
    item.duration.toLowerCase().includes(filters.duration.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <h1 className="text-2xl font-bold mb-4">Internship Search</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1">
          <Filters
            filters={filters}
            onFilterChange={(e) =>
              setFilters({ ...filters, [e.target.name]: e.target.value })
            }
          />
        </div>
        <div className="md:col-span-3">
          <InternshipList internships={filtered} />
        </div>
      </div>
    </div>
  );
}

export default App;
