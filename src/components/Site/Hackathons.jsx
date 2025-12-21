import React, { useState } from "react";

const PAST_HACKATHONS = [
  {
    id: 1,
    topic: "Smart City Hackathon",
    rules: "48 saat, komanda işi",
    dateTime: "12–14 Mart 2024",
    location: "InnoHub Gəncə",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800",
    description:
      "Ağıllı şəhər problemlərinə innovativ texnoloji həllərin hazırlanması.",
  },

  {
    id: 2,
    topic: "Green Innovation Hackathon",
    rules: "Maks. 4 nəfər",
    dateTime: "5–7 Aprel 2024",
    location: "InnoHub Gəncə",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800",
    description:
      "Ekoloji problemlər üçün dayanıqlı və yaşıl həllərin hazırlanması.",
  },
];

const FUTURE_HACKATHONS = [
  {
    id: 3,
    topic: "AI for Real Life Problems",
    rules: "Açıq mövzu, mentor dəstəyi",
    dateTime: "20–22 May 2026",
    location: "InnoHub Gəncə",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800",
  },
];

const PastHackathonCard = ({ item, onOpen }) => (
  <div
    onClick={onOpen}
    className="cursor-pointer group w-full sm:w-[48%] md:w-[31%]"
  >
    <div className="relative rounded-3xl overflow-hidden shadow-lg">
      <img
        src={item.image}
        alt={item.topic}
        className="w-full h-64 object-cover group-hover:scale-110 duration-500"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-5">
        <h3 className="text-white text-xl font-bold">{item.topic}</h3>
      </div>
    </div>
  </div>
);

const FutureHackathonCard = ({ item, onRegister }) => (
  <div className="w-full sm:w-[48%] md:w-[31%]">
    <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl duration-300">
      <img
        src={item.image}
        alt={item.topic}
        className="h-48 w-full object-cover"
      />

      <div className="p-5 space-y-2 text-gray-900">
        <h3 className="text-lg font-bold">{item.topic}</h3>

        <p className="text-sm">
          <strong>Qaydalar:</strong> {item.rules}
        </p>
        <p className="text-sm">
          <strong>Tarix:</strong> {item.dateTime}
        </p>
        <p className="text-sm">
          <strong>Məkan:</strong> {item.location}
        </p>

        <button
          onClick={onRegister}
          className="w-full bg-[#02C8FE] text-white py-2 rounded-xl hover:bg-blue-500 duration-200 font-semibold mt-4"
        >
          Qeydiyyat
        </button>
      </div>
    </div>
  </div>
);

const HackathonDetails = ({ item, onClose }) => (
  <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">
    <div className="bg-white max-w-lg w-full rounded-3xl shadow-2xl p-8 relative">

      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-500 hover:text-black"
      >
        ✕
      </button>

      <h2 className="text-2xl font-bold mb-4">{item.topic}</h2>

      <p className="text-gray-700 mb-4">{item.description}</p>

      <p className="text-gray-700 text-sm mb-1">
        <strong>Qaydalar:</strong> {item.rules}
      </p>

      <p className="text-gray-700 text-sm mb-1">
        <strong>Tarix:</strong> {item.dateTime}
      </p>

      <p className="text-gray-700 text-sm">
        <strong>Məkan:</strong> {item.location}
      </p>
    </div>
  </div>
);

const RegistrationForm = ({ hackathon, onBack }) => (
  <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">
    <div className="bg-white w-full max-w-lg rounded-3xl shadow-xl p-8">

      <h2 className="text-2xl font-bold text-center mb-6">
        Qeydiyyat – {hackathon.topic}
      </h2>

      <form className="flex flex-col gap-4">
        <input className="p-3 border rounded-xl" placeholder="Ad Soyad" />
        <input className="p-3 border rounded-xl" placeholder="Telefon" />
        <input className="p-3 border rounded-xl" placeholder="Email" />

        <button className="bg-[#02C8FE] text-white py-3 rounded-xl hover:bg-blue-500 font-semibold">
          Təsdiq et
        </button>
      </form>

      <button
        onClick={onBack}
        className="mt-4 w-full bg-gray-200 py-3 rounded-xl hover:bg-gray-300 font-semibold"
      >
        Geri
      </button>

    </div>
  </div>
);

const Hackathons = () => {
  const [details, setDetails] = useState(null);
  const [register, setRegister] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">

      <div className="mb-20 max-w-3xl">
        <h1 className="text-4xl font-extrabold mb-5 text-gray-900">
          INNOHUB Hakatonları
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed">
          INNOHUB hakatonları gənclərin real problemləri qısa müddətdə innovativ
          həllərə çevirdiyi sürətli yaradıcılıq və inkişaf platformasıdır.
          Burada iştirakçılar komandalarda işləyir, yeni texnologiyalarla tanış
          olur, bacarıqlarını sınayır və potensial investorlarla şəbəkələşirlər.
        </p>
      </div>

      <h2 className="text-3xl font-bold mb-8 text-gray-900">
        Keçmiş hakatonlar
      </h2>

      <div className="flex flex-wrap gap-8 mb-28">
        {PAST_HACKATHONS.map((item) => (
          <PastHackathonCard
            key={item.id}
            item={item}
            onOpen={() => setDetails(item)}
          />
        ))}
      </div>

      <h2 className="text-3xl font-bold mb-8 text-gray-900">
        Gələcək hakatonlara sən də qoşul!
      </h2>

      <div className="flex flex-wrap gap-8">
        {FUTURE_HACKATHONS.map((item) => (
          <FutureHackathonCard
            key={item.id}
            item={item}
            onRegister={() => setRegister(item)}
          />
        ))}
      </div>

      {details && (
        <HackathonDetails item={details} onClose={() => setDetails(null)} />
      )}

      {register && (
        <RegistrationForm
          hackathon={register}
          onBack={() => setRegister(null)}
        />
      )}
    </div>
  );
};

export default Hackathons;
