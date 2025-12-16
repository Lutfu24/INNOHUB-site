import React, { useState } from "react";

const VOLUNTEER_PROGRAMS = [
  {
    id: 1,
    name: "Ekoloji Təmizlik",
    imageUrl: "/images/cleaning.png",
    tagline: "Cəmiyyəti təmiz və yaşanılacaq hala gətir!",
    description: `Bu proqram çərçivəsində iştirakçılar park və ətraf mühiti təmizləyərək cəmiyyət üçün dəyərli iş görürlər. Təcrübə, sosial şəbəkə və təhsil imkanları təqdim olunur.`,
  },
  {
    id: 2,
    name: "Yaşlılara Yardım",
    imageUrl: "/images/senior_help.png",
    tagline: "Sevgi və qayğı ilə fərq yarat!",
    description: `Bu proqramda könüllülər yaşlı insanlara yardım göstərir, onların sosial aktivliyini artırır və gündəlik həyatlarına dəstək olurlar.`,
  },
  {
    id: 3,
    name: "Uşaq Tədbirləri",
    imageUrl: "/images/kids_event.png",
    tagline: "Gələcəyin nəsillərinə dəstək ol!",
    description: `Könüllülər uşaqlar üçün əyləncəli və maarifləndirici tədbirlər təşkil edir, onların inkişafına və təhsilinə töhfə verirlər.`,
  },
];

const Card = ({ program, onClick }) => (
  <div
    onClick={onClick}
    className="w-full sm:w-1/3 md:w-1/4 cursor-pointer transition-transform duration-300 hover:scale-105"
  >
    <div className="relative overflow-hidden rounded-2xl shadow-lg bg-white aspect-[4/5] flex flex-col items-center justify-center p-6 hover:shadow-xl">
      <div className="absolute -top-6 w-28 h-28 rounded-full bg-gray-100 flex items-center justify-center">
        <img src={program.imageUrl} alt={program.name} className="w-20 h-20 object-contain" />
      </div>

      <h3 className="mt-24 text-lg font-bold text-gray-900 text-center">{program.name}</h3>
      <p className="mt-2 text-sm text-gray-500 text-center">{program.tagline}</p>
    </div>
  </div>
);

const ProgramDetail = ({ program, onBack }) => (
  <div className="max-w-4xl mx-auto px-4 py-12 text-center">
    <h1 className="text-4xl font-bold text-gray-900 mb-6">{program.name}</h1>

    <div className="flex justify-center mb-8">
      <img src={program.imageUrl} alt={program.name} className="w-80 h-80 object-contain rounded-2xl shadow-2xl" />
    </div>

    <p className="text-gray-700 text-lg leading-relaxed">{program.description}</p>

    <div className="flex justify-center mt-10 gap-4">
      <button
        onClick={onBack}
        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Geri
      </button>
    </div>

    <div className="mt-12 text-left max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Müraciət Formu</h2>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Adınız" className="p-3 border rounded-lg"/>
        <input type="email" placeholder="Email" className="p-3 border rounded-lg"/>
        <textarea placeholder="Mesajınız" className="p-3 border rounded-lg"></textarea>
        <button type="submit" className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
          Göndər
        </button>
      </form>
    </div>
  </div>
);

const VolunteerProgramsPage = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {!selectedProgram && (
        <>
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Könüllülük Proqramları</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {VOLUNTEER_PROGRAMS.map((program) => (
              <Card key={program.id} program={program} onClick={() => setSelectedProgram(program)} />
            ))}
          </div>
        </>
      )}

      {selectedProgram && (
        <ProgramDetail program={selectedProgram} onBack={() => setSelectedProgram(null)} />
      )}
    </div>
  );
};

export default VolunteerProgramsPage;
