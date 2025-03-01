import logo from "@/assets/gdovia_logo.png";
import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <nav>
      <div>
        <NavLink to="/">
          <img
            className="h-[70px] md:h-[115px]"
            src={logo}
            alt="Herb drużyny Gdovia Gdów"
          />
        </NavLink>
      </div>
    </nav>
  );
}
