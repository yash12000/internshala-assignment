"use client";

import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Filters } from "./components/Filters";
import { InternshipList } from "./components/InternshipList";
import { Breadcrumb } from "./components/Breadcrumb";
import { InternshipCard } from "./components/InternshipCard";
import "./App.css";

function App() {
  const [internships, setInternships] = useState([]);
  const [filteredInternships, setFilteredInternships] = useState([]);
  const [InternshipCard, setInternshipCard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    profile: "",
    location: "",
    duration: "",
    workFromHome: false,
    partTime: false,
    minStipend: 0,
    keyword: "",
  });

  const mockInternships = [
    {
      id: "1",
      title: "Marketing Internship",
      company: "TechCorp Solutions",
      location: "Delhi",
      duration: "3 Months",
      stipend: "₹ 15,000 - 25,000 /month",
      postedDate: "2 days ago",
      applicants: 156,
      type: "Marketing",
      profile: "Marketing",
      workFromHome: false,
      partTime: false,
      stipendAmount: 15000,
    },
    {
      id: "2",
      title: "Web Development",
      company: "Digital Innovations",
      location: "Bangalore",
      duration: "6 Months",
      stipend: "₹ 20,000 - 30,000 /month",
      postedDate: "1 day ago",
      applicants: 89,
      type: "Web Development",
      profile: "Web Development",
      workFromHome: true,
      partTime: false,
      stipendAmount: 20000,
    },
    {
      id: "3",
      title: "Data Entry",
      company: "ABM Traders",
      location: "Hyderabad",
      duration: "2 Months",
      stipend: "₹ 8,000 - 12,000 /month",
      postedDate: "3 hours ago",
      applicants: 234,
      type: "Data Entry",
      profile: "Data Entry",
      workFromHome: false,
      partTime: true,
      stipendAmount: 8000,
    },
    {
      id: "4",
      title: "Graphic Design",
      company: "Creative Studio",
      location: "Mumbai",
      duration: "4 Months",
      stipend: "₹ 18,000 - 28,000 /month",
      postedDate: "1 week ago",
      applicants: 67,
      type: "Graphic Design",
      profile: "Graphic Design",
      workFromHome: true,
      partTime: false,
      stipendAmount: 18000,
    },
    {
      id: "5",
      title: "Content Writing",
      company: "Media House",
      location: "Pune",
      duration: "3 Months",
      stipend: "₹ 12,000 - 20,000 /month",
      postedDate: "5 days ago",
      applicants: 123,
      type: "Content Writing",
      profile: "Content Writing",
      workFromHome: true,
      partTime: true,
      stipendAmount: 12000,
    },
    {
      id: "6",
      title: "Business Development",
      company: "StartupXYZ",
      location: "Gurgaon",
      duration: "6 Months",
      stipend: "₹ 25,000 - 35,000 /month",
      postedDate: "2 weeks ago",
      applicants: 45,
      type: "Business Development",
      profile: "Business Development",
      workFromHome: false,
      partTime: false,
      stipendAmount: 25000,
    },
  ];

  useEffect(() => {
    const fetchInternships = async () => {
      try {
        setLoading(true);
        setTimeout(() => {
          setInternships(mockInternships);
          setFilteredInternships(mockInternships);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error("Error fetching internships:", error);
        setInternships(mockInternships);
        setFilteredInternships(mockInternships);
        setLoading(false);
      }
    };

    fetchInternships();
  }, []);

  useEffect(() => {
    const filtered = internships.filter((internship) => {
      const matchesProfile =
        !filters.profile ||
        internship.profile
          .toLowerCase()
          .includes(filters.profile.toLowerCase());
      const matchesLocation =
        !filters.location ||
        internship.location
          .toLowerCase()
          .includes(filters.location.toLowerCase());
      const matchesDuration =
        !filters.duration ||
        internship.duration
          .toLowerCase()
          .includes(filters.duration.toLowerCase());
      const matchesWorkFromHome =
        !filters.workFromHome || internship.workFromHome;
      const matchesPartTime = !filters.partTime || internship.partTime;
      const matchesStipend = internship.stipendAmount >= filters.minStipend;
      const matchesKeyword =
        !filters.keyword ||
        internship.title
          .toLowerCase()
          .includes(filters.keyword.toLowerCase()) ||
        internship.company
          .toLowerCase()
          .includes(filters.keyword.toLowerCase()) ||
        internship.profile
          .toLowerCase()
          .includes(filters.keyword.toLowerCase());

      return (
        matchesProfile &&
        matchesLocation &&
        matchesDuration &&
        matchesWorkFromHome &&
        matchesPartTime &&
        matchesStipend &&
        matchesKeyword
      );
    });

    setFilteredInternships(filtered);
  }, [filters, internships]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const clearAllFilters = () => {
    setFilters({
      profile: "",
      location: "",
      duration: "",
      workFromHome: false,
      partTime: false,
      minStipend: 0,
      keyword: "",
    });
  };

  return (
    <div className="app">
      <Header />
      <div className="container">
        <Breadcrumb />
        <div className="main-content">
          <div className="header-section">
            <h1>Internships</h1>
            <p className="subtitle">
              Apply to {filteredInternships.length} internships in India
            </p>
          </div>

          <div className="content-wrapper">
            <Filters
              filters={filters}
              onFilterChange={handleFilterChange}
              onClearAll={clearAllFilters}
            />
            <InternshipList
              internships={filteredInternships}
              loading={loading}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
