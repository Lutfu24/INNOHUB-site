import React, { useState } from 'react';
import { motion } from 'framer-motion';

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

const vakansiyalar = ['Frontend Developer', 'UX/UI Designer', 'Digital Marketing'];
const projects = ['Layihə 1', 'Layihə 2', 'Layihə 3', 'Gələcək Layihə 1'];

export default function AboutUsPage() {
  const [advIndex, setAdvIndex] = useState(0);

  const handleClickInnohub = () => {
    setAdvIndex((prev) => (prev + 1) % advantages.length);
  };

  return (
    <div className="min-h-screen relative font-sans bg-white text-gray-900 px-6 py-8 overflow-hidden">

      {/* Subtle tech grid */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-blue-200/20 rounded-full"
            style={{
              width: `${Math.random()*4+2}px`,
              height: `${Math.random()*4+2}px`,
              top: `${Math.random()*100}%`,
              left: `${Math.random()*100}%`
            }}
            animate={{ y: [0, -10, 0], x: [0, 10, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, delay: i*0.1 }}
          />
        ))}
      </div>

      {/* Hero + INNOHUB Image */}
      <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-6 items-center">
        <motion.div 
          initial={{ opacity:0, y:-5 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:0.7 }}
          className="col-span-3 md:col-span-1 text-center md:text-left space-y-2"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Haqqımızda</h1>
          <p className="text-gray-700 text-sm leading-relaxed">
            INNOHUB, gəncləri texnoloji bacarıqlarla təmin edən, regionda innovasiya ekosistemini gücləndirən müasir mərkəzdir.
          </p>

          <button
            onClick={handleClickInnohub}
            className="bg-[#02C8FE] text-white px-5 py-2 rounded-md font-semibold mt-2 shadow-sm hover:shadow-md transition-shadow"
          >
            Niye INNOHUB?
          </button>

          <motion.p 
            key={advIndex} 
            initial={{ opacity:0, y:3 }} 
            animate={{ opacity:1, y:0 }} 
            transition={{ duration:0.3 }}
            className="text-gray-900 text-sm font-medium mt-1"
          >
            {advantages[advIndex]}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity:0, y:5 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:0.7, delay:0.2 }}
          className="col-span-3 md:col-span-2 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200"
        >
          <img 
            src="https://via.placeholder.com/600x400?text=INNOHUB+Bina" 
            alt="INNOHUB Binası" 
            className="w-full h-56 md:h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Vakansiyalar */}
      <section className="max-w-3xl mx-auto mb-6">
        <h2 className="text-xl font-semibold mb-2 text-center text-gray-900">Vakansiyalar</h2>
        <div className="grid md:grid-cols-3 gap-2">
          {vakansiyalar.map((v) => (
            <motion.div 
              key={v} 
              whileHover={{ scale:1.03, boxShadow: '0 0 8px #02C8FE' }}
              className="bg-[#02C8FE] text-white px-4 py-2 rounded-md text-center cursor-pointer transition-all text-sm"
            >
              {v}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Layihələr */}
      <section className="max-w-4xl mx-auto mb-6">
        <h2 className="text-xl font-semibold mb-2 text-center text-gray-900">Layihələr</h2>
        <div className="grid md:grid-cols-4 gap-2">
          {projects.map((p) => (
            <motion.div 
              key={p} 
              whileHover={{ scale:1.03, boxShadow: '0 0 8px #02C8FE' }}
              className="bg-[#02C8FE] text-white px-4 py-2 rounded-md text-center cursor-pointer transition-all text-sm"
            >
              {p}
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="text-center text-gray-700 text-xs pb-2">
        &copy; 2025 INNOHUB. Bütün hüquqlar qorunur.
      </footer>
    </div>
  );
}
