import React, { useState } from "react";

const GraphicDesignCoursePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setShowModal(false);
      setSubmitted(false);
    }, 2000);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#cce0ff] via-[#99c2ff] to-[#80b3ff]">

      <div className="absolute -top-40 -left-32 w-96 h-96 bg-blue-300 rounded-full opacity-20 blur-3xl pointer-events-none animate-waveSlow"></div>
      <div className="absolute -bottom-40 -right-40 w-[30rem] h-[30rem] bg-blue-200 rounded-full opacity-20 blur-3xl pointer-events-none animate-waveSlow"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24">

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-6">
            <span className="inline-block text-sm font-semibold text-pink-600 tracking-wide">
              6 aylıq intensiv proqram
            </span>

            <h1 className="text-5xl lg:text-6xl font-extrabold text-[#0b0b0b] leading-tight">
              Qrafik Dizayn <br /> Kursu
            </h1>

            <p className="text-lg text-[#3a3a3a] max-w-xl leading-relaxed">
              Adobe proqramlarını dərin və tətbiq yönümlü şəkildə mənimsəyəcəyin kurs.
              Proqram sonunda vizuallarla düşünməyi, mesajları dizayn vasitəsilə çatdırmağı və
              müştəri tələblərinə uyğun yaradıcı təqdimat etməyi bacaracaqsan.
            </p>

            <p className="text-md text-pink-700 font-semibold">
              Müddət – 6 ay | Həftədə 4 dəfə, hər dərs 2 saat
            </p>

            <button
              onClick={() => setShowModal(true)}
              className="bg-pink-600 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-pink-700 hover:shadow-2xl transform hover:scale-105 transition-all duration-500"
            >
              Müraciət et
            </button>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 bg-pink-100 rounded-[40px] blur-3xl opacity-30 animate-waveSlow"></div>
            <img
              src="https://img.freepik.com/free-vector/hand-drawn-colorful-design-facebook-cover_23-2148874630.jpg?semt=ais_se_enriched&w=740&q=80"
              alt="Graphic Design Course"
              className="relative rounded-[32px] shadow-2xl transform hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        <div className="mt-32 grid md:grid-cols-3 gap-12 text-center">
          <div className="bg-white/60 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            <h3 className="text-xl font-semibold mb-3">Adobe Mastery</h3>
            <p className="text-gray-600">Photoshop, Illustrator və InDesign-da peşəkar bilik əldə et.</p>
          </div>
          <div className="bg-white/60 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            <h3 className="text-xl font-semibold mb-3">Yaradıcılıq</h3>
            <p className="text-gray-600">Vizuallarla mesaj çatdırma və dizayn bacarıqlarını inkişaf etdir.</p>
          </div>
          <div className="bg-white/60 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            <h3 className="text-xl font-semibold mb-3">Portfolio</h3>
            <p className="text-gray-600">Real layihələr ilə portfolio qur və professional səviyyəni göstər.</p>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4 animate-fadeInModal">
          <div className="bg-white rounded-3xl p-8 max-w-lg w-full relative shadow-2xl transform scale-95 animate-fadeScale transition-all duration-500">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl font-bold"
            >
              ✕
            </button>

            {!submitted ? (
              <>
                <h2 className="text-2xl font-bold mb-4 text-center">Qeydiyyat Formu</h2>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                  <input className="p-3 border rounded-xl hover:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-300 transition" placeholder="Ad, Soyad" required/>
                  <input className="p-3 border rounded-xl hover:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-300 transition" placeholder="Telefon" required/>
                  <input className="p-3 border rounded-xl hover:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-300 transition" placeholder="Email" required/>
                  <button type="submit" className="bg-pink-600 text-white py-3 rounded-xl hover:bg-pink-700 transform hover:scale-105 transition-all duration-300 mt-2">
                    Təsdiq
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-12 px-4 animate-fadeInUp">
                <h3 className="text-2xl font-bold text-green-600 mb-4">Qeydiyyat tamamlandı!</h3>
                <p className="text-gray-700 mb-4">Sən uğurla kursa qeyd olundun.</p>
                <button onClick={() => setShowModal(false)} className="bg-gray-200 text-gray-800 py-2 px-6 rounded-full hover:bg-gray-300 transform hover:scale-105 transition">
                  Bağla
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      <style>
        {`
          @keyframes fadeInModal { from { opacity:0; } to { opacity:1; } }
          @keyframes fadeScale { from { opacity:0; transform: scale(0.95);} to { opacity:1; transform: scale(1);} }
          @keyframes fadeInUp { from { opacity:0; transform: translateY(20px);} to { opacity:1; transform: translateY(0);} }
          @keyframes waveSlow { 0%{ transform:translateX(0);}50%{transform:translateX(15px);}100%{transform:translateX(0);} }
          .animate-fadeInModal { animation: fadeInModal 0.5s ease forwards; }
          .animate-fadeScale { animation: fadeScale 0.5s ease forwards; }
          .animate-fadeInUp { animation: fadeInUp 0.5s ease forwards; }
          .animate-waveSlow { animation: waveSlow 4s ease-in-out infinite; }
          .animate-fadeInPage { animation: fadeInUp 1s ease forwards; }
        `}
      </style>
    </section>
  );
};

export default GraphicDesignCoursePage;
