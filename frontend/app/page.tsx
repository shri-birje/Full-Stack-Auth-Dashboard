import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">Scalable Web App</h1>
      <p className="text-gray-600">Frontend Developer Intern Assignment</p>

      <div className="flex gap-4">
        <Link className="border px-4 py-2" href="/login">Login</Link>
        <Link className="border px-4 py-2" href="/register">Register</Link>
      </div>
    </div>
  );
}
