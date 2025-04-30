// Product.jsx
import React from 'react';
import data from './Productdata';
import { Link } from 'react-router-dom';
import './Product.css'; // We'll add styles here

const Product = () => {
  const productdata = data;

  return (
    <div className="product-container">
      {productdata.products.map((p, i) => (
        <div key={i} className="product-card">
          <img src={p.thumbnail} alt={p.title} className="product-image" />
          <h2 className="product-title">{p.title}</h2>

          <div className="product-price">
            ${p.price} <span>({p.discountPercentage}%)</span>
          </div>

          <div className="product-stock">
            Stock: {p.stock} | {p.availabilityStatus}
          </div>

          <div className="product-brand">Brand: {p.brand}</div>
          <div className="product-sku">SKU: {p.sku}</div>
          <div className="product-warranty">Warranty: {p.warrantyInformation}</div>

          <Link to={`/product/reviews/${p.id}`}>
            <button className="review-btn">View Reviews</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Product;
