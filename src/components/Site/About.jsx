import React, { useState } from 'react'
import { motion } from 'framer-motion'

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
]

const vakansiyalar = ['Frontend Developer', 'UX/UI Designer', 'Digital Marketing']
const projects = ['Layihə 1', 'Layihə 2', 'Layihə 3', 'Gələcək Layihə 1']

export default function AboutUsPage() {
  const [advIndex, setAdvIndex] = useState(0)

  return (
    <div className="relative w-full bg-white text-gray-900 overflow-hidden">

      {/* subtle particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-[#02C8FE]/15"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, delay: i * 0.3 }}
          />
        ))}
      </div>

      {/* CONTENT */}
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-6 space-y-10">

        {/* HERO */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-3 text-center lg:text-left"
          >
            <h1 className="font-bold text-[clamp(1.9rem,4vw,3rem)]">
              Haqqımızda
            </h1>

            <p className="text-gray-700 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
              INNOHUB gəncləri real texnoloji bacarıqlarla təmin edən, innovasiya və
              startap mədəniyyətini inkişaf etdirən müasir mərkəzdir.
            </p>

            <button
              onClick={() => setAdvIndex((p) => (p + 1) % advantages.length)}
              className="mx-auto lg:mx-0 inline-flex items-center justify-center rounded-lg bg-[#02C8FE] px-5 py-2 text-sm font-semibold text-white transition hover:scale-[1.03] active:scale-95"
            >
              Niyə INNOHUB?
            </button>

            <motion.p
              key={advIndex}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm font-medium"
            >
              {advantages[advIndex]}
            </motion.p>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="w-full rounded-xl overflow-hidden shadow-sm"
          >
            <img
              src="https://via.placeholder.com/900x600?text=INNOHUB"
              alt="INNOHUB"
              className="w-full h-[200px] sm:h-[260px] md:h-[320px] lg:h-[360px] object-cover"
            />
          </motion.div>
        </section>

        {/* VAKANSIYALAR */}
        <section className="space-y-3">
          <h2 className="text-center font-semibold text-lg sm:text-xl">
            Vakansiyalar
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {vakansiyalar.map((v) => (
              <motion.div
                key={v}
                whileHover={{ scale: 1.04 }}
                className="rounded-lg bg-[#02C8FE] px-4 py-3 text-center text-sm font-medium text-white cursor-pointer"
              >
                {v}
              </motion.div>
            ))}
          </div>
        </section>

        {/* LAYIHƏLƏR */}
        <section className="space-y-3">
          <h2 className="text-center font-semibold text-lg sm:text-xl">
            Layihələr
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {projects.map((p) => (
              <motion.div
                key={p}
                whileHover={{ scale: 1.04 }}
                className="rounded-lg bg-[#02C8FE] px-4 py-3 text-center text-sm font-medium text-white cursor-pointer"
              >
                {p}
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}
