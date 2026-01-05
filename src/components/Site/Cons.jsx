import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getEventID, registerEvent } from "../../services/sosialeventsservices";
import toast, { Toaster } from "react-hot-toast";

const SessionCard = ({ event, onRegister }) => (
  <motion.div
    onClick={() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      onRegister();
    }}
    whileHover={{ scale: 1.04 }}
    className="bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer group"
  >
    <div className="relative h-40 sm:h-48 md:h-52 overflow-hidden">
      <img
        src={event?.image}
        alt={event?.title}
        className="h-full w-full object-cover group-hover:scale-110 duration-300"
      />
      <div className="absolute inset-0 bg-black/30"></div>
      <h3 className="absolute bottom-2 left-3 text-lg sm:text-xl md:text-2xl text-white font-bold drop-shadow-md">
        {event?.title}
      </h3>
    </div>

    <div className="p-4 sm:p-5 space-y-2">
      <p className="text-gray-700 text-sm sm:text-[0.95rem] md:text-base leading-snug">
        {event?.topic}
      </p>

      <p className="text-gray-900 font-semibold text-sm sm:text-[0.95rem]">
        📅 {event?.date.slice(0, 10)} – {event?.time}
      </p>

      <p className="text-gray-500 text-sm sm:text-[0.85rem]">
        📌 {event?.location}
      </p>

      <button className="mt-3 w-full cursor-pointer bg-[#02C8FE] text-white py-2 rounded-lg font-semibold group-hover:bg-blue-500 transition duration-200 text-sm sm:text-[0.95rem]">
        Qeydiyyat
      </button>
    </div>
  </motion.div>
);

const RegistrationForm = ({ session, onBack, handleForm, handleSubmit }) => (
  <div className="max-w-md mx-auto bg-white shadow-xl rounded-2xl p-6 sm:p-8 mt-10 sm:mt-12">
    <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3 text-[#02C8FE]">
      Qeydiyyat – {session?.title}
    </h2>

    <p className="text-center text-gray-600 mb-6 text-sm sm:text-[0.95rem] leading-relaxed">
      📅 {session?.date.slice(0, 10)} – {session?.time} <br /> 📌{" "}
      {session?.location}
    </p>

    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        type="text"
        name="name"
        onInput={(e) => handleForm(e)}
        placeholder="Ad Soyad"
        className="p-3 sm:p-3.5 border rounded-lg"
      />
      <input
        type="email"
        name="email"
        onInput={(e) => handleForm(e)}
        placeholder="Email"
        className="p-3 sm:p-3.5 border rounded-lg"
      />
      <input
        type="text"
        name="phone"
        onInput={(e) => handleForm(e)}
        placeholder="Telefon"
        className="p-3 sm:p-3.5 border rounded-lg"
      />

      <button className="bg-[#02C8FE] cursor-pointer text-white py-2 sm:py-2.5 rounded-lg hover:bg-blue-500 transition font-semibold">
        Təsdiq et
      </button>
    </form>

    <button
      onClick={onBack}
      className="mt-4 w-full bg-gray-200 cursor-pointer py-2 rounded-lg hover:bg-gray-300 transition font-medium text-sm sm:text-[0.95rem]"
    >
      Geri
    </button>
  </div>
);

const IeltsSpeakingClub = () => {
  const [selectedSession, setSelectedSession] = useState(null);
  const [event, setEvent] = useState();
  const query = location.search;
  const id = new URLSearchParams(query).get("ID");
  const [input, setInput] = useState({
    name: "",
    email: "",
    phone: "",
  });

  function handleForm(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  function handlePostForm() {
    if (!input.name || !input.phone || !input.email) {
      toast.error("boş xanaları doldurun⚠️");
      return null;
    }
    registerEvent(event, input)
      .then((res) => {
        toast.success(res.message);
        setSelectedSession(null);
        setInput({
          name: "",
          email: "",
          phone: "",
        });
      })
      .catch((err) => toast.error(err.message));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const result = handlePostForm();
    if (!result) return;
  }

  useEffect(() => {
    async function showEvent() {
      if (!id) return;
      const res = await getEventID(id);
      setEvent(res);
    }
    showEvent();
  }, []);

  return (
    <>
      <Toaster />
      <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-10 sm:py-12 max-w-6xl mx-auto text-gray-900">
        {!selectedSession && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12 sm:mb-16">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#02C8FE] leading-tight mb-4">
                  IELTS əsaslı İngilis dili danışıq klubu
                </h1>

                <p className="text-gray-700 text-sm sm:text-base md:text-[1rem] leading-relaxed">
                  Sən də həftəlik real IELTS danışıq simulyasiyalarında iştirak
                  et, öz ingilis dilini gücləndir və sosial şəbəkəni
                  genişləndir!
                </p>
              </div>

              <img
                src="/images/ielts_club.png"
                className="rounded-2xl shadow-xl w-full h-64 sm:h-80 md:h-96 object-cover"
                alt="IELTS Speaking Club"
              />
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10">
              Gələcək sessiyalar 🎬
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              <SessionCard
                key={event?._id}
                event={event && event}
                onRegister={() => setSelectedSession(event)}
              />
            </div>
          </>
        )}

        {selectedSession && (
          <RegistrationForm
            session={selectedSession}
            handleForm={handleForm}
            handleSubmit={handleSubmit}
            onBack={() => setSelectedSession(null)}
          />
        )}
      </div>
    </>
  );
};

export default IeltsSpeakingClub;
