import React, { useState } from "react";


const PAST_HACKATHONS = [
  {
    id: 1,
    topic: "Smart City Hackathon",
    rules: "48 saat, komanda işi",
    dateTime: "12–14 Mart 2024",
    location: "InnoHub Gəncə",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    description:
      "Ağıllı şəhər problemlərinə innovativ texnoloji həllərin hazırlanması.",
  },
  {
    id: 2,
    topic: "Green Innovation Hackathon",
    rules: "Maks. 4 nəfər",
    dateTime: "5–7 Aprel 2024",
    location: "InnoHub Gəncə",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
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
  },
];


const PastHackathonCard = ({ item, onOpen }) => (
  <div
    onClick={onOpen}
    className="cursor-pointer group w-full sm:w-1/2 md:w-1/3"
  >
    <div className="relative rounded-3xl overflow-hidden shadow-lg">
      <img
        src={item.image}
        alt={item.topic}
        className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
      />
      <div className="absolute inset-0 bg-black/40 flex items-end p-6">
        <h3 className="text-white text-xl font-bold">
          {item.topic}
        </h3>
      </div>
    </div>
  </div>
);

const FutureHackathonCard = ({ item, onRegister }) => (
  <div className="w-full sm:w-1/2 md:w-1/3">
    <div className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition">
      <h3 className="text-xl font-bold mb-2">{item.topic}</h3>

      <p className="text-sm text-gray-600">
        <strong>Qaydalar:</strong> {item.rules}
      </p>
      <p className="text-sm text-gray-600">
        <strong>Tarix:</strong> {item.dateTime}
      </p>
      <p className="text-sm text-gray-600">
        <strong>Məkan:</strong> {item.location}
      </p>

      <button
        onClick={onRegister}
        className="mt-4 w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
      >
        Qeydiyyat
      </button>
    </div>
  </div>
);

const HackathonDetails = ({ item, onClose }) => (
  <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
    <div className="bg-white max-w-lg w-full rounded-3xl p-8 relative">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-500 hover:text-black"
      >
        ✕
      </button>

      <h2 className="text-2xl font-bold mb-4">{item.topic}</h2>
      <p className="text-gray-700 mb-4">{item.description}</p>

      <p className="text-sm text-gray-600"><strong>Qaydalar:</strong> {item.rules}</p>
      <p className="text-sm text-gray-600"><strong>Tarix:</strong> {item.dateTime}</p>
      <p className="text-sm text-gray-600"><strong>Məkan:</strong> {item.location}</p>
    </div>
  </div>
);

const RegistrationForm = ({ hackathon, onBack }) => (
  <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-xl p-8 mt-16">
    <h2 className="text-2xl font-bold mb-6 text-center">
      Qeydiyyat – {hackathon.topic}
    </h2>

    <form className="flex flex-col gap-4">
      <input className="p-3 border rounded-xl" placeholder="Ad, Soyad" />
      <input className="p-3 border rounded-xl" placeholder="Telefon" />
      <input className="p-3 border rounded-xl" placeholder="Email" />

      <button className="bg-green-600 text-white py-3 rounded-xl hover:bg-green-700">
        Təsdiq
      </button>
    </form>

    <button
      onClick={onBack}
      className="mt-4 w-full bg-gray-300 py-3 rounded-xl"
    >
      Geri
    </button>
  </div>
);


const Hackathons = () => {
  const [details, setDetails] = useState(null);
  const [register, setRegister] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">

      <div className="max-w-3xl mb-20">
        <h1 className="text-4xl font-extrabold mb-4">Hakatonlar</h1>
        <p className="text-gray-700 text-lg">
          INNOHUB hakatonları gənclərin real problemləri qısa müddətdə
          innovativ həllərə çevirdiyi yaradıcı inkişaf platformasıdır.
        </p>
      </div>

      <h2 className="text-3xl font-bold mb-8">Keçmiş hakatonlar</h2>
      <div className="flex flex-wrap gap-8 mb-24">
        {PAST_HACKATHONS.map((item) => (
          <PastHackathonCard
            key={item.id}
            item={item}
            onOpen={() => setDetails(item)}
          />
        ))}
      </div>

      <h2 className="text-3xl font-bold mb-8">
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
