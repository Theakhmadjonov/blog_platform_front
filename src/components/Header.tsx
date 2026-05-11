import { Link, NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-[#111827]/90 backdrop-blur border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-blue-500">
          BlogPlatform
        </Link>

        <nav className="flex items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-gray-300"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-gray-300"
            }
          >
            Profile
          </NavLink>

          <FaUserCircle className="text-3xl text-gray-300" />
        </nav>
      </div>
    </header>
  );
};

export default Header;
