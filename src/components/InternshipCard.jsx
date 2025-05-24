import { MapPin, Calendar, Clock, Users } from "lucide-react";
import "./InternshipCard.css";

export function InternshipCard({ internship }) {
  return (
    <div className="internship-card">
      <div className="card-header">
        <div className="company-logo">
          <div className="logo-placeholder">{internship.company.charAt(0)}</div>
        </div>
        <div className="card-badges">
          {internship.workFromHome && <span className="badge wfh">WFH</span>}
          {internship.partTime && (
            <span className="badge part-time">Part-time</span>
          )}
        </div>
      </div>

      <div className="card-content">
        <h3 className="internship-title">{internship.title}</h3>
        <p className="company-name">{internship.company}</p>

        <div className="internship-details">
          <div className="detail-item">
            <MapPin size={14} />
            <span>{internship.location}</span>
          </div>
          <div className="detail-item">
            <Calendar size={14} />
            <span>{internship.duration}</span>
          </div>
          <div className="detail-item">
            <Clock size={14} />
            <span>{internship.stipend}</span>
          </div>
        </div>

        <div className="card-footer">
          <div className="posted-info">
            <Clock size={12} />
            <span>{internship.postedDate}</span>
          </div>
          <div className="applicants-info">
            <Users size={12} />
            <span>{internship.applicants} applicants</span>
          </div>
        </div>
      </div>

      <div className="card-actions">
        <button className="apply-btn">Apply Now</button>
        <button className="save-btn">Save</button>
      </div>
    </div>
  );
}
