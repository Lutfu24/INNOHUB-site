import React, { useState } from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";

const UltraMinimalFilmClubPage = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [status, setStatus] = useState(null);

  const film = {
    title: "Klassik Kino Gecəsi",
    desc: "Seçilmiş filmlərlə həftəlik vizual və sosial təcrübə. Minimal dizayn, maksimum dəyər.",
    poster: "https://d23.com/app/uploads/2025/09/00_ZOOTOPIA2-ONLINE-USE-mono_fullcomp.0092.jpg",
  };

  const valueCards = [
    { title: "Vizual Təcrübə", desc: "Minimal və estetik seçilmiş filmlər." },
    { title: "Sosial Müzakirə", desc: "Dostlarla birlikdə fikir paylaşımı." },
    { title: "Həftəlik Ritm", desc: "Hər həftə yeni film və yeni təcrübə." },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email) {
      setStatus({ type: "error", message: "Zəhmət olmasa bütün sahələri doldurun." });
      return;
    }
    setStatus({ type: "success", message: "Qeydiyyat göndərildi — tezliklə əlaqə saxlanılacaq." });
    setForm({ name: "", phone: "", email: "" });
    setTimeout(() => setPopupOpen(false), 1500);
  };

  return (
    <div className="min-h-screen bg-white relative font-sans px-6 py-20 flex flex-col items-center overflow-hidden">
      {/* Background Particles */}
      <Particles
        options={{
          background: { color: "#ffffff" },
          fpsLimit: 60,
          interactivity: { events: { onHover: { enable: true, mode: "repulse" } }, modes: { repulse: { distance: 120 } } },
          particles: { color: { value: "#02C8FE" }, links: { enable: true, color: "#02C8FE", distance: 120 }, move: { enable: true, speed: 0.8 } },
        }}
        className="absolute inset-0 z-0 pointer-events-none"
      />

      {/* Hero */}
      <header className="relative z-10 text-center mb-12 max-w-3xl">
        <h1 className="text-4xl font-extrabold text-[#02C8FE] mb-4">Ödənişsiz Film Klubu</h1>
        <p className="text-gray-700 text-lg">
          Həftədə bir dəfə seçilmiş filmlərlə premium estetik təcrübə. Dostlarla birlikdə baxın və müzakirə edin.
        </p>
      </header>

      {/* Grid Layout */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl w-full mb-16">
        {/* Film Poster */}
        <motion.div
          className="md:col-span-2 bg-white rounded-3xl shadow-2xl overflow-hidden cursor-pointer relative"
          whileHover={{ scale: 1.02 }}
        >
          <img src={film.poster} alt={film.title} className="w-full h-80 object-cover" />
          <div className="p-6 relative z-10">
            <h2 className="text-2xl font-bold mb-2 text-[#02C8FE]">{film.title}</h2>
            <p className="text-gray-700">{film.desc}</p>
          </div>
          {/* Hover tech overlay */}
          <Particles
            options={{
              particles: { color: { value: "#02C8FE" }, links: { enable: true, color: "#02C8FE", distance: 100 }, move: { enable: true, speed: 0.6 }, number: { value: 15 } },
              interactivity: { events: { onHover: { enable: true, mode: "repulse" } } },
            }}
            className="absolute inset-0 z-0 pointer-events-none"
          />
        </motion.div>

        {/* Value Proposition Cards */}
        {valueCards.map((item, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-3xl p-6 shadow-xl flex flex-col justify-center relative overflow-hidden cursor-pointer"
            whileHover={{ scale: 1.03, boxShadow: "0 0 30px #02C8FE, 0 0 60px #02C8FE" }}
          >
            {/* Background Image Placeholder */}
            <div className="absolute inset-0 -z-10 opacity-20">
              <img
                src={`https://via.placeholder.com/400x300?text=${encodeURIComponent(item.title)}`}
                alt={item.title}
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>

            <h3 className="text-xl font-semibold text-[#02C8FE] mb-2 relative z-10">{item.title}</h3>
            <p className="text-gray-700 text-sm relative z-10">{item.desc}</p>

            <Particles
              options={{
                particles: { color: { value: "#02C8FE" }, links: { enable: true, color: "#02C8FE", distance: 80 }, move: { enable: true, speed: 0.5 }, number: { value: 12 } },
                interactivity: { events: { onHover: { enable: true, mode: "repulse" } } },
              }}
              className="absolute inset-0 z-0 pointer-events-none"
            />
          </motion.div>
        ))}
      </div>

      {/* CTA Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        onClick={() => setPopupOpen(true)}
        className="bg-[#02C8FE] text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-lg transition duration-150 relative z-10"
      >
        Klubda Qoşul
      </motion.button>

      {/* Popup Form */}
      {popupOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className="bg-white rounded-3xl p-8 w-full max-w-md shadow-2xl relative"
          >
            <h2 className="text-2xl font-bold text-[#02C8FE] mb-6 text-center">Qeydiyyat Formu</h2>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Ad Soyad" className="px-5 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#02C8FE]" />
              <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="Telefon" className="px-5 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#02C8FE]" />
              <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" className="px-5 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#02C8FE]" />
              <button type="submit" className="bg-[#02C8FE] text-white py-3 rounded-xl font-semibold mt-2 hover:scale-[1.02] transition">Təsdiq et</button>
              {status && <p className={`text-center mt-2 ${status.type === "error" ? "text-red-600" : "text-green-600"}`}>{status.message}</p>}
            </form>
            <button onClick={() => setPopupOpen(false)} className="absolute top-4 right-4 text-gray-500 font-bold hover:text-gray-900">X</button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default UltraMinimalFilmClubPage;
