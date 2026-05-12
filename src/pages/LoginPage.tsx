import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
import { useUserStore } from "../zustand/userStore";

const LoginPage = () => {
  const navigate = useNavigate();
  const { mutateAsync, isPending } = useLogin();
  const { setUser } = useUserStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data } = await mutateAsync({
        email,
        password,
      });
      localStorage.setItem("token", data.accessToken);
      setUser(data.user);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full max-w-[420px] md:max-w-[500px] mx-auto bg-[#1e293b] p-[24px] md:p-[40px] rounded-[24px] mt-[40px] md:mt-[80px]">
      <h1 className="text-[28px] md:text-[40px] font-bold mb-[28px] md:mb-[36px] text-center">
        Login
      </h1>

      <form onSubmit={login} className="space-y-[18px] md:space-y-[24px]">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-[#0f172a] p-[14px] md:p-[16px] rounded-[16px] outline-none text-[14px] md:text-[16px]"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full bg-[#0f172a] p-[14px] md:p-[16px] rounded-[16px] outline-none text-[14px] md:text-[16px]"
        />

        <button
          disabled={isPending}
          className="w-full bg-blue-600 p-[14px] md:p-[16px] rounded-[16px] font-bold text-[15px] md:text-[16px] disabled:opacity-50"
        >
          {isPending ? "Loading..." : "Login"}
        </button>
      </form>

      <p className="mt-[20px] md:mt-[24px] text-center text-gray-400 text-[14px] md:text-[16px]">
        Don't have account?{" "}
        <Link to="/register" className="text-blue-500">
          Register
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
