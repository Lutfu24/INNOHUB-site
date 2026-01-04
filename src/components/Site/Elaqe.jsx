import { useState } from "react";
import svg from "../../assets/doodle.svg";
import { Contact } from "../../services/homeServices";
import toast, { Toaster } from "react-hot-toast";
import LiquidButtonDemo from "../ui/muracietButton";

function Elaqe() {
  const [student, setStudent] = useState({
    name: "Ad Soyad",
    email: "user@example.com",
    phone: "+994501234567",
    message: "Mesajınız burada...",
  });

  function createStudent(e) {
    if (!e.target.value) {
      toast.error("xanaları doldurun...");
      return;
    }
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  }

  function formCheck() {
    if (student.name === "Ad Soyad") {
      toast.error("ad soyad daxil edin⚠️");
      return;
    } else if (student.email === "user@example.com") {
      toast.error("email daxil edin⚠️");
      return;
    } else if (student.phone === "+994501234567") {
      toast.error("telefon nömrəsi daxil edin⚠️");
      return;
    } else if (student.message === "Mesajınız burada...") {
      toast.error("mesajınızı daxil edin⚠️");
      return;
    }

    Contact(student)
      .then((res) => toast.success(res.message))
      .catch(() =>
        toast.error(
          "Çox sayda yaratma cəhdi⚠️ Zəhmət olmasa 1 saat sonra yenidən cəhd edin."
        )
      );
  }
  return (
    <>
      <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">
        <div className="flex flex-col justify-between">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
              GƏL DANIŞAQ!
            </h2>
          </div>
          <img src={svg} alt="svg" className="p-6 h-52 md:h-64" />
        </div>
        <div className="space-y-6">
          <div>
            <label htmlFor="name" className="text-sm">
              Ad Soyad
            </label>
            <input
              onInput={(e) => createStudent(e)}
              id="name"
              name="name"
              type="text"
              placeholder={student.name}
              className="w-full p-3 rounded dark:bg-gray-100"
              fdprocessedid="1aqd9f"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <input
              onInput={(e) => createStudent(e)}
              id="email"
              name="email"
              type="email"
              placeholder={student.email}
              className="w-full p-3 rounded dark:bg-gray-100"
              fdprocessedid="p042p4"
            />
          </div>
          <div>
            <label htmlFor="name" className="text-sm">
              Telefon
            </label>
            <input
              onInput={(e) => createStudent(e)}
              id="name"
              name="phone"
              type="text"
              placeholder={student.phone}
              className="w-full p-3 rounded dark:bg-gray-100"
              fdprocessedid="1aqd9f"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-sm">
              Mesaj
            </label>
            <textarea
              id="message"
              onInput={(e) => createStudent(e)}
              name="message"
              placeholder={student.message}
              rows="3"
              className="w-full p-3 rounded dark:bg-gray-100"
            ></textarea>
          </div>
          <button className="w-full" onClick={() => formCheck()}>
            <LiquidButtonDemo />
          </button>
        </div>
      </div>
      <Toaster />
    </>
  );
}

export default Elaqe;
