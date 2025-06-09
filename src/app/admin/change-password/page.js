'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function ChangePasswordPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [form, setForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.replace("/login");
      return;
    }

    axios.post("https://moulavitravels-backend.onrender.com/verify-token", {}, {
      headers: { Authorization: `Bearer ${token}` }
    }).then(() => {
      setIsLoading(false);
    }).catch(() => {
      localStorage.removeItem("token");
      router.replace("/login");
    });
  }, [router]);

  const handleChangePassword = async () => {
    if (!form.currentPassword || !form.newPassword || !form.confirmPassword) {
      return alert("All fields are required");
    }

    if (form.newPassword !== form.confirmPassword) {
      return alert("New passwords do not match");
    }

    setIsSubmitting(true);
    const token = localStorage.getItem("token");

    try {
      const res = await axios.put("http://localhost:4000/change-password", {
        currentPassword: form.currentPassword,
        newPassword: form.newPassword
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });

      alert(res.data.message || "Password changed successfully!");
      setForm({ currentPassword: '', newPassword: '', confirmPassword: '' });
    } catch (err) {
      alert(err.response?.data?.error || "Failed to change password");
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderInput = (label, fieldKey, showKey) => (
    <div className="relative">
      <input
        type={showPassword[showKey] ? "text" : "password"}
        value={form[fieldKey]}
        onChange={(e) => setForm({ ...form, [fieldKey]: e.target.value })}
        placeholder={label}
        className="w-full border border-gray-600 bg-gray-800 text-white px-4 py-2 pr-10 rounded-lg"
      />
      <span
        onClick={() => setShowPassword(prev => ({ ...prev, [showKey]: !prev[showKey] }))}
        className="absolute top-2.5 right-3 cursor-pointer text-white select-none"
        title={showPassword[showKey] ? "Hide" : "Show"}
      >
        {showPassword[showKey] ? '🙈' : '👁️'}
      </span>
    </div>
  );

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <p className="text-xl font-semibold">Loading...</p>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-8 text-white bg-gray-900 min-h-screen">
      <div className="max-w-xl mx-auto bg-gray-800 py-6 px-6 md:px-10 rounded-3xl shadow-xl">
        <h3 className="text-2xl md:text-3xl font-semibold mb-6">Change Password</h3>

        <div className="grid gap-4">
          {renderInput("Current Password", "currentPassword", "current")}
          {renderInput("New Password", "newPassword", "new")}
          {renderInput("Confirm New Password", "confirmPassword", "confirm")}

          <button
            onClick={handleChangePassword}
            disabled={isSubmitting}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg text-white transition"
          >
            {isSubmitting ? "Changing..." : "Change Password"}
          </button>
        </div>
      </div>
    </div>
  );
}
