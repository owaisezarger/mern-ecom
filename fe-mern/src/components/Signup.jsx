import axios from "axios";
import React, { useState } from "react";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      // Make API call to register user
      const response = await axios.post("http://localhost:3001/user/register", {
        username,
        password,
      });

      // Handle successful registration (you can redirect or show a success message)
      alert("User registered successfully:", response.data);

      setUsername("");
      setPassword("");
    } catch (error) {
      // Handle registration error (you can show an error message)
      alert(`Error registering user: ${error.response.data.message}`);
      setUsername("");
      setPassword("");
      console.error("Error registering user:", error.response.data.message);
    }
  };

  return (
    <div>
      <main className="form-signin w-25 m-auto">
        <form onSubmit={handleSignup}>
          <h1 className="h3 mb-3 fw-normal">Please sign up</h1>

          <div className="form-floating">
            <input
              type="email"
              className="form-control mb-2"
              id="floatingInput"
              placeholder="name@example.com "
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control mb-3"
              id="floatingPassword"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <button className="btn btn-primary w-100 py-2 mb-3" type="submit">
            Sign Up
          </button>
        </form>
      </main>
    </div>
  );
};

export default Signup;
