import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginWithEmail, registerWithEmail } from "@/services/auth.service";
import logo from "@/assets/logo.png";
import bg_image from "@/assets/background_banner.jpg";

export const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  if (error) {
    setTimeout(() => {
      setError(null);
    }, 5000);
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!email || !password) {
      setError("Please enter email and password");
      setLoading(false);
      return;
    }

    try {
      if (isLogin) {
        await loginWithEmail(email, password);
      } else {
        await registerWithEmail(email, password);
      }
      navigate("/");
    } catch (err: unknown) {
      setError(
        (err as Error).message || "Authentication failed. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen bg-black bg-cover bg-center flex flex-col items-center justify-center relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url(${bg_image})`,
      }}
    >
      <div className="absolute top-5 left-5">
        <img src={logo} alt="Logo" width={120} />
      </div>

      <div className="bg-black/75 p-10 md:p-16 rounded-md w-full max-w-[450px]">
        <h1 className="text-3xl font-bold text-white mb-8">
          {isLogin ? "Sign In" : "Sign Up"}
        </h1>

        {error && (
          <div className="bg-red-500/20 text-red-500 p-3 mb-5 rounded text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email Address"
            className="p-4 bg-zinc-800 text-white rounded border border-transparent focus:border-white focus:outline-none placeholder-gray-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="p-4 bg-zinc-800 text-white rounded border border-transparent focus:border-white focus:outline-none placeholder-gray-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-red-600 text-white font-bold p-4 mt-4 rounded hover:bg-red-700 transition"
          >
            {loading ? "Please wait..." : isLogin ? "Sign In" : "Sign Up"}
          </button>
        </form>

        <div className="mt-8 text-gray-400">
          {isLogin ? "New to Netflix? " : "Already have an account? "}
          <span
            className="text-white hover:underline cursor-pointer"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Sign up now." : "Sign in now."}
          </span>
        </div>
      </div>
    </div>
  );
};
