import React, { useState } from "react";

const GraphicDesignCoursePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [openSection, setOpenSection] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const toggle = (key) => {
    setOpenSection(openSection === key ? null : key);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setShowModal(false);
      setSubmitted(false);
    }, 1500);
  };

  return (
    <section className="w-full bg-white">

      {/* HERO */}
      <div className="max-w-7xl mx-auto px-6 pt-28 pb-20 grid lg:grid-cols-2 gap-14 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl font-extrabold text-[#02C8FE] leading-tight">
            Qrafik Dizayn <br /> Kursu
          </h1>

          <p className="text-gray-600 max-w-xl">
            Vizual düşüncə, brend dili və real dizayn bacarıqları.
            Portfolio yönümlü, praktik və bazara uyğun kurs.
          </p>

          <button
            onClick={() => setShowModal(true)}
            className="bg-[#02C8FE] text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
          >
            Müraciət et
          </button>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 bg-[#02C8FE]/10 blur-3xl rounded-3xl"></div>
          <img
            src="https://img.freepik.com/free-vector/hand-drawn-colorful-design-facebook-cover_23-2148874630.jpg?w=740&q=80"
            className="relative rounded-3xl shadow-xl"
            alt="Graphic Design"
          />
        </div>
      </div>

      {/* INFO GRID */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6 pb-24">
        {[
          {
            key: "about",
            title: "Kurs haqqında",
            content:
              "Dizaynın əsas prinsipləri, vizual ünsiyyət və kreativ düşüncə. Sıfırdan professional səviyyəyə qədər.",
          },
          {
            key: "duration",
            title: "Müddət və format",
            content:
              "3 ay • Həftədə 3 dəfə • Hər dərs 2 saat • Praktik + mentor dəstəyi",
          },
          {
            key: "skills",
            title: "Qazanılan bacarıqlar",
            content:
              "Photoshop, Illustrator, InDesign • Brend dizayn • Sosial media vizualları",
          },
        ].map((item) => (
          <div
            key={item.key}
            className="border rounded-2xl p-5 cursor-pointer hover:shadow-lg transition"
            onClick={() => toggle(item.key)}
          >
            <h3 className="font-semibold text-lg text-[#02C8FE] flex justify-between">
              {item.title}
              <span>{openSection === item.key ? "−" : "+"}</span>
            </h3>

            {openSection === item.key && (
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                {item.content}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="bg-white w-full max-w-md rounded-2xl p-6 relative shadow-2xl">
            <button
              onClick={() => setShowModal(false)}
              className="absolute right-4 top-4 text-xl text-gray-400"
            >
              ✕
            </button>

            {!submitted ? (
              <>
                <h2 className="text-2xl font-bold text-center text-[#02C8FE] mb-4">
                  Qeydiyyat Formu
                </h2>

                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <input className="p-3 border rounded-lg" placeholder="Ad Soyad" required />
                  <input className="p-3 border rounded-lg" placeholder="Telefon" required />
                  <input className="p-3 border rounded-lg" placeholder="Email" required />
                  <button className="bg-[#02C8FE] text-white py-2 rounded-lg font-semibold">
                    Göndər
                  </button>
                </form>
              </>
            ) : (
              <div className="py-10 text-center">
                <h3 className="text-xl font-bold text-[#02C8FE]">
                  Qeydiyyat tamamlandı ✔
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
