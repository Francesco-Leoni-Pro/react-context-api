import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { BudgetContext } from "../context/BudgetContext";
import "./Products.css";

function Products() {
  const [products, setProducts] = useState([]);
  const { budgetMode } = useContext(BudgetContext); // <- prendiamo budgetMode

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  const filteredProducts = budgetMode
    ? products.filter(product => product.price <= 30)
    : products;

  return (
    <div className="products-container">
      <h1>Prodotti</h1>

      {budgetMode && <p>Modalità Budget attiva (≤ 30€)</p>}

      <div className="products-grid">
        {filteredProducts.map(product => (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="product-link"
          >
            <div className="product-card">
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.price} €</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Products;