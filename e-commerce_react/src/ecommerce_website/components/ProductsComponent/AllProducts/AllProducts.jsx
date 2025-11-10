// src/ecommerce_website/components/ProductsComponent/AllProducts/AllProducts.jsx
import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../../services/AuthContext";
import authenticationService from "../../AuthenticationComponent/authenticationService";

export function AllProducts({ category, search }) {
  const [products, setProducts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
  let apiCategory = "";
  switch (category) {
    case "mens":
    case "men's clothing":
      apiCategory = "men's clothing";
      break;
    case "womens":
    case "women's clothing":
      apiCategory = "women's clothing";
      break;
    case "jewellery":
    case "jewelery":
      apiCategory = "jewelery";
      break;
    case "electronics":
      apiCategory = "electronics";
      break;
    default:
      apiCategory = "";
  }

  let url = "http://localhost:8080/api/products";
  if (apiCategory) {
    url += `?category=${encodeURIComponent(apiCategory)}`;
  }

  console.log("🧭 Fetching from frontend:", url); // <--- ADD THIS LINE

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    console.log("✅ Fetch URL:", url);
    console.log("📦 Data received from backend:", data);
    if (search) {
      const lower = search.toLowerCase();
      data = data.filter((p) => p.title.toLowerCase().includes(lower));
    }
    setProducts(data);
  })
  .catch((err) => console.error("Error fetching products:", err));
}, [category, search]);

  const addToCart = async (product) => {
    try {
      const res = await fetch("http://localhost:8080/api/cart/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: authenticationService.getToken() || "",
        },
        body: JSON.stringify({
          username: user,
          productId: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
          quantity: 1,
        }),
      });

      if (res.ok) {
        alert("Added to cart!");
      } else {
        alert("Could not add to cart.");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="row">
      {products.map((p) => (
        <div className="col-md-3 mb-4" key={p.id}>
          <div className="card h-100 shadow-sm">
            <img
              src={p.image}
              className="card-img-top"
              alt={p.title}
              style={{ objectFit: "contain", height: 200 }}
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">{p.title}</h5>
              <p className="card-text">Price: ₹{p.price}</p>
              <p className="card-text">
                {p.category && <span className="badge bg-secondary">{p.category}</span>}
              </p>
              <div className="mt-auto">
                <button
                  className="btn btn-primary w-100"
                  onClick={() => addToCart(p)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
