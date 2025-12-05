("use client");
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import logo from "../../assets/logo2.png";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";

export default function Header() {
  return (
    <header className="flex items-center justify-around my-5">
      <img src={logo} width={200} alt="" />

      <NavigationMenu>
        <NavigationMenuList className="flex-wrap">
          <NavigationMenuItem>
            <NavigationMenuTrigger>Home</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-4 no-underline outline-hidden transition-all duration-200 select-none focus:shadow-md md:p-6"
                      href="/"
                    >
                      <div className="mb-2 text-lg font-medium sm:mt-4">
                        shadcn/ui
                      </div>
                      <p className="text-muted-foreground text-sm leading-tight">
                        Beautifully designed components built with Tailwind CSS.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Components</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]"></ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            ></NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="hidden md:block">
            <NavigationMenuTrigger>List</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[300px] gap-4">
                <li>
                  <NavigationMenuLink asChild></NavigationMenuLink>
                  <NavigationMenuLink asChild></NavigationMenuLink>
                  <NavigationMenuLink asChild></NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem className="hidden md:block">
            <NavigationMenuTrigger>Simple</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[200px] gap-4">
                <li>
                  <NavigationMenuLink asChild></NavigationMenuLink>
                  <NavigationMenuLink asChild></NavigationMenuLink>
                  <NavigationMenuLink asChild></NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem className="hidden md:block">
            <NavigationMenuTrigger>With Icon</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[200px] gap-4">
                <li>
                  <NavigationMenuLink asChild>
                    <h1>slaha</h1>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild></NavigationMenuLink>
                  <NavigationMenuLink asChild></NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex gap-3">
        <button className="rounded-full p-2 border border-gray-300">🔍</button>
        <select
          name="AZ"
          className="rounded-full border border-gray-300 py-2"
          id=""
        >
          <option value="AZ">AZ</option>
          <option value="EN">EN</option>
          <option value="RU">RU</option>
        </select>
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>AZ</MenubarTrigger>
            <MenubarContent>
              <MenubarItem className="w-2">AZ</MenubarItem>
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
  );
}
