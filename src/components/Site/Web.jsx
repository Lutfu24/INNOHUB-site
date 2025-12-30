import React, { useState } from "react";

const FullstackProPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setShowModal(false);
      setSubmitted(false);
    }, 1500);
  };

  const syllabus = [
    { title: "Frontend Development", desc: "HTML, CSS, JavaScript, React ilə UI qurulması." },
    { title: "Backend Development", desc: "Node.js, Express, REST API, Auth sistemləri." },
    { title: "Database", desc: "MongoDB, SQL, data modelləşməsi." },
    { title: "Deployment", desc: "Docker, AWS, Heroku ilə real deploy." },
    { title: "Career Skills", desc: "Git, teamwork, CV və interview hazırlığı." },
  ];

  const courseInfo = [
    { label: "Müddət", value: "9 ay – həftədə 3 dəfə" },
    { label: "Real layihələr", value: "Praktiki real dünya layihələri" },
    { label: "Karyera fokuslu", value: "Job-ready hazırlıq" },
    { label: "Full Stack", value: "Frontend + Backend" },
    { label: "Database", value: "MongoDB & SQL" },
    { label: "Deployment", value: "Canlı serverlər" },
  ];

  return (
    <section className="min-h-screen w-full bg-gray-50 overflow-x-hidden px-3 sm:px-6 py-10">

      {/* HERO */}
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#02C8FE] mb-3">
          Full-Stack Proqramlaşdırma
        </h1>
        <p className="text-gray-700 text-sm sm:text-base max-w-xl mx-auto">
          9 aylıq intensiv proqram — real layihələrlə professional səviyyə.
        </p>
      </div>

      {/* MAIN GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 overflow-x-hidden">

        {/* SYLLABUS */}
        <div className="lg:col-span-1">
          <div
            className="
              bg-white
              rounded-2xl
              p-4
              shadow-none
              lg:shadow-lg
              lg:rounded-3xl
              lg:sticky lg:top-24
              max-w-full
              min-w-0
            "
          >
            <h2 className="text-xl font-bold text-[#02C8FE] mb-4">
              Syllabus
            </h2>

            {syllabus.map((item, idx) => (
              <div key={idx} className="border-b last:border-none min-w-0">
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full flex justify-between items-center py-3 text-left"
                >
                  <span className="font-semibold text-gray-800 text-sm">
                    {item.title}
                  </span>
                  <span>{openIndex === idx ? "−" : "+"}</span>
                </button>

                {openIndex === idx && (
                  <p className="pb-3 text-gray-600 text-xs">
                    {item.desc}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CONTENT */}
        <div className="lg:col-span-2 space-y-10 min-w-0">

          {/* COURSE INFO */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-4">
              Kurs haqqında
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {courseInfo.map((info, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 rounded-xl shadow min-w-0"
                >
                  <h3 className="font-bold text-sm">{info.label}</h3>
                  <p className="text-xs text-gray-600">{info.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* PROJECTS */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-4">
              Real Layihələr
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {["E-commerce", "Blog", "Portfolio"].map((title, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl shadow min-w-0"
                >
                  <div className="h-24 bg-gray-200 flex items-center justify-center text-xs">
                    Preview
                  </div>
                  <div className="p-3 font-semibold text-[#02C8FE] text-sm">
                    {title}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <button
              onClick={() => setShowModal(true)}
              className="bg-[#02C8FE] text-white px-6 py-3 rounded-xl text-sm"
            >
              Kursa Qoşul
            </button>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 w-screen overflow-x-hidden bg-black/60 flex items-center justify-center z-50 px-2">
          <div className="bg-white rounded-xl p-4 w-full max-w-[300px] mx-auto min-w-0">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-3">
                <h2 className="text-center font-bold text-[#02C8FE]">
                  Qeydiyyat
                </h2>
                <input className="w-full p-2 border rounded-lg text-sm" placeholder="Ad Soyad" />
                <input className="w-full p-2 border rounded-lg text-sm" placeholder="Telefon" />
                <input className="w-full p-2 border rounded-lg text-sm" placeholder="Email" />
                <button className="w-full bg-[#02C8FE] text-white py-2 rounded-lg">
                  Göndər
                </button>
              </form>
            ) : (
              <div className="text-center text-[#02C8FE] font-bold py-6">
                Hazırdır ✅
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default FullstackProPage;
