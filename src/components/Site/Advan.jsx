import { Link } from "react-router-dom";
import { getCourses } from "../../services/homeServices";
import { useEffect, useState } from "react";

export default function EduSections() {
  const [saheler, setSaheler] = useState([]);
  const advantages = [
    {
      id: 1,
      title: "Mentor dəstəyi",
      link: "",
      icon: "https://miro.medium.com/1*33M5QGJd6koOV1wCeC5Mtw.jpeg",
    },
    {
      id: 2,
      title: "Praktiki layihələr",
      link: "",
      icon: "https://www.ntaskmanager.com/wp-content/uploads/2020/02/What-is-a-Project-1-scaled.jpg",
    },
    {
      id: 3,
      title: "Karyera dəstəyi",
      link: "karyera",
      icon: "https://upload.wikimedia.org/wikipedia/commons/3/36/Careers_blackboard.jpg",
    },
    {
      id: 4,
      title: "Təcrübəli müəllimlər",
      link: "",
      icon: "https://centraldigest.com/wp-content/uploads/2023/01/InDefenseofTeachers.jpeg",
    },
    {
      id: 5,
      title: "7/24 Açıq mərkəz",
      link: "haqqimizda",
      icon: "https://st2.depositphotos.com/4320021/42186/v/450/depositphotos_421863992-stock-illustration-24-7-service-concept-24.jpg",
    },
  ];

  useEffect(() => {
    async function showCourses() {
      const courses = await getCourses();
      setSaheler([...courses]);
    }
    showCourses();
  }, []);

  const testimonials = [
    { id: 1, img: "/users/u1.jpg" },
    { id: 2, img: "/users/u2.jpg" },
    { id: 3, img: "/users/u3.jpg" },
  ];

  return (
    <section className="flex justify-center">
      <div className="w-[85%] p-6 md:p-10">
        <h2 className="text-2xl font-bold mb-4">Üstünlüklərimiz</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {advantages.map((a) => (
            <Link key={a.id} to={a.link}>
              <div className="bg-[#E8F9FF] rounded-3xl p-6 flex flex-col items-center justify-center text-center">
                <img
                  src={a.icon}
                  className="w-22 h-20 mb-3 opacity-90 rounded-md"
                />
                <div className="font-semibold text-[#008EAF] text-lg">
                  {a.title}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-4">Sahələr</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {saheler &&
            saheler.map((f, i) => (
              <Link key={i} to={f.category}>
                <div className="border border-[#7EE5FF] rounded-3xl p-6 flex flex-col items-center justify-center">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mb-3 bg-white shadow-inner">
                    <img
                      src={f.image ? f.image : null}
                      alt="img"
                      className="max-w-20 max-h-20 rounded-full"
                    />
                  </div>
                  <div className="font-semibold text-[#00C6FF] text-lg">
                    {f.title}
                  </div>
                </div>
              </Link>
            ))}
        </div>

        <h2 className="text-2xl font-bold mb-4">Rəylər</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="rounded-3xl h-28 bg-gradient-to-r from-[#C5F3FF] to-[#E8FAFF] flex items-center p-4"
            >
              <img
                src={t.img}
                alt=""
                className="w-16 h-16 rounded-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
