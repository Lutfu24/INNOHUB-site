import { useState } from "react";

export default function FaqBox() {
  const [active, setActive] = useState(null);

  const data = [
    { 
      id: 1, 
      title: "Ən çox verilən suallar", 
      desc: "Bu bölmədə ən çox soruşulan suallara cavab tapa bilərsiniz."
    },
    { 
      id: 2, 
      title: "İkinci sual", 
      desc: "Bu sualın cavabı belədir: ... "
    },
    { 
      id: 3, 
      title: "Üçüncü sual", 
      desc: "Bu isə üçüncü sualın cavabıdır."
    }
  ];

  const handleClick = (i) => {
    setActive(active === i ? null : i);
  };

  return (
    <div className="max-w-4xl w-full mx-auto py-10 flex flex-col gap-10">
      <h2 className="text-xl font-semibold">FAQ</h2>

      <div className="flex flex-col gap-3">
        {data.map((item) => (
          <div key={item.id}>
            <button
              onClick={() => handleClick(item.id)}
              className="bg-gray-200 rounded-xl px-5 py-4 cursor-pointer flex justify-between items-center w-full"
            >
              <span>
                {item.id}. {item.title}
              </span>

              <span className="text-xl">
                {active === item.id ? "-" : "+"}
              </span>
            </button>

            {/* Answer text */}
            <div
              className={`overflow-hidden transition-all duration-300 
                ${active === item.id ? "max-h-40 mt-2" : "max-h-0"}
              `}
            >
              <p className="bg-gray-100 rounded-xl p-4 text-gray-700">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Contact form */}
      <div className="flex flex-col gap-4 mt-6">
        <h3 className="text-lg font-semibold">Sualına cavab tapmadın? Əlaqə formu</h3>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex flex-col gap-4 w-full md:w-1/2">
            <input
              placeholder="Ad:"
              className="bg-blue-100 p-3 rounded-lg outline-none w-full"
            />
            <input
              placeholder="Mail:"
              className="bg-blue-100 p-3 rounded-lg outline-none w-full"
            />
            <textarea
              placeholder="Mesaj:"
              className="bg-blue-100 p-3 rounded-lg h-28 outline-none rounded-lg resize-none w-full"
            />
            <button className="bg-cyan-400 text-white px-8 py-2 rounded-full w-fit">
              Göndər
            </button>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="https://static.vecteezy.com/system/resources/previews/036/312/079/non_2x/unique-3d-rendering-faq-icon-simple-realistic-illustration-free-png.png"
              className="w-64 h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
