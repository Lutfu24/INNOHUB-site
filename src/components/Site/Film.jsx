import React, { useState } from "react";

// Keçmiş film gecələri
const PAST_FILMS = [
  {
    id: 1,
    title: "Klassik Kino Gecəsi 1",
    desc: "Minimal dizayn, maksimum vizual təcrübə.",
    poster: "https://d23.com/app/uploads/2025/09/00_ZOOTOPIA2-ONLINE-USE-mono_fullcomp.0092.jpg",
  },
  {
    id: 2,
    title: "Klassik Kino Gecəsi 2",
    desc: "Seçilmiş filmlərlə sosial müzakirə.",
    poster: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800",
  },
];

// Gələcək film gecələri
const FUTURE_FILMS = [
  {
    id: 3,
    title: "Yeni Kino Gecəsi",
    desc: "Həftəlik vizual və sosial təcrübə.",
    poster: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800",
  },
];

// Keçmiş Film Kartı
const PastFilmCard = ({ film, onOpen }) => (
  <div
    onClick={onOpen}
    className="cursor-pointer group w-full sm:w-[48%] md:w-[31%]"
  >
    <div className="relative rounded-3xl overflow-hidden shadow-lg">
      <img
        src={film.poster}
        alt={film.title}
        className="w-full h-64 object-cover group-hover:scale-110 duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-5">
        <h3 className="text-white text-xl font-bold">{film.title}</h3>
      </div>
    </div>
  </div>
);

// Gələcək Film Kartı
const FutureFilmCard = ({ film, onRegister }) => (
  <div className="w-full sm:w-[48%] md:w-[31%]">
    <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl duration-300">
      <img src={film.poster} alt={film.title} className="h-48 w-full object-cover" />
      <div className="p-5 space-y-2 text-gray-900">
        <h3 className="text-lg font-bold">{film.title}</h3>
        <p className="text-sm">{film.desc}</p>
        <button
          onClick={onRegister}
          className="w-full bg-[#02C8FE] text-white py-2 rounded-xl hover:bg-blue-500 duration-200 font-semibold mt-4"
        >
          Qeydiyyat
        </button>
      </div>
    </div>
  </div>
);

// Film Detalları Modalı
const FilmDetails = ({ film, onClose }) => (
  <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">
    <div className="bg-white max-w-lg w-full rounded-3xl shadow-2xl p-8 relative">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-500 hover:text-black"
      >
        ✕
      </button>
      <h2 className="text-2xl font-bold mb-4">{film.title}</h2>
      <p className="text-gray-700">{film.desc}</p>
    </div>
  </div>
);

// Qeydiyyat Formu
const RegistrationForm = ({ film, onBack }) => (
  <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">
    <div className="bg-white w-full max-w-lg rounded-3xl shadow-xl p-8">
      <h2 className="text-2xl font-bold text-center mb-6">
        Qeydiyyat – {film.title}
      </h2>
      <form className="flex flex-col gap-4">
        <input className="p-3 border rounded-xl" placeholder="Ad Soyad" />
        <input className="p-3 border rounded-xl" placeholder="Telefon" />
        <input className="p-3 border rounded-xl" placeholder="Email" />
        <button className="bg-[#02C8FE] text-white py-3 rounded-xl hover:bg-blue-500 font-semibold">
          Təsdiq et
        </button>
      </form>
      <button
        onClick={onBack}
        className="mt-4 w-full bg-gray-200 py-3 rounded-xl hover:bg-gray-300 font-semibold"
      >
        Geri
      </button>
    </div>
  </div>
);

const UltraMinimalFilmClubPage = () => {
  const [details, setDetails] = useState(null);
  const [register, setRegister] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="mb-20 max-w-3xl">
        <h1 className="text-4xl font-extrabold mb-5 text-gray-900">
          Ödənişsiz Film Klubu
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          Həftədə bir dəfə seçilmiş filmlərlə premium estetik təcrübə. Dostlarla birlikdə baxın və müzakirə edin.
        </p>
      </div>

      <h2 className="text-3xl font-bold mb-8 text-gray-900">
        Keçmiş film gecələri
      </h2>

      <div className="flex flex-wrap gap-8 mb-16">
        {PAST_FILMS.map((film) => (
          <PastFilmCard
            key={film.id}
            film={film}
            onOpen={() => setDetails(film)}
          />
        ))}
      </div>

      <h2 className="text-3xl font-bold mb-8 text-gray-900">
        Gələcək film gecələri
      </h2>

      <div className="flex flex-wrap gap-8 mb-16">
        {FUTURE_FILMS.map((film) => (
          <FutureFilmCard
            key={film.id}
            film={film}
            onRegister={() => setRegister(film)}
          />
        ))}
      </div>

      {details && <FilmDetails film={details} onClose={() => setDetails(null)} />}
      {register && <RegistrationForm film={register} onBack={() => setRegister(null)} />}
    </div>
  );
};

export default UltraMinimalFilmClubPage;
