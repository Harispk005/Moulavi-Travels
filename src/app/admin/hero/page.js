'use client'

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function HeroEditor() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [heroes, setHeroes] = useState([]);
  const [newHero, setNewHero] = useState({ title: '', desc: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Track which hero is currently in edit mode by ID
  const [editingHeroId, setEditingHeroId] = useState(null);
  // Temporary state for edited hero fields
  const [editedHero, setEditedHero] = useState({ title: '', desc: '' });

  const fetchHeroes = async (token) => {
    try {
      const res = await axios.get("https://moulavitravels-backend.onrender.com/hero", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setHeroes(res.data);
    } catch (err) {
      console.error("❌ Error fetching heroes:", err.message);
    }
  };

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
    }).then(() => {
      setIsLoading(false);
      fetchHeroes(token);
    }).catch((err) => {
      console.error("❌ Token invalid:", err.response?.data || err.message);
      localStorage.removeItem("token");
      router.replace("/login");
    });
  }, [router]);

  const handleAddHero = async () => {
    const token = localStorage.getItem("token");
    if (!token || heroes.length >= 3) return;

    setIsSubmitting(true);
    try {
      const res = await axios.post("https://moulavitravels-backend.onrender.com/hero", newHero, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setHeroes([...heroes, res.data.hero]);
      setNewHero({ title: '', desc: '' });
    } catch (err) {
      alert(err.response?.data?.error || "Error adding hero item");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Start editing - populate editedHero state with selected hero data
  const handleEditClick = (hero) => {
    setEditingHeroId(hero._id);
    setEditedHero({ title: hero.title, desc: hero.desc });
  };

  // Cancel editing
  const handleCancelEdit = () => {
    setEditingHeroId(null);
    setEditedHero({ title: '', desc: '' });
  };

  // Save edited hero to API
  const handleSaveEdit = async (heroId) => {
    const token = localStorage.getItem("token");
    if (!token) return;

    setIsSubmitting(true);
    try {
      const res = await axios.put(`https://moulavitravels-backend.onrender.com/hero/${heroId}`, editedHero, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Update local state
      setHeroes((prevHeroes) =>
        prevHeroes.map((hero) =>
          hero._id === heroId ? res.data.hero : hero
        )
      );
      setEditingHeroId(null);
      setEditedHero({ title: '', desc: '' });
    } catch (err) {
      alert(err.response?.data?.error || "Error updating hero item");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Delete hero item
  const handleDelete = async (heroId) => {
    const token = localStorage.getItem("token");
    if (!token) return;

    if (!confirm("Are you sure you want to delete this hero item?")) return;

    setIsSubmitting(true);
    try {
      await axios.delete(`https://moulavitravels-backend.onrender.com/hero/${heroId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setHeroes((prevHeroes) =>
        prevHeroes.filter((hero) => hero._id !== heroId)
      );
    } catch (err) {
      alert(err.response?.data?.error || "Error deleting hero item");
    } finally {
      setIsSubmitting(false);
    }
  };

 if (isLoading) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <p className="text-xl font-semibold">Loading...</p>
    </div>
  );
}

  return (
    <div className="p-4 md:p-8 text-white bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gray-800 py-6 px-4 md:px-8 rounded-3xl shadow-xl">
          <h3 className="font-semibold text-2xl md:text-3xl mb-6">Hero Section Editor</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
            {heroes.map((hero) => (
              <div
                key={hero._id}
                className="bg-gray-900 border border-gray-700 p-6 rounded-2xl shadow-md flex flex-col justify-between"
              >
                <div className="flex justify-end gap-2 mb-4">
                  {editingHeroId === hero._id ? (
                    <>
                      <button
                        onClick={() => handleSaveEdit(hero._id)}
                        disabled={isSubmitting}
                        className="bg-green-600 hover:bg-green-700 text-sm px-4 py-2 rounded-lg transition"
                      >
                        Save
                      </button>
                      <button
                        onClick={handleCancelEdit}
                        disabled={isSubmitting}
                        className="bg-gray-600 hover:bg-gray-700 text-sm px-4 py-2 rounded-lg transition"
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => handleEditClick(hero)}
                        className="bg-indigo-600 hover:bg-indigo-700 text-sm px-4 py-2 rounded-lg transition"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(hero._id)}
                        className="bg-red-600 hover:bg-red-700 text-sm px-4 py-2 rounded-lg transition"
                      >
                        Delete
                      </button>
                    </>
                  )}
                </div>

                <div className="flex flex-col gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Title</label>
                    <input
                      type="text"
                      value={editingHeroId === hero._id ? editedHero.title : hero.title}
                      onChange={(e) => editingHeroId === hero._id && setEditedHero({ ...editedHero, title: e.target.value })}
                      readOnly={editingHeroId !== hero._id}
                      className="w-full border border-gray-600 bg-gray-800 text-white px-4 py-2 rounded-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Description</label>
                    <textarea
                      rows={4}
                      value={editingHeroId === hero._id ? editedHero.desc : hero.desc}
                      onChange={(e) => editingHeroId === hero._id && setEditedHero({ ...editedHero, desc: e.target.value })}
                      readOnly={editingHeroId !== hero._id}
                      className="w-full border border-gray-600 bg-gray-800 text-white px-4 py-2 rounded-lg resize-none"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {heroes.length < 3 && (
            <div className="bg-gray-700 p-6 rounded-2xl">
              <h4 className="text-xl font-semibold mb-4">Add New Hero</h4>
              <div className="grid gap-4">
                <input
                  type="text"
                  value={newHero.title}
                  onChange={(e) => setNewHero({ ...newHero, title: e.target.value })}
                  placeholder="Enter title"
                  className="w-full border border-gray-600 bg-gray-800 text-white px-4 py-2 rounded-lg"
                />
                <textarea
                  rows={4}
                  value={newHero.desc}
                  onChange={(e) => setNewHero({ ...newHero, desc: e.target.value })}
                  placeholder="Enter description"
                  className="w-full border border-gray-600 bg-gray-800 text-white px-4 py-2 rounded-lg resize-none"
                />
                <button
                  onClick={handleAddHero}
                  disabled={isSubmitting}
                  className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded-lg text-white transition"
                >
                  {isSubmitting ? "Adding..." : "Add Hero"}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
