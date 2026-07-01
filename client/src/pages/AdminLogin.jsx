import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginAdmin } from "../services/adminApi";
import toast from "react-hot-toast";
import { useEffect } from "react";

const AdminLogin = () => {
  const navigate = useNavigate();
  useEffect(() => {
  const token = localStorage.getItem("token");

  if (token) {
    navigate("/dashboard", {
      replace: true,
    });
  }
}, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const data = await loginAdmin(email, password);

      localStorage.setItem("token", data.token);

      toast.success("Login Successful");

      navigate("/dashboard", {
  replace: true,
});
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Login Failed"
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050816] px-6">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8"
      >
        <h1 className="text-3xl font-bold text-white text-center">
          Admin Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="mt-8 w-full rounded-xl bg-[#0F172A] border border-white/10 px-4 py-3 text-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="mt-5 w-full rounded-xl bg-[#0F172A] border border-white/10 px-4 py-3 text-white"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="mt-8 w-full rounded-xl bg-yellow-400 py-3 font-bold text-black"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;