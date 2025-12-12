import { Link } from "react-router-dom";
import { getCourses } from "../../services/homeServices";

export default function EduSections() {
  const advantages = [
    { id: 1, title: "Mentor dəstəyi", link: "", icon: "/icons/mentor.svg" },
    { id: 2, title: "Praktiki layihələr", link: "", icon: "/icons/laptop.svg" },
    {
      id: 3,
      title: "Karyera dəstəyi",
      link: "karyera",
      icon: "/icons/rocket.svg",
    },
    {
      id: 4,
      title: "Təcrübəli müəllimlər",
      link: "",
      icon: "/icons/teacher.svg",
    },
    {
      id: 5,
      title: "7/24 Açıq mərkəz",
      link: "haqqimizda",
      icon: "/icons/clock.svg",
    },
  ];

  const fields = [
    { id: 1, title: "Fullstack", link: "web", icon: "/icons/fullstack.svg" },
    { id: 2, title: "Frontend", link: "web", icon: "/icons/frontend.svg" },
    {
      id: 3,
      title: "Qrafik dizayn",
      link: "dizayn",
      icon: "/icons/design.svg",
    },
    {
      id: 4,
      title: "Rəqəmsal marketinq",
      link: "digital",
      icon: "/icons/marketing.svg",
    },
    { id: 5, title: "Backend", link: "web", icon: "/icons/backend.svg" },
  ];

  async function showCourses() {
    const courses = await getCourses();
    console.log(courses);
    fields.push(...courses);
  }
  showCourses();

  const testimonials = [
    { id: 1, img: "/users/u1.jpg" },
    { id: 2, img: "/users/u2.jpg" },
    { id: 3, img: "/users/u3.jpg" },
  ];

  return (
    <div className="w-full p-6 md:p-10">
      <h2 className="text-2xl font-bold mb-4">Üstünlüklərimiz</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
        {advantages.map((a) => (
          <Link to={a.link}>
            <div
              key={a.id}
              className="bg-[#E8F9FF] rounded-3xl p-6 flex flex-col items-center justify-center text-center"
            >
              <img src={a.icon} alt="" className="w-12 h-12 mb-3 opacity-90" />
              <div className="font-semibold text-[#008EAF] text-lg">
                {a.title}
              </div>
            </div>
          </Link>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-4">Sahələr</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
        {fields &&
          fields.map((f) => (
            <Link to={f.link}>
              <div
                key={f.id}
                className="border border-[#7EE5FF] rounded-3xl p-6 flex flex-col items-center justify-center"
              >
                <div className="w-20 h-20 rounded-full flex items-center justify-center mb-3 bg-white shadow-inner">
                  <img src={f.icon} alt="" className="w-10 h-10" />
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
  );
}
