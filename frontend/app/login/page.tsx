"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex h-screen items-center justify-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();

          if (!email || !password) {
            alert("Email and password are required");
            return;
          }

          login(email, password);
        }}
        className="w-96 space-y-4 border p-6"
      >
        <h1 className="text-xl font-bold">Login</h1>
        <input className="w-full border p-2" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" className="w-full border p-2" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button className="w-full bg-black text-white p-2">Login</button>
      </form>
    </div>
  );
}
