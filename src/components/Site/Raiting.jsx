import React from "react";

function Raiting() {
  return (
    <section className="p-6 dark:bg-gray-100 dark:text-gray-800">
      <h1 className="font-bold text-3xl ml-40 my-4">Niyə biz?</h1>
      <div className="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-5">
        <div className="flex flex-col justify-start m-2 lg:m-6 bg-sky-300/20 rounded-3xl py-4 hover:scale-105 hover:shadow-2xl hover:delay-100 cursor-cell hover:linear">
          <p className="text-2xl font-bold leading-none">100+</p>
          <p className="text-2xl font-bold">Tələbə</p>
        </div>
        <div className="flex flex-col justify-start m-2 lg:m-6 bg-sky-300/20 rounded-3xl py-4 hover:scale-105 hover:shadow-2xl hover:delay-100 cursor-cell hover:linear">
          <p className="text-2xl font-bold leading-none">80%</p>
          <p className="text-2xl font-bold">İşlə təmin</p>
        </div>
        <div className="flex flex-col justify-start m-2 lg:m-6 bg-sky-300/20 rounded-3xl py-4 hover:scale-105 hover:shadow-2xl hover:delay-100 cursor-cell hover:linear">
          <p className="text-2xl font-bold leading-none">5+</p>
          <p className="text-2xl font-bold">Partnyor</p>
        </div>
        <div className="flex flex-col justify-start m-2 lg:m-6 bg-sky-300/20 rounded-3xl py-4 hover:scale-105 hover:shadow-2xl hover:delay-100 cursor-cell hover:linear">
          <p className="text-2xl font-bold leading-none">10+</p>
          <p className="text-2xl font-bold">Müəllim</p>
        </div>
        <div className="flex flex-col justify-start m-2 lg:m-6 bg-sky-300/20 rounded-3xl py-4 hover:scale-105 hover:shadow-2xl hover:delay-100 cursor-cell hover:linear">
          <p className="text-2xl font-bold leading-none">1000+</p>
          <p className="text-2xl font-bold">Üzv</p>
        </div>
      </div>
    </section>
  );
}

export default Raiting;
