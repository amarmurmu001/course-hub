import React, { useState } from "react";
import { auth } from "../firebase-config.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./Signin.css";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const signInAccount = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const signedIn = userCredential.user;
        setUser(signedIn);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div>
      <form onSubmit={signInAccount}>
        <h1>Sign in your account.</h1>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign In</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {user ? (
        <p>Welcome, {user.email}</p>
      ) : (
        <p>You are not Signed In</p>
      )}
    </div>
  );
}
