import { Link } from "react-router-dom";
import { useContext } from "react";
import { BudgetContext } from "../context/BudgetContext";

function Navbar() {
  const { budgetMode, setBudgetMode } = useContext(BudgetContext);

  return (
    <nav style={{ padding: "10px", background: "#333", color: "white" }}>
      <Link to="/" style={{ marginRight: "10px", color: "white" }}>Home</Link>
      <Link to="/products" style={{ marginRight: "10px", color: "white" }}>Prodotti</Link>
      <Link to="/about" style={{ marginRight: "10px", color: "white" }}>Chi siamo</Link>

      <button
        onClick={() => setBudgetMode(!budgetMode)}
        style={{ marginLeft: "20px", padding: "5px 10px" }}
      >
        {budgetMode ? "Disattiva Modalità Budget" : "Attiva Modalità Budget"}
      </button>
    </nav>
  );
}

export default Navbar;