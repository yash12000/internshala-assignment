const InternshipCard = ({ internship }) => {
  return (
    <div className="border p-4 rounded shadow-sm bg-white">
      <h2 className="text-lg font-semibold">{internship.profile_name}</h2>
      <p className="text-sm text-gray-600">Location: {internship.location_names}</p>
      <p className="text-sm text-gray-600">Duration: {internship.duration}</p>
    </div>
  );
};

export default InternshipCard;
