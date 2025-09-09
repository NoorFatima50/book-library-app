import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-brand-primary to-brand-primary-light text-white px-4">
      <div className="text-center max-w-xl p-8 bg-black/20 rounded-2xl shadow-soft">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to the Library App</h1>
        <p className="text-lg md:text-xl mb-6 text-white/90">Explore & Borrow Your Favorite Books!</p>
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => navigate("/login")}
            className="px-5 py-2.5 rounded-lg bg-brand-accent text-gray-900 font-semibold hover:bg-brand-accent-light transition"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/register")}
            className="px-5 py-2.5 rounded-lg border border-white/70 text-white hover:bg-white/10 transition"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
