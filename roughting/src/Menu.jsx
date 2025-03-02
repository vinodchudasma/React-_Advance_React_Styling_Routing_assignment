import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons

function Menu() {
  return (
    <nav className="bg-dark py-3">
      <ul className="d-flex justify-content-around list-unstyled m-0">
        <li>
          <a href="/home" className="text-white text-decoration-none fw-bold">
            <i className="bi bi-house-door me-2"></i> Home
          </a>
        </li>
        <li>
          <a href="/contect" className="text-white text-decoration-none fw-bold">
            <i className="bi bi-file-text me-2"></i> Content
          </a>
        </li>
        <li>
          <a href="/about" className="text-white text-decoration-none fw-bold">
            <i className="bi bi-info-circle me-2"></i> About
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
