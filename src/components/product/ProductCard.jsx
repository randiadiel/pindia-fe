import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="card">
        <img src="" className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
          <div className="btn btn-primary">Go somewhere</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
