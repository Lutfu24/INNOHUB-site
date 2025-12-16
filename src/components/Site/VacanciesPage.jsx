import React, { useState } from "react";

const VACANCIES = [
  {
    id: 1,
    title: "Frontend Developer",
    location: "Gəncə",
    type: "Tam zamanlı",
    description:
      "HTML, CSS, JavaScript və React üzrə biliklər tələb olunur. Komanda ilə əməkdaşlıq bacarığı vacibdir.",
  },
  {
    id: 2,
    title: "UI/UX Designer",
    location: "Gəncə",
    type: "Part-time",
    description:
      "Figma və Adobe XD ilə dizayn təcrübəsi olan dizayner axtarılır. Kreativ və detalçı olmaq önəmlidir.",
  },
  {
    id: 3,
    title: "Digital Marketing Specialist",
    location: "Gəncə",
    type: "Tam zamanlı",
    description:
      "SEO, SMM və analitika üzrə biliklərə malik mütəxəssis axtarılır. Strateji düşünmə bacarığı vacibdir.",
  },
];

const VacancyCard = ({ vacancy, onClick }) => (
  <div
    onClick={onClick}
    className="w-full sm:w-1/3 cursor-pointer transition-transform duration-300 hover:scale-105"
  >
    <div className="relative overflow-hidden rounded-2xl shadow-lg bg-white p-6 hover:shadow-xl">
      <h3 className="text-xl font-bold text-gray-900">{vacancy.title}</h3>
      <p className="mt-2 text-sm text-gray-500">{vacancy.location} • {vacancy.type}</p>
    </div>
  </div>
);

const VacancyDetail = ({ vacancy, onBack }) => (
  <div className="max-w-4xl mx-auto px-4 py-12 text-center">
    <h1 className="text-4xl font-bold text-gray-900 mb-6">{vacancy.title}</h1>
    <p className="text-gray-600 mb-4">{vacancy.location} • {vacancy.type}</p>
    <p className="text-gray-700 text-lg leading-relaxed">{vacancy.description}</p>

    <div className="mt-12 text-left max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Müraciət Formu</h2>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Adınız" className="p-3 border rounded-lg"/>
        <input type="email" placeholder="Email" className="p-3 border rounded-lg"/>
        <textarea placeholder="Mesajınız / CV linki" className="p-3 border rounded-lg"></textarea>
        <button type="submit" className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          Göndər
        </button>
      </form>
    </div>

    <div className="flex justify-center mt-10">
      <button
        onClick={onBack}
        className="px-6 py-3 bg-gray-300 text-gray-900 rounded-lg hover:bg-gray-400 transition"
      >
        Geri
      </button>
    </div>
  </div>
);

const VacanciesPage = () => {
  const [selectedVacancy, setSelectedVacancy] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {!selectedVacancy && (
        <>
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Vakansiyalar</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {VACANCIES.map((vacancy) => (
              <VacancyCard
                key={vacancy.id}
                vacancy={vacancy}
                onClick={() => setSelectedVacancy(vacancy)}
              />
            ))}
          </div>
        </>
      )}

      {selectedVacancy && (
        <VacancyDetail
          vacancy={selectedVacancy}
          onBack={() => setSelectedVacancy(null)}
        />
      )}
    </div>
  );
};

export default VacanciesPage;
