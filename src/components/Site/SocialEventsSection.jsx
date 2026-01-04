import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getEvents } from "../../services/sosialeventsservices.js";

const Card = ({ item }) => (
  <div className="w-full sm:w-1/3 md:w-1/4 cursor-pointer transition-transform duration-300 hover:scale-105">
    <Link to={`/${item.type}?ID=${item._id}`}>
      <div className="relative overflow-hidden rounded-2xl shadow-lg bg-white aspect-[4/5] flex flex-col items-center justify-center p-6 hover:shadow-xl">
        <div className="absolute -top-6 w-28 h-28 rounded-full bg-gray-100 flex items-center justify-center">
          <img
            src={item.image}
            alt={item.title}
            className="w-20 h-20 object-contain"
          />
        </div>

        <h3 className="mt-24 text-lg font-bold text-gray-900 text-center">
          {item.title}
        </h3>
        <p className="mt-2 text-sm text-gray-500 text-center">{item.speaker}</p>
      </div>
    </Link>
  </div>
);

const SocialEventsPage = () => {
  const [events, setEvents] = useState();

  useEffect(() => {
    async function showEvents() {
      const res = await getEvents();
      setEvents(res);
    }
    showEvents();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {
        <>
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Sosial Tədbirlər
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {events &&
              events.map((event) => <Card key={event._id} item={event} />)}
          </div>
        </>
      }
    </div>
  );
};

export default SocialEventsPage;
