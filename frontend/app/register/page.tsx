"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/api";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("Name, email and password are required");
      return;
    }

    await api.post("/auth/register", { name, email, password });
    router.push("/login");
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <form onSubmit={submit} className="w-96 space-y-4 border p-6">
        <h1 className="text-xl font-bold">Register</h1>
        <input className="w-full border p-2" placeholder="Name" onChange={(e) => setName(e.target.value)} />
        <input className="w-full border p-2" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" className="w-full border p-2" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button className="w-full bg-black text-white p-2">Create Account</button>
      </form>
    </div>
  );
}
