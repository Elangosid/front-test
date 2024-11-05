import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import apiUrl from "../utils";
import { useAuth } from "../context/AuthContext"; // Import Auth context

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State for error messages
  const navigate = useNavigate(); // Initialize navigate
  const { login } = useAuth(); // Get login function from context

  const handleClick = async (e) => {
    e.preventDefault(); // Prevent page refresh
    const data = { email, password };

    try {
      const res = await apiUrl.post("/auth/login", data);
      console.log("Login success", res.data);

      // Store the token in local storage
      localStorage.setItem("token", res.data.token);

      // Update authentication state in context
      login();

      // Redirect to the dashboard
      navigate("/dashboard");
    } catch (error) {
      console.log("Login error", error);
      // Set error message for user feedback
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div>
      <form>
        <label>Email</label>
        <input
          type="text"
          placeholder="Enter email id"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p style={{ color: "red" }}>{error}</p>}{" "}
        {/* Display error message */}
        <button onClick={handleClick} type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
