import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light text-center">
      <h1 className="display-2 fw-bold text-primary">Welcome to Home Page</h1>
      <p className="fs-4 text-secondary">Your one-stop destination for amazing content.</p>
      <button className="btn btn-primary btn-lg mt-3">Get Started</button>
    </div>
  );
}

export default Home;
