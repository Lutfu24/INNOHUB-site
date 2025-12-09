import React from 'react';
import { motion } from 'framer-motion';

const FloatingShape = ({ className, style, animationDelay }) => (
  <motion.div
    className={`absolute ${className}`}
    style={style}
    animate={{ y: [0, -25, 0], x: [0, 20, -20, 0] }}
    transition={{ duration: 7, repeat: Infinity, delay: animationDelay }}
  />
);

export default function AboutUsPage() {
  const vakansiyalar = ['Frontend Developer', 'UX/UI Designer', 'Digital Marketing'];
  const projects = ['Layihə 1', 'Layihə 2', 'Layihə 3', 'Gələcək Layihə 1'];

  return (
    <div className="min-h-screen relative font-sans bg-white overflow-hidden">
      {/* Enhanced floating overlay elements with more innovation blue tones */}
      <FloatingShape className="w-80 h-80 rounded-full bg-blue-400 opacity-25" style={{ top: '5%', left: '10%' }} animationDelay={0} />
      <FloatingShape className="w-64 h-64 rounded-full bg-sky-400 opacity-30" style={{ top: '40%', left: '65%' }} animationDelay={1} />
      <FloatingShape className="w-48 h-48 rounded-full bg-indigo-300 opacity-20" style={{ top: '70%', left: '25%' }} animationDelay={2} />
      <FloatingShape className="w-96 h-96 rounded-3xl bg-gradient-to-tr from-blue-300 to-sky-300 opacity-15" style={{ top: '20%', left: '50%' }} animationDelay={0.5} />
      <FloatingShape className="w-40 h-40 rounded-full bg-indigo-400 opacity-20" style={{ top: '60%', left: '75%' }} animationDelay={1.2} />
      <FloatingShape className="w-56 h-56 rounded-full bg-sky-500 opacity-20" style={{ top: '30%', left: '30%' }} animationDelay={0.7} />

      {/* Hero Section */}
      <header className="relative z-10 flex flex-col items-center justify-center py-40 px-4">
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-6xl md:text-7xl font-extrabold text-indigo-700 text-center">
          Haqqımızda
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="mt-6 text-xl md:text-2xl text-slate-700 max-w-3xl text-center">
          Gələcəyin sənin əlindədir. Biz səninləyik!
        </motion.p>
      </header>

      {/* About Content */}
      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="relative z-10 max-w-4xl mx-auto mt-16 p-12 bg-white bg-opacity-80 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white border-opacity-20">
        <p className="text-slate-700 text-lg md:text-xl leading-relaxed text-center">
          INNOHUB, Azərbaycanın Gəncə şəhərində yerləşən, innovasiya yönümlü ekosistemin inkişafına xidmət edən müasir bir mərkəzdir. Biz ölkənin regionlarında yaşayan gənclərin ən aktual və yüksək tələbata sahib sahələrdə peşəkarlaşdırılmasını qarşımıza məqsəd qoyuruq.
        </p>
      </motion.section>

      {/* Vakansiyalar */}
      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="relative z-10 mt-32 max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-indigo-700 mb-10 text-center">Vakansiyalar</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {vakansiyalar.map((v) => (
            <motion.div key={v} whileHover={{ scale: 1.05, rotateY: 2 }} className="bg-white bg-opacity-80 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 text-center border border-white border-opacity-20 cursor-pointer transition-transform hover:shadow-3xl">
              <h3 className="text-xl md:text-2xl font-semibold text-indigo-700 mb-3">{v}</h3>
              <p className="text-slate-600 text-sm md:text-base">Komandamıza qoşulmaq üçün aktiv vakansiyalarımızı izlə!</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Layihələr */}
      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="relative z-10 mt-32 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-indigo-700 mb-10 text-center">Layihələr</h2>
        <div className="grid md:grid-cols-4 gap-10">
          {projects.map((p) => (
            <motion.div key={p} whileHover={{ scale: 1.05, rotateY: 2 }} className="bg-white bg-opacity-80 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 text-center border border-white border-opacity-20 cursor-pointer transition-transform hover:shadow-3xl">
              <h3 className="text-lg md:text-xl font-semibold text-indigo-700 mb-2">{p}</h3>
              <p className="text-slate-600 text-sm md:text-base">Keçmiş və gələcək layihələr</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <footer className="relative z-10 mt-40 text-center text-slate-500 text-sm md:text-base pb-12">
        #innovasiyahərkəsüçün &copy; 2025 INNOHUB. Bütün hüquqlar qorunur.
      </footer>
    </div>
  );
}