import { useState } from "react";
import API from "../api/axios";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async (e: any) => {
    e.preventDefault();

    await API.post("/auth/register", {
      name,
      email,
      password,
    });

    navigate("/login");
  };

  return (
    <div className="max-w-md mx-auto bg-[#1e293b] p-8 rounded-3xl mt-20">
      <h1 className="text-4xl font-bold mb-8 text-center">Register</h1>

      <form onSubmit={register} className="space-y-5">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full bg-[#0f172a] p-4 rounded-xl outline-none"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-[#0f172a] p-4 rounded-xl outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full bg-[#0f172a] p-4 rounded-xl outline-none"
        />

        <button className="w-full bg-blue-600 p-4 rounded-xl font-bold">
          Register
        </button>
      </form>

      <p className="mt-5 text-center text-gray-400">
        Already have account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
