import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShieldCheck, Mail, Lock, Music2 } from "lucide-react";
import toast from "react-hot-toast";
import { useEffect } from "react";

import { loginGuard } from "../services/guardApi";
import { useGuard } from "../context/GuardContext";

const GuardLogin = () => {
  const navigate = useNavigate();

  const { login } = useGuard();
  const { token } = useGuard();

useEffect(() => {
  if (token) {
    navigate("/guard/scanner", {
      replace: true,
    });
  }
}, [token]);

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const { data } = await loginGuard(form);

      login(data.guard, data.token);

      toast.success("Login Successful");

      navigate("/guard/scanner");

    } catch (err) {
      toast.error(
        err?.response?.data?.message ||
          "Login Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] flex items-center justify-center px-5">

      <div className="w-full max-w-md bg-[#171717] border border-yellow-500/30 rounded-3xl shadow-2xl p-10">

        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-yellow-500 flex items-center justify-center shadow-lg">

            <Music2
              size={42}
              className="text-black"
            />

          </div>
        </div>

        <h1 className="text-3xl font-black text-center text-yellow-400">

          JAMVERSE

        </h1>

        <p className="text-center text-gray-400 mt-2">

          Security Guard Login

        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-6"
        >

          <div>

            <label className="text-gray-300 text-sm">

              Email

            </label>

            <div className="mt-2 flex items-center bg-[#242424] rounded-xl px-4">

              <Mail
                className="text-yellow-400"
                size={18}
              />

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="guard@jamverse.com"
                className="bg-transparent w-full px-3 py-4 outline-none text-white"
              />

            </div>

          </div>

          <div>

            <label className="text-gray-300 text-sm">

              Password

            </label>

            <div className="mt-2 flex items-center bg-[#242424] rounded-xl px-4">

              <Lock
                className="text-yellow-400"
                size={18}
              />

              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="bg-transparent w-full px-3 py-4 outline-none text-white"
              />

            </div>

          </div>

          <button
            disabled={loading}
            className="w-full bg-yellow-400 hover:bg-yellow-500 transition rounded-xl py-4 font-bold text-black flex items-center justify-center gap-2"
          >

            <ShieldCheck size={20} />

            {loading
              ? "Signing In..."
              : "LOGIN"}

          </button>

        </form>

        <p className="text-center text-xs text-gray-500 mt-8">

          Authorized Personnel Only

        </p>

      </div>

    </div>
  );
};

export default GuardLogin;