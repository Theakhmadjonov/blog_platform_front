import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRegister } from "../hooks/useRegister";

const RegisterPage = () => {
  const navigate = useNavigate();
  const { mutateAsync, isPending } = useRegister();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const register = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await mutateAsync({
        name,
        email,
        password,
      });
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full max-w-[420px] md:max-w-[500px] mx-auto bg-[#1e293b] p-[24px] md:p-[40px] rounded-[24px] mt-[40px] md:mt-[80px]">
      <h1 className="text-[28px] md:text-[40px] font-bold mb-[28px] md:mb-[36px] text-center">
        Register
      </h1>
      <form onSubmit={register} className="space-y-[18px] md:space-y-[24px]">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full bg-[#0f172a] p-[14px] md:p-[16px] rounded-[16px] outline-none text-[14px] md:text-[16px]"
        />
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
          {isPending ? "Loading..." : "Register"}
        </button>
      </form>
      <p className="mt-[20px] md:mt-[24px] text-center text-gray-400 text-[14px] md:text-[16px]">
        Already have account?{" "}
        <Link to="/login" className="text-blue-500">
          Login
        </Link>
      </p>
    </div>
  );
};

export default RegisterPage;
