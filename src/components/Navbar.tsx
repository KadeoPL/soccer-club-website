import logo from "../assets/gdovia_logo.png";
import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <nav>
      <div className="flex md:flex-row justify-between md:items-center md:w-[1260px] h-[120px] w-full mx-auto">
        <NavLink to="/">
          <img
            className="h-[70px] md:h-[100px]"
            src={logo}
            alt="Herb drużyny"
          />
        </NavLink>
        <div className="h-full flex items-center">
          <ul className="flex gap-10 text-lg uppercase font-semibold text-main">
            <li className="">
              <NavLink to="/">Aktualności</NavLink>
            </li>
            <li>
              <NavLink to="/">Seniorzy</NavLink>
            </li>
            <li>
              <NavLink to="/">Szkółka piłkarska</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
