import logo from "../assets/gdovia_logo.png";
import { NavLink } from "react-router";

const menuItems = [
  {
    label: "Aktualności",
    link: "/aktualnosci",
  },
  {
    label: "Seniorzy",
    link: "/seniorzy",
  },
  {
    label: "Szkółka piłkarska",
    link: "/szkolka-pilkarska",
  },
  {
    label: "Multimedia",
    link: "/multimedia",
  },
  {
    label: "Kontakt",
    link: "/kontakt",
  },
];

export default function Navbar() {
  return (
    <nav>
      <div className="flex md:flex-row justify-between md:items-center md:max-w-[1260px] h-[120px] w-full mx-auto px-2.5">
        <NavLink to="/">
          <img
            className="h-[70px] md:h-[100px]"
            src={logo}
            alt="Herb drużyny"
          />
        </NavLink>
        <div className="h-full flex items-center">
          <ul className="flex gap-10 text-lg text-main h-full items-center">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="h-full flex items-center hover:cursor-pointer hover:border-b-4 duration-150 ease-in"
              >
                <NavLink to={item.link}>{item.label}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
