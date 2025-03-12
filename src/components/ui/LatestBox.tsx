import { NavLink } from "react-router";
import bgImage from "../../assets/header-img-prev.jpg";

export default function LatestBox() {
  return (
    <div className="w-1/3 h-100 flex flex-col justify-between">
      <NavLink to={""}>
        <div
          className="w-full h-60 mb-4 overflow-hidden"
          //   style={{ backgroundImage: `url(${bgImage})` }}
        >
          <img
            src={bgImage}
            alt=""
            className="w-full h-full hover:scale-125 duration-1000 ease-in-out"
          />
        </div>
        <h3 className="text-xl font-medium text-primary">
          Lorem ipsum mit dolorem ipsum mit dolorem
        </h3>
      </NavLink>
      <div className="w-full">
        <div className="w-full h-[1px] bg-gray-300 mb-2" />
        <div className="w-full flex justify-between items-end">
          <p className="text-sm uppercase font-bold text-primary">
            pierwsza drużyna
          </p>
          <p className="text-xs uppercase font-light text-gray-500 flex gap-1 items-center">
            2 godziny temu
          </p>
        </div>
      </div>
    </div>
  );
}
