import React, { useState, useEffect } from "react";

const UltraMinimalFilmClubPage = () => {
  const [film, setFilm] = useState({
    title: "Klassik Kino Gecəsi",
    desc: "Seçilmiş filmlərlə həftəlik vizual və sosial təcrübə. Minimal dizayn, maksimum dəyər.",
    poster: "https://d23.com/app/uploads/2025/09/00_ZOOTOPIA2-ONLINE-USE-mono_fullcomp.0092.jpg",
  });

  // Placeholder: gələcəkdə API ilə əvəz olunacaq
  useEffect(() => {
    // fetch("/api/film-club-weekly").then(...).then(data => setFilm(data));
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#c0d9ff] via-[#88bfff] to-[#66b3ff] overflow-hidden px-6 py-24 flex flex-col items-center">

      {/* Decorative subtle shapes */}
      <div className="absolute -top-40 -left-32 w-80 h-80 bg-blue-300 rounded-full opacity-10 blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-200 rounded-full opacity-10 blur-3xl pointer-events-none"></div>

      {/* Hero */}
      <div className="text-center mb-16 max-w-3xl z-10 relative">
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#111] mb-4 leading-tight tracking-tight">
          Ödənişsiz Film Klubu
        </h1>
        <p className="text-lg md:text-xl text-[#333] leading-relaxed">
          Həftədə bir dəfə seçilmiş filmlərlə premium estetik təcrübə. Dostlarla birlikdə baxın və müzakirə edin.
        </p>
      </div>

      {/* Film Card with overlay */}
      <div className="relative w-full max-w-4xl mb-20">
        <img
          src={film.poster}
          alt={film.title}
          className="rounded-3xl shadow-2xl w-full object-cover h-[400px]"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-3xl pointer-events-none"></div>

        {/* Film Info on top */}
        <div className="absolute bottom-6 left-6 text-white z-10 max-w-[90%]">
          <h2 className="text-3xl font-semibold mb-2">{film.title}</h2>
          <p className="text-lg">{film.desc}</p>
        </div>
      </div>

      {/* Value Proposition */}
      <div className="grid md:grid-cols-1 gap-12 w-full max-w-4xl mb-20 text-center">
        {[
          { title: "Vizual Təcrübə", desc: "Minimal və estetik seçilmiş filmlər." },
          { title: "Sosial Müzakirə", desc: "Dostlarla birlikdə fikir paylaşımı." },
          { title: "Həftəlik Ritm", desc: "Hər həftə yeni film və yeni təcrübə." },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-3xl p-8 shadow-md hover:shadow-lg transition duration-200"
          >
            <h3 className="text-2xl font-semibold text-blue-700 mb-2">{item.title}</h3>
            <p className="text-gray-700 text-[16px] leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Inspirational Quote */}
      <div className="bg-blue-100/50 rounded-3xl p-10 mb-16 shadow-sm text-center max-w-3xl">
        <p className="text-gray-800 text-[17px] leading-relaxed">
          “Hər film bir təcrübədir — gör, hiss et və paylaş.”
        </p>
      </div>

      {/* CTA */}
      <button className="bg-blue-700 text-white px-12 py-4 rounded-3xl text-lg font-semibold shadow-md hover:bg-blue-800 hover:shadow-lg active:scale-95 transition duration-150">
        Klubda Qoşul
      </button>
    </div>
  );
};

export default UltraMinimalFilmClubPage;
