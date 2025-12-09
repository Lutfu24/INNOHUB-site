import React from "react";

const FullstackPage = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white via-[#f9fbfd] to-white overflow-hidden px-6 py-24">

      {/* Decorative blurred shapes */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-32 -right-40 w-[28rem] h-[28rem] bg-blue-50 rounded-full opacity-20 blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header / Hero */}
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#111] mb-5 leading-tight tracking-tight">
            Full-Stack Proqramlaşdırma
          </h1>
          <p className="text-lg md:text-xl text-[#555] max-w-3xl mx-auto leading-relaxed">
            Modern veb tətbiqləri yaratmaq üçün frontend və backend biliklərini birləşdirən sahə.  
            Full-Stack bacarıqları sənaye standartlarında dəyər yaradır və real layihələrdə strateji rol oynayır.
          </p>
        </div>

        {/* Hero Illustration / Mockup */}
        <div className="flex justify-center mb-20">
          <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-4xl w-full">
            <img 
              src="https://media.licdn.com/dms/image/v2/D5616AQHyS252xsUSUw/profile-displaybackgroundimage-shrink_200_800/profile-displaybackgroundimage-shrink_200_800/0/1689786383819?e=2147483647&v=beta&t=WAcL87l3uWScBUMevqSUd4l9WBrNH-DkJOrbzrat9UI" 
              alt="Fullstack Project Mockup" 
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>

        {/* Highlight Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition duration-200">
            <h2 className="text-xl font-semibold text-blue-600 mb-3">
              Frontend
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              React, Tailwind və modern UI arxitekturası ilə intuitiv və sürətli istifadəçi interfeysləri yaratmaq.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition duration-200">
            <h2 className="text-xl font-semibold text-blue-600 mb-3">
              Backend
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              Node.js və Express ilə təhlükəsiz, sabit və yüksək performanslı server strukturu yaratmaq.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition duration-200">
            <h2 className="text-xl font-semibold text-blue-600 mb-3">
              Database
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              MongoDB ilə məlumat modellərinin qurulması və dayanıqlı, miqyaslana bilən məlumat bazaları.
            </p>
          </div>
        </div>

        {/* Inspirational Quote */}
        <div className="bg-blue-50 rounded-3xl p-12 mb-16 border border-blue-100 shadow-sm text-center">
          <p className="text-gray-800 text-[17px] leading-relaxed max-w-2xl mx-auto">
            “Full-Stack inkişafı yalnız kod yazmaq deyil — bu, sistem düşüncəsi,  
            istifadəçi təcrübəsini optimallaşdırmaq və davamlı texnoloji həllər yaratmaq bacarığıdır.”
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="bg-blue-600 text-white px-12 py-4 rounded-3xl text-lg font-semibold shadow-lg hover:bg-blue-700 hover:shadow-2xl active:scale-95 transition duration-150">
            Qeydiyyatdan Keç
          </button>
        </div>

      </div>
    </div>
  );
};

export default FullstackPage;
