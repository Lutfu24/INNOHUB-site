import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCourses } from "../../services/homeServices";
import {
  FaChalkboardTeacher,
  FaProjectDiagram,
  FaBriefcase,
  FaUserGraduate,
  FaClock,
} from "react-icons/fa";

/* ================== STATIC DATA ================== */

const ADVANTAGES = [
  { id: 1, title: "Mentor dəstəyi", icon: FaUserGraduate, link: "" },
  { id: 2, title: "Praktiki layihələr", icon: FaProjectDiagram, link: "" },
  { id: 3, title: "Karyera dəstəyi", icon: FaBriefcase, link: "karyera" },
  { id: 4, title: "Təcrübəli müəllimlər", icon: FaChalkboardTeacher, link: "" },
  { id: 5, title: "7 gün açıq mərkəz", icon: FaClock, link: "haqqimizda" },
];

const TESTIMONIALS = [
  { id: 1, img: "/users/u1.jpg" },
  { id: 2, img: "/users/u2.jpg" },
  { id: 3, img: "/users/u3.jpg" },
];

/* ================== COMPONENT ================== */

export default function EduSections() {
  const [saheler, setSaheler] = useState([]);

  useEffect(() => {
    (async () => {
      const courses = await getCourses();
      setSaheler(courses || []);
    })();
  }, []);

  return (
    <section className="flex justify-center bg-white">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        {/* ================== ADVANTAGES ================== */}
        <SectionTitle title="Üstünlüklərimiz" />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-14">
          {ADVANTAGES.map(({ id, title, icon: Icon, link }) => (
            <Link key={id} to={link}>
              <div className="group h-full rounded-3xl bg-[#E8F9FF] p-5 flex flex-col items-center justify-center text-center transition hover:-translate-y-1 hover:shadow-lg">
                <Icon className="text-4xl text-[#008EAF] mb-3 group-hover:scale-110 transition" />
                <p className="font-semibold text-[#008EAF] text-base sm:text-lg">
                  {title}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* ================== SAHƏLƏR ================== */}
        <SectionTitle title="Sahələr" />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-14">
          {saheler.map((f, i) => (
            <Link key={i} to={f.category + "?ID=" + f._id}>
              <div className="h-full rounded-3xl border border-[#7EE5FF] p-5 flex flex-col items-center justify-center transition hover:shadow-md hover:border-[#00C6FF]">
                <div className="w-20 h-20 mb-3 rounded-full bg-white shadow-inner flex items-center justify-center">
                  {f.image && (
                    <img
                      src={f.image}
                      alt={f.title}
                      className="max-w-16 max-h-16 object-contain"
                    />
                  )}
                </div>
                <p className="font-semibold text-[#00C6FF] text-center text-base">
                  {f.title}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* ================== TESTIMONIALS ================== */}
        <SectionTitle title="Rəylər" />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="rounded-3xl min-h-[110px] bg-gradient-to-r from-[#C5F3FF] to-[#E8FAFF] flex items-center justify-center"
            >
              <img
                src={t.img}
                alt="User"
                className="w-16 h-16 rounded-full object-cover border-2 border-white"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================== REUSABLE ================== */

function SectionTitle({ title }) {
  return (
    <h2 className="text-xl sm:text-2xl font-bold mb-5 text-gray-800">
      {title}
    </h2>
  );
}
