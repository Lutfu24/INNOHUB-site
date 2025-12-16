import React from "react";

const DigitalMarketingPage = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#cce0ff] via-[#99c2ff] to-[#80b3ff] overflow-hidden px-6 py-24">

      <div className="absolute -top-40 -left-32 w-96 h-96 bg-blue-300 rounded-full opacity-20 blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -right-40 w-[30rem] h-[30rem] bg-blue-200 rounded-full opacity-20 blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto">

        <div className="text-sm text-gray-400 mb-4">
          Home &gt; Marketing &gt; Digital Marketing
        </div>

        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#111] mb-5 leading-tight tracking-tight">
            Rəqəmsal Marketing Strategiyaları
          </h1>
          <p className="text-lg md:text-xl text-[#333] max-w-3xl mx-auto leading-relaxed">
            Performans əsaslı reklam, sosial media və data-driven kampaniyalar ilə biznesinizi artırın.  
            Minimal və effektiv yanaşma ilə hər klik dəyər yaradır.
          </p>
        </div>

        <div className="flex justify-center mb-20 relative">
          <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-4xl w-full overflow-hidden relative">
            <img 
              src="https://shivshankardesign.wordpress.com/wp-content/uploads/2018/09/digital-marketing-cover.jpg" 
              alt="Digital Marketing Mockup" 
              className="rounded-2xl shadow-lg"
            />
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#99c2ff]/90 via-transparent rounded-b-3xl pointer-events-none"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition duration-200">
            <h2 className="text-xl font-semibold text-blue-700 mb-3">SEO & Analytics</h2>
            <p className="text-gray-700 text-[15px] leading-relaxed">
              Web sayt trafiki və performans analizi üçün ən müasir alətlər və strategiyalar.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition duration-200">
            <h2 className="text-xl font-semibold text-blue-700 mb-3">Social Media Ads</h2>
            <p className="text-gray-700 text-[15px] leading-relaxed">
              Instagram, Facebook və LinkedIn kampaniyaları ilə brend görünürlüğünü artırmaq.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition duration-200">
            <h2 className="text-xl font-semibold text-blue-700 mb-3">Email & CRM</h2>
            <p className="text-gray-700 text-[15px] leading-relaxed">
              Məqsədli email kampaniyaları və müştəri əlaqələrinin effektiv idarəsi.
            </p>
          </div>
        </div>

        <div className="bg-blue-100 rounded-3xl p-12 mb-16 border border-blue-200 shadow-sm text-center">
          <p className="text-gray-800 text-[17px] leading-relaxed max-w-2xl mx-auto">
            “Rəqəmsal marketing yalnız reklam deyil — bu, data, strategiya və kreativliyi birləşdirən incəsənətdir.”
          </p>
        </div>

        <div className="text-center">
          <button className="bg-blue-700 text-white px-12 py-4 rounded-3xl text-lg font-semibold shadow-lg hover:bg-blue-800 hover:shadow-2xl active:scale-95 transition duration-150">
            Strategiya Qur
          </button>
        </div>

      </div>
    </div>
  );
};

export default DigitalMarketingPage;
