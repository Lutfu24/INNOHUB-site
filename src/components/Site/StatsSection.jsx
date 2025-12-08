import React from "react";

const STATS = [
  { id: 1, value: "900+", description: "tələbə" },
  { id: 2, value: "80%", description: "işlə təmin" },
  { id: 3, value: "5+", description: "partnyor" },
  { id: 4, value: "10+", description: "müəllim" },
  { id: 5, value: "10+", description: "üzv" },
];

const StatCard = ({ value, description }) => (
  <div
    className="flex-shrink-0 w-52 p-6 rounded-2xl bg-white border border-cyan-200 shadow-sm
               hover:shadow-xl hover:border-cyan-400 transition-all duration-300
               hover:-translate-y-1 hover:scale-[1.03] cursor-pointer"
  >
    <h3 className="text-3xl font-bold text-gray-900 drop-shadow-sm">{value}</h3>
    <p className="text-gray-600 mt-1">{description}</p>

    <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-20 transition duration-300 bg-cyan-300 blur-xl" />
  </div>
);

const StatsSection = () => {
  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 overflow-hidden">
      <h2 className="text-3xl font-bold text-gray-900 mb-10">Niyə biz?</h2>

      <div className="absolute top-0 right-0 h-full w-1/3 opacity-20 pointer-events-none
                      bg-gradient-to-b from-cyan-300 to-transparent blur-2xl" />

      <div className="flex space-x-6 overflow-x-auto pb-4 -mx-4 pl-4 scrollbar-hide">
        {STATS.map((item) => (
          <div key={item.id} className="relative">
            <StatCard value={item.value} description={item.description} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
