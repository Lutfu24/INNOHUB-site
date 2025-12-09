import React from "react";

const GraphicDesignPage = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#cce0ff] via-[#99c2ff] to-[#80b3ff] overflow-hidden px-6 py-24">

      {/* Decorative blurred shapes */}
      <div className="absolute -top-40 -left-32 w-96 h-96 bg-blue-300 rounded-full opacity-20 blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -right-40 w-[30rem] h-[30rem] bg-blue-200 rounded-full opacity-20 blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Breadcrumb */}
        <div className="text-sm text-gray-400 mb-4">
          Home &gt; Creative &gt; Graphic Design
        </div>

        {/* Hero */}
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#111] mb-5 leading-tight tracking-tight">
            Qrafik Dizayn İncəsənəti
          </h1>
          <p className="text-lg md:text-xl text-[#333] max-w-3xl mx-auto leading-relaxed">
            Yaradıcı vizuallar, brend identikliyi və estetik dizayn həlləri.  
            Minimal, innovativ və professional yanaşma ilə layihələrinizi daha parlaq edin.
          </p>
        </div>

        {/* Hero Illustration */}
        <div className="flex justify-center mb-20 relative">
          <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-4xl w-full overflow-hidden relative">
            <img 
              src="https://img.freepik.com/free-vector/hand-drawn-colorful-design-facebook-cover_23-2148874630.jpg?semt=ais_se_enriched&w=740&q=80" 
              alt="Graphic Design Mockup" 
              className="rounded-2xl shadow-lg"
            />
            {/* Overlay bottom */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#99c2ff]/90 via-transparent rounded-b-3xl pointer-events-none"></div>
          </div>
        </div>

        {/* Highlight Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition duration-200">
            <h2 className="text-xl font-semibold text-blue-700 mb-3">Visual Branding</h2>
            <p className="text-gray-700 text-[15px] leading-relaxed">
              Brend identikliyini yaratmaq üçün minimalist və professional vizual konseptlər.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition duration-200">
            <h2 className="text-xl font-semibold text-blue-700 mb-3">Illustrations</h2>
            <p className="text-gray-700 text-[15px] leading-relaxed">
              Kreativ illüstrasiyalar və konsept dizaynlar ilə mesajınızı gücləndirin.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition duration-200">
            <h2 className="text-xl font-semibold text-blue-700 mb-3">UI/UX Design</h2>
            <p className="text-gray-700 text-[15px] leading-relaxed">
              İstifadəçi təcrübəsi və interfeys dizaynında minimal, funksional və estetik həllər.
            </p>
          </div>
        </div>

        {/* Inspirational Quote */}
        <div className="bg-blue-100 rounded-3xl p-12 mb-16 border border-blue-200 shadow-sm text-center">
          <p className="text-gray-800 text-[17px] leading-relaxed max-w-2xl mx-auto">
            “Dizayn yalnız vizual gözəllik deyil, həm də mesajı doğru çatdırmaq və istifadəçi ilə əlaqə yaratmaq sənətidir.”
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="bg-blue-700 text-white px-12 py-4 rounded-3xl text-lg font-semibold shadow-lg hover:bg-blue-800 hover:shadow-2xl active:scale-95 transition duration-150">
            Layihə Yarat
          </button>
        </div>

      </div>
    </div>
  );
};

export default GraphicDesignPage;
