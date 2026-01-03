import { useEffect, useState } from "react";
import { getScholarships } from "../../services/scholarshipservices.js";

const ScholarshipCard = ({ scholarship }) => {
  const { title, image, description } = scholarship;
  return (
    <div className="w-full sm:w-1/3 md:w-1/4 cursor-context-menu transition-transform duration-300 hover:scale-105">
      <div className="relative overflow-hidden rounded-2xl shadow-lg bg-white aspect-[4/5] flex flex-col items-center justify-center p-6 hover:shadow-xl">
        <div className="absolute -top-6 w-28 h-28 rounded-full bg-gray-100 flex items-center justify-center">
          <img src={image} alt={title} className="w-20 h-20 object-contain" />
        </div>

        <h3 className="mt-24 text-lg font-bold text-gray-900 text-center">
          {title}
        </h3>
        <p className="mt-2 text-sm text-gray-500 text-center">{description}</p>
      </div>
    </div>
  );
};

const ScholarshipsWithDetail = () => {
  const [scholarship, setScholarship] = useState();
  useEffect(() => {
    async function showScholarship() {
      const res = await getScholarships();
      setScholarship(res);
    }
    showScholarship();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
        Təqaüd Proqramları
      </h2>
      {
        <div className="flex flex-wrap justify-center gap-8">
          {scholarship &&
            scholarship.map((sch) => (
              <ScholarshipCard
                key={sch._id}
                scholarship={sch}
                onClick={() => setScholarship(sch)}
              />
            ))}
        </div>
      }
    </div>
  );
};

export default ScholarshipsWithDetail;
