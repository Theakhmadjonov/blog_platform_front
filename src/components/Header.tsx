import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useUserStore, type User } from "../zustand/userStore";
import { useGetMe } from "../hooks/useGetMe";

// const Header = () => {
//   const { data } = useGetMe();
//   const [userData, setUserData] = useState<User>();
//   const { setUser } = useUserStore();
//   useEffect(() => {
//     if (data) {
//       setUserData(data);
//       setUser(data);
//     }
//   }, [data]);
//   return (
//     <header className="bg-[#111827] border-b border-gray-800 sticky top-0 z-50">
//       <div className="max-w-[1440px] mx-auto px-[20px] md:px-[40px] xl:px-[80px] py-[20px] flex items-center justify-between">
//         <Link
//           to="/"
//           className="text-[24px] md:text-[30px] font-bold text-blue-500"
//         >
//           BlogPlatform
//         </Link>

//         <div className="flex items-center gap-[16px] md:gap-[24px] text-[14px] md:text-[16px]">
//           <Link to="/">Home</Link>

//           {userData && <Link to="/profile">Profile</Link>}

//           {!userData ? (
//             <Link to="/login">Login</Link>
//           ) : (
//             <Link to="/register">Register</Link>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// };

const Header = () => {
  const { data } = useGetMe();
  const { setUser } = useUserStore();

  useEffect(() => {
    if (data) setUser(data);
  }, [data]);

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

          {data && <Link to="/profile">Profile</Link>}

          {!data ? <Link to="/login">Login</Link> : null}
        </div>
      </div>
    </header>
  );
};

export default Header;
