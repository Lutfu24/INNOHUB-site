import { useEffect, useState } from "react";
import {
  Smartphone,
  Mail,
  Instagram,
  Linkedin,
  Facebook,
  Youtube,
  Music2,
} from "lucide-react";

const API_URL = "https://api.innohub.alakbarova.site/api";
const ICONS = {
  Facebook,
  Linkedin,
  Instagram,
  Music2,
  Youtube,
  Smartphone,
  Mail,
};

const Social = ({ type, href }) => {
  const Icon = ICONS[type];
  if (!Icon) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 flex items-center justify-center bg-gray-900 text-white rounded-full hover:bg-[#03C8FE] hover:scale-110 transition"
    >
      <Icon size={18} />
    </a>
  );
};

export default function Footer() {
  const [data, setData] = useState(null);

  const fallback = {
    socials: [
      { type: "Facebook", href: "https://facebook.com" },
      { type: "Linkedin", href: "https://linkedin.com" },
      { type: "Instagram", href: "https://instagram.com/innohub.az" },
      { type: "Music2", href: "https://tiktok.com" },
      { type: "Youtube", href: "https://youtube.com" },
    ],
    contacts: [
      { icon: "Mail", title: "Email", text: "info@innohub.az" },
      {
        icon: "Smartphone",
        title: "Mobil/Whatsapp",
        text: "+994 51 583 24 47",
      },
    ],
    links: [
      {
        title: "Tədris Sahələri",
        items: ["Dizayn", "Proqramlaşdırma", "Rəqəmsal Marketinq"],
      },
      { title: "Digər", items: ["Tədbirlər", "Blog", "Əlaqə"] },
    ],
  };

  useEffect(() => {
    fetch(`${API_URL}/footer`)
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((json) => setData(json || fallback))
      .catch(() => setData(fallback));
  }, []);

  if (!data) return null;

  return (
    <footer className="bg-linear-to-t from-[#E0F8FF] to-white text-gray-800 font-sans">
      {/* Logo & Socials */}
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row md:justify-between items-center gap-6">
        <img
          src="https://i.ibb.co/kssj2vhX/dnisj.png"
          alt="Logo"
          className="h-12 md:h-16"
        />
        <div className="flex gap-3">
          {data.socials.map((s, i) => (
            <Social key={i} {...s} />
          ))}
        </div>
      </div>

      <svg
        viewBox="0 0 1440 180"
        className="w-full h-40"
        preserveAspectRatio="none"
      >
        <path
          d="M0,64 C360,120 1080,0 1440,64 L1440,180 L0,180 Z"
          fill="#03C8FE"
          fillOpacity="0.05"
        />
      </svg>

      <div className="max-w-7xl mx-auto px-6 -mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col gap-4 md:col-span-2">
          {data.contacts.map((c, i) => {
            const Icon = ICONS[c.icon] || Smartphone;
            return (
              <div
                key={i}
                className="flex items-center gap-3 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow hover:scale-[1.03] transition"
              >
                <Icon className="text-[#03C8FE] w-7 h-7" strokeWidth={1.5} />
                <div>
                  <p className="font-bold">{c.title}</p>
                  <p className="text-gray-600 text-sm">{c.text}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="h-48 md:h-full rounded-2xl overflow-hidden shadow">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.123456789!2d46.3521!3d40.6823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d8a9e3b1b0f%3A0x123456789abcdef!2sH%C9%99s%C9%99nli%20qarda%C5%9Flar%C4%B1%2044%2C%20G%C9%99nc%C9%99%2C%20Azerbaijan!5e0!3m2!1sen!2saz!4v1700000000000!5m2!1sen!2saz"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 mt-16">
        {data.links.map((col, i) => (
          <div key={i}>
            <p className="font-bold mb-2">{col.title}</p>
            <ul className="space-y-1 text-gray-600 text-sm">
              {col.items.map((l, j) => (
                <li key={j} className="hover:text-[#03C8FE] cursor-pointer">
                  {l}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="text-center mt-16 py-6 border-t border-gray-300 text-gray-500 text-sm">
        © {new Date().getFullYear()} InnoHub — Bütün hüquqlar qorunur.
      </div>
    </footer>
  );
}
