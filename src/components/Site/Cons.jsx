import React, { useState } from "react";
import { motion } from "framer-motion";

const UPCOMING_SESSIONS = [
  {
    id: 1,
    topic: "Technology & Daily Life",
    desc: "Texnologiyanın həyatımıza təsiri haqqında müzakirə.",
    date: "20 Yanvar 2026",
    time: "18:00",
    location: "InnoHub Gəncə",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800",
  },
  {
    id: 2,
    topic: "Education & Future Plans",
    desc: "Təhsil və gələcək planlar mövzusunda debat.",
    date: "27 Yanvar 2026",
    time: "18:00",
    location: "InnoHub Gəncə",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800",
  },
  {
    id: 3,
    topic: "Work & Career",
    desc: "Karyera yönümlü danışıq simulyasiyası.",
    date: "3 Fevral 2026",
    time: "18:00",
    location: "InnoHub Gəncə",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800",
  },
];

const SessionCard = ({ session, onRegister }) => (
  <motion.div
    onClick={onRegister}
    whileHover={{ scale: 1.04 }}
    className="bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer group"
  >
    <div className="relative h-40 sm:h-48 md:h-52 overflow-hidden">
      <img
        src={session.image}
        alt={session.topic}
        className="h-full w-full object-cover group-hover:scale-110 duration-300"
      />
      <div className="absolute inset-0 bg-black/30"></div>
      <h3 className="absolute bottom-2 left-3 text-lg sm:text-xl md:text-2xl text-white font-bold drop-shadow-md">
        {session.topic}
      </h3>
    </div>

    <div className="p-4 sm:p-5 space-y-2">
      <p className="text-gray-700 text-sm sm:text-[0.95rem] md:text-base leading-snug">
        {session.desc}
      </p>

      <p className="text-gray-900 font-semibold text-sm sm:text-[0.95rem]">
        📅 {session.date} – {session.time}
      </p>

      <p className="text-gray-500 text-sm sm:text-[0.85rem]">📌 {session.location}</p>

      <button className="mt-3 w-full bg-[#02C8FE] text-white py-2 rounded-lg font-semibold group-hover:bg-blue-500 transition duration-200 text-sm sm:text-[0.95rem]">
        Qeydiyyat
      </button>
    </div>
  </motion.div>
);

const RegistrationForm = ({ session, onBack }) => (
  <div className="max-w-md mx-auto bg-white shadow-xl rounded-2xl p-6 sm:p-8 mt-10 sm:mt-12">
    <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3 text-[#02C8FE]">
      Qeydiyyat – {session.topic}
    </h2>

    <p className="text-center text-gray-600 mb-6 text-sm sm:text-[0.95rem] leading-relaxed">
      📅 {session.date} – {session.time} <br /> 📌 {session.location}
    </p>

    <form className="flex flex-col gap-3">
      <input
        type="text"
        placeholder="Ad Soyad"
        className="p-3 sm:p-3.5 border rounded-lg"
      />
      <input
        type="tel"
        placeholder="Telefon"
        className="p-3 sm:p-3.5 border rounded-lg"
      />
      <input
        type="email"
        placeholder="Email"
        className="p-3 sm:p-3.5 border rounded-lg"
      />
      <button
        type="submit"
        className="bg-[#02C8FE] text-white py-2 sm:py-2.5 rounded-lg hover:bg-blue-500 transition font-semibold"
      >
        Təsdiq et
      </button>
    </form>

    <button
      onClick={onBack}
      className="mt-4 w-full bg-gray-200 py-2 rounded-lg hover:bg-gray-300 transition font-medium text-sm sm:text-[0.95rem]"
    >
      Geri
    </button>
  </div>
);

const IeltsSpeakingClub = () => {
  const [selectedSession, setSelectedSession] = useState(null);

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-10 sm:py-12 max-w-6xl mx-auto text-gray-900">
      {!selectedSession && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12 sm:mb-16">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#02C8FE] leading-tight mb-4">
                IELTS əsaslı İngilis dili danışıq klubu
              </h1>

              <p className="text-gray-700 text-sm sm:text-base md:text-[1rem] leading-relaxed">
                Sən də həftəlik real IELTS danışıq simulyasiyalarında iştirak et,
                öz ingilis dilini gücləndir və sosial şəbəkəni genişləndir!
              </p>
            </div>

            <img
              src="/images/ielts_club.png"
              className="rounded-2xl shadow-xl w-full h-64 sm:h-80 md:h-96 object-cover"
              alt="IELTS Speaking Club"
            />
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10">
            Gələcək sessiyalar 🎬
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
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
