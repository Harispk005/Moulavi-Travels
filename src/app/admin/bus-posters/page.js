"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import { ArrowLeft, ImageIcon, Upload, Trash2, Eye, Plus, FileImage, X, Download, Calendar } from "lucide-react"

export default function BusPosterEditor() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [posters, setPosters] = useState([])
  const [newPoster, setNewPoster] = useState({ image: null, desc: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [previewImage, setPreviewImage] = useState(null)
  const [dragActive, setDragActive] = useState(false)

  const fetchPosters = async (token) => {
    try {
      const res = await axios.get("https://moulavitravels-backend.onrender.com/bus-posters", {
        headers: { Authorization: `Bearer ${token}` },
      })
      setPosters(res.data)
    } catch (err) {
      console.error("❌ Error fetching posters:", err.message)
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
        fetchPosters(token)
      })
      .catch((err) => {
        console.error("❌ Token invalid:", err.response?.data || err.message)
        localStorage.removeItem("token")
        router.replace("/login")
      })
  }, [router])

  const handleFileSelect = (file) => {
    if (file && file.type.startsWith("image/")) {
      setNewPoster({ ...newPoster, image: file })
      const reader = new FileReader()
      reader.onload = (e) => setPreviewImage(e.target.result)
      reader.readAsDataURL(file)
    }
  }

  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelect(e.dataTransfer.files[0])
    }
  }

  const handleAddPoster = async () => {
    const token = localStorage.getItem("token")
    if (!newPoster.image || !newPoster.desc) return alert("Please provide an image and description")
    setIsSubmitting(true)

    try {
      const formData = new FormData()
      formData.append("image", newPoster.image)
      formData.append("desc", newPoster.desc)

      await axios.post("https://moulavitravels-backend.onrender.com/bus-posters", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      })

      setNewPoster({ image: null, desc: "" })
      setPreviewImage(null)
      await fetchPosters(token)
    } catch (err) {
      alert(err.response?.data?.error || "Error uploading poster")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleDeletePoster = async (id) => {
    const token = localStorage.getItem("token")
    if (!confirm("Are you sure you want to delete this poster?")) return

    try {
      await axios.delete(`https://moulavitravels-backend.onrender.com/bus-posters/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      await fetchPosters(token)
    } catch (err) {
      alert("Failed to delete poster")
      console.error(err)
    }
  }

  const clearPreview = () => {
    setNewPoster({ ...newPoster, image: null })
    setPreviewImage(null)
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-purple-500 border-t-transparent mx-auto mb-4"></div>
          <p className="text-xl font-semibold text-white">Loading Bus Posters...</p>
          <p className="text-purple-200 text-sm mt-2">Fetching your promotional content</p>
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
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl">
                  <ImageIcon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white">Bus Poster Editor</h1>
                  <p className="text-purple-200 text-sm">Manage promotional posters and images</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right hidden sm:block">
                <p className="text-white font-medium">{posters.length} Posters</p>
                <p className="text-purple-200 text-sm">Active content</p>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-200 text-sm font-semibold uppercase tracking-wide">Total Posters</p>
                  <p className="text-3xl font-bold text-white mt-2">{posters.length}</p>
                </div>
                <div className="p-3 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl">
                  <ImageIcon className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>

            {/* <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-200 text-sm font-semibold uppercase tracking-wide">Active Content</p>
                  <p className="text-3xl font-bold text-white mt-2">{posters.length}</p>
                </div>
                <div className="p-3 bg-gradient-to-br from-green-500 to-green-600 rounded-xl">
                  <Eye className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-200 text-sm font-semibold uppercase tracking-wide">Last Updated</p>
                  <p className="text-3xl font-bold text-white mt-2">Today</p>
                </div>
                <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl">
                  <Calendar className="h-8 w-8 text-white" />
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
                  <Upload className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Posters Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">Current Bus Posters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {posters.map((poster, idx) => (
              <div
                key={poster._id ?? idx}
                className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105"
              >
                {/* Image Container */}
                <div className="relative mb-4 overflow-hidden rounded-xl">
                  <img
                    src={poster.image ?? ""}
                    alt="Bus Poster"
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = "/placeholder.svg?height=192&width=384"
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <button
                    onClick={() => handleDeletePoster(poster._id)}
                    className="absolute top-3 right-3 flex items-center justify-center w-8 h-8 bg-red-500/80 hover:bg-red-500 backdrop-blur-sm rounded-lg text-white transition-all duration-200 hover:scale-110 opacity-0 group-hover:opacity-100"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => window.open(poster.image, "_blank")}
                    className="absolute top-3 left-3 flex items-center justify-center w-8 h-8 bg-blue-500/80 hover:bg-blue-500 backdrop-blur-sm rounded-lg text-white transition-all duration-200 hover:scale-110 opacity-0 group-hover:opacity-100"
                  >
                    <Eye className="h-4 w-4" />
                  </button>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-orange-300 bg-orange-500/30 px-3 py-1 rounded-full border border-orange-400/30">
                      Poster #{idx + 1}
                    </span>
                    <button
                      onClick={() => {
                        const link = document.createElement("a")
                        link.href = poster.image
                        link.download = `poster-${idx + 1}.jpg`
                        link.click()
                      }}
                      className="flex items-center text-purple-300 hover:text-white transition-colors text-sm"
                    >
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </button>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-purple-200 mb-1 uppercase tracking-wide">
                      Description
                    </label>
                    <p className="text-white text-sm leading-relaxed bg-white/5 p-3 rounded-lg border border-white/10">
                      {poster.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upload New Poster Section */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <div className="flex items-center space-x-3 mb-8">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl">
              <Plus className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Upload New Bus Poster</h3>
              <p className="text-purple-200">Add promotional content for your bus services</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* File Upload Area */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-purple-200 mb-3 uppercase tracking-wide">
                  Poster Image
                </label>
                <div
                  className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all duration-200 ${
                    dragActive
                      ? "border-orange-400 bg-orange-500/10"
                      : "border-white/20 hover:border-orange-400/50 hover:bg-white/5"
                  }`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileSelect(e.target.files[0])}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="space-y-4">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl mx-auto">
                      <FileImage className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-lg">Drop your image here</p>
                      <p className="text-purple-200 text-sm">or click to browse files</p>
                    </div>
                    <p className="text-purple-300 text-xs">Supports: JPG, PNG, GIF (Max: 10MB)</p>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-purple-200 mb-2 uppercase tracking-wide">
                  Poster Description
                </label>
                <textarea
                  rows={4}
                  value={newPoster.desc}
                  onChange={(e) => setNewPoster({ ...newPoster, desc: e.target.value })}
                  placeholder="Describe the poster content, promotion details, or campaign information"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 resize-none"
                />
              </div>
            </div>

            {/* Preview Area */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-purple-200 mb-3 uppercase tracking-wide">
                  Preview
                </label>
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 min-h-[300px] flex items-center justify-center">
                  {previewImage ? (
                    <div className="relative w-full">
                      <img
                        src={previewImage || "/placeholder.svg"}
                        alt="Preview"
                        className="w-full h-64 object-cover rounded-lg"
                      />
                      <button
                        onClick={clearPreview}
                        className="absolute top-2 right-2 flex items-center justify-center w-8 h-8 bg-red-500/80 hover:bg-red-500 backdrop-blur-sm rounded-lg text-white transition-all duration-200 hover:scale-110"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ) : (
                    <div className="text-center">
                      <div className="flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mx-auto mb-4">
                        <ImageIcon className="h-8 w-8 text-purple-300" />
                      </div>
                      <p className="text-purple-300">No image selected</p>
                      <p className="text-purple-400 text-sm mt-1">Upload an image to see preview</p>
                    </div>
                  )}
                </div>
              </div>

              <button
                onClick={handleAddPoster}
                disabled={isSubmitting || !newPoster.image || !newPoster.desc.trim()}
                className="w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2"></div>
                    Uploading Poster...
                  </>
                ) : (
                  <>
                    <Upload className="h-5 w-5 mr-2" />
                    Upload Poster
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6">Quick Actions</h3>
          <div className="flex flex-wrap gap-4">
            <button
              className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105 shadow-lg"
              onClick={() => router.push("/admin/bus-services")}
            >
              <ImageIcon className="h-5 w-5 mr-2" />
              Manage Services
            </button>
            <button
              className="flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105 shadow-lg"
              onClick={() => router.push("/admin/bus-timing")}
            >
              <Calendar className="h-5 w-5 mr-2" />
              View Schedules
            </button>
            <button
              className="flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105 shadow-lg"
              onClick={() => window.open("/", "_blank")}
            >
              <Eye className="h-5 w-5 mr-2" />
              Preview Site
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
