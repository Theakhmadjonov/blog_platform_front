import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      <Header />
      <div className="max-w-[1440px] mx-auto px-[20px] md:px-[40px] xl:px-[80px] py-[30px]">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
