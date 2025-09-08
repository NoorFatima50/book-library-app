import { useNavigate } from "react-router-dom";
import "./Landing.css"; // optional CSS file for styling

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <div className="hero">
        <h1>Welcome to the Library App</h1>
        <p>Explore & Borrow Your Favorite Books!</p>
        <div className="buttons">
          <button onClick={() => navigate("/login")}>Login</button>
          <button onClick={() => navigate("/register")}>Register</button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
