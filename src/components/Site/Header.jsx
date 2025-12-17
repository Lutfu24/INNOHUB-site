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
import { useMobile } from "@/hooks/use-mobile";

export default function Header() {
  const isMobile = useMobile();
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
            <Link to="https://instagram.com/innohub.az">
              <BsInstagram />
            </Link>
            <Link to="https://www.facebook.com/profile.php?id=61575515337853">
              <FaFacebookF />
            </Link>
          </div>
        </div>
      </header>
      <header className="flex items-center justify-around my-5">
        <Link to="/">
          <img src={logo} width={200} alt="img" className="cursor-pointer" />
        </Link>

        <NavigationMenu viewport={isMobile} className="max-md:hidden z-999">
          <NavigationMenuList className="flex-wrap font-bold">
            <NavigationMenuItem>
              <Link to="karyera">Karyera məsləhəti</Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-bold">
                Proqramlar
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-2 sm:w-[200px] md:w-[200px] lg:w-[300px] font-normal">
                  <Link to="film">Film klubu</Link>
                  <Link to="ingilisdili">Ingilis dili danışıq klubu</Link>
                  <Link to="social">Sosial tədbirlər</Link>
                  <Link to="volunteerprograms">Könüllülük proqramları</Link>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem className="hidden md:block">
              <NavigationMenuTrigger className="text-xl font-bold">
                Mərkəz
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[300px] gap-2 font-normal">
                  <Link to="haqqimizda">Haqqımızda</Link>
                  <li>Vizyon və missiyamız</li>
                  <Link to="vacancies">Vakansiyalar</Link>
                  <Link to="socialresponsibility">Sosial məsuliyyət</Link>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem className="hidden md:block">
              <NavigationMenuTrigger className="font-bold">
                Fəaliyyətlər
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-2 font-normal">
                  <Link to="teachingfield">Tədris sahələri</Link>
                  <Link to="scholarship">Təqaüd proqramları</Link>
                  <li>Sahələr</li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem className="md:block font-bold">
              <Link to="/blog">Blog</Link>
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
          <Link
            to="/elaqe"
            className="rounded-3xl bg-[#02C8FE] text-white px-5 py-2"
          >
            Müraciət et
          </Link>
        </div>
      </header>
    </>
  );
}
