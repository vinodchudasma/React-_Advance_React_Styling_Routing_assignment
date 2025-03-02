import React from "react";
import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Contect() {
  return (
    <div className="container text-center py-5">
      <h1 className="display-4 fw-bold text-primary">Contact Page</h1>
      <p className="fs-5 text-secondary">
        This is the contact page with nested routes below.
      </p>
      <div className="mt-4">
        <Outlet />
      </div>
    </div>
  );
}

export default Contect;
