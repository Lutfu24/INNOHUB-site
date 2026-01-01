import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  Menu,
  X,
  Search,
  Instagram,
  Facebook,
} from "lucide-react";
import logo from "../../assets/logo2.png";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // --- DropdownLink ---
  function DropdownLink({ to, label }) {
    return (
      <Link
        to={to}
        className="text-[15px] font-medium text-gray-600 hover:text-sky-500 hover:translate-x-1 transition-all duration-300"
      >
        {label}
      </Link>
    );
  }

  // --- Mobile Collapse ---
  function MobileCollapse({ title, children, isOpen, toggle }) {
    return (
      <div className="border-b border-gray-100">
        <button
          className="flex justify-between items-center w-full py-4 text-lg font-semibold text-gray-800 hover:text-sky-500 transition-colors duration-300"
          onClick={toggle}
        >
          {title}{" "}
          <ChevronDown
            size={20}
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        <div
          className={`flex flex-col gap-3 pl-4 overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-[400px] mb-4 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {children.map((child, idx) => (
            <div
              key={idx}
              className="text-gray-600 font-medium py-1 hover:text-sky-500 transition-colors"
            >
              {child}
            </div>
          ))}
        </div>
      </div>
    );
  }

  // --- Mobile Menu ---
  function MobileMenu({ isOpen, close, activeDropdown, toggleDropdown }) {
    return (
      <div
        className={`fixed inset-0 z-[100] lg:hidden transition-all duration-300 ${
          isOpen ? "visible" : "invisible"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={close}
        />
        <div
          className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-400 ease-out p-6 flex flex-col ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-4">
            <img src={logo} alt="logo" className="h-10" />
            <button
              onClick={close}
              className="p-2 bg-gray-100 rounded-full text-gray-500"
            >
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col gap-1 overflow-y-auto pr-2">
            <Link
              to="/karyera"
              className="text-lg font-semibold py-3 border-b border-gray-50"
              onClick={close}
            >
              Karyera məsləhəti
            </Link>
            <MobileCollapse
              title="Proqramlar"
              isOpen={activeDropdown === "prog"}
              toggle={() => toggleDropdown("prog")}
            >
              <Link to="/film" onClick={close}>
                Film klubu
              </Link>
              <Link to="/ingilisdili" onClick={close}>
                İngilis dili danışıq klubu
              </Link>
              <Link to="/social" onClick={close}>
                Sosial tədbirlər
              </Link>
              <Link to="/volunteerprograms" onClick={close}>
                Könüllülük proqramları
              </Link>
            </MobileCollapse>
            <MobileCollapse
              title="Mərkəz"
              isOpen={activeDropdown === "center"}
              toggle={() => toggleDropdown("center")}
            >
              <Link to="/haqqimizda" onClick={close}>
                Haqqımızda
              </Link>
              <Link to="/vacancies" onClick={close}>
                Vakansiyalar
              </Link>
              <Link to="/socialresponsibility" onClick={close}>
                Sosial məsuliyyət
              </Link>
            </MobileCollapse>
            <MobileCollapse
              title="Fəaliyyətlər"
              isOpen={activeDropdown === "acts"}
              toggle={() => toggleDropdown("acts")}
            >
              <Link to="/teachingfield" onClick={close}>
                Tədris sahələri
              </Link>
              <Link to="/scholarship" onClick={close}>
                Təqaüd proqramları
              </Link>
            </MobileCollapse>
            <Link
              to="/blog"
              className="text-lg font-semibold py-3 border-b border-gray-50"
              onClick={close}
            >
              Blog
            </Link>
            <div className="mt-8 flex flex-col gap-4">
              <Link
                to="/elaqe"
                className="w-full bg-gradient-to-r from-[#02C8FE] to-[#0098e0] text-white text-center py-4 rounded-xl font-semibold text-lg shadow-md hover:shadow-lg transition-all duration-300"
                onClick={close}
              >
                Müraciət et
              </Link>
              <div className="flex justify-center gap-6 mt-4">
                <Instagram size={24} className="text-pink-600" />
                <Facebook size={24} className="text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
  }, [isMobileMenuOpen]);

  const toggleDropdown = (name) =>
    setActiveDropdown(activeDropdown === name ? null : name);

  return (
    <div className="w-full font-sans">
      {/* 1. Info Bar */}
      <div className="hidden lg:flex justify-center items-center bg-gray-50 border-b py-2 text-sm text-gray-600">
        <div className="w-[83%] flex justify-between items-center">
          <div className="flex gap-6">
            <span className="hover:text-sky-500 cursor-pointer transition-colors">
              innohub@mail.ru
            </span>
            <span className="hover:text-sky-500 cursor-pointer transition-colors">
              +994515832447
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-medium">innohub.az</span>
            <div className="flex gap-3 ml-2 border-l border-gray-200 pl-4">
              <Link
                to="https://instagram.com/innohub.az"
                className="hover:text-pink-600 transition-colors"
              >
                <Instagram size={16} />
              </Link>
              <Link
                to="https://www.facebook.com/profile.php?id=61575515337853"
                className="hover:text-blue-600 transition-colors"
              >
                <Facebook size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Sticky Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md border-b">
        <div className="container mx-auto px-4 lg:px-10 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="shrink-0">
            <img
              src={logo}
              alt="Innohub Logo"
              className="h-12 md:h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8 font-semibold text-gray-800">
            <Link
              to="/karyera"
              className="hover:text-sky-500 transition-all duration-300"
            >
              Karyera məsləhəti
            </Link>

            {["Proqramlar", "Mərkəz", "Fəaliyyətlər"].map((menu, idx) => (
              <div key={idx} className="relative group">
                <button className="flex items-center gap-1 py-7 hover:text-sky-500 transition-all duration-300">
                  {menu}{" "}
                  <ChevronDown
                    size={14}
                    className="group-hover:rotate-180 transition-transform duration-300"
                  />
                </button>
                <div className="absolute top-[100%] left-0 w-64 bg-white border border-gray-100 shadow-xl rounded-b-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300 p-4 flex flex-col gap-3">
                  {menu === "Proqramlar" && (
                    <>
                      <DropdownLink to="/film" label="Film klubu" />
                      <DropdownLink
                        to="/ingilisdili"
                        label="İngilis dili danışıq klubu"
                      />
                      <DropdownLink to="/social" label="Sosial tədbirlər" />
                      <DropdownLink
                        to="/volunteerprograms"
                        label="Könüllülük proqramları"
                      />
                    </>
                  )}
                  {menu === "Mərkəz" && (
                    <>
                      <DropdownLink to="/haqqimizda" label="Haqqımızda" />
                      <DropdownLink to="#" label="Vizyon və missiyamız" />
                      <DropdownLink to="/vacancies" label="Vakansiyalar" />
                      <DropdownLink
                        to="/socialresponsibility"
                        label="Sosial məsuliyyət"
                      />
                    </>
                  )}
                  {menu === "Fəaliyyətlər" && (
                    <>
                      <DropdownLink
                        to="/teachingfield"
                        label="Tədris sahələri"
                      />
                      <DropdownLink
                        to="/scholarship"
                        label="Təqaüd proqramları"
                      />
                      <DropdownLink to="#" label="Sahələr" />
                    </>
                  )}
                </div>
              </div>
            ))}

            <Link
              to="/blog"
              className="hover:text-sky-500 transition-all duration-300"
            >
              Blog
            </Link>
          </nav>

          {/* Right Side (Search, Lang, Button, Mobile Menu) */}
          <div className="flex items-center gap-3 md:gap-4">
            <div className="hidden sm:block font-bold text-gray-700 cursor-pointer hover:text-sky-500">
              AZ
            </div>
            <Link
              to="/elaqe"
              className="hidden md:block bg-gradient-to-r from-[#02C8FE] to-[#0098e0] text-white px-7 py-3 rounded-full font-bold hover:shadow-lg transition-all duration-300 transform active:scale-95"
            >
              Müraciət et
            </Link>
            <button
              className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={30} />
            </button>
          </div>
        </div>

        {/* Mobile Sidebar */}
        <MobileMenu
          isOpen={isMobileMenuOpen}
          close={() => setIsMobileMenuOpen(false)}
          activeDropdown={activeDropdown}
          toggleDropdown={toggleDropdown}
        />
      </header>
    </div>
  );
}
