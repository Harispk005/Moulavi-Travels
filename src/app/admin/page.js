'use client'

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Admin() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true); // block render till check is done

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.replace("/login"); // redirect faster
    } else {
      setIsLoading(false); // allow page to render
    }
  }, [router]);

  if (isLoading) {
    return null; // or add a spinner if you're feeling fancy
  }

  return (
    <div className="p-8 text-white bg-gray-900 min-h-screen">
      <h1 className="text-4xl font-bold mb-6">Welcome to Admin Page</h1>
      <p>Only authorized users can see this bitch.</p>
    </div>
  );
}
