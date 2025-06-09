"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import {
  Edit3,
  Trash2,
  Plus,
  Save,
  X,
  ArrowLeft,
  Clock,
  MapPin,
  Eye,
  Calendar,
  CheckCircle,
  XCircle,
} from "lucide-react"

export default function BusTimingEditor() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [timings, setTimings] = useState([])
  const [newTiming, setNewTiming] = useState({
    route: "",
    destination: "",
    time: "",
    daysAvailable: "",
    status: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [editedTiming, setEditedTiming] = useState({
    route: "",
    destination: "",
    time: "",
    daysAvailable: "",
    status: "",
  })

  const fetchTimings = async () => {
    try {
      const res = await axios.get("https://moulavitravels-backend.onrender.com/bus-timing")
      setTimings(res.data)
    } catch (err) {
      console.error("❌ Error fetching bus timings:", err.message)
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
        fetchTimings()
      })
      .catch((err) => {
        localStorage.removeItem("token")
        router.replace("/login")
      })
  }, [router])

  const handleAddTiming = async () => {
    const token = localStorage.getItem("token")
    setIsSubmitting(true)
    try {
      await axios.post("https://moulavitravels-backend.onrender.com/bus-timing", newTiming, {
        headers: { Authorization: `Bearer ${token}` },
      })
      await fetchTimings()
      setNewTiming({ route: "", destination: "", time: "", daysAvailable: "", status: "" })
    } catch (err) {
      alert("Error adding bus timing")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleEditClick = (timing) => {
    setEditingId(timing._id)
    setEditedTiming({ ...timing })
  }

  const handleCancelEdit = () => {
    setEditingId(null)
    setEditedTiming({ route: "", destination: "", time: "", daysAvailable: "", status: "" })
  }

  const handleSaveEdit = async (id) => {
    const token = localStorage.getItem("token")
    setIsSubmitting(true)
    try {
      await axios.put(`https://moulavitravels-backend.onrender.com/bus-timing/${id}`, editedTiming, {
        headers: { Authorization: `Bearer ${token}` },
      })
      await fetchTimings()
      handleCancelEdit()
    } catch (err) {
      alert("Error updating timing")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleDelete = async (id) => {
    const token = localStorage.getItem("token")
    if (!confirm("Are you sure you want to delete this timing?")) return
    setIsSubmitting(true)
    try {
      await axios.delete(`https://moulavitravels-backend.onrender.com/bus-timing/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      setTimings((prev) => prev.filter((t) => t._id !== id))
    } catch (err) {
      alert("Error deleting timing")
    } finally {
      setIsSubmitting(false)
    }
  }

  const availableTimings = timings.filter((t) => t.status === "Available").length
  const unavailableTimings = timings.filter((t) => t.status === "Not Available").length

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-purple-500 border-t-transparent mx-auto mb-4"></div>
          <p className="text-xl font-semibold text-white">Loading Bus Timings...</p>
          <p className="text-purple-200 text-sm mt-2">Fetching schedule information</p>
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
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white">Bus Timing Editor</h1>
                  <p className="text-purple-200 text-sm">Manage schedules and departure times</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right hidden sm:block">
                <p className="text-white font-medium">{timings.length} Schedules</p>
                <p className="text-purple-200 text-sm">{availableTimings} active</p>
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-200 text-sm font-semibold uppercase tracking-wide">Total Schedules</p>
                  <p className="text-3xl font-bold text-white mt-2">{timings.length}</p>
                </div>
                <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-200 text-sm font-semibold uppercase tracking-wide">Available</p>
                  <p className="text-3xl font-bold text-white mt-2">{availableTimings}</p>
                </div>
                <div className="p-3 bg-gradient-to-br from-green-500 to-green-600 rounded-xl">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-200 text-sm font-semibold uppercase tracking-wide">Unavailable</p>
                  <p className="text-3xl font-bold text-white mt-2">{unavailableTimings}</p>
                </div>
                <div className="p-3 bg-gradient-to-br from-red-500 to-red-600 rounded-xl">
                  <XCircle className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-200 text-sm font-semibold uppercase tracking-wide">Status</p>
                  <p className="text-3xl font-bold text-white mt-2">Live</p>
                </div>
                <div className="p-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl">
                  <Clock className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timings Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">Current Bus Schedules</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {timings.map((timing, index) => (
              <div
                key={timing._id}
                className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105"
              >
                {/* Header with actions */}
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-bold text-green-300 bg-green-500/30 px-3 py-1 rounded-full border border-green-400/30">
                      Schedule #{index + 1}
                    </span>
                    <div
                      className={`w-3 h-3 rounded-full ${
                        timing.status === "Available" ? "bg-green-400" : "bg-red-400"
                      }`}
                    ></div>
                  </div>
                  <div className="flex gap-2">
                    {editingId === timing._id ? (
                      <>
                        <button
                          onClick={() => handleSaveEdit(timing._id)}
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
                          onClick={() => handleEditClick(timing)}
                          className="flex items-center px-3 py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-sm font-medium rounded-lg transition-all duration-200 hover:scale-105"
                        >
                          <Edit3 className="h-4 w-4 mr-1" />
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(timing._id)}
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
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-purple-200 mb-2 uppercase tracking-wide">
                        Route
                      </label>
                      <input
                        type="text"
                        value={editingId === timing._id ? editedTiming.route : timing.route}
                        onChange={(e) =>
                          editingId === timing._id && setEditedTiming({ ...editedTiming, route: e.target.value })
                        }
                        readOnly={editingId !== timing._id}
                        className={`w-full px-3 py-2 rounded-lg border transition-all duration-200 text-sm ${
                          editingId === timing._id
                            ? "bg-white/20 border-green-400/50 text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            : "bg-white/5 border-white/10 text-white cursor-default"
                        }`}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-purple-200 mb-2 uppercase tracking-wide">
                        Destination
                      </label>
                      <input
                        type="text"
                        value={editingId === timing._id ? editedTiming.destination : timing.destination}
                        onChange={(e) =>
                          editingId === timing._id && setEditedTiming({ ...editedTiming, destination: e.target.value })
                        }
                        readOnly={editingId !== timing._id}
                        className={`w-full px-3 py-2 rounded-lg border transition-all duration-200 text-sm ${
                          editingId === timing._id
                            ? "bg-white/20 border-green-400/50 text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            : "bg-white/5 border-white/10 text-white cursor-default"
                        }`}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-purple-200 mb-2 uppercase tracking-wide">
                        Departure Time
                      </label>
                      <input
                        type="time"
                        value={editingId === timing._id ? editedTiming.time : timing.time}
                        onChange={(e) =>
                          editingId === timing._id && setEditedTiming({ ...editedTiming, time: e.target.value })
                        }
                        readOnly={editingId !== timing._id}
                        className={`w-full px-3 py-2 rounded-lg border transition-all duration-200 text-sm ${
                          editingId === timing._id
                            ? "bg-white/20 border-green-400/50 text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            : "bg-white/5 border-white/10 text-white cursor-default"
                        }`}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-purple-200 mb-2 uppercase tracking-wide">
                        Days Available
                      </label>
                      <input
                        type="number"
                        min="1"
                        value={editingId === timing._id ? editedTiming.daysAvailable : timing.daysAvailable}
                        onChange={(e) =>
                          editingId === timing._id &&
                          setEditedTiming({ ...editedTiming, daysAvailable: e.target.value })
                        }
                        readOnly={editingId !== timing._id}
                        className={`w-full px-3 py-2 rounded-lg border transition-all duration-200 text-sm ${
                          editingId === timing._id
                            ? "bg-white/20 border-green-400/50 text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            : "bg-white/5 border-white/10 text-white cursor-default"
                        }`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-purple-200 mb-2 uppercase tracking-wide">
                      Status
                    </label>
                    {editingId === timing._id ? (
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name={`status-${timing._id}`}
                            value="Available"
                            checked={editedTiming.status === "Available"}
                            onChange={() => setEditedTiming({ ...editedTiming, status: "Available" })}
                            className="text-green-500 focus:ring-green-500"
                          />
                          <span className="text-white text-sm">Available</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name={`status-${timing._id}`}
                            value="Not Available"
                            checked={editedTiming.status === "Not Available"}
                            onChange={() => setEditedTiming({ ...editedTiming, status: "Not Available" })}
                            className="text-red-500 focus:ring-red-500"
                          />
                          <span className="text-white text-sm">Not Available</span>
                        </label>
                      </div>
                    ) : (
                      <div
                        className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                          timing.status === "Available"
                            ? "bg-green-500/20 text-green-300 border border-green-400/30"
                            : "bg-red-500/20 text-red-300 border border-red-400/30"
                        }`}
                      >
                        {timing.status === "Available" ? (
                          <CheckCircle className="h-4 w-4 mr-1" />
                        ) : (
                          <XCircle className="h-4 w-4 mr-1" />
                        )}
                        {timing.status}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Add New Timing Section */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl">
              <Plus className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Add New Bus Schedule</h3>
              <p className="text-purple-200">Create a new timing schedule for your bus service</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-purple-200 mb-2 uppercase tracking-wide">
                Route Name
              </label>
              <input
                type="text"
                value={newTiming.route}
                onChange={(e) => setNewTiming({ ...newTiming, route: e.target.value })}
                placeholder="Enter route name (e.g., Route A, Express Line)"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-purple-200 mb-2 uppercase tracking-wide">
                Destination
              </label>
              <input
                type="text"
                value={newTiming.destination}
                onChange={(e) => setNewTiming({ ...newTiming, destination: e.target.value })}
                placeholder="Enter destination city"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-purple-200 mb-2 uppercase tracking-wide">
                Departure Time
              </label>
              <input
                type="time"
                value={newTiming.time}
                onChange={(e) => setNewTiming({ ...newTiming, time: e.target.value })}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-purple-200 mb-2 uppercase tracking-wide">
                Days Available
              </label>
              <input
                type="number"
                min="1"
                value={newTiming.daysAvailable}
                onChange={(e) => setNewTiming({ ...newTiming, daysAvailable: e.target.value })}
                placeholder="Number of days per week"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            <div className="col-span-full">
              <label className="block text-sm font-semibold text-purple-200 mb-3 uppercase tracking-wide">
                Service Status
              </label>
              <div className="flex gap-6">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="radio"
                    name="status"
                    value="Available"
                    checked={newTiming.status === "Available"}
                    onChange={() => setNewTiming({ ...newTiming, status: "Available" })}
                    className="w-4 h-4 text-green-500 focus:ring-green-500 focus:ring-2"
                  />
                  <span className="text-white font-medium group-hover:text-green-300 transition-colors">Available</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="radio"
                    name="status"
                    value="Not Available"
                    checked={newTiming.status === "Not Available"}
                    onChange={() => setNewTiming({ ...newTiming, status: "Not Available" })}
                    className="w-4 h-4 text-red-500 focus:ring-red-500 focus:ring-2"
                  />
                  <span className="text-white font-medium group-hover:text-red-300 transition-colors">
                    Not Available
                  </span>
                </label>
              </div>
            </div>
          </div>

          <button
            onClick={handleAddTiming}
            disabled={
              isSubmitting ||
              !newTiming.route.trim() ||
              !newTiming.destination.trim() ||
              !newTiming.time ||
              !newTiming.daysAvailable ||
              !newTiming.status
            }
            className="mt-8 flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2"></div>
                Adding Schedule...
              </>
            ) : (
              <>
                <Clock className="h-5 w-5 mr-2" />
                Add Bus Schedule
              </>
            )}
          </button>
        </div>

        {/* Quick Actions */}
        <div className="mt-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6">Quick Actions</h3>
          <div className="flex flex-wrap gap-4">
            <button
              className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105 shadow-lg"
              onClick={() => router.push("/admin/bus-services")}
            >
              <MapPin className="h-5 w-5 mr-2" />
              Manage Services
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
              <Calendar className="h-5 w-5 mr-2" />
              Preview Schedule
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
