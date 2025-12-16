import React, { useState } from "react";

const ITHelpdeskPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setShowModal(false), 2500);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#f2f6fc] via-[#e6f0ff] to-[#d9e6ff] overflow-hidden px-6 py-24">

      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-r from-[#d9e6ff]/50 via-[#f2f6fc]/30 to-[#d9e6ff]/50 rounded-3xl animate-[wave_15s_ease-in-out_infinite]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">

        <div className="lg:w-1/2 relative">
          <div className="rounded-[40px] overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1581091870620-51a4b285b5c1"
              alt="IT Helpdesk Illustration"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-5xl font-extrabold text-[#0b0b0b] leading-tight">
            IT Helpdesk Kursu
          </h1>
          <p className="text-lg text-gray-700">
            3 aylıq intensiv proqram. İstifadəçilərə texniki dəstək göstərmək, problemləri sürətlə həll etmək və əmək bazarında tələb olunan IT Helpdesk bacarıqlarını əldə etmək.
          </p>

          <div className="flex flex-wrap gap-6">
            <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-6 shadow-lg text-center flex-1">
              <h3 className="font-semibold text-lg mb-2">Müddət</h3>
              <p>3 ay</p>
            </div>
            <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-6 shadow-lg text-center flex-1">
              <h3 className="font-semibold text-lg mb-2">Həftəlik Qrafik</h3>
              <p>2 dəfə, 2 saat</p>
            </div>
          </div>

          <div>
            <button
              onClick={() => { setShowModal(true); setSubmitted(false); }}
              className="bg-blue-700 text-white px-10 py-4 rounded-3xl text-lg font-semibold shadow-lg hover:bg-blue-800 hover:shadow-2xl transition-all duration-300"
            >
              Müraciət et
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4 animate-fade-in">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
            >
              ✕
            </button>

            {!submitted ? (
              <>
                <h2 className="text-2xl font-bold mb-6 text-center">Qeydiyyat</h2>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                  <input className="p-3 border rounded-xl" placeholder="Ad, Soyad" required />
                  <input className="p-3 border rounded-xl" placeholder="Telefon" required />
                  <input className="p-3 border rounded-xl" placeholder="Email" required />
                  <button className="bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition-all duration-300">
                    Təsdiq
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-12">
                <h2 className="text-2xl font-bold text-green-700 mb-4">Qeydiyyat alındı!</h2>
                <p>Təşəkkür edirik, tezliklə sizinlə əlaqə saxlanacaq.</p>
              </div>
            )}
          </div>
        </div>
      )}

      <style>
        {`
          @keyframes wave {
            0%,100% { transform: translateX(0) translateY(0); }
            50% { transform: translateX(20px) translateY(10px); }
          }
          .animate-pulse-slow {
            animation: pulse 3s ease-in-out infinite;
          }
          .animate-fade-in {
            animation: fadeIn 0.5s ease-out forwards;
          }
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(-10px);}
            100% { opacity: 1; transform: translateY(0);}
          }
        `}
      </style>
    </div>
  );
};

export default ITHelpdeskPage;
