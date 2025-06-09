"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import { Bus, Clock, ImageIcon, Lock, LogOut, Shield, Activity, Calendar, BarChart3 } from "lucide-react"

export default function Admin() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const token = localStorage.getItem("token")

    if (!token) {
      router.replace("/login")
      return
    }
    axios
      .post(
        "https://moulavitravels-backend.onrender.com/verify-token",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then((res) => {
        console.log("✅ Token valid:", res.data)
        setIsLoading(false)
      })
      .catch((err) => {
        console.error("❌ Token invalid:", err.response?.data || err.message)
        localStorage.removeItem("token")
        router.replace("/login")
      })
  }, [router])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("token")
    router.replace("/login")
  }

  const adminSections = [
    {
      title: "Hero Section",
      description: "Manage homepage hero content and banners",
      icon: ImageIcon,
      href: "/admin/hero",
      color: "from-purple-500 to-purple-600",
      stats: "3 Active",
    },
    {
      title: "Bus Services",
      description: "Configure available bus routes and services",
      icon: Bus,
      href: "/admin/bus-services",
      color: "from-blue-500 to-blue-600",
      stats: "12 Routes",
    },
    {
      title: "Bus Timing",
      description: "Set and update bus schedules and timings",
      icon: Clock,
      href: "/admin/bus-timing",
      color: "from-green-500 to-green-600",
      stats: "24 Schedules",
    },
    {
      title: "Bus Posters",
      description: "Upload and manage promotional posters",
      icon: Activity,
      href: "/admin/bus-posters",
      color: "from-orange-500 to-orange-600",
      stats: "8 Posters",
    },
    {
      title: "Change Password",
      description: "Update your admin account security",
      icon: Lock,
      href: "/admin/change-password",
      color: "from-red-500 to-red-600",
      stats: "Security",
    },
  ]

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-purple-500 border-t-transparent"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl shadow-lg">
                <Shield className="h-7 w-7 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white tracking-tight">Moulavi Travels</h1>
                <p className="text-purple-200 text-sm font-medium">Admin Dashboard</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="text-right hidden sm:block">
                <p className="text-white font-semibold text-lg">Welcome back, Admin</p>
                <p className="text-purple-200 text-sm font-mono">
                  {currentTime.toLocaleDateString()} • {currentTime.toLocaleTimeString()}
                </p>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white font-medium transition-all duration-200 hover:scale-105"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-12 text-center">
          <h2 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Dashboard Overview
          </h2>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Manage your travel services and content from this centralized control panel
          </p>
        </div>

        {/* Stats Cards */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-200 text-sm font-semibold uppercase tracking-wide">Total Routes</p>
                <p className="text-3xl font-bold text-white mt-2">12</p>
                <p className="text-green-400 text-sm mt-1">+2 this month</p>
              </div>
              <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl">
                <Bus className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-200 text-sm font-semibold uppercase tracking-wide">Active Schedules</p>
                <p className="text-3xl font-bold text-white mt-2">24</p>
                <p className="text-green-400 text-sm mt-1">All running</p>
              </div>
              <div className="p-3 bg-gradient-to-br from-green-500 to-green-600 rounded-xl">
                <Calendar className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-200 text-sm font-semibold uppercase tracking-wide">Content Items</p>
                <p className="text-3xl font-bold text-white mt-2">11</p>
                <p className="text-yellow-400 text-sm mt-1">3 pending</p>
              </div>
              <div className="p-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-200 text-sm font-semibold uppercase tracking-wide">System Status</p>
                <p className="text-3xl font-bold text-white mt-2">Online</p>
                <p className="text-green-400 text-sm mt-1">99.9% uptime</p>
              </div>
              <div className="p-3 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl">
                <Activity className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>
        </div> */}

        {/* Admin Sections Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-8">Management Sections</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {adminSections.map((section, index) => {
              const IconComponent = section.icon
              return (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-2xl"
                  onClick={() => router.push(section.href)}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`p-4 rounded-2xl bg-gradient-to-br ${section.color} group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-white group-hover:text-purple-200 transition-colors mb-2">
                    {section.title}
                  </h4>
                  <p className="text-purple-200 group-hover:text-purple-100 transition-colors leading-relaxed">
                    {section.description}
                  </p>
                  <div className="mt-4 flex items-center text-purple-300 group-hover:text-white transition-colors">
                    <span className="text-sm font-medium">Manage →</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6">Quick Actions</h3>
          <div className="flex flex-wrap gap-4">
            <button
              className="flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105 shadow-lg"
              onClick={() => router.push("/admin/bus-services")}
            >
              <Bus className="h-5 w-5 mr-2" />
              Add New Route
            </button>
            <button
              className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105 shadow-lg"
              onClick={() => router.push("/admin/bus-timing")}
            >
              <Clock className="h-5 w-5 mr-2" />
              Update Schedule
            </button>
            <button
              className="flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105 shadow-lg"
              onClick={() => router.push("/admin/hero")}
            >
              <ImageIcon className="h-5 w-5 mr-2" />
              Update Hero
            </button>
            <button
              className="flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105 shadow-lg"
              onClick={() => router.push("/admin/bus-posters")}
            >
              <Activity className="h-5 w-5 mr-2" />
              Add Poster
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-purple-300 text-sm">
            © 2025 Moulavi Travels. All rights reserved.
          </p>
        </div>
      </main>
    </div>
  )
}
