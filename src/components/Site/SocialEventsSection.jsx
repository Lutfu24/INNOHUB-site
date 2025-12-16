import React, { useState } from "react";

const SOCIAL_EVENTS = [
  {
    id: 1,
    name: "Hackathon 2025",
    imageUrl: "/images/hackathon.png",
    tagline: "İdeyaları reallığa çevir!",
    description: `Hackathon 2025 tədbiri gənclərə və startapçı ruhlu şəxslərə ideyalarını real layihələrə çevirmək imkanı yaradır. Burada mentorlarla işləyəcək, innovativ həllər təqdim edəcəksiniz.`,
  },
  {
    id: 2,
    name: "Startup Meetup",
    imageUrl: "/images/startup_meetup.png",
    tagline: "Gələcəyin innovatorları burada birləşir.",
    description: `Startup Meetup tədbiri startap ekosistemində şəbəkələşmə və yeni layihələr üçün əməkdaşlıq imkanları təqdim edir.`,
  },
  {
    id: 3,
    name: "Workshop on AI",
    imageUrl: "/images/ai_workshop.png",
    tagline: "Yeni texnologiyaları kəşf et!",
    description: `AI Workshop tədbiri süni intellekt və maşın öyrənmə mövzularında yeni bacarıqlar qazanmaq və layihələr hazırlamaq imkanı yaradır.`,
  },
];

const Card = ({ item, onClick }) => (
  <div
    onClick={onClick}
    className="w-full sm:w-1/3 md:w-1/4 cursor-pointer transition-transform duration-300 hover:scale-105"
  >
    <div className="relative overflow-hidden rounded-2xl shadow-lg bg-white aspect-[4/5] flex flex-col items-center justify-center p-6 hover:shadow-xl">
      <div className="absolute -top-6 w-28 h-28 rounded-full bg-gray-100 flex items-center justify-center">
        <img src={item.imageUrl} alt={item.name} className="w-20 h-20 object-contain" />
      </div>

      <h3 className="mt-24 text-lg font-bold text-gray-900 text-center">{item.name}</h3>
      <p className="mt-2 text-sm text-gray-500 text-center">{item.tagline}</p>
    </div>
  </div>
);

const EventDetail = ({ event, onBack }) => (
  <div className="max-w-4xl mx-auto px-4 py-12 text-center">
    <h1 className="text-4xl font-bold text-gray-900 mb-6">{event.name}</h1>

    <div className="flex justify-center mb-8">
      <img src={event.imageUrl} alt={event.name} className="w-80 h-80 object-contain rounded-2xl shadow-2xl" />
    </div>

    <p className="text-gray-700 text-lg leading-relaxed">{event.description}</p>

    <div className="flex justify-center mt-10 gap-4">
      <button
        onClick={onBack}
        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Geri
      </button>
    </div>

    <div className="mt-12 text-left max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Müraciət Formu</h2>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Adınız" className="p-3 border rounded-lg"/>
        <input type="email" placeholder="Email" className="p-3 border rounded-lg"/>
        <textarea placeholder="Mesajınız" className="p-3 border rounded-lg"></textarea>
        <button type="submit" className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
          Göndər
        </button>
      </form>
    </div>
  </div>
);

const SocialEventsPage = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {!selectedEvent && (
        <>
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Sosial Tədbirlər</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {SOCIAL_EVENTS.map((event) => (
              <Card key={event.id} item={event} onClick={() => setSelectedEvent(event)} />
            ))}
          </div>
        </>
      )}

      {selectedEvent && (
        <EventDetail event={selectedEvent} onBack={() => setSelectedEvent(null)} />
      )}
    </div>
  );
};

export default SocialEventsPage;
