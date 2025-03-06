import { useState } from "react";
import logo from "../assets/gdovia_logo.png";
import { NavLink } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import { AlignJustify, X, ChevronDown } from "lucide-react";

const menuItems = [
  {
    label: "Aktualności",
    link: "/aktualnosci",
  },
  {
    label: "Seniorzy",
    link: "",
    subpages: [
      { label: "Skład", link: "/seniorzy/sklad" },
      { label: "Terminarz i wyniki", link: "/seniorzy/terminarz" },
      { label: "Tabela", link: "/seniorzy/tabela" },
    ],
  },
  {
    label: "Szkółka piłkarska",
    link: "",
    subpages: [
      { label: "Roczniki", link: "/szkolka-pilkarska/roczniki" },
      { label: "Dla rodziców", link: "/szkolka-pilkarska/dla-rodzicow" },
    ],
  },
  {
    label: "Multimedia",
    link: "",
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

  const [activePhoneMenu, setActivePhoneMenu] = useState<boolean>(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (label: string) => {
    setActiveSubmenu(activeSubmenu === label ? null : label);
  };

  return (
    <>
      <nav className="sticky top-0 z-10 bg-white  shadow-2xl hidden lg:block">
        <div className="flex flex-row justify-between items-center max-w-[1260px] h-[120px] w-full mx-auto px-2.5">
          <NavLink to="/">
            <img className="h-[100px]" src={logo} alt="Herb drużyny" />
          </NavLink>
          <div className="h-full flex items-center">
            <ul className="flex gap-10 text-lg text-primary font-medium h-full items-center">
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
              className="absolute left-0 top-full w-full bg-primary flex justify-center"
              onMouseEnter={() => setActiveMenu(activeMenu)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <div className="w-[1200px]">
                <ul className="mx-20 flex flex-col gap-6 text-2xl font-semibold text-white pt-10 pb-16">
                  {activeMenu.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.3,
                        ease: "easeOut",
                        delay: index * 0.2,
                      }}
                    >
                      <NavLink
                        to={item.link}
                        className="relative after:content-[''] after:absolute after:left-0 after:top-9 after:w-0 after:h-[3px] after:bg-current after:transition-all after:duration-300 hover:after:w-6"
                      >
                        {item.label}
                      </NavLink>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        )}
      </nav>
      <nav className="sticky top-0 z-10 bg-white shadow-2xl block lg:hidden">
        <div className="flex flex-row justify-between items-center h-[100px] w-full mx-auto px-6">
          <NavLink to="/">
            <img className="h-[70px]" src={logo} alt="Herb drużyny" />
          </NavLink>
          <motion.div
            className="w-[50px] h-[50px] rounded-xl bg-primary flex justify-center items-center cursor-pointer"
            onClick={() => setActivePhoneMenu(!activePhoneMenu)}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              key={activePhoneMenu ? "x-icon" : "menu-icon"}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.3 }}
            >
              {activePhoneMenu ? (
                <X color="#ffffff" />
              ) : (
                <AlignJustify color="#ffffff" />
              )}
            </motion.div>
          </motion.div>
        </div>

        <AnimatePresence>
          {activePhoneMenu && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="absolute top-full left-0 w-full h-screen bg-black/50 z-0" />
              <div className="bg-primary absolute left-0 top-full w-full">
                <motion.ul
                  className="flex flex-col gap-5 text-white text-lg font-medium h-full py-8 px-12"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut", delay: 0.5 }}
                >
                  {menuItems.map((item, index) => (
                    <li key={index} className="h-full">
                      <div
                        className="flex items-center"
                        onClick={() => toggleSubmenu(item.label)}
                      >
                        <NavLink to={item.link}>{item.label}</NavLink>
                        {item.subpages && (
                          <motion.span
                            animate={{
                              rotate: activeSubmenu === item.label ? -180 : 0,
                            }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                          >
                            <ChevronDown size={20} />
                          </motion.span>
                        )}
                      </div>
                      {activeSubmenu === item.label && item.subpages && (
                        <motion.ul
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="ml-4 mt-2 space-y-2 overflow-hidden"
                        >
                          {item.subpages.map((subItem, subIndex) => (
                            <motion.li
                              key={subIndex}
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -20 }}
                              transition={{
                                duration: 0.3,
                                ease: "easeOut",
                                delay: 0.05 * subIndex,
                              }}
                            >
                              <NavLink to={subItem.link} className="text-sm">
                                {subItem.label}
                              </NavLink>
                            </motion.li>
                          ))}
                        </motion.ul>
                      )}
                    </li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
