'use client'

import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");



const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post("https://moulavitravels-backend.onrender.com/login", {
      username: username,
      password: password
    });

    console.log("Login successful:", res.data);
    alert("Login successful!");
    window.location.href = "/admin"; // Redirect to admin page after login

    // Save the token in localStorage, Mommy fucking says this is simple & common
    localStorage.setItem("token", res.data.token);

  

  } catch (err) {
    if (err.response && err.response.data && err.response.data.error) {
      alert(err.response.data.error);
    } else {
      alert("Something went wrong. Please try again.");
    }
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <div className="max-w-md w-full bg-gray-800 p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Login</h2>
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label htmlFor="username" className="block text-gray-300">username</label>
            <input
              type="text"
              id="username"
              className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={username}
              onChange={(e) => setusername(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-300">Password</label>
            <input
              type="password"
              id="password"
              className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md transition duration-200"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
