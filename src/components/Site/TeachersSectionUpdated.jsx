import { useEffect, useState } from "react";
import { getTeachers } from "../../services/homeServices";

const TeacherCard = ({ teacher }) => {
  const { name, position, image } = teacher;

  return (
    <div className="w-full sm:w-[48%] lg:w-[30%]">
      <div className="group relative h-full rounded-[28px] bg-gradient-to-b from-cyan-50 to-white border border-cyan-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(6,182,212,0.4) 0.5px, transparent 0.5px)",
            backgroundSize: "22px 22px",
            opacity: 0.15,
          }}
        />

        <div className="relative aspect-[3/4] overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="relative z-10 p-5 bg-white/80 backdrop-blur-sm">
          <h3 className="text-lg font-semibold text-slate-900 leading-tight">
            {name}
          </h3>
          <p className="text-sm text-cyan-700 mt-1">{position}</p>
        </div>
      </div>
    </div>
  );
};


const TeachersSection = () => {
  const [muellimler, setMuellimler] = useState([]);

  useEffect(() => {
    async function showTeachers() {
      const teachers = await getTeachers();
      setMuellimler(teachers || []);
    }
    showTeachers();
  }, []);

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 mb-12">
          Müəllimlər
        </h2>

        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
          {muellimler.map((teacher) => (
            <TeacherCard key={teacher.id} teacher={teacher} />
          ))}
        </div>

        <div className="flex justify-center mt-14">
          <a
            href="/all-teachers"
            className="group inline-flex items-center gap-2 text-base sm:text-lg font-medium text-slate-700 hover:text-cyan-700 transition"
          >
            Bütün müəllimlər
            <span className="text-xl font-semibold transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeachersSection;
