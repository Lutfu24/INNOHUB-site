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
    { label: "Müddət", value: "9 ay – həftədə 3 dəfə, hər dərs 3 saat" },
    { label: "Real layihələr", value: "Praktiki real dünya layihələri" },
    { label: "Karyera fokuslu", value: "Job-ready hazırlıq" },
    { label: "Full Stack", value: "Frontend + Backend birlikdə" },
    { label: "Database", value: "MongoDB & SQL" },
    { label: "Deployment", value: "Canlı serverlərdə yayınlama" },
  ];

  return (
    <section className="min-h-screen bg-gray-50 px-6 py-16">

      {/* HERO */}
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#02C8FE] mb-4">
          Full-Stack Proqramlaşdırma Kursu
        </h1>
        <p className="text-gray-700 max-w-3xl mx-auto">
          9 aylıq intensiv proqram — frontend və backend biliklərini real layihələrlə
          professional səviyyəyə qaldır.
        </p>
      </div>

      {/* MAIN GRID */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_2fr] gap-10">

        {/* LEFT – SYLLABUS */}
<div className="bg-white rounded-3xl shadow-lg p-6 h-fit lg:sticky lg:top-24">
          <h2 className="text-2xl font-bold text-[#02C8FE] mb-4">Syllabus</h2>

          {syllabus.map((item, idx) => (
            <div key={idx} className="border-b last:border-none">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex justify-between items-center py-4 text-left"
              >
                <span className="font-semibold text-gray-800">{item.title}</span>
                <span className="text-gray-500">
                  {openIndex === idx ? "−" : "+"}
                </span>
              </button>

              {openIndex === idx && (
                <p className="pb-4 text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* RIGHT – CONTENT */}
        <div className="space-y-14">

          {/* COURSE INFO */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Kurs haqqında</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {courseInfo.map((info, idx) => (
                <div key={idx} className="bg-white p-4 rounded-2xl shadow-md">
                  <h3 className="font-bold text-gray-800 mb-1">{info.label}</h3>
                  <p className="text-gray-600 text-sm">{info.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* PROJECTS */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Real Layihələr</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {["E-commerce", "Blog Platform", "Portfolio"].map((title, idx) => (
                <div key={idx} className="bg-white rounded-2xl shadow-md overflow-hidden">
                  <div className="h-28 bg-gray-200 flex items-center justify-center text-gray-500">
                    Preview
                  </div>
                  <div className="p-3">
                    <h3 className="font-semibold text-[#02C8FE]">{title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <button
              onClick={() => setShowModal(true)}
              className="bg-[#02C8FE] text-white px-8 py-3 rounded-xl font-semibold"
            >
              Kursa Qoşul
            </button>
          </div>

        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-sm relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute right-4 top-4 text-gray-400"
            >
              ✕
            </button>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-3">
                <h2 className="text-xl font-bold text-center text-[#02C8FE]">
                  Qeydiyyat
                </h2>
                <input className="w-full p-2 border rounded-lg" placeholder="Ad Soyad" />
                <input className="w-full p-2 border rounded-lg" placeholder="Telefon" />
                <input className="w-full p-2 border rounded-lg" placeholder="Email" />
                <button className="w-full bg-[#02C8FE] text-white py-2 rounded-lg">
                  Göndər
                </button>
              </form>
            ) : (
              <div className="text-center py-8 font-bold text-[#02C8FE]">
                Qeydiyyat tamamlandı!
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default FullstackProPage;
