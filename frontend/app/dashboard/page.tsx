"use client";

import { useAuth } from "@/context/AuthContext";

export default function DashboardHome() {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      <div className="border p-4">
        <h2 className="font-semibold">Profile</h2>
        <p><b>Name:</b> {user.name}</p>
        <p><b>Email:</b> {user.email}</p>
      </div>
    </div>
  );
}
