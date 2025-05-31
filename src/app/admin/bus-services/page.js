'use client'

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function BusServiceEditor() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const [services, setServices] = useState([]);
    const [newService, setNewService] = useState({ title: '', desc: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Track which service is being edited by ID
    const [editingServiceId, setEditingServiceId] = useState(null);
    // Temp state for edited service fields
    const [editedService, setEditedService] = useState({ title: '', desc: '' });

    const fetchServices = async (token) => {
        try {
            const res = await axios.get("http://localhost:4000/bus-services", {
                headers: { Authorization: `Bearer ${token}` },
            });
            setServices(res.data);
        } catch (err) {
            console.error("❌ Error fetching services:", err.message);
        }
    };

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            router.replace("/login");
            return;
        }

        axios.post("http://localhost:4000/verify-token", {}, {
            headers: { Authorization: `Bearer ${token}` }
        }).then(() => {
            setIsLoading(false);
            fetchServices(token);
        }).catch((err) => {
            console.error("❌ Token invalid:", err.response?.data || err.message);
            localStorage.removeItem("token");
            router.replace("/login");
        });
    }, [router]);

    const handleAddService = async () => {
        const token = localStorage.getItem("token");
        setIsSubmitting(true);
        try {
            const res = await axios.post("http://localhost:4000/bus-services", newService, {
                headers: { Authorization: `Bearer ${token}` },
            });
            // Refetch the entire updated list
            await fetchServices(token);
            setNewService({ title: '', desc: '' });
        } catch (err) {
            alert(err.response?.data?.error || "Error adding bus service");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleEditClick = (service) => {
        setEditingServiceId(service._id);
        setEditedService({ title: service.title, desc: service.desc });
    };

    const handleCancelEdit = () => {
        setEditingServiceId(null);
        setEditedService({ title: '', desc: '' });
    };

const handleSaveEdit = async (serviceId) => {
  const token = localStorage.getItem("token");
  if (!token) return;
  setIsSubmitting(true);
  try {
    await axios.put(`http://localhost:4000/bus-services/${serviceId}`, editedService, {
      headers: { Authorization: `Bearer ${token}` },
    });
    // Refetch fresh list
    await fetchServices(token);
    setEditingServiceId(null);
    setEditedService({ title: '', desc: '' });
  } catch (err) {
    alert(err.response?.data?.error || "Error updating bus service");
  } finally {
    setIsSubmitting(false);
  }
};


    const handleDelete = async (serviceId) => {
        const token = localStorage.getItem("token");
        if (!token) return;

        if (!confirm("Are you sure you want to delete this bus service?")) return;

        setIsSubmitting(true);
        try {
            await axios.delete(`http://localhost:4000/bus-services/${serviceId}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setServices((prev) => prev.filter((item) => item._id !== serviceId));
        } catch (err) {
            alert(err.response?.data?.error || "Error deleting bus service");
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

    // DEBUG: Log all service IDs to check for duplicates or missing keys
    console.log('Services IDs:', services.map(s => s._id));

    return (
        <div className="p-4 md:p-8 text-white bg-gray-900 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <div className="bg-gray-800 py-6 px-4 md:px-8 rounded-3xl shadow-xl">
                    <h3 className="font-semibold text-2xl md:text-3xl mb-6">Bus Services Editor</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
                        {services.map((service, index) => (
                            <div
                                key={service._id ?? index} // fallback to index if _id missing
                                className="bg-gray-900 border border-gray-700 p-6 rounded-2xl shadow-md flex flex-col justify-between"
                            >
                                <div className="flex justify-end gap-2 mb-4">
                                    {editingServiceId === service._id ? (
                                        <>
                                            <button
                                                onClick={() => handleSaveEdit(service._id)}
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
                                                onClick={() => handleEditClick(service)}
                                                className="bg-indigo-600 hover:bg-indigo-700 text-sm px-4 py-2 rounded-lg transition"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => handleDelete(service._id)}
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
                                            value={editingServiceId === service._id ? editedService.title : service.title}
                                            onChange={(e) => editingServiceId === service._id && setEditedService({ ...editedService, title: e.target.value })}
                                            readOnly={editingServiceId !== service._id}
                                            className="w-full border border-gray-600 bg-gray-800 text-white px-4 py-2 rounded-lg"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm text-gray-400 mb-1">Description</label>
                                        <textarea
                                            rows={4}
                                            value={editingServiceId === service._id ? editedService.desc : service.desc}
                                            onChange={(e) => editingServiceId === service._id && setEditedService({ ...editedService, desc: e.target.value })}
                                            readOnly={editingServiceId !== service._id}
                                            className="w-full border border-gray-600 bg-gray-800 text-white px-4 py-2 rounded-lg resize-none"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-gray-700 p-6 rounded-2xl">
                        <h4 className="text-xl font-semibold mb-4">Add New Bus Service</h4>
                        <div className="grid gap-4">
                            <input
                                type="text"
                                value={newService.title}
                                onChange={(e) => setNewService({ ...newService, title: e.target.value })}
                                placeholder="Enter title"
                                className="w-full border border-gray-600 bg-gray-800 text-white px-4 py-2 rounded-lg"
                            />
                            <textarea
                                rows={4}
                                value={newService.desc}
                                onChange={(e) => setNewService({ ...newService, desc: e.target.value })}
                                placeholder="Enter description"
                                className="w-full border border-gray-600 bg-gray-800 text-white px-4 py-2 rounded-lg resize-none"
                            />
                            <button
                                onClick={handleAddService}
                                disabled={isSubmitting}
                                className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded-lg text-white transition"
                            >
                                {isSubmitting ? "Adding..." : "Add Bus Service"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
