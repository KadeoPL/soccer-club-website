import { NavLink } from "react-router";
import bgImage from "../assets/header-img-prev.jpg";
import bgImage2 from "../assets/header-img-prev-2.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const headers = [
  {
    text: "Nadchodzi wielki hit! Zapowiedź najbliższego meczu",
    image: bgImage,
    link: "",
  },
  {
    text: "Kibice na medal! Wasze wsparcie dodaje nam skrzydeł",
    image: bgImage2,
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
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setTimeout(nextSlide, 8000);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  const nextSlide = () => {
    setDirection(1);
    activeIndex < headers.length - 1
      ? setActiveIndex(activeIndex + 1)
      : setActiveIndex(0);
  };

  const prevSlide = () => {
    setDirection(-1);
    activeIndex > 0
      ? setActiveIndex(activeIndex - 1)
      : setActiveIndex(headers.length - 1);
  };
  return (
    <div className="relative w-full lg:h-[800px] h-[600px] overflow-hidden">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={activeIndex}
          className="absolute top-0 left-0 w-full h-full bg-center bg-cover"
          style={{ backgroundImage: `url(${headers[activeIndex].image})` }}
          initial={{ x: direction * 1000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction * -1000, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="w-full h-full bg-gradient-to-t from-black to-black/0">
            <div className="flex lg:flex-row flex-col lg:items-end items-center lg:justify-between justify-end h-full max-w-[1260px] mx-auto px-2.5">
              <motion.h1
                className="lg:w-1/2 w-full lg:text-5xl text-4xl text-center lg:text-left text-white font-black lg:mb-20 cursor-pointer hover:text-gray-300 duration-300 ease-in-out"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5, ease: "easeIn" }}
              >
                <NavLink to={headers[activeIndex].link}>
                  {headers[activeIndex].text}
                </NavLink>
              </motion.h1>
              <div className="w-26 h-12 lg:mb-20 mg:mt-0 mb-10 mt-10 flex justify-between">
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
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
