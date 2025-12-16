import React, { useState } from "react";


const PAST_TALKS = [
  {
    id: 1,
    topic: "Startuplarda İnnovasiya Mədəniyyəti",
    speaker: "Elvin Məmmədov",
    dateTime: "15 Fevral 2024, 18:30",
    location: "InnoHub Gəncə",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
  },
  {
    id: 2,
    topic: "Texnologiya və Biznesin Kəsişməsi",
    speaker: "Aysel Əliyeva",
    dateTime: "10 Mart 2024, 19:00",
    location: "InnoHub Gəncə",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
  },
];

const FUTURE_TALKS = [
  {
    id: 3,
    topic: "AI və Gələcəyin Peşələri",
    speaker: "Rauf Qasımov",
    dateTime: "22 May 2025, 18:30",
    location: "InnoHub Gəncə",
  },
];


const TalkCard = ({ item, isPast, onRegister }) => (
  <div className="w-full sm:w-1/2 md:w-1/3">
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition">

      {isPast && (
        <img
          src={item.image}
          alt={item.topic}
          className="w-full h-48 object-cover"
        />
      )}

      <div className="p-6 space-y-2">
        <h3 className="text-xl font-bold">{item.topic}</h3>
        <p className="text-gray-600 text-sm">
          <strong>Spiker:</strong> {item.speaker}
        </p>
        <p className="text-gray-600 text-sm">
          <strong>Tarix:</strong> {item.dateTime}
        </p>
        <p className="text-gray-600 text-sm">
          <strong>Məkan:</strong> {item.location}
        </p>

        {!isPast && (
          <button
            onClick={onRegister}
            className="mt-4 w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
          >
            Qeydiyyat
          </button>
        )}
      </div>
    </div>
  </div>
);

const TalkRegistration = ({ talk, onBack }) => (
  <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-xl p-8 mt-16">
    <h2 className="text-2xl font-bold mb-6 text-center">
      Qeydiyyat – {talk.topic}
    </h2>

    <form className="flex flex-col gap-4">
      <input className="p-3 border rounded-xl" placeholder="Ad, soyad" />
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


const InnoTalks = () => {
  const [register, setRegister] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">

      <div className="max-w-3xl mb-20">
        <h1 className="text-4xl font-extrabold mb-4">INNOTALKS</h1>
        <p className="text-gray-700 text-lg">
          INNOTALKS gənclərin innovativ sahələrdə peşəkarlar və biznes sahibləri ilə
          birbaşa şəbəkələşməsi və onların real təcrübələrindən öyrənməsi üçün
          təşkil olunan silsilə seminarlar seriyasıdır.
        </p>
      </div>

      {/* PAST */}
      <h2 className="text-3xl font-bold mb-8">Keçmiş görüşlərimiz</h2>
      <div className="flex flex-wrap gap-8 mb-24">
        {PAST_TALKS.map((item) => (
          <TalkCard key={item.id} item={item} isPast />
        ))}
      </div>

      {/* FUTURE */}
      <h2 className="text-3xl font-bold mb-8">
        Gələcək görüşlərimizdə sən də ol!
      </h2>

      {!register ? (
        <div className="flex flex-wrap gap-8">
          {FUTURE_TALKS.map((item) => (
            <TalkCard
              key={item.id}
              item={item}
              onRegister={() => setRegister(item)}
            />
          ))}
        </div>
      ) : (
        <TalkRegistration
          talk={register}
          onBack={() => setRegister(null)}
        />
      )}
    </div>
  );
};

export default InnoTalks;
