import { useState } from "react";

/* -------------------- DATA -------------------- */

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

/* -------------------- CARDS -------------------- */

const PastHackathonCard = ({ item, onOpen }) => (
  <button
    onClick={onOpen}
    className="group relative rounded-3xl overflow-hidden shadow-lg w-full text-left focus:outline-none"
  >
    <img
      src={item.image}
      alt={item.topic}
      className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent flex items-end p-5">
      <div>
        <h3 className="text-white text-xl font-bold mb-1">{item.topic}</h3>
        <p className="text-white/80 text-sm">{item.dateTime}</p>
      </div>
    </div>
  </button>
);

const FutureHackathonCard = ({ item, onRegister }) => (
  <div className="bg-white rounded-3xl shadow-md hover:shadow-xl transition overflow-hidden flex flex-col">
    <img src={item.image} alt={item.topic} className="h-48 w-full object-cover" />

    <div className="p-5 flex flex-col gap-2 flex-1">
      <h3 className="text-lg font-bold">{item.topic}</h3>

      <p className="text-sm text-gray-700">
        <strong>Qaydalar:</strong> {item.rules}
      </p>
      <p className="text-sm text-gray-700">
        <strong>Tarix:</strong> {item.dateTime}
      </p>
      <p className="text-sm text-gray-700">
        <strong>Məkan:</strong> {item.location}
      </p>

      <button
        onClick={onRegister}
        className="mt-auto bg-[#02C8FE] text-white py-2 rounded-xl font-semibold hover:bg-blue-500 transition"
      >
        Qeydiyyat
      </button>
    </div>
  </div>
);

/* -------------------- MODALS -------------------- */

const Overlay = ({ children }) => (
  <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4">
    {children}
  </div>
);

const HackathonDetails = ({ item, onClose }) => (
  <Overlay>
    <div className="bg-white max-w-lg w-full rounded-3xl shadow-2xl p-6 relative max-h-[90vh] overflow-y-auto">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-500 hover:text-black"
      >
        ✕
      </button>

      <h2 className="text-2xl font-bold mb-4">{item.topic}</h2>

      <p className="text-gray-700 mb-4">{item.description}</p>

      <ul className="text-sm text-gray-700 space-y-1">
        <li>
          <strong>Qaydalar:</strong> {item.rules}
        </li>
        <li>
          <strong>Tarix:</strong> {item.dateTime}
        </li>
        <li>
          <strong>Məkan:</strong> {item.location}
        </li>
      </ul>
    </div>
  </Overlay>
);

const RegistrationForm = ({ hackathon, onBack }) => (
  <Overlay>
    <div className="bg-white w-full max-w-lg rounded-3xl shadow-xl p-6">
      <h2 className="text-2xl font-bold text-center mb-6">
        Qeydiyyat – {hackathon.topic}
      </h2>

      <form className="flex flex-col gap-4">
        <input className="p-3 border rounded-xl" placeholder="Ad Soyad" />
        <input className="p-3 border rounded-xl" placeholder="Telefon" />
        <input className="p-3 border rounded-xl" placeholder="Email" />

        <button className="bg-[#02C8FE] text-white py-3 rounded-xl font-semibold hover:bg-blue-500">
          Təsdiq et
        </button>
      </form>

      <button
        onClick={onBack}
        className="mt-4 w-full bg-gray-200 py-3 rounded-xl font-semibold hover:bg-gray-300"
      >
        Geri
      </button>
    </div>
  </Overlay>
);

/* -------------------- PAGE -------------------- */

export default function Hackathons() {
  const [details, setDetails] = useState(null);
  const [register, setRegister] = useState(null);

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Intro */}
      <div className="max-w-3xl mb-20">
        <h1 className="text-4xl font-extrabold mb-5">INNOHUB Hakatonları</h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          INNOHUB hakatonları gənclərin real problemləri qısa müddətdə innovativ
          həllərə çevirdiyi intensiv yaradıcılıq və inkişaf platformasıdır.
        </p>
      </div>

      {/* Past */}
      <h2 className="text-3xl font-bold mb-8">Keçmiş hakatonlar</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-28">
        {PAST_HACKATHONS.map((item) => (
          <PastHackathonCard
            key={item.id}
            item={item}
            onOpen={() => setDetails(item)}
          />
        ))}
      </div>

      {/* Future */}
      <h2 className="text-3xl font-bold mb-8">
        Gələcək hakatonlara sən də qoşul!
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
    </section>
  );
}
