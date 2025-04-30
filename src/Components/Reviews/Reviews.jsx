// Reviews.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../Product/Productdata';
import './Reviews.css';

const Reviews = () => {
  const { id } = useParams();
  const matchedProduct = data.products.find((p) => p.id === parseInt(id));

  if (!matchedProduct) {
    return <h2>No product found with ID: {id}</h2>;
  }

  return (
    <div className="review-container">
      <h2>Reviews for {matchedProduct.title}</h2>

      {matchedProduct.reviews && matchedProduct.reviews.length > 0 ? (
        matchedProduct.reviews.map((r, i) => (
          <div className="review-card" key={i}>
            <div className="review-rating">★ {r.rating} / 5</div>
            <div className="review-comment">{r.comment}</div>
            <div className="review-info">
              {r.reviewerName} ({r.reviewerEmail})
            </div>
            <div className="review-date">Date: {r.date}</div>
          </div>
        ))
      ) : (
        <p>No reviews yet for this product.</p>
      )}
    </div>
  );
};

export default Reviews;
