import React, { useState } from "react";

const UIUXDesignPage = () => {
  const [showModal, setShowModal] = useState(false);
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

      {/* HERO */}
      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-24">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-6">
            <h1 className="text-6xl font-extrabold leading-tight text-[#00B8D9]">
              UI/UX <br/> Dizayn Kursu
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
              İstifadəçi təcrübəsi və interfeys dizaynını strateji və tətbiq yönümlü şəkildə öyrən.
            </p>

            <button
              onClick={() => setShowModal(true)}
              className="bg-[#00B8D9] text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-xl hover:scale-105 transition"
            >
              Müraciət et
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="absolute -inset-4 bg-[#00B8D9]/10 blur-3xl rounded-3xl"></div>
            <img
              src="https://cdn.dribbble.com/users/1078341/screenshots/14728164/media/0d5f7ee6b8f5947f48b3b9c6da4b6ff0.png"
              alt="UI/UX Design Course"
              className="relative rounded-[32px] shadow-2xl transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>

        {/* FEATURES */}
        <div className="mt-32 grid md:grid-cols-3 gap-12 text-center">
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:-translate-y-1 hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold text-[#00B8D9]">User Research</h3>
            <p className="text-gray-500 text-sm">İstifadəçi ehtiyaclarını dərindən öyrən.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:-translate-y-1 hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold text-[#00B8D9]">Wireframing</h3>
            <p className="text-gray-500 text-sm">Fikirləri sürətli prototiplərlə test et.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:-translate-y-1 hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold text-[#00B8D9]">Visual Design</h3>
            <p className="text-gray-500 text-sm">Estetik interfeys və tipografiya biliklərini tətbiq et.</p>
          </div>
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
                <h2 className="text-3xl font-bold text-center text-[#00B8D9] mb-6">
                  Qeydiyyat Formu
                </h2>

                <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                  <input className="p-3 border rounded-xl" placeholder="Ad Soyad" required />
                  <input className="p-3 border rounded-xl" placeholder="Telefon" required />
                  <input className="p-3 border rounded-xl" placeholder="Email" required />
                  <button
                    type="submit"
                    className="bg-[#00B8D9] text-white px-5 py-2 rounded-lg font-semibold mt-2"
                  >
                    Göndər
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-16">
                <h3 className="text-2xl font-bold text-[#00B8D9]">
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

export default UIUXDesignPage;
