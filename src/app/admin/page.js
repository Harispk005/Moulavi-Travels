'use client'

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Admin() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.replace("/login");
      return;
    }
    axios.post("https://moulavitravels-backend.onrender.com/verify-token", {}, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }).then((res) => {
      console.log("✅ Token valid:", res.data);
      setIsLoading(false);
    }).catch((err) => {
      console.error("❌ Token invalid:", err.response?.data || err.message);
      localStorage.removeItem("token");
      router.replace("/login");
    });

  }, [router]);

  if (isLoading) return null;

  return (
    <div className=" p-4 md:p-8 text-white bg-gray-900 min-h-screen">
      <h1 className="text-4xl font-bold mb-6">Welcome to Admin Page</h1>
      <p></p>
      <a href="/admin/hero">Hero</a>
    </div>
  );
}
