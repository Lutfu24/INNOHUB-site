import React, { useState } from 'react';

export default function CareerPage() {
  const [form, setForm] = useState({ firstName: '', lastName: '', phone: '', email: '', area: '' });
  const [status, setStatus] = useState(null);

  const areas = [
    'Web Development',
    'Design & UX',
    'Digital Marketing',
    'Helpdesk',
    'UX/UI Design',
    'Digər'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.firstName || !form.phone || !form.area) {
      setStatus({ type: 'error', message: 'Zəhmət olmasa müvafiq sahələri doldurun.' });
      return;
    }
    setStatus({ type: 'success', message: 'Qeydiyyat göndərildi — tezliklə əlaqə saxlanılacaq.' });
    console.log('Submitted:', form);
    setForm({ firstName: '', lastName: '', phone: '', email: '', area: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white relative overflow-hidden font-sans">
      {/* SVG overlay */}
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="30%" cy="15%" r="300" fill="rgba(56, 189, 248, 0.2)" />
        <circle cx="70%" cy="85%" r="250" fill="rgba(96, 165, 250, 0.15)" />
      </svg>

      {/* Header */}
      <header className="relative z-10 text-center py-28 px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold text-indigo-700">Karyera Dəstəyi</h1>
        <p className="mt-4 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
          Doğru karyera seçimi və bacarıqların inkişafı üçün fərdi və peşəkar dəstək.
        </p>
      </header>

      {/* Form section */}
      <section className="relative z-10 max-w-4xl mx-auto p-8 md:p-12 bg-white rounded-3xl shadow-2xl -mt-20">
        <h2 className="text-3xl font-semibold text-indigo-700 mb-8 text-center">Qeydiyyat Formu</h2>
        <form onSubmit={handleSubmit} className="grid gap-6">
          <div className="grid md:grid-cols-2 gap-4">
            <input name="firstName" value={form.firstName} onChange={handleChange} type="text" placeholder="Ad" className="px-5 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-200" />
            <input name="lastName" value={form.lastName} onChange={handleChange} type="text" placeholder="Soyad" className="px-5 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-200" />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <input name="phone" value={form.phone} onChange={handleChange} type="tel" placeholder="Telefon" className="px-5 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-200" />
            <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="Email" className="px-5 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-200" />
          </div>
          <select name="area" value={form.area} onChange={handleChange} className="px-5 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-200">
            <option value="">Seçin...</option>
            {areas.map((a) => (<option key={a} value={a}>{a}</option>))}
          </select>
          <button type="submit" className="py-4 bg-gradient-to-r from-indigo-500 to-sky-400 text-white rounded-2xl font-semibold text-lg hover:scale-[1.02] transition-transform shadow-lg">
            Qeydiyyatdan keç
          </button>
          {status && <div className={`mt-2 text-center text-sm ${status.type === 'error' ? 'text-red-600' : 'text-green-600'}`}>{status.message}</div>}
        </form>
      </section>

      {/* Info blocks */}
      <section className="relative z-10 mt-28 max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">
        {[
          { title: 'Fərdi Dəstək', desc: 'Sizin bacarıq və ehtiyaclarınıza uyğun fərdi məsləhət.' },
          { title: 'Peşəkar Mentorluq', desc: 'Təcrübəli mütəxəssislərlə kariyeranızı gücləndirin.' },
          { title: 'İnnovativ Yanaşma', desc: 'Modern texnologiyalar və UX/UI dizayn prinsipləri ilə dəstək.' }
        ].map((block) => (
          <div key={block.title} className="bg-white rounded-3xl shadow-2xl p-8 text-center hover:scale-[1.03] transition-transform">
            <h3 className="text-2xl font-semibold text-indigo-700 mb-3">{block.title}</h3>
            <p className="text-slate-600 text-sm">{block.desc}</p>
          </div>
        ))}
      </section>

      <footer className="relative z-10 mt-32 text-center text-slate-500 text-sm pb-12">
        &copy; 2025 INNOHUB. Bütün hüquqlar qorunur.
      </footer>
    </div>
  );
}