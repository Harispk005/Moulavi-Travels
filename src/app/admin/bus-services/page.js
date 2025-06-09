"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import { Edit3, Trash2, Plus, Save, X, ArrowLeft, Bus, Eye, MapPin } from "lucide-react"

export default function BusServiceEditor() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [services, setServices] = useState([])
  const [newService, setNewService] = useState({ title: "", desc: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Track which service is being edited by ID
  const [editingServiceId, setEditingServiceId] = useState(null)
  // Temp state for edited service fields
  const [editedService, setEditedService] = useState({ title: "", desc: "" })

  const fetchServices = async (token) => {
    try {
      const res = await axios.get("https://moulavitravels-backend.onrender.com/bus-services", {
        headers: { Authorization: `Bearer ${token}` },
      })
      setServices(res.data)
    } catch (err) {
      console.error("❌ Error fetching services:", err.message)
    }
  }

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
          headers: { Authorization: `Bearer ${token}` },
        },
      )
      .then(() => {
        setIsLoading(false)
        fetchServices(token)
      })
      .catch((err) => {
        console.error("❌ Token invalid:", err.response?.data || err.message)
        localStorage.removeItem("token")
        router.replace("/login")
      })
  }, [router])

  const handleAddService = async () => {
    const token = localStorage.getItem("token")
    setIsSubmitting(true)
    try {
      const res = await axios.post("https://moulavitravels-backend.onrender.com/bus-services", newService, {
        headers: { Authorization: `Bearer ${token}` },
      })
      // Refetch the entire updated list
      await fetchServices(token)
      setNewService({ title: "", desc: "" })
    } catch (err) {
      alert(err.response?.data?.error || "Error adding bus service")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleEditClick = (service) => {
    setEditingServiceId(service._id)
    setEditedService({ title: service.title, desc: service.desc })
  }

  const handleCancelEdit = () => {
    setEditingServiceId(null)
    setEditedService({ title: "", desc: "" })
  }

  const handleSaveEdit = async (serviceId) => {
    const token = localStorage.getItem("token")
    if (!token) return
    setIsSubmitting(true)
    try {
      await axios.put(`https://moulavitravels-backend.onrender.com/bus-services/${serviceId}`, editedService, {
        headers: { Authorization: `Bearer ${token}` },
      })
      // Refetch fresh list
      await fetchServices(token)
      setEditingServiceId(null)
      setEditedService({ title: "", desc: "" })
    } catch (err) {
      alert(err.response?.data?.error || "Error updating bus service")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleDelete = async (serviceId) => {
    const token = localStorage.getItem("token")
    if (!token) return

    if (!confirm("Are you sure you want to delete this bus service?")) return

    setIsSubmitting(true)
    try {
      await axios.delete(`https://moulavitravels-backend.onrender.com/bus-services/${serviceId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      setServices((prev) => prev.filter((item) => item._id !== serviceId))
    } catch (err) {
      alert(err.response?.data?.error || "Error deleting bus service")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-purple-500 border-t-transparent mx-auto mb-4"></div>
          <p className="text-xl font-semibold text-white">Loading Bus Services...</p>
          <p className="text-purple-200 text-sm mt-2">Fetching your routes and services</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-6">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => router.back()}
                className="flex items-center justify-center w-10 h-10 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white transition-all duration-200 hover:scale-105"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl">
                  <Bus className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white">Bus Services Editor</h1>
                  <p className="text-purple-200 text-sm">Manage your bus routes and services</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right hidden sm:block">
                <p className="text-white font-medium">{services.length} Services</p>
                <p className="text-purple-200 text-sm">Active routes</p>
              </div>
              <button
                onClick={() => window.open("/", "_blank")}
                className="flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white font-medium transition-all duration-200 hover:scale-105"
              >
                <Eye className="h-4 w-4 mr-2" />
                Preview
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Section */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-200 text-sm font-semibold uppercase tracking-wide">Total Services</p>
                  <p className="text-3xl font-bold text-white mt-2">{services.length}</p>
                </div>
                <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl">
                  <Bus className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>

            {/* <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-200 text-sm font-semibold uppercase tracking-wide">Active Routes</p>
                  <p className="text-3xl font-bold text-white mt-2">{services.length}</p>
                </div>
                <div className="p-3 bg-gradient-to-br from-green-500 to-green-600 rounded-xl">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
              </div>
            </div> */}

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-200 text-sm font-semibold uppercase tracking-wide">Status</p>
                  <p className="text-3xl font-bold text-white mt-2">Live</p>
                </div>
                <div className="p-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl">
                  <Eye className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>

            <a href="#add-new-service" className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-200 text-sm font-semibold uppercase tracking-wide">Add New</p>
                  <p className="text-3xl font-bold text-white mt-2">Ready</p>
                </div>
                <div className="p-3 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl">
                  <Plus className="h-8 w-8 text-white" />
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">Current Bus Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service._id ?? index}
                className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105"
              >
                {/* Header with actions */}
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-bold text-blue-300 bg-blue-500/30 px-3 py-1 rounded-full border border-blue-400/30">
                      Service #{index + 1}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    {editingServiceId === service._id ? (
                      <>
                        <button
                          onClick={() => handleSaveEdit(service._id)}
                          disabled={isSubmitting}
                          className="flex items-center px-3 py-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-sm font-medium rounded-lg transition-all duration-200 hover:scale-105 disabled:opacity-50"
                        >
                          <Save className="h-4 w-4 mr-1" />
                          Save
                        </button>
                        <button
                          onClick={handleCancelEdit}
                          disabled={isSubmitting}
                          className="flex items-center px-3 py-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-medium rounded-lg transition-all duration-200 hover:scale-105"
                        >
                          <X className="h-4 w-4 mr-1" />
                          Cancel
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => handleEditClick(service)}
                          className="flex items-center px-3 py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-sm font-medium rounded-lg transition-all duration-200 hover:scale-105"
                        >
                          <Edit3 className="h-4 w-4 mr-1" />
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(service._id)}
                          className="flex items-center px-3 py-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white text-sm font-medium rounded-lg transition-all duration-200 hover:scale-105"
                        >
                          <Trash2 className="h-4 w-4 mr-1" />
                          Delete
                        </button>
                      </>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-purple-200 mb-2 uppercase tracking-wide">
                      Service Title
                    </label>
                    <input
                      type="text"
                      value={editingServiceId === service._id ? editedService.title : service.title}
                      onChange={(e) =>
                        editingServiceId === service._id &&
                        setEditedService({ ...editedService, title: e.target.value })
                      }
                      readOnly={editingServiceId !== service._id}
                      className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 ${
                        editingServiceId === service._id
                          ? "bg-white/20 border-blue-400/50 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          : "bg-white/5 border-white/10 text-white cursor-default"
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-purple-200 mb-2 uppercase tracking-wide">
                      Service Description
                    </label>
                    <textarea
                      rows={4}
                      value={editingServiceId === service._id ? editedService.desc : service.desc}
                      onChange={(e) =>
                        editingServiceId === service._id && setEditedService({ ...editedService, desc: e.target.value })
                      }
                      readOnly={editingServiceId !== service._id}
                      className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 resize-none ${
                        editingServiceId === service._id
                          ? "bg-white/20 border-blue-400/50 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          : "bg-white/5 border-white/10 text-white cursor-default"
                      }`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Add New Service Section */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8" id="add-new-service">
          <div className="flex items-center space-x-3 mb-6">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl">
              <Plus className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Add New Bus Service</h3>
              <p className="text-purple-200">Create a new bus service for your customers</p>
            </div>
          </div>

          <div className="grid gap-6">
            <div>
              <label className="block text-sm font-semibold text-purple-200 mb-2 uppercase tracking-wide">
                Service Title
              </label>
              <input
                type="text"
                value={newService.title}
                onChange={(e) => setNewService({ ...newService, title: e.target.value })}
                placeholder="Enter service name (e.g., Express Route to Chennai)"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-purple-200 mb-2 uppercase tracking-wide">
                Service Description
              </label>
              <textarea
                rows={4}
                value={newService.desc}
                onChange={(e) => setNewService({ ...newService, desc: e.target.value })}
                placeholder="Describe the service details, timings, amenities, and route information"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
              />
            </div>

            <button
              onClick={handleAddService}
              disabled={isSubmitting || !newService.title.trim() || !newService.desc.trim()}
              className="flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2"></div>
                  Adding Service...
                </>
              ) : (
                <>
                  <Bus className="h-5 w-5 mr-2" />
                  Add Bus Service
                </>
              )}
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6">Quick Actions</h3>
          <div className="flex flex-wrap gap-4">
            <button
              className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105 shadow-lg"
              onClick={() => router.push("/admin/bus-timing")}
            >
              <MapPin className="h-5 w-5 mr-2" />
              Manage Timings
            </button>
            <button
              className="flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105 shadow-lg"
              onClick={() => router.push("/admin/bus-posters")}
            >
              <Eye className="h-5 w-5 mr-2" />
              View Posters
            </button>
            <button
              className="flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105 shadow-lg"
              onClick={() => window.open("/", "_blank")}
            >
              <Bus className="h-5 w-5 mr-2" />
              Preview Site
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
