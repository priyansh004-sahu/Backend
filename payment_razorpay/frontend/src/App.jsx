import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import PaymentButton from './PaymentButton';

function App() {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/products/getItem")
      .then((response) => {
        setProduct(response.data.products);
      })
      .catch((err) => setError("Failed to load product."));
  }, []);

  const formatPrice = (amount, currency) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: currency || "INR",
    }).format(amount / 100 || 0);
  };

  const handleBuyNow = () => {
    alert("Redirecting to checkout...");
  };

  if (!product) {
    return <div className="loading">Loading product...</div>;
  }

  const { image, title, description, price } = product;

  return (
    <div className="app-shell">
      <div className="card">
        <div className="media">
          <img
            src={
              image ||
              "https://cdn.cartpe.in/images/gallery_sm/68fb8a23a65ae0.jpeg"
            }
            alt={title}
          />
        </div>

        <div className="content">
          <h1 className="title">{title}</h1>
          <p className="desc">{description}</p>

          <div className="row">
            <div className="price">
              {formatPrice(price?.amount, price?.currency)}
            </div>     
             <PaymentButton/>
          </div>
        </div>
      </div>

      {error ? <div className="note error">{error}</div> : null}
    </div>
  );
}

export default App;
