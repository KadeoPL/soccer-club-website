import { NavLink } from "react-router";
import bgImage from "../assets/header-img-prev.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const headers = [
  {
    text: "Nadchodzi wielki hit! Zapowiedź najbliższego meczu",
    image: bgImage,
    link: "",
  },
  {
    text: "Kibice na medal! Wasze wsparcie dodaje nam skrzydeł",
    image: bgImage,
    link: "",
  },
];

headers.forEach((header) => {
  header.link = `/aktualnosci/${header.text
    .toLowerCase()
    .replace(/\s+/g, "-")}`;
});

export default function Header() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    activeIndex < headers.length - 1
      ? setActiveIndex(activeIndex + 1)
      : setActiveIndex(0);
  };

  const prevSlide = () => {
    activeIndex > 0
      ? setActiveIndex(activeIndex - 1)
      : setActiveIndex(headers.length - 1);
  };
  return (
    <div
      className="w-full h-[800px]"
      style={{ backgroundImage: `url(${headers[activeIndex].image})` }}
    >
      <div className="w-full h-full bg-gradient-to-t from-black to-black/0">
        <div className="flex items-end justify-between h-full max-w-[1260px] mx-auto px-2.5">
          <h1 className=" w-1/2 text-5xl text-white font-black mb-20 cursor-pointer hover:text-gray-300 duration-300 ease-in-out">
            <NavLink to={headers[activeIndex].link}>
              {headers[activeIndex].text}
            </NavLink>
          </h1>
          <div className="w-26 h-12 mb-20 flex justify-between">
            <div
              className="grid w-12 h-12 bg-primary place-items-center hover:bg-secondary duration-150 ease-in-out cursor-pointer"
              onClick={prevSlide}
            >
              <ChevronLeft color="white" />
            </div>
            <div
              className="grid w-12 h-12 bg-primary place-items-center hover:bg-secondary duration-150 ease-in-out cursor-pointer"
              onClick={nextSlide}
            >
              <ChevronRight color="white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
