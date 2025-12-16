import React, { useState } from "react";

const UPCOMING_SESSIONS = [
  {
    id: 1,
    topic: "Technology & Daily Life",
    dateTime: "20 Yanvar 2026 • 18:00",
    location: "InnoHub Gəncə",
  },
  {
    id: 2,
    topic: "Education & Future Plans",
    dateTime: "27 Yanvar 2026 • 18:00",
    location: "InnoHub Gəncə",
  },
  {
    id: 3,
    topic: "Work & Career",
    dateTime: "3 Fevral 2026 • 18:00",
    location: "InnoHub Gəncə",
  },
];

const SessionCard = ({ session, onRegister }) => (
  <div
    onClick={onRegister}
    className="w-full sm:w-1/2 md:w-1/3 cursor-pointer transition-transform duration-300 hover:scale-105"
  >
    <div className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-xl">
      <h3 className="text-xl font-bold text-gray-900 mb-2">
        {session.topic}
      </h3>
      <p className="text-gray-600">{session.dateTime}</p>
      <p className="text-gray-600">Məkan: {session.location}</p>

      <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition">
        Qeydiyyat
      </button>
    </div>
  </div>
);

const RegistrationForm = ({ session, onBack }) => (
  <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-xl p-8 mt-16">
    <h2 className="text-2xl font-bold text-center mb-6">
      Qeydiyyat – {session.topic}
    </h2>

    <form className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Ad, Soyad"
        className="p-3 border rounded-xl"
      />
      <input
        type="tel"
        placeholder="Telefon"
        className="p-3 border rounded-xl"
      />
      <input
        type="email"
        placeholder="Email"
        className="p-3 border rounded-xl"
      />

      <button
        type="submit"
        className="bg-green-500 text-white py-3 rounded-xl hover:bg-green-600 transition"
      >
        Təsdiq
      </button>
    </form>

    <button
      onClick={onBack}
      className="mt-6 w-full bg-gray-300 py-3 rounded-xl hover:bg-gray-400 transition"
    >
      Geri
    </button>
  </div>
);

const IeltsSpeakingClub = () => {
  const [selectedSession, setSelectedSession] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {!selectedSession && (
        <>
          <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
            <div className="flex-1">
              <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
                IELTS əsaslı İngilis Dili Danışıq Klubu
              </h1>
              <p className="text-gray-700 text-lg leading-relaxed max-w-xl">
                Klub hər kəs üçün ödənişsiz şəkildə IELTS imtahanının
                “Speaking” mərhələsini simulyativ və interaktiv formatda
                təcrübə etmək və birlikdə öyrənmək üçün təşkil edilir.
              </p>
            </div>

            <div className="flex-1">
              <img
                src="/images/ielts_club.png"
                alt="IELTS Speaking Club"
                className="w-full max-w-md rounded-3xl shadow-2xl"
              />
            </div>
          </div>

          <h2 className="text-3xl font-bold text-center mb-10">
            Gələcək görüşlərimizdə sən də ol!
          </h2>

          <div className="flex flex-wrap justify-center gap-8">
            {UPCOMING_SESSIONS.map((session) => (
              <SessionCard
                key={session.id}
                session={session}
                onRegister={() => setSelectedSession(session)}
              />
            ))}
          </div>
        </>
      )}

      {selectedSession && (
        <RegistrationForm
          session={selectedSession}
          onBack={() => setSelectedSession(null)}
        />
      )}
    </div>
  );
};

export default IeltsSpeakingClub;
