import React from "react";
import "./SignupScreen.css";

const SignupScreen = () => {
  return (
    <div className="signUpScreen">
      <form>
        <h1>Sign Up</h1>
        <p>Lorem ipsum dolor sit amet adipiscing elit.</p>
        <input type="text" placeholder="Name" />
        <input type="password" placeholder="Password" />
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default SignupScreen;
