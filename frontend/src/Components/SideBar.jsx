import { BookCheckIcon, HouseIcon, Notebook } from "lucide-react";
import { Link } from "react-router-dom";
const SideBar = () => {
  return (
    <aside className="h-screen w-10 lg:w-64 border-r border-base-300 bg-base-300 transition-all duration-200 ">
      <div className=" w-full p-1">
        <div>
          <ul className="space-y-8">
            <li>
              <Link
                to="/"
                className="flex items-center gap-2 hover:opacity-80 border-b-1 transition-all "
              >
                <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <HouseIcon className="size-5 text-primary" />
                </div>
                <h1 className="hidden lg:block text-lg font-bold">Home</h1>
              </Link>
            </li>
            <li>
              <Link
                to="/asseement-framework"
                className="flex items-center gap-2 hover:opacity-80 transition-all"
              >
                <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Notebook className="size-5 text-primary" />
                </div>
                <h1 className="hidden lg:block text-lg font-bold">
                  Assessment Framework
                </h1>
              </Link>
            </li>
            <li>
              <Link
                to="/evaluate"
                className="flex items-center gap-2 hover:opacity-80 transition-all"
              >
                <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <BookCheckIcon className="size-5 text-primary" />
                </div>
                <h1 className="hidden lg:block text-lg font-bold">Evaluate</h1>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
