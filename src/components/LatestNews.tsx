import { ArrowRight } from "lucide-react";
import LatestBox from "./ui/LatestBox";

export default function LatestNews() {
  return (
    <div className="flex justify-center mt-10">
      <div className="w-[1260px]">
        <h1 className="flex items-center gap-2 text-4xl font-black text-primary">
          Ostatnie aktualności
          <span>
            <ArrowRight size={25} />
          </span>
        </h1>
        <div className="w-full flex gap-10 mt-8">
          <LatestBox /> <LatestBox /> <LatestBox />
        </div>
      </div>
    </div>
  );
}
