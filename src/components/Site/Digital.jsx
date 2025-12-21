import React, { useState } from "react";

const DigitalMarketingPage = () => {
  const [showQuote, setShowQuote] = useState(false);
  const [tooltipCard, setTooltipCard] = useState(null);

  const features = [
    { title: "SEO & Analytics", text: "Web sayt trafiki və performans analizi üçün ən müasir alətlər və strategiyalar." },
    { title: "Social Media Ads", text: "Instagram, Facebook və LinkedIn kampaniyaları ilə brend görünürlüğünü artırmaq." },
    { title: "Email & CRM", text: "Məqsədli email kampaniyaları və müştəri əlaqələrinin effektiv idarəsi." },
  ];

  const quotes = [
    "Rəqəmsal marketing yalnız reklam deyil — bu, data, strategiya və kreativliyi birləşdirən incəsənətdir.",
    "Hər klik bir fürsətdir; hər kampaniya bir hekayə danışır.",
    "Analitika olmadan marketing, qaranlıqda yol tapmağa bənzəyir."
  ];

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <section className="relative min-h-screen bg-white overflow-hidden px-6 py-12">

      {/* Background shapes */}
      <div className="absolute -top-32 -left-20 w-96 h-96 bg-[#02C8FE]/20 rounded-full blur-3xl animate-waveSlow"></div>
      <div className="absolute -bottom-32 -right-20 w-[25rem] h-[25rem] bg-[#02C8FE]/10 rounded-full blur-3xl animate-waveSlow"></div>

      {/* Hero */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 relative">
          <h1 
            className="text-5xl md:text-6xl font-extrabold text-[#02C8FE] cursor-pointer"
            onClick={() => setShowQuote(!showQuote)}
          >
            Rəqəmsal <span>Marketing</span> Strategiyaları
          </h1>

          {showQuote && (
            <div className="absolute top-full mt-4 bg-[#02C8FE] text-white p-4 rounded-lg shadow-lg w-96 animate-fadeInUp">
              {randomQuote}
            </div>
          )}

          <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-xl">
            Minimal və effektiv yanaşma ilə hər klik biznes üçün dəyər yaradır.
          </p>

          <button className="bg-[#02C8FE] text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition transform active:scale-95 animate-pulse">
            Strategiya Qur
          </button>
        </div>

        <div className="relative">
          <img 
            src="https://shivshankardesign.wordpress.com/wp-content/uploads/2018/09/digital-marketing-cover.jpg" 
            alt="Digital Marketing" 
            className="relative rounded-[32px] shadow-2xl transition-transform duration-700 hover:scale-105"
          />
        </div>
      </div>

      {/* Features */}
      <div className="mt-16 max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
        {features.map((f, idx) => (
          <div 
            key={idx} 
            className="bg-[#02C8FE] text-white p-6 rounded-2xl shadow-lg relative cursor-pointer hover:shadow-2xl transition transform hover:-translate-y-2"
            onMouseEnter={() => setTooltipCard(idx)}
            onMouseLeave={() => setTooltipCard(null)}
          >
            <h3 className="text-xl font-semibold">{f.title}</h3>
            {tooltipCard === idx && (
              <p className="absolute top-full left-0 mt-2 bg-white text-[#02C8FE] p-3 rounded-lg shadow-lg w-64 animate-fadeInUp">
                {f.text}
              </p>
            )}
          </div>
        ))}
      </div>

      <style>
        {`
          @keyframes waveSlow {0%{transform:translateX(0);}50%{transform:translateX(15px);}100%{transform:translateX(0);}}
          .animate-waveSlow { animation: waveSlow 5s ease-in-out infinite; }
          @keyframes fadeInUp { from { opacity:0; transform: translateY(10px);} to { opacity:1; transform: translateY(0);} }
          .animate-fadeInUp { animation: fadeInUp 0.3s ease forwards; }
          @keyframes pulse {0%,100%{transform:scale(1);}50%{transform:scale(1.05);}}
          .animate-pulse { animation: pulse 2s infinite; }
        `}
      </style>
    </section>
  );
};

export default DigitalMarketingPage;
