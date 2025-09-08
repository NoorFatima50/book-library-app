import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", backgroundColor: "#f0f0f0" }}>
      <Link to="/" style={{ marginRight: "10px" }}>Books</Link>
      <Link to="/borrowed" style={{ marginRight: "10px" }}>Borrowed</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
}

export default Navbar;
