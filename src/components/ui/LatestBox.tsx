import { NavLink } from "react-router";
import bgImage from "../../assets/header-img-prev.jpg";

export default function LatestBox() {
  return (
    <div className="w-full md:w-1/3 h-full lg:h-100 flex flex-col sm:flex-row md:flex-col sm:px-5 md:px-0">
      <NavLink
        to={""}
        className="w-full sm:w-1/2 md:w-full h-60 sm:h-40 md:h-60 mb-4 sm:mb-0 md:mb-4 overflow-hidden sm:pr-5 md:p-0"
      >
        <img
          src={bgImage}
          alt=""
          className="w-full h-full object-cover hover:scale-125 duration-1000 ease-in-out"
        />
      </NavLink>
      <div className="px-5 sm:px-0 sm:h-40 md:px-0 flex flex-col justify-between">
        <NavLink to={""} className="mb-5">
          <h3 className="text-xl sm:text-2xl font-medium text-primary">
            Lorem ipsum mit dolorem ipsum mit dolorem
          </h3>
        </NavLink>
        <div>
          <div className="w-full h-[1px] bg-gray-500 mb-2" />
          <div className="w-full flex justify-between items-end">
            <p className="text-sm uppercase font-bold text-primary">
              pierwsza drużyna
            </p>
            <p className="text-xs uppercase font-light text-gray-700 flex gap-1 items-center">
              2 godziny temu
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
