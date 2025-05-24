import { MapPin, Calendar, Clock, Users } from "lucide-react"
import "./InternshipCard.css"

export function InternshipCard({ internship }) {
  return (
    <div className="internship-item">
      <div className="internship-header">
        <div className="company-logo">
          <div className="logo-circle">{internship.company.charAt(0)}</div>
        </div>
        <div className="internship-badges">{internship.workFromHome && <span className="badge-wfh">WFH</span>}</div>
      </div>

      <div className="internship-content">
        <h3 className="internship-title">{internship.title}</h3>
        <p className="company-name">{internship.company}</p>

        <div className="internship-meta">
          <div className="meta-item">
            <MapPin size={12} />
            <span>{internship.location}</span>
          </div>
          <div className="meta-item">
            <Calendar size={12} />
            <span>{internship.duration}</span>
          </div>
          <div className="meta-item">
            <Clock size={12} />
            <span>{internship.stipend}</span>
          </div>
        </div>

        <div className="internship-footer">
          <div className="footer-left">
            <div className="posted-time">
              <Clock size={12} />
              <span>{internship.postedDate}</span>
            </div>
            <div className="applicants-count">
              <Users size={12} />
              <span>{internship.applicants} applicants</span>
            </div>
          </div>
        </div>
      </div>

      <div className="internship-actions">
        <button className="btn-apply">Apply Now</button>
        <button className="btn-save">Save</button>
      </div>
    </div>
  )
}
