import React, { useState } from "react";
import { auth } from "../firebase-config.js";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const createAccount = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div>
      <form onSubmit={createAccount}>
        <h1>Create a new account.</h1>
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
        <button type="submit">Sign Up</button>
        <br />
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
}
