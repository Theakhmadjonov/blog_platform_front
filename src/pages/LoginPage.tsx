import { useState } from "react";
import API from "../api/axios";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const LoginPage = () => {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e: any) => {
    e.preventDefault();

    const { data } = await API.post("/auth/login", {
      email,
      password,
    });
    console.log("datasss", data);
    localStorage.setItem("token", data.accessToken);
    localStorage.setItem("user", JSON.stringify(data.user));
    setUser(data.user);
    navigate("/");
  };

  return (
    <div className="max-w-md mx-auto bg-[#1e293b] p-8 rounded-3xl mt-20">
      <h1 className="text-4xl font-bold mb-8 text-center">Login</h1>

      <form onSubmit={login} className="space-y-5">
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
          Login
        </button>
      </form>

      <p className="mt-5 text-center text-gray-400">
        Don't have account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default LoginPage;
