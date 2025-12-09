import React from "react";

const EnglishSpeakingClubPage = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#99c2ff] via-[#66b3ff] to-[#448aff] overflow-hidden px-6 py-24 flex flex-col items-center">

      {/* Decorative floating shapes */}
      <div className="absolute -top-32 -left-32 w-72 h-72 bg-blue-300 rounded-full opacity-10 blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-blue-200 rounded-full opacity-10 blur-3xl pointer-events-none"></div>

      {/* Hero: Split Layout */}
      <div className="relative z-10 max-w-6xl w-full flex flex-col md:flex-row items-center gap-12 mb-20">
        
        {/* Left Column: Text + CTA */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#111] mb-4 leading-tight">
            Free English Speaking Club
          </h1>
          <p className="text-lg md:text-xl text-[#222] leading-relaxed mb-8 max-w-lg">
            Join our weekly interactive English speaking sessions — completely free.  
            Improve your speaking skills, meet new people, and boost your confidence.
          </p>
          <button className="bg-blue-700 text-white px-10 py-4 rounded-3xl text-lg font-semibold shadow-md hover:bg-blue-800 hover:shadow-lg active:scale-95 transition duration-150">
            Join the Club
          </button>
        </div>

        {/* Right Column: Illustration with overlay */}
        <div className="flex-1 relative w-full max-w-sm md:max-w-md">
          <div className="rounded-3xl shadow-2xl w-full h-[400px] bg-gradient-to-br from-blue-300 to-blue-500 flex items-center justify-center">
            <span className="text-white text-3xl font-bold">💬</span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-3xl pointer-events-none"></div>
        </div>
      </div>

      {/* Featured Weekly Session */}
      <div className="bg-white rounded-3xl p-8 shadow-md mb-20 max-w-3xl w-full text-center">
        <h2 className="text-3xl font-semibold text-blue-700 mb-2">This Week’s Session</h2>
        <p className="text-gray-700 text-[16px] leading-relaxed">
          Every Thursday, 7 PM — Interactive English conversation practice with guided topics and friendly discussions.
        </p>
      </div>

      {/* Value Proposition */}
      <div className="flex flex-col gap-10 w-full max-w-3xl text-center mb-20">
        {[
          { title: "Interactive Practice", desc: "Engage in real conversations and improve fluency." },
          { title: "Social Networking", desc: "Meet like-minded learners and make friends." },
          { title: "Confidence Boost", desc: "Gain confidence speaking in English naturally." },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-3xl p-8 shadow-md hover:shadow-lg transition duration-200"
          >
            <h3 className="text-2xl font-semibold text-blue-800 mb-2">{item.title}</h3>
            <p className="text-gray-700 text-[16px] leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Inspirational Quote */}
      <div className="bg-blue-100/50 rounded-3xl p-10 mb-16 shadow-sm text-center max-w-3xl">
        <p className="text-gray-800 text-[17px] leading-relaxed">
          “Speak, connect, and grow — every conversation is a step forward.”
        </p>
      </div>

      {/* Bottom CTA */}
      <button className="bg-blue-800 text-white px-12 py-4 rounded-3xl text-lg font-semibold shadow-md hover:bg-blue-900 hover:shadow-lg active:scale-95 transition duration-150">
        Join the Club
      </button>

    </div>
  );
};

export default EnglishSpeakingClubPage;
