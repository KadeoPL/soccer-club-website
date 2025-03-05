import bgImage from "../assets/header-img-prev.jpg";

export default function Header() {
  return (
    <div
      className="w-full h-[1000px]"
      style={{ backgroundImage: `url(${bgImage})` }}
    ></div>
  );
}
