import { Link } from "react-router-dom";
import { useUserStore } from "../zustand/userStore";

const Header = () => {
  const user = useUserStore((state) => state.user);

  const clearUser = useUserStore((state) => state.clearUser);

  const initial = user?.name?.charAt(0)?.toUpperCase();

  return (
    <header className="bg-[#111827] border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-[20px] md:px-[40px] xl:px-[80px] py-[20px] flex items-center justify-between">
        <Link
          to="/"
          className="text-[24px] md:text-[30px] font-bold text-blue-500"
        >
          BlogPlatform
        </Link>

        <div className="flex items-center gap-[16px] md:gap-[24px]">
          <Link to="/">Home</Link>

          {user ? (
            <>
              <Link to="/profile" className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                  {initial}
                </div>

                <span className="hidden md:block">{user.name}</span>
              </Link>

              <button
                onClick={clearUser}
                className="text-red-400 hover:text-red-300"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="bg-blue-600 px-4 py-2 rounded-lg text-white"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
