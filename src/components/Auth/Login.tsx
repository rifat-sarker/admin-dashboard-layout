import { useState } from "react";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { useAppDispatch } from "../../redux/hooks";
import { setUser } from "../../redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await login({ username, password }).unwrap();
      dispatch(setUser({ user: res.user, token: res.token }));
      toast.success("Login successful!");
      navigate("/dashboard");
    } catch (error: any) {
      console.error("Login failed:", error?.data?.message || error.message);
      toast.error("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-md rounded p-6 w-96 space-y-4"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <input
          type="text"
          placeholder="Username"
          className="w-full px-3 py-2 border rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-3 py-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-[#9b52fa] text-white py-2 rounded hover:bg-opacity-90"
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
