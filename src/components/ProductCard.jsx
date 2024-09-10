import { Link } from "react-router-dom";

function ProductCard({ item }) {
  const { thumbnail, category, title, price, id } = item;

  return (
    <Link
      to={`/products/${id}`}
      className="lg:w-1/3 md:w-1/2 p-4 w-full"
      style={{
        border: "1px solid #e0e0e0",
        borderRadius: "10px",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#f8f9fa"
      }}
    >
      <div>
        <div style={{ overflow: "hidden", borderRadius: "10px" }}>
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-48"
            src={thumbnail}
            style={{
              borderRadius: "10px 10px 0 0",
              transition: "transform 0.3s ease"
            }}
          />
        </div>
        <div style={{ padding: "16px" }}>
          <h3 style={{ color: "#6c757d", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px" }}>
            {category}
          </h3>
          <h2 style={{ color: "#343a40", fontSize: "18px", fontWeight: "bold" }}>
            {title}
          </h2>
          <p style={{ color: "#28a745", fontSize: "16px", marginTop: "8px" }}>
            ${price}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
