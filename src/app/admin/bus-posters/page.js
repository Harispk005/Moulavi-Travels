'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function BusPosterEditor() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const [posters, setPosters] = useState([]);
    const [newPoster, setNewPoster] = useState({ image: null, desc: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const fetchPosters = async (token) => {
        try {
            const res = await axios.get("https://moulavitravels-backend.onrender.com/bus-posters", {
                headers: { Authorization: `Bearer ${token}` },
            });
            setPosters(res.data);
        } catch (err) {
            console.error("❌ Error fetching posters:", err.message);
        }
    };

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
            fetchPosters(token);
        }).catch((err) => {
            console.error("❌ Token invalid:", err.response?.data || err.message);
            localStorage.removeItem("token");
            router.replace("/login");
        });
    }, [router]);

    const handleAddPoster = async () => {
        const token = localStorage.getItem("token");
        if (!newPoster.image || !newPoster.desc) return alert("Please provide an image and description");
        setIsSubmitting(true);

        try {
            const formData = new FormData();
            formData.append("image", newPoster.image);
            formData.append("desc", newPoster.desc);

            await axios.post("https://moulavitravels-backend.onrender.com/bus-posters", formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                },
            });

            setNewPoster({ image: null, desc: '' });
            await fetchPosters(token);
        } catch (err) {
            alert(err.response?.data?.error || "Error uploading poster");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleDeletePoster = async (id) => {
        const token = localStorage.getItem("token");
        if (!confirm("Are you sure you want to delete this poster?")) return;

        try {
            await axios.delete(`https://moulavitravels-backend.onrender.com/bus-posters/${id}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            await fetchPosters(token);
        } catch (err) {
            alert("Failed to delete poster");
            console.error(err);
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
                    <h3 className="font-semibold text-2xl md:text-3xl mb-6">Bus Posters Editor</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
                        {posters.map((poster, idx) => (
                            <div key={poster._id ?? idx} className="bg-gray-900 border border-gray-700 p-6 rounded-2xl shadow-md relative">
                                <img
                                    src={poster.image ?? ''}
                                    alt="Bus Poster"
                                    className="w-full h-48 object-cover rounded-lg mb-4"
                                />
                                <p className="text-gray-300 text-sm mb-3">{poster.desc}</p>
                                <button
                                    onClick={() => handleDeletePoster(poster._id)}
                                    className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white text-xs px-3 py-1 rounded"
                                >
                                    Delete
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="bg-gray-700 p-6 rounded-2xl">
                        <h4 className="text-xl font-semibold mb-4">Upload New Bus Poster</h4>
                        <div className="grid gap-4">
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => setNewPoster({ ...newPoster, image: e.target.files[0] })}
                                className="w-full border border-gray-600 bg-gray-800 text-white px-4 py-2 rounded-lg"
                            />
                            <textarea
                                rows={3}
                                value={newPoster.desc}
                                onChange={(e) => setNewPoster({ ...newPoster, desc: e.target.value })}
                                placeholder="Enter description"
                                className="w-full border border-gray-600 bg-gray-800 text-white px-4 py-2 rounded-lg resize-none"
                            />
                            <button
                                onClick={handleAddPoster}
                                disabled={isSubmitting}
                                className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded-lg text-white transition"
                            >
                                {isSubmitting ? "Uploading..." : "Upload Poster"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
