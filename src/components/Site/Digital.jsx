import { useEffect, useState } from "react";
import { getCourseID } from "../../services/homeServices";

const DigitalMarketingPage = () => {
  const [showQuote, setShowQuote] = useState(false);
  const [tooltipCard, setTooltipCard] = useState(null);
  const [course, setCourse] = useState();
  const query = location.search;
  const id = new URLSearchParams(query).get("ID");

  useEffect(() => {
    async function showDigital() {
      if (!id) return;
      const res = await getCourseID(id);
      setCourse(res);
    }
    showDigital();
  }, []);

  const features = [
    {
      title: "SEO & Analytics",
      text: "Web sayt trafiki və performans analizi üçün ən müasir alətlər və strategiyalar.",
    },
    {
      title: "Social Media Ads",
      text: "Instagram, Facebook və LinkedIn kampaniyaları ilə brend görünürlüğünü artırmaq.",
    },
    {
      title: "Email & CRM",
      text: "Məqsədli email kampaniyaları və müştəri əlaqələrinin effektiv idarəsi.",
    },
  ];

  const quotes = [
    "Rəqəmsal marketing yalnız reklam deyil — bu, data, strategiya və kreativliyi birləşdirən incəsənətdir.",
    "Hər klik bir fürsətdir; hər kampaniya bir hekayə danışır.",
    "Analitika olmadan marketing, qaranlıqda yol tapmağa bənzəyir.",
  ];

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden px-4 sm:px-6 lg:px-8 py-12">
      {/* Background Shapes */}
      <div className="absolute -top-32 -left-20 w-72 h-72 sm:w-96 sm:h-96 bg-[#02C8FE]/20 rounded-full blur-3xl animate-waveSlow"></div>
      <div className="absolute -bottom-32 -right-20 w-[20rem] sm:w-[25rem] h-[20rem] sm:h-[25rem] bg-[#02C8FE]/10 rounded-full blur-3xl animate-waveSlow"></div>

      {/* Hero */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-6 text-center lg:text-left relative">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#02C8FE] cursor-pointer leading-tight"
            onClick={() => setShowQuote(!showQuote)}
          >
            Rəqəmsal <span>Marketing</span> Strategiyaları
          </h1>

          {showQuote && (
            <div className="absolute top-full mt-3 sm:mt-4 bg-[#02C8FE] text-white p-4 rounded-lg shadow-lg w-72 sm:w-96 animate-fadeInUp">
              {randomQuote}
            </div>
          )}

          <p className="text-gray-700 text-sm sm:text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
            Minimal və effektiv yanaşma ilə hər klik biznes üçün dəyər yaradır.
          </p>

          <button className="bg-[#02C8FE] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition transform active:scale-95 animate-pulse">
            Strategiya Qur
          </button>
        </div>

        <div className="relative w-full">
          <img
            src={course?.image}
            alt="Digital Marketing"
            className="relative w-full h-56 sm:h-72 md:h-80 lg:h-96 object-cover rounded-3xl shadow-2xl transition-transform duration-700 hover:scale-105"
          />
        </div>
      </div>

      {/* Features */}
      <div className="mt-16 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
        <div
          className="bg-[#02C8FE] text-white p-5 rounded-2xl shadow-md relative cursor-pointer hover:shadow-2xl transition transform hover:-translate-y-1"
          onMouseEnter={() => setTooltipCard(course?.title)}
          onMouseLeave={() => setTooltipCard(null)}
        >
          <h3 className="text-lg font-semibold">Müddət</h3>
          {tooltipCard === course?.title && (
            <p className="absolute top-full left-0 mt-2 bg-white text-[#02C8FE] p-3 rounded-lg shadow-lg w-64 animate-fadeInUp text-sm">
              {course?.duration}
            </p>
          )}
        </div>
        <div
          className="bg-[#02C8FE] text-white p-5 rounded-2xl shadow-md relative cursor-pointer hover:shadow-2xl transition transform hover:-translate-y-1"
          onMouseEnter={() => setTooltipCard(course?.category)}
          onMouseLeave={() => setTooltipCard(null)}
        >
          <h3 className="text-lg font-semibold">Müəllim</h3>
          {tooltipCard === course?.category && (
            <p className="absolute top-full left-0 mt-2 bg-white text-[#02C8FE] p-3 rounded-lg shadow-lg w-64 animate-fadeInUp text-sm">
              {course?.trainer}
            </p>
          )}
        </div>
        <div
          className="bg-[#02C8FE] text-white p-5 rounded-2xl shadow-md relative cursor-pointer hover:shadow-2xl transition transform hover:-translate-y-1"
          onMouseEnter={() => setTooltipCard(course?.trainer)}
          onMouseLeave={() => setTooltipCard(null)}
        >
          <h3 className="text-lg font-semibold">Dərslər</h3>
          {tooltipCard === course?.trainer && (
            <p className="absolute top-full left-0 mt-2 bg-white text-[#02C8FE] p-3 rounded-lg shadow-lg w-64 animate-fadeInUp text-sm">
              {course?.schedule}
            </p>
          )}
        </div>
      </div>

      <style>
        {`
          @keyframes waveSlow {0%{transform:translateX(0);}50%{transform:translateX(15px);}100%{transform:translateX(0);}}
          .animate-waveSlow { animation: waveSlow 5s ease-in-out infinite; }

          @keyframes fadeInUp { from { opacity:0; transform: translateY(10px);} to { opacity:1; transform: translateY(0);} }
          .animate-fadeInUp { animation: fadeInUp 0.3s ease forwards; }

          @keyframes pulse {0%,100%{transform:scale(1);}50%{transform:scale(1.05);} }
          .animate-pulse { animation: pulse 2s infinite; }
        `}
      </style>
    </section>
  );
};

export default DigitalMarketingPage;
