import InternshipCard from "./InternshipCard";

const InternshipList = ({ internships }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {internships.map((internship) => (
        <InternshipCard key={internship.internship_id} internship={internship} />
      ))}
    </div>
  );
};

export default InternshipList;
