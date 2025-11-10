// src/components/Footer_component/footer.jsx
import React from "react";

export function Footer() {
  return (
    <footer
      className="text-light mt-5"
      style={{
        background: "linear-gradient(90deg, #1a1a1a, #2c2c2c)",
        padding: "40px 0 20px 0",
      }}
    >
      <div className="container">
        <div className="row text-center text-md-start">
          {/* Brand Section */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold text-uppercase mb-3">E-Cart</h5>
            <p style={{ color: "#bbb" }}>
              Your one-stop shop for electronics, fashion, and accessories.
              Fast delivery and trusted products since {new Date().getFullYear()}.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold text-uppercase mb-3">Quick Links</h6>
            <ul className="list-unstyled" style={{ color: "#bbb" }}>
              <li><a href="/home" className="text-decoration-none text-light">Home</a></li>
              <li><a href="/home?category=electronics" className="text-decoration-none text-light">Electronics</a></li>
              <li><a href="/home?category=men's clothing" className="text-decoration-none text-light">Men’s Fashion</a></li>
              <li><a href="/home?category=women's clothing" className="text-decoration-none text-light">Women’s Fashion</a></li>
              <li><a href="/home?category=jewelery" className="text-decoration-none text-light">Jewellery</a></li>
              <li><a href="/contact" className="text-decoration-none text-light">Contact Us</a></li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold text-uppercase mb-3">Follow Us</h6>
            <div>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-light me-3 fs-4">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light me-3 fs-4">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-light me-3 fs-4">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-light fs-4">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <hr style={{ borderColor: "#444" }} />

        {/* Bottom Section */}
        <div className="text-center" style={{ color: "#aaa" }}>
          <small>
            Developed by Nishant Tiwari.<br />
          </small>
          <small>
            &copy; {new Date().getFullYear()} E-Cart Demo. All rights reserved.
          </small>
        </div>
      </div>
    </footer>
  );
}
