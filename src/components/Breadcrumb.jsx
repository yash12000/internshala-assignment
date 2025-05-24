import { ChevronRight } from "lucide-react";
import "./Breadcrumb.css";

export function Breadcrumb() {
  return (
    <nav className="breadcrumb">
      <span className="breadcrumb-item">Home</span>
      <ChevronRight size={16} className="breadcrumb-separator" />
      <span className="breadcrumb-item active">Internships</span>
    </nav>
  );
}
