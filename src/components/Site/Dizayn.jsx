import React, { useState } from "react";

const GraphicDesignCoursePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [showReasons, setShowReasons] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setShowModal(false);
      setSubmitted(false);
    }, 1800);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      {/* HERO GRID */}
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-6">
          <h1 
            className="text-6xl font-extrabold leading-tight text-[#02C8FE] cursor-pointer hover:underline"
            onClick={() => setShowReasons(!showReasons)}
          >
            Qrafik <br /> Dizayn Kursu
          </h1>

          {/* Sebepler */}
          {showReasons && (
            <ul className="mt-4 list-disc pl-5 text-gray-600 space-y-2">
              <li>Vizuallarla mesaj çatdırmağı öyrənmək</li>
              <li>Adobe proqramlarında peşəkar bilik</li>
              <li>Portfolio və real layihələr yaratmaq</li>
            </ul>
          )}

          <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
            Kurs sonunda vizuallarla mesaj çatdırmağı bacaracaqsan.
          </p>

          <button
            onClick={() => setShowModal(true)}
            className="bg-[#02C8FE] text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-xl hover:scale-105 transition"
          >
            Müraciət et
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <div className="absolute -inset-4 bg-[#02C8FE]/10 blur-3xl rounded-3xl"></div>
          <img
            src="https://img.freepik.com/free-vector/hand-drawn-colorful-design-facebook-cover_23-2148874630.jpg?semt=ais_se_enriched&w=740&q=80"
            alt="Graphic Design Course"
            className="relative rounded-[32px] shadow-2xl transition-transform duration-700 hover:scale-105"
          />
        </div>
      </div>

      {/* FEATURES GRID */}
      <div className="mt-32 max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
        <div className="bg-[#02C8FE] text-white p-6 rounded-2xl shadow-lg hover:-translate-y-1 hover:shadow-2xl transition">
          <h3 className="text-xl font-semibold">Adobe Mastery</h3>
          <p className="text-sm">Photoshop, Illustrator və InDesign-də peşəkar bilik əldə et.</p>
        </div>
        <div className="bg-[#02C8FE] text-white p-6 rounded-2xl shadow-lg hover:-translate-y-1 hover:shadow-2xl transition">
          <h3 className="text-xl font-semibold">Yaradıcılıq</h3>
          <p className="text-sm">Vizuallarla mesaj çatdır və dizayn bacarıqlarını inkişaf etdir.</p>
        </div>
        <div className="bg-[#02C8FE] text-white p-6 rounded-2xl shadow-lg hover:-translate-y-1 hover:shadow-2xl transition">
          <h3 className="text-xl font-semibold">Portfolio</h3>
          <p className="text-sm">Real layihələr ilə portfolio qur və professional səviyyəni göstər.</p>
        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-3xl p-8 max-w-lg w-full relative shadow-2xl animate-[fadeIn_.3s]">
            <button
              onClick={() => setShowModal(false)}
              className="absolute right-4 top-4 text-gray-400 hover:text-black text-xl font-bold"
            >
              ✕
            </button>

            {!submitted ? (
              <>
                <h2 className="text-3xl font-bold text-center text-[#02C8FE] mb-6">
                  Qeydiyyat Formu
                </h2>

                <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                  <input className="p-3 border rounded-xl" placeholder="Ad Soyad" required />
                  <input className="p-3 border rounded-xl" placeholder="Telefon" required />
                  <input className="p-3 border rounded-xl" placeholder="Email" required />
                  <button
                    type="submit"
                    className="bg-[#02C8FE] text-white px-5 py-2 rounded-lg font-semibold mt-2"
                  >
                    Göndər
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-16">
                <h3 className="text-2xl font-bold text-[#02C8FE]">
                  Qeydiyyat tamamlandı!
                </h3>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default GraphicDesignCoursePage;
