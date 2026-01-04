import { useEffect, useState } from "react";
import { getFuture, getPast, Register } from "../../services/hakatonsservices";
import toast, { Toaster } from "react-hot-toast";

/* -------------------- CARDS -------------------- */

const PastHackathonCard = ({ item, onOpen }) => (
  <button
    onClick={onOpen}
    className="group cursor-pointer relative rounded-3xl overflow-hidden shadow-lg w-full text-left focus:outline-none"
  >
    <img
      src={item.image}
      alt={item.type}
      className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent flex items-end p-5">
      <div>
        <h3 className="text-white text-xl font-bold mb-1">{item.title}</h3>
        <p className="text-white/80 text-sm">{item.date.slice(0, 10)}</p>
      </div>
    </div>
  </button>
);

const FutureHackathonCard = ({ item, onRegister }) => (
  <div className="bg-white rounded-3xl shadow-md hover:shadow-xl transition overflow-hidden flex flex-col">
    <img
      src={item.image}
      alt={item.type}
      className="h-48 w-full object-cover"
    />

    <div className="p-5 flex flex-col gap-2 flex-1">
      <h3 className="text-lg font-bold">{item.title}</h3>

      <p className="text-sm text-gray-700">
        <strong>Qaydalar:</strong> {item.rules}
      </p>
      <p className="text-sm text-gray-700">
        <strong>Tarix:</strong> {item.date.slice(0, 10)}
      </p>
      <p className="text-sm text-gray-700">
        <strong>Məkan:</strong> {item.location}
      </p>

      <button
        onClick={onRegister}
        className="mt-auto cursor-pointer bg-[#02C8FE] text-white py-2 rounded-xl font-semibold hover:bg-blue-500 transition"
      >
        Qeydiyyat
      </button>
    </div>
  </div>
);

/* -------------------- MODALS -------------------- */

const Overlay = ({ children }) => (
  <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4">
    {children}
  </div>
);

const HackathonDetails = ({ item, onClose }) => (
  <Overlay>
    <div className="bg-white max-w-lg w-full rounded-3xl shadow-2xl p-6 relative max-h-[90vh] overflow-y-auto">
      <button
        onClick={onClose}
        className="absolute cursor-pointer top-4 right-4 text-gray-500 hover:text-black"
      >
        ✕
      </button>

      <h2 className="text-2xl font-bold mb-4">{item.title}</h2>

      <p className="text-gray-700 mb-4">{item.description}</p>

      <ul className="text-sm text-gray-700 space-y-1">
        <li>
          <strong>Qaydalar:</strong> {item.rules}
        </li>
        <li>
          <strong>Tarix:</strong> {item.date.slice(0, 10)}
        </li>
        <li>
          <strong>Məkan:</strong> {item.location}
        </li>
      </ul>
    </div>
  </Overlay>
);

const RegistrationForm = ({
  hackathon,
  onBack,
  handleForm,
  handlePostForm,
}) => (
  <Overlay>
    <div className="bg-white w-full max-w-lg rounded-3xl shadow-xl p-6">
      <h2 className="text-2xl font-bold text-center mb-6">
        Qeydiyyat – {hackathon.title}
      </h2>

      <div className="flex flex-col gap-4">
        <input
          onInput={(e) => handleForm(e)}
          name="name"
          className="p-3 border rounded-xl"
          placeholder="Ad Soyad"
        />
        <input
          onInput={(e) => handleForm(e)}
          name="email"
          className="p-3 border rounded-xl"
          placeholder="Email"
        />
        <input
          onInput={(e) => handleForm(e)}
          name="phone"
          className="p-3 border rounded-xl"
          placeholder="Telefon"
        />

        <button
          onClick={() => handlePostForm()}
          className="bg-[#02C8FE] cursor-pointer text-white py-3 rounded-xl font-semibold hover:bg-blue-500"
        >
          Təsdiq et
        </button>
      </div>

      <button
        onClick={onBack}
        className="mt-4 w-full cursor-pointer bg-gray-200 py-3 rounded-xl font-semibold hover:bg-gray-300"
      >
        Geri
      </button>
    </div>
  </Overlay>
);

/* -------------------- PAGE -------------------- */

export default function Hackathons() {
  const [details, setDetails] = useState(null);
  const [register, setRegister] = useState(null);
  const [past, setPast] = useState();
  const [future, setFuture] = useState();
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
      return;
    }
    Register(register, input)
      .then((res) => {
        toast.success(res.message);
        setRegister(null);
      })
      .catch((err) => toast.error(err.message));
  }

  useEffect(() => {
    async function showPast() {
      const res = await getPast();
      setPast(res);
    }
    showPast();
    async function showFuture() {
      const res = await getFuture();
      setFuture(res);
    }
    showFuture();
  }, []);

  return (
    <>
      <Toaster />
      <section className="max-w-7xl mx-auto px-6 py-20">
        {/* Intro */}
        <div className="max-w-3xl mb-20">
          <h1 className="text-4xl font-extrabold mb-5">INNOHUB Hakatonları</h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            INNOHUB hakatonları gənclərin real problemləri qısa müddətdə
            innovativ həllərə çevirdiyi intensiv yaradıcılıq və inkişaf
            platformasıdır.
          </p>
        </div>

        {/* Past */}
        <h2 className="text-3xl font-bold mb-8">Keçmiş hakatonlar</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-28">
          {past &&
            past.map((item) => (
              <PastHackathonCard
                key={item._id}
                item={item}
                onOpen={() => setDetails(item)}
              />
            ))}
        </div>

        {/* Future */}
        <h2 className="text-3xl font-bold mb-8">
          Gələcək hakatonlara sən də qoşul!
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {future &&
            future.map((item) => (
              <FutureHackathonCard
                key={item._id}
                item={item}
                onRegister={() => setRegister(item)}
              />
            ))}
        </div>

        {details && (
          <HackathonDetails item={details} onClose={() => setDetails(null)} />
        )}

        {register && (
          <RegistrationForm
            hackathon={register}
            onBack={() => setRegister(null)}
            handleForm={handleForm}
            handlePostForm={handlePostForm}
          />
        )}
      </section>
    </>
  );
}
