import bgImage from "../assets/header-img-prev.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Header() {
  return (
    <div
      className="w-full h-[800px]"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="w-full h-full bg-gradient-to-t from-black to-black/0">
        <div className="flex items-end justify-between h-full max-w-[1260px] mx-auto px-2.5">
          <h1 className=" w-1/2 text-5xl text-white font-black mb-20 cursor-pointer hover:text-gray-300 duration-300 ease-in-out">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
            nesciunt consequatur.
          </h1>
          <div className="w-26 h-12 mb-20 flex justify-between">
            <div className="grid w-12 h-12 bg-primary place-items-center hover:bg-secondary duration-150 ease-in-out cursor-pointer">
              <ChevronLeft color="white" />
            </div>
            <div className="grid w-12 h-12 bg-primary place-items-center hover:bg-secondary duration-150 ease-in-out cursor-pointer">
              <ChevronRight color="white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
