import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold text-body-emphasis">
          Discover a World of Unique Treasures
        </h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Explore our curated collection of handcrafted goods, sourced from
            artisans around the globe. From one-of-a-kind jewelry to artisanal
            home decor, find something special that speaks to you and your
            unique style.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button
              type="button"
              className="btn btn-primary btn-lg px-4 gap-3"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
              onClick={() => navigate("/signup")}
            >
              Signup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
