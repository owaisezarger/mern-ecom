import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div className="col-md-3 mb-2 mb-md-0"></div>
          {isAuthenticated ? (
            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
              <li>
                <div className="nav-link px-2">Home</div>
              </li>
              <li>
                <div className="nav-link px-2">Features</div>
              </li>
              <li>
                <div className="nav-link px-2">Pricing</div>
              </li>
              <li>
                <div className="nav-link px-2">FAQs</div>
              </li>
              <li>
                <div className="nav-link px-2">About</div>
              </li>
            </ul>
          ) : (
            <>
              <ul className="nav">
                <li>
                  <div
                    className="nav-link px-2 text-primary "
                    onClick={() => navigate("/")}
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      src="https://uxwing.com/wp-content/themes/uxwing/download/buildings-architecture-real-estate/home-icon.png"
                      width="30px"
                      alt="logo"
                      height="30px"
                    />
                  </div>
                </li>
              </ul>
            </>
          )}

          <div className="col-md-3 text-end">
            {isAuthenticated ? (
              <button
                type="button"
                className="btn btn-outline-primary me-2"
                onClick={handleLogout}
              >
                Logout
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-outline-primary me-2"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
            )}
          </div>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
