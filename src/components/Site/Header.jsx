("use client");
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import logo from "../../assets/logo2.png";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="flex justify-center items-center">
        <div className="flex justify-between items-center w-[83%] mt-3">
          <div className="flex items-center gap-5">
            <span>innohub@mail.ru</span>
            <span>+994515832447</span>
          </div>
          <div className="flex items-center gap-2">
            <span>innohub.az</span>
            <BsInstagram />
            <FaFacebookF />
          </div>
        </div>
      </header>
      <header className="flex items-center justify-around my-5">
        <Link to="/">
          <img src={logo} width={200} alt="img" className="cursor-pointer" />
        </Link>

        <NavigationMenu className="max-md:hidden">
          <NavigationMenuList className="flex-wrap font-bold">
            <NavigationMenuItem>Karyera məsləhəti</NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-bold">
                Proqramlar
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-2 sm:w-[200px] md:w-[200px] lg:w-[300px]">
                  <li>Film klubu</li>
                  <li>Ingilis dili danışıq klubu</li>
                  <li>Sosial tədbirlər</li>
                  <li>Könüllülük proqramları</li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem className="hidden md:block">
              <NavigationMenuTrigger className="text-xl font-bold">
                Mərkəz
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[300px] gap-2">
                  <li>Haqqımızda</li>
                  <li>Vizyon və missiyamız</li>
                  <li>Vakansiyalar</li>
                  <li>Sosial məsuliyyət</li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem className="hidden md:block">
              <NavigationMenuTrigger className="font-bold">
                Fəaliyyətlər
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-2">
                  <li>Tədris sahələri</li>
                  <li>Təqaüd proqramları</li>
                  <li>Sahələr</li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem className="hidden md:block font-bold">
              Blog
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex gap-3">
          <button className="rounded-full p-3 border border-gray-300">
            <FaSearch className="text-sky-300" />
          </button>
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>AZ</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>AZ</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>EN</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>RU</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
          <button className="rounded-3xl bg-[#02C8FE] text-white px-5 py-2">
            Müraciət et
          </button>
        </div>
      </header>
    </>
  );
}
