import { getTeachers } from "../../services/homeServices";

const DUMMY_TEACHERS = [
  {
    id: 1,
    name: "Asif Məmmədov",
    subject: "Riyaziyyat",
    imageUrl: "/images/asif_mammadov.png",
  },
  {
    id: 2,
    name: "Samirə Əliyeva",
    subject: "İngilis dili",
    imageUrl: "/images/samira_aliyeva.png",
  },
  {
    id: 3,
    name: "Leyla Səməd",
    subject: "Graphic Designer",
    imageUrl: "/images/leyla_samad.png",
  },
];

const TeacherCard = ({ teacher }) => {
  const { name, subject, imageUrl } = teacher;

  return (
    <div className="w-full sm:w-1/3 cursor-pointer transition-transform duration-300 hover:scale-105">
      <div className="relative overflow-hidden rounded-[32px] shadow-lg bg-cyan-50 aspect-[3/4]">
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, #06b6d4 1px, transparent 1px)",
            backgroundSize: "20px 20px",
            opacity: 0.15,
          }}
        />

        <img
          src={imageUrl}
          alt={name}
          className="absolute w-full h-full object-contain bottom-0 left-0 z-20 drop-shadow-sm"
        />

        <div className="absolute bottom-0 left-0 right-0 p-4 z-30 bg-white/70 backdrop-blur-sm">
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
          <p className="text-sm text-cyan-600">{subject}</p>
        </div>
      </div>
    </div>
  );
};

const TeachersSection = () => {
  async function showTeachers() {
    const teachers = await getTeachers();
    console.log(teachers);
    DUMMY_TEACHERS.push(...teachers);
  }
  showTeachers();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-10">Müəllimlər</h2>
      <div className="flex flex-col sm:flex-row justify-center sm:space-x-8 space-y-6 sm:space-y-0">
        {DUMMY_TEACHERS.map((teacher) => (
          <TeacherCard key={teacher.id} teacher={teacher} />
        ))}
      </div>
      <div className="flex justify-center mt-12">
        <a
          href="/all-teachers"
          className="flex items-center text-lg font-medium text-gray-700 hover:text-cyan-700 transition-colors group"
        >
          Bütün müəllimlər
          <span className="ml-2 text-xl font-bold text-cyan-700 group-hover:ml-3 transition-all duration-300">
            &gt;
          </span>
        </a>
      </div>
    </div>
  );
};

export default TeachersSection;
