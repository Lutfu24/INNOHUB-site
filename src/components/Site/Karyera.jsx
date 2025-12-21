import React, { useState } from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";

export default function CareerPage() {
  const [form, setForm] = useState({ firstName: "", lastName: "", phone: "", email: "", area: "" });
  const [status, setStatus] = useState(null);

  const areas = ["Web Development", "Design & UX", "Digital Marketing", "Helpdesk", "UX/UI Design", "Digər"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.firstName || !form.phone || !form.area) {
      setStatus({ type: "error", message: "Zəhmət olmasa müvafiq sahələri doldurun." });
      return;
    }
    setStatus({ type: "success", message: "Qeydiyyat göndərildi — tezliklə əlaqə saxlanılacaq." });
    setForm({ firstName: "", lastName: "", phone: "", email: "", area: "" });
  };

  const infoBlocks = [
    { title: "Fərdi Dəstək", desc: "Sizin bacarıq və ehtiyaclarınıza uyğun fərdi məsləhət." },
    { title: "Peşəkar Mentorluq", desc: "Təcrübəli mütəxəssislərlə kariyeranızı gücləndirin." },
    { title: "İnnovativ Yanaşma", desc: "Modern texnologiyalar və UX/UI dizayn prinsipləri ilə dəstək." }
  ];

  return (
    <div className="min-h-screen bg-white relative font-sans overflow-hidden px-6 py-16">
      {/* Particle overlay */}
      <Particles
        options={{
          background: { color: "#ffffff" },
          fpsLimit: 60,
          interactivity: { events: { onHover: { enable: true, mode: "repulse" } }, modes: { repulse: { distance: 100 } } },
          particles: { color: { value: "#02C8FE" }, links: { enable: true, color: "#02C8FE", distance: 150 }, move: { enable: true, speed: 1 } }
        }}
        className="absolute inset-0 z-0"
      />

      <header className="relative z-10 text-center mb-16">
        <h1 className="text-5xl font-extrabold text-[#02C8FE] mb-4">Karyera Dəstəyi</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Doğru karyera seçimi və bacarıqların inkişafı üçün fərdi və peşəkar dəstək.
        </p>
      </header>

      {/* Form */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 max-w-4xl mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 bg-white rounded-3xl shadow-2xl p-8 md:p-12"
      >
        <input
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
          placeholder="Ad"
          className="px-5 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#02C8FE]"
        />
        <input
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
          placeholder="Soyad"
          className="px-5 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#02C8FE]"
        />
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Telefon"
          className="px-5 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#02C8FE]"
        />
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="px-5 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#02C8FE]"
        />
        <select
          name="area"
          value={form.area}
          onChange={handleChange}
          className="px-5 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#02C8FE] col-span-1 md:col-span-2"
        >
          <option value="">Seçin...</option>
          {areas.map((a) => (
            <option key={a} value={a}>
              {a}
            </option>
          ))}
        </select>
        <button
          type="submit"
          onClick={handleSubmit}
          className="py-4 bg-[#02C8FE] text-white rounded-2xl font-semibold text-lg hover:scale-[1.02] transition-transform col-span-1 md:col-span-2 shadow-lg"
        >
          Qeydiyyatdan keç
        </button>
        {status && (
          <div
            className={`text-center col-span-1 md:col-span-2 ${
              status.type === "error" ? "text-red-600" : "text-green-600"
            }`}
          >
            {status.message}
          </div>
        )}
      </motion.section>

      {/* Info blocks in compact grid */}
      <section className="relative z-10 mt-20 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {infoBlocks.map((block) => (
          <motion.div
            key={block.title}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-3xl shadow-2xl p-6 text-center relative overflow-hidden cursor-pointer"
          >
            <h3 className="text-2xl font-semibold text-[#02C8FE] mb-3">{block.title}</h3>
            <p className="text-gray-700 text-sm">{block.desc}</p>
            {/* Hover particle overlay */}
            <Particles
              options={{
                particles: { color: { value: "#02C8FE" }, links: { enable: true, color: "#02C8FE", distance: 100 }, move: { enable: true, speed: 0.8, direction: "none" }, number: { value: 20 } },
                interactivity: { events: { onHover: { enable: true, mode: "repulse" } } }
              }}
              className="absolute inset-0 z-0 pointer-events-none"
            />
          </motion.div>
        ))}
      </section>

      <footer className="relative z-10 mt-20 text-center text-gray-500 text-sm pb-12">
        &copy; 2025 INNOHUB. Bütün hüquqlar qorunur.
      </footer>
    </div>
  );
}
