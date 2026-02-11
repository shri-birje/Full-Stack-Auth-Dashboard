"use client";

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const { logout } = useAuth();

  return (
    <nav className="flex items-center justify-between border-b p-4">
      <div className="flex gap-4">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/dashboard/tasks">Tasks</Link>
      </div>
      <button onClick={logout} className="text-red-600">
        Logout
      </button>
    </nav>
  );
}
