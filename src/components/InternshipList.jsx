import { InternshipCard } from "./InternshipCard";
import "./InternshipList.css";

export function InternshipList({ internships, loading }) {
  if (loading) {
    return (
      <div className="internship-list">
        <div className="loading">
          <div className="loading-spinner"></div>
          <p>Loading internships...</p>
        </div>
      </div>
    );
  }

  if (internships.length === 0) {
    return (
      <div className="internship-list">
        <div className="no-results">
          <h3>No internships found</h3>
          <p>Try adjusting your filters to see more results.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="internship-list">
      <div className="results-count">
        {internships.length} internship{internships.length !== 1 ? "s" : ""}{" "}
        found
      </div>
      <div className="internships-container">
        {internships.map((internship) => (
          <InternshipCard key={internship.id} internship={internship} />
        ))}
      </div>
    </div>
  );
}
