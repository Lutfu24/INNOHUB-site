import { useState } from "react";
import { motion } from "framer-motion";

// --- Data ---
const advantages = [
  "Regionda güclü innovasiya mühiti",
  "Gənclər üçün praktiki texnoloji bacarıqlar",
  "Real problemlərin həlli",
  "Peşəkar mentor dəstəyi",
  "Təqaüd imkanları gənclər üçün",
  "Startap ekosisteminə daxil olmaq",
  "Networking imkanları",
  "Hackathon dəstəyi",
  "Yeni layihələrdə iştirak",
  "Gənclərin peşəkarlaşması",
];

const vakansiyalar = [
  "Frontend Developer",
  "UX/UI Designer",
  "Digital Marketing",
];
const projects = ["Layihə 1", "Layihə 2", "Layihə 3", "Gələcək Layihə 1"];

// --- Reusable Card ---
const Card = ({ title }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="rounded-xl bg-[#02C8FE] px-5 py-4 text-center text-white text-sm sm:text-base font-semibold shadow-md cursor-pointer transition-shadow duration-300"
  >
    {title}
  </motion.div>
);

export default function AboutUsPage() {
  const [advIndex, setAdvIndex] = useState(0);

  return (
    <div className="relative w-full bg-white text-gray-900 overflow-hidden">
      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-[#02C8FE]/20"
            style={{
              width: Math.random() * 5 + 3,
              height: Math.random() * 5 + 3,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, delay: i * 0.25 }}
          />
        ))}
      </div>

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4 text-center lg:text-left"
          >
            <h1 className="font-bold text-[clamp(2rem,4vw,3rem)]">
              Haqqımızda
            </h1>
            <p className="text-gray-700 leading-relaxed max-w-xl mx-auto lg:mx-0">
              INNOHUB gəncləri real texnoloji bacarıqlarla təmin edən,
              innovasiya və startap mədəniyyətini inkişaf etdirən müasir
              mərkəzdir.
            </p>
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-3">
              <button
                onClick={() => setAdvIndex((p) => (p + 1) % advantages.length)}
                className="rounded-lg bg-[#02C8FE] px-6 py-2 text-white font-semibold text-sm sm:text-base hover:scale-105 active:scale-95 transition"
              >
                Niyə INNOHUB?
              </button>
              <motion.p
                key={advIndex}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm sm:text-base font-medium text-gray-800 max-w-[300px]"
              >
                {advantages[advIndex]}
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="w-full rounded-2xl overflow-hidden shadow-lg"
          >
            <img
              src="https://via.placeholder.com/900x600?text=INNOHUB"
              alt="INNOHUB"
              className="w-full h-[220px] sm:h-[280px] md:h-[320px] lg:h-[360px] object-cover"
            />
          </motion.div>
        </section>

        {/* Vakansiyalar */}
        <section className="space-y-6">
          <h2 className="text-center font-semibold text-lg sm:text-xl">
            Vakansiyalar
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {vakansiyalar.map((v) => (
              <Card key={v} title={v} />
            ))}
          </div>
        </section>

        {/* Layihələr */}
        <section className="space-y-6">
          <h2 className="text-center font-semibold text-lg sm:text-xl">
            Layihələr
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {projects.map((p) => (
              <Card key={p} title={p} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
