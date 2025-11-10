// src/components/Header_component/Cart_Component/CartView.jsx
import React, { useEffect, useState, useContext } from "react";
import AuthenticationService from "../../AuthenticationComponent/authenticationService";
import { AuthContext } from "../../../services/AuthContext";

export function CartView() {
  const { user } = useContext(AuthContext);
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (!user) return;
    fetch(`http://localhost:8080/api/cart/${encodeURIComponent(user)}`, {
      headers: { "Authorization": AuthenticationService.getToken() || "" }
    })
    .then(r => r.json())
    .then(setItems)
    .catch(console.error);
  }, [user]);

  const removeItem = async (id) => {
    const res = await fetch(`http://localhost:8080/api/cart/remove/${id}`, { method: "DELETE" });
    if (res.ok) setItems(prev => prev.filter(i => i.id !== id));
  };

  return (
    <div>
      <h3>Your Cart</h3>
      {items.length === 0 && <p>Cart is empty</p>}
      <div className="list-group">
        {items.map(i => (
          <div className="list-group-item d-flex justify-content-between align-items-center" key={i.id}>
            <div>
              <img src={i.image} style={{width:60, height:60, objectFit:'contain'}} alt={i.title} />
              <strong className="ms-3">{i.title}</strong>
            </div>
            <div>
              <span className="me-3">₹ {i.price}</span>
              <button className="btn btn-danger btn-sm" onClick={() => removeItem(i.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
