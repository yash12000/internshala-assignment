"use client";

import { Filter, Search } from "lucide-react";
import "./Filters.css";

export function Filters({ filters, onFilterChange, onClearAll }) {
  const handleInputChange = (field, value) => {
    onFilterChange({
      ...filters,
      [field]: value,
    });
  };

  return (
    <div className="filters-container">
      <div className="filters-header">
        <Filter size={16} />
        <span>Filters</span>
      </div>

      <div className="filter-group">
        <label className="filter-label">Profile</label>
        <input
          type="text"
          placeholder="e.g. Marketing"
          value={filters.profile}
          onChange={(e) => handleInputChange("profile", e.target.value)}
          className="filter-input"
        />
      </div>

      <div className="filter-group">
        <label className="filter-label">Location</label>
        <input
          type="text"
          placeholder="e.g. Delhi"
          value={filters.location}
          onChange={(e) => handleInputChange("location", e.target.value)}
          className="filter-input"
        />
      </div>

      <div className="filter-group">
        <label className="filter-label">Duration</label>
        <input
          type="text"
          placeholder="e.g. 3 Months"
          value={filters.duration}
          onChange={(e) => handleInputChange("duration", e.target.value)}
          className="filter-input"
        />
      </div>

      <div className="checkbox-group">
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={filters.workFromHome}
            onChange={(e) =>
              handleInputChange("workFromHome", e.target.checked)
            }
          />
          <span className="checkmark"></span>
          Work from home
        </label>
      </div>

      <div className="checkbox-group">
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={filters.partTime}
            onChange={(e) => handleInputChange("partTime", e.target.checked)}
          />
          <span className="checkmark"></span>
          Part-time
        </label>
      </div>

      <div className="filter-group">
        <label className="filter-label">
          Desired minimum monthly stipend (₹)
        </label>
        <div className="slider-container">
          <input
            type="range"
            min="0"
            max="50000"
            step="1000"
            value={filters.minStipend}
            onChange={(e) =>
              handleInputChange("minStipend", Number.parseInt(e.target.value))
            }
            className="slider"
          />
          <div className="slider-labels">
            <span>0</span>
            <span>2K</span>
            <span>4K</span>
            <span>6K</span>
            <span>8K</span>
            <span>10K</span>
          </div>
          <div className="slider-value">
            ₹{filters.minStipend.toLocaleString()}
          </div>
        </div>
      </div>

      <button className="clear-all-btn" onClick={onClearAll}>
        Clear all
      </button>

      <div className="keyword-search">
        <h3>Keyword Search</h3>
        <div className="search-input-container">
          <input
            type="text"
            placeholder="e.g. Design, Mumbai, Infosys"
            value={filters.keyword}
            onChange={(e) => handleInputChange("keyword", e.target.value)}
            className="search-input"
          />
          <Search size={16} className="search-icon" />
        </div>
      </div>
    </div>
  );
}
