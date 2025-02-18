import { HouseIcon, SquarePlusIcon, UserRound } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

const Navbar = () => {
  const { authUser } = useAuthStore();

  if (!authUser) {
    return null;
  }
  return (
    <header className="bg-base-100 fix w-full top-0 z-40 border-b border-base-300 backdrop-blur-lg">
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          {/* Left Section (Home Link) */}
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

          {/* Right Section (Create and Profile Links) */}
          <div className="flex items-center gap-6">
            {/* Create Link */}
            <Link
              to="/create"
              className="flex items-center gap-2 hover:opacity-80 transition-all"
            >
              <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <SquarePlusIcon className="size-5 text-primary" />
              </div>
              <h1 className="hidden sm:block text-lg font-bold text-primary">
                Create
              </h1>
            </Link>

            {/* Profile Link */}
            <Link
              to="/profile"
              className="flex items-center gap-2 hover:opacity-80 transition-all"
            >
              <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <UserRound className="size-5 text-primary" />
              </div>
              <h1 className="hidden sm:block text-lg font-bold text-primary">
                Profile
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
