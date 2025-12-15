import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Products.css";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="products-container">
      <h1>Prodotti</h1>

      <div className="products-grid">
        {products.map(product => (
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