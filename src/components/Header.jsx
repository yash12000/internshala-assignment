import { ChevronDown } from "lucide-react"
import "./Header.css"

export function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span className="logo-text">INTERNSHALA</span>
        </div>

        <nav className="nav">
          <div className="nav-item active">
            <span>Internships</span>
            <ChevronDown size={16} />
          </div>
          <div className="nav-item">
            <span>Courses</span>
            <span className="offer-badge">OFFER</span>
            <ChevronDown size={16} />
          </div>
          <div className="nav-item">
            <span>Jobs</span>
            <ChevronDown size={16} />
          </div>
        </nav>

        <div className="auth-section">
          <span className="auth-link">Login / Register</span>
          <ChevronDown size={16} />
        </div>
      </div>
    </header>
  )
}
