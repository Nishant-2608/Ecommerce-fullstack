// src/ecommerce_website/components/MainComponent/Main.jsx
import React from "react";
import { useLocation } from "react-router-dom";
import { AllProducts } from "../ProductsComponent/AllProducts/AllProducts";
import { CartView } from "../HeaderComponent/CartComponent/CartView";

export function Main() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const view = params.get("view") || "products";
  const rawCategory = params.get("category") || "all";
  const category = decodeURIComponent(rawCategory);
  console.log("🧭 Active category:", category);
  const search = params.get("search") || null;

  return (
    <div className="main p-4">
      {view === "cart" && <CartView />}
      {view === "products" && (
        <AllProducts category={category} search={search} />
      )}
    </div>
  );
}
