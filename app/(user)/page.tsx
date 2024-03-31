"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
export default function Home() {
  const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-5 shadow-lg rounded-lg bg-white">
        <h1 className="text-2xl font-bold mb-5 text-center">Welcome to the Home Page</h1>
        <p className="text-center mb-5">This is a simple Home page built with Next.js and styled with Tailwind CSS.</p>
      </div>
    </div>
      <button onClick={() => router.push("/about")}>about</button>
    </main>
  );
}
