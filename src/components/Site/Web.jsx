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
    }, 1800);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-white">

      {/* HERO */}
      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-24">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-6">

            <h1 className="text-6xl font-extrabold leading-tight text-[#02C8FE]">
              Full-Stack <br/> Proqramlaşdırma
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              Frontend və backend birlikdə öyrədilən 9 aylıq intensiv təlim proqramı.
            </p>

            <button
              onClick={() => setShowModal(true)}
              className="bg-[#02C8FE] text-white px-5 py-2 rounded-lg font-semibold shadow-md hover:shadow-xl hover:scale-105 transition"
            >
              Müraciət et
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="absolute -inset-4 bg-[#02C8FE]/10 blur-3xl rounded-3xl"></div>
            <img
              src="https://media.licdn.com/dms/image/v2/D5616AQHyS252xsUSUw/profile-displaybackgroundimage-shrink_200_800/profile-displaybackgroundimage-shrink_200_800/0/1689786383819?e=2147483647&v=beta&t=WAcL87l3uWScBUMevqSUd4l9WBrNH-DkJOrbzrat9UI"
              alt="Course"
              className="relative rounded-[32px] shadow-2xl transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>


        {/* COURSE DESCRIPTION */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-[#02C8FE] mb-6">
            Kursun təsviri
          </h2>

          <p className="text-gray-700 leading-relaxed text-lg max-w-5xl">
            Full Stack Proqramlaşdırma kursu – frontend və backend sahələrini 
            sistemli və tətbiq yönümlü şəkildə əhatə edən 9 aylıq intensiv 
            proqramlaşdırma təlimidir. Təlim müddətində sən müxtəlif real 
            layihələri sıfırdan quracaq, komanda mühitində işləməyi öyrənəcək və 
            sonda tam funksional veb səhifələri müstəqil şəkildə hazırlaya biləcək 
            səviyyəyə yüksələcəksən. Proqram sənə bazarın tələblərinə uyğun sistemli 
            düşünmə və problem həll etmə bacarıqları qazandıraraq səni əmək 
            bazarında rəqabətədavamlı full stack developer olaraq formalaşdıracaq.
          </p>

        </div>


        {/* INFO BOXES */}
        <div className="mt-16 grid md:grid-cols-3 gap-6 text-center">


          {/* Duration */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:-translate-y-1 hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold text-[#02C8FE]">Müddət</h3>
            <p className="text-gray-500 text-sm">
              9 ay – həftədə 3 dəfə, 3 saat dərslər
            </p>
          </div>

          {/* Real projects */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:-translate-y-1 hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold text-[#02C8FE]">Real layihələr</h3>
            <p className="text-gray-500 text-sm">Praktika ilə real dünya kodu.</p>
          </div>

          {/* Career */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:-translate-y-1 hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold text-[#02C8FE]">Karyera fokuslu</h3>
            <p className="text-gray-500 text-sm">İş dünyasına hazırlıq.</p>
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
                <h2 className="text-3xl font-bold text-center text-[#02C8FE] mb-6">
                  Qeydiyyat Formu
                </h2>

                <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                  <input
                    className="p-3 border rounded-xl"
                    placeholder="Ad Soyad"
                    required
                  />
                  <input
                    className="p-3 border rounded-xl"
                    placeholder="Telefon"
                    required
                  />
                  <input
                    className="p-3 border rounded-xl"
                    placeholder="Email"
                    required
                  />

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

export default FullstackPage;
