import React, { useState } from "react";
import apiUrl from "../utils"; // Assuming you have set up your axios instance
import { useNavigate } from "react-router-dom"; // For redirection

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // For handling error messages
  const navigate = useNavigate(); // For redirection after successful registration

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      username,
      email,
      password,
    };

    try {
      const res = await apiUrl.post("/auth/register", data); // Assuming your endpoint is /auth/register
      console.log("Registration success", res.data);
      // Optionally, redirect to the login page or another page
      navigate("/");
    } catch (error) {
      console.log("Registration error", error);
      setErrorMessage(error.response?.data.message || "Registration failed. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Username</label>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <label>Email</label>
      <input
        type="text"
        placeholder="Enter email id"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label>Password</label>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Register</button>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>} {/* Display error message */}
    </form>
  );
};

export default Register;
