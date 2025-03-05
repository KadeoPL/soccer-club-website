import { useState } from "react";
import logo from "../assets/gdovia_logo.png";
import { NavLink } from "react-router";
import { motion } from "motion/react";

const menuItems = [
  {
    label: "Aktualności",
    link: "/aktualnosci",
  },
  {
    label: "Seniorzy",
    link: "/seniorzy",
    subpages: [
      { label: "Skład", link: "/seniorzy/sklad" },
      { label: "Terminarz i wyniki", link: "/seniorzy/terminarz" },
      { label: "Tabela", link: "/seniorzy/tabela" },
    ],
  },
  {
    label: "Szkółka piłkarska",
    link: "/szkolka-pilkarska",
    subpages: [
      { label: "Roczniki", link: "/szkolka-pilkarska/roczniki" },
      { label: "Dla rodziców", link: "/szkolka-pilkarska/dla-rodzicow" },
    ],
  },
  {
    label: "Multimedia",
    link: "/multimedia",
    subpages: [
      { label: "Galeria", link: "/multimedia/galeria" },
      { label: "Pliki do pobrania", link: "/multimedia/pliki-do-pobrania" },
      { label: "Przydatne linki", link: "/multimedia/przydatne-linki" },
    ],
  },
  {
    label: "Kontakt",
    link: "/kontakt",
  },
];

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<
    { label: string; link: string }[] | null
  >(null);

  return (
    <nav className="sticky top-0 z-10 bg-white">
      <div className="flex md:flex-row justify-between md:items-center md:max-w-[1260px] md:h-[120px] w-full mx-auto px-2.5">
        <NavLink to="/">
          <img
            className="h-[70px] md:h-[100px]"
            src={logo}
            alt="Herb drużyny"
          />
        </NavLink>
        <div className="h-full flex items-center">
          <ul className="flex gap-10 text-lg text-main font-medium h-full items-center">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="h-full flex items-center hover:cursor-pointer hover:border-b-4 duration-150 ease-in"
                onMouseEnter={() => setActiveMenu(item.subpages || null)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <NavLink to={item.link}>{item.label}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {activeMenu != null && activeMenu.length > 0 && (
        <>
          <div className="absolute top-full left-0 w-full h-screen bg-black/50 z-0" />
          <div
            className="absolute left-0 top-full w-full bg-main flex justify-center"
            onMouseEnter={() => setActiveMenu(activeMenu)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <div className="w-[1200px]">
              <ul className="mx-20 flex flex-col gap-4 text-2xl font-semibold text-white pt-10 pb-16">
                {activeMenu.map((item, index) => (
                  <li key={index}>
                    <NavLink to={item.link}>{item.label} </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
