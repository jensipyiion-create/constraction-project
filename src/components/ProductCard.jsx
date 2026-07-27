import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ id, image, title, price, category }) {
  return (
    <div className="product-card border-0">
      <div className="product-image-wrapper">
        <img src={image} alt={title} className="product-image" />
        <div className="product-overlay">
          <button className="btn-aesthetic w-75">View Details</button>
        </div>
      </div>
      <div className="product-info pt-3 text-center">
        <p className="text-muted small text-uppercase mb-1 tracking-wider">{category}</p>
        <h5 className="product-title text-dark fw-bold mb-2">
          <Link to="#">{title}</Link>
        </h5>
        <p className="product-price text-accent fw-semibold fs-5 mb-0">${price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
