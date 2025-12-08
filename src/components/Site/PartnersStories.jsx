import React, { useState } from "react";

const PARTNERS = [1, 2, 3, 4, 5];
const STORIES = [1, 2, 3, 4];

const PartnersAndStoriesOnly = () => {
  const [partnerIndex, setPartnerIndex] = useState(0);
  const [storyIndex, setStoryIndex] = useState(0);

  const next = (i, arr) => (i < arr.length - 1 ? i + 1 : 0);
  const prev = (i, arr) => (i > 0 ? i - 1 : arr.length - 1);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-cyan-100/40 to-transparent blur-2xl opacity-70" />

      <section className="mb-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Partnyorlar</h2>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setPartnerIndex((p) => prev(p, PARTNERS))}
            className="p-3 rounded-full bg-white border shadow-sm hover:shadow-md hover:border-cyan-400 transition"
          >
            <span className="text-xl">‹</span>
          </button>

          <div className="grow h-40 bg-white/60 backdrop-blur-lg border border-cyan-200 rounded-2xl shadow-sm flex items-center justify-center">
            <span className="text-gray-500 italic">
              Partnyor loqoları gələcək
            </span>
          </div>

          <button
            onClick={() => setPartnerIndex((p) => next(p, PARTNERS))}
            className="p-3 rounded-full bg-white border shadow-sm hover:shadow-md hover:border-cyan-400 transition"
          >
            <span className="text-xl">›</span>
          </button>
        </div>
      </section>

      <div className="h-px bg-gray-200 mb-16"></div>

      <section>
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900">Uğur hekayələri</h2>
          <p className="text-gray-500 mt-1 text-sm">Sən də uğur hekayəni yaz</p>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setStoryIndex((s) => prev(s, STORIES))}
            className="p-3 rounded-full bg-white border shadow-sm hover:shadow-md hover:border-cyan-400 transition"
          >
            <span className="text-xl">‹</span>
          </button>

          <div className="grow flex space-x-5 overflow-hidden py-2">
            {STORIES.map((story, index) => (
              <div
                key={index}
                className="min-w-[260px] h-48 bg-white/70 backdrop-blur-xl border border-cyan-200 rounded-2xl p-6 shadow-sm relative flex-shrink-0 hover:-translate-y-1 hover:shadow-md transition duration-300"
              >
                <span className="absolute -top-4 left-4 text-4xl font-extrabold text-cyan-300 opacity-70 rotate-180">
                  ❝
                </span>

                <p className="text-gray-700 italic mt-5 leading-relaxed">
                  Uğur hekayəsi mətni (placeholder)
                </p>
              </div>
            ))}
          </div>

          <button
            onClick={() => setStoryIndex((s) => next(s, STORIES))}
            className="p-3 rounded-full bg-white border shadow-sm hover:shadow-md hover:border-cyan-400 transition"
          >
            <span className="text-xl">›</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default PartnersAndStoriesOnly;
