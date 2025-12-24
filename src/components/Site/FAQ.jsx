import { useState, useRef } from "react";

export default function FaqBox() {
  const [activeId, setActiveId] = useState(null);

  const data = [
    {
      id: 1,
      title: "Ən çox verilən suallar",
      desc:
        "Bu bölmədə kursla bağlı ən çox verilən sualların cavablarını tapa bilərsiniz.",
    },
    {
      id: 2,
      title: "Kurs kimlər üçündür?",
      desc:
        "Sıfırdan başlayanlar və dizayn bacarıqlarını inkişaf etdirmək istəyənlər üçün uyğundur.",
    },
    {
      id: 3,
      title: "Dərslər necə keçirilir?",
      desc:
        "Canlı dərslər + praktiki tapşırıqlar + mentor dəstəyi ilə keçirilir.",
    },
  ];

  const toggle = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <div className="grid lg:grid-cols-2 gap-14 items-start">

        {/* FAQ */}
        <div>
          <h2 className="text-2xl font-bold mb-8">Tez-tez verilən suallar</h2>

          <div className="space-y-4">
            {data.map((item) => (
              <AccordionItem
                key={item.id}
                item={item}
                isOpen={activeId === item.id}
                onToggle={() => toggle(item.id)}
              />
            ))}
          </div>
        </div>

        {/* CONTACT */}
        <div className="bg-slate-50 rounded-3xl p-8">
          <h3 className="text-xl font-semibold mb-6">
            Cavab tapmadın? Bizə yaz
          </h3>

          <form className="space-y-4">
            <input
              placeholder="Ad Soyad"
              className="w-full p-3 rounded-xl bg-white border outline-none"
            />
            <input
              placeholder="Email"
              className="w-full p-3 rounded-xl bg-white border outline-none"
            />
            <textarea
              placeholder="Mesaj"
              rows={4}
              className="w-full p-3 rounded-xl bg-white border outline-none resize-none"
            />

            <button
              type="button"
              className="bg-cyan-500 text-white px-6 py-2 rounded-xl font-semibold hover:scale-105 transition"
            >
              Göndər
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ---------- ACCORDION ITEM ---------- */

function AccordionItem({ item, isOpen, onToggle }) {
  const ref = useRef(null);

  return (
    <div className="border rounded-2xl overflow-hidden">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex justify-between items-center px-6 py-4 text-left font-medium bg-white hover:bg-slate-50"
      >
        <span>{item.title}</span>
        <span className="text-xl">{isOpen ? "−" : "+"}</span>
      </button>

      <div
        ref={ref}
        style={{
          height: isOpen ? ref.current?.scrollHeight : 0,
        }}
        className="transition-[height] duration-300 ease-in-out overflow-hidden bg-slate-50"
      >
        <p className="px-6 py-4 text-gray-600 text-sm leading-relaxed">
          {item.desc}
        </p>
      </div>
    </div>
  );
}
