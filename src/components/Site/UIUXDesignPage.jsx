import React, { useState } from "react";

const UIUXDesignPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openSyllabus, setOpenSyllabus] = useState(null);

  const syllabus = [
    {
      title: "User Research & Empathy",
      content: "User persona, interview, usability testing və problem analizi."
    },
    {
      title: "Information Architecture",
      content: "User flow, sitemap, strukturlaşdırılmış dizayn yanaşması."
    },
    {
      title: "Wireframing & Prototyping",
      content: "Low & high fidelity wireframe, Figma ilə prototiplər."
    },
    {
      title: "UI Design & Visual Systems",
      content: "Typography, color system, spacing və design systems."
    },
    {
      title: "UX Strategy & Testing",
      content: "A/B testing, usability test, iterativ dizayn yanaşması."
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setShowModal(false);
      setSubmitted(false);
    }, 1500);
  };

  return (
    <section className="min-h-screen bg-gray-50">
      {/* HERO */}
      <div className="max-w-7xl mx-auto px-6 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h1 className="text-5xl font-extrabold text-[#00B8D9] mb-6">
              UI / UX Dizayn <br /> Kursu
            </h1>
            <p className="text-gray-700 text-lg max-w-xl mb-6">
              İstifadəçi mərkəzli düşüncə, real məhsullar və professional dizayn
              prosesləri ilə UI/UX sahəsini dərindən öyrən.
            </p>
            <button
              onClick={() => setShowModal(true)}
              className="bg-[#00B8D9] text-white px-6 py-3 rounded-xl font-semibold"
            >
              Kursa qoşul
            </button>
          </div>

          <img
            src="https://cdn.dribbble.com/users/1078341/screenshots/14728164/media/0d5f7ee6b8f5947f48b3b9c6da4b6ff0.png"
            alt="UI UX"
            className="rounded-3xl shadow-2xl"
          />
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-3 gap-10">
          {/* LEFT – SYLLABUS */}
          <div className="bg-white rounded-3xl shadow-lg p-6 h-fit">
            <h2 className="text-xl font-bold mb-4 text-gray-900">
              Kursun strukturu
            </h2>

            <div className="space-y-3">
              {syllabus.map((item, idx) => (
                <div key={idx} className="border rounded-xl overflow-hidden">
                  <button
                    onClick={() =>
                      setOpenSyllabus(openSyllabus === idx ? null : idx)
                    }
                    className="w-full px-4 py-3 text-left font-semibold text-gray-800 flex justify-between"
                  >
                    {item.title}
                    <span>{openSyllabus === idx ? "–" : "+"}</span>
                  </button>

                  {openSyllabus === idx && (
                    <div className="px-4 pb-4 text-sm text-gray-600">
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT – CONTENT */}
          <div className="lg:col-span-2 space-y-12">
            {/* INFO CARDS */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { title: "Müddət", text: "6 ay – həftədə 3 dəfə, hər dərs 3 saat" },
                { title: "Praktika", text: "Real məhsullar üzərində iş" },
                { title: "Portfolio", text: "Final layihə + case study" },
                { title: "Tools", text: "Figma, FigJam, UX tools" },
                { title: "Mentorluq", text: "Feedback və design review" },
                { title: "Karyera", text: "Junior UI/UX dizayner hazırlığı" }
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-2xl shadow-lg"
                >
                  <h3 className="text-[#00B8D9] font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.text}</p>
                </div>
              ))}
            </div>

            {/* FEATURE BLOCKS */}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                "User Research",
                "Wireframing",
                "Visual Design"
              ].map((f, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl shadow-lg p-6 text-center"
                >
                  <h3 className="text-lg font-semibold text-[#00B8D9]">
                    {f}
                  </h3>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center">
              <button
                onClick={() => setShowModal(true)}
                className="bg-[#00B8D9] text-white px-8 py-3 rounded-xl font-semibold"
              >
                Qeydiyyatdan keç
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-3xl p-6 max-w-md w-full relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 font-bold"
            >
              ✕
            </button>

            {!submitted ? (
              <>
                <h2 className="text-xl font-bold text-[#00B8D9] mb-4 text-center">
                  Qeydiyyat Formu
                </h2>
                <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                  <input className="p-3 border rounded-xl" placeholder="Ad Soyad" />
                  <input className="p-3 border rounded-xl" placeholder="Telefon" />
                  <input className="p-3 border rounded-xl" placeholder="Email" />
                  <button className="bg-[#00B8D9] text-white py-2 rounded-xl">
                    Göndər
                  </button>
                </form>
              </>
            ) : (
              <div className="py-10 text-center font-bold text-[#00B8D9]">
                Qeydiyyat tamamlandı ✔
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default UIUXDesignPage;
