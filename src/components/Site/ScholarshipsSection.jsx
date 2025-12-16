import React, { useState } from "react";

const SCHOLARSHIPS = [
  {
    id: 1,
    name: "Tech Innovators Scholarship",
    imageUrl: "/images/scholarship_tech.png",
    tagline: "Gələcəyin texnologiya liderlərini dəstəkləyir.",
    description: `Tech Innovators Scholarship gənc və istedadlı tələbələrə təhsil və layihələrində dəstək verir. Burada mentorlarla işləmək və innovativ layihələrini inkişaf etdirmək imkanı var.`,
  },
  {
    id: 2,
    name: "Global Leaders Grant",
    imageUrl: "/images/scholarship_global.png",
    tagline: "Dünya səviyyəsində lider ol!",
    description: `Global Leaders Grant tələbələrin beynəlxalq səviyyədə təhsil və təcrübə imkanlarını genişləndirir, onların liderlik bacarıqlarını artırır.`,
  },
  {
    id: 3,
    name: "Environmental Heroes Scholarship",
    imageUrl: "/images/scholarship_env.png",
    tagline: "Dünyanı qoruyan gənclər üçün.",
    description: `Environmental Heroes Scholarship ekoloji layihələrdə iştirak edən gənclərə dəstək verir və onların innovativ həllər tapmasına imkan yaradır.`,
  },
  {
    id: 4,
    name: "Innovation & Startup Fund",
    imageUrl: "/images/scholarship_startup.png",
    tagline: "İdeyanı reallığa çevir!",
    description: `Innovation & Startup Fund gənclərin startap layihələrini maliyyələşdirir və onlara mentor dəstəyi təqdim edir.`,
  },
];

const ScholarshipCard = ({ scholarship, onClick }) => {
  const { name, imageUrl, tagline } = scholarship;
  return (
    <div
      onClick={onClick}
      className="w-full sm:w-1/3 md:w-1/4 cursor-pointer transition-transform duration-300 hover:scale-105"
    >
      <div className="relative overflow-hidden rounded-2xl shadow-lg bg-white aspect-[4/5] flex flex-col items-center justify-center p-6 hover:shadow-xl">
        <div className="absolute -top-6 w-28 h-28 rounded-full bg-gray-100 flex items-center justify-center">
          <img src={imageUrl} alt={name} className="w-20 h-20 object-contain" />
        </div>

        <h3 className="mt-24 text-lg font-bold text-gray-900 text-center">{name}</h3>
        <p className="mt-2 text-sm text-gray-500 text-center">{tagline}</p>
      </div>
    </div>
  );
};

const ScholarshipsWithDetail = () => {
  const [selectedScholarship, setSelectedScholarship] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Təqaüd Proqramları</h2>

      {!selectedScholarship && (
        <div className="flex flex-wrap justify-center gap-8">
          {SCHOLARSHIPS.map((sch) => (
            <ScholarshipCard
              key={sch.id}
              scholarship={sch}
              onClick={() => setSelectedScholarship(sch)}
            />
          ))}
        </div>
      )}

      {selectedScholarship && (
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">{selectedScholarship.name}</h1>

          <div className="flex justify-center mb-8">
            <img
              src={selectedScholarship.imageUrl}
              alt={selectedScholarship.name}
              className="w-80 h-80 object-contain rounded-2xl shadow-2xl"
            />
          </div>

          <p className="text-gray-700 text-lg leading-relaxed">{selectedScholarship.description}</p>

          <div className="flex justify-center mt-10">
            <button
              onClick={() => setSelectedScholarship(null)}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Geri
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScholarshipsWithDetail;
