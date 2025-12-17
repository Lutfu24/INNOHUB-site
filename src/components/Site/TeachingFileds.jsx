import React from "react";
import { Link } from "react-router-dom";

const TEACHING_FIELDS = [
  {
    id: 1,
    name: "Dizayn",
    imageUrl: "/images/design.png",
    link: "/dizayn",
    description: "Yaradıcı dizayn bilikləri və praktik təcrübə qazanın.",
  },
  {
    id: 2,
    name: "Proqramlaşdırma",
    imageUrl: "/images/programming.png",
    link: "/IT",
    description: "Müasir proqramlaşdırma dilləri və texnologiyaları öyrənin.",
  },
  {
    id: 3,
    name: "Rəqəmsal Marketinq",
    imageUrl: "/images/marketing.png",
    link: "/digital",
    description:
      "Marketinq strategiyaları və rəqəmsal alətlər üzrə bilik əldə edin.",
  },
  {
    id: 4,
    name: "Fotografiya",
    imageUrl: "/images/photography.png",
    link: "#",
    description:
      "Fotoqrafiya və vizual kommunikasiya sahəsində təcrübə qazanın.",
  },
];

const FieldCard = ({ field }) => (
  <div className="w-full sm:w-1/3 md:w-1/4 cursor-pointer transition-transform duration-300 hover:scale-105">
    <Link to={field.link}>
      <div className="relative overflow-hidden rounded-2xl shadow-lg bg-white aspect-[4/5] flex flex-col items-center justify-center p-6 hover:shadow-xl">
        <div className="absolute -top-6 w-28 h-28 rounded-full bg-gray-100 flex items-center justify-center">
          <img
            src={field.imageUrl}
            alt={field.name}
            className="w-20 h-20 object-contain"
          />
        </div>

        <h3 className="mt-24 text-lg font-bold text-gray-900 text-center">
          {field.name}
        </h3>
        <p className="mt-2 text-sm text-gray-500 text-center">
          {field.description}
        </p>
      </div>
    </Link>
  </div>
);

const TeachingFieldsPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
        Tədris Sahələri
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {TEACHING_FIELDS.map((field) => (
          <FieldCard key={field.id} field={field} />
        ))}
      </div>
    </div>
  );
};

export default TeachingFieldsPage;
