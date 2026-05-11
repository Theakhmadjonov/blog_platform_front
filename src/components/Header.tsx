import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const { user, setUser } = useAuth();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <header className="bg-[#111827] border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-3xl font-bold text-blue-500">
          BlogPlatform
        </Link>

        <div className="flex items-center gap-4">
          <Link to="/">Home</Link>

          {user && <Link to="/profile">Profile</Link>}

          {!user ? (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          ) : (
            <button
              onClick={logout}
              className="bg-red-500 px-4 py-2 rounded-xl"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
