"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import { Edit3, Trash2, Plus, Save, X, ArrowLeft, Sparkles, Eye } from "lucide-react"

export default function HeroEditor() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [heroes, setHeroes] = useState([])
  const [newHero, setNewHero] = useState({ title: "", desc: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Track which hero is currently in edit mode by ID
  const [editingHeroId, setEditingHeroId] = useState(null)
  // Temporary state for edited hero fields
  const [editedHero, setEditedHero] = useState({ title: "", desc: "" })

  const fetchHeroes = async (token) => {
    try {
      const res = await axios.get("https://moulavitravels-backend.onrender.com/hero", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      setHeroes(res.data)
    } catch (err) {
      console.error("❌ Error fetching heroes:", err.message)
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
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then(() => {
        setIsLoading(false)
        fetchHeroes(token)
      })
      .catch((err) => {
        console.error("❌ Token invalid:", err.response?.data || err.message)
        localStorage.removeItem("token")
        router.replace("/login")
      })
  }, [router])

  const handleAddHero = async () => {
    const token = localStorage.getItem("token")
    if (!token || heroes.length >= 3) return

    setIsSubmitting(true)
    try {
      const res = await axios.post("https://moulavitravels-backend.onrender.com/hero", newHero, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      setHeroes([...heroes, res.data.hero])
      setNewHero({ title: "", desc: "" })
    } catch (err) {
      alert(err.response?.data?.error || "Error adding hero item")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Start editing - populate editedHero state with selected hero data
  const handleEditClick = (hero) => {
    setEditingHeroId(hero._id)
    setEditedHero({ title: hero.title, desc: hero.desc })
  }

  // Cancel editing
  const handleCancelEdit = () => {
    setEditingHeroId(null)
    setEditedHero({ title: "", desc: "" })
  }

  // Save edited hero to API
  const handleSaveEdit = async (heroId) => {
    const token = localStorage.getItem("token")
    if (!token) return

    setIsSubmitting(true)
    try {
      const res = await axios.put(`https://moulavitravels-backend.onrender.com/hero/${heroId}`, editedHero, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      // Update local state
      setHeroes((prevHeroes) => prevHeroes.map((hero) => (hero._id === heroId ? res.data.hero : hero)))
      setEditingHeroId(null)
      setEditedHero({ title: "", desc: "" })
    } catch (err) {
      alert(err.response?.data?.error || "Error updating hero item")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Delete hero item
  const handleDelete = async (heroId) => {
    const token = localStorage.getItem("token")
    if (!token) return

    if (!confirm("Are you sure you want to delete this hero item?")) return

    setIsSubmitting(true)
    try {
      await axios.delete(`https://moulavitravels-backend.onrender.com/hero/${heroId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      setHeroes((prevHeroes) => prevHeroes.filter((hero) => hero._id !== heroId))
    } catch (err) {
      alert(err.response?.data?.error || "Error deleting hero item")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-purple-500 border-t-transparent mx-auto mb-4"></div>
          <p className="text-xl font-semibold text-white">Loading Hero Editor...</p>
          <p className="text-purple-200 text-sm mt-2">Fetching your content</p>
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
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white">Hero Section Editor</h1>
                  <p className="text-purple-200 text-sm">Manage your homepage hero content</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right hidden sm:block">
                <p className="text-white font-medium">{heroes.length}/3 Heroes</p>
                <p className="text-purple-200 text-sm">Content items</p>
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
                  <p className="text-purple-200 text-sm font-semibold uppercase tracking-wide">Active Heroes</p>
                  <p className="text-3xl font-bold text-white mt-2">{heroes.length}</p>
                </div>
                <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-200 text-sm font-semibold uppercase tracking-wide">Available Slots</p>
                  <p className="text-3xl font-bold text-white mt-2">{3 - heroes.length}</p>
                </div>
                <div className="p-3 bg-gradient-to-br from-green-500 to-green-600 rounded-xl">
                  <Plus className="h-8 w-8 text-white" />
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
                  <Eye className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Items Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">Current Hero Items</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {heroes.map((hero, index) => (
              <div
                key={hero._id}
                className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105"
              >
                {/* Header with actions */}
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-bold text-purple-300 bg-purple-500/30 px-3 py-1 rounded-full border border-purple-400/30">
                      Hero #{index + 1}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    {editingHeroId === hero._id ? (
                      <>
                        <button
                          onClick={() => handleSaveEdit(hero._id)}
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
                          onClick={() => handleEditClick(hero)}
                          className="flex items-center px-3 py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-sm font-medium rounded-lg transition-all duration-200 hover:scale-105"
                        >
                          <Edit3 className="h-4 w-4 mr-1" />
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(hero._id)}
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
                      Title
                    </label>
                    <input
                      type="text"
                      value={editingHeroId === hero._id ? editedHero.title : hero.title}
                      onChange={(e) =>
                        editingHeroId === hero._id && setEditedHero({ ...editedHero, title: e.target.value })
                      }
                      readOnly={editingHeroId !== hero._id}
                      className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 ${
                        editingHeroId === hero._id
                          ? "bg-white/20 border-purple-400/50 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          : "bg-white/5 border-white/10 text-white cursor-default"
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-purple-200 mb-2 uppercase tracking-wide">
                      Description
                    </label>
                    <textarea
                      rows={4}
                      value={editingHeroId === hero._id ? editedHero.desc : hero.desc}
                      onChange={(e) =>
                        editingHeroId === hero._id && setEditedHero({ ...editedHero, desc: e.target.value })
                      }
                      readOnly={editingHeroId !== hero._id}
                      className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 resize-none ${
                        editingHeroId === hero._id
                          ? "bg-white/20 border-purple-400/50 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          : "bg-white/5 border-white/10 text-white cursor-default"
                      }`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Add New Hero Section */}
        {heroes.length < 3 && (
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl">
                <Plus className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Add New Hero</h3>
                <p className="text-purple-200">Create a new hero section for your homepage</p>
              </div>
            </div>

            <div className="grid gap-6">
              <div>
                <label className="block text-sm font-semibold text-purple-200 mb-2 uppercase tracking-wide">
                  Hero Title
                </label>
                <input
                  type="text"
                  value={newHero.title}
                  onChange={(e) => setNewHero({ ...newHero, title: e.target.value })}
                  placeholder="Enter an engaging title for your hero section"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-purple-200 mb-2 uppercase tracking-wide">
                  Hero Description
                </label>
                <textarea
                  rows={4}
                  value={newHero.desc}
                  onChange={(e) => setNewHero({ ...newHero, desc: e.target.value })}
                  placeholder="Write a compelling description that captures your audience's attention"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none"
                />
              </div>

              <button
                onClick={handleAddHero}
                disabled={isSubmitting || !newHero.title.trim() || !newHero.desc.trim()}
                className="flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2"></div>
                    Adding Hero...
                  </>
                ) : (
                  <>
                    <Plus className="h-5 w-5 mr-2" />
                    Add Hero Section
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {heroes.length >= 3 && (
          <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-400/30 rounded-2xl p-6 text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl mx-auto mb-4">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Maximum Heroes Reached</h3>
            <p className="text-amber-200">
              You&apos;ve reached the maximum limit of 3 hero sections. Delete an existing hero to add a new one.
            </p>
          </div>
        )}
      </main>
    </div>
  )
}
