import React from "react";

const InternshipCard = ({ internship }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded border hover:shadow-lg transition">
      <h3 className="text-lg font-bold">{internship.profile}</h3>
      <p className="text-sm text-gray-600">{internship.company_name}</p>
      <p className="text-sm mt-1">
        <strong>Location:</strong> {internship.location}
      </p>
      <p className="text-sm">
        <strong>Duration:</strong> {internship.duration} months
      </p>
      <p className="text-sm">
        <strong>Stipend:</strong> ₹{internship.stipend}
      </p>
    </div>
  );
};

export default InternshipCard;
