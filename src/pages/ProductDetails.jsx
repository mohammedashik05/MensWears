import { useParams, useNavigate } from "react-router-dom";
import "../styles/ProductDetails.css";
import products from "../data/products";
import { useContext } from "react";
import { ProductContext } from "../components/ProductProvider";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(ProductContext);

  // Find the product by id
  const product = products.find((p) => p.id.toString() === id);

  if (!product) {
    return <h2>Product not found</h2>;
  }

  const rating = 4;
  const totalStars = 5;
  const stars = "★".repeat(rating) + "☆".repeat(totalStars - rating);

  const handleAddToCart = () => {
    addToCart(product);
    alert("Item added to Cart");
  };

  

  return (
    <div className="product-detail">
      <img
        src={product.image}
        alt={`Image of ${product.name}`}
        className="product-detail-image"
      />

      <div className="product-content">
        <h2>{product.name}</h2>
        <p>
          <strong>Price:</strong> ₹ {product.price}
        </p>
        <p className="stars">{stars}</p>

        <p>
          <strong>Description:</strong>{" "}
          {product.description || "No description available."}
        </p>

        <div className="button-group">
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
          <button className="buy-btn">Buy Now</button>
        </div>

        <button className="back-btn" onClick={() => navigate("/")}>
          ← Back to Home
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
