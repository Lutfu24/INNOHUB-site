import { useState } from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { Career } from "../../services/careerservices.js";

export default function CareerPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    field: ["Sahənizi seçin", "IT", "Design", "AI"],
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.firstName || !form.phone || !form.field) {
      setStatus({
        type: "error",
        message: "Zəhmət olmasa müvafiq sahələri doldurun.",
      });
      return;
    }
    console.log(form);
    Career(form).then((res) => {
      setStatus({
        type: "success",
        message: res.message,
      });
      setForm({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        field: ["IT", "Design", "AI"],
      });
    });
  };

  const infoBlocks = [
    {
      title: "Fərdi Dəstək",
      desc: "Bacarıq və məqsədlərinizə uyğun fərdi karyera yönləndirilməsi.",
    },
    {
      title: "Peşəkar Mentorluq",
      desc: "Sahə üzrə real təcrübəyə malik mentorlarla inkişaf.",
    },
    {
      title: "Praktik Yanaşma",
      desc: "Real layihələr və bazar tələblərinə uyğun biliklər.",
    },
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden px-6 py-16">
      {/* Background particles */}
      <Particles
        options={{
          fpsLimit: 60,
          particles: {
            color: { value: "#02C8FE" },
            links: {
              enable: true,
              color: "#02C8FE",
              distance: 140,
            },
            move: { enable: true, speed: 1 },
            number: { value: 40 },
          },
        }}
        className="absolute inset-0 z-0"
      />

      {/* Header */}
      <header className="relative z-10 text-center mb-16">
        <h1 className="text-5xl font-extrabold text-[#02C8FE] mb-4">
          Karyera Dəstəyi
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg">
          Doğru istiqamət, real bacarıqlar və peşəkar inkişaf üçün dəstək.
        </p>
      </header>

      {/* Form */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <input
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
          placeholder="Ad"
          className="input"
        />
        <input
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
          placeholder="Soyad"
          className="input"
        />
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Telefon"
          className="input"
        />
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="input"
        />

        <select
          name="field"
          onChange={handleChange}
          className="input md:col-span-2"
        >
          {typeof form.field !== "string" ? (
            form.field.map((a, i) => (
              <option key={i} value={a}>
                {a}
              </option>
            ))
          ) : (
            <option>{form.field}</option>
          )}
        </select>

        <button
          onClick={handleSubmit}
          className="md:col-span-2 py-4 cursor-pointer bg-[#02C8FE] text-white rounded-2xl font-semibold text-lg shadow-lg hover:scale-[1.02] transition"
        >
          Qeydiyyatdan keç
        </button>

        {status && (
          <p
            className={`md:col-span-2 text-center ${
              status.type === "error" ? "text-red-600" : "text-green-600"
            }`}
          >
            {status.message}
          </p>
        )}
      </motion.section>

      {/* Info Grid */}
      <section className="relative z-10 mt-20 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {infoBlocks.map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-3xl shadow-xl p-6 text-center"
          >
            <h3 className="text-2xl font-semibold text-[#02C8FE] mb-2">
              {item.title}
            </h3>
            <p className="text-gray-700 text-sm">{item.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
