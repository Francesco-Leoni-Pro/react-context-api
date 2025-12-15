import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#333", color: "white" }}>
      <Link to="/" style={{ marginRight: "10px", color: "white" }}>Home</Link>
      <Link to="/products" style={{ marginRight: "10px", color: "white" }}>Prodotti</Link>
      <Link to="/about" style={{ marginRight: "10px", color: "white" }}>Chi siamo</Link>
    </nav>
  );
}

export default Navbar;