import { useEffect, useState } from "react";
import { getEventID, registerEvent } from "../../services/sosialeventsservices";
import toast, { Toaster } from "react-hot-toast";

const PAST_TALKS = [
  {
    id: 1,
    topic: "Startuplarda İnnovasiya Mədəniyyəti",
    speaker: "Elvin Məmmədov",
    dateTime: "15 Fevral 2024, 18:30",
    location: "InnoHub Gəncə",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
  },
  {
    id: 2,
    topic: "Texnologiya və Biznesin Kəsişməsi",
    speaker: "Aysel Əliyeva",
    dateTime: "10 Mart 2024, 19:00",
    location: "InnoHub Gəncə",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
  },
];

const TalkCardPast = ({ item, isPast, onRegister }) => (
  <div className="w-full sm:w-1/2 md:w-1/3">
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition">
      {isPast && (
        <img
          src={item?.image}
          alt={item?.topic}
          className="w-full h-48 object-cover"
        />
      )}

      <div className="p-6 space-y-2">
        <h3 className="text-xl font-bold">{item?.topic}</h3>
        <p className="text-gray-600 text-sm">
          <strong>Spiker:</strong> {item?.speaker}
        </p>
        <p className="text-gray-600 text-sm">
          <strong>Tarix:</strong> {item?.dateTime}
        </p>
        <p className="text-gray-600 text-sm">
          <strong>Məkan:</strong> {item?.location}
        </p>

        {!isPast && (
          <button
            onClick={onRegister}
            className="mt-4 w-full cursor-pointer bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
          >
            Qeydiyyat
          </button>
        )}
      </div>
    </div>
  </div>
);

const TalkCard = ({ talks, isPast, onRegister }) => (
  <div className="w-full sm:w-1/2 md:w-1/3">
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition">
      {isPast && (
        <img
          src={talks?.image}
          alt={talks?.title}
          className="w-full h-48 object-cover"
        />
      )}

      <div className="p-6 space-y-2">
        <h3 className="text-xl font-bold">{talks?.title}</h3>
        <p className="text-gray-600 text-sm">
          <strong>Spiker:</strong> {talks?.speaker}
        </p>
        <p className="text-gray-600 text-sm">
          <strong>Tarix:</strong> {talks?.date.slice(0, 10)} {talks?.time}
        </p>
        <p className="text-gray-600 text-sm">
          <strong>Məkan:</strong> {talks?.location}
        </p>

        {!isPast && (
          <button
            onClick={onRegister}
            className="mt-4 w-full cursor-pointer bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
          >
            Qeydiyyat
          </button>
        )}
      </div>
    </div>
  </div>
);

const TalkRegistration = ({ talk, onBack, handleSubmit, handleForm }) => (
  <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-xl p-8 mt-16">
    <h2 className="text-2xl font-bold mb-6 text-center">
      Qeydiyyat – {talk.title}
    </h2>

    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        name="name"
        onInput={(e) => handleForm(e)}
        className="p-3 border rounded-xl"
        placeholder="Ad, soyad"
      />
      <input
        name="email"
        onInput={(e) => handleForm(e)}
        className="p-3 border rounded-xl"
        placeholder="Email"
      />
      <input
        name="phone"
        onInput={(e) => handleForm(e)}
        className="p-3 border rounded-xl"
        placeholder="Telefon"
      />

      <button className="bg-green-600 cursor-pointer text-white py-3 rounded-xl hover:bg-green-700">
        Təsdiq
      </button>
    </form>

    <button
      onClick={onBack}
      className="mt-4 w-full cursor-pointer bg-gray-300 py-3 rounded-xl"
    >
      Geri
    </button>
  </div>
);

const InnoTalks = () => {
  const [register, setRegister] = useState(null);
  const [talks, setTalks] = useState();
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
    registerEvent(talks, input)
      .then((res) => {
        toast.success(res.message);
        setRegister(null);
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
    if (result === null) return;
  }

  useEffect(() => {
    async function showEvent() {
      if (!id) return;
      const res = await getEventID(id);
      setTalks(res);
    }
    showEvent();
  }, []);

  return (
    <>
      <Toaster />
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-3xl mb-20">
          <h1 className="text-4xl font-extrabold mb-4">INNOTALKS</h1>
          <p className="text-gray-700 text-lg">
            INNOTALKS gənclərin innovativ sahələrdə peşəkarlar və biznes
            sahibləri ilə birbaşa şəbəkələşməsi və onların real təcrübələrindən
            öyrənməsi üçün təşkil olunan silsilə seminarlar seriyasıdır.
          </p>
        </div>

        {/* PAST */}
        <h2 className="text-3xl font-bold mb-8">Keçmiş görüşlərimiz</h2>
        <div className="flex flex-wrap gap-8 mb-24">
          {PAST_TALKS.map((item) => (
            <TalkCardPast key={item.id} item={item} isPast />
          ))}
        </div>

        {/* FUTURE */}
        <h2 className="text-3xl font-bold mb-8">
          Gələcək görüşlərimizdə sən də ol!
        </h2>

        {!register ? (
          <div className="flex flex-wrap gap-8">
            <TalkCard
              key={talks && talks._id}
              talks={talks && talks}
              onRegister={() => setRegister(talks)}
            />
          </div>
        ) : (
          <TalkRegistration
            talk={register}
            handleSubmit={handleSubmit}
            handleForm={handleForm}
            onBack={() => setRegister(null)}
          />
        )}
      </div>
    </>
  );
};

export default InnoTalks;
