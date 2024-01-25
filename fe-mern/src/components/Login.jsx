import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // State to manage form inputs
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    // Basic input validation
    if (!username || !password) {
      alert("Please enter both username and password");
      return;
    }
    try {
      // Make a POST request to your backend login route
      const response = await axios.post("http://localhost:3001/user/login", {
        username,
        password,
      });

      // Assuming your backend sends a token upon successful login
      const token = response.data.token;

      // Dispatch login action with user information
      dispatch(login({ username: username, token }));

      // Clear form inputs after login
      setUsername("");
      setPassword("");
      setRememberMe(false);

      // Redirect to the home page
      navigate("/home");
    } catch (error) {
      console.error("Error logging in:", error);

      // Handle login failure, show an alert or error message to the user
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <div>
      <main className="form-signin w-25 m-auto">
        <form>
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating">
            <input
              type="username"
              className="form-control mb-2"
              id="floatingInput"
              placeholder="name@example.com "
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="floatingInput">username address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="form-check text-start my-3">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              value={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Remember me
            </label>
          </div>
          <button
            className="btn btn-primary w-100 py-2"
            type="submit"
            onClick={handleLogin}
          >
            Sign in
          </button>
          <p className="mx-5 my-3 text-body-secondary">
            I am new here
            <button
              className="btn btn-success w-20 m-2 py-2"
              type="submit"
              onClick={() => navigate("/signup")}
            >
              Register now
            </button>
          </p>

          <p className="mt-5 mb-3 text-body-secondary">© 2020–2024</p>
        </form>
      </main>
    </div>
  );
};

export default Login;
