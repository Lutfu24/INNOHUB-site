import React, { useState } from "react";

const FullstackPage = () => {
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
    <section className="relative min-h-screen overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-[#f5f8ff] via-white to-[#eef3ff] overflow-hidden">
        <svg className="absolute bottom-0 w-full h-96 opacity-20 animate-wave" viewBox="0 0 1440 320">
          <path fill="#4f83ff" fillOpacity="0.1" d="M0,96L48,112C96,128,192,160,288,181.3C384,203,480,213,576,197.3C672,181,768,139,864,112C960,85,1056,75,1152,101.3C1248,128,1344,192,1392,224L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-24 transition-all duration-700 animate-fadeInPage">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <div className="space-y-6">
            <span className="inline-block text-sm font-semibold text-blue-600 tracking-wide">
              9 aylıq intensiv proqram
            </span>

            <h1 className="text-5xl lg:text-6xl font-extrabold text-[#0b0b0b] leading-tight">
              Full-Stack <br /> Proqramlaşdırma
            </h1>

            <p className="text-lg text-[#3a3a3a] max-w-xl leading-relaxed">
              Frontend və backend sahələrini sistemli şəkildə birləşdirən,
              real layihələr üzərindən öyrədilən peşəkar təlim proqramı.
              Məqsədimiz səni əmək bazarına tam hazır developer kimi formalaşdırmaqdır.
            </p>

            <p className="text-md text-blue-700 font-semibold">
              Müddət – 9 ay | Həftədə 3 dəfə, hər dərs 3 saat
            </p>

            <button
              onClick={() => setShowModal(true)}
              className="bg-blue-600 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-blue-700 hover:shadow-2xl transform hover:scale-105 transition-all duration-500"
            >
              Müraciət et
            </button>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 bg-blue-100 rounded-[40px] blur-3xl opacity-30 animate-waveSlow"></div>
            <img
              src="https://media.licdn.com/dms/image/v2/D5616AQHyS252xsUSUw/profile-displaybackgroundimage-shrink_200_800/profile-displaybackgroundimage-shrink_200_800/0/1689786383819?e=2147483647&v=beta&t=WAcL87l3uWScBUMevqSUd4l9WBrNH-DkJOrbzrat9UI"
              alt="Full Stack Course"
              className="relative rounded-[32px] shadow-2xl transform hover:scale-105 transition-transform duration-700"
            />
          </div>

        </div>

        <div className="mt-32 grid md:grid-cols-3 gap-12 text-center animate-fadeInPage">
          <div className="bg-white/60 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            <h3 className="text-xl font-semibold mb-3">Real layihələr</h3>
            <p className="text-gray-600">Sıfırdan real veb tətbiqlər quraraq praktik təcrübə qazan.</p>
          </div>
          <div className="bg-white/60 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            <h3 className="text-xl font-semibold mb-3">Komanda mühiti</h3>
            <p className="text-gray-600">Agile yanaşma ilə komandalarda işləməyi öyrən.</p>
          </div>
          <div className="bg-white/60 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            <h3 className="text-xl font-semibold mb-3">Karyera yönümlü</h3>
            <p className="text-gray-600">Əmək bazarının real tələblərinə uyğun bacarıqlar.</p>
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
                  <input className="p-3 border rounded-xl hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300 transition" placeholder="Ad, Soyad" required/>
                  <input className="p-3 border rounded-xl hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300 transition" placeholder="Telefon" required/>
                  <input className="p-3 border rounded-xl hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300 transition" placeholder="Email" required/>
                  <button type="submit" className="bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 mt-2">
                    Təsdiq
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-12 px-4 animate-fadeInUp">
                <h3 className="text-2xl font-bold text-green-600 mb-4">Qeydiyyat tamamlandı!</h3>
                <p className="text-gray-700 mb-4">Sən uğurla kursa qeyd olundun.</p>
                <button onClick={() => setShowModal(false)} className="bg-gray-200 text-gray-800 py-2 px-6 rounded-full hover:bg-gray-300 transition transform hover:scale-105">
                  Bağla
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      <style>
        {`
          @keyframes fadeInPage { from { opacity:0; transform: translateY(20px);} to {opacity:1; transform: translateY(0);} }
          @keyframes fadeInModal { from { opacity:0; } to { opacity:1; } }
          @keyframes fadeScale { from { opacity:0; transform: scale(0.95);} to { opacity:1; transform: scale(1);} }
          @keyframes fadeInUp { from { opacity:0; transform: translateY(20px);} to { opacity:1; transform: translateY(0);} }
          @keyframes wave { 0%{ transform:translateX(0);}50%{transform:translateX(15px);}100%{transform:translateX(0);} }
          @keyframes waveSlow { 0%{ transform:translateX(0);}50%{transform:translateX(10px);}100%{transform:translateX(0);} }

          .animate-fadeInPage{ animation: fadeInPage 0.8s ease-out forwards; }
          .animate-fadeInModal{ animation: fadeInModal 0.3s ease-out forwards; }
          .animate-fadeScale{ animation: fadeScale 0.3s ease-out forwards; }
          .animate-fadeInUp{ animation: fadeInUp 0.5s ease-out forwards; }
          .animate-wave{ animation: wave 8s ease-in-out infinite; }
          .animate-waveSlow{ animation: waveSlow 15s ease-in-out infinite; }
        `}
      </style>
    </section>
  );
};

export default FullstackPage;
