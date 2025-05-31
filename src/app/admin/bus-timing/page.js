'use client'

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function BusTimingEditor() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [timings, setTimings] = useState([]);
  const [newTiming, setNewTiming] = useState({
    route: '',
    destination: '',
    time: '',
    daysAvailable: '',
    status: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [editedTiming, setEditedTiming] = useState({
    route: '',
    destination: '',
    time: '',
    daysAvailable: '',
    status: '',
  });

  const fetchTimings = async () => {
    try {
      const res = await axios.get("http://localhost:4000/bus-timing");
      setTimings(res.data);
    } catch (err) {
      console.error("❌ Error fetching bus timings:", err.message);
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
      fetchTimings();
    }).catch((err) => {
      localStorage.removeItem("token");
      router.replace("/login");
    });
  }, [router]);

  const handleAddTiming = async () => {
    const token = localStorage.getItem("token");
    setIsSubmitting(true);
    try {
      await axios.post("http://localhost:4000/bus-timing", newTiming, {
        headers: { Authorization: `Bearer ${token}` },
      });
      await fetchTimings();
      setNewTiming({ route: '', destination: '', time: '', daysAvailable: '', status: '' });
    } catch (err) {
      alert("Error adding bus timing");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEditClick = (timing) => {
    setEditingId(timing._id);
    setEditedTiming({ ...timing });
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditedTiming({ route: '', destination: '', time: '', daysAvailable: '', status: '' });
  };

  const handleSaveEdit = async (id) => {
    const token = localStorage.getItem("token");
    setIsSubmitting(true);
    try {
      await axios.put(`http://localhost:4000/bus-timing/${id}`, editedTiming, {
        headers: { Authorization: `Bearer ${token}` },
      });
      await fetchTimings();
      handleCancelEdit();
    } catch (err) {
      alert("Error updating timing");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");
    if (!confirm("Are you sure you want to delete this timing?")) return;
    setIsSubmitting(true);
    try {
      await axios.delete(`http://localhost:4000/bus-timing/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTimings(prev => prev.filter(t => t._id !== id));
    } catch (err) {
      alert("Error deleting timing");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) return <p className="text-white">Loading...</p>;

  return (
<div className="p-4 md:p-8 text-white bg-gray-900 min-h-screen">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-2xl font-bold mb-6">Bus Timings Editor</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {timings.map((t) => (
        <div key={t._id} className="bg-gray-800 p-4 rounded-xl shadow">
          <div className="flex justify-end gap-2 mb-2">
            {editingId === t._id ? (
              <>
                <button onClick={() => handleSaveEdit(t._id)} disabled={isSubmitting} className="bg-green-600 px-3 py-1 rounded">Save</button>
                <button onClick={handleCancelEdit} disabled={isSubmitting} className="bg-gray-600 px-3 py-1 rounded">Cancel</button>
              </>
            ) : (
              <>
                <button onClick={() => handleEditClick(t)} className="bg-blue-600 px-3 py-1 rounded">Edit</button>
                <button onClick={() => handleDelete(t._id)} className="bg-red-600 px-3 py-1 rounded">Delete</button>
              </>
            )}
          </div>

          {/* Editable Fields */}
          {["route", "destination"].map(field => (
            <div key={field} className="mb-2">
              <label className="text-sm capitalize text-gray-400">{field}</label>
              <input
                type="text"
                value={editingId === t._id ? editedTiming[field] : t[field]}
                onChange={e => editingId === t._id && setEditedTiming({ ...editedTiming, [field]: e.target.value })}
                readOnly={editingId !== t._id}
                className="w-full bg-gray-900 text-white p-2 rounded border border-gray-600"
              />
            </div>
          ))}

          {/* Time */}
          <div className="mb-2">
            <label className="text-sm text-gray-400">Departure Time</label>
            <input
              type="time"
              value={editingId === t._id ? editedTiming.time : t.time}
              onChange={e => editingId === t._id && setEditedTiming({ ...editedTiming, time: e.target.value })}
              readOnly={editingId !== t._id}
              className="w-full bg-gray-900 text-white p-2 rounded border border-gray-600"
            />
          </div>

          {/* Days */}
          <div className="mb-2">
            <label className="text-sm text-gray-400">Days Available</label>
            <input
              type="number"
              min="1"
              value={editingId === t._id ? editedTiming.daysAvailable : t.daysAvailable}
              onChange={e => editingId === t._id && setEditedTiming({ ...editedTiming, daysAvailable: e.target.value })}
              readOnly={editingId !== t._id}
              className="w-full bg-gray-900 text-white p-2 rounded border border-gray-600"
            />
          </div>

          {/* Status as Radio */}
          <div className="mb-2">
            <label className="text-sm text-gray-400 block">Status</label>
            {editingId === t._id ? (
              <div className="flex gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name={`status-${t._id}`}
                    value="Available"
                    checked={editedTiming.status === "Available"}
                    onChange={() => setEditedTiming({ ...editedTiming, status: "Available" })}
                  />
                  Available
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name={`status-${t._id}`}
                    value="Not Available"
                    checked={editedTiming.status === "Not Available"}
                    onChange={() => setEditedTiming({ ...editedTiming, status: "Not Available" })}
                  />
                  Not Available
                </label>
              </div>
            ) : (
              <p>{t.status}</p>
            )}
          </div>
        </div>
      ))}
    </div>

    {/* Add Timing Section */}
    <div className="bg-gray-800 p-6 rounded-xl">
      <h3 className="text-xl font-semibold mb-4">Add New Timing</h3>
      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="text"
          value={newTiming.route}
          onChange={e => setNewTiming({ ...newTiming, route: e.target.value })}
          placeholder="Enter route"
          className="bg-gray-900 text-white p-2 rounded border border-gray-600"
        />
        <input
          type="text"
          value={newTiming.destination}
          onChange={e => setNewTiming({ ...newTiming, destination: e.target.value })}
          placeholder="Enter destination"
          className="bg-gray-900 text-white p-2 rounded border border-gray-600"
        />
        <input
          type="time"
          value={newTiming.time}
          onChange={e => setNewTiming({ ...newTiming, time: e.target.value })}
          className="bg-gray-900 text-white p-2 rounded border border-gray-600"
        />
        <input
          type="number"
          min="1"
          value={newTiming.daysAvailable}
          onChange={e => setNewTiming({ ...newTiming, daysAvailable: e.target.value })}
          placeholder="Days available"
          className="bg-gray-900 text-white p-2 rounded border border-gray-600"
        />

        {/* Status Radios */}
        <div className="col-span-full">
          <label className="text-sm text-gray-400 block mb-1">Status</label>
          <div className="flex gap-6">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="status"
                value="Available"
                checked={newTiming.status === "Available"}
                onChange={() => setNewTiming({ ...newTiming, status: "Available" })}
              />
              Available
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="status"
                value="Not Available"
                checked={newTiming.status === "Not Available"}
                onChange={() => setNewTiming({ ...newTiming, status: "Not Available" })}
              />
              Not Available
            </label>
          </div>
        </div>
      </div>

      <button onClick={handleAddTiming} disabled={isSubmitting} className="mt-6 bg-green-600 px-6 py-2 rounded">
        {isSubmitting ? "Adding..." : "Add Timing"}
      </button>
    </div>
  </div>
</div>

  );
}