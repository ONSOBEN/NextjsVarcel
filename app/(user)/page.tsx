"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
export default function Home() {
  const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Home Page</h1>
      <button onClick={() => router.push("/about")}>about</button>
    </main>
  );
}
