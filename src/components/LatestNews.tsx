import { ArrowRight } from "lucide-react";
import LatestBox from "./ui/LatestBox";
import { NavLink } from "react-router";

export default function LatestNews() {
  return (
    <div className="flex justify-center mt-10">
      <div className="w-full lg:w-[1260px]">
        <NavLink to={""}>
          {" "}
          <h1 className="flex items-center gap-2 text-3xl lg:text-4xl font-black text-primary px-5 mb-6">
            Ostatnie aktualności
            <span>
              <ArrowRight size={25} />
            </span>
          </h1>
        </NavLink>

        <div className="w-full flex flex-col md:flex-row gap-10 md:gap-5 px-0 md:px-5">
          <LatestBox /> <LatestBox /> <LatestBox />
        </div>
      </div>
    </div>
  );
}
