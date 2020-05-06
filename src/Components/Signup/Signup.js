import React from "react";
import "./Signup.scss";
import SignupIntro from "./SignupIntro";
import SignupForm from "./SignupForm";

const Signup = () => (
  <main className="signup">
    <SignupIntro />
    <SignupForm />
  </main>
);

export default Signup;
