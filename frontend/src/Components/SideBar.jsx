import { HouseIcon } from "lucide-react";
import { Link } from "react-router-dom";
const SideBar = () => {
  return (
    <div>
      <div className="w-48 h-screen bg-base-100">
        <div className="flex items-center gap-8">
          <Link
            to="/"
            className="flex items-center gap-2 hover:opacity-80 transition-all"
          >
            <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
              <HouseIcon className="size-5 text-primary" />
            </div>
            <h1 className="text-lg font-bold">Home</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
