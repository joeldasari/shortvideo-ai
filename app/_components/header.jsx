import { CirclePlay, Play, SquarePlay } from "lucide-react";

const Header = () => {
  return (
    <div className="py-8 px-16">
      <h1 className="text-3xl font-semibold flex items-center gap-2">
        <Play className="bg-purple-500" />
        <span>shortvideo</span> <span className="text-purple-400">ai</span>
      </h1>
    </div>
  );
};

export default Header;
