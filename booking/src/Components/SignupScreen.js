import React, { useState } from "react";
import "./SignupScreen.css";
import { useNavigate } from "react-router-dom";

const SignupScreen = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    navigate("/movies");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignup();
  };
  return (
    <div className="signUpScreen">
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <p>Lorem ipsum dolor sit amet adipiscing elit.</p>
        <input
          type="text"
          id="username"
          placeholder="Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupScreen;
