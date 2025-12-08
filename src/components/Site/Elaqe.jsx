import React from "react";
import svg from "../../assets/doodle.svg";

function Elaqe() {
  return (
    <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">
      <div className="flex flex-col justify-between">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
            GƏL DANIŞAQ!
          </h2>
        </div>
        <img src={svg} alt="svg" className="p-6 h-52 md:h-64" />
      </div>
      <form noValidate="" className="space-y-6">
        <div>
          <label htmlFor="name" className="text-sm">
            Ad Soyad
          </label>
          <input
            id="name"
            type="text"
            placeholder=""
            className="w-full p-3 rounded dark:bg-gray-100"
            fdprocessedid="1aqd9f"
          />
        </div>
        <div>
          <label htmlFor="name" className="text-sm">
            Telefon
          </label>
          <input
            id="name"
            type="number"
            placeholder=""
            className="w-full p-3 rounded dark:bg-gray-100"
            fdprocessedid="1aqd9f"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full p-3 rounded dark:bg-gray-100"
            fdprocessedid="p042p4"
          />
        </div>
        <div>
          <label htmlFor="message" className="text-sm">
            Mesaj
          </label>
          <textarea
            id="message"
            rows="3"
            className="w-full p-3 rounded dark:bg-gray-100"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-violet-600 dark:text-gray-50"
          fdprocessedid="nqt6sf"
        >
          Müraciət et!
        </button>
      </form>
    </div>
  );
}

export default Elaqe;
